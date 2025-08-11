import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './newsSlice.js';
import searchFieldReducer from './searchFieldSlice.js';
import searchFriendsReducer from './friendsSlice.js';
import NoticesReducer from "./noticesSlice.js";
import authReducer from './authSlice.js';
import userInfoReducer from './userInfoSlice.js';

export const store = configureStore({
	reducer: {
		news: newsReducer,
		searchField: searchFieldReducer,
		searchFriends: searchFriendsReducer,
		notices: NoticesReducer,
		auth: authReducer,
		userInfo: userInfoReducer,
	},
});