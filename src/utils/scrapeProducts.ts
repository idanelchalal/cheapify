import { MappedProductsResults, SearchObject } from '@/types'
import axios from 'axios'

export default async function (searchObject: SearchObject) {
    const {
        data,
    }: {
        data: MappedProductsResults
    } = await axios.post('/api/scrape', searchObject)

    const mapped = data.map((market) => ({
        market: market.market,
        products: market.products,
    }))

    return mapped
}
