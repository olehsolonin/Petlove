import css from "./NewsItem.module.css";

export default function NewsItem({ news }) {
  const { imgUrl, title, date, text, url } = news; // Деструктуризируем внутри
  //   console.log(title);
  return (
    <div className={css.newsItemContainer}>
      <div className={css.imageContainer}>
        {" "}
        <img src={imgUrl} alt={title} className={css.imageSettings} />
      </div>
      <div className={css.descriptionContainer}>
        <div className={css.titleTextWrap}>
          <h2 className={css.title}>{title}</h2>
          <p className={css.text}>{text}</p>
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
