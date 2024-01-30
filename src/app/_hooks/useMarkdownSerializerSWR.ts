import { serialize } from 'next-mdx-remote/serialize'
import useSWR from 'swr'

export const useMarkdownSerializerSWR = (markdown: string) => {
  return useSWR('markdown', async () => {
    return await serialize(markdown, {
      mdxOptions: {
        development: true,
      },
    })
  })
}
