import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	_id: "",
	name: "",
	email: "",
	avatar: "",
	phone: "",
	token: "",
	noticesViewed: [],
	noticesFavorites: [],
	pets: [],
	createdAt: "",
	updatedAt: "",
};

const userInfoSlice = createSlice({
	name: "userInfo",
	initialState,
	reducers: {
		userDataAll(state, action) {
			return { ...state, ...action.payload };
		},
		userDataID(state, action) {
			state._id = action.payload;
		},
		userDataName(state, action) {
			state.name = action.payload;
		},
		userDataEmail(state, action) {
			state.email = action.payload;
		},
		userDataAvatar(state, action) {
			state.avatar = action.payload;
		},
		userDataPhone(state, action) {
			state.phone = action.payload;
		},
		userDataToken(state, action) {
			state.token = action.payload;
		},
		userDataNoticesViewed(state, action) {
			state.noticesViewed = action.payload || [];
		},
		userDataNoticesFavorites(state, action) {
			state.noticesFavorites = action.payload || [];
		},
		userDataPets(state, action) {
			state.pets = action.payload || [];
		},
		userDataCreatedAt(state, action) {
			state.createdAt = action.payload;
		},
		userDataUpdatedAt(state, action) {
			state.updatedAt = action.payload;
		},
		userDataClear() {
			return initialState;
		},
	},
});

export const {
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
} = userInfoSlice.actions;

export default userInfoSlice.reducer;
