import { useState, useCallback, Dispatch, SetStateAction } from "react";

export interface SelectedToy extends Toy {
  count: number;
}

export interface UseToyReturn {
  selectedToys: SelectedToy[];
  addToy: (toy: Toy) => void;
  removeToy: (toyId: string) => void;
  getToyCount: (toyId: string) => number;
  getTotalCount: () => number;
}

export const useToy = (
  initialState?: SelectedToy[],
  setState?: Dispatch<SetStateAction<SelectedToy[]>>
): UseToyReturn => {
  const [internalState, setInternalState] = useState<SelectedToy[]>(
    initialState || []
  );

  const selectedToys = setState ? initialState! : internalState;
  const setSelectedToys = setState || setInternalState;

  const addToy = useCallback(
    (toy: Toy) => {
      setSelectedToys((prev) => {
        const existingToyIndex = prev.findIndex((t) => t.id === toy.id);
        if (existingToyIndex > -1) {
          return prev.map((t, index) =>
            index === existingToyIndex ? { ...t, count: t.count + 1 } : t
          );
        } else {
          return [...prev, { ...toy, count: 1 }];
        }
      });
    },
    [setSelectedToys]
  );

  const removeToy = useCallback(
    (toyId: string) => {
      setSelectedToys((prev) =>
        prev
          .map((t) => (t.id === toyId ? { ...t, count: t.count - 1 } : t))
          .filter((t) => t.count > 0)
      );
    },
    [setSelectedToys]
  );

  const getToyCount = useCallback(
    (toyId: string) => selectedToys.find((t) => t.id === toyId)?.count || 0,
    [selectedToys]
  );

  const getTotalCount = useCallback(
    () => selectedToys.reduce((sum, toy) => sum + toy.count, 0),
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
