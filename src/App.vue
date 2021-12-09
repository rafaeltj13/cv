<template>
  <n-config-provider
    :theme="theme"
    :theme-overrides="theme === 'light' ? lightTheme : darkTheme"
  >
    <section>
      <Navbar />
      <div class="tab-container">
        <div class="empty-div"></div>
        <n-tabs
          default-value="oasis"
          justify-content="space-evenly"
          type="line"
        >
          <n-tab-pane name="oasis" tab="Oasiss">Wonderwall</n-tab-pane>
          <n-tab-pane name="the beatles" tab="the Beatles">Hey Jude</n-tab-pane>
          <n-tab-pane name="jay chou" tab="Jay Chou">Qilixiang</n-tab-pane>
        </n-tabs>
        <ThemeSwticher v-model="theme" class="ml-16" />
      </div>
    </section>
  </n-config-provider>
</template>

<script>
import { defineComponent, ref } from "vue";
import { NConfigProvider, NTabs, NTabPane } from "naive-ui";
import Navbar from "./components/UI/Navbar.vue";
import ThemeSwticher from "./components/UI/ThemeSwitcher.vue";
import { lightTheme, darkTheme } from "./utils/Themes";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
    ThemeSwticher,
    NConfigProvider,
    NTabs,
    NTabPane,
  },
  setup() {
    const theme = ref(localStorage.getItem("theme") || "light");

    return {
      theme,
      lightTheme,
      darkTheme,
    };
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Comfortaa&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

#app {
  font-family: Comfortaa, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0;
  padding: 0 32px;
}

html {
  scroll-behavior: smooth;
}

.tab-container {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.empty-div {
  width: 84px;
  margin-right: 16px;
}

.ml-16 {
  margin-left: 16px;
}
</style>
