import { useTranslation } from "react-i18next"

function ContactSection() {
  const { t } = useTranslation()

  const contactItems = [
    {
      icon: "📍",
      text: t("contact.address"),
    },
    {
      icon: "✉️",
      text: t("contact.email"),
    },
  ]

  return (
    <section id="contact" className="bg-stone-100 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Information */}
          <div>
            <p className="mb-3 text-sm font-semibold text-amber-700 sm:text-base">
              {t("contact.subtitle")}
            </p>

            <h2 className="mb-4 text-2xl font-extrabold leading-tight text-stone-900 sm:text-3xl lg:text-4xl">
              {t("contact.title")}
            </h2>

            <p className="mb-7 text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
              {t("contact.description")}
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactItems.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-3xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-xl">
                    {item.icon}
                  </span>

                  <p className="text-sm font-medium leading-6 text-stone-700 sm:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form className="rounded-3xl bg-white p-5 shadow-md sm:p-6 lg:p-8">
            <div className="space-y-4">
              <input
                type="text"
                placeholder={t("contact.formName")}
                className="w-full rounded-2xl border border-stone-300 px-4 py-3 text-base outline-none transition placeholder:text-stone-400 focus:border-amber-700"
              />

              <input
                type="email"
                placeholder={t("contact.formEmail")}
                className="w-full rounded-2xl border border-stone-300 px-4 py-3 text-base outline-none transition placeholder:text-stone-400 focus:border-amber-700"
              />

              <textarea
                placeholder={t("contact.formMessage")}
                rows="5"
                className="w-full resize-none rounded-2xl border border-stone-300 px-4 py-3 text-base outline-none transition placeholder:text-stone-400 focus:border-amber-700"
              ></textarea>

              <button
                type="button"
                className="w-full rounded-2xl bg-amber-800 py-3.5 text-base font-semibold text-white transition hover:bg-amber-900"
              >
                {t("contact.formButton")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection