import { JSX, useEffect, useState } from "react";

export default function BackToTop(): JSX.Element | null {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = (): void => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      id="backToTop"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 bg-indigo-900 text-white py-3 px-5 rounded-full shadow-lg hover:bg-blue-600 transition"
    >
      ↑ Top
    </button>
  );
}
