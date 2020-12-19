<template>
  <div class="home">
    <NewsList></NewsList>
    <Form/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import NewsList from "../components/NewsList";
import Form from "../components/Form";
export default {
  name: 'Home',
  components: {
    HelloWorld,
    NewsList,
    Form
  }
}
</script>
