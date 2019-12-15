<template>
  <div>
    <form>
      <div class="input">
        <label for="date">Date de la réception provisoire:</label>
        <input type="date" id="date" v-model="date" />
      </div>

    <app-id-cli></app-id-cli>
    

      <p> le combustible liquide est:
      {{this.comb_liquide}}
</p>
    <div class="form-group">
        <p>Type de combustible liquide :</p>
        <input type="checkbox" id="gasoil" value="gasoil" v-model="comb_liquide"/>
        <label for="gasoil">Gasoil</label>
        <input type="checkbox" id="gasoil extra" value="gasoil extra" v-model="comb_liquide" />
        <label for="gasoil extra">gasoil extra</label>
        <input type="checkbox" id="fuel lourd" value="fuel lourd" v-model="comb_liquide" />
        <label for="fuel lourd">fuel lourd</label>
        
    </div>    
   
      <div class="input">
        <label for="sign_cli">Signature Client</label>
        <input type="file" @change="previewFiles" />
      </div>
    </form>
    <p>
      <button @click="onSubmit">Ok</button>
    </p>
  </div>
</template>

<script>
import axios from "axios";
import IdCli from "./IdCli.vue";

 export default {
        data(){
    return {
      files: [],
      date: '',
      signature_client: null,
      signature_technicien: null,
      client: "",
      comb_liquide: [], 
      comb_liquide_autre: "",
      comb_gazeux: null,
      comb_gazeux_autre: "",
      gen_chaleur_nb: "",
      gen_chaleur_identification: "",
      gen_chaleur_raccordement_b: "",
      gen_chaleur_raccordement_c: "",
      gen_condensation: "",
      gen_annee_const:'',
      gen_annee_construction: "",
      gen_marque: "",
      gen_type: "",
      gen_num_serie: "",
      gen_puissance_nominale: "",
      bruleur_allure: "",
      bruleur_allure_nb: "",
      bruleur_gaz: "",
      bruleur_unit_gaz: "",
      bruleur_air_pulse_marque: "",
      bruleur_air_pulse_type: "",
      bruleur_air_pulse_annee: "",
      bruleur_air_pulse_num_serie: "",
      chauf_central_fluide: "",
      chauf_central_chaleur: "",
      installation: "",
      remarques: ""  
    };
  },





  
  components: {
    appIdCli: IdCli
  },
  methods: {
    previewFiles(event) {
      console.log(event.target);
      this.signature_client = event.target;
    },
    onSubmit() {
      const Data = {
        date: this.date,
        signature_client: this.signature_client,
        signature_technicien: this.signature_technicien,
        client: this.client,
        comb_liquide: this.comb_liquide[0],
        comb_liquide_autre: this.comb_liquide_autre,
        comb_gazeux: this.comb_gazeux,
        comb_gazeux_autre: this.comb_gazeux_autre,
        gen_chaleur_nb: this.gen_chaleur_nb,
        gen_chaleur_identification: this.gen_chaleur_identification,
        gen_chaleur_raccordement_b: this.gen_chaleur_raccordement_b,
        gen_chaleur_raccordement_c: this.gen_chaleur_raccordement_c,
        gen_condensation: this.gen_condensation,
        gen_annee_const: this.gen_annee_const,
        gen_annee_construction: this.gen_annee_construction,
        gen_marque: this.gen_marque,
        gen_type: this.gen_type,
        gen_num_serie: this.gen_num_serie,
        gen_puissance_nominale: this.gen_puissance_nominale,
        bruleur_allure: this.bruleur_allure,
        bruleur_allure_nb: this.bruleur_allure_nb,
        bruleur_gaz: this.bruleur_gaz,
        bruleur_unit_gaz: this.bruleur_unit_gaz,
        bruleur_air_pulse_marque: this.bruleur_air_pulse_marque,
        bruleur_air_pulse_type: this.bruleur_air_pulse_type,
        bruleur_air_pulse_annee: this.bruleur_air_pulse_annee,
        bruleur_air_pulse_num_serie: this.bruleur_air_pulse_num_serie,
        chauf_central_fluide: this.chauf_central_fluide,
        chauf_central_chaleur: this.chauf_central_chaleur,
        installation: this.installation,
        remarques: this.remarques
      };
      console.log(Data.signature_client.type);
      this.$store.dispatch("createRecp", Data);
      this.$store.dispatch("fetchRecp");
    }
  }
};
</script>

<style scoped>
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
</style>