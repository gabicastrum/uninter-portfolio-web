import { CopyEmailButton } from './CopyEmailButton.js'

export function Header(currentPage) {
  const header = document.createElement('header')
  header.className = 'header'

  const logoButton = document.createElement('a')
  logoButton.href = '#/'
  logoButton.className = 'logo-button'
  logoButton.setAttribute('aria-label', 'Ir para página inicial')

  const logo = document.createElement('img')
  logo.src = 'src/assets/images/logo-db.png'
  logo.alt = 'Logo'
  logo.className = 'logo'

  logoButton.appendChild(logo)

  const nav = document.createElement('nav')
  nav.className = 'nav-links'

  const pages = [
    { path: '/', label: 'Sobre' },
    { path: '/details', label: 'Currículo' },
    { path: '/projects', label: 'Projetos' },
  ]

  pages.forEach((page) => {
    const link = document.createElement('a')
    link.href = '#' + page.path
    link.className = `nav-item ${currentPage === page.path ? 'active' : ''}`
    link.textContent = page.label
    nav.appendChild(link)
  })

  const socialIcons = document.createElement('div')
  socialIcons.className = 'social-icons'

  const githubLink = document.createElement('a')
  githubLink.href = 'https://github.com/gabicastrum'
  githubLink.target = '_blank'
  githubLink.rel = 'noreferrer'

  const githubIcon = document.createElement('img')
  githubIcon.src = 'src/assets/icons/github.svg'
  githubIcon.alt = 'Github'
  githubIcon.className = 'social-icon'

  githubLink.appendChild(githubIcon)

  const linkedinLink = document.createElement('a')
  linkedinLink.href = 'https://www.linkedin.com/in/gabrieladecastrolaurindo/'
  linkedinLink.target = '_blank'
  linkedinLink.rel = 'noreferrer'

  const linkedinIcon = document.createElement('img')
  linkedinIcon.src = 'src/assets/icons/linkedin.svg'
  linkedinIcon.alt = 'Linkedin'
  linkedinIcon.className = 'social-icon'

  linkedinLink.appendChild(linkedinIcon)

  const emailButton = CopyEmailButton('gabriela.laurindo@db.tec.br')

  socialIcons.appendChild(githubLink)
  socialIcons.appendChild(linkedinLink)
  socialIcons.appendChild(emailButton)

  header.appendChild(logoButton)
  header.appendChild(nav)
  header.appendChild(socialIcons)

  return header
}
