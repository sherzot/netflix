import { createContext } from "react";
import { ContextType } from "@/types";

export const Context = createContext<ContextType | null>(null);

const GlobalContext = () => {
    return(
        <div>

        </div>
    );
}

export default GlobalContext