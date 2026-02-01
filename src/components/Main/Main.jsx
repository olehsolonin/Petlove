import css from "./Main.module.css";
// import { FaHeart } from "react-icons/fa6";
import Logo from "../Logo/Logo.jsx";

export default function Main() {
  return (
    <div className={css.background}>
      <Logo />
    </div>
  );
}
