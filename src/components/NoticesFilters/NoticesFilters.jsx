import SearchField from "../SearchField/SearchField";
import css from "./NoticesFilters.module.css";
import { useEffect } from "react";
import {
  fetchCategories,
  fetchSex,
  fetchSpecies,
  fetchLocations,
} from "../../fetchReq";
import { useSelector, useDispatch } from "react-redux";
import {
  addCategories,
  addSex,
  addSpecies,
  addLocations,
  addParams,
} from "../../redux/noticesSlice.js"; // <-- правильный экшен
import { useId } from "react";
import { Formik, Form, Field } from "formik";
import Select from "react-select";
import LocationSelect from "../Select/Select.jsx"; // путь подставь свой

export default function NoticesFilters() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCatalog = async () => {
      try {
        const res = await fetchCategories();
        dispatch(addCategories(res)); // <-- правильный экшен
      } catch (error) {
        console.error("Помилка завантаження категорій:", error);
      }
    };
    const getSex = async () => {
      try {
        const res = await fetchSex();
        dispatch(addSex(res)); // <-- правильный экшен
      } catch (error) {
        console.error("Помилка завантаження статі:", error);
      }
    };

    const getSpecies = async () => {
      try {
        const res = await fetchSpecies();
        dispatch(addSpecies(res)); // <-- правильный экшен
      } catch (error) {
        console.error("Помилка завантаження:", error);
      }
    };

    const getLocations = async () => {
      try {
        const res = await fetchLocations();
        dispatch(addLocations(res)); // <-- правильный экшен
      } catch (error) {
        console.error("Помилка завантаження доступних локацій:", error);
      }
    };

    getCatalog();
    getSex();
    getSpecies();
    getLocations();
  }, [dispatch]);

  const categories = useSelector((state) => state.notices.categories);
  const sexOptions = useSelector((state) => state.notices.sex);
  const speciesOptions = useSelector((state) => state.notices.species);
  const locationsOptions = useSelector((state) => state.notices.locations);

  const initialValues = {
    keyword: "",
    catalog: "",
    sex: "",
    species: "",
    locations: null,
  };

  const catalogId = useId();
  const speciesFieldId = useId();
  const sexFieldId = useId();

  const handleSubmit = (values, actions) => {
    const cleanedValues = {};

    for (const key in values) {
      const value = values[key];
      if (value !== "" && value !== null && value !== undefined) {
        cleanedValues[key] = value;
      }
    }

    console.log(cleanedValues); // Тільки заповнені поля
    dispatch(addParams(cleanedValues));

    console.log(values);
    actions.resetForm();
  };
  console.log(typeof categories);

  return (
    <div className={css.noticesFiltersContainer}>
      <div className={css.filtersWrapper}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, handleChange }) => (
            <Form className={css.formikWrapper}>
              <SearchField
                name="keyword"
                value={values.keyword}
                onChange={handleChange}
                insideFormik={true}
              />
              <div className={css.catalogSexWrapper}>
                <Field
                  as="select"
                  name="catalog"
                  id={catalogId}
                  className={css.catalogSexSelects}
                >
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

                <Field
                  as="select"
                  name="sex"
                  id={sexFieldId}
                  className={css.catalogSexSelects}
                >
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
              </div>

              <div className={css.typeWrapper}>
                <Field
                  as="select"
                  name="species"
                  id={speciesFieldId}
                  className={css.typeSelects}
                >
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
              </div>
              <LocationSelect name="locations" />

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
