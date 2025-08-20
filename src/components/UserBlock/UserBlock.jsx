import css from "./UserBlock.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";

export default function UserBlock() {
  const userName = useSelector((state) => state.userInfo.name);
  const userEmail = useSelector((state) => state.userInfo.email);
  const userPhone = useSelector((state) => state.userInfo.phone);
  const userAvatar = useSelector((state) => state.userInfo.avatar);
  return (
    <div className={css.userBlock}>
      <div className={css.editPhotoBlock}>
        <div className={css.avatarContainer}>
          {userAvatar ? (
            <img
              src={userAvatar}
              alt="User avatar"
              className={css.userAvatarPhoto}
            />
          ) : (
            <IoPersonSharp className={css.icon} />
          )}
        </div>
        {/* <button className={css.linkButton}>Upload photo</button> */}
      </div>
      <div className={css.editProfileInfo}>
        <h2 className={css.infoTitle}>My information</h2>
        <div className={css.userInfo}>
          <p className={css.userInfoDetails}>{userName}</p>
          <p className={css.userInfoDetails}>{userEmail}</p>
          <p className={css.userInfoDetails}>
            {userPhone ? userPhone : "+380"}
          </p>
        </div>
      </div>
    </div>
  );
}
