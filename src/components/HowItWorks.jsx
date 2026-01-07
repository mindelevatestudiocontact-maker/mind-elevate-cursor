const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Plan Your Week",
      description: "Use the weekly planner to break down your goals into daily actionable tasks and priorities."
    },
    {
      number: "02",
      title: "Track & Reflect",
      description: "Monitor your habits, track progress, and reflect weekly to learn and improve."
    },
    {
      number: "03",
      title: "Achieve Goals",
      description: "Use monthly overviews to see the big picture and celebrate your wins."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A simple 3-step system to build discipline and achieve your goals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

