import { projects } from '../models/projects.js'
import { ProjectCard } from '../components/ProjectCard.js'

const ITENS_PER_PAGE = 6

export function Projects() {
  const container = document.createElement('div')
  container.className = 'projects-page'

  const portfolioContainer = document.createElement('div')
  portfolioContainer.className = 'portfolio-container'

  const title = document.createElement('h1')
  title.className = 'page-title'
  title.textContent = 'Meu Portfólio'

  const projectsGrid = document.createElement('div')
  projectsGrid.className = 'projects-grid'

  let currentPage = 1
  const totalPages = Math.ceil(projects.length / ITENS_PER_PAGE)

  const renderProjects = () => {
    projectsGrid.innerHTML = ''

    const start = (currentPage - 1) * ITENS_PER_PAGE
    const end = start + ITENS_PER_PAGE
    const paginatedProjects = projects.slice(start, end)

    paginatedProjects.forEach((project) => {
      const card = ProjectCard(project)
      projectsGrid.appendChild(card)
    })
  }

  renderProjects()

  portfolioContainer.appendChild(title)
  portfolioContainer.appendChild(projectsGrid)

  if (totalPages > 1) {
    const paginationContainer = document.createElement('div')
    paginationContainer.className = 'pagination-container'

    const prevButton = document.createElement('button')
    prevButton.textContent = 'Anterior'
    prevButton.className = 'pagination-button'
    prevButton.disabled = currentPage === 1

    const pageInfo = document.createElement('span')
    pageInfo.className = 'page-info'
    pageInfo.textContent = `Página ${currentPage} de ${totalPages}`

    const nextButton = document.createElement('button')
    nextButton.textContent = 'Próxima'
    nextButton.className = 'pagination-button'
    nextButton.disabled = currentPage === totalPages

    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--
        renderProjects()
        updatePagination()
        window.scrollTo(0, 0)
      }
    })

    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++
        renderProjects()
        updatePagination()
        window.scrollTo(0, 0)
      }
    })

    const updatePagination = () => {
      prevButton.disabled = currentPage === 1
      nextButton.disabled = currentPage === totalPages
      pageInfo.textContent = `Página ${currentPage} de ${totalPages}`
    }

    paginationContainer.appendChild(prevButton)
    paginationContainer.appendChild(pageInfo)
    paginationContainer.appendChild(nextButton)

    portfolioContainer.appendChild(paginationContainer)
  }

  container.appendChild(portfolioContainer)

  return container
}
