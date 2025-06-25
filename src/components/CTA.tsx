import { JSX } from "react";

export default function CTA(): JSX.Element {
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="cta bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Learn with Your Voice?
      </h2>
      <p className="mb-8 text-lg">Experience a new way of learning with AI.</p>
      <button
        onClick={scrollToTop}
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
      >
        Launch Dashboard
      </button>
    </section>
  );
}
