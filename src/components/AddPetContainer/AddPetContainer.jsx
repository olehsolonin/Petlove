import css from "./AddPetContainer.module.css";
import Header from "../Header/Header.jsx";
import PetBlockDog from "../PetBlockDog/PetBlockDog.jsx";
import AddPetForm from "../AddPetForm/AddPetForm.jsx";

export default function AddPetContainer() {
  return (
    <div className={css.addPetContainer}>
      <Header />
      <div className={css.imageWrapperContainer}>
        <PetBlockDog
          src="/src/img/dogInGlasses-2x.png"
          width={335}
          height={213}
        />
      </div>
      <AddPetForm />
    </div>
  );
}
