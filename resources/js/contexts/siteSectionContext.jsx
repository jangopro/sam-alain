import React, { createContext, useState } from "react";

export const SiteContext = createContext(null);

export default function SiteContextProvider({ children }) {
    const [sectionChosen, setSectionChosen] = useState("business");

    return (
        <SiteContext.Provider value={{ sectionChosen, setSectionChosen }}>
            {children}
        </SiteContext.Provider>
    );
}
