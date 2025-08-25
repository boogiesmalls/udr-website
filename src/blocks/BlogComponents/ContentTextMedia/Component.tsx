import React from 'react'

import type { ContentTextMediaBlock as ContentTextMediaBlockProps } from '@/payload-types'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const ContentTextMediaBlock: React.FC<ContentTextMediaBlockProps> = (props) => {
  const { layout, subheading, links, richText, images } = props

  return (
    <div
      className={
        'flex flex-col lg:items-center lg:grid px-4 lg:px-[11rem] gap-4 lg:gap-x-8 lg:gap-y-16'
      }
    >
      <h2
        className={`text-2xl lg:text-[2.5rem] font-bold ${layout === 'right' && 'col-start-2'} ${layout === 'left' && 'col-start-1'}`}
      >
        {subheading}
      </h2>
      {images && images.length > 0 && (
        <div
          className={` row-start-2 h-full flex flex-col justify-start items-center gap-6 justify-self-end ${layout === 'right' && 'cols-start-2'} ${layout === 'left' && 'cols-start-1'}`}
        >
          {Array.isArray(images) && images.length > 0 && (
            <div className="flex flex-row lg:flex-col gap-4 lg:gap-8">
              {images.map(({ media }, i) => {
                return (
                  <Media
                    key={i}
                    className="text-xl w-1/2 lg:w-[304px] h-[201px]"
                    imgClassName="object-cover h-full"
                    resource={media}
                  />
                )
              })}
            </div>
          )}
        </div>
      )}
      <div
        className={`flex flex-col gap-6 lg:gap-16 h-full ${layout === 'right' && 'col-start-2'} ${layout === 'left' && 'col-start-1'} row-start-2`}
      >
        {richText && <RichText data={richText} enableGutter={false} />}
        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex flex-wrap gap-4 justify-start">
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink
                    className="text-xl px-8 py-4 hover:bg-ash hover:text-paper-100"
                    {...link}
                  />
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
