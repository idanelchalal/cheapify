'use client'

import { MappedProductsResults, ProductDTO, ProductTypeDTO } from '@/types'

import ProductCard from './ProductCard'

import TabsContainer from './libs/Tabs/TabsContainer'
import Tab from './libs/Tabs/Tab'
import { useSession } from 'next-auth/react'
import { useCallback } from 'react'
import { addProductToCart } from '@/utils/addProductToCart'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

type MarketsExplorerProps = {
    data?: MappedProductsResults
}

const MarketsExplorer: React.FC<MarketsExplorerProps> = ({ data: content }) => {
    const { data } = useSession()

    const addToCartFn = useCallback(
        async (product: ProductDTO) => {
            if (!data?.user.id) throw new Error('USER_SESSION_INVALID')
            const productToAdd = {
                additionalInfo: product.brand || 'No brand name',
                price: Number(product.price) || 0,
                productName: product.title || 'No product name',
                userId: data?.user.id,
            } satisfies ProductTypeDTO

            await axios.post('api/cart', productToAdd)
        },
        [data]
    )

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
                                <Tab title={market.market}>
                                    לא נמצאו מוצרים...
                                </Tab>
                            )

                        return (
                            <Tab title={market.market}>
                                {market.products.map((product) => (
                                    <ProductCard
                                        key={product.title + product.price!}
                                        addToCartFn={addToCartFn}
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
