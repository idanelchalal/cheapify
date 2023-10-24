'use client'
import Image from 'next/image'

import NotFoundIMG from '../../public/images/not-found.png'

import IconPopover from './IconPopover'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

import { EnglishMarketLabel, ProductTypeDTO } from '@/types'

import { useSession } from 'next-auth/react'
import { useEffect, useMemo, useRef } from 'react'

import { addProductToCart } from '@/actions'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

type ProductCardProps = {
    img?: string | undefined
    title?: string | undefined
    price?: string | undefined
    brand?: string | undefined
    market: EnglishMarketLabel
}

const ProductCard: React.FC<ProductCardProps> = ({
    img,
    price,
    title,
    brand,
    market,
}) => {
    const { pending } = useFormStatus()
    const { data } = useSession()
    const formData = useRef<HTMLFormElement>(null)
    const ProductDTO = {
        additionalInfo: brand as string,
        price: Number(price as string),
        productName: title as string,
        userId: data?.user.id as string,
        market,
    } satisfies ProductTypeDTO

    const hiddenInput = useMemo(() => {
        const input = document.createElement('input')
        input.classList.add('hidden')
        input.type = 'text'
        input.name = 'product'
        input.value = JSON.stringify(ProductDTO)

        return input
    }, [ProductDTO])

    useEffect(() => {
        if (formData.current !== null) {
            const form = formData.current
            form.appendChild(hiddenInput)
        }
    }, [])

    return (
        <article
            id={'prod-card_' + title}
            aria-label={title}
            className="hover:bg-neutral-100 even:bg-neutral-50 transition w-full p-4 flex flex-col gap-y-1 md:gap-0 md:flex-row md:gap-x-4"
        >
            <div className="relative w-24 md:w-36 aspect-square">
                <Image
                    className="rounded-md object-contain"
                    fill
                    src={img || NotFoundIMG}
                    sizes="(max-width: 768px) 144px, 96px"
                    alt={title || 'No description'}
                />
            </div>
            <div className="flex-1 flex flex-col text-neutral-500 font-semibold justify-between">
                <div>
                    <h2 className="text-lg md:text-xl">{title}</h2>
                    <span className="text-neutral-400 text-base md:text-xs font-thin">
                        {brand}
                    </span>
                </div>

                <div className="flex-1 py-4 md:text-base text-lg">
                    <span>מחיר: {price}₪</span>
                </div>
            </div>
            <aside
                id={'controllers_' + title}
                className=" flex-1 flex items-start justify-end"
            >
                <form action={addProductToCart} ref={formData}>
                    <button
                        className="disabled:hover:cursor-not-allowed"
                        disabled={pending}
                        type="submit"
                        aria-disabled={pending}
                    >
                        <IconPopover popoverText="הוסף מוצר לעגלה">
                            <ShoppingCartIcon className="cursor-pointer text-orange-300 hover:text-orange-400 transition w-8 h-8" />
                        </IconPopover>
                    </button>
                </form>
            </aside>
        </article>
    )
}

export default ProductCard
