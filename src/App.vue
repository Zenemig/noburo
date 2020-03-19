<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">?</router-link>
      <router-link to="/trabajos">Trabajos</router-link>
      <router-link to="/contacto">Contacto</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    display: block;
    color: #2c3e50;

    &.router-link-exact-active {
      font-weight: bold;
    }
  }
}
</style>
