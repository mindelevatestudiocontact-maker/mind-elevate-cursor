const Hero = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-16 pb-20 sm:pt-24 sm:pb-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            Build Discipline.
            <br />
            <span className="text-indigo-600">Master Your Life.</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
            Download the ultimate productivity planner PDF with weekly planner printable,
            monthly productivity planner, and habit tracker PDF for students and
            professionals.
          </p>
          <div className="mt-10">
            <button
              onClick={scrollToPricing}
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get the Planner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

