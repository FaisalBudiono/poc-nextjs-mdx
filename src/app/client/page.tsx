'use client'

import { MDXRemote } from 'next-mdx-remote'
import { markdownText } from '../_storage/markdown'
import { useMarkdownSerializerSWR } from '../_hooks/useMarkdownSerializerSWR'

export default function ClientComponent() {
  const { data, isLoading } = useMarkdownSerializerSWR(markdownText)

  return (
    <div>
      <h1>HUAHAHAHAHAHA</h1>

      {!isLoading && data !== undefined && <MDXRemote {...data} />}
    </div>
  )
}
