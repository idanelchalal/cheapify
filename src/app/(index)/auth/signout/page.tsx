// Sign out is performed on the middleware file

import dynamic from 'next/dynamic'

// A redirect via client's windows object to refresh the entire window on sign out.
const SignOutDynamic = dynamic(
  () => import('@/components/SignOutRedirectComponent'),
  { ssr: false }
)

const SignOut = async () => {
  return (
    <main className="flex flex-col items-center justify-center mt-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        התנתקת בהצלחה
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        בקרוב תועבר לעמוד הראשי....
      </p>
      <SignOutDynamic />
    </main>
  )
}

export default SignOut
