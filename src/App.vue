<template>
  <ThemeSwticher />
</template>

<script>
import ThemeSwticher from "./components/UI/ThemeSwitcher.vue";

export default {
  name: "App",
  components: {
    ThemeSwticher,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Comfortaa&display=swap");
@import 'assets/scss/themes.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  background: var(--background);
}

html {
  scroll-behavior: smooth;
}

#app,
button {
  font-family: Comfortaa, Arial, sans-serif;
}
</style>
