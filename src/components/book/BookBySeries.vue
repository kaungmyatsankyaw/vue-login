<template>

    <div v-if="api_call">
        <BookListBySeries :books="books" :title="s_title"></BookListBySeries>
    </div>
    <div v-else>
        <BookListBySeries :books="books_no_api" :title="title"></BookListBySeries>
    </div>

</template>

<script>
    import BookListBySeries from "./BookListBySeries";
    import {mapState} from 'vuex';

    export default {
        name: "BookBySeries",
        components: {'BookListBySeries': BookListBySeries},
        computed: {
            ...mapState(['books', 's_title'])
        },
        data() {
            return {
                books_no_api: null,
                title: '',
                api_call: false
            }
        },
        beforeMount() {

            let books = this.$store.getters.books;
            let series = this.$route.params.series;

            if (!books.length) {

                this.api_call = true;

                this.$store.dispatch('bookbyseries', series)

            } else {

                let filter_books = books.map(book => {
                    if (book.series == series) {
                        return book
                    }
                }).filter(book => {
                    return typeof book !== 'undefined'
                });

                // console.log(filter_books)

                if (!filter_books.length || filter_books) {
                    this.api_call = true;

                    this.$store.dispatch('bookbyseries', series)
                } else {
                    this.books_no_api = filter_books[0].book;
                    this.title = filter_books[0].title;
                }
            }
        },
        mounted() {
            // console.log(this.api_call)
        }
    }
</script>

<style scoped>
    >>> .v-image__image--cover {
        background-size: 100% 100%;
    }
</style>