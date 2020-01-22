// "use strict";

import Vue from 'vue';
import Vuex from 'vuex'
// import api from '../api_action';
import axios from 'axios';
import {
    AUTHORS,
    HOMEPAGE,
    SET_TOOL_BAR,
    CATEGORIES,
    BOOK_BY_CATEGORY,
    BOOK_BY_AUTHOR,
    LOGIN,
    LOGIN_URL,
    LOGIN_ERR
} from "../constant";
import api_action from '../api_action';


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        authors: [],
        category: [],
        books: [],
        book: {},
        homepage: [],
        toolBarTitle: 'APP',
        categoryName: '',
        s_title: '',
        is_login: localStorage.getItem('auth_token') !== null ? true : false
    },
    getters: {
        books: state => {
            return state.books
        },
        loginStatus: state => {
            return state.is_login
        }
    },
    mutations: {
        [AUTHORS](state, resp) {
            state.authors = resp
        },
        [HOMEPAGE](state, resp) {
            state.homepage = resp
        },
        [SET_TOOL_BAR](state, title) {
            state.toolBarTitle = title
        },
        [CATEGORIES](state, resp) {
            state.category = resp
        },
        [BOOK_BY_CATEGORY](state, resp) {
            state.books = resp.result;
            state.categoryName = resp.category;
        },
        [BOOK_BY_AUTHOR](state, resp) {
            state.books = resp
        },
        BOOK_BY_SERIES(state, resp) {
            state.books = resp
            // console.log(resp[0].s_title)
            state.s_title = resp[0].s_title
        },
        [LOGIN](state, data) {
            state.userdata = data
            state.is_login = true
        },
        LOGIN_ERR(state){
            state.is_login=false
        }
    },
    actions: {
        login({
            commit
        }, userdata) {
            let {
                username,
                password
            } = userdata;
            // console.log(userdata)
            axios.post(LOGIN_URL, {
                username: username,
                password: password
            }).then((resp) => {
                console.log(resp.data.status)
                if (resp.data.status === 1) {
                    localStorage.setItem('auth_token', resp.data.token);
                    commit(LOGIN, resp.data)
                }else{
                    commit(LOGIN_ERR);
                }
            });
        },

        homepage({
            commit
        }) {
            axios.post('http://localhost/narsin_no_login/public/api/home', {
                udid: 'fgldng',
                phone: ''
            }).then(resp => commit(HOMEPAGE, resp.data));
        },

        getAuthors() {
            api_action.AUTHOR_ACTION.getAll().then((resp) => {
                this.commit(AUTHORS, resp)
            })
        },

        categories() {
            api_action.CATEGORY_ACTION.getAll().then((resp) => this.commit(CATEGORIES, resp))

        },

        bookbycategory({
            commit
        }, cate_id) {
            api_action.CATEGORY_ACTION.bookbycategory(cate_id).then(resp => commit('BOOK_BY_CATEGORY', resp))
        },

        bookbyauthor({
            commit
        }, author_id) {
            api_action.AUTHOR_ACTION.bookbyauthor(author_id).then(resp => commit('BOOK_BY_AUTHOR', resp))
        },

        bookbyseries({
            commit
        }, series_id) {
            api_action.BOOK_ACTION.bookbyseries(series_id).then(resp =>
                commit('BOOK_BY_SERIES', resp)
            )
        },
    },


});

export default store;