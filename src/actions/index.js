import types from "./types";
import axios from "axios";

const BASE_URL = "http://api.reactprototypes.com";
// const API_KEY = "?key=c318democso";
const API_KEY = "?key=c318demouser";

export function getListData() {
	const response = axios.get(`${BASE_URL}/todos${API_KEY}`);

	return {
		type: types.GET_LIST_DATA,
		payload: response
	};
}
