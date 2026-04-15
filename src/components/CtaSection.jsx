const CtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 py-24">
      <div className="w-11/12 mx-auto text-center text-white">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
          Ready To Transform Your Workflow?
        </h2>

        <p className="max-w-2xl mx-auto text-white/85 text-sm md:text-base leading-7 mb-8">
          Join thousands of professionals who are already using DigiTools to
          work smarter. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button className="btn rounded-full border-none bg-white text-violet-600 hover:bg-slate-100 px-8">
            Explore Products
          </button>

          <button className="btn rounded-full border border-white bg-transparent text-white hover:bg-white hover:text-violet-600 px-8">
            View Pricing
          </button>
        </div>

        <p className="text-white/75 text-sm">
          14-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CtaSection;