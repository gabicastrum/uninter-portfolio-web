export function Footer() {
  const footer = document.createElement('footer')
  footer.className = 'footer'

  const paragraph = document.createElement('p')

  paragraph.appendChild(document.createTextNode('© 2026 Gabriela de Castro Laurindo — v1.0 • '))

  const link = document.createElement('a')
  link.href = 'https://github.com/gabicastrum/uninter-portfolio-web'
  link.target = '_blank'
  link.rel = 'noreferrer'
  link.textContent = 'Ver código no GitHub'

  paragraph.appendChild(link)

  footer.appendChild(paragraph)

  return footer
}
