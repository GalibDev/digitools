import { FaFacebookF, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#07132D] text-white">
      <div className="w-11/12 mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5">DigiTools</h2>
            <p className="text-slate-300 leading-8 max-w-md">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-slate-300">
              <li><a className="hover:text-white transition">Features</a></li>
              <li><a className="hover:text-white transition">Pricing</a></li>
              <li><a className="hover:text-white transition">Templates</a></li>
              <li><a className="hover:text-white transition">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-slate-300">
              <li><a className="hover:text-white transition">About</a></li>
              <li><a className="hover:text-white transition">Blog</a></li>
              <li><a className="hover:text-white transition">Careers</a></li>
              <li><a className="hover:text-white transition">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-slate-300 mb-6">
              <li><a className="hover:text-white transition">Documentation</a></li>
              <li><a className="hover:text-white transition">Help Center</a></li>
              <li><a className="hover:text-white transition">Community</a></li>
              <li><a className="hover:text-white transition">Contact</a></li>
            </ul>

            <h4 className="text-xl font-semibold mb-4">Social Links</h4>
            <div className="flex items-center gap-3">
              <a className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-105 transition">
                <FaYoutube />
              </a>
              <a className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-105 transition">
                <FaFacebookF />
              </a>
              <a className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-105 transition">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© 2026 DigiTools. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a className="hover:text-white transition">Privacy Policy</a>
            <a className="hover:text-white transition">Terms of Service</a>
            <a className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;