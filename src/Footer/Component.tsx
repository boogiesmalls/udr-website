import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { MobileLogo } from '@/components/Logo/MobileLogo'
import RichText from '@/components/RichText'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  // const navItems = footerData?.navItems || []
  const footerText = footerData?.footerText || ''
  const footerEmail = footerData?.footerEmail || ''

  return (
    <footer className="mt-auto font-acid">
      <div className="px-4 md:px-16 py-6 gap-6 md:gap-8 flex flex-col justify-start md:flex-row md:justify-between bg-paper-200 items-start md:items-center">
        <Link className="flex items-center justify-start lg:justify-center" href="/">
          <Logo className="hidden lg:block" loading="eager" priority="high" />
          <MobileLogo className="lg:hidden" loading="eager" priority="high" />
        </Link>

        <Link className="hover:underline underline-offset-4" href={`mailto:${footerEmail}`}>
          {footerEmail}
        </Link>

        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* <ThemeSelector /> */}
          <div className="max-w-[19.6875rem] text-left text-sm">
            {footerText && <RichText data={footerText} enableGutter={false} enableProse={false} />}
          </div>
        </div>
      </div>
    </footer>
  )
}
