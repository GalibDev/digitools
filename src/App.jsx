import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductsCartSection from "./components/ProductsCartSection";
import StepsSection from "./components/StepsSection";
import PricingSection from "./components/PricingSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="bg-white text-slate-800">
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />
      <ProductsCartSection cart={cart} setCart={setCart} />
      <StepsSection />
      <PricingSection />
      <CtaSection />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;