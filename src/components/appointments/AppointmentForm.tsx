import { FormEvent, useMemo, useState } from "react";
import { MessageCircle, Send, AlertCircle } from "lucide-react";
import { doctors, departmentsList } from "../../data/doctors";
import { departments } from "../../data/departments";
import { AppointmentFormData } from "../../types/appointment";
import DatePicker from "./DatePicker";
import AppointmentConfirmation from "./AppointmentConfirmation";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "../../utils/whatsapp";

const TIME_SLOTS = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const initialData: AppointmentFormData = {
  fullName: "",
  email: "",
  phone: "",
  department: "",
  doctor: "",
  date: "",
  time: "",
  reason: "",
};

interface Props {
  preselectedDoctor?: string;
  preselectedDepartment?: string;
}

export default function AppointmentForm({
  preselectedDoctor = "",
  preselectedDepartment = "",
}: Props) {
  const [data, setData] = useState<AppointmentFormData>({
    ...initialData,
    doctor: preselectedDoctor,
    department:
      preselectedDepartment ||
      doctors.find((d) => d.id === preselectedDoctor)?.department ||
      "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const availableDoctors = useMemo(() => {
    if (!data.department) return doctors;
    return doctors.filter((d) => d.department === data.department);
  }, [data.department]);

  const update = (field: keyof AppointmentFormData, value: string) => {
    setData((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "department") next.doctor = "";
      return next;
    });
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof AppointmentFormData, string>> = {};
    if (!data.fullName.trim()) e.fullName = "Please enter your full name.";
    if (!data.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = "Please enter a valid email address.";
    if (!data.phone.trim()) e.phone = "Please enter your phone number.";
    else if (data.phone.replace(/\D/g, "").length < 7)
      e.phone = "Please enter a valid phone number.";
    if (!data.department) e.department = "Please select a department.";
    if (!data.date) e.date = "Please select a preferred date.";
    if (!data.time) e.time = "Please select a preferred time.";
    if (!data.reason.trim()) e.reason = "Please briefly describe your reason for visit.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const firstError = document.querySelector('[aria-invalid="true"]');
      (firstError as HTMLElement | null)?.focus();
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <AppointmentConfirmation
        name={data.fullName.split(" ")[0]}
        date={data.date}
        time={data.time}
        department={data.department}
      />
    );
  }

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.appointment);

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="card-base bg-white p-5 sm:p-7 lg:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          id="fullName"
          required
          error={errors.fullName}
        >
          <input
            id="fullName"
            type="text"
            value={data.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            placeholder="Jane Doe"
            className="input-base"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
        </Field>

        <Field label="Email" id="email" required error={errors.email}>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="jane@example.com"
            className="input-base"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>

        <Field label="Phone" id="phone" required error={errors.phone}>
          <input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+1 (555) 123-4567"
            className="input-base"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </Field>

        <Field
          label="Department"
          id="department"
          required
          error={errors.department}
        >
          <select
            id="department"
            value={data.department}
            onChange={(e) => update("department", e.target.value)}
            className="input-base appearance-none bg-white"
            aria-invalid={!!errors.department}
            aria-describedby={errors.department ? "department-error" : undefined}
          >
            <option value="">Select a department</option>
            {(departmentsList.length ? departmentsList : departments.map((d) => d.name)).map(
              (d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              )
            )}
          </select>
        </Field>

        <Field label="Doctor (optional)" id="doctor">
          <select
            id="doctor"
            value={data.doctor}
            onChange={(e) => update("doctor", e.target.value)}
            className="input-base appearance-none bg-white"
          >
            <option value="">Any available doctor</option>
            {availableDoctors.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name} — {d.specialty}
              </option>
            ))}
          </select>
        </Field>

        <div className="sm:col-span-1">
          <DatePicker
            value={data.date}
            onChange={(v) => update("date", v)}
            error={errors.date}
          />
        </div>

        <Field label="Preferred Time" id="time" required error={errors.time}>
          <select
            id="time"
            value={data.time}
            onChange={(e) => update("time", e.target.value)}
            className="input-base appearance-none bg-white"
            aria-invalid={!!errors.time}
            aria-describedby={errors.time ? "time-error" : undefined}
          >
            <option value="">Select a time</option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field
            label="Reason for Visit"
            id="reason"
            required
            error={errors.reason}
          >
            <textarea
              id="reason"
              rows={4}
              value={data.reason}
              onChange={(e) => update("reason", e.target.value)}
              placeholder="Briefly describe your symptoms or reason for the visit."
              className="input-base resize-none"
              aria-invalid={!!errors.reason}
              aria-describedby={errors.reason ? "reason-error" : undefined}
            />
          </Field>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          <Send className="w-4 h-4" aria-hidden="true" />
          Submit Appointment Request
        </button>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 font-manrope font-semibold text-sm text-[#1DA851] hover:text-[#168C8C] transition-colors"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          Prefer WhatsApp? Chat with our team
        </a>
      </div>

      <p className="mt-4 flex items-start gap-2 text-muted text-xs leading-relaxed">
        <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" aria-hidden="true" />
        This is a frontend demo. Submitting the form does not book a real
        appointment. Please do not submit sensitive medical information.
      </p>
    </form>
  );
}

function Field({
  label,
  id,
  required,
  error,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label} {required && <span className="text-emergency">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-emergency text-xs">
          {error}
        </p>
      )}
    </div>
  );
}