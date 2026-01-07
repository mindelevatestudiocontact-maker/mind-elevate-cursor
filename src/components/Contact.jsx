const Contact = () => {
  const email = 'mindelevate.studio.contact@gmail.com';

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions about MindElevate or need support? Reach out anytime.
          </p>
        </div>

        <div className="rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow p-8 sm:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                We&apos;re here to help
              </h3>
              <p className="text-gray-600">
                For any questions, feedback, or support, send us an email and we&apos;ll get back to you within 24–48 hours.
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-1">
                Email
              </p>
              <a
                href={`mailto:${email}`}
                className="text-lg font-semibold text-indigo-600 hover:text-indigo-500 break-all"
              >
                {email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


