'use server'
import DashboardSearchContainer from '@/components/DashboardSearchContainer'

const ExplorerPage = async () => {
  return (
    <article id="explorer-container" className="flex-1 flex flex-col">
      <DashboardSearchContainer />
    </article>
  )
}

export default ExplorerPage
