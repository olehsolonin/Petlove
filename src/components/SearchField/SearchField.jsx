import css from "./SearchField.module.css";
import { useDispatch } from "react-redux";
import { reqResult } from "../../redux/searchFieldSlice.js";
import { addNews } from "../../redux/newsSlice.js";
import { fetchNews } from "../../fetchReq.js";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

export default function SearchField({
  value,
  onChange,
  name = "keyword",
  insideFormik = false,
  onSubmitOutside, // колбек для submit, если нужно обработать снаружи
}) {
  const [localValue, setLocalValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const val = e.target.value;
    if (insideFormik && onChange) {
      onChange(e);
    } else {
      setLocalValue(val);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const keyword = insideFormik ? value : localValue;

    if (!keyword.trim()) return;

    const payload = { keyword };
    dispatch(reqResult(payload));

    const res = await fetchNews(payload);
    dispatch(addNews(res.results));

    if (!insideFormik) {
      setLocalValue("");
    }

    if (onSubmitOutside) {
      onSubmitOutside(keyword);
    }
  };

  // Если компонент используется внутри другой формы, то НЕ рендерим тег <form>
  // иначе рендерим собственную форму
  if (insideFormik) {
    // Без <form> — просто инпут и кнопка, которые работают в общей форме
    return (
      <div className={css.wrapper}>
        <input
          type="text"
          name={name}
          placeholder="Search"
          className={css.searchFieldInput}
          value={value}
          onChange={handleChange}
        />
        <button type="submit" className={css.button}>
          <IoIosSearch />
        </button>
      </div>
    );
  }

  // Если standalone — то со своей формой
  return (
    <form onSubmit={handleSubmit}>
      <div className={css.wrapper}>
        <input
          type="text"
          name={name}
          placeholder="Search"
          className={css.searchFieldInput}
          value={localValue}
          onChange={handleChange}
        />
        <button type="submit" className={css.button}>
          <IoIosSearch />
        </button>
      </div>
    </form>
  );
}
