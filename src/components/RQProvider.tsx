'use client'

import { queryClient } from '@/lib/RQ'
import { QueryClientProvider } from '@tanstack/react-query'

const RQProvider = ({ children }: { children?: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default RQProvider
