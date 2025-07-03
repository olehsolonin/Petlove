import css from "./NoticesItem.module.css";
import { FaStar } from "react-icons/fa";

export default function NoticesItem({ notice }) {
  const { imgURL, title, date, comment, url, popularity } = notice; // Деструктуризируем внутри
  //   console.log(title);
  return (
    <div className={css.noticesItemContainer}>
      <div className={css.imageContainer}>
        {" "}
        <img src={imgURL} alt={title} className={css.imageSettings} />
      </div>
      <div className={css.descriptionContainer}>
        <div className={css.titleTextWrap}>
          <div className={css.detailsContainer}>
            <div className={css.titlePopularityWrap}>
              <h2 className={css.title}>{title}</h2>
              <div className={css.popularityBlock}>
                <div className={css.starWrap}>
                  {" "}
                  <FaStar className={css.star} />
                </div>
                {popularity}
              </div>
            </div>
            {/* <p className={css.text}>{text}</p> */}
            <div className={css.detailsTextWrap}></div>
          </div>
          <div className={css.commentContainer}>
            <h2>{comment}</h2>
          </div>
        </div>
        <div className={css.dateLinkWrap}>
          <p className={css.dateMarker}>{date}</p>
          <a href={url} className={css.link}>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
