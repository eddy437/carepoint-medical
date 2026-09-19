import { useSearchParams } from "react-router-dom";
import { CalendarCheck, Phone, MessageCircle, Clock } from "lucide-react";
import AppointmentForm from "../components/appointments/AppointmentForm";
import { CONTACT_INFO } from "../data/config";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "../utils/whatsapp";
import { useDocumentTitle } from "../utils/useDocumentTitle";

export default function Appointments() {
  useDocumentTitle(
    "Book an Appointment | CarePoint Medical",
    "Schedule an appointment with our experienced specialists."
  );

  const [params] = useSearchParams();
  const doctorId = params.get("doctor") ?? "";
  const department = params.get("department") ?? "";

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.appointment);

  return (
    <div>
      <section className="bg-white border-b border-line">
        <div className="container-content py-14 lg:py-20">
          <span className="label-eyebrow">Appointments</span>
          <h1 className="mt-3 font-manrope font-extrabold text-4xl sm:text-5xl text-navy leading-tight max-w-3xl">
            Book your appointment.
          </h1>
          <p className="mt-4 text-muted text-lg max-w-2xl leading-relaxed">
            Fill out the form below and our team will contact you to confirm
            your appointment.
          </p>
        </div>
      </section>

      <section className="bg-warm">
        <div className="container-content py-12 lg:py-16">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <AppointmentForm
                preselectedDoctor={doctorId}
                preselectedDepartment={department}
              />
            </div>

            <aside className="lg:col-span-4 space-y-4">
              <div className="card-base bg-white p-6">
                <div className="w-10 h-10 rounded-xl bg-aqua text-teal inline-flex items-center justify-center">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </div>
                <h2 className="mt-4 font-manrope font-bold text-navy text-base">
                  Appointment hours
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li className="flex justify-between">
                    <span>Mon – Fri</span>
                    <span className="font-semibold text-navy">8:00 AM – 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold text-navy">9:00 AM – 3:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold text-navy">Emergency only</span>
                  </li>
                </ul>
              </div>

              <div className="card-base bg-white p-6">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#1DA851] inline-flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                </div>
                <h2 className="mt-4 font-manrope font-bold text-navy text-base">
                  Prefer WhatsApp?
                </h2>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  Have a question before booking? Chat directly with our
                  scheduling team.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 btn bg-[#25D366] hover:bg-[#1DA851] text-white px-5 py-3 w-full"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Chat with our team
                </a>
              </div>

              <div className="card-base bg-white p-6">
                <div className="w-10 h-10 rounded-xl bg-navy/5 text-navy inline-flex items-center justify-center">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <h2 className="mt-4 font-manrope font-bold text-navy text-base">
                  Prefer to call?
                </h2>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  Our scheduling team is available during business hours.
                </p>
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="mt-4 btn-secondary w-full"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  {CONTACT_INFO.phone}
                </a>
              </div>

              <div className="card-base bg-white p-6">
                <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal inline-flex items-center justify-center">
                  <CalendarCheck className="w-5 h-5" aria-hidden="true" />
                </div>
                <h2 className="mt-4 font-manrope font-bold text-navy text-base">
                  What to expect
                </h2>
                <ol className="mt-3 space-y-2 text-sm text-muted">
                  <li>1. Submit your request</li>
                  <li>2. Our team calls to confirm</li>
                  <li>3. Receive preparation guidance</li>
                  <li>4. Visit us at your scheduled time</li>
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}