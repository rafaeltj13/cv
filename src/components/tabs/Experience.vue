<template>
  <section>
    <div>
      <div class="title-container">
        <h2 class="experience-title">
          {{ t("experience.title") }}
        </h2>
        <a
          href="/files/cv-rafael-maciel.pdf"
          download
          style="text-decoration: none"
          ><n-button>{{ t("experience.cv") }}</n-button></a
        >
      </div>
      <transition-group name="list" tag="div" appear>
        <ExperienceCard
          v-for="experience of experiences"
          :key="experience.title"
          :experience="experience"
        />
      </transition-group>
    </div>
    <div class="margin-sections" v-if="experiences.length === 5">
      <h2 class="experience-title">
        {{ t("experience.education") }}
      </h2>
      <transition-group name="list" tag="div" appear>
        <ExperienceCard
          v-for="education of educations"
          :key="education.title"
          :experience="education"
        />
      </transition-group>
    </div>
  </section>
</template>

<script>
const EXPERIENCES_ARRAY = [
  {
    company: "Trio",
    title: "experience.engineer",
    location: "experience.location.trio",
    duration: "experience.duration.trio",
    description: "experience.descriptions.trio",
    frameworks: ["Vue.js", "Express.js", "Node.js", "BigQuery"],
  },
  {
    company: "Xtra Holdings LLC",
    title: "experience.engineer",
    location: "experience.location.xtra",
    duration: "experience.duration.xtra",
    description: "experience.descriptions.xtra",
    frameworks: ["Vue.js", "Express.js", "Node.js", "MongoDB"],
  },
  {
    company: "Lella.co",
    title: "experience.engineer",
    location: "experience.location.lella",
    duration: "experience.duration.lella",
    description: "experience.descriptions.lella",
    frameworks: ["React", "Angular", "Express.js", "Node.js", "MongoDB"],
  },
  {
    company: "SPLAB",
    title: "experience.analyst",
    location: "experience.location.splab",
    duration: "experience.duration.ingenico",
    description: "experience.descriptions.ingenico",
    frameworks: ["React", "Node.js", "Express.js", "Sequelize", "SQL"],
  },
  {
    company: "SPLAB",
    title: "experience.front",
    location: "experience.location.splab",
    duration: "experience.duration.efinance",
    description: "experience.descriptions.efinance",
    frameworks: ["AngularJS"],
  },
];

const EDUCATION_ARRAY = [
  {
    company: "UFCG",
    title: "experience.bachelor",
    location: "experience.location.splab",
    duration: "experience.duration.bachelor",
  },
];

import ExperienceCard from "@/components/UI/ExperienceCard";
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "@vue/runtime-core";
import { NButton } from "naive-ui";

export default {
  components: {
    ExperienceCard,
    NButton,
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
        }, 400 * index);
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
.margin-sections {
  margin-top: 64px;
}
.title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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

.list-leave-active {
  position: absolute;
}
</style>