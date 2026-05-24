import { useTranslation } from "react-i18next"

function WhatsAppButton() {
  const { i18n } = useTranslation()
  const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE

  const message =
    i18n.language === "ar"
      ? "مرحبًا، أريد الحصول على تفاصيل حول الأثاث لديكم"
      : i18n.language === "en"
        ? "Hello, I would like to get more details about your furniture"
        : "שלום, אני מעוניין לקבל פרטים על הרהיטים שלכם"

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-4 left-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-lg transition hover:scale-105 hover:bg-green-600 sm:bottom-6 sm:left-6 sm:h-auto sm:w-auto sm:px-5 sm:py-3 sm:text-base"
    >
      <span className="sm:me-2">💬</span>
      <span className="hidden font-semibold sm:inline">WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton