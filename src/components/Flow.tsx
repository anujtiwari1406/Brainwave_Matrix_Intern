import { JSX } from "react";

export default function Flow(): JSX.Element {
  const steps = [
    "Choose feature",
    "Type topic",
    "Pick virtual coach",
    "Start speaking",
    "Get responses",
  ];

  return (
    <section
      id="flow"
      className="flow py-20 text-center bg-gradient-to-r from-indigo-100 to-blue-100"
    >
      <h2 className="text-4xl font-semibold mb-10">Speak. Learn. Repeat.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="step-card bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105"
          >
            <span className="text-2xl font-bold text-blue-500 block mb-2">
              {index + 1}
            </span>
            {step}
          </div>
        ))}
      </div>
    </section>
  );
}
