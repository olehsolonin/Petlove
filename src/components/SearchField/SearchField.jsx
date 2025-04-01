import css from "./SearchField.module.css";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { reqResult } from "../../redux/searchFieldSlice.js";
import { addNews } from "../../redux/newsSlice.js";
import { useSelector } from "react-redux";
import { fetchNews } from "../../fetchReq.js";

export default function SearchField() {
  const value = useSelector((state) => state.searchField.keyword);
  const response = useSelector((state) => state.news.items);
  const dispatch = useDispatch();
  const initialValues = {
    keyword: "",
  };
  const handleSubmit = async (values, actions) => {
    console.log(values);
    const cleanValues = values.keyword;
    console.log(cleanValues);
    dispatch(reqResult(values)); // ✅ Экшен отправлен
    const res = await fetchNews(values);

    console.log(res);
    dispatch(addNews(res.results));
    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            name="keyword"
            className={css.searchFieldInput}
            placeholder="Search"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
