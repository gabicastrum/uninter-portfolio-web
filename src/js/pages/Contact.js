import { Toast } from '../components/Toast.js'
import { detailsData } from '../models/detailsData.js'

export function Contact() {
  const container = document.createElement('div')
  container.className = 'contact-page'

  const portfolioContainer = document.createElement('div')
  portfolioContainer.className = 'portfolio-container'

  const title = document.createElement('h1')
  title.className = 'page-title'
  title.textContent = 'Entre em Contato'

  const contentSection = document.createElement('section')
  contentSection.className = 'contact-section'

  const description = document.createElement('p')
  description.className = 'contact-description'
  description.textContent = 'Sinta-se à vontade para enviar uma mensagem. Responderei assim que possível!'

  const form = document.createElement('form')
  form.className = 'contact-form'
  form.id = 'contact-form'

  const nameFieldGroup = document.createElement('div')
  nameFieldGroup.className = 'form-group'

  const nameLabel = document.createElement('label')
  nameLabel.htmlFor = 'contact-name'
  nameLabel.className = 'form-label'
  nameLabel.textContent = 'Nome'

  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.id = 'contact-name'
  nameInput.className = 'form-input'
  nameInput.placeholder = 'Seu nome completo'
  nameInput.required = true

  const nameError = document.createElement('span')
  nameError.className = 'form-error'
  nameError.style.display = 'none'

  nameFieldGroup.appendChild(nameLabel)
  nameFieldGroup.appendChild(nameInput)
  nameFieldGroup.appendChild(nameError)

  const emailFieldGroup = document.createElement('div')
  emailFieldGroup.className = 'form-group'

  const emailLabel = document.createElement('label')
  emailLabel.htmlFor = 'contact-email'
  emailLabel.className = 'form-label'
  emailLabel.textContent = 'Email'

  const emailInput = document.createElement('input')
  emailInput.type = 'email'
  emailInput.id = 'contact-email'
  emailInput.className = 'form-input'
  emailInput.placeholder = 'seu@email.com'
  emailInput.required = true

  const emailError = document.createElement('span')
  emailError.className = 'form-error'
  emailError.style.display = 'none'

  emailFieldGroup.appendChild(emailLabel)
  emailFieldGroup.appendChild(emailInput)
  emailFieldGroup.appendChild(emailError)

  const messageFieldGroup = document.createElement('div')
  messageFieldGroup.className = 'form-group'

  const messageLabel = document.createElement('label')
  messageLabel.htmlFor = 'contact-message'
  messageLabel.className = 'form-label'
  messageLabel.textContent = 'Mensagem'

  const messageInput = document.createElement('textarea')
  messageInput.id = 'contact-message'
  messageInput.className = 'form-textarea'
  messageInput.placeholder = 'Sua mensagem aqui...'
  messageInput.rows = 6
  messageInput.required = true

  const messageError = document.createElement('span')
  messageError.className = 'form-error'
  messageError.style.display = 'none'

  messageFieldGroup.appendChild(messageLabel)
  messageFieldGroup.appendChild(messageInput)
  messageFieldGroup.appendChild(messageError)

  const submitButton = document.createElement('button')
  submitButton.type = 'submit'
  submitButton.className = 'submit-button'
  submitButton.textContent = 'Enviar Mensagem'

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const clearErrors = () => {
    nameError.style.display = 'none'
    emailError.style.display = 'none'
    messageError.style.display = 'none'
  }

  const validateForm = () => {
    clearErrors()
    let isValid = true

    const nameValue = nameInput.value.trim()
    if (!nameValue) {
      nameError.textContent = 'Nome é obrigatório'
      nameError.style.display = 'block'
      nameInput.classList.add('form-input-error')
      isValid = false
    } else {
      nameInput.classList.remove('form-input-error')
    }

    const emailValue = emailInput.value.trim()
    if (!emailValue) {
      emailError.textContent = 'Email é obrigatório'
      emailError.style.display = 'block'
      emailInput.classList.add('form-input-error')
      isValid = false
    } else if (!validateEmail(emailValue)) {
      emailError.textContent = 'Email inválido. Use o formato: seu@email.com'
      emailError.style.display = 'block'
      emailInput.classList.add('form-input-error')
      isValid = false
    } else {
      emailInput.classList.remove('form-input-error')
    }

    const messageValue = messageInput.value.trim()
    if (!messageValue) {
      messageError.textContent = 'Mensagem é obrigatória'
      messageError.style.display = 'block'
      messageInput.classList.add('form-input-error')
      isValid = false
    } else {
      messageInput.classList.remove('form-input-error')
    }

    return isValid
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (!validateForm()) {
      Toast({
        type: 'error',
        message: 'Por favor, corrija os erros no formulário',
        duration: 3000
      })
      return
    }

    submitButton.disabled = true
    submitButton.classList.add('loading')
    submitButton.textContent = 'Enviando...'

    setTimeout(() => {
      nameInput.value = ''
      emailInput.value = ''
      messageInput.value = ''
      clearErrors()

      Toast({
        type: 'success',
        message: 'Mensagem enviada com sucesso! Obrigado por entrar em contato.',
        duration: 3000
      })

      submitButton.disabled = false
      submitButton.classList.remove('loading')
      submitButton.textContent = 'Enviar Mensagem'
    }, 1500)
  })

  nameInput.addEventListener('blur', () => {
    if (nameInput.value.trim()) {
      nameInput.classList.remove('form-input-error')
      nameError.style.display = 'none'
    }
  })

  emailInput.addEventListener('blur', () => {
    const emailValue = emailInput.value.trim()
    if (emailValue && validateEmail(emailValue)) {
      emailInput.classList.remove('form-input-error')
      emailError.style.display = 'none'
    }
  })

  messageInput.addEventListener('blur', () => {
    if (messageInput.value.trim()) {
      messageInput.classList.remove('form-input-error')
      messageError.style.display = 'none'
    }
  })

  form.appendChild(nameFieldGroup)
  form.appendChild(emailFieldGroup)
  form.appendChild(messageFieldGroup)
  form.appendChild(submitButton)

  const infoSection = document.createElement('section')
  infoSection.className = 'contact-info-section'

  const infoTitle = document.createElement('h2')
  infoTitle.className = 'section-subtitle'
  infoTitle.textContent = 'Outras Formas de Contato'

  const infoGrid = document.createElement('div')
  infoGrid.className = 'contact-info-grid'

  const emailInfo = document.createElement('div')
  emailInfo.className = 'contact-info-item'

  const emailIcon = document.createElement('div')
  emailIcon.className = 'contact-icon'
  emailIcon.innerHTML = '📧'

  const emailTitle = document.createElement('h3')
  emailTitle.className = 'contact-info-title'
  emailTitle.textContent = 'Email'

  const emailValue = document.createElement('p')
  emailValue.className = 'contact-info-value'
  emailValue.textContent = 'gabrielacastro.tech@gmail.com'

  emailInfo.appendChild(emailIcon)
  emailInfo.appendChild(emailTitle)
  emailInfo.appendChild(emailValue)

  const linkedinInfo = document.createElement('div')
  linkedinInfo.className = 'contact-info-item'

  const linkedinIcon = document.createElement('div')
  linkedinIcon.className = 'contact-icon'
  linkedinIcon.innerHTML = '💼'

  const linkedinTitle = document.createElement('h3')
  linkedinTitle.className = 'contact-info-title'
  linkedinTitle.textContent = 'LinkedIn'

  const linkedinValue = document.createElement('a')
  linkedinValue.className = 'contact-info-value'
  linkedinValue.href = 'https://www.linkedin.com/in/gabrieladecastrolaurindo/'
  linkedinValue.target = '_blank'
  linkedinValue.rel = 'noreferrer'
  linkedinValue.textContent = 'Visite meu perfil'

  linkedinInfo.appendChild(linkedinIcon)
  linkedinInfo.appendChild(linkedinTitle)
  linkedinInfo.appendChild(linkedinValue)

  const githubInfo = document.createElement('div')
  githubInfo.className = 'contact-info-item'

  const githubIcon = document.createElement('div')
  githubIcon.className = 'contact-icon'
  githubIcon.innerHTML = '🐙'

  const githubTitle = document.createElement('h3')
  githubTitle.className = 'contact-info-title'
  githubTitle.textContent = 'GitHub'

  const githubValue = document.createElement('a')
  githubValue.className = 'contact-info-value'
  githubValue.href = 'https://github.com/gabicastrum'
  githubValue.target = '_blank'
  githubValue.rel = 'noreferrer'
  githubValue.textContent = 'Veja meus projetos'

  githubInfo.appendChild(githubIcon)
  githubInfo.appendChild(githubTitle)
  githubInfo.appendChild(githubValue)

  infoGrid.appendChild(emailInfo)
  infoGrid.appendChild(linkedinInfo)
  infoGrid.appendChild(githubInfo)

  infoSection.appendChild(infoTitle)
  infoSection.appendChild(infoGrid)

  contentSection.appendChild(description)
  contentSection.appendChild(form)

  portfolioContainer.appendChild(title)
  portfolioContainer.appendChild(contentSection)
  portfolioContainer.appendChild(infoSection)

  const curriculumSection = document.createElement('section')
  curriculumSection.className = 'curriculum-section'

  const curriculumTitle = document.createElement('h2')
  curriculumTitle.className = 'section-subtitle'
  curriculumTitle.textContent = 'Currículo'

  const curriculumHeader = document.createElement('div')
  curriculumHeader.className = 'curriculum-header'

  const downloadButton = document.createElement('a')
  downloadButton.href = detailsData.pdf
  downloadButton.download = detailsData.fileName
  downloadButton.className = 'download-button'

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('class', 'download-icon')
  svg.setAttribute('width', '20')
  svg.setAttribute('height', '20')
  svg.setAttribute('viewBox', '0 0 24 24')
  svg.setAttribute('fill', 'none')
  svg.setAttribute('stroke', 'currentColor')
  svg.setAttribute('stroke-width', '2')

  const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path1.setAttribute('d', 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4')

  const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline')
  polyline.setAttribute('points', '7 10 12 15 17 10')

  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
  line.setAttribute('x1', '12')
  line.setAttribute('y1', '15')
  line.setAttribute('x2', '12')
  line.setAttribute('y2', '3')

  svg.appendChild(path1)
  svg.appendChild(polyline)
  svg.appendChild(line)

  downloadButton.appendChild(svg)
  downloadButton.appendChild(document.createTextNode('Baixar Currículo'))

  curriculumHeader.appendChild(curriculumTitle)
  curriculumHeader.appendChild(downloadButton)

  const pdfViewer = document.createElement('iframe')
  pdfViewer.src = detailsData.pdf
  pdfViewer.className = 'curriculum-preview'
  pdfViewer.title = 'Currículo Gabriela de Castro Laurindo'

  curriculumSection.appendChild(curriculumHeader)
  curriculumSection.appendChild(pdfViewer)

  portfolioContainer.appendChild(curriculumSection)

  container.appendChild(portfolioContainer)

  return container
}
