<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-xl font-semibold mb-6">{{ question.question }}</h2>
    
    <div class="space-y-4">
      <div v-for="(item, index) in question.items" :key="index" class="flex flex-col sm:flex-row items-center gap-2">
        <span class="w-32 font-medium">{{ item.term }}</span>
        <div class="flex-1 relative">
          <select 
            v-model="userSelections[index]"
            :disabled="quizSubmitted"
            class="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            :class="getSelectClass(index)"
            @change="updateSelections"
          >
            <option value="" disabled selected>Selecciona una opción</option>
            <option 
              v-for="(option, optionIndex) in question.options" 
              :key="optionIndex"
              :value="option"
              :disabled="isOptionUsed(option, index)"
            >
              {{ option }}
            </option>
          </select>
          <div v-if="showFeedback && userSelections[index]" class="absolute right-3 top-1/2 transform -translate-y-1/2">
            <i 
              v-if="isCorrectMatch(index)"
              class="fas fa-check text-green-500 ml-2"
            ></i>
            <i 
              v-else
              class="fas fa-times text-red-500 ml-2"
            ></i>
          </div>
        </div>
      </div>
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
import { ref, computed, watch } from 'vue'

const props = defineProps({
  question: {
    type: Object,
    required: true
  },
  userAnswer: {
    type: Object,
    default: () => ({})
  },
  quizSubmitted: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['answer'])

// Initialize userSelections from userAnswer or with empty strings
const userSelections = ref([...Array(props.question.items.length)].map(() => ''))

// Update userSelections when userAnswer changes (e.g., when navigating between questions)
watch(() => props.userAnswer, (newAnswer) => {
  if (newAnswer) {
    props.question.items.forEach((_, index) => {
      userSelections.value[index] = newAnswer[index] || ''
    })
  }
}, { immediate: true })

const isCorrectMatch = (index) => {
  if (!props.quizSubmitted) return false
  return userSelections.value[index] === props.question.items[index].correct
}

const isOptionUsed = (option, currentIndex) => {
  if (props.quizSubmitted) return false
  
  // Don't disable the currently selected option for this item
  if (userSelections.value[currentIndex] === option) {
    return false
  }
  
  // Check if the option is already selected in another item
  return userSelections.value.includes(option)
}

const getSelectClass = (index) => {
  if (!props.quizSubmitted) {
    return userSelections.value[index] 
      ? 'border-blue-300 bg-blue-50' 
      : 'hover:border-gray-400'
  }
  
  if (isCorrectMatch(index)) {
    return 'border-green-500 bg-green-50'
  }
  
  if (userSelections.value[index] && !isCorrectMatch(index)) {
    return 'border-red-500 bg-red-50'
  }
  
  return 'border-gray-300'
}

const updateSelections = () => {
  const answer = {}
  userSelections.value.forEach((selection, index) => {
    answer[index] = selection
  })
  emit('answer', answer)
}

// Feedback properties
const showFeedback = computed(() => {
  return props.quizSubmitted && Object.keys(props.userAnswer || {}).length > 0
})

const isAnswerCorrect = computed(() => {
  if (!props.userAnswer) return false
  
  return props.question.items.every((item, index) => {
    return props.userAnswer[index] === item.correct
  })
})

const feedbackClass = computed(() => {
  return isAnswerCorrect.value 
    ? 'bg-green-50 text-green-700' 
    : 'bg-yellow-50 text-yellow-700'
})

const feedbackIcon = computed(() => {
  return isAnswerCorrect.value 
    ? 'fas fa-check-circle' 
    : 'fas fa-exclamation-circle'
})

const feedbackMessage = computed(() => {
  return isAnswerCorrect.value 
    ? '¡Todas las respuestas son correctas! ' + (props.question.explanation || '')
    : 'Algunas respuestas son incorrectas. Revisa las correcciones. ' + (props.question.explanation || '')
})
</script>
