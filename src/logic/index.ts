import { ref } from 'vue'

export * from './seed'
export * from './board'

export const showAnswer = ref(false)

export const markType = ref<'check' | 'cross'>('check')
export const toggleMarkType = () => {
  if (showAnswer.value) return

  markType.value = markType.value === 'check' ? 'cross' : 'check'
}

export const showSettingModal = ref(false)
export const showHelpModal = ref(false)
