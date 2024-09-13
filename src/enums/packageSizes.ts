interface Size {
  x: number;
  y: number;
  z: number;
  unit: "cm" | "mm";
}
export interface Package {
  size: Size;
  cost: number;
}
export const packageSizes: Package[] = [
  {
    size: {
      x: 20,
      y: 20,
      z: 20,
      unit: "cm",
    },
    cost: 10,
  },
  {
    size: {
      x: 30,
      y: 30,
      z: 30,
      unit: "cm",
    },
    cost: 20,
  },
  {
    size: {
      x: 40,
      y: 40,
      z: 40,
      unit: "cm",
    },
    cost: 30,
  },
];
