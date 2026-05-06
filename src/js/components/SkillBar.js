export function SkillBar(name, level) {
  const normalizedLevel = Math.min(5, Math.max(1, level))

  const levelDescriptions = {
    1: 'Contato inicial: já teve exposição à tecnologia e compreende seus conceitos básicos, com aplicação guiada em contexto de aprendizado.',
    2: 'Aplicação assistida: consegue executar tarefas simples e contribuir em partes de funcionalidades com orientação ocasional.',
    3: 'Atuação prática: desenvolve funcionalidades completas com autonomia no escopo do dia a dia e participa ativamente de projetos.',
    4: 'Atuação sólida em ambiente real: resolve problemas mais complexos, aplica boas práticas e contribui de forma consistente em sistemas em produção.',
    5: 'Atuação de referência em contexto de equipe: conduz práticas técnicas dentro do time, apoia decisões e facilita colaboração em atividades de desenvolvimento.',
  }

  const skillItem = document.createElement('div')
  skillItem.className = 'skill-item'

  const skillContent = document.createElement('div')
  skillContent.className = 'skill-content'

  const skillName = document.createElement('span')
  skillName.className = 'skill-name'
  skillName.textContent = name

  const skillDots = document.createElement('div')
  skillDots.className = 'skill-dots'

  for (let i = 0; i < 5; i++) {
    const dot = document.createElement('div')
    dot.className = 'skill-dot'

    if (i < normalizedLevel) {
      dot.classList.add('filled')
    }

    if (i === normalizedLevel - 1) {
      dot.classList.add('tooltip-trigger')

      const tooltip = document.createElement('div')
      tooltip.className = 'tooltip-content'
      tooltip.textContent = levelDescriptions[normalizedLevel]
      dot.appendChild(tooltip)
    }

    skillDots.appendChild(dot)
  }

  skillContent.appendChild(skillName)
  skillContent.appendChild(skillDots)
  skillItem.appendChild(skillContent)

  return skillItem
}
