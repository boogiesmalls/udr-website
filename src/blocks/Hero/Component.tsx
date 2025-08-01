import React from 'react'

import type { HeroBlock as HeroBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HeroBlock: React.FC<HeroBlockProps> = ({ links, mediaGroup, richText }) => {
  const { mediaRounded, media } = mediaGroup || {}

  return (
    <div className="relative flex flex-col lg:flex-row items-center lg:justify-between px-4 lg:px-16 gap-8 lg:gap-20">
      <div className="order-2 lg:order-1 mb-8 z-10 relative flex items-center justify-start w-full">
        <div className="w-full lg:max-w-[62.5rem] md:text-center">
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
        <div className="flex justify-center order-1">
          <Media
            className="order-1 lg:order-2 aspect-[4/5] w-full lg:w-[30rem] lg:h-[37.5rem] border overflow-hidden lg:flex-shrink-0"
            imgClassName="w-full h-full object-cover"
            priority
            rounded={mediaRounded}
            resource={media}
          />
        </div>
      )}
    </div>
  )
}
