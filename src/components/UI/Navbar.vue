<template>
  <header class="header-container">
    <transition name="fade">
      <div v-show="show">
        <div class="header-wrapper">
          <div>
            <h1 class="name-title">{{ t("name") }}</h1>
            <h2 class="job-description">{{ t("navbar.job") }}</h2>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t } = useI18n();
    const show = ref(false);

    setTimeout(() => {
      show.value = true;
    }, 1000);

    return {
      t,
      show,
    };
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  background: var(--navbar);
  min-height: 132px;
  padding: 0 16px;
}
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.name-title {
  font-size: 48px;
  margin: 0 auto 0.5rem;
  padding-top: 0.5rem;
}
.job-description {
  margin: 0;
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