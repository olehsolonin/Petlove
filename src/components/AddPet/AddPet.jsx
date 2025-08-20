import css from "./AddPet.module.css";
import { IoAddOutline } from "react-icons/io5";

export default function AddPet() {
  return (
    <div className={css.addPetsContainer}>
      {" "}
      <h2 className={css.title}>My pets</h2>
      <button className={css.addPetButton} type="button">
        Add pet
        <span>
          <IoAddOutline className={css.addPetIcon} />
        </span>
      </button>
    </div>
  );
}
