import { Link } from "react-router-dom";
import { HeartPulse } from "lucide-react";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-lg p-1"
      aria-label="CarePoint Medical — Home"
    >
      <span className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-navy text-white group-hover:bg-teal transition-colors">
        <HeartPulse className="w-5 h-5" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-manrope font-extrabold text-[1.05rem] tracking-tight ${
            light ? "text-white" : "text-navy"
          }`}
        >
          CarePoint
        </span>
        <span
          className={`font-dm text-[0.7rem] tracking-[0.14em] uppercase ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          Medical
        </span>
      </span>
    </Link>
  );
}