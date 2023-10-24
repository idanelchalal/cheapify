const DashboardSearchResults = ({
    data,
    isLoading = false,
}: {
    data: null | unknown
    isLoading: boolean
}) => {
    console.log(data)
    return (
        <div
            id="search-results-container"
            className="bg-white flex-1 rounded-sm"
        >
            {!data && 'תוצאות החיפוש יופיעו כאן.'}
        </div>
    )
}

export default DashboardSearchResults
