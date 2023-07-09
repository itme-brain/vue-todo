<template>
  <div class="flex items-center">
    <input type="checkbox" v-model="todo.completed">
    <span class="ml-2" :class="{ 'line-through': todo.completed }">{{ todo.text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>
