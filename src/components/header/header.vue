<template>
  <header id="header">
    <div class="logo">
      <router-link to="/">Application chauffagiste</router-link>
    </div>
    <nav>
      <ul>
        <li>
          <router-link to="/signup">S'enregistrer</router-link>
        </li>
        <li>
          <router-link to="/signin">Se connecter</router-link>
        </li>
        <li>
          <router-link to="/components/tableau">Créer un document</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  #header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color:  rgb(0, 51, 102);
    padding: 0 20px;
  }

  .logo {
    font-weight: bold;
    color: white;
  }

  .logo a {
    text-decoration: none;
    color: white;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li {
    margin: 0 16px;
  }

  li a {
    text-decoration: none;
    color: white;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #fa923f;
  }
</style>