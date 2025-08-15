import React from 'react'

import type { ContentTextBlock as ContentTextBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

export const ContentTextBlock: React.FC<ContentTextBlockProps> = ({
  layout,
  subheading,
  richText,
  links,
}) => {
  return (
    <div
      className={`flex flex-col items-start lg:items-center gap-4 ${layout === 'left' || layout === 'right' ? 'lg:grid lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-8' : ''} px-4 lg:px-[11rem]`}
    >
      <h2
        className={`text-2xl lg:text-[2.5rem] font-bold ${layout === 'right' && 'col-start-1'} ${layout === 'left' && 'col-start-2'} h-fit ${layout === 'centered' && 'mb-4 lg:mb-8'}`}
      >
        {subheading}
      </h2>
      {richText && (
        <RichText
          data={richText}
          enableGutter={false}
          className={`row-start-1 row-end-3 ${layout === 'right' && 'col-start-2'} ${layout === 'left' && 'col-start-1'}`}
        />
      )}
      {Array.isArray(links) && links.length > 0 && (
        <ul className={`mb-auto row-start-2 ${layout === 'centered' && 'lg:mt-8'}`}>
          {links.map(({ link }, i) => {
            return (
              <li key={i}>
                <CMSLink
                  className="text-xl px-8 py-4 hover:bg-ash hover:text-paper-100 lg:w-full"
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
