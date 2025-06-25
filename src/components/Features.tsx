import { JSX } from "react";

export default function Features(): JSX.Element {
  const items = [
    "🎓 Topic-based lectures",
    "💼 Mock interviews",
    "❓ Question-answer practice",
    "🌍 Language learning",
    "🧘 Meditation for focus",
  ];

  return (
    <section id="features" className="white-section py-20 text-center">
      <h2 className="text-4xl font-semibold mb-10">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="feature-card bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
