'use client'
import { useState, useCallback, useMemo } from 'react'

import MultiSelector from './MultiSelector'

import { selectorMarketsObject } from '@/utils/marketsObjects'
import {
    EnglishMarketLabel,
    HebrewMarketLabel,
    MultiSelectorOptionType,
    searchObject,
} from '@/types'

import { z } from 'zod'

const searchSchema = z
    .string()
    .min(2, { message: 'שם מוצר חייב להכיל שני תווים לפחות' })
    .max(10, { message: 'ניתן לחפש מוצר עד עשרה תווים' })

type StateOfMarkets = Array<
    MultiSelectorOptionType<HebrewMarketLabel, EnglishMarketLabel>
>

type FilterBarProps = {
    execSearch?: (queryObject: searchObject) => void
}

const FilterBar: React.FC<FilterBarProps> = ({ execSearch }) => {
    const [markets, setMarkets] = useState<StateOfMarkets | null>()
    const modifyMarkets = useCallback(
        (markets: StateOfMarkets) => setMarkets(markets),
        [setMarkets]
    )

    const [search, setSearch] = useState<string>('')
    const updateSearchBar = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const {
                target: { value },
            } = e

            setSearch(value)
        },
        [setSearch]
    )
    const searchProduct = useCallback(() => {
        const { success } = searchSchema.safeParse(search)

        if (!success) {
            alert('שם המוצר חייב להכיל לפחות שתי אותיות')
            return
        }

        if (!markets || markets.length === 0) {
            alert('חובה לבחור רשת לפני חיפוש מוצר')
            return
        }

        const dto: searchObject = {
            product: search,
            markets: markets.map((market) => market.value),
        }

        execSearch && execSearch(dto)
    }, [markets, search, execSearch])

    const disabledBtn = useMemo(
        () => search.trim().length < 2 || !markets || markets.length === 0,
        [search, markets]
    )

    return (
        <section
            className="w-full px-4 py-2 rounded-md border border-neutral-100 flex md:flex-row-reverse flex-col gap-y-2 md:gap-0 md:gap-x-4 items-center justify-start"
            id="filters_bar"
        >
            <div className="filter">
                <span className="direction-rtl">רשת:</span>
                <MultiSelector
                    id="select-market-id"
                    modifyState={modifyMarkets}
                    options={selectorMarketsObject}
                />
            </div>
            <div className="filter">
                <span className="direction-rtl">הזן שם מוצר:</span>
                <input
                    value={search || ''}
                    type="text"
                    className="direction-rtl py-2 px-4 w-full min-w-[16rem] sm:w-fit text-neutral-400 text-sm text-right border border-neutral-400 rounded-md"
                    onChange={(e) => updateSearchBar(e)}
                />
            </div>
            <div className="filter flex-1">
                <button
                    onClick={() => searchProduct()}
                    disabled={disabledBtn}
                    className="button-style"
                >
                    חפש מוצר
                </button>
            </div>
        </section>
    )
}

export default FilterBar
