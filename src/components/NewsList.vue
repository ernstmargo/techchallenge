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
            <div class="card-footer">
                <b-button  :id=newentry.id v-b-modal.modal-1  @click="edit(newentry.id)">Edit</b-button>
            </div>

        </div>

    </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

    export default {
        name: 'NewsList',
        data () {
            return {
                msg: 'Welcome to my Vuex Store',
            }
        },
        computed: {
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
                    this.FILTERED_NEWS(value)
                }
            }
        },
        mounted() {
            this.$store.dispatch("getNews");
        },
        methods:{
            ...mapMutations([,
                'FILTERED_NEWS',
                'SORT_NEWS',
            ]),
            sort (order, attr) {
                this.SORT_NEWS({order, attr})
            },
            edit(id)
            {
                let editable = this.$store.getters.allNews.find(a => a.id === id)
                console.log(editable)
                this.$emit('clicked', editable)
            }
        }
    }

</script>

<style scoped>
    .card {
        margin-bottom: 20px;
    }
</style>
