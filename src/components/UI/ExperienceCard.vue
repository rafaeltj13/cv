<template>
  <card class="experience-card" v-if="experience">
    <div v-if="experience?.title" class="experience-card-title-container">
      <p class="experience-card-title">
        {{ t(experience.title) }}
      </p>
      <p v-if="experience?.duration" class="experience-card-duration">
        {{ t(experience.duration) }}
      </p>
    </div>
    <div class="flex-container">
      <p class="experience-card-company">
        {{ experience.company }}
      </p>
      <i class="fa-solid fa-circle"></i>
      <p v-if="experience?.location" class="experience-card-location">
        {{ t(experience.location) }}
      </p>
    </div>
    <div class="experience-card-description" v-if="experience.description">
      <p>{{ t(experience.description) }}</p>
    </div>
    <div
      class="flex-container"
      v-if="experience?.frameworks?.length"
      style="margin-top: 8px"
    >
      <n-button
        v-for="framework of experience.frameworks"
        :key="framework"
        round
        class="framework-btn"
      >
        {{ framework }}
      </n-button>
    </div>
  </card>
</template>

<script>
import { useI18n } from "vue-i18n";
import Card from "@/components/UI/Card";
import { NButton } from "naive-ui";

export default {
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
  components: {
    Card,
    NButton,
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
};
</script>

<style scoped lang="scss">
.experience-card {
  margin: 16px 0;
  color: var(--font);
}
.experience-card-title {
  margin: 0;
  font-size: 26px;
  font-weight: 600;
  color: var(--tertiary)
}
.experience-card-company {
  margin: 0;
  font-size: 24px;
  font-weight: 500;
}
.experience-card-title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flex-container {
  display: flex;
  align-items: center;
}
.experience-card-location {
  font-size: 16px;
}
.experience-card-duration {
  font-size: 18px;
  flex: right;
  color: var(--tertiary);
}
.framework-btn {
  margin-right: 4px;
  color: var(--font);
}
.experience-card-description {
  margin: 16px 0 8px 0;
}

i {
  font-size: 6px;
  margin: 0 8px;
}
</style>