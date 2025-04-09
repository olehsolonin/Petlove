import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './newsSlice.js';
import searchFieldReducer from './searchFieldSlice.js';
import searchFriendsSlice from './friendsSlice.js';

export const store = configureStore({
	reducer: {
		news: newsReducer,
		searchField: searchFieldReducer,
		searchFriends: searchFriendsSlice,

	},
});