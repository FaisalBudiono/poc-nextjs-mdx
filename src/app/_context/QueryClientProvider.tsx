'use client'

import { ReactNode, useState } from 'react'
import {
  QueryClient,
  QueryClientProvider as TanQueryClientProvider,
} from 'react-query'

type Props = {
  children: ReactNode
}

export const QueryClientProvider = ({ children }: Props) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      }),
  )

  return (
    <TanQueryClientProvider client={queryClient}>
      {children}
    </TanQueryClientProvider>
  )
}
