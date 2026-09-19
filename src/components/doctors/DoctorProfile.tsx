import {
  Award,
  Briefcase,
  GraduationCap,
  Languages,
  CalendarCheck,
  MessageCircle,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { Doctor } from "../../types/doctor";
import Button from "../common/Button";
import ImageWithFallback from "../common/ImageWithFallback";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "../../utils/whatsapp";
import { Link } from "react-router-dom";

export default function DoctorProfile({ doctor }: { doctor: Doctor }) {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.doctor(doctor.name));

  return (
    <div>
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5">
          <ImageWithFallback
            src={doctor.image}
            alt={`Portrait of ${doctor.name}`}
            className="aspect-[4/5] rounded-3xl shadow-soft"
            icon={<ShieldCheck className="w-8 h-8" aria-hidden="true" />}
          />

          <div className="card-base p-5 mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-teal" aria-hidden="true" />
              <div>
                <p className="font-manrope font-semibold text-sm text-navy">
                  Consultation Hours
                </p>
                <p className="text-muted text-sm">{doctor.consultationHours}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CalendarCheck className="w-4 h-4 text-teal" aria-hidden="true" />
              <div>
                <p className="font-manrope font-semibold text-sm text-navy">
                  Available
                </p>
                <p className="text-muted text-sm">{doctor.availability}</p>
              </div>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <Button to={`/appointments?doctor=${doctor.id}`} variant="primary" className="w-full">
                <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                Book Appointment
              </Button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full bg-[#25D366] hover:bg-[#1DA851] text-white px-5 py-3"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                WhatsApp About This Doctor
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="label-eyebrow">{doctor.department}</span>
          <h1 className="mt-3 font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-navy">
            {doctor.name}
          </h1>
          <p className="mt-2 font-manrope font-semibold text-teal text-lg">
            {doctor.specialty}
          </p>

          <p className="mt-6 text-muted text-base leading-relaxed">
            {doctor.bio}
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <StatCard
              icon={Briefcase}
              value={`${doctor.experience}+`}
              label="Years experience"
            />
            <StatCard
              icon={Languages}
              value={String(doctor.languages.length)}
              label="Languages spoken"
            />
            <StatCard
              icon={Award}
              value={String(doctor.certifications.length)}
              label="Board certifications"
            />
          </div>

          <Section
            icon={GraduationCap}
            title="Education & Training"
            items={doctor.education}
          />
          <Section
            icon={Award}
            title="Certifications"
            items={doctor.certifications}
          />
          <Section
            icon={Languages}
            title="Languages"
            items={doctor.languages}
            inline
          />

          <div className="mt-8 pt-6 border-t border-line">
            <Link
              to="/doctors"
              className="inline-flex items-center gap-1.5 font-manrope font-semibold text-sm text-teal hover:text-teal-dark transition-colors"
            >
              ← Back to all doctors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Briefcase;
  value: string;
  label: string;
}) {
  return (
    <div className="card-base p-4">
      <Icon className="w-4 h-4 text-teal" aria-hidden="true" />
      <p className="mt-3 font-manrope font-extrabold text-2xl text-navy">
        {value}
      </p>
      <p className="text-muted text-xs mt-0.5">{label}</p>
    </div>
  );
}

function Section({
  icon: Icon,
  title,
  items,
  inline = false,
}: {
  icon: typeof Briefcase;
  title: string;
  items: string[];
  inline?: boolean;
}) {
  return (
    <section className="mt-8">
      <h2 className="flex items-center gap-2 font-manrope font-bold text-navy text-base">
        <Icon className="w-4 h-4 text-teal" aria-hidden="true" />
        {title}
      </h2>
      {inline ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {items.map((item) => (
            <li
              key={item}
              className="px-3 py-1.5 rounded-full bg-aqua text-teal font-manrope font-semibold text-xs"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-3 space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-muted text-sm leading-relaxed"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}