import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  icon?: React.ReactNode;
}

export default function ImageWithFallback({
  src,
  alt,
  className = "",
  imgClassName = "",
  icon,
}: Props) {
  const [errored, setErrored] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-aqua ${className}`}>
      {!errored ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setErrored(true)}
          className={`w-full h-full object-cover ${imgClassName}`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-aqua via-white to-aqua text-teal/70">
          <div className="pattern-dots absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative flex flex-col items-center gap-1.5 text-center px-4">
            {icon}
            <span className="font-manrope font-semibold text-xs uppercase tracking-widest">
              CarePoint
            </span>
          </div>
        </div>
      )}
    </div>
  );
}