import axios from 'axios';
import {
    API_ROOT,
    ALL_AUTHORS_API,
    ALL_CATEGORIES_API,
    BOOK_BY_CATEGORY_API
} from "./constant";

const AUTHOR_ACTION = {
    getAll: async () => {
        return await axios.post(`${API_ROOT}${ALL_AUTHORS_API}`, {
            udid: 'fgldng',
            phone: ''
        }).then((resp) => resp.data.data);
    },
    bookbyauthor: async (author_id) => {
        return axios.post(`${API_ROOT}/app/bookbyauthor`, {
            udid: 'fgldng',
            phone: 'tertr',
            publisher_id: author_id
        }).then((resp) => resp.data.result)
    }
};


const CATEGORY_ACTION = {
    getAll: async () => {
        return await axios.post(`${API_ROOT}${ALL_CATEGORIES_API}`, {
            udid: 'fgldng',
            phone: ''
        }).then((resp) => resp.data.result)
    },
    bookbycategory: async (category_id) => {
        return axios.post(`${API_ROOT}${BOOK_BY_CATEGORY_API}`, {
            udid: 'fgldng',
            phone: '',
            category_id: category_id
        }).then((resp) => resp.data)
    }
};

const BOOK_ACTION = {
    bookbyseries: async (series_id) => {
        return axios.post(`${API_ROOT}/audiobook_by_series`, {
            udid: 'fgldng',
            phone: 'tertr',
            series_id: series_id
        }).then((resp) => resp.data.data)
    }
};

export default {
    AUTHOR_ACTION,
    CATEGORY_ACTION,
    BOOK_ACTION
}