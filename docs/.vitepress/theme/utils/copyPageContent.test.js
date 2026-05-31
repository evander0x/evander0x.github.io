import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import {
  createCopyPagePayload,
  extractCopyPageText
} from './copyPageContent.js'

describe('copy page content', () => {
  it('creates copy payload with title, url, and body text', () => {
    assert.equal(
      createCopyPagePayload({
        title: '  博客模板  ',
        url: 'https://evander0x.github.io/zh/posts/template',
        body: '第一段\n\n第二段'
      }),
      [
        '# 博客模板',
        '',
        'URL: https://evander0x.github.io/zh/posts/template',
        '',
        '第一段',
        '',
        '第二段'
      ].join('\n')
    )
  })

  it('extracts readable text from page fragments', () => {
    assert.equal(
      extractCopyPageText(['  第一段  ', '', '\n第二段\n', '   ']),
      '第一段\n\n第二段'
    )
  })
})
