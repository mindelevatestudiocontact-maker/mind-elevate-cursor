const Pricing = () => {
  const handlePurchase = () => {
    window.open('https://topmate.io/mind_elevate/1880292', '_blank');
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            One-time purchase. Lifetime access. No subscriptions.
          </p>
        </div>
        <div className="relative">
          <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-8 sm:p-12 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="text-center text-white">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-5xl font-extrabold">₹199</span>
                <span className="text-2xl sm:text-3xl line-through opacity-70">₹399</span>
              </div>
              <div className="text-xl mb-6 opacity-90">Lifetime Access</div>
              <ul className="text-left space-y-4 mb-8 max-w-md mx-auto">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Weekly & Monthly Planner Templates</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Habit Tracker & Goal Setting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority Matrix & Reflection Prompts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Works on All Devices (PDF Format)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>30-Day Money-Back Guarantee</span>
                </li>
              </ul>
              <button
                onClick={handlePurchase}
                className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transform transition-all hover:scale-105 shadow-lg"
              >
                Get the Planner Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

