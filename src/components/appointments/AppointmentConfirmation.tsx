import { CheckCircle2, CalendarCheck, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { CONTACT_INFO } from "../../data/config";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "../../utils/whatsapp";

interface Props {
  name: string;
  date: string;
  time: string;
  department: string;
}

export default function AppointmentConfirmation({
  name,
  date,
  time,
  department,
}: Props) {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.appointment);

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card-base bg-white p-6 sm:p-10 text-center">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-success/10 text-success inline-flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
        </div>
        <h1 className="mt-6 font-manrope font-extrabold text-2xl sm:text-3xl text-navy">
          Appointment Request Received
        </h1>
        <p className="mt-3 text-muted text-base leading-relaxed">
          Thank you, <span className="font-semibold text-navy">{name}</span>.
          Your appointment request has been submitted.
        </p>
        <p className="mt-2 text-muted text-sm">
          We'll contact you shortly to confirm your appointment.
        </p>

        <dl className="mt-8 grid gap-3 sm:grid-cols-2 text-left">
          <Detail label="Department" value={department} />
          <Detail label="Preferred Date" value={formattedDate} />
          <Detail label="Preferred Time" value={time} />
          <Detail label="Status" value="Pending confirmation" highlight />
        </dl>

        <div className="mt-8 pt-6 border-t border-line">
          <p className="text-muted text-xs mb-4 leading-relaxed">
            This is a frontend demo. No actual appointment has been booked.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/" variant="secondary">
              Back to Home
            </Button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#25D366] hover:bg-[#1DA851] text-white px-5 py-3"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Follow up on WhatsApp
            </a>
            <a
              href={CONTACT_INFO.phoneHref}
              className="btn-outline"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call clinic
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-muted text-xs">
        <CalendarCheck className="w-3.5 h-3.5" aria-hidden="true" />
        Your request is saved. Please wait for confirmation.
      </div>
      <div className="mt-3 text-center">
        <Link
          to="/doctors"
          className="font-manrope font-semibold text-sm text-teal hover:text-teal-dark transition-colors"
        >
          Browse our doctors →
        </Link>
      </div>
    </div>
  );
}

function Detail({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="card-base !rounded-xl p-4 bg-warm">
      <dt className="text-muted text-xs uppercase tracking-wider font-manrope font-semibold">
        {label}
      </dt>
      <dd
        className={`mt-1 font-manrope font-semibold text-sm ${
          highlight ? "text-success" : "text-navy"
        }`}
      >
        {value || "—"}
      </dd>
    </div>
  );
}