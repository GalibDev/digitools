import bannerImage from "../assets/digitools/banner.png";
import playIcon from "../assets/digitools/Play.png";

const Banner = () => {
  return (
    <section className="w-11/12 mx-auto pt-8 pb-14">
      <div className="hero bg-white">
        <div className="hero-content flex-col lg:flex-row justify-between gap-12 px-0">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-600 mb-6">
              <span className="w-2 h-2 rounded-full bg-violet-500"></span>
              New: AI-Powered Tools Available
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-800">
              Supercharge Your
              <br />
              Digital Workflow
            </h1>

            <p className="py-6 text-slate-500 text-base leading-8 max-w-lg">
              Access premium AI tools, design assets, templates, and productivity
              software all in one place. Start creating faster today.
              Explore products built for modern professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn bg-violet-600 hover:bg-violet-700 border-none text-white rounded-full px-7">
                Explore Products
              </button>

              <button className="btn btn-outline border-violet-500 text-violet-600 hover:bg-violet-50 rounded-full px-7">
                <img src={playIcon} alt="Play icon" className="w-4 h-4" />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={bannerImage}
              alt="Digital workflow banner"
              className="w-full max-w-md rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;