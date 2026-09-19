import { CalendarCheck, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT_INFO } from "../../data/config";
import { motion } from "framer-motion";

export default function AppointmentCTA() {
  return (
    <section className="bg-white">
      <div className="container-content py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-teal-dark px-6 sm:px-10 lg:px-16 py-12 lg:py-16"
        >
          <div
            className="absolute inset-0 opacity-[0.07] pattern-dots pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            <div className="flex-1">
              <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl leading-tight text-white">
                Your health deserves your attention.
              </h2>
              <p className="mt-4 text-white/75 text-base sm:text-lg leading-relaxed max-w-xl">
                Schedule an appointment with one of our experienced
                specialists. We'll confirm your appointment promptly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link
                to="/appointments"
                className="btn bg-white text-navy px-6 py-3.5 hover:bg-aqua hover:-translate-y-0.5"
              >
                <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                Book an Appointment
              </Link>
              <a
                href={CONTACT_INFO.phoneHref}
                className="btn border border-white/30 text-white px-6 py-3.5 hover:bg-white/10"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}