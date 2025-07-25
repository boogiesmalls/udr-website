import React from 'react'

import type { TeamListBlock as TeamListBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import Link from 'next/link'

export const TeamListBlock: React.FC<TeamListBlockProps> = ({ title, Items }) => {
  return (
    <div className="px-16">
      <h2 className="text-3xl mb-12">{title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-0 lg:gap-x-[7.0625rem]">
        {Items &&
          Items.map(({ mediaGroup, personGroup, richText }, index) => {
            const { mediaRound, media } = mediaGroup || {}
            const { name, role, link } = personGroup || {}
            return (
              <div className="flex flex-col col-span-1 " key={index}>
                <Media
                  className="border overflow-hidden mb-12"
                  imgClassName="aspect-square object-cover"
                  priority
                  rounded={mediaRound}
                  resource={media}
                />
                <div className="flex flex-col lg:flex-row lg:justify-between mb-8">
                  <p className="text-[2rem]">{name}</p>
                  <div className="flex gap-4 items-center">
                    <p className="px-4 border border-ash border-dashed rounded-[30px] w-fit">
                      {role}
                    </p>
                    {link.url && (
                      <Link className="underline underline-offset-2" href={link.url}>
                        {link.label}
                      </Link>
                    )}
                  </div>
                </div>
                {richText && (
                  <RichText
                    className="mb-6 text-left text-xl"
                    data={richText}
                    enableGutter={false}
                  />
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}
