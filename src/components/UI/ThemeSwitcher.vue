<template>
  <div class="theme-switcher-container">
    <i class="far fa-sun"></i>
    <n-switch
      v-model:value="themeValue"
      size="small"
      checked-value="dark"
      unchecked-value="light"
    />
    <i class="far fa-moon"></i>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { NSwitch } from "naive-ui";
export default defineComponent({
  components: {
    NSwitch,
  },
  props: {
    modelValue: {
      type: String,
      required: true
    },
  },
  setup(props, context) {
    const themeValue = ref(props.modelValue);

    watch(themeValue, (value) => {
      localStorage.setItem('theme', value);
      context.emit("update:modelValue", value);
    });

    return {
      themeValue,
    };
  },
});
</script>

<style lang="scss" scoped>
.theme-switcher-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
}

i {
  width: 18px;
  height: 18px;
  margin: 0 4px;
  display: flex;
  align-items: center;
}
</style>