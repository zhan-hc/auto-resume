import { inject, Ref } from 'vue'

export default function () {
  const isLoading:Ref<boolean> = inject('isLoading')
  
  const showLoading = () => {
    isLoading.value = true
  }

  const hideLoading = () => {
    isLoading.value = false
  }
  return {
    isLoading,
    showLoading,
    hideLoading
  }
}