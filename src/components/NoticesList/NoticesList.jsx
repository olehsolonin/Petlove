import css from "./NoticesList.module.css";
import NoticesItem from "../NoticesItem/NoticesItem.jsx";
import { useSelector } from "react-redux";

export default function NoticesList() {
  const notices = useSelector((state) => state.notices.results.results);
  console.log("news из store:", notices);

  return (
    //  <ul className={css.list}>
    //    {notices.map((notice) => (
    //      <NoticesItem key={notice.id} notice={notice} />
    //    ))}
    //  </ul>
    <div className={css.noticesListContainer}>
      {notices.length > 0 ? (
        <ul className={css.noticesList}>
          {notices.map((notice) => {
            return (
              <li key={notice._id}>
                <NoticesItem notice={notice} />
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
