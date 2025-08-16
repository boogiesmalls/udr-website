import React from 'react'

import type { ContentHeaderLargeMediaBlock as ContentHeaderLargeMediaBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const ContentHeaderLargeMediaBlock: React.FC<ContentHeaderLargeMediaBlockProps> = ({
  mediaGroup,
  richText,
  links,
}) => {
  return (
    <div className="relative flex flex-col justify-center lg:items-center text-left lg:text-center px-4 lg:px-16 gap-[2.5rem] lg:gap-20">
      <RichText data={richText} enableGutter={false} />
      {mediaGroup && mediaGroup.mode === 'media' && mediaGroup?.media && (
        <Media
          className="w-full border border-[#BEBEBE]"
          imgClassName="w-full h-full object-cover"
          resource={mediaGroup.media}
        />
      )}
      {mediaGroup && mediaGroup.mode === 'embed' && mediaGroup?.iframe && (
        <div
          className="w-full h-[450px] lg:h-[660px] border border-[#BEBEBE] overflow-hidden"
          dangerouslySetInnerHTML={{ __html: mediaGroup.iframe }}
        ></div>
      )}
      {Array.isArray(links) && links.length > 0 && (
        <ul className="flex gap-4">
          {links.map(({ link }, i) => {
            return (
              <li key={i}>
                <CMSLink className="text-xl lg:text-3xl" {...link} />
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
