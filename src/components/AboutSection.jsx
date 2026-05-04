import { useTranslation } from "react-i18next"

function AboutSection() {
  const { t } = useTranslation()

  return (
    <section id="about" className="px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-amber-700 font-semibold mb-3">
            {t("about.subtitle")}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            {t("about.title")}
          </h2>

          <p className="text-stone-600 text-lg leading-8 mb-6">
            {t("about.description")}
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-stone-50 rounded-2xl p-5 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-amber-800">25 +</h3>
              <p className="text-sm text-stone-600">{t("about.years")}</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-amber-800">30K +</h3>
              <p className="text-sm text-stone-600">{t("about.customers")}</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-amber-800">10K +</h3>
              <p className="text-sm text-stone-600">{t("about.products")}</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
            alt="Furniture showroom"
            className="w-full h-[420px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection