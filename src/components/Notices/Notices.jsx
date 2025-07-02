import Header from "../Header/Header.jsx";
import Title from "../Title/Title.jsx";
import css from "./Notices.module.css";
import NoticesFilters from "../NoticesFilters/NoticesFilters.jsx";
import NoticesList from "../NoticesList/NoticesList.jsx";

export default function Notices() {
  return (
    <div className={css.noticesContainer}>
      <Header />
      <div className={css.titleContainer}>
        {" "}
        <Title title="Find your favorite pet" />
      </div>
      <NoticesFilters />
      <NoticesList />
    </div>
  );
}
