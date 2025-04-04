import css from "./Title.module.css";

export default function Title({ title }) {
  return (
    <div className={css.titleContainer}>
      <h1 className={css.newsTitle}>{title}</h1>
    </div>
  );
}
