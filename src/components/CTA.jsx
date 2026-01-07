const CTA = () => {
  const handlePurchase = () => {
    window.open('https://topmate.io/mind_elevate/1880292', '_blank');
  };

  return (
    <section id="cta" className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Ready to Build Discipline and Master Your Life?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join thousands who are already using MindElevate to achieve their goals.
        </p>
        <button
          onClick={handlePurchase}
          className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-2xl text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transform transition-all hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Get the Planner Now — ₹199
        </button>
        <p className="mt-4 text-sm text-gray-400">
          30-day money-back guarantee • Lifetime access • No subscriptions
        </p>
      </div>
    </section>
  );
};

export default CTA;

