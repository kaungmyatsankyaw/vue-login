<template>
    <v-app>
        <v-container style="width:99% !important">
            <h4 class="ma-4">{{ title }}</h4>

            <v-row>


                <v-col v-for="(book,index) in books"
                       :key="index"
                       :sm="12"
                       :lg="4"
                       :md="4"

                >
                    <!--                    {{ book }}-->
                    <v-card :key="index">

                        <div class="d-flex flex-no-wrap">

                            <v-avatar
                                    class="ma-3"
                                    size="125"
                                    tile
                            >
                                <v-img :src="book.thumb" style="width:100% !important"
                                       :alt="book.name"></v-img>
                            </v-avatar>

                            <div>

                                <v-card-title style="font-size:13px !important;padding: 12px !important;"
                                              class="headline "
                                              v-text="book.name_unicode"></v-card-title>

                                <v-card-subtitle v-text="book.author_unicode"
                                                 style="padding:8px !important"></v-card-subtitle>

                            </div>
                            <v-spacer></v-spacer>

                            <v-card-actions>

                                <v-spacer></v-spacer>

                                <v-btn icon style="font-size:24px !important">
                                    <v-icon large class="mt-5">mdi-play-circle</v-icon>
                                </v-btn>
                            </v-card-actions>

                        </div>


                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </v-app>
</template>

<script>
    export default {
        name: "BookListBySeries",
        props: ['books', 'title']
    }
</script>

<style scoped>

</style>