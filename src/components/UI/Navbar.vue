<template>
  <header>
    <h1>Rafael Maciel</h1>
    <h4>{{ t("navbar.job") }}</h4>
  </header>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  setup() {
    const { t } = useI18n();

    return {
      t
    };
  },
});
</script>

<style lang="scss" scoped>
</style>