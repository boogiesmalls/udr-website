import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import RichText from '@/components/RichText'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  // const navItems = footerData?.navItems || []
  const footerText = footerData?.footerText || ''
  const footerEmail = footerData?.footerEmail || ''

  return (
    <footer className="mt-auto">
      <div className="px-16 py-6 gap-8 flex flex-col md:flex-row md:justify-between bg-paper-200">
        <Link className="flex items-center justify-center" href="/">
          <Logo />
        </Link>

        <Link
          className="self-center hover:underline underline-offset-4"
          href={`mailto:${footerEmail}`}
        >
          {footerEmail}
        </Link>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          {/* <ThemeSelector /> */}
          <div className="max-w-[19.6875rem] self-center text-center md:text-left text-sm">
            {footerText && <RichText data={footerText} enableGutter={false} enableProse={false} />}
          </div>
        </div>
      </div>
    </footer>
  )
}
