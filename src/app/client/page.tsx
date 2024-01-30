'use client'

import { MDXRemote } from 'next-mdx-remote'
import { markdownText } from '../_storage/markdown'
import { useMarkdownSerializerSWR } from '../_hooks/useMarkdownSerializerSWR'
import { MDXComponents } from 'mdx/types'

const components = {
  h2: ({ children }) => <h2 className="text-red-600">{children}</h2>,
} satisfies Readonly<MDXComponents>

export default function ClientComponent() {
  const { data, isLoading } = useMarkdownSerializerSWR(markdownText)

  return (
    <div className="m-10">
      <article className="prose">
        {!isLoading && data !== undefined && (
          <MDXRemote {...data} components={components} />
        )}
      </article>
    </div>
  )
}
