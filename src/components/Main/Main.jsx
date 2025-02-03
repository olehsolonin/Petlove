import css from "./Main.module.css";
import { FaHeart } from "react-icons/fa6";
import { Routes, Route, NavLink } from "react-router-dom";

export default function Main() {
  return (
    <div className={css.background}>
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
