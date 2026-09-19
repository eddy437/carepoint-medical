import { Calendar } from "lucide-react";

interface Props {
  value: string;
  onChange: (v: string) => void;
  id?: string;
  error?: string;
}

export default function DatePicker({ value, onChange, id = "date", error }: Props) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <label htmlFor={id} className="field-label">
        Preferred Date <span className="text-emergency">*</span>
      </label>
      <div className="relative">
        <Calendar
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none"
          aria-hidden="true"
        />
        <input
          id={id}
          type="date"
          value={value}
          min={today}
          onChange={(e) => onChange(e.target.value)}
          className="input-base !pl-10"
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-emergency text-xs">
          {error}
        </p>
      )}
    </div>
  );
}