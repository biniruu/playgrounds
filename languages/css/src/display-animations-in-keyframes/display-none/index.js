document.querySelectorAll('.delete-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.add('fade-out')
  })
})
