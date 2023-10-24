'use client'
import { EnglishMarketLabel, ProductDTO } from '@/types'
import { useMemo } from 'react'
import ProductCard from './ProductCard'
import { MutatingDots } from 'react-loader-spinner'

const DashboardSearchResults = ({
    data,
    isLoading = false,
    selectedTab,
}: {
    data: null | Map<
        EnglishMarketLabel,
        { market: EnglishMarketLabel; products: ProductDTO[] }
    >
    isLoading: boolean
    selectedTab: EnglishMarketLabel | undefined | null
}) => {
    const productsToExpose = useMemo(() => {
        if (data && selectedTab) {
            const products = data?.get(selectedTab)?.products
            return products
        }
        return null
    }, [data, selectedTab])

    const productsListComponent = useMemo(() => {
        return (
            (productsToExpose &&
                productsToExpose.map((prod) => (
                    <ProductCard
                        market={selectedTab as EnglishMarketLabel}
                        brand={prod.brand}
                        title={prod.title}
                        img={prod.img}
                        key={prod.title! + +prod.brand!}
                        price={prod.price}
                    />
                ))) ||
            null
        )
    }, [productsToExpose])

    return (
        <div
            id="search-results-container"
            className="bg-white flex-1 rounded-sm h-full w-full"
        >
            {isLoading && (
                <>
                    <div
                        id="loader"
                        className="w-full flex justify-center items-center"
                    >
                        <MutatingDots
                            height="300"
                            width="300"
                            color="rgb(255 138 76)"
                            secondaryColor="rgb(250 202 21)"
                            radius="13"
                            ariaLabel="mutating-dots-loading"
                            wrapperClass=""
                        />
                    </div>
                </>
            )}
            {!isLoading && productsListComponent}
        </div>
    )
}

export default DashboardSearchResults
