import { useState } from "react"
import { useTranslation } from "react-i18next"

function ProductCard({ product }) {
  const { t } = useTranslation()
  const [isFavorite, setIsFavorite] = useState(false)

  const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE
  const productName = t(product.nameKey)

  const message = `שלום, אני מתעניין במוצר ${product.code} - ${productName}`
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="relative">
        <img
          src={product.image}
          alt={productName}
          className="w-full h-64 object-cover"
        />

        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 left-4 bg-white/90 w-11 h-11 rounded-full flex items-center justify-center shadow-md text-2xl hover:scale-110 transition"
          aria-label="favorite"
        >
          <span className={isFavorite ? "text-red-500" : "text-stone-500"}>
            {isFavorite ? "♥" : "♡"}
          </span>
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-xl font-bold">{productName}</h3>

          <p className="text-amber-800 font-semibold text-lg whitespace-nowrap">
            {product.price}
          </p>
        </div>

        <p className="text-sm text-stone-500 mb-4">
          {t("products.productCode")}: {product.code}
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full border border-green-500 text-green-700 py-2 rounded-xl hover:bg-green-500 hover:text-white transition"
        >
          💬 {t("products.askOnWhatsapp")}
        </a>
      </div>
    </div>
  )
}

export default ProductCard