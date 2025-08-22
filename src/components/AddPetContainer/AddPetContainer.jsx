import css from "./AddPetContainer.module.css";
import Header from "../Header/Header.jsx";
import PetBlockDog from "../PetBlockDog/PetBlockDog.jsx";

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
      <h1 className={css.title}>Add Pet Container Component</h1>
    </div>
  );
}
