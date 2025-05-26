<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-xl font-semibold mb-6">{{ question.question }}</h2>
    
    <div class="space-y-3 max-w-md mx-auto">
      <button
        v-for="option in ['Verdadero', 'Falso']"
        :key="option"
        @click="selectOption(option)"
        class="w-full p-4 border rounded-lg text-left transition-colors flex items-center justify-between"
        :class="getOptionClass(option)"
        :disabled="quizSubmitted"
      >
        <span>{{ option }}</span>
        <i 
          v-if="showFeedback && isSelected(option)" 
          :class="isCorrect(option) ? 'text-green-500' : 'text-red-500'"
          class="fas"
          :class="isCorrect(option) ? 'fa-check' : 'fa-times'"
        ></i>
      </button>
    </div>
    
    <div v-if="showFeedback" class="mt-6 p-4 rounded-lg" :class="feedbackClass">
      <p class="font-medium">
        <i :class="feedbackIcon" class="mr-2"></i>
        {{ feedbackMessage }}
      </p>
      <p v-if="question.explanation" class="mt-2 text-sm">
        {{ question.explanation }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  question: {
    type: Object,
    required: true
  },
  userAnswer: {
    type: [String, Boolean],
    default: null
  },
  quizSubmitted: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['answer'])

const isSelected = (option) => {
  return props.userAnswer === option
}

const isCorrect = (option) => {
  return option === props.question.correctAnswer
}

const getOptionClass = (option) => {
  if (!props.quizSubmitted) {
    return isSelected(option) 
      ? 'bg-blue-50 border-blue-300' 
      : 'hover:bg-gray-50'
  }
  
  if (isCorrect(option)) {
    return 'bg-green-50 border-green-500'
  }
  
  if (isSelected(option) && !isCorrect(option)) {
    return 'bg-red-50 border-red-500'
  }
  
  return 'bg-gray-50'
}

const selectOption = (option) => {
  if (props.quizSubmitted) return
  emit('answer', option)
}

// Feedback properties
const showFeedback = computed(() => {
  return props.quizSubmitted && props.userAnswer !== null
})

const isAnswerCorrect = computed(() => {
  return props.userAnswer === props.question.correctAnswer
})

const feedbackClass = computed(() => {
  return isAnswerCorrect.value 
    ? 'bg-green-50 text-green-700' 
    : 'bg-red-50 text-red-700'
})

const feedbackIcon = computed(() => {
  return isAnswerCorrect.value 
    ? 'fas fa-check-circle' 
    : 'fas fa-times-circle'
})

const feedbackMessage = computed(() => {
  return isAnswerCorrect.value 
    ? '¡Correcto! ' + (question.explanation || '')
    : `Incorrecto. La respuesta correcta es: ${question.correctAnswer}. ${question.explanation || ''}`
})
</script>
