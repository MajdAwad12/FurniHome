import { useTranslation } from "react-i18next"

function Footer() {
  const { t } = useTranslation()

  const quickLinks = [
    { href: "#home", label: t("navbar.home") },
    { href: "#products", label: t("navbar.products") },
    { href: "#about", label: t("navbar.about") },
    { href: "#contact", label: t("navbar.contact") },
  ]

  return (
    <footer className="bg-stone-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-start">
          <div>
            <h2 className="text-2xl font-extrabold text-amber-500">
              {t("navbar.brand")}
            </h2>

            <p className="mt-3 text-sm leading-6 text-stone-300">
              {t("hero.description")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-amber-500">
              {t("navbar.products")}
            </h3>

            <div className="mt-4 flex flex-wrap justify-center gap-3 md:flex-col md:items-start md:gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-stone-300 transition hover:text-amber-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-amber-500">
              {t("navbar.contact")}
            </h3>

            <div className="mt-4 space-y-2 text-sm leading-6 text-stone-300">
              <p>{t("contact.address")}</p>
              <p>{t("contact.email")}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-stone-400">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer