import { CONTACT_INFO } from "../data/config";

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${CONTACT_INFO.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  general:
    "Hello CarePoint Medical, I would like to know more about your services.",
  appointment:
    "Hello CarePoint Medical, I would like to inquire about booking an appointment.",
  doctor: (name: string) =>
    `Hello CarePoint Medical, I would like to inquire about an appointment with ${name}.`,
  department: (name: string) =>
    `Hello CarePoint Medical, I would like more information about the ${name} department.`,
};