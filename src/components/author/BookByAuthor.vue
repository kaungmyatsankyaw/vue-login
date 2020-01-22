<template>
    <v-app>

        <v-container v-if="ready">
            <h4 class="ma-4">{{ books[0].author_name }}</h4>
            <BookList :books="books"></BookList>
        </v-container>
        <v-progress-linear v-else
                           color="deep-purple accent-4"
                           indeterminate
                           rounded
                           height="6"
        ></v-progress-linear>
    </v-app>
</template>

<script>
    import BookList from "../book/BookList";
    import {mapState} from 'vuex';

    export default {
        name: "BookByAuthor",
        components: {'BookList': BookList},
        data() {
            return {
                ready: false
            }
        },
        computed: {
            ...mapState(['books'])
        },

        beforeCreate() {
            this.$store.commit('SET_TOOL_BAR', 'Books Of Authors');
            this.$store.dispatch('bookbyauthor', this.$route.params.authorid);
            setTimeout(() => {
                this.ready = true;
            }, 1000)
        },

    }
</script>

<style scoped>

</style>