import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "notices",
	initialState: {
		categories: [],
		sex: [],
		species: [],
		locations: [],

		fetchParams: {}, // фильтры (объект)

		results: {
			page: 1,
			perPage: 6,
			results: [],
			totalPages: 1,
		},
	},

	reducers: {
		addCategories(state, action) {
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
		},

		// Меняем страницу (Pagination будет дергать это)
		setPage(state, action) {
			state.results.page = action.payload;
		},

		// Сохраняем полный ответ сервера
		setNoticesResponse(state, action) {
			const { page, perPage, totalPages, results } = action.payload;
			state.results.page = page;
			state.results.perPage = perPage;
			state.results.totalPages = totalPages;
			state.results.results = results;
		},

		// оставим на всякий (если где-то используется)
		addResults(state, action) {
			state.results.results = action.payload;
		},
	},
});

export const {
	addCategories,
	addSex,
	addSpecies,
	addLocations,
	addParams,
	setPage,
	setNoticesResponse,
	addResults,
} = slice.actions;

export default slice.reducer;
