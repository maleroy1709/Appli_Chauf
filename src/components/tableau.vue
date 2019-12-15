<template>
<div>
  <br/>
  <br/>
  <h2>Choississez une opération</h2>
  </br>
  <div v-if="!access">
    Veuillez d'abord vous connecter
    <p>
      </br>
  <router-link class="btn btn-lg" to="/signin" tag="li" active-class="active" exact>
        <a>Se connecter</a>
      </router-link> </p> </div> 
  <br/>
  <br/>
  <div class="tableau" v-if="access">
      <router-link class="btn btn-lg" to="/components/taches/ContPe" tag="li" active-class="active" exact>
        <a>Contrôle périodique</a>
      </router-link>
      <hr />
      <router-link class="btn btn-lg" to="/components/taches/Dep" tag="li" active-class="active">
        <a>Dépannage</a>
      </router-link>
      <hr/>
      <router-link class="btn btn-lg" to="/components/taches/Rec" tag="li" active-class="active" exact>
        <a>Réception</a>
      </router-link>
      <hr />
      <router-link class="btn btn-lg" to="/components/taches/RecP" tag="li" active-class="active">
        <a>Réception provisoire</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  computed: {
    access() {
      return this.$store.state.access;
    }
  },
  created() {
    this.$store.dispatch("fetchUser");
  }
};
</script>

<style scoped>
.tableau {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
  text-align: center;
}

div,
h3,
h2,
h1,
p {
  text-align: center;
}

div,
h3,
h2,
h1,
p {
  color: rgb(0, 51, 102);
}
</style>