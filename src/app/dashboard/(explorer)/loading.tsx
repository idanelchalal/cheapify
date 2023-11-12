import SkeletonThemeProvider from '@/components/SkeletonThemeProvider'
import Skeleton from 'react-loading-skeleton'

export default function Loading() {
  return (
    <SkeletonThemeProvider>
      <Skeleton className="w-full" />
    </SkeletonThemeProvider>
  )
}
