'use client'
import { useMutation } from '@tanstack/react-query'
import { useMemo, useState } from 'react'

import { motion } from 'framer-motion'

import DashboardFilterBar from './DashboardFilterBar'
import DashboardSearchResults from './DashboardSearchResults'
import Image from 'next/image'

import { marketsObject } from '@/utils/marketsObjects'
import { EnglishMarketLabel, MappedProductsResults, ProductDTO } from '@/types'
import { cn } from '@/lib/utils'
import { Oval } from 'react-loader-spinner'

const DashboardSearchContainer = () => {
    const {
        data: rawData,
        isPending,
        isSuccess,
        isIdle,
        mutate,
    } = useMutation({
        mutationKey: ['getProducts'],
    })

    const [marketsBar, toggleMarketsBar] = useState<number>(0)
    const [tab, setTab] = useState<EnglishMarketLabel | null>()
    const selectTab = (market: EnglishMarketLabel | null) => {
        if (tab !== market) setTab(market)
    }

    const data = useMemo(() => {
        if (!rawData) return
        const RawData = rawData as MappedProductsResults
        const dto = new Map()

        for (const value of Object.values(RawData)) dto.set(value.market, value)

        if (dto.size === 0) {
            toggleMarketsBar(0)
            return null
        }

        toggleMarketsBar(1)
        return dto
    }, [rawData, toggleMarketsBar])

    return (
        <div
            className="my-6 direction-rtl w-full h-full flex flex-col p-2 md:p-3"
            id="Dashboard-search-container"
        >
            <h1 className="scroll-m-20 mr-1 mb-3 text-3xl font-extrabold tracking-tight md:text-4xl text-neutral-700">
                הרכב סל קניות
            </h1>
            <DashboardFilterBar isPending={isPending} searchFn={mutate} />
            <hr id="seperator" className="my-2 border-0 w-full" />
            <motion.div
                initial={{ opacity: 0, scale: marketsBar }}
                animate={{ opacity: 1, scale: marketsBar }}
                transition={{ duration: 0.3 }}
            >
                <h3 className="mt-8 mr-1 text-neutral-700 mb-3 scroll-m-20 text-2xl font-semibold tracking-tight">
                    מוצרי הרשת
                </h3>

                <div className="w-full h-auto bg-white flex overflow-x-scroll gap-x-4 p-3 rounded-sm">
                    {!isPending &&
                        marketsObject.map((market) => {
                            if (data?.has(market.id))
                                return (
                                    <div
                                        onClick={() => selectTab(market.id)}
                                        className={cn(
                                            'relative w-24 h-24 hover:scale-105 transition cursor-pointer',
                                            {
                                                'bg-gray-100 rounded-md':
                                                    market.id === tab,
                                            }
                                        )}
                                        key={market.id + 'logo'}
                                    >
                                        <Image
                                            src={market.imgSrc}
                                            fill
                                            className="object-contain p-3"
                                            alt={market.alt}
                                            sizes="(max-width: 768px) 128px"
                                        />
                                    </div>
                                )
                        })}
                    {isPending && (
                        <div className="flex items-center justify-center w-full gap-x-2 my-1">
                            <h1 className="text-neutral-700 text-xl font-semibold">
                                טוען רשתות נבחרות
                            </h1>
                            <Oval
                                color="rgb(250 204 21)"
                                wrapperClass="w-12 h-12"
                                width={'auto'}
                                height={'auto'}
                                ariaLabel="oval-loading"
                                secondaryColor="rgb(254 240 138)"
                                strokeWidth={2}
                                strokeWidthSecondary={2}
                            />
                        </div>
                    )}
                </div>
            </motion.div>

            <div className="my-6 flex-1" id="results-locator">
                <DashboardSearchResults data={data} isLoading={isPending} />
            </div>
        </div>
    )
}

export default DashboardSearchContainer
