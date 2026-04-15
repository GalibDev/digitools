const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 py-10">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center text-white">
          <div className="py-4 md:border-r md:border-white/30">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3">50K+</h2>
            <p className="text-lg text-white/90">Active Users</p>
          </div>

          <div className="py-4 md:border-r md:border-white/30">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3">200+</h2>
            <p className="text-lg text-white/90">Premium Tools</p>
          </div>

          <div className="py-4">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3">4.9</h2>
            <p className="text-lg text-white/90">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;