'use client'

import { Input } from './shadcn/ui/input'
import { Button } from './shadcn/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from './shadcn/ui/popover'
import { ScrollArea } from './shadcn/ui/scroll-area'

import {
    EnglishMarketLabel,
    HebrewMarketLabel,
    HebrewToEnglishMarketMapper,
    SearchObject,
} from '@/types'

import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { Oval } from 'react-loader-spinner'

const hebrewMarketLabels = Object.keys(HebrewToEnglishMarketMapper)
const DashboardFilterBar = ({
    searchFn,
    isPending,
}: {
    searchFn: Function
    isPending: boolean
}) => {
    const [markets, setMarkets] = useState<
        Partial<Record<HebrewMarketLabel, boolean>>
    >({})
    const [isMarketSelected, setIsMarketSelected] = useState<boolean>(false)

    const handleCheckboxChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const newMutation: Record<string, boolean> = { ...markets }
            newMutation[e.target.name] = e.target.checked
            for (const [key, value] of Object.entries(newMutation)) {
                if (!value) delete newMutation[key]
            }

            setMarkets(newMutation)

            const marketIsSelected = Object.keys(newMutation).length > 0

            if (marketIsSelected && !isMarketSelected) {
                setIsMarketSelected(true)
                return
            }

            if (!marketIsSelected) setIsMarketSelected(false)
        },
        [setMarkets, setIsMarketSelected, markets]
    )

    const [productQry, setProductQry] = useState('')

    const handleSearch = useCallback(() => {
        if (!productQry || productQry === '') return

        const filteredMarkets: EnglishMarketLabel[] = []

        for (const [market, checked] of Object.entries(markets)) {
            if (checked)
                filteredMarkets.push(
                    HebrewToEnglishMarketMapper[market as HebrewMarketLabel]
                )
        }

        if (filteredMarkets.length === 0) return

        const searchDTO: SearchObject = {
            markets: filteredMarkets,
            product: productQry,
        }

        searchFn(searchDTO)
    }, [markets, productQry, searchFn])

    return (
        <section id="filter-bar" className="w-full px-4 py-2">
            <div
                className="w-full text-sm direction-rtl text-zinc-700 
                    flex flex-col gap-y-3 md:gap-0 md:flex-row justify-between
                    bg-gray-50 rounded-md p-3 border"
                id="form-wrapper"
            >
                <div
                    className="flex flex-col gap-y-3 md:gap-0 md:flex-row md:gap-x-6"
                    id="controllers-wrapper"
                >
                    <label
                        className="flex items-center gap-x-1"
                        htmlFor="product-name"
                    >
                        <span>שם המוצר</span>
                        <Input
                            value={productQry}
                            onChange={(e) => setProductQry(e.target.value)}
                            name="product"
                            className="md:w-min"
                            placeholder="הזן שם של מוצר"
                        />
                    </label>{' '}
                    <Popover modal>
                        <PopoverTrigger className="bg-primary rounded-md px-4 py-2 text-white hover:bg-primary/80 active:bg-yellow-400 transition">
                            בחר רשתות
                        </PopoverTrigger>
                        <PopoverContent>
                            <ScrollArea className="rounded-md md:w-auto flex-1">
                                {hebrewMarketLabels.map((market) => (
                                    <div
                                        key={market}
                                        className="hover:bg-zinc-50 gap-x-1.5 leading-none px-2 direction-rtl text-center flex items-center w-full group"
                                    >
                                        <input
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            aria-label={market}
                                            name={market}
                                            checked={
                                                markets[
                                                    market as HebrewMarketLabel
                                                ] || false
                                            }
                                        />

                                        <label
                                            htmlFor={market}
                                            className="border-b last:border-b-0 group-hover text-zinc-800 group-hover:text-zinc-500 transition text-center py-2 cursor-pointer text-sm"
                                        >
                                            {market}
                                        </label>
                                    </div>
                                ))}
                            </ScrollArea>
                        </PopoverContent>
                    </Popover>
                </div>

                <Button
                    onClick={handleSearch}
                    className="transition flex gap-x-1 active:bg-yellow-400 hover:bg-primary/80 disabled:bg-neutral-400 disabled:cursor-not-allowed"
                    disabled={
                        !isMarketSelected || isPending || productQry.length <= 1
                    }
                >
                    מחפש
                    <Oval
                        color="rgb(250 204 21)"
                        wrapperClass="w-5 h-5"
                        width={'auto'}
                        height={'auto'}
                        visible={isPending}
                        ariaLabel="oval-loading"
                        secondaryColor="rgb(254 240 138)"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                    />
                </Button>
            </div>
        </section>
    )
}

export default DashboardFilterBar
