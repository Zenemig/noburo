<template>
  <div id="app">
    <nav id="nav" class="nav">
      <figure class="nav__logo">
        <img src="./assets/noburo_logo.svg" />
      </figure>

      <router-link to="/" class="nav__link">?</router-link>
      <router-link to="/trabajos" class="nav__link">Trabajos</router-link>
      <router-link to="/contacto" class="nav__link">Contacto</router-link>
    </nav>
    <main><router-view /></main>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700,700i&display=swap");

// Base
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  padding: 0 28px;
  background-color: #fff4e6;
  color: black;
  font-family: "Space Mono", monospace;
  font-size: 15px;
}

figure {
  margin: 0;
}

// Header
.nav {
  margin: 17px 0 0 0;
  padding-bottom: 13px;
  border-bottom: 1px solid black;
}

.nav__logo {
  margin-bottom: 12px;
}

.nav__link {
  display: block;
  color: black;
  font-size: 30px;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    font-style: italic;
  }
  &.router-link-exact-active {
    font-weight: bold;
    font-style: italic;
  }
}
</style>
