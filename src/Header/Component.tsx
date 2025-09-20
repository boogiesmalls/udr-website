import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header } from '@/payload-types'
import { Logo } from '@/components/Logo/Logo'
import { MobileLogo } from '@/components/Logo/MobileLogo'
import { HeaderNav } from './Nav'
import Link from 'next/link'

export async function Header() {
  const headerData: Header = await getCachedGlobal('header', 1)()

  return (
    <header className="relative z-20 border-b-[1px] border-b-[#BEBEBE] font-acid">
      <div className="px-4 lg:px-16 h-[5.125rem] flex justify-between items-center">
        <Link href="https://www.urbandataresponse.org">
          <Logo className="hidden lg:block" loading="eager" priority="high" />
          <MobileLogo className="lg:hidden" loading="eager" priority="high" />
        </Link>
        <HeaderNav data={headerData} />
      </div>
    </header>
  )
}
