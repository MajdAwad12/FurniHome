import { useTranslation } from "react-i18next"

function HomeHero() {
  const { t } = useTranslation()

  return (
    <section
      id="home"
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20"
    >
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        {/* Image */}
        <div className="order-1 md:order-2">
          <div className="overflow-hidden rounded-3xl bg-amber-100 p-3 shadow-md sm:p-4 lg:p-6">
            <img
              src="https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80"
              alt="Modern living room furniture"
              className="h-[260px] w-full rounded-2xl object-cover object-center sm:h-[340px] md:h-[460px]"
            />
          </div>
        </div>

        {/* Text */}
        <div className="order-2 text-center md:order-1 md:text-start">
          <p className="mb-3 text-sm font-semibold text-amber-700 sm:text-base">
            {t("hero.subtitle")}
          </p>

          <h2 className="mb-4 text-3xl font-extrabold leading-tight text-stone-900 sm:text-4xl lg:mb-6 lg:text-5xl">
            {t("hero.title")}
          </h2>

          <p className="mx-auto mb-7 max-w-xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8 md:mx-0">
            {t("hero.description")}
          </p>

          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-full bg-amber-800 px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-amber-900 sm:text-lg"
          >
            {t("hero.button")}
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomeHero