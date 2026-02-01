import css from "./Friends.module.css";
import FriendsList from "../FriendsList/FriendsList.jsx";
import Header from "../Header/Header.jsx";
import Title from "../Title/Title.jsx";

export default function Friends() {
  return (
    <div className={css.friendsContainer}>
      <Header />
      <div className={css.titleContainer}>
        {" "}
        <Title title="Our friends" />
      </div>
      <FriendsList />
    </div>
  );
}
