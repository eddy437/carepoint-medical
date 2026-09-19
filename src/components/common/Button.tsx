import { Link } from "react-router-dom";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
  external?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  type = "button",
  className = "",
  disabled,
  ariaLabel,
  external,
}: ButtonProps) {
  const classes = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    ghost: "btn-ghost",
  }[variant];

  const full = `${classes} ${className}`;

  if (to) {
    return (
      <Link to={to} className={full} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={full}
        aria-label={ariaLabel}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={full}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}