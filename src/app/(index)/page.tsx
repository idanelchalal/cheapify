import Carousel from '@/components/Carousel'
import Link from 'next/link'

export default function Home() {
    return (
        <section className="flex flex-col p-4 m-4 gap-y-6">
            <div className="w-full flex flex-col justify-center md:flex-row md:justify-around md:items-center">
                <div
                    id="carousel-wrapper"
                    className="flex items-center justify-center"
                >
                    <Carousel />
                </div>

                <div className="text-right px-2 md:px-12">
                    <h1 className="direction-rtl leading-10 bg-gradient-to-b tracking-wider text-transparent from-yellow-300 to-orange-500 bg-clip-text font-semibold text-xl md:text-2xl">
                        למה Cheapify ?
                    </h1>
                    <p className="text-neutral-400 text-sm tracking-wider direction-rtl">
                        המחירים לא מפסיקים לעלות והמחייה חונקת.. <br />
                        Cheapify באה להנגיש לכם את הדרך הקלה והמהירה ביותר
                        להשוות בין סלי קניות שונים, ברשתות המובילות הקרובות
                        לביתכם. הרכיבו עכשיו את סל הקניות שלכם בעזרת Cheapify!
                    </p>
                </div>
            </div>
            <section className="text-center items-center flex flex-col gap-y-6">
                <h1 className="direction-rtl leading-10 bg-gradient-to-b tracking-wider text-transparent from-yellow-300 to-orange-500 bg-clip-text font-semibold text-xl md:text-4xl">
                    אז למה אתה מחכה?
                </h1>
                <Link
                    href={'/explorer'}
                    className="direction-rtl button-style w-fit shadow-md"
                >
                    הרכב סל קניות עכשיו!{' '}
                </Link>
            </section>
        </section>
    )
}
