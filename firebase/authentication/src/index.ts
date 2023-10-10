import { emailAuth } from './utils/auth'

const emailForm = document.getElementById('email-auth') as HTMLFormElement
const emailInput = document.getElementsByName('email')[0] as HTMLInputElement
const pwInput = document.getElementsByName('password')[0] as HTMLInputElement

emailForm.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault()
  void emailAuth(emailInput.value, pwInput.value)
})
