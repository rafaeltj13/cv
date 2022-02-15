<template>
  <n-card class="custom-card" hoverable>
    <slot></slot>
  </n-card>
</template>

<script>
import { NCard } from "naive-ui";
export default {
  setup() {
    
  },
  components: {
    NCard,
  },
};
</script>

<style lang="scss" scoped>
.custom-card {
  border-radius: 8px;
  text-align: left;
  background: var(--primary);
}
</style>