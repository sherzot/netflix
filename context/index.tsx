import { createContext } from "react";
import { ChildProps, ContextType } from "@/types";

export const Context = createContext<ContextType | null>(null);

const GlobalContext = ({children} : ChildProps) => {
    return(
        <Context.Provider value={null}>
            {children}
        </Context.Provider>
    );
}

export default GlobalContext