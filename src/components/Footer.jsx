const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors"
            >
              MindElevate
            </button>
            <p className="mt-2 text-sm">
              © {new Date().getFullYear()} MindElevate. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <button
              onClick={() => {
                const element = document.getElementById('features');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('pricing');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('faq');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm hover:text-white transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

