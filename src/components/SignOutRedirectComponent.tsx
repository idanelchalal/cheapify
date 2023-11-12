'use client'

import { setTimeout } from 'timers'

export const SignOutRedirectComponent = async () => {
  await setTimeout(() => {
    window.location.href = '/'
  }, 3000)
  return <></>
}
export default SignOutRedirectComponent
