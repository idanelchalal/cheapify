'use client'

import { MappedProductsResults, SearchProductDTO } from '@/types'

import ProductCard from './ProductCard'

import TabsContainer from './libs/Tabs/TabsContainer'
import Tab from './libs/Tabs/Tab'

type MarketsExplorerProps = {
    data?: MappedProductsResults
}

const MarketsExplorer: React.FC<MarketsExplorerProps> = ({ data: content }) => {
    const noContentPlaceholder = (
        <>
            <h1 className="direction-rtl text-md text-neutral-400">
                על מנת לבחור מוצר עליך לחפש תחילה שם מוצר בסרגל למעלה...
            </h1>
        </>
    )

    return (
        <section id="markets-explorer">
            <TabsContainer>
                {content &&
                    content?.map((market) => (
                        <Tab title={market.market}>
                            {market.products.map((product) => (
                                <ProductCard
                                    key={product.title + product.price!}
                                    addToCartFn={() => {}}
                                    {...product}
                                />
                            ))}
                        </Tab>
                    ))}
                {content?.length === 0 && noContentPlaceholder}
            </TabsContainer>
        </section>
    )
}

export default MarketsExplorer
