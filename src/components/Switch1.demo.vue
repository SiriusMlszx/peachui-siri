<demo>
常规用法
</demo>

<template>
  <Switch v-model:value="bool"/>
</template>

<script lang="ts">
// 相对路径要改为自己的
import Switch from '../lib/Switch.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>