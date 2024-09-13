import { useState, useCallback, Dispatch, SetStateAction } from "react";

export interface SelectedToys {
  [id: string]: number;
}

export interface UseToyReturn {
  selectedToys: SelectedToys;
  addToy: (toy: Toy) => void;
  removeToy: (toyId: string) => void;
  getToyCount: (toyId: string) => number;
  getTotalCount: () => number;
}

export const useToy = (
  initialState?: SelectedToys,
  setState?: Dispatch<SetStateAction<SelectedToys>>
): UseToyReturn => {
  const [internalState, setInternalState] = useState<SelectedToys>(
    initialState || {}
  );

  const selectedToys = setState ? initialState! : internalState;
  const setSelectedToys = setState || setInternalState;

  const addToy = useCallback(
    (toy: Toy) => {
      setSelectedToys((prev) => ({
        ...prev,
        [toy.id]: (prev[toy.id] || 0) + 1,
      }));
    },
    [setSelectedToys]
  );

  const removeToy = useCallback(
    (toyId: string) => {
      setSelectedToys((prev) => {
        const updatedToys = { ...prev };
        if (updatedToys[toyId] > 1) {
          updatedToys[toyId]--;
        } else {
          delete updatedToys[toyId];
        }
        return updatedToys;
      });
    },
    [setSelectedToys]
  );

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
