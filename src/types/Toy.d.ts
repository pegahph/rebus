interface Toy {
  id: string;
  description: string;
  size: {
    x: number;
    y: number;
    z: number;
    unit: SizeUnit;
  };
  cost: number;
  image: string;
}

type SizeUnit = "cm" | "mm";


