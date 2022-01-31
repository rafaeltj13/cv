<template>
  <section>
    <Navbar />
    <TabContainer />
  </section>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import Navbar from "./components/UI/Navbar";
import { lightTheme, darkTheme } from "./utils/Themes";
import TabContainer from "./components/tabs/TabContainer";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
    TabContainer
  },
  setup() {
    const { t } = useI18n();
    const store = useStore();

    return {
      theme: computed(() => store.getters["Settings/theme"]),
      lightTheme,
      darkTheme,
      t,
    };
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Comfortaa&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import "./assets/scss/themes.scss";

#app {
  font-family: Comfortaa, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0;
  background-color: var(--main-bg);
}

html {
  scroll-behavior: smooth;
}
body::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
body::-webkit-scrollbar-track {
  background-color: var(--secondary);
  border-radius: 10px;
}
body::-webkit-scrollbar-thumb {
  background-color: var(--scroll);
  border-radius: 10px;
}
</style>
