import React from 'react'

import type { HeroBlock as HeroBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HeroBlock: React.FC<HeroBlockProps> = ({ links, media, richText }) => {
  return (
    <div className="relative flex items-center justify-between px-16 gap-20">
      <div className="mb-8 z-10 relative flex items-center justify-center">
        <div className="max-w-[62.5rem] md:text-center">
          {richText && (
            <RichText className="mb-6 text-left text-xl" data={richText} enableGutter={false} />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      {media && typeof media === 'object' && (
        <div>
          <Media
            className="w-[30rem] h-[37.5rem] border overflow-hidden lg:flex-shrink-0"
            imgClassName="w-full h-full object-cover"
            priority
            rounded="top"
            resource={media}
          />
        </div>
      )}
    </div>
  )
}
