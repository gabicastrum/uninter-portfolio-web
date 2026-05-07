import { Toast } from './Toast.js'

export function CopyEmailButton(email) {
  const button = document.createElement('button')
  button.className = 'icon-button'
  button.setAttribute('aria-label', 'Copiar email')

  const mailIcon = document.createElement('img')
  mailIcon.src = 'src/assets/icons/email.svg'
  mailIcon.alt = 'Copiar email'
  mailIcon.className = 'social-icon'

  button.appendChild(mailIcon)

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email)
      Toast({ message: 'Email copiado com sucesso!', type: 'success' })
    } catch (error) {
      console.error('Erro ao copiar', error)
      Toast({ message: 'Erro ao copiar email', type: 'error' })
    }
  })

  return button
}
