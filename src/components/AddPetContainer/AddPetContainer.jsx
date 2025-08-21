import css from "./AddPetContainer.module.css";
import Header from "../Header/Header.jsx";
import PetBlockDog from "../PetBlockDog/PetBlockDog.jsx";

export default function AddPetContainer() {
  return (
    <div className={css.addPetContainer}>
      <Header />
      <PetBlockDog className={css.petBlockIMG} />
      <h1 className={css.title}>Add Pet Container Component</h1>
    </div>
  );
}
