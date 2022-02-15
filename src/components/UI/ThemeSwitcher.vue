<template>
  <div class="theme-switcher-container">
    <transition name="fade" mode="out-in">
      <i
        v-if="themeValue === 'dark'"
        @click="updateThemeValue('light')"
        class="far fa-sun"
      ></i>
      <i
        v-else-if="themeValue === 'light'"
        @click="updateThemeValue('dark')"
        class="far fa-moon"
      ></i>
    </transition>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const themeValue = computed(() => store.getters["Settings/theme"]);

    const updateThemeValue = (value) => {
      const htmlElement = document.documentElement;

      localStorage.setItem("theme", value);
      htmlElement.setAttribute("theme", value);
      store.dispatch("Settings/setTheme", value);
    };

    onMounted(() => {
      updateThemeValue("light");
    });

    return {
      themeValue,
      updateThemeValue,
    };
  },
};
</script>

<style lang="scss" scoped>
.theme-switcher-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

i {
  width: 18px;
  height: 18px;
  margin: 0 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>