import SearchField from "../SearchField/SearchField";
import css from "./NoticesFilters.module.css";
import { useEffect } from "react";
import {
  fetchCategories,
  fetchSex,
  fetchSpecies,
  fetchLocations,
  fetchAllNotices,
} from "../../fetchReq";
import { useSelector, useDispatch } from "react-redux";
import {
  addCategories,
  addSex,
  addSpecies,
  addLocations,
  addParams,
  addResults,
} from "../../redux/noticesSlice.js";
import { useId } from "react";
import { Formik, Form, Field } from "formik";
import Select from "react-select";
import LocationSelect from "../Select/Select.jsx";

export default function NoticesFilters() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCatalog = async () => {
      try {
        const res = await fetchCategories();
        dispatch(addCategories(res));
      } catch (error) {
        console.error("Помилка завантаження категорій:", error);
      }
    };
    const getSex = async () => {
      try {
        const res = await fetchSex();
        dispatch(addSex(res));
      } catch (error) {
        console.error("Помилка завантаження статі:", error);
      }
    };

    const getSpecies = async () => {
      try {
        const res = await fetchSpecies();
        dispatch(addSpecies(res));
      } catch (error) {
        console.error("Помилка завантаження:", error);
      }
    };

    const getLocations = async () => {
      try {
        const res = await fetchLocations();
        dispatch(addLocations(res));
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
    byPopularity: "",
    byPrice: "",
  };

  const catalogId = useId();
  const speciesFieldId = useId();
  const sexFieldId = useId();

  const handleSubmit = (values, actions) => {
    const cleanedValues = {};
    console.log(values);

    for (const key in values) {
      const value = values[key];
      if (value !== "" && value !== null && value !== undefined) {
        cleanedValues[key] = value;
      }
    }

    console.log(cleanedValues);
    dispatch(addParams(cleanedValues));
    //  const res = fetchAllNotices(cleanedValues);
    //  dispatch(addResults(res));

    const getResults = async () => {
      try {
        const res = await fetchAllNotices(cleanedValues);
        dispatch(addResults(res.results));
      } catch (error) {
        console.error("Помилка завантаження результатів:", error);
      }
    };

    getResults();

    console.log(values);
    actions.resetForm();
  };
  //   console.log(typeof categories);

  return (
    <div className={css.noticesFiltersContainer}>
      <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, handleChange }) => (
            <Form className={css.formWrapper}>
              <div className={css.topFiltersWrapper}>
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
              </div>
              <div className={css.line}></div>
              <div className={css.bottomFiltersWrapper}>
                <label className={css.labelButtonWrapper}>
                  <Field
                    type="radio"
                    name="byPopularity"
                    value="true"
                    className={css.radioInput}
                  />
                  <span className={css.customButton}>Popular</span>
                </label>

                <label className={css.labelButtonWrapper}>
                  <Field
                    type="radio"
                    name="byPopularity"
                    value="false"
                    className={css.radioInput}
                  />
                  <span className={css.customButton}>Unpopular</span>
                </label>

                <label className={css.labelButtonWrapper}>
                  <Field
                    type="radio"
                    name="byPrice"
                    value="true"
                    className={css.radioInput}
                  />
                  <span className={css.customButton}>Cheap</span>
                </label>

                <label className={css.labelButtonWrapper}>
                  <Field
                    type="radio"
                    name="byPrice"
                    value="false"
                    className={css.radioInput}
                  />
                  <span className={css.customButton}>Expensive</span>
                </label>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
