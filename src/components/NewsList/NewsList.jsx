import NewsItem from "../NewsItem/NewsItem";
import css from "./NewsList.module.css";

export default function NewsList() {
  return (
    <div className={css.newsListContainer}>
      <NewsItem />
    </div>
  );
}
