'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel as CarouselProvider } from 'react-responsive-carousel'
import Image from 'next/image'
import { marketsObject as markets } from '@/utils/marketsObjects'

const Carousel = () => {
    return (
        <CarouselProvider
            autoPlay
            infiniteLoop
            width={'30rem'}
            showStatus={false}
            interval={5000}
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
        >
            {markets.map((market) => (
                <div
                    key={market.id}
                    className="w-40 md:w-80 mx-auto aspect-video relative"
                >
                    <img className="sr-only" />
                    <Image
                        priority={true}
                        sizes="(max-width: 768px) 160px"
                        fill
                        className="object-contain"
                        src={market.imgSrc}
                        alt={market.alt}
                    />
                </div>
            ))}
        </CarouselProvider>
    )
}

export default Carousel
