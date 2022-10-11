// Handle form
const form = document.getElementsByTagName('form')[0]
form.addEventListener('submit', (event) => {
  event.preventDefault()
  fetch('http://localhost:3000/user/create', {
    method: 'POST',
    body: JSON.stringify({
      pseudo: form.elements['pseudo'].value
    }),
    headers: { 'content-type': 'application/json' }
  })
    .then((res) => {
      localStorage.setItem('user', res.data)
      window.location.href('http://localhost:5500/public/waitingroom.html')
    })
})
