const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    subtitle: "Perfect for getting started",
    price: 0,
    period: "Month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    buttonText: "Get Started Free",
    featured: false,
  },
  {
    id: 2,
    name: "Pro",
    subtitle: "Best for professionals",
    price: 29,
    period: "Month",
    badge: "Most Popular",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    buttonText: "Start Pro Trial",
    featured: true,
  },
  {
    id: 3,
    name: "Enterprise",
    subtitle: "For teams and businesses",
    price: 99,
    period: "Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    buttonText: "Contact Sales",
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="w-11/12 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-6">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.featured
                  ? "bg-gradient-to-br from-blue-600 via-violet-600 to-fuchsia-600 text-white border-transparent shadow-xl"
                  : "bg-white border-slate-200 text-slate-800 shadow-sm"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
              <p
                className={`mb-6 text-sm ${
                  plan.featured ? "text-white/80" : "text-slate-500"
                }`}
              >
                {plan.subtitle}
              </p>

              <div className="mb-6">
                <span className="text-5xl font-extrabold">${plan.price}</span>
                <span
                  className={`ml-1 text-lg ${
                    plan.featured ? "text-white/80" : "text-slate-400"
                  }`}
                >
                  /{plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-2 text-sm md:text-base ${
                      plan.featured ? "text-white/95" : "text-slate-600"
                    }`}
                  >
                    <span className="text-green-400 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`btn rounded-full border-none mt-auto ${
                  plan.featured
                    ? "bg-white text-violet-600 hover:bg-slate-100"
                    : "bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 text-white"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;