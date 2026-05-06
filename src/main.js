import { Home } from './js/pages/Home.js'
import { Projects } from './js/pages/Projects.js'
import { Details } from './js/pages/Details.js'
import { Header } from './js/components/Header.js'
import { Footer } from './js/components/Footer.js'

const ROUTES = {
  '/': Home,
  '/projects': Projects,
  '/details': Details,
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

window.addEventListener('hashchange', handleRouteChange)

renderPage(getCurrentRoute())
