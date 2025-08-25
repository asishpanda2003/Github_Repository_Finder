import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const searchRepositories = (term, pageNum) => {
    return axios.get(`${API_BASE_URL}/search`, {
        params: { q: term, page: pageNum },
    });
};

export const getPreviousSearches = () => {
    return axios.get(`${API_BASE_URL}/searches`);
};

export const deleteSearchTerm = (id) => {
    return axios.delete(`${API_BASE_URL}/searches/${id}`);
};

export const saveSearchTerm = (term) => {
    return axios.post(`${API_BASE_URL}/searches`, { term });
};