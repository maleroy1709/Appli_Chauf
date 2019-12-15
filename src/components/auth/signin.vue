<template>
  <div id="signin">
    <div class="signin-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="username">Utilisateur</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="input">
          <label for="password">Mot de passe</label>
          <input type="password" id="password" v-model="password" @input="test"/>
        </div>
        <div class="submit">
          <button type="submit">Entrer</button>
        </div>
        
      </form>
      <p v-if="ko"> Veuiller réessayer de vous connecter </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      ko:false
    };
    
  },
  created() {
    this.$store.dispatch("fetchUser");
  },
  
  methods: {
    test(){
      const formData = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch("login", {
        username: formData.username,
        password: formData.password
      });
      this.$store.dispatch("fetchUser");
    },
    onSubmit() {
      const formData = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch("login", {
        username: formData.username,
        password: formData.password
      });
      this.$store.dispatch("fetchUser");
      //if (this.$store.getters.user){
        //if (formData.username !== this.$store.getters.user.username){
        //this.$store.state.access = null;
        //console.log(this.$store.state.access);
      //};
      //};
      if (this.$store.state.access !== null){
        this.$router.push({ name: "tab" });
      }else{
        this.ko = true
    };
  }
}
}
</script>

<style scoped>
.signin-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}

.submit button {
  border: 1px solid #521751;
  color: #521751;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background-color: #521751;
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}
</style>