import css from "./Header.module.css";
import LogoBlack from "../LogoBlack/LogoBlack.jsx";

export default function Header() {
  return (
    <div className={css.headerContainer}>
      <LogoBlack />
      <div className={css.headerBurgerMenu}>|||</div>
    </div>
  );
}
