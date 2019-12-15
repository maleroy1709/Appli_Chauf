<template>
  <div class="card">

    <div class="row">
      <div class="col-sm-2" v-if="!voir">
          </br>
        <h4 v-if="!ajouter">Choisir un client</h4>
      </div>
      <div class="col-sm-6" v-if="!voir">
        <div class="input" v-if="!ajouter">
          <select id="Client" class="form-control" v-model="Cli">
            <option
              v-for="cli in this.$store.state.client.results"
            >{{cli.nom}} {{cli.prenom}} : {{cli.mail}}</option>
          </select>
          {{chois_cli()}}
        </div>
      </div>
      <div class="col-sm-2" v-if="!ajouter">
        <button @click="VoirCli" v-if="!voir">Voir client</button>
        </div>
        <div v-if="voir" class="tableau">
        <p>Le nom du client: {{this.client.nom}}</p>
        <p>Le prénom du client: {{this.client.prenom}}</p>
        <p>L'adresse mail du client: {{this.client.mail}}</p>
        <p>L'entrprise du client: {{this.client.entreprise}}</p>
        <p>L'adresse du client: rue {{this.client.rue}}</p>
        <p>{{this.client.code_postal}}</p>
        <p>{{this.client.localite}}</p>
        <p>Numéro de téléphone du client: {{this.client.tel}}</p>
        <p>Localisation du générateur si différente: {{this.client.loc_generateur}}</p>
        <button @click="OkCli"> OK </button>
        </div>
       
      <div class="col-sm-2" v-if="!ajouter">
        <button v-if="!voir" @click="AjCli">Ajouter client</button>
      </div>
      <div class="col-sm-12" v-if="ajouter">
          <div id="signup" >
      <h3> Créer un nouveau client </h3>
      </br>
    <div class="tableau" v-if="!ok">
        <form>
        <div class="input">
          <label for="prenom">Prénom</label>
          <input
                  type="text"
                  id="prenom"
                  v-model="prenom"> 
          <label for="nom">Nom</label>
          <input
                  type="text"
                  id="nom"
                  v-model="nom"> 
                  </div></form>
                 </br>
                  <form>
        <div class="input">
          <label for="rue">Rue et n°</label>
          <input
                  type="rue"
                  id="rue"
                  v-model="rue"> 
          <label for="cp">Code postal</label>
          <input
                  type="number"
                  id="cp"
                  v-model="cp"> 
                  </div></form>
                  </br>
                  <form>
        <div class="input">
          <label for="localite">Localité</label>
          <input
                  type="text"
                  id="loc"
                  v-model="loc"> 
                  
          <label for="tel">Téléphone</label>
          <input
                  type="number"
                  id="tel"
                  v-model="tel"> 
                  </div></form>
                  <form>
                    <div class="input">
                  </br>
          <label for="mail">Adresse e-mail</label>
          <input
                  type="mail"
                  id="mail"
                  v-model="mail"> 
                  </div></form>
                  </br>
                  <form>
        <div class="input">
          <label for="loc_generateur">Localisation du générateur si différente</label>
          <input
                  type="text"
                  id="loc_generateur"
                  v-model="loc_generateur"> 
                  </div></form>
        
          <button @click="onSubmit">Créer</button>
          </div>
          </div>
          </div>
          </div>
          </div>
</template>

<script>
import Combustible from "./Combustible.vue";
import axios from "axios";
import VueLocalStorage from 'vue-localstorage'


export default {
  components: {
    appComb: Combustible
  },
  data() {
    return {
      Cli: 'Marie',
      voir: false,
      client: null,
      ajouter: false,
      prenom:'',
        nom:'',
        entreprise:'dici',
        rue:'',
        cp:'',
        loc:'',
        tel:'',
        mail:'',
        loc_generateur:'',
      ok:false,
    };
  },
  created() {
    this.$store.dispatch("fetchCli");
  },
  methods: {
    chois_cli(){
      var t, client;
        for (t in this.$store.state.client.results){
            if (this.$store.state.client.results[t].mail === this.Cli.split(" : ")[1]){
                this.client = this.$store.state.client.results[t];
                this.$store.state.chois_cli = this.client;
                
            }
            }
return this.client
    },
     suivant(){
       this.ok=true
     },
    onSubmit () {
        const formData = {
          prenom: this.prenom,
          nom:this.nom,
          entreprise:this.entreprise,
          rue:this.rue,
          cp:this.cp,
          loc:this.loc,
          tel:this.tel,
          mail:this.mail,
          entreprise:this.entreprise,
          loc_generateur:this.loc_generateur
        }
        console.log(formData)
        this.$store.dispatch('createCli',formData)
        //this.$router.go(0);
        this.ajouter=false
        this.voir=false
        this.ok=true
      this.$store.dispatch("fetchUser");
      this.$store.dispatch("fetchEnt");
      this.$store.dispatch("fetchCli");
      },
    VoirCli() {
        this.voir=true;
        var t, client;
        for (t in this.$store.state.client.results){
            if (this.$store.state.client.results[t].mail === this.Cli.split(" : ")[1]){
                this.client = this.$store.state.client.results[t];
                this.$store.state.chois_cli = this.client;
                console.log()
            }
            }
        },
        OkCli(){
             this.voir=false;
        },
        AjCli(){
            this.ajouter=true;
        },
        okNewCli(){
          this.ajouter=false;
          this.voir=false;
          }
    },
};
</script>

<style scoped>
div,
h3,
h2,
h1,
p {
  text-align: center;
  color: rgb(0, 51, 102);
}

p {
  color: rgb(0, 51, 102);
  margin: 20px auto;
}
.tableau {
  width: 800px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 10px;
  box-shadow: 0 2px 3px #ccc;
  text-align: center;
}
button {
  border: 1px solid #521751;
  color: #521751;
  padding: 5px 20px;
  font: inherit;
  margin: 20px auto;
  cursor: pointer;
}

.input {
  width: 600px;
  margin: 10px auto;
  padding: 10px 20px;
}

</style>