<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col
                        v-for="(book, i) in books"
                        :key="i"
                        :sm="12"
                        :lg="4"
                        :md="4"
                >
                    <router-link :to="'/bookbyseries/'+book.series">

                        <v-card>
                            <div class="d-flex flex-no-wrap">

                                <v-avatar
                                        class="ma-3"
                                        size="125"
                                        tile
                                >
                                    <v-img :src="book.image" style="width:100% !important"
                                           :alt="book.title"></v-img>
                                </v-avatar>

                                <div>
                                    <v-card-title style="font-size:13px !important"
                                                  class="headline"
                                                  v-text="book.title"
                                    ></v-card-title>

                                </div>

                            </div>
                        </v-card>
                    </router-link>

                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>


    export default {
        name: "BookList",
        props: ['books']
    }
</script>

<style scoped>
    >>> .v-image__image--cover {
        background-size: 100% 100%;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        cursor: pointer;
    }

    .router-link-exact-active {
        color: white;

    }
</style>