import { useState } from "react"
import { useTranslation } from "react-i18next"

function Navbar() {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)

    if (language === "en") {
      document.documentElement.lang = "en"
      document.documentElement.dir = "ltr"
    } else if (language === "ar") {
      document.documentElement.lang = "ar"
      document.documentElement.dir = "rtl"
    } else {
      document.documentElement.lang = "he"
      document.documentElement.dir = "rtl"
    }

    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 md:px-8 py-5">
        <h1 className="text-2xl font-bold text-amber-800">
          {t("navbar.brand")}
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-amber-700">{t("navbar.home")}</a>
            <a href="#products" className="hover:text-amber-700">{t("navbar.products")}</a>
            <a href="#about" className="hover:text-amber-700">{t("navbar.about")}</a>
            <a href="#contact" className="hover:text-amber-700">{t("navbar.contact")}</a>
         </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
            className="border border-stone-300 rounded-full px-3 py-2 text-sm bg-white"
          >
            <option value="he">עברית</option>
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>

          <button className="bg-amber-800 text-white px-5 py-2 rounded-full hover:bg-amber-900">
            {t("navbar.shopNow")}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-3xl text-stone-800"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-4 text-sm font-medium bg-white">
          <a href="#" className="hover:text-amber-700">{t("navbar.home")}</a>
          <a href="#" className="hover:text-amber-700">{t("navbar.products")}</a>
          <a href="#" className="hover:text-amber-700">{t("navbar.about")}</a>
          <a href="#" className="hover:text-amber-700">{t("navbar.contact")}</a>

          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
            className="border border-stone-300 rounded-full px-3 py-2 text-sm bg-white"
          >
            <option value="he">עברית</option>
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>

          <button className="bg-amber-800 text-white px-5 py-2 rounded-full hover:bg-amber-900">
            {t("navbar.shopNow")}
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar