<template>
  <div class="select-container">
    <n-select v-model:value="value" size="small" :options="options" />
  </div>
</template>

<script>
import { NSelect } from "naive-ui";
import { ref } from "@vue/reactivity";
import { useI18n } from "vue-i18n";
import { watch } from "@vue/runtime-core";

export default {
  components: {
    NSelect,
  },
  setup() {
    const { t, locale } = useI18n();
    const value = ref(locale.value || "en");
    const options = [
      {
        label: t("language.en"),
        value: "en",
      },
      {
        label: t("language.pt"),
        value: "pt",
      },
    ];

    watch(value, (value) => {
      locale.value = value
    });

    return {
      value,
      options
    };
  },
};
</script>

<style scoped lang="scss">
.select-container {
  width: 64px;
}
</style>
