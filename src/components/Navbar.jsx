import { FiShoppingCart, FiMenu } from "react-icons/fi";

const Navbar = ({ cartCount }) => {
  return (
    <div className="w-11/12 mx-auto py-5">
      <div className="navbar bg-white px-0">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost px-2">
              <FiMenu className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-white rounded-box w-52 text-slate-700"
            >
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>

          <a className="text-3xl md:text-4xl font-extrabold text-violet-600">
            DigiTools
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[15px] font-medium text-slate-600 gap-2">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-2 md:gap-3">
          <button className="btn btn-ghost text-slate-700 px-2 md:px-4">
            <FiShoppingCart className="text-lg" />
            <span className="badge badge-sm bg-slate-200 text-slate-700 border-none">
              {cartCount}
            </span>
          </button>

          <button className="btn btn-ghost text-slate-700 hidden md:flex">
            Login
          </button>

          <button className="btn border-none rounded-full bg-violet-600 hover:bg-violet-700 text-white px-4 md:px-6">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;