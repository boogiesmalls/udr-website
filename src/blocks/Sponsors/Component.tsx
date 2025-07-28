import RichText from '@/components/RichText'
import React from 'react'

import { SponsorsBlock as SponsorsBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'

export const SponsorsBlock: React.FC<SponsorsBlockProps> = ({ introText, sponsorItems }) => {
  return (
    <div className="px-8 lg:px-16">
      {introText && (
        <RichText
          data={introText}
          enableGutter={false}
          className="mb-8 lg:mb-[4.75rem] lg:prose-p:text-2xl"
        />
      )}

      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
        {sponsorItems?.map(({ sponsorGroup }, index) => {
          const { sponsorMedia, link } = sponsorGroup
          return (
            <a href={link && link.url ? link.url : ''} key={index} className="w-fit">
              <Media resource={sponsorMedia} imgClassName="w-full h-[5rem] object-contain" />
            </a>
          )
        })}
      </div>
    </div>
  )
}
