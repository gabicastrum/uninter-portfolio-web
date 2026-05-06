import { SkillBar } from './SkillBar.js'

const COLUMN_LABELS = {
  backend: 'Back-end',
  frontend: 'Front-end',
  ferramentas: 'Ferramentas & Práticas',
}

export function SkillsColumn(category, skills) {
  const column = document.createElement('div')
  column.className = 'skills-column'

  const title = document.createElement('h4')
  title.className = 'skills-column-title'
  title.textContent = COLUMN_LABELS[category]

  const skillsList = document.createElement('div')
  skillsList.className = 'skills-column-list'

  skills.forEach((skill) => {
    const skillBar = SkillBar(skill.name, skill.level)
    skillsList.appendChild(skillBar)
  })

  column.appendChild(title)
  column.appendChild(skillsList)

  return column
}
