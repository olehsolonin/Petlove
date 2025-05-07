import SearchField from "../SearchField/SearchField";
import css from "./NoticesFilters.module.css";
import { useEffect } from "react";
import { fetchCategories, fetchSex, fetchSpecies } from "../../fetchReq";
import { useSelector, useDispatch } from "react-redux";
import { addCategories, addSex, addSpecies } from "../../redux/noticesSlice.js"; // <-- правильный экшен
import { useId } from "react";
import { Formik, Form, Field } from "formik";

export default function NoticesFilters() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCatalog = async () => {
      try {
        const res = await fetchCategories();
        dispatch(addCategories(res)); // <-- правильный экшен
      } catch (error) {
        console.error("Ошибка загрузки категорий:", error);
      }
    };
    const getSex = async () => {
      try {
        const res = await fetchSex();
        dispatch(addSex(res)); // <-- правильный экшен
      } catch (error) {
        console.error("Ошибка загрузки пола:", error);
      }
    };

    const getSpecies = async () => {
      try {
        const res = await fetchSpecies();
        dispatch(addSpecies(res)); // <-- правильный экшен
      } catch (error) {
        console.error("Ошибка загрузки разновидностей:", error);
      }
    };

    getCatalog();
    getSex();
    getSpecies();
  }, [dispatch]);

  const categories = useSelector((state) => state.notices.categories);

  const initialValues = {
    username: "",
    email: "",
    message: "",
    level: "good",
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.noticesFiltersContainer}>
      <SearchField />
      <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <label htmlFor={nameFieldId}>Username</label>
            <Field type="text" name="username" id={nameFieldId} />

            <label htmlFor={emailFieldId}>Email</label>
            <Field type="email" name="email" id={emailFieldId} />

            <label htmlFor={msgFieldId}>Message</label>
            <Field as="textarea" name="message" id={msgFieldId} rows="5" />

            <label htmlFor={levelFieldId}>Service satisfaction level</label>
            <Field as="select" name="level" id={levelFieldId}>
              <option value="good">Good</option>
              <option value="neutral">Neutral</option>
              <option value="bad">Bad</option>
            </Field>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
