import axios from 'axios';

const API_BASE = "https://full-stack-developer-server69.herokuapp.com/api";
const TUITS_API = `${API_BASE}/tuits`;

export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API);
    return response.data;
}
export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit);
    return response.data;
}
export const deleteTuit = async (tuit) => {
    const response = await axios.delete(`${TUITS_API}/${tuit._id}`);
    return response.data;
}
export const updateTuit = async (tuit) => {
    const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
}
