import css from "./AddPet.module.css";
import { IoAddOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function AddPet() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add-pet");
  };

  return (
    <div className={css.addPetsContainer}>
      {" "}
      <h2 className={css.title}>My pets</h2>
      <button className={css.addPetButton} type="button" onClick={handleClick}>
        Add pet
        <span>
          <IoAddOutline className={css.addPetIcon} />
        </span>
      </button>
    </div>
  );
}
