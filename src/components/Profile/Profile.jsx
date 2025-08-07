import css from "./Profile.module.css";
import UserCard from "../UserCard/UserCard.jsx";
import MyNotices from "../MyNotices/MyNotices.jsx";
import Header from "../Header/Header.jsx";

export default function Profile() {
  return (
    <div className={css.profileContainer}>
      <Header />
      <UserCard />
      <MyNotices />
    </div>
  );
}
