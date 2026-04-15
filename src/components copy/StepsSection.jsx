import { FiUser } from "react-icons/fi";
import { HiOutlineCube } from "react-icons/hi";
import { RiRocketLine } from "react-icons/ri";

const stepsData = [
  {
    id: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    icon: <FiUser size={42} />,
  },
  {
    id: "02",
    title: "Choose Products",
    description:
      "Browse our catalog and select the tools that fit your needs.",
    icon: <HiOutlineCube size={42} />,
  },
  {
    id: "03",
    title: "Start Creating",
    description:
      "Download and start using your premium tools immediately.",
    icon: <RiRocketLine size={42} />,
  },
];

const StepsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="w-11/12 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-6">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {stepsData.map((step) => (
            <div
              key={step.id}
              className="relative bg-white border border-slate-200 rounded-2xl px-8 py-12 text-center shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center">
                {step.id}
              </div>

              <div className="w-20 h-20 mx-auto rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mb-8">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {step.title}
              </h3>

              <p className="text-slate-500 text-sm md:text-base leading-6 max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;