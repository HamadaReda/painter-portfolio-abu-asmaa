import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { renderSeoHead } from '../../seo/head'
import { getSeoMetadata } from '../../seo/metadata'

export function usePageMetadata(title: string, description: string) {
  const { pathname } = useLocation()

  useEffect(() => {
    const metadata = { ...getSeoMetadata(pathname), description, title }
    const range = document.createRange()
    const fragment = range.createContextualFragment(renderSeoHead(metadata))

    document.head.querySelectorAll('[data-seo="true"]').forEach((element) => {
      element.remove()
    })
    document.head.append(fragment)
  }, [description, pathname, title])
}
