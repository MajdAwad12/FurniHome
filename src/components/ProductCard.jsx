import { useState } from "react"
import { useTranslation } from "react-i18next"

function ProductCard({ product }) {
  const { t, i18n } = useTranslation()
  const [isFavorite, setIsFavorite] = useState(false)

  const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE
  const productName = t(product.nameKey)

  const message =
    i18n.language === "ar"
      ? `مرحبًا، أنا مهتم بالمنتج ${product.code} - ${productName}`
      : i18n.language === "en"
        ? `Hello, I am interested in product ${product.code} - ${productName}`
        : `שלום, אני מתעניין במוצר ${product.code} - ${productName}`

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`

  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={productName}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
        />

        <button
          type="button"
          onClick={() => setIsFavorite((prev) => !prev)}
          className="absolute left-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-2xl shadow-md transition hover:scale-110 sm:left-4 sm:top-4"
          aria-label="Toggle favorite product"
        >
          <span className={isFavorite ? "text-red-500" : "text-stone-500"}>
            {isFavorite ? "♥" : "♡"}
          </span>
        </button>

        <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1 text-sm font-semibold text-amber-800 shadow-sm">
          {product.price}
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <div className="mb-3">
          <h3 className="line-clamp-2 text-lg font-bold leading-snug text-stone-900 sm:text-xl">
            {productName}
          </h3>

          <p className="mt-2 text-sm text-stone-500">
            {t("products.productCode")}:{" "}
            <span className="font-semibold text-stone-700">{product.code}</span>
          </p>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-2xl border border-green-500 px-4 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-500 hover:text-white sm:text-base"
        >
          <span className="me-2">💬</span>
          {t("products.askOnWhatsapp")}
        </a>
      </div>
    </article>
  )
}

export default ProductCard