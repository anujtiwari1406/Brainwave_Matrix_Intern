export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-[3.5rem] font-bold mb-5 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent opacity-0 translate-y-[-30px] animate-fadeInDown">
        Meet Your AI Voice Mentor
      </h1>
      <p className="text-lg max-w-xl mx-auto mb-8 text-slate-600">
        An intelligent assistant that teaches, mentors, explains, interviews,
        and even calms your mind.
      </p>
      <button
        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition"
        onClick={() => {
          const section = document.querySelector(".white-section");
          section && section.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Try the Agent
      </button>
    </section>
  );
}
