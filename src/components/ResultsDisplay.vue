<template>
  <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold mb-6 text-center">Resultados del Cuestionario</h2>
    
    <div class="mb-8 p-6 bg-blue-50 rounded-lg">
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold mb-2">
          {{ correctAnswersCount }} / {{ questions.length }}
        </div>
        <div class="text-2xl font-semibold mb-4">
          {{ Math.round((correctAnswersCount / questions.length) * 100) }}% de respuestas correctas
        </div>
        <div class="w-full bg-gray-200 rounded-full h-4">
          <div 
            class="h-4 rounded-full transition-all duration-1000"
            :class="scorePercentage >= 70 ? 'bg-green-500' : 'bg-yellow-500'"
            :style="{ width: scorePercentage + '%' }"
          ></div>
        </div>
        <div class="mt-4 text-sm text-gray-600">
          {{ getResultMessage() }}
        </div>
      </div>
    </div>

    <div class="space-y-6">
      <h3 class="text-lg font-semibold border-b pb-2">Revisión de respuestas</h3>
      
      <div v-for="(question, index) in questions" :key="index" class="border rounded-lg overflow-hidden">
        <div class="p-4" :class="isQuestionCorrect(index) ? 'bg-green-50' : 'bg-red-50'">
          <div class="flex items-start">
            <div class="flex-shrink-0 mt-1">
              <i v-if="isQuestionCorrect(index)" class="fas fa-check-circle text-green-500 text-xl"></i>
              <i v-else class="fas fa-times-circle text-red-500 text-xl"></i>
            </div>
            <div class="ml-3">
              <h4 class="font-medium">Pregunta {{ index + 1 }}: {{ question.question }}</h4>
              <div v-if="!isQuestionCorrect(index)" class="mt-2 text-sm">
                <p class="text-gray-700">
                  <span class="font-medium">Tu respuesta:</span> 
                  <span v-html="formatUserAnswer(question, index)"></span>
                </p>
                <p class="text-gray-700 mt-1">
                  <span class="font-medium">Respuesta correcta:</span> 
                  <span v-html="formatCorrectAnswer(question)"></span>
                </p>
              </div>
              <div v-if="question.explanation" class="mt-2 p-3 bg-white bg-opacity-50 rounded text-sm">
                <p class="font-medium text-gray-700">Explicación:</p>
                <p class="mt-1 text-gray-600">{{ question.explanation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 flex justify-center">
      <button
        @click="$emit('restart')"
        class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
      >
        <i class="fas fa-redo mr-2"></i>
        Reiniciar cuestionario
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  questions: {
    type: Array,
    required: true
  },
  userAnswers: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['restart'])

const correctAnswersCount = computed(() => {
  return props.questions.reduce((count, _, index) => {
    return count + (isQuestionCorrect(index) ? 1 : 0)
  }, 0)
})

const scorePercentage = computed(() => {
  return Math.round((correctAnswersCount.value / props.questions.length) * 100)
})

function isQuestionCorrect(index) {
  const question = props.questions[index]
  const userAnswer = props.userAnswers[index]
  
  if (!userAnswer) return false
  
  if (question.type === 'choice') {
    if (question.multiple) {
      const correctOptions = question.options.filter(opt => opt.correct).map(opt => opt.text)
      const userSelections = Array.isArray(userAnswer) ? userAnswer.map(u => u.text) : []
      
      return (
        userSelections.length === correctOptions.length &&
        userSelections.every(selection => correctOptions.includes(selection))
      )
    } else {
      return userAnswer.correct === true
    }
  } else if (question.type === 'truefalse') {
    return userAnswer === question.correctAnswer
  } else if (question.type === 'matching') {
    return Object.entries(userAnswer).every(([key, value]) => {
      return value === question.items[parseInt(key)].correct
    })
  }
  
  return false
}

function formatUserAnswer(question, index) {
  const userAnswer = props.userAnswers[index]
  if (!userAnswer) return '<span class="text-red-500">Sin respuesta</span>'
  
  if (question.type === 'choice') {
    if (question.multiple) {
      const answers = Array.isArray(userAnswer) ? 
        userAnswer.map(u => u.text).join(', ') : 
        'Sin respuesta'
      return answers || '<span class="text-red-500">Sin respuesta</span>'
    } else {
      return userAnswer.text || '<span class="text-red-500">Sin respuesta</span>'
    }
  } else if (question.type === 'truefalse') {
    return userAnswer || '<span class="text-red-500">Sin respuesta</span>'
  } else if (question.type === 'matching') {
    return Object.entries(userAnswer).map(([key, value]) => {
      return `${question.items[parseInt(key)].term}: ${value || 'Sin respuesta'}`
    }).join('; ')
  }
  
  return ''
}

function formatCorrectAnswer(question) {
  if (question.type === 'choice') {
    const correctOptions = question.options
      .filter(opt => opt.correct)
      .map(opt => opt.text)
    return correctOptions.join(', ')
  } else if (question.type === 'truefalse') {
    return question.correctAnswer
  } else if (question.type === 'matching') {
    return question.items.map(item => 
      `${item.term}: ${item.correct}`
    ).join('; ')
  }
  return ''
}

function getResultMessage() {
  const percentage = scorePercentage.value
  
  if (percentage >= 90) {
    return '¡Excelente trabajo! Has dominado completamente este tema.'
  } else if (percentage >= 70) {
    return '¡Buen trabajo! Has aprobado, pero hay algunos conceptos que podrías repasar.'
  } else if (percentage >= 50) {
    return 'Has aprobado, pero te recomiendo repasar los conceptos principales.'
  } else {
    return 'Necesitas repasar más el material. No te rindas, ¡sigue practicando!'
  }
}
</script>
