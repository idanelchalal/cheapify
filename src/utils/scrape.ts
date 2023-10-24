import {
    EnglishMarketLabel,
    MarketsLocatorType,
    MarketsMapper,
    ProductDTO,
    ProductsArrayDTO,
} from '@/types'
import * as cheerio from 'cheerio'
import puppeteer from 'puppeteer'

export const MarketsLocators: Partial<MarketsLocatorType> = {
    HAZI_HINAM: {
        imgs: 'div.product_streap-image > img',
        prices: 'span.main-price',
        titles: 'h4.h4ash3',
        brand: '#productStripInfo > ul',
    },
    RAMI_LEVY: {
        titles: '.online-product-name > div[role=heading]',
        imgs: '.product-img > img',
        prices: 'span.currency-wrap > span.sr-only > span:nth-child(1)',
        brand: 'div.position-relative.my-md-1.mx-2.m-text.online-product-name.line-height-1-1 > small',
    },
}

const getBrowser = async () =>
    await puppeteer.launch({
        headless: 'new',
    })

const getPageHTML = async (market: EnglishMarketLabel, product: string) => {
    const path = MarketsMapper[market]

    if (!path) return

    const marketUrl = path + product

    const browser = await getBrowser()
    const page = await browser.newPage()

    await page.goto(marketUrl, {
        waitUntil: 'networkidle0',
    })

    const html = await page.content()
    return html
}

const scrapeProducts = async (market: EnglishMarketLabel, html: string) => {
    const $ = cheerio.load(html)

    const titles = $(MarketsLocators[market]?.titles)
        .toArray()
        .map((title) => $(title).text())
    const prices = $(MarketsLocators[market]?.prices)
        .toArray()
        .map((price) => {
            if (market === 'HAZI_HINAM') {
                return $(price)
                    .text()
                    .replace('מחיר', '')
                    .replace('₪', '')
                    .trim()
            }

            return $(price).text().trim()
        })
    const imgs = $(MarketsLocators[market]?.imgs)
        .toArray()
        .map((img) => $(img).attr('src'))

    const brands = $(MarketsLocators[market]?.brand)
        .toArray()
        .map((brand) => $(brand).text())

    return { titles, prices, imgs, brands }
}

export const scrape = async (
    market: EnglishMarketLabel,
    product: string
): Promise<ProductDTO[]> => {
    const html = await getPageHTML(market, product)

    if (!html) return []

    const products = await scrapeProducts(market, html)

    const organized: ProductDTO[] = []
    for (let i = 0; i < products.titles.length && i < 15; i++) {
        const { titles, brands, imgs, prices }: ProductsArrayDTO = products

        organized.push({
            title: titles[i],
            brand: brands[i],
            img: imgs[i],
            price: prices[i],
        })
    }
    return organized
}
