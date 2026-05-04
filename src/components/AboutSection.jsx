import { useTranslation } from "react-i18next"

function AboutSection() {
  const { t } = useTranslation()

  const stats = [
    { value: "25+", label: t("about.years") },
    { value: "30K+", label: t("about.customers") },
    { value: "10K+", label: t("about.products") },
  ]

  return (
    <section id="about" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Text */}
          <div className="order-2 md:order-1">
            <p className="mb-3 text-sm font-semibold text-amber-700 sm:text-base">
              {t("about.subtitle")}
            </p>

            <h2 className="mb-4 text-2xl font-extrabold leading-tight text-stone-900 sm:text-3xl lg:text-4xl">
              {t("about.title")}
            </h2>

            <p className="mb-6 text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
              {t("about.description")}
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl bg-stone-50 p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-2xl font-extrabold text-amber-800 sm:text-3xl">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-stone-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="overflow-hidden rounded-3xl shadow-md">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                alt="Furniture showroom"
                className="h-[260px] w-full object-cover object-center sm:h-[360px] md:h-[460px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection