'use client'

import {
    EnglishMarketLabel,
    EnglishToHebrewMarketMapper,
    HebrewMarketLabel,
    HebrewToEnglishMarketMapper,
    MappedProductsResults,
    ProductDTO,
    ProductTypeDTO,
} from '@/types'

import ProductCard from './ProductCard'

import TabsContainer from './libs/Tabs/TabsContainer'
import Tab from './libs/Tabs/Tab'

import { useSession } from 'next-auth/react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'

type MarketsExplorerProps = {
    data?: MappedProductsResults
}

const MarketsExplorer: React.FC<MarketsExplorerProps> = ({ data: content }) => {
    const { data } = useSession()

    const noContentPlaceholder = (
        <>
            <h1 className="direction-rtl text-md text-neutral-400">
                על מנת לבחור מוצר עליך לחפש תחילה שם מוצר בסרגל למעלה...
            </h1>
        </>
    )

    return (
        <section id="markets-explorer">
            <ToastContainer />
            <TabsContainer>
                {content &&
                    content?.map((market) => {
                        if (market.products.length === 0)
                            return (
                                <Tab
                                    title={
                                        EnglishToHebrewMarketMapper[
                                            market.market as EnglishMarketLabel
                                        ]
                                    }
                                >
                                    לא נמצאו מוצרים...
                                </Tab>
                            )

                        return (
                            <Tab
                                title={
                                    EnglishToHebrewMarketMapper[
                                        market.market as EnglishMarketLabel
                                    ]
                                }
                            >
                                {market.products.map((product) => (
                                    <ProductCard
                                        market={market.market}
                                        key={product.title + product.price!}
                                        {...product}
                                    />
                                ))}
                            </Tab>
                        )
                    })}
                {content?.length === 0 && noContentPlaceholder}
            </TabsContainer>
        </section>
    )
}

export default MarketsExplorer
