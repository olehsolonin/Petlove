import NewsItem from "../NewsItem/NewsItem";
import css from "./NewsList.module.css";
import { useSelector } from "react-redux";

export default function NewsList() {
  const news = useSelector((state) => state.news.items); // Получаем новости из store
  // console.log("news из store:", news);
  //   news.forEach((item, index) => console.log(`Элемент ${index}:`, item));

  return (
    <div className={css.newsListContainer}>
      {news.length > 0 ? (
        <ul className={css.newsList}>
          {news.map((item) => {
            return (
              <li key={item._id}>
                <NewsItem news={item} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Новини не знайдено</p>
      )}
    </div>
  );
}
