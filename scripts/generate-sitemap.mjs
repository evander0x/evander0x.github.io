#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const docsDir = path.resolve(__dirname, '../docs')
const publicDir = path.resolve(__dirname, '../docs/public')
const siteUrl = (
  process.env.SITE_URL || 'https://evander0x.github.io'
).replace(/\/$/, '')

function scanMarkdownFiles(dir, basePath = '') {
  const files = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.name === '.vitepress' || entry.name === 'public') continue
    const fullPath = path.join(dir, entry.name)
    const relativePath = path.join(basePath, entry.name)

    if (entry.isDirectory()) {
      files.push(...scanMarkdownFiles(fullPath, relativePath))
      continue
    }

    if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(relativePath)
    }
  }

  return files
}

function toUrl(file) {
  const normalized = file.replace(/\\/g, '/')
  if (normalized === 'index.md') return `${siteUrl}/`
  if (normalized.endsWith('/index.md')) {
    const sectionPath = normalized.slice(0, -9)
    return sectionPath ? `${siteUrl}/${sectionPath}/` : `${siteUrl}/`
  }
  return `${siteUrl}/${normalized.replace(/\.md$/, '')}`
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true })
}

function writeSitemap(urls) {
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((url) => `  <url><loc>${url}</loc></url>`),
    '</urlset>'
  ].join('\n')

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), `${xml}\n`)
}

function writeRobots() {
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots)
}

ensureDir(publicDir)
const urls = scanMarkdownFiles(docsDir).map(toUrl)
writeSitemap(urls)
writeRobots()
console.log(`Generated sitemap for ${urls.length} pages.`)
