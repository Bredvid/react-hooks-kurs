import { createContext, useContext } from "react";

export const ButtonColorContext = createContext<string>("Red"); // setter en tilfeldig farge

export const useButtonColorContext = () => useContext(ButtonColorContext);
