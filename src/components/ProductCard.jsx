const ProductCard = ({ product, handleAddToCart, cart }) => {
  const { name, description, price, period, tag, tagType, features, icon } = product;

  const alreadyAdded = cart.some((item) => item.id === product.id);

  const badgeStyles = {
    popular: "bg-violet-100 text-violet-600",
    new: "bg-green-100 text-green-600",
    "best-seller": "bg-orange-100 text-orange-600",
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center">
          <img src={icon} alt={name} className="w-7 h-7 object-contain" />
        </div>

        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            badgeStyles[tagType]
          }`}
        >
          {tag}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-slate-800 mb-2">{name}</h3>

      <p className="text-slate-500 leading-6 text-sm mb-5 min-h-[72px]">
        {description}
      </p>

      <div className="mb-4">
        <span className="text-3xl font-extrabold text-slate-900">${price}</span>
        <span className="text-slate-400 text-sm ml-1">
          /{period === "one-time" ? "One-Time" : period === "monthly" ? "Mo" : "Yr"}
        </span>
      </div>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-slate-600 flex items-center gap-2">
            <span className="text-green-500 font-bold">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => handleAddToCart(product)}
        className="btn w-full rounded-full border-none bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 text-white hover:scale-[1.02] transition"
      >
        {alreadyAdded ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;