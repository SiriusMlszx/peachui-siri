<demo>
可变大变小
</demo>
<template>
  <div>
    <div>
      <Button size="big">巨无霸</Button>
      <Button>中不溜</Button>
      <Button size="small">小不点</Button>
    </div>
    <div>
      <Button theme="link" size="big">巨无霸</Button>
      <Button theme="link">中不溜</Button>
      <Button size="small" theme="link">小不点</Button>
    </div>
    <div>
      <Button size="big" theme="text">巨无霸</Button>
      <Button theme="text">中不溜</Button>
      <Button size="small" theme="text">小不点</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>