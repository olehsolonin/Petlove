import css from "./NotFound.module.css";
import Header from "../Header/Header.jsx";
import catImage from "../../img/imageCat-1x.jpeg";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home"); // Переход на маршрут signUp
  };

  return (
    <div className={css.notFoundContainer}>
      <Header />
      <div className={css.mainContainer}>
        <div className={css.textContainer}>
          <div className={css.imageContainer}>
            <p className={css.mainTitle}>4</p>
            <div className={css.catContainer}>
              <img src={catImage} alt="cat" className={css.img} />
            </div>{" "}
            <p className={css.mainTitle}>4</p>
          </div>
          <div className={css.textButtonContainer}>
            <p className={css.ooopsText}>Ooops! This page not found :(</p>
            <button
              type="button"
              className={css.button}
              onClick={handleButtonClick}
            >
              To home page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
