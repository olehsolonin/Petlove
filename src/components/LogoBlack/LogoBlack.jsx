import css from "./LogoBlack.module.css";
import { FaHeart } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function LogoBlack() {
  return (
    <div className={css.LogoContainer}>
      <nav className={css.nav}>
        <NavLink to="/home">
          <h1 className={css.mainTitle}>
            petl
            <span className={css.heartIconContainer}>
              <FaHeart className={css.heartIcon} />
            </span>
            ve
          </h1>
        </NavLink>
      </nav>
    </div>
  );
}
