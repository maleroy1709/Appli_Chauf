<template>
  <div >
      <br/>
    <h2>Réception provisoire</h2>
    </br>
    
    <app-comb></app-comb> 
    <p>
    <button @click="tech" v-if="!voir_tech"> Voir technicien </button></p>
    <div class="tableau" v-if="voir_tech">
     <br/>
    <p> Votre nom et prénom {{this.$store.state.user.first_name}} {{this.$store.state.user.last_name}}</p>
    <p> Vous êtes agréé {{this.$store.state.user.technicien.agree}} 
    <p> Votre numéro d'agrément est {{this.$store.state.user.technicien.agrement}}</p>
    <p> Votre mail: {{this.$store.state.user.email}}</p>
    <p> Vous travaillez pour l'entreprise: {{this.$store.state.ent.nom_entr}}</p>
    <p> Téléphone de l'entreprise: {{this.$store.state.ent.tel}}</p>
    <p> Mail de l'entreprise: {{this.$store.state.ent.mail}}</p>
    <p> Numéro BCE de l'entreprise: {{this.$store.state.ent.bce}}</p>
    <p> <button @click="ok"> Ok </button></p>
        </div>
        
        
        
        
  </div>
</template>

<script>

import VueLocalStorage from 'vue-localstorage'
import axios from "axios";
import IdCli from "./forms/IdCli.vue";
import Combustible from "./forms/Combustible.vue";

export default {
  components: {
    appIdCli: IdCli,
    appComb: Combustible
  },
  created() {
    this.$store.dispatch("fetchEnt");
    this.$store.dispatch("fetchUser");
},
   data() {
    return {
      userData: {
        NoAtt: "",
        NP: "",
        NA: "",
        NPE: "",
      },
      date:'',
      voir_tech:false,
}
   },
   methods:{
     tech(){
       this.voir_tech=true
     },
     ok(){
       this.voir_tech=false
     },
     suivant(){
       this.ok=true
     }
   }
}
</script>

<style scoped>
h3,
h2,
h1,
p {
  text-align: center;
  color: rgb(0, 51, 102);
}


h3,
h2,
h1,
p {
  color: rgb(0, 51, 102);
}

nav {
  width: 150px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
  text-align: center;
  border: 1px solid #521751;
  color: #521751;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

button {
  width: 150px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
  text-align: center;
  border: 1px solid #521751;
  color: #521751;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
  text-align: center;
}

.tableau {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
  text-align: center;
}
.input {
  width: 600px;
  margin: 10px auto;
  padding: 10px 20px;
  text-align: center;
  color: rgb(0, 51, 102);
}
</style>