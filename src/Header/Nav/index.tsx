'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import Image from 'next/image'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const [submenuOpen, setSubMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navItems = data?.navItems || []
  const pathname = usePathname()

  useEffect(() => {
    setMobileMenuOpen(false)
    setSubMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  const toggleSubMenu = () => {
    setSubMenuOpen((prev) => !prev)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  }

  return (
    <nav className="flex items-center h-full">
      <Image
        src={mobileMenuOpen ? '/images/close-icon.svg' : '/images/hamburger-icon.svg'}
        width={24}
        height={14}
        alt="Mobile Nav Button"
        className={`w-6 lg:hidden cursor-pointer`}
        onClick={toggleMobileMenu}
      />
      <div
        className={`bg-paper-100 fixed top-[83px] inset-0 lg:static lg:bg-none flex flex-col lg:flex-row gap-8 justify-center items-center h-[calc(100%-83px)] lg:h-full ${mobileMenuOpen ? '' : 'hidden lg:flex'}`}
      >
        {navItems.map((navItem, index) => {
          const type = navItem.type
          return (
            <div className="lg:h-full flex items-center" key={index}>
              {type === 'singleLink' && (
                <CMSLink
                  {...navItem.link}
                  appearance="link"
                  className="decoration-[.0625rem] underline-offset-8 text-[2rem] lg:text-base h-full items-center"
                />
              )}
              {type === 'dropDownMenu' && (
                <button
                  onClick={toggleSubMenu}
                  className="flex flex-col lg:flex-row gap-6 lg:gap-[.625rem] cursor-pointer items-center h-full"
                  role="button"
                >
                  <p
                    className={`text-[2rem] lg:text-base ${submenuOpen ? 'lg:underline' : ''} block lg:hover:underline decoration-[.0625rem] underline-offset-8`}
                  >
                    {navItem.dropDownTitle}
                  </p>
                  <img
                    src="images/menu-chevron.svg"
                    alt="Menu Chevron"
                    className={`${submenuOpen ? 'rotate-180' : ''} w-[.8125rem] hidden lg:block`}
                    aria-hidden
                  />
                  <nav
                    className={`flex flex-col ${submenuOpen ? 'lg:flex-row' : 'lg:hidden'} lg:absolute w-full left-0 top-full md:px-16 md:py-6 lg:bg-paper-200 items-center gap-4 lg:gap-[3rem] cursor-default`}
                  >
                    <p className="text-xl hidden lg:block">{navItem.dropDownTitle}</p>
                    {navItem.dropDownNavItems?.map((subNavItem, index) => (
                      <CMSLink
                        key={index}
                        {...subNavItem.link}
                        appearance="link"
                        className="decoration-[.0625rem] underline-offset-8 text-xl lg:text-base"
                      />
                    ))}
                  </nav>
                </button>
              )}
            </div>
          )
        })}
      </div>
    </nav>
  )
}
