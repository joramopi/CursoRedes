<template>
  <aside class="w-full lg:w-64 bg-blue-900 text-white p-4 lg:h-screen lg:sticky lg:top-0">
    <div class="flex flex-col h-full">
      <div class="flex items-center justify-center lg:justify-start mb-8 pt-2">
        <div class="bg-white p-2 rounded-full">
          <i class="fas fa-network-wired text-2xl text-blue-900"></i>
        </div>
        <h2 class="text-xl font-bold ml-3 hidden lg:block">Curso Redes</h2>
      </div>
      
      <nav class="flex-1">
        <h3 class="text-sm uppercase text-blue-300 font-semibold px-3 mb-3">Preguntas</h3>
        <ul class="space-y-2">
          <li v-for="(question, index) in questions" :key="index">
            <button
              @click="$emit('navigate-to', index)"
              class="w-full text-left px-3 py-2 rounded-md transition-colors flex items-center"
              :class="getQuestionClass(index)"
              :disabled="quizCompleted"
            >
              <span class="w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm"
                    :class="getQuestionNumberClass(index)">
                {{ index + 1 }}
              </span>
              {{ question.question.substring(0, 30) }}...
            </button>
          </li>
        </ul>
      </nav>
      
      <div class="mt-auto pt-4 border-t border-blue-800">
        <div class="text-center text-sm text-blue-300">
          <p>Progreso</p>
          <div class="w-full bg-blue-800 rounded-full h-2 mt-2">
            <div class="bg-blue-400 h-2 rounded-full" 
                 :style="{ width: progressPercentage + '%' }"></div>
          </div>
          <p class="mt-1">{{ progressPercentage }}% completado</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import questions from '../data/questions'

const props = defineProps({
  currentQuestionIndex: {
    type: Number,
    required: true
  },
  quizCompleted: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['navigate-to'])

const progressPercentage = computed(() => {
  return Math.round(((props.currentQuestionIndex + 1) / questions.length) * 100)
})

const getQuestionClass = (index) => {
  if (index === props.currentQuestionIndex) {
    return 'bg-blue-800 text-white'
  }
  return 'text-blue-200 hover:bg-blue-800 hover:bg-opacity-50'
}

const getQuestionNumberClass = (index) => {
  if (index === props.currentQuestionIndex) {
    return 'bg-white text-blue-900 font-bold'
  }
  return 'bg-blue-800 text-white'
}
</script>
