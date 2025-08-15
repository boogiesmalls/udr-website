import React from 'react'

import type { ContentHeaderBlock as ContentHeaderBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const ContentHeaderBlock: React.FC<ContentHeaderBlockProps> = ({
  mediaGroup,
  richText,
  links,
}) => {
  return (
    <div className="relative flex flex-col justify-center lg:items-center text-left lg:text-center px-4 lg:px-16 gap-[2.5rem] lg:gap-20">
      {mediaGroup && mediaGroup?.media && (
        <Media
          className="aspect-[4/5] lg:w-[346px] h-[385px] overflow-hidden border border-[#BEBEBE]"
          imgClassName="w-full h-full object-cover"
          rounded={mediaGroup.mediaRounded}
          resource={mediaGroup.media}
        />
      )}
      <RichText data={richText} enableGutter={false} />
      {Array.isArray(links) && links.length > 0 && (
        <ul className="flex gap-4">
          {links.map(({ link }, i) => {
            return (
              <li key={i}>
                <CMSLink
                  className="text-xl lg:text-3xl hover:bg-ash hover:text-paper-100"
                  {...link}
                />
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
