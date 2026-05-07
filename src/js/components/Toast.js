export function Toast({ message, type = 'info', duration = 3000 }) {
  const toast = document.createElement('div')
  toast.className = `toast ${type}`
  toast.textContent = message

  document.body.appendChild(toast)

  setTimeout(() => {
    toast.remove()
  }, duration)
}
