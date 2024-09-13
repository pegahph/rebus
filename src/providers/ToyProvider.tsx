import { SelectedToy, useToy, UseToyReturn } from "@/hooks/useToy";
import React, { createContext, useState, ReactNode } from "react";

export const ToyContext = createContext<UseToyReturn | null>(null);

interface ToyProviderProps {
  children: ReactNode;
}

export const ToyProvider: React.FC<ToyProviderProps> = ({ children }) => {
  const [selectedToys, setSelectedToys] = useState<SelectedToy[]>([]);
  const toyHook = useToy(selectedToys, setSelectedToys);

  return <ToyContext.Provider value={toyHook}>{children}</ToyContext.Provider>;
};
