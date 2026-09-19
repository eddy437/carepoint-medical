import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Button from "../common/Button";
import ImageWithFallback from "../common/ImageWithFallback";

const stats = [
  { value: "25+", label: "Years of Experience" },
  { value: "50+", label: "Specialists" },
  { value: "100K+", label: "Patients Served" },
];

export default function AboutPreview() {
  return (
    <section className="bg-white">
      <div className="container-content py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <ImageWithFallback
              src="/images/facility.jpg"
              alt="CarePoint Medical modern facility exterior and patient spaces"
              className="aspect-[4/3] rounded-3xl shadow-soft"
              icon={<ShieldCheck className="w-8 h-8" aria-hidden="true" />}
            />
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-teal text-white rounded-2xl px-6 py-4 shadow-lift">
              <p className="font-manrope font-extrabold text-2xl leading-none">
                A+
              </p>
              <p className="text-white/85 text-xs mt-1">Accredited care</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-eyebrow">About CarePoint</span>
            <h2 className="mt-3 font-manrope font-extrabold text-3xl sm:text-4xl lg:text-[2.5rem] leading-tight text-navy">
              Medicine built around people.
            </h2>
            <p className="mt-5 text-muted text-base sm:text-lg leading-relaxed">
              For over two decades, CarePoint Medical has provided trusted
              healthcare to families across our region. We combine advanced
              clinical expertise with a genuinely human approach — because we
              believe great medicine starts with listening.
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-l-2 border-aqua pl-3 sm:pl-4"
                >
                  <dd className="font-manrope font-extrabold text-2xl sm:text-3xl text-navy">
                    {stat.value}
                  </dd>
                  <dt className="text-muted text-xs sm:text-sm mt-1 leading-snug">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <Button to="/about" variant="secondary">
                Learn About CarePoint
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}