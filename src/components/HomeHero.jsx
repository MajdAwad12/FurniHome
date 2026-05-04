import { useTranslation } from "react-i18next"

function HomeHero() {
  const { t } = useTranslation()

  return (
      <section id="home" className="grid md:grid-cols-2 gap-10 items-center px-8 py-20 max-w-7xl mx-auto">      <div>
        <p className="text-amber-700 font-semibold mb-3">
          {t("hero.subtitle")}
        </p>

        <h2 className="text-5xl font-bold leading-tight mb-6">
          {t("hero.title")}
        </h2>

        <p className="text-stone-600 mb-8 text-lg">
          {t("hero.description")}
        </p>

        <button className="bg-amber-800 text-white px-7 py-3 rounded-full text-lg hover:bg-amber-900">
          <a
            href="#products"
            className="inline-block bg-amber-800 text-white px-7 py-3 rounded-full text-lg hover:bg-amber-900"
          >
            {t("hero.button")}
          </a>    
        </button>
      </div>

      <div className="bg-amber-100 rounded-3xl p-8 shadow-md">
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
          alt="Modern sofa"
          className="rounded-2xl w-full h-[420px] object-cover"
        />
      </div>
    </section>
  )
}

export default HomeHero