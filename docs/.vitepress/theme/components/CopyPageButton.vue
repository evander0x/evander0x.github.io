<script setup>
import { computed, ref } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
import {
  createCopyPagePayload,
  extractCopyPageText
} from '../utils/copyPageContent.js'

const { frontmatter, title } = useData()
const route = useRoute()

const copied = ref(false)
let copiedTimer = null

const isDocPage = computed(
  () => frontmatter.value.layout !== 'home' && typeof window !== 'undefined'
)

const buttonLabel = computed(() => (copied.value ? 'Copied' : 'Copy Page'))

const collectPageText = () => {
  const container = document.querySelector('.vp-doc')
  if (!container) return ''

  const nodes = Array.from(
    container.querySelectorAll('p, li, h1, h2, h3, h4, h5, h6, blockquote')
  )

  return extractCopyPageText(nodes.map((node) => node.textContent))
}

const copyPage = async () => {
  const pageTitle =
    title.value || frontmatter.value.title || document.title || 'Untitled Page'
  const pageUrl = new URL(withBase(route.path), window.location.origin).href
  const body = collectPageText()
  const payload = createCopyPagePayload({
    title: pageTitle,
    url: pageUrl,
    body
  })

  await navigator.clipboard.writeText(payload)

  copied.value = true
  window.clearTimeout(copiedTimer)
  copiedTimer = window.setTimeout(() => {
    copied.value = false
  }, 1800)
}
</script>

<template>
  <div v-if="isDocPage" class="copy-page-toolbar">
    <button class="copy-page-button" type="button" @click="copyPage">
      <span class="copy-page-button__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="9" y="9" width="10" height="10" rx="2" />
          <path
            d="M15 9V7C15 5.89543 14.1046 5 13 5H7C5.89543 5 5 5.89543 5 7V13C5 14.1046 5.89543 15 7 15H9"
          />
        </svg>
      </span>
      {{ buttonLabel }}
    </button>
  </div>
</template>
