const Preview = () => {
  return (
    <section id="preview" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            See It In Action
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Beautiful, functional design that makes planning enjoyable
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="aspect-[3/4] bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-2xl font-bold text-gray-900">Weekly Planner</h3>
                <p className="text-gray-600 mt-2">Daily blocks, priorities, and goal tracking</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="aspect-[3/4] bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="text-6xl mb-4">🗓️</div>
                <h3 className="text-2xl font-bold text-gray-900">Monthly Overview</h3>
                <p className="text-gray-600 mt-2">Big picture planning and progress tracking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;

