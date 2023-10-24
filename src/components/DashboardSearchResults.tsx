const DashboardSearchResults = ({
    data,
    isLoading = false,
}: {
    data: null | unknown
    isLoading: boolean
}) => {
    return (
        <div
            id="search-results-container"
            className="bg-white flex-1 rounded-sm h-full w-full"
        >
            {!data && 'תוצאות החיפוש יופיעו כאן.'}
        </div>
    )
}

export default DashboardSearchResults
