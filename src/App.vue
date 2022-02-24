<template>
  <section>
    <n-notification-provider>
      <n-config-provider :theme-overrides="currentTheme">
        <Navbar v-if="false" />
        <TabContainer />
      </n-config-provider>
    </n-notification-provider>
  </section>
</template>

<script>
import { NNotificationProvider, NConfigProvider } from "naive-ui";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import Navbar from "./components/UI/Navbar";
import { lightTheme, darkTheme } from "./utils/Themes";
import TabContainer from "./components/tabs/TabContainer";

export default {
  name: "App",
  components: {
    Navbar,
    TabContainer,
    NNotificationProvider,
    NConfigProvider,
  },
  setup() {
    const { t } = useI18n();
    const store = useStore();
    const themeValue = computed(() => store.getters["Settings/theme"]);
    const currentTheme = computed(() =>
      themeValue.value === "dark" ? darkTheme : lightTheme
    );

    return {
      currentTheme,
      t,
    };
  },
};
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

p {
  margin: 0;
}

i {
  color: var(--font)
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
