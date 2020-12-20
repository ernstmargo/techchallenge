<template>
  <div class="home">
    <NewsList @clicked="edit"></NewsList>
    <h3>Create</h3>
    <Form :parentmessage="parentmessage" />
    <div>
      <b-modal id="modal-1" hide-footer="true" title="Edit">
        <Form :parentmessage="parentmessage" />
      </b-modal>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NewsList from "../components/NewsList";
import Form from "../components/Form";

export default {
  name: 'Home',
  data() {
     return {
       parentmessage: {
         'title' : null,
       }
     }
  },
  components: {
    NewsList,
    Form
  },
  methods: {
    edit (news) {
      console.log(news)
      this.parentmessage=news
    },
  }
}
</script>
