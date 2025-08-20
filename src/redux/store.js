import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice.js';
import userInfoReducer from './userInfoSlice.js';
import newsReducer from './newsSlice.js';
import searchFieldReducer from './searchFieldSlice.js';
import searchFriendsReducer from './friendsSlice.js';
import NoticesReducer from './noticesSlice.js';


const authPersistConfig = { key: 'auth', storage };
const userInfoPersistConfig = { key: 'userInfo', storage };

export const store = configureStore({
	reducer: {
		auth: persistReducer(authPersistConfig, authReducer),
		userInfo: persistReducer(userInfoPersistConfig, userInfoReducer),
		news: newsReducer,
		searchField: searchFieldReducer,
		searchFriends: searchFriendsReducer,
		notices: NoticesReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					'persist/PERSIST',
					'persist/REHYDRATE',
					'persist/PAUSE',
					'persist/FLUSH',
					'persist/PURGE',
					'persist/REGISTER',
				],
			},
		}),
});

export const persistor = persistStore(store);
