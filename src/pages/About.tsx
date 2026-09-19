import {
  HeartHandshake,
  Award,
  ShieldCheck,
  Lightbulb,
  Users,
  HandHeart,
} from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import ImageWithFallback from "../components/common/ImageWithFallback";
import { useDocumentTitle } from "../utils/useDocumentTitle";
import { motion } from "framer-motion";

const values = [
  { icon: HeartHandshake, title: "Compassion", text: "We treat every patient with warmth and dignity." },
  { icon: Award, title: "Excellence", text: "We hold ourselves to the highest clinical standards." },
  { icon: ShieldCheck, title: "Integrity", text: "We are honest, transparent, and accountable." },
  { icon: Lightbulb, title: "Innovation", text: "We embrace technology that improves outcomes." },
  { icon: Users, title: "Collaboration", text: "We work as one team, across every specialty." },
  { icon: HandHeart, title: "Respect", text: "We honor each patient's unique needs and choices." },
];

const stats = [
  { value: "25+", label: "Years" },
  { value: "50+", label: "Specialists" },
  { value: "12", label: "Departments" },
  { value: "100K+", label: "Patients" },
];

export default function About() {
  useDocumentTitle(
    "About | CarePoint Medical",
    "Learn about CarePoint Medical's history, mission, vision, and values."
  );

  return (
    <div>
      <section className="bg-white border-b border-line">
        <div className="container-content py-14 lg:py-20">
          <span className="label-eyebrow">About Us</span>
          <h1 className="mt-3 font-manrope font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight text-navy max-w-3xl">
            About CarePoint Medical
          </h1>
          <p className="mt-4 text-muted text-lg max-w-2xl leading-relaxed">
            A private medical center built around people, powered by modern
            medicine.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-content py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Two decades of trusted healthcare."
              />
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  CarePoint Medical began in 2001 as a small family practice
                  with a simple mission: provide exceptional medical care
                  without losing sight of the person in front of us.
                </p>
                <p>
                  Over the years, we've grown into a full-service medical center
                  with 12 departments and over 50 specialists — while preserving
                  the warmth and personal attention that defined our earliest
                  days.
                </p>
                <p>
                  Today, CarePoint serves more than 100,000 patients across our
                  region, combining advanced diagnostic technology with
                  coordinated, patient-centered care.
                </p>
              </div>
            </div>
            <ImageWithFallback
              src="/images/facility.jpg"
              alt="CarePoint Medical facility"
              className="aspect-[4/3] rounded-3xl shadow-soft"
              icon={<ShieldCheck className="w-8 h-8" aria-hidden="true" />}
            />
          </div>
        </div>
      </section>

      <section className="bg-warm border-y border-line">
        <div className="container-content py-16 lg:py-24 grid md:grid-cols-2 gap-8">
          <div className="card-base bg-white p-6 lg:p-8">
            <span className="label-eyebrow">Our Mission</span>
            <h2 className="mt-3 font-manrope font-extrabold text-2xl lg:text-3xl text-navy leading-tight">
              To make high-quality healthcare more personal, accessible, and
              compassionate.
            </h2>
          </div>
          <div className="card-base bg-white p-6 lg:p-8">
            <span className="label-eyebrow">Our Vision</span>
            <h2 className="mt-3 font-manrope font-extrabold text-2xl lg:text-3xl text-navy leading-tight">
              To be the most trusted medical center in our community — where
              patients feel known, heard, and cared for.
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-content py-16 lg:py-24">
          <SectionHeading
            eyebrow="Our Values"
            title="The principles that guide our care."
            align="center"
            className="mb-12"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card-base p-6"
              >
                <span className="w-11 h-11 rounded-xl bg-aqua text-teal inline-flex items-center justify-center">
                  <v.icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-manrope font-bold text-navy text-lg">
                  {v.title}
                </h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  {v.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warm border-y border-line">
        <div className="container-content py-14 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-manrope font-extrabold text-3xl lg:text-4xl text-navy">
                  {s.value}
                </p>
                <p className="text-muted text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-content py-16 lg:py-24 text-center">
          <SectionHeading
            title="Experience the CarePoint difference."
            align="center"
            description="Our team is ready to help. Book an appointment or reach out with any questions."
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/appointments">Book an Appointment</Button>
            <Button to="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}