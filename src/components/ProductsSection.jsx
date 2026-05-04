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
    <section id="products" className="px-8 py-16 max-w-7xl mx-auto">      <h2 className="text-3xl font-bold text-center mb-8">
        {t("products.sectionTitle")}
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full border transition ${
              selectedCategory === category
                ? "bg-amber-800 text-white border-amber-800"
                : "bg-white text-stone-700 border-stone-300 hover:border-amber-700 hover:text-amber-800"
            }`}
          >
            {t(`products.categories.${category}`)}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductsSection