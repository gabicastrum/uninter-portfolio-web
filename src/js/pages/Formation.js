import { FORMATIONS, LANGUAGES } from '../models/formations.js'

const ITEMS_PER_PAGE = 6

export function Formation() {
  const container = document.createElement('div')
  container.className = 'formation-page'

  const portfolioContainer = document.createElement('div')
  portfolioContainer.className = 'portfolio-container'

  const title = document.createElement('h1')
  title.className = 'page-title'
  title.textContent = 'Minha Formação'

  const formationSection = document.createElement('section')
  formationSection.className = 'formation-section'

  const formationTitle = document.createElement('h2')
  formationTitle.className = 'section-subtitle'
  formationTitle.textContent = 'Educação'

  const formationGrid = document.createElement('div')
  formationGrid.className = 'formation-grid'

  let currentPage = 1
  const totalPages = Math.ceil(FORMATIONS.length / ITEMS_PER_PAGE)

  const renderFormations = () => {
    formationGrid.innerHTML = ''

    const start = (currentPage - 1) * ITEMS_PER_PAGE
    const end = start + ITEMS_PER_PAGE
    const paginatedFormations = FORMATIONS.slice(start, end)

    paginatedFormations.forEach((formation) => {
      const card = createFormationCard(formation)
      formationGrid.appendChild(card)
    })
  }

  function createFormationCard(formation) {
    const card = document.createElement('div')
    card.className = 'formation-card'

    const imageContainer = document.createElement('div')
    imageContainer.className = 'formation-image-container'

    const img = document.createElement('img')
    img.src = formation.image
    img.alt = formation.institution
    img.className = 'formation-image'

    img.addEventListener('error', () => {
      const fallback = document.createElement('div')
      fallback.className = 'formation-image-fallback'
      fallback.textContent = formation.institution.substring(0, 2).toUpperCase()
      img.replaceWith(fallback)
    })

    imageContainer.appendChild(img)

    const content = document.createElement('div')
    content.className = 'formation-content'

    const institution = document.createElement('h3')
    institution.className = 'formation-institution'
    institution.textContent = formation.institution

    const formationTitle = document.createElement('h4')
    formationTitle.className = 'formation-title'
    formationTitle.textContent = formation.title

    const year = document.createElement('p')
    year.className = 'formation-year'
    year.textContent = formation.year

    const description = document.createElement('p')
    description.className = 'formation-description'
    description.textContent = formation.description

    const status = document.createElement('span')
    status.className = `formation-status ${formation.status === 'Concluído' ? 'completed' : 'ongoing'}`
    status.textContent = formation.status

    const link = document.createElement('a')
    link.href = formation.link
    link.target = '_blank'
    link.rel = 'noreferrer'
    link.className = 'formation-link'
    link.textContent = 'Saiba Mais'

    content.appendChild(institution)
    content.appendChild(formationTitle)
    content.appendChild(year)
    content.appendChild(description)
    content.appendChild(status)
    content.appendChild(link)

    card.appendChild(imageContainer)
    card.appendChild(content)

    return card
  }

  renderFormations()

  formationSection.appendChild(formationTitle)
  formationSection.appendChild(formationGrid)

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
        renderFormations()
        updatePagination()
        window.scrollTo(0, 0)
      }
    })

    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++
        renderFormations()
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

    formationSection.appendChild(paginationContainer)
  }

  const languagesSection = document.createElement('section')
  languagesSection.className = 'languages-section'

  const languagesTitle = document.createElement('h2')
  languagesTitle.className = 'section-subtitle'
  languagesTitle.textContent = 'Idiomas'

  const languagesGrid = document.createElement('div')
  languagesGrid.className = 'languages-grid'

  LANGUAGES.forEach((lang) => {
    const langCard = document.createElement('div')
    langCard.className = 'language-card'

    const langName = document.createElement('h3')
    langName.className = 'language-name'
    langName.textContent = lang.name

    const langLevel = document.createElement('p')
    langLevel.className = 'language-level'
    langLevel.textContent = lang.level

    const proficiencyBar = document.createElement('div')
    proficiencyBar.className = 'proficiency-bar'

    const proficiencyFill = document.createElement('div')
    proficiencyFill.className = 'proficiency-fill'
    proficiencyFill.style.width = `${lang.proficiency}%`

    proficiencyBar.appendChild(proficiencyFill)

    langCard.appendChild(langName)
    langCard.appendChild(langLevel)
    langCard.appendChild(proficiencyBar)

    languagesGrid.appendChild(langCard)
  })

  languagesSection.appendChild(languagesTitle)
  languagesSection.appendChild(languagesGrid)

  portfolioContainer.appendChild(title)
  portfolioContainer.appendChild(formationSection)
  portfolioContainer.appendChild(languagesSection)

  container.appendChild(portfolioContainer)

  return container
}
