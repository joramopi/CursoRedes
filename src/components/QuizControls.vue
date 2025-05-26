<template>
  <div class="mt-8 flex justify-between">
    <button
      @click="$emit('previous')"
      :disabled="isFirst || !isAnswerSelected"
      class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
    >
      <i class="fas fa-arrow-left mr-2"></i>
      Anterior
    </button>
    
    <button
      v-if="!isLast"
      @click="$emit('next')"
      :disabled="!isAnswerSelected"
      class="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
    >
      Siguiente
      <i class="fas fa-arrow-right ml-2"></i>
    </button>
    
    <button
      v-else
      @click="$emit('submit')"
      :disabled="!isAnswerSelected"
      class="ml-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
    >
      Finalizar
      <i class="fas fa-check ml-2"></i>
    </button>
  </div>
</template>

<script setup>
defineProps({
  isFirst: {
    type: Boolean,
    default: false
  },
  isLast: {
    type: Boolean,
    default: false
  },
  isAnswerSelected: {
    type: Boolean,
    default: false
  },
  quizSubmitted: {
    type: Boolean,
    default: false
  }
})

defineEmits(['previous', 'next', 'submit'])
</script>
