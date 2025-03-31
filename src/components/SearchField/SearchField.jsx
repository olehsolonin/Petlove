import css from "./SearchField.module.css";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { reqResult } from "../../redux/searchFieldSlice.js";
import { addNews } from "../../redux/newsSlice.js";
import { useSelector } from "react-redux";
import { fetchNews } from "../../fetchReq.js";

export default function SearchField() {
  const value = useSelector((state) => state.searchField.request);
  const response = useSelector((state) => state.news.items);
  const dispatch = useDispatch();
  const initialValues = {
    request: "",
  };
  const handleSubmit = async (values, actions) => {
    console.log(values);
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
            name="request"
            className={css.searchFieldInput}
            placeholder="Search"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
