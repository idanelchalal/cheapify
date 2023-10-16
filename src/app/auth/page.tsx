import GoogleLoginButton from '@/components/GoogleLoginButton'

import getUserSession from '@/utils/getUserSession'
import { redirect } from 'next/navigation'

const SignInPage = async () => {
    const session = await getUserSession()

    // Session exists => Redirecting home
    if (session) redirect('/')

    return (
        <section className="flex flex-col p-4 m-4 gap-y-6 min-h-screen">
            <article className="w-full flex flex-col direction-rtl items-center my-4">
                <h1 className="md:!text-5xl text-2xl tracking-widest orange-yellow-gradient-text md:mb-4 mb-2 text-center">
                    הוזל את סל הקניות שלך היום!
                </h1>
                <p className="text-neutral-400 tracking-tight w-full md:w-1/2 text-sm text-center">
                    המחירים לא מפסיקים לעלות והמחייה חונקת.. <br />
                    Cheapify באה להנגיש לכם את הדרך הקלה והמהירה ביותר להשוות
                    בין סלי קניות שונים, ברשתות המובילות הקרובות לביתכם. הרכיבו
                    עכשיו את סל הקניות שלכם בעזרת Cheapify!
                    <br />
                </p>
                <h6 className="my-2 md:my-4 text-lg font-semibold text-neutral-500">
                    נשמע לכם מתאים? הרשמו עכשיו!
                </h6>
                <GoogleLoginButton />
            </article>
        </section>
    )
}

export default SignInPage
