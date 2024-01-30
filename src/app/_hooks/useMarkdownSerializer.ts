import { serialize } from 'next-mdx-remote/serialize'
import { useQuery } from 'react-query'

export const useMarkdownSerializer = (markdown: string) => {
  return useQuery({
    queryKey: ['markdown'],
    queryFn: async () => {
      return await serialize(markdown, {
        mdxOptions: {
          development: true,
        },
      })
    },
  })
}
