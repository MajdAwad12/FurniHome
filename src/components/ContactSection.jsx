import { useTranslation } from "react-i18next"

function ContactSection() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="px-8 py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-amber-700 font-semibold mb-3">
            {t("contact.subtitle")}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            {t("contact.title")}
          </h2>

          <p className="text-stone-600 text-lg leading-8 mb-8">
            {t("contact.description")}
          </p>

          <div className="space-y-4">
            <p className="bg-white rounded-2xl p-4 shadow-sm">
              📞 {t("contact.phone")}
            </p>

            <p className="bg-white rounded-2xl p-4 shadow-sm">
              📍 {t("contact.address")}
            </p>

            <p className="bg-white rounded-2xl p-4 shadow-sm">
              ✉️ {t("contact.email")}
            </p>
          </div>
        </div>

        <form className="bg-white rounded-3xl shadow-md p-6 space-y-4">
          <input
            type="text"
            placeholder={t("contact.formName")}
            className="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:border-amber-700"
          />

          <input
            type="email"
            placeholder={t("contact.formEmail")}
            className="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:border-amber-700"
          />

          <textarea
            placeholder={t("contact.formMessage")}
            rows="5"
            className="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:border-amber-700 resize-none"
          ></textarea>

          <button
            type="button"
            className="w-full bg-amber-800 text-white py-3 rounded-xl hover:bg-amber-900"
          >
            {t("contact.formButton")}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection