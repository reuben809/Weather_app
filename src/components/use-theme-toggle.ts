import { useTheme } from "/Users/reubenjoseph/Downloads/Weather_app/src/context/theme-provider.tsx";

export function useThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return { theme, toggleTheme };
}