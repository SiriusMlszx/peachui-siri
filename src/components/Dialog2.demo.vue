<demo>
可以快捷关闭
</demo>
<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {
  h
} from 'vue'
import {
  openDialog
} from "../lib"
export default {
  components: {
    Button
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '这是一个对话框'),
        content: '点框外任意一处就可以关闭',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {
      showDialog
    }
  }
}
</script>