import css from "./NewsTitle.module.css";

export default function NewsTitle() {
  return (
    <div className={css.titleContainer}>
      <h1 className={css.newsTitle}>News</h1>
    </div>
  );
}
