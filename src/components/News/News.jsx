import css from "./News.module.css";
import Header from "../Header/Header.jsx";
import NewsTitle from "../NewsTitle/NewsTitle.jsx";
import SearchField from "../SearchField/SearchField.jsx";
// import { fetchNews } from "../../fetchReq.js";
import NewsList from "../NewsList/NewsList.jsx";

export default function News() {
  //   fetchNews("dog");
  return (
    <div className={css.newsContainer}>
      <Header />
      <NewsTitle />
      <SearchField />
      <NewsList />
    </div>
  );
}
