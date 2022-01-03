<template>
  <div class="theme-switcher-container">
    <i class="far fa-sun"></i>
    <n-switch
      v-model:value="themeValue"
      size="small"
      checked-value="dark"
      unchecked-value="light"
    />
    <i class="far fa-moon"></i>
  </div>
</template>

<script>
import { defineComponent, ref, watch, onMounted } from "vue";
import { useStore } from 'vuex';
import { NSwitch } from "naive-ui";
export default defineComponent({
  components: {
    NSwitch,
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const store = useStore();
    const themeValue = ref(props.modelValue || store.getters['Settings/theme']);

    const updateThemeValue = (value) => {
      const htmlElement = document.documentElement;

      localStorage.setItem("theme", value);
      htmlElement.setAttribute("theme", value);
      store.dispatch('Settings/setTheme', value);

      context.emit("update:modelValue", value);
    };

    onMounted(() => {
      const htmlElement = document.documentElement;
      htmlElement.setAttribute("theme", "light");
    });

    watch(themeValue, (value) => {
      updateThemeValue(value);
    });

    return {
      themeValue,
    };
  },
});
</script>

<style lang="scss" scoped>
.theme-switcher-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
}

i {
  width: 18px;
  height: 18px;
  margin: 0 4px;
  display: flex;
  align-items: center;
}
</style>