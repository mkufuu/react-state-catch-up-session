import Header from "./components/Header";
import { useEffect, useState, createContext } from "react";

export const ThemeContext = createContext();

export default () => {
    const [theme, setTheme] = useState("light");
    const [interests, setInterests] = useState([]);

    useEffect(() => {
        // fetch("http://localhost:3001/interests")
        //     .then((resp) => resp.json())
        //     .then((data) => setInterests(data))
        //     .catch((error) => setInterests([]));

        (async () => {
            try {
                const resp = await fetch("http://localhost:3001/interests");

                const data = await resp.json();

                setInterests(data);
            } catch (error) {
                setInterests([]);
            }
        })();
    }, []);

    const toggleTheme = (event) => setTheme(theme === 'light' ? "dark" : "light");

    return <ThemeContext.Provider value={{theme, toggleTheme}}>
        <Header />

        <main style={{textAlign: "center"}}>
            {
                interests.map((interest, index) => {
                    return <p key={index}>{`${index+1}. ${interest}`}</p>
                })
            }
        </main>
    </ThemeContext.Provider>
}
