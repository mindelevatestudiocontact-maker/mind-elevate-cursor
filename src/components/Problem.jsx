const Problem = () => {
  return (
    <section id="problem" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Are You Struggling With...
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-red-50 border border-red-100">
              <div className="text-4xl mb-4">😫</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lack of Focus</h3>
              <p className="text-gray-600">
                Too many tasks, no clear priorities. You're busy but not productive.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Broken Habits</h3>
              <p className="text-gray-600">
                You start strong but lose momentum. Consistency feels impossible.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-yellow-50 border border-yellow-100">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unclear Goals</h3>
              <p className="text-gray-600">
                You know what you want but don't have a system to achieve it.
              </p>
            </div>
          </div>
          <div className="mt-12 p-8 rounded-2xl bg-indigo-50 border border-indigo-100">
            <p className="text-xl text-gray-800 font-medium">
              MindElevate gives you the structure, tools, and clarity to build discipline and achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

