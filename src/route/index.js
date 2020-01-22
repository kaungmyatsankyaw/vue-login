// import Example from "../components/Example";
import Home from '../components/Home';
import Author from '../components/author/Author'
import MyAccount from "../components/MyAccount";
import Category from "../components/category/Category";
// import BookList from "../components/book/BookList";
import BookByCategory from "../components/category/BookByCategory";
import BookBySeries from "../components/book/BookBySeries";
import BookByAuthor from "../components/author/BookByAuthor";
import Login from '../components/login'

const routes = [
        {
            path: '/',
            name: 'APP_TEST',
            component: Home,
            show: true,
            meta: {
                auth: undefined
            }
        },
        {
            path: '/authors',
            name: 'Authors',
            component: Author,
            show: true,
            meta: {
                auth: undefined
            }
        },
        {
            path: '/category',
            name: 'Category',
            component: Category,
            show: true,
            meta: {
                auth: undefined
            }
        },
        {
            path: '/myaccount',
            name: 'My Account',
            component: MyAccount,
            show: true,
            meta:{
                auth:true
            }
        },
        {
            path:'/login',
            name:'Login',
            component:Login,
            show:true,
            meta:{
                auth:false
            }
        },
        {
            path: '/bookbycategory/:categoryid',
            name: 'BookByCategory',
            show: false,
            component: BookByCategory,
            meta: {
                auth: undefined
            }
        },
        {
            path: '/bookbyauthor/:authorid',
            name: 'BookByAuthor',
            show: false,
            component: BookByAuthor,
            meta: {
                auth: undefined
            }
        },

        {
            path: '/bookbyseries/:series',
            name: 'BookBySeries',
            show: false,
            component: BookBySeries,
            meta: {
                auth: undefined
            }
        }
    ]
;

export default routes;