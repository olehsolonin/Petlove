import SearchField from "../SearchField/SearchField";
import css from "./NoticesFilters.module.css";
import { useEffect } from "react";
import { fetchCategories, fetchSex, fetchSpecies } from "../../fetchReq";
import { useSelector, useDispatch } from "react-redux";
import { addCategories, addSex, addSpecies } from "../../redux/noticesSlice.js"; // <-- правильный экшен

export default function NoticesFilters() {
  const dispatch = useDispatch();
  //   const friends = useSelector((state) => state.searchFriends.friends);

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

  return (
    <div className={css.noticesFiltersContainer}>
      <SearchField />
      <div>
        <h1>Salam</h1>
      </div>
    </div>
  );
}
