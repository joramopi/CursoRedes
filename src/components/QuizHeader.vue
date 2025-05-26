<template>
  <header class="bg-blue-600 text-white shadow-md">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">Evaluación Interactiva</h1>
        <div class="flex items-center space-x-4">
          <span class="text-sm bg-blue-700 px-3 py-1 rounded-full">
            Pregunta {{ currentQuestionIndex + 1 }} de {{ totalQuestions }}
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  currentQuestionIndex: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  }
})
</script>
