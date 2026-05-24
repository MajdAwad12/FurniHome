import { useState } from "react"
import { useTranslation } from "react-i18next"
import ProductCard from "./ProductCard"
import { products } from "../products/products"

function ProductsSection() {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "sofas", "chairs", "tables", "beds", "closets"]

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <section
      id="products"
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mb-8 text-center sm:mb-10">
        <p className="mb-2 text-sm font-semibold text-amber-700 sm:text-base">
          {t("navbar.products")}
        </p>

        <h2 className="text-2xl font-extrabold text-stone-900 sm:text-3xl lg:text-4xl">
          {t("products.sectionTitle")}
        </h2>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10 sm:gap-3">
        {categories.map((category) => {
          const isActive = selectedCategory === category

          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition sm:px-5 sm:text-base ${
                isActive
                  ? "border-amber-800 bg-amber-800 text-white shadow-sm"
                  : "border-stone-300 bg-white text-stone-700 hover:border-amber-700 hover:bg-amber-50 hover:text-amber-800"
              }`}
            >
              {t(`products.categories.${category}`)}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductsSection