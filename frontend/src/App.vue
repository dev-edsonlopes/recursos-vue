<template>
  <div>
    <h2 v-for="todo in doneTodos" :key="todo.text">{{ todo.text }}</h2>
    <button @click="checkAllTodo">Finalizar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Todo {
  text: string
  done: boolean
}

export default defineComponent({
  data() {
    return {
      todos: [] as Todo[]
    }
  },

  computed: {
    doneTodos(): Todo[] {
      return this.todos.filter((todo) => todo.done)
    }
  },

  watch: {
    todos(newValue: Todo[]) {
      const isFinished = !newValue.some(({ done }) => !done)

      if (isFinished) {
        alert('Todos Completo')
      }
    }
  },

  created() {
    this.todos = [
      { text: 'Estudar Typescript', done: true },
      { text: 'Lavar os pratos', done: false },
      { text: 'Aprender Nuxt.js', done: true }
    ]
  },

  methods: {
    checkAllTodo() {
      this.todos = this.todos.map(({ text }) => {
        return { text, done: true }
      })
    }
  }
})
</script>
