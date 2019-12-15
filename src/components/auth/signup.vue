<template>
  <div id="signup">
    <div class="signup-form">
      <form>
        <div class="input">
          <label for="username">Nom d'utilisateur</label>
          <input
                  type="text"
                  id="username"
                  v-model="username">
        </div> </form>
        <form>
        <div class="input">
          <label for="password">Mot de passe</label>
          <input
                  type="text"
                  id="password"
                  v-model="password">
        </div> </form>
        <form>
        <div class="input">
          <label for="Prenom">prénom</label>
          <input
                  type="text"
                  id="prenom"
                  v-model="prenom">
        </div> </form>
        <form>
        <div class="input">
          <label for="Nom">Nom</label>
          <input
                  type="text"
                  id="nom"
                  v-model="nom">
        </div> </form>
        <form>
        <div class="input">
          <label for="mail">E-Mail</label>
          <input
                  type="mail"
                  id="mail"
                  v-model="mail">
        </div> </form>
        
      <button @click="onSubmit"> Créer </button>   
  </div>
  
  </div>
</template>

<script>


  export default {
    data () {
      return {
        username: '',
        password:'',
        prenom: '',
        nom:'',
        mail:'',
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          username: this.username,
          password:this.password,
          prenom: this.prenom,
          nom: this.nom,
          mail: this.mail,
        }
        console.log(formData)
        this.$store.dispatch('signup',formData)
      }
    }
  }
</script>

<style scoped>
  .signup-form {
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

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .hobbies button {
    border: 1px solid #521751;
    background: #521751;
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
  }

  .hobbies button:hover,
  .hobbies button:active {
    background-color: #8d4288;
  }

  .hobbies input {
    width: 90%;
  }

  button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  button:hover,
  button:active {
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