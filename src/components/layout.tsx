import type { PropsWithChildren } from "react";
import { Header } from "./header";
import { useThemeToggle } from "./use-theme-toggle";

export function Layout({ children }: PropsWithChildren) {
  const { theme, toggleTheme } = useThemeToggle();

  return (
    <div
      className={`flex flex-col min-h-screen bg-gradient-to-br ${
        theme === "dark"
          ? "from-gray-900 to-gray-800 text-gray-200"
          : "from-gray-100 to-gray-200 text-gray-800"
      }`}
    >
      <Header />
      <main className="flex-1 container mx-auto px-6 py-10 sm:px-8 md:px-10">
        {children}
      </main>
      <footer
        className={`border-t backdrop-blur-sm py-8 ${
          theme === "dark"
            ? "bg-gray-800/80 text-gray-400"
            : "bg-gray-200/80 text-gray-600"
        }`}
      >
        <div className="container mx-auto px-6 sm:px-8 md:px-10 text-center">
          <p className="mb-4">Made By Reuben 🇮🇳</p>
          <button
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gray-600 hover:bg-gray-500 text-gray-200"
                : "bg-gray-300 hover:bg-gray-400 text-gray-800"
            }`}
            onClick={toggleTheme}
          >
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </footer>
    </div>
  );
}