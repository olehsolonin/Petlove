import css from "./Home.module.css";
import { Routes, Route, NavLink } from "react-router-dom";
// import Header from "../Header/Header.jsx";
import homePhoto1x from "../../img/homePhoto-1x.jpg";
import homePhoto2x from "../../img/homePhoto-2x.jpg";
import { FaHeart } from "react-icons/fa6";

export default function Home() {
  return (
    <div className={css.homeContainer}>
      <div className={css.topContainer}>
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
        <div className={css.textCoantainer}>
          <h2 className={css.titleText}>
            Take good <span>care</span> of your small pets
          </h2>
          <p className={css.descriptionText}>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
      </div>
      <div className={css.photoContainer}>
        <picture>
          <source
            srcSet={`${homePhoto1x} 1x, ${homePhoto2x} 2x`}
            media="(min-width: 320px)"
          />
          <img
            src={homePhoto1x}
            alt="Красивая картинка"
            className={css.photoSettings}
          />
        </picture>
      </div>
    </div>
  );
}
