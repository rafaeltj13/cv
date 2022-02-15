<template>
  <section>
    <div>
      <h2 class="experience-title">
        {{ t("experience.title") }}
      </h2>
      <transition-group name="list" tag="div" appear>
        <card
          v-for="experience of experiences"
          :key="experience.title"
          class="experience-card"
        >
          {{ t(experience.title) }}
        </card>
      </transition-group>
    </div>
    <div class="margin-sections" v-if="experiences.length === 10">
      <h2 class="experience-title">
        {{ t("experience.education") }}
      </h2>
      <transition-group name="list" tag="div" appear>
        <card
          v-for="education of educations"
          :key="education.title"
          class="experience-card"
        >
          {{ t(education.title) }}
        </card>
      </transition-group>
    </div>
  </section>
</template>

<script>
import Card from "@/components/UI/Card";
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "@vue/runtime-core";

const EXPERIENCES_ARRAY = [
  { title: "1" },
  { title: "2" },
  { title: "3" },
  { title: "4" },
  { title: "5" },
  { title: "6" },
  { title: "7" },
  { title: "8" },
  { title: "9" },
  { title: "10" },
];

const EDUCATION_ARRAY = [{ title: "Graduation" }];

export default {
  components: {
    Card,
  },
  setup() {
    const { t } = useI18n();

    const experiences = ref([]);
    const educations = ref([]);

    const addItemsOnDelay = (item, index, array) =>
      new Promise((res) => {
        setTimeout(() => {
          array.value.push(item);
          res();
        }, 300 * index);
      });

    onMounted(() => {
      EXPERIENCES_ARRAY.forEach(async (e, i) => {
        await addItemsOnDelay(e, i, experiences);
      });
      EDUCATION_ARRAY.forEach(async (e, i) => {
        await addItemsOnDelay(e, i, educations);
      });
    });

    return {
      t,
      experiences,
      educations,
    };
  },
};
</script>

<style scoped lang="scss">
.experience-title {
  text-align: left;
}
.experience-card {
  margin: 16px 0;
}
.margin-sections {
  margin-top: 64px;
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>