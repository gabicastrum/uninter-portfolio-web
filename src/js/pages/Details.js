import { detailsData } from '../models/detailsData.js'

export function Details() {
  const container = document.createElement('div')
  container.className = 'portfolio-container'

  const detailsContainer = document.createElement('div')
  detailsContainer.className = 'details-container'

  const detailsHeader = document.createElement('div')
  detailsHeader.className = 'details-header'

  const title = document.createElement('h1')
  title.textContent = detailsData.title

  const downloadButton = document.createElement('a')
  downloadButton.href = detailsData.pdf
  downloadButton.download = detailsData.fileName
  downloadButton.className = 'download-button'

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('class', 'download-icon')
  svg.setAttribute('width', '20')
  svg.setAttribute('height', '20')
  svg.setAttribute('viewBox', '0 0 24 24')
  svg.setAttribute('fill', 'none')
  svg.setAttribute('stroke', 'currentColor')
  svg.setAttribute('stroke-width', '2')

  const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path1.setAttribute('d', 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4')

  const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline')
  polyline.setAttribute('points', '7 10 12 15 17 10')

  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
  line.setAttribute('x1', '12')
  line.setAttribute('y1', '15')
  line.setAttribute('x2', '12')
  line.setAttribute('y2', '3')

  svg.appendChild(path1)
  svg.appendChild(polyline)
  svg.appendChild(line)

  downloadButton.appendChild(svg)
  downloadButton.appendChild(document.createTextNode('Baixar Currículo'))

  detailsHeader.appendChild(title)
  detailsHeader.appendChild(downloadButton)

  const pdfViewer = document.createElement('iframe')
  pdfViewer.src = detailsData.pdf
  pdfViewer.className = 'details-preview'
  pdfViewer.title = 'Currículo Gabriela de Castro Laurindo'

  detailsContainer.appendChild(detailsHeader)
  detailsContainer.appendChild(pdfViewer)

  container.appendChild(detailsContainer)

  return container
}
