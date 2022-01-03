<template>
  <n-config-provider
    :theme-overrides="theme === 'light' ? lightTheme : darkTheme"
  >
    <section>
      <Navbar />
      <div class="tab-container">
        <n-tabs
          default-value="aboutme"
          justify-content="space-evenly"
          type="line"
        >
          <n-tab-pane name="aboutme" :tab="t('navbar.aboutme')">About me</n-tab-pane>
          <n-tab-pane name="experience" :tab="t('navbar.experience')">Experience</n-tab-pane>
          <n-tab-pane name="education" :tab="t('navbar.education')">Education</n-tab-pane>
          <n-tab-pane name="contact" :tab="t('navbar.contact')">Contact</n-tab-pane>
        </n-tabs>
      </div>
    </section>
  </n-config-provider>
</template>

<script>
import { defineComponent, computed } from "vue";
import { NConfigProvider, NTabs, NTabPane } from "naive-ui";
import { useI18n } from "vue-i18n";
import { useStore } from 'vuex';
import Navbar from "./components/UI/Navbar.vue";
import { lightTheme, darkTheme } from "./utils/Themes";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
    NConfigProvider,
    NTabs,
    NTabPane,
  },
  setup() {
    const { t } = useI18n();
    const store = useStore();

    return {
      theme: computed(() => store.getters['Settings/theme']),
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

.tab-container {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--navbar);
}
</style>
