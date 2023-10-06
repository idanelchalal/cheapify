import Image from 'next/image'

import NotFoundIMG from '../../public/images/not-found.png'
import IconPopover from './IconPopover'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

type ProductCardProps = {
    addToCartFn?: () => void
    img?: string | undefined
    title?: string | undefined
    price?: string | undefined
    brand?: string | undefined
}

const ProductCard: React.FC<ProductCardProps> = ({
    addToCartFn,
    img,
    price,
    title,
    brand,
}) => {
    return (
        <article
            id={'prod-card_' + title}
            aria-label={title}
            className="hover:bg-neutral-100 even:bg-neutral-50 transition w-full p-3 flex flex-row gap-x-4"
        >
            <div className="relative w-24 md:w-36 aspect-square">
                <Image
                    className="rounded-md"
                    fill
                    src={img || NotFoundIMG}
                    alt={title || 'No description'}
                />
            </div>
            <div className="flex-1 flex flex-col text-neutral-500 font-semibold justify-between">
                <div>
                    <h1 className="text-lg md:text-xl">{title}</h1>
                    <span className="text-neutral-400 text-base md:text-xs font-thin">
                        {brand}
                    </span>
                </div>

                <div className="flex-1 py-4 md:text-base text-lg">
                    <span>מחיר: {price}</span>
                </div>
            </div>
            <aside
                id={'controllers_' + title}
                className=" flex-1 flex items-start justify-end"
            >
                <IconPopover popoverText="הוסף מוצר לעגלה">
                    <ShoppingCartIcon className="cursor-pointer text-orange-300 hover:text-orange-400 transition w-8 h-8" />
                </IconPopover>
            </aside>
        </article>
    )
}

export default ProductCard
