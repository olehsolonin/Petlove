import css from "./FriendsList.module.css";
import { fetchFriends } from "../../fetchReq.js";
import { useSelector, useDispatch } from "react-redux";
import { getFriends } from "../../redux/friendsSlice.js";
import { useEffect } from "react";
import FriendsItem from "../FriendsItem/FriendsItem.jsx";

export default function FriendsList() {
  const dispatch = useDispatch();
  const friends = useSelector((state) => state.searchFriends.friends);

  useEffect(() => {
    const loadFriends = async () => {
      try {
        const res = await fetchFriends();
        dispatch(getFriends(res));
      } catch (error) {
        console.error("Ошибка загрузки друзей:", error);
      }
    };

    loadFriends();
  }, [dispatch]);

  return (
    <div>
      {friends.length > 0 ? (
        <ul className={css.friendsList}>
          {friends.map((item) => {
            return (
              <li key={item._id}>
                <FriendsItem friends={item} />
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
