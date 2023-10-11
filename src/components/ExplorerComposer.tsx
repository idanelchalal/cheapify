'use client'

import React from 'react'
import MarketsExplorer from './MarketsExplorer'
import FilterBar from './FilterBar'

import { useCallback, useState } from 'react'
import { MappedProductsResults, SearchObject } from '@/types'

import scrapeProducts from '@/utils/scrapeProducts'

const ExplorerComposer = () => {
    const [content, setContent] = useState<MappedProductsResults>([])

    // Execution of the seach fn (Should be passed to FilterBar)
    const execSearch = useCallback(async (searchObject: SearchObject) => {
        const data = await scrapeProducts(searchObject)
        setContent(data)
    }, [])

    return (
        <>
            <FilterBar execSearch={execSearch} />
            <MarketsExplorer data={content} />
        </>
    )
}

export default ExplorerComposer
