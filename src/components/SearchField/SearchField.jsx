import css from "./SearchField.module.css";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { reqResult } from "../../redux/searchFieldSlice.js";

export default function SearchField() {
  const dispatch = useDispatch();
  const initialValues = {
    request: "",
  };
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(reqResult(values)); // ✅ Экшен отправлен
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
