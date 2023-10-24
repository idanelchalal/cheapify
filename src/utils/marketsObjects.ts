import {
    EnglishMarketLabel,
    HebrewMarketLabel,
    MultiSelectorOptionType,
} from '@/types'

export const marketsObject: {
    id: EnglishMarketLabel
    alt: string
    imgSrc: string
}[] = [
    {
        id: 'RAMI_LEVY',
        alt: 'rami-levy-logo',
        imgSrc: '/images/rami-levy-logo.png',
    },
    {
        id: 'HAZI_HINAM',
        alt: 'hazi-hinam-logo',
        imgSrc: '/images/hazi-hinam-logo.png',
    },
    {
        id: 'YOCHANANOF',
        alt: 'yochananof-logo',
        imgSrc: '/images/yochananof-logo.png',
    },
    {
        id: 'OSHER_HAD',
        alt: 'osher-had-logo',
        imgSrc: '/images/osher-had-logo.png',
    },
    {
        id: 'VICTORY',
        alt: 'victory-logo',
        imgSrc: '/images/victory-logo.png',
    },
]

export const selectorMarketsObject: MultiSelectorOptionType<
    HebrewMarketLabel,
    EnglishMarketLabel
>[] = [
    {
        label: 'חצי חינם',
        value: 'HAZI_HINAM',
    },
    {
        label: 'רמי לוי',
        value: 'RAMI_LEVY',
    },
    {
        label: 'אושר עד',
        value: 'OSHER_HAD',
    },

    { value: 'YOCHANANOF', label: 'יוחננוף' },
]
