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
  const sexOptions = useSelector((state) => state.notices.sex);
  const speciesOptions = useSelector((state) => state.notices.species);

  const initialValues = {
    catalog: "",
    sex: "",
    species: "",
    email: "",
    message: "",
    level: "good",
  };

  const catalogId = useId();
  const speciesFieldId = useId();
  const sexFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  console.log(typeof categories);

  return (
    <div className={css.noticesFiltersContainer}>
      <SearchField />
      <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Field as="select" name="catalog" id={catalogId}>
              <option value="" disabled hidden>
                Category
              </option>
              <option value="all">Show all</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Field>

            <Field as="select" name="sex" id={sexFieldId}>
              <option value="" disabled hidden>
                By gender
              </option>
              <option value="all">Show all</option>
              {sexOptions.map((sex) => (
                <option key={sex} value={sex}>
                  {sex}
                </option>
              ))}
            </Field>

            <Field as="select" name="species" id={speciesFieldId}>
              <option value="" disabled hidden>
                By type
              </option>
              <option value="all">Show all</option>
              {speciesOptions.map((species) => (
                <option key={species} value={species}>
                  {species}
                </option>
              ))}
            </Field>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
