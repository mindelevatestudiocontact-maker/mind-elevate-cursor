import img1 from "../assets/images/preview1.png";
import img2 from "../assets/images/preview2.png";
import img3 from "../assets/images/preview3.png";
import img4 from "../assets/images/preview4.png";

const previews = [
  { img: img1, title: "Weekly Planning", height: "h-80" },
  { img: img2, title: "Habit & Sleep Tracking", height: "h-64" },
  { img: img3, title: "Distraction & Reflection", height: "h-72" },
  { img: img4, title: "Monthly Overview", height: "h-96" },
];


const Preview = () => {
  return (
    <section id="preview" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Inside MindElevate
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A glimpse into your productivity system
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {previews.map((p, i) => (
    <div
      key={i}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden
                 flex flex-col h-[420px] transition hover:shadow-2xl"
    >
      {/* Image area */}
      <div className="h-[300px] w-full bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={p.img}
          alt={p.title}
          className="max-h-full max-w-full object-contain
                     transform transition duration-300
                     group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <div className="flex-1 flex items-center justify-center p-4">
        <h3 className="font-semibold text-gray-800 text-center">
          {p.title}
        </h3>
      </div>
    </div>
  ))}
</div>


        
      </div>
    </section>
  );
};

export default Preview;
