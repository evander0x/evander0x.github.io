const normalizeLine = (value) => String(value || '').trim()

export const extractCopyPageText = (parts = []) =>
  parts
    .map(normalizeLine)
    .filter(Boolean)
    .join('\n\n')

export const createCopyPagePayload = ({ title = '', url = '', body = '' }) => {
  const normalizedTitle = normalizeLine(title)
  const normalizedUrl = normalizeLine(url)
  const normalizedBody = String(body || '').trim()

  return [
    normalizedTitle ? `# ${normalizedTitle}` : '',
    normalizedTitle ? '' : '',
    normalizedUrl ? `URL: ${normalizedUrl}` : '',
    normalizedUrl ? '' : '',
    normalizedBody
  ]
    .filter((section, index, sections) => {
      if (!section) {
        return (
          index > 0 &&
          index < sections.length - 1 &&
          sections[index - 1] &&
          sections[index + 1]
        )
      }
      return true
    })
    .join('\n')
}
