import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	// Ім'я слайсу
	name: "notices",
	// Початковий стан редюсера слайсу
	initialState: {
		categories: [],
		sex: [],
		species: [],
		locations: [],
		fetchParams: [],

	},
	// Об'єкт case-редюсерів
	reducers: {
		addCategories(state, action) {
			// ✅ Immer замінить це на операцію оновлення
			state.categories = action.payload;
		},
		addSex(state, action) {
			state.sex = action.payload;
		},
		addSpecies(state, action) {
			state.species = action.payload;
		},
		addLocations(state, action) {
			state.locations = action.payload;
		},
		addParams(state, action) {
			state.fetchParams = action.payload;
		}

	},
});

// Експортуємо фабрики екшенів
export const { addCategories, addSex, addSpecies, addLocations, addParams } = slice.actions;

// Експортуємо редюсер слайсу
export default slice.reducer;
