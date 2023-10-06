import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div
            id="logo-wrapper"
            className="gap-x-1 flex items-center tracking-wider"
        >
            <Image
                src="/images/shopping-cart.png"
                alt="cheapify-logo"
                priority
                width={64}
                height={64}
            />
            <div id="typo-wrapper" className="p-0 m-0 flex flex-col">
                <h3 className="bg-gradient-to-r text-transparent w-auto text-xl md:text-2xl font-semibold from-yellow-300 to-orange-500 bg-clip-text">
                    Cheapify
                </h3>
                <span className="text-neutral-400 tracking-tighter text-xs cursor-default">
                    Compare and find the best price for you!
                </span>
            </div>
        </div>
    )
}

export default Logo
