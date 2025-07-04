import css from "./NoticesItem.module.css";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

export default function NoticesItem({ notice }) {
  const {
    imgURL,
    title,
    date,
    comment,
    url,
    popularity,
    birthday,
    name,
    sex,
    species,
    category,
    price,
  } = notice; // Деструктуризируем внутри
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
            <div className={css.detailsTextWrap}>
              <div className={css.detailsSmallBlocks}>
                <p className={css.detailsTitle}>Name</p>
                <p className={css.fetchDetails}>{name}</p>
              </div>
              <div className={css.detailsSmallBlocks}>
                <p className={css.detailsTitle}>Birthday</p>
                <p className={css.fetchDetails}>{birthday}</p>
              </div>
              <div className={css.detailsSmallBlocks}>
                <p className={css.detailsTitle}>Sex</p>
                <p className={css.fetchDetails}>{sex}</p>
              </div>
              <div className={css.detailsSmallBlocks}>
                <p className={css.detailsTitle}>Species</p>
                <p className={css.fetchDetails}>{species}</p>
              </div>
              <div className={css.detailsSmallBlocks}>
                <p className={css.detailsTitle}>Category</p>
                <p className={css.fetchDetails}>{category}</p>
              </div>
            </div>
          </div>
          <div className={css.commentContainer}>
            <h2 className={css.commentText}>{comment}</h2>
          </div>
        </div>
        <div className={css.priceLinkWrap}>
          <div>
            {category === "free" ? (
              <p className={css.priceCategory}>{category}</p>
            ) : (
              <p className={css.priceCategory}>${price}</p>
            )}
          </div>
          <div className={css.buttonLikeBlock}>
            <button type="button" className={css.learnButton}>
              Learn more
            </button>
            <button type="button" className={css.likeButton}>
              <CiHeart className={css.heartButton} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
