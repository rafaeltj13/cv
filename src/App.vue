<template>
  <n-config-provider
    :theme-overrides="theme === 'light' ? lightTheme : darkTheme"
  >
    <section v-if="false">
      <Navbar />
      <div class="tab-container">
        <n-tabs
          default-value="aboutme"
          justify-content="space-evenly"
          type="line"
        >
          <n-tab-pane name="aboutme" :tab="t('navbar.aboutme')"
            >About me</n-tab-pane
          >
          <n-tab-pane name="experience" :tab="t('navbar.experience')"
            >Experience</n-tab-pane
          >
          <n-tab-pane name="education" :tab="t('navbar.education')"
            >Education</n-tab-pane
          >
          <n-tab-pane name="contact" :tab="t('navbar.contact')"
            >Contact</n-tab-pane
          >
        </n-tabs>
      </div>
    </section>
    <iframe
      id="iFrame"
      src="http://localhost:8080/#/iframe/quality-management/input-fefo"
      title="Optel Explo"
      height="900"
      width="1200"
    ></iframe>
  </n-config-provider>
</template>

<script>
import { defineComponent, computed } from "vue";
import { NConfigProvider, NTabs, NTabPane } from "naive-ui";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
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
    const token =
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IjNhYTE0OGNkMDcyOGUzMDNkMzI2ZGU1NjBhMzVmYjFiYTMyYTUxNDkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL29wdGVsLWlzYy1leHBsby1hYmluYmV2IiwiYXVkIjoib3B0ZWwtaXNjLWV4cGxvLWFiaW5iZXYiLCJhdXRoX3RpbWUiOjE2NDMwMjg2NzEsInVzZXJfaWQiOiJBWFdsdmFJcnRyTWh5NG9wOHYwRGdxQnBhdXEyIiwic3ViIjoiQVhXbHZhSXJ0ck1oeTRvcDh2MERncUJwYXVxMiIsImlhdCI6MTY0MzAyODY3MSwiZXhwIjoxNjQzMDMyMjcxLCJlbWFpbCI6InJhZmFlbC5tYWNpZWxAdHJpby5kZXYiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJyYWZhZWwubWFjaWVsQHRyaW8uZGV2Il19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.xSYojO1GSOA3WG21gvkiNEEoF6PxvKARzdvQYoW6t5CKlvgavzHUN9QDsbY-XP0mF0aqa1qMEewDBtBf5kM-zwSpSmoZIF_78wB1-btqoMudDMgF0Z6c6LcajBEygrVcmWuzNt4tNlaXVfe8MsHIqLNj8tmpBnDl2ALMoHSUTtbRYGCTJcABRWIAFjxHfEaAw_m-dLrAKucBItn8nVnxtfmtfsC_6tyYtj8_o-zDP3W67k6g8FLtNZRiG4uEpfNZsqPlSq58BOf6HXClsH0M3Pj9z7XHPpzm0Fu6rYQbMuiyT0btEwwt5zX0rVJQhjq9-6xkLJSfpdOvKpW48PQ4hQ";

    const onReceiveMessage = () => {
      const iFrame = document.getElementById("iFrame"); 
      iFrame.contentWindow.postMessage(
        { value: token, type: 'idTokenChange' },
        "http://localhost:8080/#/iframe/quality-management/input-fefo"
      );
    }
    window.addEventListener(
      "message",
      onReceiveMessage
    );

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
