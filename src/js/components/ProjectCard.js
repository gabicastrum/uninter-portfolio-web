const defaultImage = 'src/assets/images/logo-db-cinza.png'

export function ProjectCard(project) {
  const card = document.createElement('div')
  card.className = 'project-card'

  if (project.image) {
    const imgWrapper = document.createElement('div')
    const img = document.createElement('img')
    img.src = project.image
    img.alt = project.title
    img.className = 'project-image'

    img.addEventListener('error', () => {
      img.src = defaultImage
      img.alt = 'Imagem padrão'
    })

    imgWrapper.appendChild(img)
    card.appendChild(imgWrapper)
  }

  const content = document.createElement('div')
  content.className = 'project-content'

  const title = document.createElement('h3')
  title.className = 'project-title'
  title.textContent = project.title

  const tags = document.createElement('div')
  tags.className = 'project-tags'

  project.tags.forEach((tag) => {
    const tagSpan = document.createElement('span')
    tagSpan.className = 'project-tag'
    tagSpan.textContent = tag
    tags.appendChild(tagSpan)
  })

  const description = document.createElement('p')
  description.className = 'project-description'
  description.textContent = project.description

  const links = document.createElement('div')
  links.className = 'project-links'

  if (project.liveUrl) {
    const liveLink = document.createElement('a')
    liveLink.href = project.liveUrl
    liveLink.target = '_blank'
    liveLink.rel = 'noopener noreferrer'
    liveLink.className = 'project-button project-button-primary'
    liveLink.textContent = 'Ver Projeto'
    links.appendChild(liveLink)
  }

  if (project.githubUrl) {
    const githubLink = document.createElement('a')
    githubLink.href = project.githubUrl
    githubLink.target = '_blank'
    githubLink.rel = 'noopener noreferrer'
    githubLink.className = 'project-button project-button-secondary'

    const icon = document.createElement('img')
    icon.src = 'src/assets/icons/github.svg'
    icon.alt = 'GitHub'
    icon.className = 'button-icon'

    githubLink.appendChild(icon)
    githubLink.appendChild(document.createTextNode('GitHub'))

    links.appendChild(githubLink)
  }

  content.appendChild(title)
  content.appendChild(tags)
  content.appendChild(description)
  content.appendChild(links)

  card.appendChild(content)

  return card
}
