<template>
    <div>
        <form @submit.prevent="submitForm">
            <label > title </label>
            <input name="title" v-model="inputData.title">
            <label > body </label>
            <input name="body" v-model="inputData.body">
            <label > Author </label>
            <input name="author" v-model="inputData.author"> <br/>
            <input class="btn btn-secondary" type="submit">
        </form>
    </div>
</template>

<script>
    import  {uuid}  from 'vue-uuid';
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: "Form",
        props: ['parentmessage'],
        data () {
            return {
                inputData: []
            }
        },

        mounted() {
            this.inputData = Object.assign({}, this.parentmessage);
            console.log('mount form')
        },
        methods: {
            ...mapMutations([
                'ADD_NEWSENTRY',
                'EDIT_NEWSENTRY'
            ]),
            submitForm: function () {
                if (this.inputData.id) {
                     this.EDIT_NEWSENTRY(this.inputData)
                    return
                }
                this.inputData.id= uuid.v4()
                this.ADD_NEWSENTRY(this.inputData)
                this.inputData=[]
            },
       }
    }
</script>

<style scoped>

</style>
