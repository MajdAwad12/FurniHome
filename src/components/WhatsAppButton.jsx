function WhatsAppButton() {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE
  const message = "שלום, אני מעוניין לקבל פרטים על הרהיטים שלכם"

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      💬 WhatsApp
    </a>
  )
}

export default WhatsAppButton