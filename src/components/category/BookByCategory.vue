<template>
    <v-app>
        <v-container>
            <h4 class="ma-4">{{ categoryName }}</h4>
            <BookList :books="books"></BookList>
        </v-container>
    </v-app>
</template>

<script>
    import BookList from "../book/BookList";
    import {mapState} from 'vuex';

    export default {
        name: "BookByCategory",
        components: {'BookList': BookList},
        computed: {
            ...mapState(['books', 'categoryName'])
        },
        beforeMount() {
            this.$store.dispatch('bookbycategory', this.$route.params.categoryid);
        }
    }
</script>

<style scoped>

</style>