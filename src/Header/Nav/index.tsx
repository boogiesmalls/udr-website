'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex gap-3 items-center">
      {navItems.map(({ link, subNavItems }, i) => {
        return (
          <div className="flex flex-row" key={i}>
            <CMSLink
              {...link}
              appearance="link"
              className="decoration-pumpkin decoration-[.1875rem] underline-offset-8"
            />
            {subNavItems && <img src="/images/menu-chevron.svg" alt="Submenu icon" />}
          </div>
        )
      })}
    </nav>
  )
}
