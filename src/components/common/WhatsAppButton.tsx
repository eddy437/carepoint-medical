import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "../../utils/whatsapp";

export default function WhatsAppButton() {
  const url = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CarePoint Medical on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="fixed z-50 bottom-6 right-6 sm:bottom-6 sm:right-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] rounded-full"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <span className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-manrope font-semibold text-sm pl-4 pr-5 py-3 rounded-full shadow-lift transition-all duration-200 group-hover:-translate-y-0.5">
        <MessageCircle className="w-5 h-5" aria-hidden="true" />
        Chat on WhatsApp
      </span>
      <span className="sm:hidden inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white shadow-lift transition-transform duration-200 group-hover:scale-105">
        <MessageCircle className="w-6 h-6" aria-hidden="true" />
      </span>
    </motion.a>
  );
}