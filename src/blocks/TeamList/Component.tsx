import React from 'react'

import type { TeamListBlock as TeamListBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import Link from 'next/link'
import { CMSLink } from '@/components/Link'

export const TeamListBlock: React.FC<TeamListBlockProps> = ({ title, Items, ctaGroup }) => {
  return (
    <div>
      <h2 className="text-3xl mb-12 px-4 lg:px-16">{title}</h2>
      <div className="flex flex-col lg:grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-0 lg:gap-x-[7.0625rem]">
        {Items &&
          Items.map(({ mediaGroup, personGroup, richText }, index) => {
            const { mediaRound, media } = mediaGroup || {}
            const { name, role, link } = personGroup || {}
            return (
              <div
                className={`flex flex-col lg:justify-between ${index === 0 ? 'lg:px-0 lg:pl-16' : 'lg:px-0 lg:pr-16'}`}
                key={index}
              >
                <div
                  className={`lg:col-span-1 px-4 lg:px-0 ${index === 1 && ctaGroup ? 'lg:-my-[10rem]' : ''}`}
                  key={index}
                >
                  <Media
                    className="border overflow-hidden mb-12"
                    imgClassName="aspect-square object-cover"
                    priority
                    rounded={mediaRound}
                    resource={media}
                  />
                  <div className="flex flex-col lg:flex-row lg:justify-between mb-8">
                    <h3 className="text-[2rem]">{name}</h3>
                    <div className="flex gap-4 items-center">
                      <p className="px-4 border border-ash border-dashed rounded-[30px] w-fit">
                        {role}
                      </p>
                      {link.url && (
                        <Link className="underline underline-offset-2 text-xl" href={link.url}>
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
                {ctaGroup && index === 1 && (
                  <div className="flex flex-row mt-12 p-4 lg:p-8 lg:px-16 items-center justify-between border-t border-b lg:border border-feather bg-paper-200 col-start-2">
                    <p className="text-xl lg:text-2xl lg:text-[2rem]">{ctaGroup.ctaTitle}</p>
                    <CMSLink {...ctaGroup.link} />
                  </div>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}
