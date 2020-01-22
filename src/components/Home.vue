<template>

    <v-container>

        <div v-for="(book,index) in homepage.show" :key="index">

            <v-row>
                <h4 class="ma-4"> {{ book[0].category }}</h4>
            </v-row>

            <v-row>

                <v-col v-for="(book_data,i) in book" :key="i" cols="12" sm="6" md="4" xs="6">

                    <router-link :to="'/bookbyseries/'+book_data.item_id">
                        <v-card class="ma-1">
                            <v-img
                                    class="white--text align-end"

                                    :src=book_data.image
                                    aspect-ratio="1"
                                    style="background-size:100% 100% !important"
                            >
                            </v-img>

                        </v-card>
                    </router-link>


                </v-col>
            </v-row>

        </div>

    </v-container>

</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "Home",
        computed: {
            ...mapState(['homepage'])
        },

        mounted() {
            this.$store.commit('SET_TOOL_BAR', 'APP');
            this.$store.dispatch('homepage')
            // console.log(this.$store);
        }
    }
</script>

<style scoped>
    >>> .v-image__image--cover {
        background-size: 100% 100% !important;
    }
</style>