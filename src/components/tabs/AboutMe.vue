<template>
  <transition name="about-me" tag="section" class="about-me-container">
    <div>
      <h3 class="about-me-hey">{{ t("aboutme.hey") }}</h3>
      <h1 class="about-me-name">{{ t("name") }} .</h1>
      <p class="about-me-description">{{ t("aboutme.description") }}</p>
      <NDivider class="divider" />
      <h2>{{ t("aboutme.who") }}</h2>
      <n-grid
        cols="1 s:1 m:1 l:1 xl:2"
        responsive="screen"
        v-if="profilePhotoSrc"
      >
        <n-grid-item>
          <img
            :src="profilePhotoSrc"
            alt="profile-photo"
            class="profile-photo"
          />
        </n-grid-item>
        <n-grid-item class="bio-container">
          <p class="bio-info">
            {{ t("aboutme.bio", { age: calculateAge() }) }}
          </p>
          <p class="bio-info">{{ t("aboutme.bioWork") }}</p>
        </n-grid-item>
      </n-grid>
      <NDivider class="divider" />
      <h2>{{ t("aboutme.skills") }}</h2>
      <n-grid cols="2 s:2 m:4 l:6 xl:6" responsive="screen">
        <n-grid-item v-for="skill of skills" :key="skill">
          <n-button round class="skill-btn">
            {{ skill }}
          </n-button>
        </n-grid-item>
      </n-grid>
    </div>
  </transition>
</template>

<script>
import { useI18n } from "vue-i18n";
import axios from "axios";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { NDivider, NGrid, NGridItem } from "naive-ui";
import { NButton } from "naive-ui";

export default {
  components: {
    NDivider,
    NGrid,
    NGridItem,
    NButton,
  },
  setup() {
    const skills = ref([
      "Vue.js",
      "Vue 3",
      "Node.js",
      "Express.js",
      "React",
      "React Native",
      "Angular",
      "Mongoose",
      "MongoDB",
      "Sequelize",
      "SQL",
      "Google BigQuery"
    ]);

    const { t } = useI18n();
    const profilePhotoSrc = ref("");

    const getProfilePhoto = async () => {
      const { data } = await axios.get(
        `https://api.github.com/users/rafaeltj13`
      );
      profilePhotoSrc.value = data.avatar_url;
    };

    const calculateAge = () => {
      const today = new Date();
      const birthDate = new Date("1997-07-22");
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    };

    onMounted(() => {
      getProfilePhoto();
    });

    return {
      skills,
      t,
      profilePhotoSrc,
      calculateAge,
    };
  },
};
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
  font-size: 18px;
}
.bio-container {
  text-align: left;
  margin: auto;
}
.divider {
  margin: 32px 0;
}
.profile-photo {
  margin-right: 16px;
  border-radius: 8px;
  flex: 1;
}
.bio-info {
  font-size: 18px;
  margin-bottom: 16px;
}
.skill-btn {
  margin: 0 0 16px 0;
  color: var(--font);
}

.about-me-enter-active,
.about-me-leave-active {
  transition: all 1s ease;
}

.about-me-enter-from,
.about-me-leave-to {
  opacity: 0;
}
</style>
