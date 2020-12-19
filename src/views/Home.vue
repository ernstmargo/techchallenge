<template>
  <div class="home">
    <NewsList @clicked="edit"></NewsList>
    <Form :parentmessage="parentmessage" />
    <div>
      <b-modal id="modal-1" title="BootstrapVue">
        <Form :parentmessage="parentmessage" />
      </b-modal>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
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
    HelloWorld,
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
