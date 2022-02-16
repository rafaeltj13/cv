<template>
  <section>
    <h2>{{ t("contact.title") }}</h2>
    <h4>{{ t("contact.description") }}</h4>
    <Card>
      <template #default>
        <div class="social-media-links">
          <i
            class="fab fa-github"
            @click="openSocial('https://github.com/rafaeltj13')"
          ></i>
          <i
            class="fab fa-linkedin-in"
            @click="openSocial('https://www.linkedin.com/in/rafael-de-ara%C3%BAjo-14b5b1117/')"
          ></i>
          <i
            class="far fa-envelope"
            @click="
              copyData(
                'rafael.damaciel@gmail.com',
                t('contact.copy'),
                t('contact.email')
              )
            "
          ></i>
          <i
            class="fab fa-instagram"
            @click="openSocial('https://www.instagram.com/rafaeldearaujo_/')"
          ></i>
          <i
            class="fab fa-twitter"
            @click="openSocial('https://twitter.com/liltejota')"
          ></i>
          <i
            class="fab fa-whatsapp"
            @click="
              copyData('+55 83 986664480', t('contact.copy'), t('contact.wa'))
            "
          ></i>
        </div>
      </template>
    </Card>
  </section>
</template>

<script>
import { useI18n } from "vue-i18n";
import Card from "../UI/Card";
import { useNotification } from "naive-ui";
export default {
  setup() {
    const { t } = useI18n();

    const notification = useNotification();

    const openSocial = (url) => {
      window.open(url, "_blank").focus();
    };

    const notify = (content, meta) => {
      notification["info"]({
        content,
        meta,
        duration: 5000,
      });
    };

    const copyData = (data, content, meta) => {
      navigator.clipboard.writeText(data);
      notify(content, meta);
    };

    return {
      t,
      openSocial,
      notify,
      copyData,
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