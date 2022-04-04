import { ref } from 'vue'

export * from './board'

export const pointerType = ref<string>('touch')

export const showAnswer = ref(false)

export const markType = ref<'check' | 'cross'>('check')
export const toggleMarkType = () => {
  markType.value = markType.value === 'check' ? 'cross' : 'check'
}
