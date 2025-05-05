import axios from 'axios';


axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchNews = async (filter) => {

	const params = new URLSearchParams({
		_limit: 5,
		_page: 1,
	});
	console.log(params)
	const response = await axios.get(`/news?keyword=${filter.keyword}&${params}`);
	// const response = await axios.get(`?${params}`);
	console.log(response.data);
	return response.data;

};

export const fetchFriends = async () => {
	const response = await axios.get(`/friends`);
	// const response = await axios.get(`?${params}`);
	console.log(response.data);
	return response.data;
};

export const fetchCategories = async () => {
	const response = await axios.get(`/notices/categories`);
	// const response = await axios.get(`?${params}`);
	console.log(response.data);
	return response.data;
};

export const fetchSex = async () => {
	const response = await axios.get(`/notices/sex`);
	// const response = await axios.get(`?${params}`);
	console.log(response.data);
	return response.data;
};

export const fetchSpecies = async () => {
	const response = await axios.get(`/notices/species`);
	// const response = await axios.get(`?${params}`);
	console.log(response.data);
	return response.data;
};
