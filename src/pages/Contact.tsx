import { FormEvent, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Navigation,
} from "lucide-react";
import ContactCard from "../components/common/ContactCard";
import { CONTACT_INFO } from "../data/config";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "../utils/whatsapp";
import { useDocumentTitle } from "../utils/useDocumentTitle";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  useDocumentTitle(
    "Contact | CarePoint Medical",
    "Contact CarePoint Medical. We're here to help with appointments, questions, and visitor information."
  );

  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!form.email.trim()) errs.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Please enter a valid email address.";
    if (!form.subject.trim()) errs.subject = "Please enter a subject.";
    if (!form.message.trim()) errs.message = "Please enter your message.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSent(true);
  };

  return (
    <div>
      <section className="bg-white border-b border-line">
        <div className="container-content py-14 lg:py-20">
          <span className="label-eyebrow">Contact</span>
          <h1 className="mt-3 font-manrope font-extrabold text-4xl sm:text-5xl text-navy leading-tight">
            We're here to help.
          </h1>
          <p className="mt-4 text-muted text-lg max-w-2xl leading-relaxed">
            Reach out with any questions about appointments, departments, or
            our services. We typically respond within one business day.
          </p>
        </div>
      </section>

      <section className="bg-warm">
        <div className="container-content py-12 lg:py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ContactCard icon={Phone} title="Phone">
              <a
                href={CONTACT_INFO.phoneHref}
                className="hover:text-teal transition-colors font-manrope font-semibold text-navy"
              >
                {CONTACT_INFO.phone}
              </a>
              <p className="mt-1 text-xs">Emergency and general inquiries</p>
            </ContactCard>
            <ContactCard icon={Mail} title="Email">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-teal transition-colors font-manrope font-semibold text-navy break-all"
              >
                {CONTACT_INFO.email}
              </a>
              <p className="mt-1 text-xs">For non-urgent inquiries</p>
            </ContactCard>
            <ContactCard icon={MapPin} title="Address">
              <p className="font-manrope font-semibold text-navy">
                123 Healthcare Avenue
              </p>
              <p className="mt-0.5">Boston, MA 02110</p>
            </ContactCard>
            <ContactCard icon={Clock} title="Opening Hours">
              <p className="font-manrope font-semibold text-navy">
                Mon – Fri: 8AM – 6PM
              </p>
              <p className="mt-0.5">Sat: 9AM – 3PM</p>
              <p className="mt-0.5">Sun: Emergency only</p>
            </ContactCard>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-content py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <span className="label-eyebrow">Send a message</span>
              <h2 className="mt-3 font-manrope font-extrabold text-3xl text-navy leading-tight">
                How can we help?
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                Complete the form and our team will get back to you shortly.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 card-base bg-white p-5 flex items-start gap-4 hover:border-[#25D366]/40 hover:shadow-lift transition-all group"
              >
                <span className="w-11 h-11 rounded-xl bg-[#25D366]/10 text-[#1DA851] inline-flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-manrope font-bold text-navy text-base">
                    Chat with us on WhatsApp
                  </h3>
                  <p className="mt-1 text-muted text-sm leading-relaxed">
                    Have a question about appointments, departments, or
                    services? Chat with our team.
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1.5 font-manrope font-semibold text-sm text-[#1DA851]">
                    Open WhatsApp →
                  </span>
                </div>
              </a>

              <div className="mt-8 card-base bg-warm overflow-hidden">
                <div className="relative h-64 lg:h-72 bg-gradient-to-br from-aqua/60 via-white to-aqua/40">
                  <div
                    className="absolute inset-0 pattern-grid opacity-60"
                    aria-hidden="true"
                  />
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 400 300"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M-20 220 Q 100 180 180 140 T 420 60"
                      stroke="#168C8C"
                      strokeWidth="3"
                      fill="none"
                      opacity="0.35"
                    />
                    <path
                      d="M-20 260 Q 140 230 220 200 T 420 130"
                      stroke="#12304A"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.2"
                    />
                    <path
                      d="M40 -20 Q 80 100 60 200 T 100 340"
                      stroke="#12304A"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.18"
                    />
                    <path
                      d="M200 -20 Q 240 100 230 200 T 260 340"
                      stroke="#168C8C"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.22"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <span className="w-14 h-14 rounded-full bg-teal text-white inline-flex items-center justify-center shadow-lift">
                      <MapPin className="w-6 h-6" aria-hidden="true" />
                    </span>
                    <div className="mt-3 px-4 py-2 rounded-xl bg-white border border-line shadow-soft">
                      <p className="font-manrope font-bold text-sm text-navy">
                        CarePoint Medical
                      </p>
                      <p className="text-muted text-xs">
                        123 Healthcare Ave, Boston
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur border border-line text-xs font-manrope font-semibold text-navy">
                      <Navigation className="w-3.5 h-3.5 text-teal" aria-hidden="true" />
                      Map placeholder
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {sent ? (
                <div className="card-base bg-white p-8 text-center">
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-success/10 text-success inline-flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 font-manrope font-extrabold text-2xl text-navy">
                    Message sent
                  </h2>
                  <p className="mt-3 text-muted leading-relaxed">
                    Thank you,{" "}
                    <span className="font-semibold text-navy">
                      {form.name.split(" ")[0]}
                    </span>
                    . We've received your message and will get back to you
                    shortly.
                  </p>
                  <p className="mt-2 text-muted text-xs">
                    This is a frontend demo. No message was actually sent.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(initial);
                      setSent(false);
                    }}
                    className="mt-6 btn-outline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={submit}
                  noValidate
                  className="card-base bg-white p-5 sm:p-7"
                >
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="field-label">
                        Name <span className="text-emergency">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className="input-base"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-emergency text-xs">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cemail" className="field-label">
                          Email <span className="text-emergency">*</span>
                        </label>
                        <input
                          id="cemail"
                          type="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          className="input-base"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "cemail-error" : undefined}
                        />
                        {errors.email && (
                          <p id="cemail-error" className="mt-1.5 text-emergency text-xs">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="cphone" className="field-label">
                          Phone
                        </label>
                        <input
                          id="cphone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          className="input-base"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="field-label">
                        Subject <span className="text-emergency">*</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={form.subject}
                        onChange={(e) => update("subject", e.target.value)}
                        className="input-base"
                        aria-invalid={!!errors.subject}
                        aria-describedby={
                          errors.subject ? "subject-error" : undefined
                        }
                      />
                      {errors.subject && (
                        <p id="subject-error" className="mt-1.5 text-emergency text-xs">
                          {errors.subject}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="message" className="field-label">
                        Message <span className="text-emergency">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        className="input-base resize-none"
                        aria-invalid={!!errors.message}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1.5 text-emergency text-xs">
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <button type="submit" className="mt-6 btn-primary w-full sm:w-auto">
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}