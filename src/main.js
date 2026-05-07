import { Home } from './js/pages/Home.js'
import { Projects } from './js/pages/Projects.js'
import { Formation } from './js/pages/Formation.js'
import { Contact } from './js/pages/Contact.js'
import { Header } from './js/components/Header.js'
import { Footer } from './js/components/Footer.js'

const THEME_KEY = 'portfolio-theme'

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || 'light'
  setTheme(savedTheme)
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem(THEME_KEY, theme)
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light'
  const newTheme = currentTheme === 'light' ? 'dark' : 'light'
  setTheme(newTheme)
  return newTheme
}

window.toggleTheme = toggleTheme

const ROUTES = {
  '/': Home,
  '/portfolio': Projects,
  '/formation': Formation,
  '/contact': Contact,
}

function getCurrentRoute() {
  const hash = window.location.hash.slice(1) || '/'
  return hash
}

function renderPage(route) {
  const mainContainer = document.getElementById('main-container')
  const headerContainer = document.getElementById('header-container')
  const footerContainer = document.getElementById('footer-container')

  mainContainer.innerHTML = ''
  headerContainer.innerHTML = ''
  footerContainer.innerHTML = ''

  const PageComponent = ROUTES[route] || ROUTES['/']

  const page = PageComponent()
  mainContainer.appendChild(page)

  const header = Header(route)
  headerContainer.appendChild(header)

  const footer = Footer()
  footerContainer.appendChild(footer)
}

function handleRouteChange() {
  const route = getCurrentRoute()
  renderPage(route)
}

initTheme()

window.addEventListener('hashchange', handleRouteChange)

renderPage(getCurrentRoute())
