import { toys } from "@/enums/toys";
import { FunctionComponent } from "react";
import Toy from "./toy/Toy";

interface ToysProps {

}

const Toys: FunctionComponent<ToysProps> = () => {
  return (
    <div className="grid grid-cols-3 gap-[11px]">
      {toys.map((toy) => (
        <Toy key={toy.id} {...toy} />
      ))}
    </div>
  );
};

export default Toys;
