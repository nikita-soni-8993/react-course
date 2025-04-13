import React, { useContext } from "react";

 export const ThemeContext = React.createContext({
    theme: "light",
    darkMode: ()=>{},
    lightMode: ()=>{}
});

export const ThemeProvider = ThemeContext.Provider;


// custom hook to use provide directly
export const useTheme = () =>{
    return useContext(ThemeContext);
}