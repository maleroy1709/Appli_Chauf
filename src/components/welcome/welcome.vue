<template>
  <div id="welcome">
    <h1>Application Chauffagiste</h1>
    <p>Que voulez-vous faire?</p>
    <div class="cta">
      <router-link class="btn btn-lg" to="/signup" active-class="active">S'enregistrer</router-link>
      <router-link class="btn btn-lg" to="/signin" active-class="active">Se connecter</router-link>
    </div>
  </div>
</template>

<style scoped>
  #welcome {
    width: 80%;
    margin: auto;
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  .cta {
    width: 500px;
    margin: auto;
    text-align: center;
  }
    .cta a {
    margin: 10px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid #521751;
    border-radius: 3px;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    color: #521751;
  }


  .cta a:hover,
  .cta a:active {
    background-color: #521751;
    color: white;
  }
</style>