import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function ContactCard({
  icon: Icon,
  title,
  children,
  className = "",
}: Props) {
  return (
    <div className={`card-base p-6 ${className}`}>
      <div className="w-11 h-11 rounded-xl bg-aqua flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-teal" aria-hidden="true" />
      </div>
      <h3 className="font-manrope font-bold text-lg text-navy mb-2">{title}</h3>
      <div className="text-muted text-sm leading-relaxed">{children}</div>
    </div>
  );
}