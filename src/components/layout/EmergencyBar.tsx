import { Phone, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT_INFO } from "../../data/config";

export default function EmergencyBar() {
  return (
    <div className="bg-navy text-white text-xs sm:text-sm">
      <div className="container-content flex items-center justify-between gap-3 py-2">
        <div className="flex items-center gap-2 min-w-0">
          <AlertCircle className="w-4 h-4 text-emergency shrink-0" aria-hidden="true" />
          <span className="font-dm truncate">
            <span className="hidden sm:inline">Emergency? We're here 24/7 — </span>
            <span className="sm:hidden">24/7 Emergency — </span>
          </span>
          <a
            href={CONTACT_INFO.phoneHref}
            className="font-manrope font-semibold hover:text-aqua transition-colors whitespace-nowrap underline-offset-2 hover:underline"
          >
            {CONTACT_INFO.phone}
          </a>
        </div>
        <Link
          to="/emergency"
          className="hidden md:inline-flex items-center gap-1.5 font-manrope font-semibold hover:text-aqua transition-colors"
        >
          <Phone className="w-3.5 h-3.5" aria-hidden="true" />
          Emergency Info
        </Link>
      </div>
    </div>
  );
}