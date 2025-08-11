import css from "./EditUserBtn.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";

export default function EditUserBtn() {
  const userName = useSelector((state) => state.userInfo.name);
  return (
    <div className={css.editProfileContainer}>
      <button className={css.profileBtn}>
        {userName}
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
