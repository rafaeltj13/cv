<template>
  <transition name="about-me" tag="section" class="about-me-container">
    <div>
      <h3 class="about-me-hey">{{ t("aboutme.hey") }}</h3>
      <h1 class="about-me-name">{{ t("name") }} .</h1>
      <p class="about-me-description">{{ t("aboutme.description") }}</p>
      <NDivider class="divider" />
      <h2>{{ t("aboutme.who") }}</h2>
      <div class="bio-container" v-if="profilePhotoSrc">
        <img :src="profilePhotoSrc" alt="profile-photo" class="profile-photo" />
        <p>{{ t("aboutme.bio", { age: calculateAge() }) }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
import { useI18n } from "vue-i18n";
import axios from "axios";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { NDivider } from "naive-ui";

export default {
  components: {
    NDivider,
  },
  setup() {
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
      const birthDate = new Date('1997-07-22');
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
      t,
      profilePhotoSrc,
      calculateAge
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
}
.bio-container {
  display: flex;
  text-align: left;
}
.divider {
  margin: 32px 0;
}
.profile-photo {
  margin-right: 16px;
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
