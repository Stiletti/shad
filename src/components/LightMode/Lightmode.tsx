import { Moon, Sun } from "lucide-react";
import { useTheme } from "../ThemeProvider"

export function Lightmode() {
    const { setTheme, theme } = useTheme();

    return (
        <button className="mr-2" onClick={() => { setTheme(theme === "dark" ? "light" : "dark") }}>
            {theme === "dark" ? <Moon /> : <Sun />}
        </button>
    );
}