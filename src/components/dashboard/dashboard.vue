<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p> Your username adress {{username}}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  computed:{
    username(){
      return !this.$store.getters.user? false : this.$store.getters.user.username
    }
  },
  created(){
    this.$store.dispatch('fetchUser')
  }
}
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>