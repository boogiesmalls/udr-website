import React from 'react'

import type { CardGridBlock as CardGridBlockProps } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export const CardGridBlock: React.FC<CardGridBlockProps> = ({ gridTitle, cardItems }) => {
  return (
    <div className="px-4 lg:px-16 flex flex-col gap-8 lg:gap-16">
      {cardItems && (
        <h2 className="text-[2.5rem] font-bold text-left lg:text-center">{gridTitle}</h2>
      )}
      <div className="grid grid-cols-1 gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cardItems &&
          cardItems.map(({ link, gridTitles }, index) => {
            return (
              link && (
                <CMSLink
                  key={index}
                  {...link}
                  className="border border-feather hover:border-ash p-8 flex flex-col justify-between min-h-[265px]"
                >
                  <div className="flex flex-col gap-[.75rem]">
                    <h3 className="text-lg lg:text-2xl w-fit">{gridTitles?.title}</h3>
                    {gridTitles?.subtitles && (
                      <div className="flex flex-wrap gap-2">
                        {gridTitles.subtitles.map(({ subtitle }, subIndex) => (
                          <p
                            key={subIndex}
                            className="border-2 px-3 lg:px-4 py-2 lg:text-base border-dashed border-ash rounded-[1.875rem] w-fit"
                          >
                            {subtitle}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                  <img
                    src="images/grid-arrow.svg"
                    alt="Grid Arrow"
                    aria-hidden
                    className={`w-[36px] self-end`}
                  />
                </CMSLink>
              )
            )
          })}
      </div>
    </div>
  )
}
