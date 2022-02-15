<template>
  <section>
    <h2>{{ t('contact.title') }}</h2>
    <h4>{{ t('contact.description') }}</h4>
    <Card>
      <template #default>
        <div class="social-media-links" @click="notify('info')">
          <i class="fab fa-github"></i>
          <i class="fab fa-linkedin-in"></i>
          <i class="far fa-envelope"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-whatsapp"></i>
        </div>
      </template>
    </Card>
  </section>
</template>

<script>
import { useI18n } from "vue-i18n";
import Card from "../UI/Card";
import { useNotification } from 'naive-ui'
export default {
  setup() {
    const { t } = useI18n();

    const notification = useNotification();

    return {
      t,
      notify (type) {
        notification[type]({
          content: 'What to say?',
          meta: "I don't know",
          duration: 5000,
        })
      }
    };
  },
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.social-media-links {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  i {
    cursor: pointer;
    position: relative;
    top: 0;
    transition: top ease 0.5s;
    font-size: 18px;
  }

  i:hover {
    top: -6px;
  }
}
</style>