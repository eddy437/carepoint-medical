import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../common/Logo";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "../../utils/whatsapp";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Doctors", to: "/doctors" },
  { label: "Departments", to: "/departments" },
  { label: "Appointments", to: "/appointments" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.appointment);

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "border-b border-line shadow-soft" : "border-b border-transparent"
      }`}
    >
      <div className="container-content flex items-center justify-between h-16 lg:h-20 gap-4">
        <Logo />

        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-1"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative px-3.5 py-2 font-manrope font-semibold text-sm rounded-lg transition-colors ${
                  isActive
                    ? "text-teal"
                    : "text-navy/80 hover:text-navy hover:bg-aqua/60"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-3.5 right-3.5 h-0.5 bg-teal rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg font-manrope font-semibold text-sm text-[#1DA851] hover:bg-[#25D366]/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
            aria-label="Chat with CarePoint Medical on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            WhatsApp
          </a>
          <Link to="/appointments" className="btn-primary !py-2.5 !px-4 !text-sm">
            Book Appointment
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-line text-navy hover:bg-aqua transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden overflow-hidden border-t border-line bg-white"
          >
            <nav
              aria-label="Mobile navigation"
              className="container-content py-4 flex flex-col gap-1"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl font-manrope font-semibold text-base transition-colors ${
                      isActive
                        ? "bg-aqua text-teal"
                        : "text-navy hover:bg-aqua/50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex flex-col gap-2 pt-3 border-t border-line mt-2">
                <Link to="/appointments" className="btn-primary w-full">
                  Book Appointment
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full bg-[#25D366] hover:bg-[#1DA851] text-white px-5 py-3"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}