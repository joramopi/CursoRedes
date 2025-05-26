<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-xl font-semibold mb-6">{{ question.question }}</h2>
    
    <div class="space-y-3">
      <div 
        v-for="(option, index) in question.options" 
        :key="index"
        class="p-4 border rounded-lg transition-colors cursor-pointer"
        :class="getOptionClass(option, index)"
        @click="selectOption(option)"
      >
        <div class="flex items-center">
          <div 
            class="w-6 h-6 rounded-full border flex-shrink-0 flex items-center justify-center mr-3"
            :class="getOptionBulletClass(option, index)"
          >
            <div v-if="isSelected(option, index)" class="w-3 h-3 rounded-full"></div>
          </div>
          <span>{{ option.text }}</span>
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
import { computed } from 'vue'

const props = defineProps({
  question: {
    type: Object,
    required: true
  },
  userAnswer: {
    type: [Object, Array],
    default: null
  },
  quizSubmitted: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['answer'])

const isSelected = (option, index) => {
  if (!props.userAnswer) return false
  
  if (props.question.multiple) {
    return Array.isArray(props.userAnswer) 
      ? props.userAnswer.some(ans => ans.text === option.text)
      : false
  } else {
    return props.userAnswer.text === option.text
  }
}

const isCorrect = (option) => {
  return option.correct === true
}

const getOptionClass = (option, index) => {
  if (!props.quizSubmitted) {
    return isSelected(option, index) 
      ? 'bg-blue-50 border-blue-300' 
      : 'hover:bg-gray-50'
  }
  
  if (isCorrect(option)) {
    return 'bg-green-50 border-green-500'
  }
  
  if (isSelected(option, index) && !isCorrect(option)) {
    return 'bg-red-50 border-red-500'
  }
  
  return 'bg-gray-50'
}

const getOptionBulletClass = (option, index) => {
  if (!props.quizSubmitted) {
    return isSelected(option, index)
      ? 'border-blue-500 bg-blue-500'
      : 'border-gray-300'
  }
  
  if (isCorrect(option)) {
    return isSelected(option, index)
      ? 'bg-green-100 border-green-500'
      : 'bg-green-50 border-green-300'
  }
  
  if (isSelected(option, index) && !isCorrect(option)) {
    return 'bg-red-100 border-red-500'
  }
  
  return 'border-gray-300'
}

const selectOption = (option) => {
  if (props.quizSubmitted) return
  
  let newAnswer
  
  if (props.question.multiple) {
    const currentAnswers = Array.isArray(props.userAnswer) ? [...props.userAnswer] : []
    const optionIndex = currentAnswers.findIndex(a => a.text === option.text)
    
    if (optionIndex === -1) {
      newAnswer = [...currentAnswers, option]
    } else {
      currentAnswers.splice(optionIndex, 1)
      newAnswer = currentAnswers
    }
  } else {
    newAnswer = option
  }
  
  emit('answer', newAnswer)
}

// Feedback properties
const showFeedback = computed(() => {
  return props.quizSubmitted && props.userAnswer !== null
})

const isAnswerCorrect = computed(() => {
  if (!props.userAnswer) return false
  
  if (props.question.multiple) {
    const correctOptions = props.question.options.filter(opt => opt.correct)
    const selectedOptions = Array.isArray(props.userAnswer) ? props.userAnswer : []
    
    return (
      selectedOptions.length === correctOptions.length &&
      selectedOptions.every(opt => opt.correct === true)
    )
  } else {
    return props.userAnswer.correct === true
  }
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
  return isAnswerCorrect.value ? '¡Correcto!' : 'Incorrecto. Intenta de nuevo.'
})
</script>
