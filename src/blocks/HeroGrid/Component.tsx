import React from 'react'

import { HeroGridBlock as HeroGridBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'

export const HeroGridBlock: React.FC<HeroGridBlockProps> = ({ gridItems }) => {
  return (
    <div className="px-8 lg:px-16">
      {Array.isArray(gridItems) && gridItems.length > 0 && (
        <div
          className="flex flex-col lg:grid grid-flow-col grid-cols-1 lg:grid-cols-4 lg:gap-x-8 gap-y-6"
          style={{ gridTemplateRows: `repeat(${gridItems.length - 1}, 1fr)` }}
        >
          {gridItems.map(({ link, media, cardTitles }, index) => {
            return (
              link && (
                <CMSLink
                  key={index}
                  {...link}
                  className={`flex border group col-span-1 ${
                    index === 0
                      ? 'flex-col lg:col-start-1 lg:col-end-3 lg:row-span-full'
                      : 'lg:col-start-3 lg:col-end-5'
                  } `}
                >
                  <Media
                    resource={media}
                    className={`overflow-hidden ${index === 0 ? 'h-[83%]' : 'w-[42%]'}`}
                    imgClassName={`group-hover:scale-110 transition-[all] duration-scale ease-in-out object-cover h-full ${
                      index === 0
                        ? 'flex-col col-start-1 col-end-3 row-span-full '
                        : 'col-start-3 col-end-5 w-fit'
                    }`}
                  />
                  <div
                    className={`flex justify-between py-5 w-full ${index === 0 ? 'flex-row px-12' : 'flex-col px-8'}`}
                  >
                    <div className="flex flex-col gap-[.75rem]">
                      <h3 className="text-2xl w-fit">{cardTitles?.title}</h3>
                      <p className="border-2 px-4 border-dashed border-ash rounded-[1.875rem] w-fit">
                        {cardTitles?.subtitle}
                      </p>
                    </div>
                    <img
                      src="images/grid-arrow.svg"
                      alt="Grid Arrow"
                      aria-hidden
                      className={`w-[36px] ${index !== 0 && 'self-end'}`}
                    />
                  </div>
                </CMSLink>
              )
            )
          })}
        </div>
      )}
    </div>
  )
}
