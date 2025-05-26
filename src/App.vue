<template>
  <div class="min-h-screen bg-gray-50">
    <QuizHeader />
    <div class="flex flex-col lg:flex-row">
      <QuizSidebar 
        :current-question-index="currentQuestionIndex"
        :quiz-completed="quizCompleted"
        @navigate-to="navigateTo"
      />
      <main class="flex-1 p-4">
        <div v-if="!quizCompleted" class="max-w-4xl mx-auto">
          <component
            :is="currentQuestionComponent"
            :question="currentQuestion"
            :user-answer="userAnswers[currentQuestionIndex]"
            :quiz-submitted="quizSubmitted"
            @answer="handleAnswer"
          />
          <QuizControls
            :is-first="isFirstQuestion"
            :is-last="isLastQuestion"
            :is-answer-selected="isAnswerSelected"
            :quiz-submitted="quizSubmitted"
            @previous="previousQuestion"
            @next="nextQuestion"
            @submit="submitQuiz"
          />
        </div>
        <ResultsDisplay
          v-else
          :questions="questions"
          :user-answers="userAnswers"
          @restart="resetQuiz"
        />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import questions from './data/questions'
import QuizHeader from './components/QuizHeader.vue'
import QuizSidebar from './components/QuizSidebar.vue'
import QuizControls from './components/QuizControls.vue'
import ResultsDisplay from './components/ResultsDisplay.vue'
import QuestionChoice from './components/questions/QuestionChoice.vue'
import QuestionTrueFalse from './components/questions/QuestionTrueFalse.vue'
import QuestionMatching from './components/questions/QuestionMatching.vue'

const currentQuestionIndex = ref(0)
const userAnswers = ref([])
const quizSubmitted = ref(false)
const quizCompleted = ref(false)

// Computed properties
const currentQuestion = computed(() => questions[currentQuestionIndex.value])

const currentQuestionComponent = computed(() => {
  const type = currentQuestion.value.type
  if (type === 'choice') return QuestionChoice
  if (type === 'truefalse') return QuestionTrueFalse
  if (type === 'matching') return QuestionMatching
  return null
})

const isFirstQuestion = computed(() => currentQuestionIndex.value === 0)
const isLastQuestion = computed(() => currentQuestionIndex.value === questions.length - 1)
const isAnswerSelected = computed(() => {
  const answer = userAnswers.value[currentQuestionIndex.value]
  if (!answer) return false
  if (Array.isArray(answer)) return answer.length > 0
  return answer !== null && answer !== undefined
})

// Methods
function handleAnswer(answer) {
  const newAnswers = [...userAnswers.value]
  newAnswers[currentQuestionIndex.value] = answer
  userAnswers.value = newAnswers
}

function nextQuestion() {
  if (currentQuestionIndex.value < questions.length - 1) {
    currentQuestionIndex.value++
  }
}

function previousQuestion() {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--
  }
}

function submitQuiz() {
  quizSubmitted.value = true
  quizCompleted.value = true
}

function resetQuiz() {
  currentQuestionIndex.value = 0
  userAnswers.value = []
  quizSubmitted.value = false
  quizCompleted.value = false
}

function navigateTo(index) {
  currentQuestionIndex.value = index
  quizSubmitted.value = false
}

// Initialize user answers
onMounted(() => {
  console.log('Preguntas cargadas:', questions)
  console.log('Número de preguntas:', questions.length)
  console.log('Pregunta con ID 5:', questions.find(q => q.id === 5))
  userAnswers.value = Array(questions.length).fill(null)
})
</script>
