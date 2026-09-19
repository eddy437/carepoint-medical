import { Quote } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { testimonials } from "../../data/testimonials";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="bg-warm border-y border-line">
      <div className="container-content py-20 lg:py-28">
        <SectionHeading
          eyebrow="Patient Stories"
          title="Trusted by families in our community."
          align="center"
          className="mb-12"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-base bg-white p-6 lg:p-7 flex flex-col"
            >
              <Quote
                className="w-7 h-7 text-aqua fill-aqua"
                aria-hidden="true"
              />
              <blockquote className="mt-4 text-ink text-[0.95rem] leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-line">
                <p className="font-manrope font-bold text-navy text-sm">
                  {t.name}
                </p>
                <p className="text-muted text-xs mt-0.5">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}