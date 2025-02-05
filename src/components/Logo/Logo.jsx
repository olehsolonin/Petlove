import css from "./Logo.module.css";
import { FaHeart } from "react-icons/fa6";
import { Routes, Route, NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div>
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
