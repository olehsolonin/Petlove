import css from "./Home.module.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Header from "../Header/Header.jsx";

export default function Home() {
  return (
    <div className={css.homeContainer}>
      <div className={css.topContainer}>
        <Header />
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
    </div>
  );
}
