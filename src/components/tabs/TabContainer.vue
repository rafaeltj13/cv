<template>
  <div ref="tabsContainer">
    <div class="tabs-container">
      <h4 class="tab-element">{{ t("name") }}</h4>
      <transition-group name="list" tag="div" class="tab-selection-container">
        <p
          v-for="tab in currentTabs"
          :key="tab"
          class="tab-title"
          :class="{ 'selected-tab': selectedTab === tab }"
          @click="selectTab(tab)"
        >
          {{ t(`tabContainer.${tab}`) }}
        </p>
      </transition-group>
      <div class="settings-container">
        <LanguageSelector />
        <ThemeSwticher class="tab-element" />
      </div>
    </div>
    <transition name="component" mode="out-in">
      <component :is="selectedTab" class="content-container" />
    </transition>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import ThemeSwticher from "@/components/UI/ThemeSwitcher.vue";
import LanguageSelector from "@/components/UI/LanguageSelector.vue";
import AboutMe from "./AboutMe.vue";
import Contact from "./Contact.vue";
import Experience from "./Experience.vue";

const TABS = ["AboutMe", "Experience", "Contact"];
export default {
  components: {
    ThemeSwticher,
    LanguageSelector,
    AboutMe,
    Contact,
    Experience,
  },
  setup() {
    const currentTabs = ref([]);
    const { t } = useI18n();
    const selectedTab = ref(null);
    const tabsContainer = ref(null);

    onMounted(() => {
      TABS.forEach((tab) => {
        currentTabs.value.push(tab);
      });
      selectedTab.value = TABS[2];
    });

    const selectTab = (tab) => {
      selectedTab.value = tab;
    };

    return {
      currentTabs,
      t,
      selectedTab,
      selectTab,
      tabsContainer,
    };
  },
};
</script>

<style lang="scss" scoped>
.tabs-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--navbar);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
}
.tab-selection-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  min-height: 23px;
}
.tab-title {
  margin: 0 16px;
  cursor: pointer;
}
.selected-tab,
.tab-title:hover {
  color: var(--primary);
}
.tab-element {
  width: 120px;
  text-align: left;
  margin: 0 16px;
}
.content-container {
  width: 58vw;
  padding: 16px 20vw;
}
.settings-container {
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.component-enter-active,
.component-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.component-enter-from {
  left: -100%;
}

.component-enter-to {
  left: 0%;
}

.component-leave-from {
  transform: scale(1);
}

.component-leave-to {
  transform: scale(0.8);
}
</style>