'use client'
import MarketsExplorer from './MarketsExplorer'
import FilterBar from './FilterBar'

import { useCallback, useState } from 'react'
import { MappedProductsResults, SearchObject } from '@/types'

import scrapeProducts from '@/utils/scrapeProducts'

const ExplorerComposer = () => {
    const [content, setContent] = useState<MappedProductsResults>([])
    const [isLoading, setIsLoading] = useState(false)

    // Execution of the seach fn (Should be passed to FilterBar)
    const execSearch = useCallback(
        async (searchObject: SearchObject) => {
            setIsLoading(true)
            const data = await scrapeProducts(searchObject)
            setContent(data)
            setIsLoading(false)
        },
        [setIsLoading, setContent]
    )

    return (
        <>
            <FilterBar isSearching={isLoading} execSearch={execSearch} />
            <MarketsExplorer data={content} />
        </>
    )
}

export default ExplorerComposer
