<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">To-Do List</h1>
    <div class="mb-4">
      <input type="text" v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new task">
    </div>
    <div>
      <Todo v-for="(todo, index) in todos" :key="index" :todo="todo" />
    </div>
  </div>
</template>

<script>
import Todo from './Todo.vue'

export default {
  components: {
    Todo
  },
  data() {
    return {
      newTodo: '',
      todos: []
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo !== '') {
        this.todos.push({
          text: this.newTodo,
          completed: false
        });
        this.newTodo = '';
      }
    }
  }
}
</script>
