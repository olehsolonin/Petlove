import css from "./UserCard.module.css";
import EditUserBtn from "../EditUserBtn/EditUserBtn.jsx";
import UserBlock from "../UserBlock/UserBlock.jsx";
import PetsBlock from "../PetsBlock/PetsBlock.jsx";
import LogOutBtn from "../LogOutBtn/LogOutBtn.jsx";

export default function UserCard() {
  return (
    <div className={css.userCard}>
      <EditUserBtn />
      <UserBlock />
      <PetsBlock />
      <LogOutBtn />
      {/* Additional user information can be added here */}
    </div>
  );
}
