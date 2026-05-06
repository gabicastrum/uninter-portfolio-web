import { HOME_CONTENT } from '../models/homeContent.js'
import { SKILLS } from '../models/skills.js'
import { SkillsColumn } from '../components/SkillsColumn.js'

export function Home() {
  const container = document.createElement('div')
  container.className = 'portfolio-container'

  const hero = document.createElement('section')
  hero.className = 'hero'

  const heroContent = document.createElement('div')
  heroContent.className = 'hero-content'

  const greeting = document.createElement('h1')
  greeting.textContent = HOME_CONTENT.hero.greeting

  const name = document.createElement('h2')
  name.textContent = HOME_CONTENT.hero.name

  const description = document.createElement('p')
  description.textContent = HOME_CONTENT.hero.description

  heroContent.appendChild(greeting)
  heroContent.appendChild(name)
  heroContent.appendChild(description)

  const heroImage = document.createElement('div')
  heroImage.className = 'hero-image'

  const img = document.createElement('img')
  img.src = 'src/assets/images/img-perfil.png'
  img.alt = HOME_CONTENT.hero.imageAlt
  img.className = 'profile-photo'

  img.addEventListener('error', () => {
    const fallback = document.createElement('div')
    fallback.className = 'image-fallback'
    fallback.textContent = 'Sem imagem'
    img.replaceWith(fallback)
  })

  heroImage.appendChild(img)

  hero.appendChild(heroContent)
  hero.appendChild(heroImage)

  const aboutSkillsContainer = document.createElement('section')
  aboutSkillsContainer.className = 'about-skills-container'
  aboutSkillsContainer.id = 'sobre'

  const aboutSection = document.createElement('div')
  aboutSection.className = 'about-section'

  const aboutContent = document.createElement('div')
  aboutContent.className = 'about-content'

  const aboutTitle = document.createElement('h3')
  aboutTitle.textContent = HOME_CONTENT.about.title

  aboutContent.appendChild(aboutTitle)

  HOME_CONTENT.about.paragraphs.forEach((text) => {
    const paragraph = document.createElement('p')
    paragraph.textContent = text
    aboutContent.appendChild(paragraph)
  })

  aboutSection.appendChild(aboutContent)

  const skillsSection = document.createElement('div')
  skillsSection.className = 'skills-section'

  const skillsTitleWrapper = document.createElement('div')
  skillsTitleWrapper.className = 'skills-title-wrapper show'

  const skillsTitleHoverArea = document.createElement('div')
  skillsTitleHoverArea.className = 'skills-title-hover-area'

  const skillsTitle = document.createElement('h3')
  skillsTitle.textContent = HOME_CONTENT.skills.title

  const skillsHint = document.createElement('p')
  skillsHint.className = 'skills-hint'
  skillsHint.textContent =
    'Passe o mouse sobre os níveis para ver o significado de cada pontuação.'

  skillsTitleHoverArea.appendChild(skillsTitle)
  skillsTitleHoverArea.appendChild(skillsHint)

  skillsTitleWrapper.appendChild(skillsTitleHoverArea)

  setTimeout(() => {
    skillsTitleWrapper.classList.remove('show')
  }, 2000)

  const skillsGrid = document.createElement('div')
  skillsGrid.className = 'skills-grid'

  const CATEGORIES = ['backend', 'frontend', 'ferramentas']

  CATEGORIES.forEach((category) => {
    const categorySkills = SKILLS.filter((s) => s.category === category)
    const column = SkillsColumn(category, categorySkills)
    skillsGrid.appendChild(column)
  })

  skillsSection.appendChild(skillsTitleWrapper)
  skillsSection.appendChild(skillsGrid)

  aboutSkillsContainer.appendChild(aboutSection)
  aboutSkillsContainer.appendChild(skillsSection)

  container.appendChild(hero)
  container.appendChild(aboutSkillsContainer)

  return container
}
