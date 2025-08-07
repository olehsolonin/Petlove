import css from "./EditUserBtn.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";

export default function EditUserBtn() {
  return (
    <div className={css.editProfileContainer}>
      <button className={css.profileBtn}>
        User{" "}
        <span>
          <IoPersonSharp className={css.icon} />
        </span>
      </button>
      <button className={css.editBtn}>
        <span>
          <FiEdit2 className={css.editPencil} />
        </span>
      </button>
    </div>
  );
}
