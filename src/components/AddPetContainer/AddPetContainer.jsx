import css from "./AddPetContainer.module.css";
import Header from "../Header/Header.jsx";
import PetBlockDog from "../PetBlockDog/PetBlockDog.jsx";
import AddPetForm from "../AddPetForm/AddPetForm.jsx";
import dogInGlasses2x from "../../img/dogInGlasses-2x.png";

export default function AddPetContainer() {
  return (
    <div className={css.addPetContainer}>
      <Header />
      <div className={css.imageWrapperContainer}>
        <PetBlockDog
          src={dogInGlasses2x}
          width={335}
          height={213}
        />
      </div>
      <AddPetForm />
    </div>
  );
}
