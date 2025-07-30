'use client'

import React, { useState } from 'react'

import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import Image from 'next/image'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = data?.navItems || []

  const openSubMenu = () => {
    setSubMenuOpen(true)
  }

  const closeSubMenu = () => {
    window.setTimeout(() => {
      setSubMenuOpen(false)
    }, 100)
  }

  const toggleSubMenu = () => {
    setSubMenuOpen((prev) => !prev)
  }

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <nav className="flex items-center h-full">
      <Image
        src="/images/hamburger-icon.svg"
        width={24}
        height={14}
        alt="Mobile Nav Button"
        className="h-[.875rem] w-6 lg:hidden cursor-pointer"
        onClick={toggleMenu}
      />
      <div className={`lg:flex gap-8 items-center h-full ${menuOpen ? '' : 'hidden'}`}>
        {navItems.map((navItem, index) => {
          const type = navItem.type
          return (
            <div className="h-full flex items-center" key={index}>
              {type === 'singleLink' && (
                <CMSLink
                  {...navItem.link}
                  appearance="link"
                  className="decoration-[.0625rem] underline-offset-8 text-base h-full items-center"
                />
              )}
              {type === 'dropDownMenu' && (
                <button
                  onMouseEnter={() => openSubMenu()}
                  onMouseLeave={() => closeSubMenu()}
                  className="flex flex-row gap-[.625rem] cursor-pointer items-center h-full"
                  role="button"
                >
                  <p
                    className={`${subMenuOpen ? 'underline' : ''} decoration-[.0625rem] underline-offset-8`}
                  >
                    {navItem.dropDownTitle}
                  </p>
                  <img
                    src="images/menu-chevron.svg"
                    alt="Menu Chevron"
                    className={`${subMenuOpen ? 'rotate-180' : ''} w-[.8125rem]`}
                    aria-hidden
                  />
                  <nav
                    onMouseEnter={() => openSubMenu()}
                    onMouseLeave={() => closeSubMenu()}
                    onClick={() => toggleSubMenu()}
                    className={`${subMenuOpen ? 'flex' : 'hidden '} absolute w-full left-0 top-full md:px-16 md:py-6 bg-paper-200 items-center gap-[3rem] cursor-default`}
                  >
                    <p className="text-xl">{navItem.dropDownTitle}</p>
                    {navItem.dropDownNavItems?.map((subNavItem, index) => (
                      <CMSLink
                        key={index}
                        {...subNavItem.link}
                        appearance="link"
                        className="decoration-[.0625rem] underline-offset-8 text-base"
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
