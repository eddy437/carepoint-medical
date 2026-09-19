import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Logo from "../common/Logo";
import { CONTACT_INFO } from "../../data/config";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Doctors", to: "/doctors" },
  { label: "Departments", to: "/departments" },
  { label: "Appointments", to: "/appointments" },
  { label: "Contact", to: "/contact" },
];

const resources = [
  { label: "Patient Portal", to: "/contact" },
  { label: "Insurance & Billing", to: "/contact" },
  { label: "Visitor Information", to: "/contact" },
  { label: "FAQs", to: "/contact" },
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80 mt-20">
      <div className="container-content py-14 lg:py-16">
        <div className="grid gap-10 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-xs">
              Compassionate care. Advanced medicine. Serving our community with
              trusted healthcare for over 25 years.
            </p>
            <div className="flex gap-2 mt-5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-white/15 hover:bg-teal hover:border-teal transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-manrope font-bold text-white text-base mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="hover:text-aqua transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-manrope font-bold text-white text-base mb-4">
              Patient Resources
            </h3>
            <ul className="space-y-2.5 text-sm">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="hover:text-aqua transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-manrope font-bold text-white text-base mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2.5">
                <MapPin className="w-4 h-4 text-teal shrink-0 mt-0.5" aria-hidden="true" />
                <span>123 Healthcare Avenue<br />Boston, MA 02110</span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="w-4 h-4 text-teal shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="hover:text-aqua transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="w-4 h-4 text-teal shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-aqua transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs">
          <p className="text-white/60">
            © 2026 CarePoint Medical. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-white/60">
            <Link to="/contact" className="hover:text-aqua transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-aqua transition-colors">
              Terms of Use
            </Link>
            <Link to="/contact" className="hover:text-aqua transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}