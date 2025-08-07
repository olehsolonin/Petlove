import css from "./UserBlock.module.css";
import { IoPersonSharp } from "react-icons/io5";

export default function UserBlock() {
  return (
    <div className={css.userBlock}>
      <div className={css.editPhotoBlock}>
        <div className={css.avatarContainer}>
          {" "}
          <span>
            <IoPersonSharp className={css.icon} />
          </span>
        </div>
        <button className={css.linkButton}>Upload photo</button>
      </div>
      <div className={css.editProfileInfo}>
        <h2 className={css.infoTitle}>My information</h2>
        <div className={css.userInfo}>
          <p className={css.userInfoDetails}>Anna</p>
          <p className={css.userInfoDetails}>anna@example.com</p>
          <p className={css.userInfoDetails}>+123456789</p>
        </div>
      </div>
    </div>
  );
}
