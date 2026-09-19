import { Link } from "react-router-dom";
import { Award, CalendarCheck, MessageCircle, ArrowRight } from "lucide-react";
import { Doctor } from "../../types/doctor";
import ImageWithFallback from "../common/ImageWithFallback";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "../../utils/whatsapp";

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.doctor(doctor.name));

  return (
    <article className="card-hover overflow-hidden flex flex-col">
      <div className="relative">
        <ImageWithFallback
          src={doctor.image}
          alt={`Portrait of ${doctor.name}, ${doctor.specialty}`}
          className="aspect-[4/5]"
          imgClassName="transition-transform duration-700 hover:scale-105"
        />
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur text-navy font-manrope font-semibold text-xs">
          <Award className="w-3.5 h-3.5 text-teal" aria-hidden="true" />
          {doctor.experience} yrs exp
        </span>
      </div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <span className="label-eyebrow !text-xs">{doctor.department}</span>
        <h3 className="mt-2 font-manrope font-bold text-lg text-navy">
          <Link
            to={`/doctors/${doctor.id}`}
            className="hover:text-teal transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
          >
            {doctor.name}
          </Link>
        </h3>
        <p className="text-teal text-sm font-manrope font-semibold mt-0.5">
          {doctor.specialty}
        </p>
        <p className="mt-3 text-muted text-sm leading-relaxed line-clamp-2 flex-1">
          {doctor.bio}
        </p>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Link
            to={`/doctors/${doctor.id}`}
            className="btn-outline !py-2.5 !px-3 !text-xs justify-center"
          >
            View Profile
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
          <Link
            to={`/appointments?doctor=${doctor.id}`}
            className="btn-primary !py-2.5 !px-3 !text-xs justify-center"
          >
            <CalendarCheck className="w-3.5 h-3.5" aria-hidden="true" />
            Book
          </Link>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center justify-center gap-1.5 text-[#1DA851] hover:text-teal font-manrope font-semibold text-xs transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
          Ask about {doctor.name.split(" ")[1] ?? doctor.name} on WhatsApp
        </a>
      </div>
    </article>
  );
}