import { CalendarCheck, Search, Building2, Siren } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const actions = [
  {
    icon: CalendarCheck,
    title: "Book an Appointment",
    description: "Schedule a visit with our specialists.",
    to: "/appointments",
  },
  {
    icon: Search,
    title: "Find a Doctor",
    description: "Browse physicians by specialty.",
    to: "/doctors",
  },
  {
    icon: Building2,
    title: "Our Departments",
    description: "Explore our medical services.",
    to: "/departments",
  },
  {
    icon: Siren,
    title: "Emergency Care",
    description: "24/7 urgent medical assistance.",
    to: "/emergency",
  },
];

export default function QuickActions() {
  return (
    <section className="bg-warm border-y border-line">
      <div className="container-content py-10 lg:py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {actions.map((action, i) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={action.to}
                className="card-hover group flex flex-col gap-3 p-5 lg:p-6 h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
              >
                <span className="w-11 h-11 rounded-xl bg-aqua text-teal inline-flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-colors">
                  <action.icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-manrope font-bold text-navy text-base group-hover:text-teal transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-muted text-sm mt-1 leading-relaxed">
                    {action.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}