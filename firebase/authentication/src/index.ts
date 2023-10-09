const emailForm = document.getElementById('email-auth') as HTMLFormElement
const email = document.getElementsByName('email')[0] as HTMLInputElement
const pw = document.getElementsByName('password')[0] as HTMLInputElement

emailForm.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault()
  console.log('💃🏻 🕺🏻 email:', email.value)
  console.log('💃🏻 🕺🏻 pw:', pw.value)
})
