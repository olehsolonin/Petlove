import css from "./Profile.module.css";
import UserCard from "../UserCard/UserCard.jsx";
import MyNotices from "../MyNotices/MyNotices.jsx";
import Header from "../Header/Header.jsx";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFullUserInfo } from "../../fetchReq.js";
import {
  userDataAll,
  userDataID,
  userDataName,
  userDataEmail,
  userDataAvatar,
  userDataPhone,
  userDataToken,
  userDataNoticesViewed,
  userDataNoticesFavorites,
  userDataPets,
  userDataCreatedAt,
  userDataUpdatedAt,
  userDataClear,
} from "../../redux/userInfoSlice.js";

export default function Profile() {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (userToken !== null && userToken !== undefined && userToken !== "") {
      (async () => {
        try {
          const res = await fetchFullUserInfo(userToken);
          //  console.log(res);
          //  console.log(typeof res);

          dispatch(userDataID(res._id));
          dispatch(userDataName(res.name));
          dispatch(userDataEmail(res.email));
          dispatch(userDataAvatar(res.avatar));
          dispatch(userDataPhone(res.phone));
          dispatch(userDataToken(userToken));
          dispatch(userDataNoticesViewed(res.noticesViewed));
          dispatch(userDataNoticesFavorites(res.noticesFavorites));
          dispatch(userDataPets(res.pets));
          dispatch(userDataCreatedAt(res.createdAt));
          dispatch(userDataUpdatedAt(res.updatedAt));
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      })();
    }
  }, [userToken, dispatch]);

  return (
    <div className={css.profileContainer}>
      <Header />
      <UserCard />
      <MyNotices />
    </div>
  );
}
