<template>
    <v-container style="border: 1px solid gray !important;padding:0 !important;">
        <v-list>
            <v-list-group
                    v-for="item in authors"
                    :key="item.gid"
                   
                    :prepend-icon="item.action"
                    no-action>


                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.gid"></v-list-item-title>
                    </v-list-item-content>
                </template>

                <v-divider></v-divider>

                <span v-for="author in item.authors" :key="author.name">
                    <v-list-item :key="author.name">

<!--                       <router-link :to="'/bookbyauthor/'+ author.idx" style="display:inherit !important">-->
                        <!--                            <v-list-item-title v-text="author.name"></v-list-item-title>-->
                        <!--                        <v-list-item-icon>-->
                        <!--                            <v-icon v-text="author.book_count"></v-icon>-->
                        <!--                        </v-list-item-icon>-->
                        <!--                       </router-link>-->

                         <router-link :to=" '/bookbyauthor/'+ author.idx "
                                      style="display: inherit !important;
                                                width: 100% !important;"
                         >
                                <v-list-item-content>
                                    <v-list-item-title v-text="author.name"></v-list-item-title>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-list-item-action-text v-text="author.book_count"
                                                             style="font-size:16px !important"></v-list-item-action-text>
                                </v-list-item-action>
                            </router-link>


                    </v-list-item>
                        <v-divider></v-divider>

                </span>

                <v-divider></v-divider>

            </v-list-group>
        </v-list>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "Author",
        computed: {
            ...mapState(['authors'])
        },
        beforeMount() {
            this.$store.commit('SET_TOOL_BAR', this.$route.name)
        },
        mounted() {
            // console.log(this.$store)
            this.$store.dispatch('getAuthors')
        }
    }
</script>

<style scoped>
    .v-application--is-ltr .v-list-group--no-action > .v-list-group__items > div > .v-list-item {
        padding-left: 15px;
    }
</style>