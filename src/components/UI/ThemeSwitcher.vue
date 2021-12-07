<template>
  <div class="theme-switcher-container">
    <i class="far fa-sun"></i>
    <el-switch v-model="themeValue" />
    <i class="far fa-moon"></i>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
export default {
  setup() {
    const themeValue = ref(false);

    const setTheme = () => {
      const htmlElement = document.documentElement;

      let theme = localStorage.getItem("theme");

      theme = theme ? theme : "light";

      htmlElement.setAttribute("theme", theme);
      themeValue.value = theme !== "light";
    };

    watch(themeValue, (value) => {
      localStorage.setItem("theme", value ? "dark" : "light");
      setTheme();
    });

    onMounted(() => {
      setTheme();
    });

    return {
      themeValue,
    };
  },
};
</script>

<style lang="scss" scoped>
.theme-switcher-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

i {
  width: 18px;
  height: 18px;
  margin: 0 4px;
}

.el-switch.is-checked .el-switch__core {
  border-color: var(--primary);
  background-color: var(--primary);
}
</style>