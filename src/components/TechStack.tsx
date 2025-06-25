import { JSX } from "react";

export default function TechStack(): JSX.Element {
  const stack = [
    {
      name: "GPT-4",
      link: "https://openai.com/index/gpt-4o-and-more-tools-to-chatgpt-free/",
    },
    { name: "Claude", link: "https://claude.ai/login?returnTo=%2F%3F" },
    { name: "AssemblyAI", link: "https://www.assemblyai.com/" },
    { name: "TTS", link: "https://cloud.google.com/text-to-speech" },
    { name: "Socket.io", link: "https://socket.io/" },
    { name: "Vercel", link: "https://vercel.com/" },
    { name: "Firebase", link: "https://firebase.google.com/" },
    { name: "ConvexDB", link: "https://www.convex.dev/" },
  ];

  return (
    <section id="tech" className="white-section py-20 text-center">
      <h2 className="text-4xl font-semibold mb-10">Tech Stack Used</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {stack.map(({ name, link }) => (
          <div
            key={name}
            className="tech-item bg-blue-100 text-blue-800 px-5 py-2 rounded-full shadow hover:bg-blue-200 transition"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
