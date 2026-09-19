import {
  UserCheck,
  Cpu,
  HeartHandshake,
  Siren,
  Users,
  Home,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: UserCheck,
    title: "Experienced Specialists",
    text: "Board-certified physicians across multiple specialties.",
  },
  {
    icon: Cpu,
    title: "Advanced Technology",
    text: "Modern diagnostic and treatment equipment.",
  },
  {
    icon: HeartHandshake,
    title: "Patient First",
    text: "Every decision starts with your wellbeing.",
  },
  {
    icon: Siren,
    title: "24/7 Emergency Care",
    text: "Support when you need it most.",
  },
  {
    icon: Users,
    title: "Coordinated Care",
    text: "Your healthcare team works together.",
  },
  {
    icon: Home,
    title: "Comfortable Environment",
    text: "A calm and welcoming facility.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-navy text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pattern-grid pointer-events-none"
        aria-hidden="true"
      />
      <div className="container-content py-20 lg:py-28 relative">
        <div className="max-w-2xl mb-14">
          <span className="label-eyebrow !text-aqua">Why CarePoint</span>
          <h2 className="mt-3 font-manrope font-extrabold text-3xl sm:text-4xl lg:text-[2.5rem] leading-tight text-white">
            Care that goes beyond treatment.
          </h2>
          <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
            Every aspect of our facility and our team is designed around one
            goal: delivering healthcare you can genuinely trust.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex gap-4"
            >
              <span className="w-11 h-11 shrink-0 rounded-xl bg-white/10 border border-white/10 text-aqua inline-flex items-center justify-center">
                <b.icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-manrope font-bold text-white text-base">
                  {b.title}
                </h3>
                <p className="text-white/65 text-sm mt-1.5 leading-relaxed">
                  {b.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}