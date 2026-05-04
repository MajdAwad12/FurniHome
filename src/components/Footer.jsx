import { useTranslation } from "react-i18next"

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-stone-900 text-white text-center py-6 mt-10">
      <p>{t("footer.rights")}</p>
    </footer>
  )
}

export default Footer