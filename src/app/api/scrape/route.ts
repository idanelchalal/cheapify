import {
    ProductDTO,
    SearchObject,
    SearchObjectSchema,
    SearchProductDTO,
} from '@/types'
import { scrape } from '@/utils/scrape'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    const searchObject: SearchObject = await req.json()

    const isObjectValid = SearchObjectSchema.safeParse(searchObject)
    if (!isObjectValid.success)
        return NextResponse.json({
            error: isObjectValid.error,
            data: '',
        })

    // If object is vaid start scraping
    const DTO: SearchProductDTO = []

    await Promise.all(
        searchObject.markets.map(async (market) => {
            const products = (await scrape(
                market,
                searchObject.product
            )) as ProductDTO[]
            DTO.push({
                products,
                market,
            })
        })
    )

    return NextResponse.json(DTO)
}
