<template>
  <header class="header-container">
    <h1 class="name-title">Rafael Maciel</h1>
    <h2 class="job-description">{{ t("navbar.job") }}</h2>
    <ThemeSwticher />
  </header>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import ThemeSwticher from "./ThemeSwitcher.vue";

export default defineComponent({
  components: {
    ThemeSwticher,
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
.header-container {
  background-color: var(--navbar);
}
.name-title {
  font-size: 48px;
  margin: 0 auto 0.5rem;
  padding-top: 0.5rem;
}
.job-description {
  margin: 0;
}
</style>