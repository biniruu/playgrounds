import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from './firebaseAuth'

const subscribeStatusElem = document.getElementById('subscribe-status') as HTMLParagraphElement

export const emailAuth = async (email: string, pw: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, pw)
  subscribeStatusElem.textContent = `${userCredential.user.email} subscribed successfully`
}
