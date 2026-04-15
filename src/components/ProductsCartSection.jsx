import { useState } from "react";
import { toast } from "react-toastify";
import products from "../data/products";
import SectionHeader from "./SectionHeader";
import ProductCard from "./ProductCard";
import CartItem from "./CartItem";

const ProductsCartSection = ({ cart, setCart }) => {
  const [activeTab, setActiveTab] = useState("products");

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      toast.info(`${product.name} is already in your cart`);
      return;
    }

    setCart((prevCart) => [...prevCart, product]);
    toast.success(`${product.name} added to cart`);
  };

  const handleRemoveFromCart = (id) => {
    const product = cart.find((item) => item.id === id);

    setCart((prevCart) => prevCart.filter((item) => item.id !== id));

    if (product) {
      toast.error(`${product.name} removed from cart`);
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning("Your cart is already empty");
      return;
    }

    setCart([]);
    toast.success("Proceeding to checkout");
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <section className="py-20 bg-white">
      <div className="w-11/12 mx-auto">
        <SectionHeader />

        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 rounded-full p-1 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("products")}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition ${
                activeTab === "products"
                  ? "bg-violet-600 text-white shadow"
                  : "text-slate-600"
              }`}
            >
              Products
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("cart")}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition ${
                activeTab === "cart"
                  ? "bg-violet-600 text-white shadow"
                  : "text-slate-600"
              }`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {activeTab === "products" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                cart={cart}
              />
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto border border-slate-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm">
            {cart.length === 0 ? (
              <div className="text-center py-16 px-6 bg-slate-50 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  Your cart is empty
                </h3>
                <p className="text-slate-500">
                  Add premium digital tools to your cart to see them here.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-3xl font-bold text-slate-800 mb-6">
                  Your Cart
                </h3>

                <div className="space-y-4">
                  {cart.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      handleRemoveFromCart={handleRemoveFromCart}
                    />
                  ))}
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between text-slate-500 text-sm mb-4 px-1">
                    <span>Total:</span>
                    <span className="text-3xl font-bold text-slate-800">
                      ${totalPrice}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCheckout}
                    className="btn w-full rounded-full border-none bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 text-white"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsCartSection;