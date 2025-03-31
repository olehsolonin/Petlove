import axios from 'axios';


axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchNews = async (filter) => {

	const params = new URLSearchParams(filter);
	const response = await axios.get(`/news?page=1&query=${params}`);
	// const response = await axios.get(`?${params}`);
	console.log(response.data);
	return response.data;

};