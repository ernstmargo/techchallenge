<template>
    <div>
        <h1>Newsfeed</h1>
        <h4> Search</h4>
        <input type="search" v-model="searchWord" required />
        <p>getSearchWord: {{ searchWord }} </p>
        <h4>Sorting</h4>
        <a href="#" @click="sort('asc','title')">Title ASC</a> |
        <a href="#" @click="sort('desc', 'title')" >Title DESC</a> |
        <a href="#" @click="sort('asc','body')">Body ACS</a> |
        <a href="#" @click="sort('desc', 'body')" >Body DESC</a> |
        <a href="#" @click="sort('asc','author')" >Author ACS</a> |
        <a href="#" @click="sort('desc', 'author')" >Author DESC</a> |
<div class="row justify-content-center">
    <div class="col-lg-6">
        <div class="card"  v-for='newentry in filteredNews'  >
            <div class="card-header">
                <h3>{{newentry.title}}</h3>
            </div>
            <div class="card-body">
                <p>{{newentry.body}}</p>
            </div>
            <div class="">
                <p>{{newentry.author}}</p>
            </div>
        </div>
    </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'NewsList',
        data () {
            return {
                msg: 'Welcome to my Vuex Store'
            }
        },
        computed: {
            gettersnews() {
                return this.$store.getters.allNews
            },
            news() {
                return this.$store.state.news
            },

            filteredNews () {
                try {
                    let a = (this.$store.getters.getFilteredNews || this.$store.getters.allNews)
                    console.log(a)
                    return a
                } catch (e) {
                    console.log(e)
                }
            },
            searchWord: {
                get () {
                    return this.$store.state.searchWord
                },
                set (value) {
                    this.$store.dispatch('FILTERED_NEWS', value)
                }
            }
        },
        mounted() {
            this.$store.dispatch("getNews");
        },
        methods:{
            sort (order, attr) {
                this.$store.dispatch('SORT_NEWS', {order, attr} );
            }
        }
    }

</script>

<style scoped>

</style>
