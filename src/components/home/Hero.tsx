import { motion } from "framer-motion";
import { CalendarCheck, Users, ShieldCheck, Clock, MessageCircle } from "lucide-react";
import Button from "../common/Button";
import ImageWithFallback from "../common/ImageWithFallback";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "../../utils/whatsapp";

export default function Hero() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.appointment);

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 pattern-grid opacity-40 pointer-events-none"
        aria-hidden="true"
      />
      <div className="container-content relative py-14 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-aqua text-teal font-manrope font-bold text-[0.7rem] tracking-[0.16em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              Care Without Compromise
            </span>

            <h1 className="mt-5 font-manrope font-extrabold text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.05] text-navy">
              Better Care.
              <br />
              <span className="text-teal">Closer to You.</span>
            </h1>

            <p className="mt-5 max-w-xl text-muted text-base sm:text-lg leading-relaxed">
              Comprehensive medical care delivered by experienced physicians,
              advanced technology, and a team that puts your wellbeing first.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button to="/appointments" variant="primary">
                <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                Book an Appointment
              </Button>
              <Button to="/doctors" variant="outline">
                <Users className="w-4 h-4" aria-hidden="true" />
                Meet Our Doctors
              </Button>
            </div>

            <div className="mt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-manrope font-semibold text-sm text-[#1DA851] hover:text-[#168C8C] transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <dt className="sr-only">Years of service</dt>
                <dd className="font-manrope font-extrabold text-2xl text-navy">
                  25+
                </dd>
                <p className="text-muted text-xs mt-0.5 leading-snug">
                  Years of care
                </p>
              </div>
              <div className="border-l border-line pl-4">
                <dt className="sr-only">Specialists</dt>
                <dd className="font-manrope font-extrabold text-2xl text-navy">
                  50+
                </dd>
                <p className="text-muted text-xs mt-0.5 leading-snug">
                  Specialists
                </p>
              </div>
              <div className="border-l border-line pl-4">
                <dt className="sr-only">Patients served</dt>
                <dd className="font-manrope font-extrabold text-2xl text-navy">
                  100K+
                </dd>
                <p className="text-muted text-xs mt-0.5 leading-snug">
                  Patients served
                </p>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-6 xl:col-span-6 relative"
          >
            <div className="relative">
              <ImageWithFallback
                src="/images/hero.jpg"
                alt="Medical team at CarePoint Medical providing compassionate patient care"
                className="aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5] rounded-[28px] shadow-lift"
                imgClassName="transition-transform duration-[1200ms] ease-out hover:scale-105"
                icon={<ShieldCheck className="w-8 h-8" aria-hidden="true" />}
              />

              <div className="absolute top-5 left-5 sm:top-6 sm:left-6 bg-white/95 backdrop-blur rounded-2xl border border-line shadow-soft px-4 py-3 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-emergency/10 text-emergency inline-flex items-center justify-center">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-manrope font-bold text-sm text-navy leading-tight">
                    24/7 Emergency
                  </p>
                  <p className="text-muted text-[0.7rem] leading-tight">
                    Always available
                  </p>
                </div>
              </div>

              <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 bg-navy text-white rounded-2xl shadow-lift px-5 py-4 max-w-[200px]">
                <p className="font-manrope font-extrabold text-3xl leading-none">
                  25+
                </p>
                <p className="font-dm text-white/80 text-xs mt-1.5 leading-snug">
                  Years of Trusted Care
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}