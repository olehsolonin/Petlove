import css from "./PetsBlock.module.css";
import AddPet from "../AddPet/AddPet.jsx";

export default function PetsBlock() {
  return (
    <div className={css.petsBlockContainer}>
      <AddPet />
    </div>
  );
}
