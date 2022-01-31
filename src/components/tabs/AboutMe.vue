<template>
  <transition name="about-me" tag="section" class="about-me-container">
    <div>
      <h3 class="about-me-hey">{{ t("aboutme.hey") }}</h3>
      <h1 class="about-me-name">{{ t("name") }} .</h1>
      <p class="about-me-description">{{ t("aboutme.description") }}</p>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
.about-me-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
.about-me-hey {
  color: var(--tertiary);
  margin: 16px 0 0 0;
}
.about-me-name {
  font-size: 72px;
  margin: 8px 0 16px 0;
}
.about-me-description {
  text-align: left;
}

.about-me-enter-active,
.about-me-leave-active {
  transition: all 1s ease;
}

.about-me-enter-from,
.about-me-leave-to {
  opacity: 0;
  //transform: translateY(-30px);
}
</style>
