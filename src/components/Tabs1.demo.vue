<demo>
常规用法
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="早饭">
      土豆饼、牛奶、鸡蛋、虾饺、肠粉
    </Tab>
    <Tab title="午饭">
      辣子鸡、水煮鱼、口水鸡、夫妻肺片
    </Tab>
    <Tab title="晚饭">
      火锅、烧烤
    </Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const x = ref('早饭')
    return {
      x
    }
  }
}
</script>