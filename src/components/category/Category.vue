<template>
    <v-container>
        <v-list two-line>
            <v-list-item-group

                    multiple
                    active-class="pink--text"
            >
                <template v-for="(item, index) in category">

                    <v-list-item :key="item.title">
                        <template v-slot:default="{ active, toggle }">

                            <router-link :to=" '/bookbycategory/' + item.category_id "
                                         style="display: inherit !important;
                                                width: 100% !important;"
                            >
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.name"></v-list-item-title>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-list-item-action-text v-text="item.book_count"></v-list-item-action-text>
                                </v-list-item-action>
                            </router-link>

                        </template>
                    </v-list-item>

                    <v-divider
                            v-if="index + 1 < category.length"
                            :key="index"
                    ></v-divider>
                </template>
            </v-list-item-group>
        </v-list>

    </v-container>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "Category",
        computed: {
            ...mapState(['category'])
        },
        beforeMount() {
            this.$store.commit('SET_TOOL_BAR', this.$route.name)
            this.$store.dispatch('categories')
        }
    }
</script>

<style scoped>

</style>