

import { createSlice } from "@reduxjs/toolkit";

const searchFriendsSlice = createSlice({
	// Ім'я слайсу
	name: "searchFriends",
	// Початковий стан редюсера слайсу
	initialState: {
		friends: [],
	},
	// Об'єкт case-редюсерів
	reducers: {
		getFriends(state, action) {
			// ✅ Immer замінить це на операцію оновлення
			state.friends = action.payload;
		},

	},
});

// Експортуємо фабрики екшенів
export const { getFriends } = searchFriendsSlice.actions;

// Експортуємо редюсер слайсу
export default searchFriendsSlice.reducer;
