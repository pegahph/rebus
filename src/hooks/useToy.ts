import { useCallback, useState } from "react";

interface UseToySelectionReturn {
  selectedToys: { [id: string]: number };
  addToy: (toy: Toy) => void;
  removeToy: (toyId: string) => void;
  getToyCount: (toyId: string) => number;
  getTotalCount: () => number;
}

export const useToy = (): UseToySelectionReturn => {
  const [selectedToys, setSelectedToys] = useState<{ [id: string]: number }>(
    {}
  );

  const addToy = useCallback((toy: Toy) => {
    setSelectedToys((prev) => ({
      ...prev,
      [toy.id]: (prev[toy.id] || 0) + 1,
    }));
  }, []);

  const removeToy = useCallback((toyId: string) => {
    setSelectedToys((prev) => {
      const updatedToys = { ...prev };
      if (updatedToys[toyId] > 1) {
        updatedToys[toyId]--;
      } else {
        delete updatedToys[toyId];
      }
      return updatedToys;
    });
  }, []);

  const getToyCount = useCallback(
    (toyId: string) => selectedToys[toyId] || 0,
    [selectedToys]
  );

  const getTotalCount = useCallback(
    () => Object.values(selectedToys).reduce((sum, count) => sum + count, 0),
    [selectedToys]
  );

  return {
    selectedToys,
    addToy,
    removeToy,
    getToyCount,
    getTotalCount,
  };
};
