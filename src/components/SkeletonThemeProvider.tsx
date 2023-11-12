import { SkeletonTheme } from 'react-loading-skeleton'

const SkeletonThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      {children}
    </SkeletonTheme>
  )
}

export default SkeletonThemeProvider
