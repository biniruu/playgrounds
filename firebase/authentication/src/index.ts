import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from './utils/firebaseAuth'

const emailForm = document.getElementById('email-auth') as HTMLFormElement
const emailInput = document.getElementsByName('email')[0] as HTMLInputElement
const pwInput = document.getElementsByName('password')[0] as HTMLInputElement

const emailAuth = async (email: string, pw: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, pw)
  console.log('💃🏻 🕺🏻 userCredential:', userCredential)
}

emailForm.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault()
  void emailAuth(emailInput.value, pwInput.value)
})
