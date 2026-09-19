import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: Props) {
  const alignment =
    align === "center" ? "text-center items-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col max-w-2xl ${alignment} ${className}`}
    >
      {eyebrow && <span className="label-eyebrow mb-3">{eyebrow}</span>}
      <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.15] text-navy">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}