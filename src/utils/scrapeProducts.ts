import {
    EnglishMarketLabel,
    EnglishToHebrewMarketMapper,
    HebrewMarketLabel,
    ProductDTO,
    SearchObject,
} from '@/types'
import axios from 'axios'

export default async function (searchObject: SearchObject) {
    const {
        data,
    }: {
        data: { market: EnglishMarketLabel; products: ProductDTO[] }[]
    } = await axios.post('/api/scrape', searchObject)

    const mapped = data.map((market) => ({
        market: EnglishToHebrewMarketMapper[market.market],
        products: market.products,
    }))

    return mapped
}
