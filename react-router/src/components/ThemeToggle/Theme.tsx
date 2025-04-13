import { useEffect, useState } from "react";
import { ThemeProvider } from "../../context/ThemeContext";
import Card from "./Card";
import ToggleButton from "./ToggleButton";

const Theme = () => {
     const [theme, setTheme] = useState("light");
     const lightMode = () =>{
        setTheme("light");
     }

     const darkMode = () => {
        setTheme("dark");
     }

     useEffect(() =>{
        document.querySelector('html')?.classList.remove(theme === "light" ? "dark": "light");
        document.querySelector('html')?.classList.add(theme);
     },[theme])
    return ( 
        <ThemeProvider value={{theme, lightMode, darkMode}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ToggleButton/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card/>
                    </div>
                </div>
            </div>
        </ThemeProvider>
     );
}
 
export default Theme;