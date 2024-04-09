import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/api/comments/';

export const getComments = async () => {

    try {
        const response = await axios.get(API_URL);
        // console.log(response.data);
        return response.data;

    } catch (e) {
        console.log("Error while fetching data", e);
    }
}

export const updateComments = async (id, commentData) => {
    try {
        console.log(id.id);
        const response = await axios.put(`${API_URL}${id.id}/`, commentData);
        return response.data;
    } catch (e) {
        console.error("Error while updating data", e);
        throw e;
    }
}

export const addComments = async (commentData) => {

    try {
        const response = await axios.post(API_URL, commentData);
        return response.data;

    } catch (e) {
        console.log("Error while adding data", e);
    }
}

export const deleteComments = async (id) => {
    try {
        // const response = await axios.delete(`${API_URL}${id}`, commentData);
        console.log(id);
        const response = await axios.delete(`${API_URL}${id}/`);
        return response.data;

    } catch (e) {
        console.log("Error while deleting data", e);
        throw e;
    }
}