<template>
    <div>
        <form @submit.prevent="submitForm">
            <label > title </label>
            <input name="title" v-model="inputData.title">
            <label > body </label>
            <input name="body" v-model="inputData.body">
            <label > Author </label>
            <input name="author" v-model="inputData.author">
            <input type="submit">
        </form>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: "Form",
        data () {
            return {
                inputData: {}
            }
        },
        computed: {
            ...mapState([
                'news'
            ])
        },

        methods: {
            ...mapMutations([
                'ADD_NEWSENTRY'
            ]),
            submitForm: function () {
                this.ADD_NEWSENTRY(this.inputData)
                this.inputData=[]
            }
        }
    }
</script>

<style scoped>

</style>
