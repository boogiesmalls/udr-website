import React from 'react'

import type { ImageGridBlock as ImageGridBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'

export const ImageGridBlock: React.FC<ImageGridBlockProps> = ({ images }) => {
  return (
    <div className="px-4 lg:px-16">
      {images.length === 1 && (
        <div className="flex flex-col gap-4 lg:gap-8">
          <Media
            className="w-full h-[250px] md:h-[400px] lg:h-[800px]"
            imgClassName="h-full object-cover"
            resource={images[0].media}
          />
          {images[0].attribution && (
            <p className="text-xs lg:text-base border-2 px-3 py-2 lg:px-4 border-dashed border-ash rounded-[1.875rem] w-fit">
              {images[0].attribution}
            </p>
          )}
        </div>
      )}
      {images.length === 2 && (
        <div className="grid grid-cols-2 gap-4 lg:gap-8">
          {images.map(({ media, attribution }, index) => (
            <div key={index} className="flex flex-col gap-4 lg:gap-8">
              <Media
                className="w-full h-[200px] lg:h-[480px]"
                imgClassName="h-full object-cover"
                resource={media}
              />
              {attribution && (
                <p className="text-xs lg:text-base border-2 px-3 py-2 lg:px-4 border-dashed border-ash rounded-[1.875rem] w-fit">
                  {attribution}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
      {images.length === 3 && (
        <div className="grid grid-rows-2 grid-cols-2 lg:grid-cols-9 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-12">
          {images.map(({ media, attribution }, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 lg:gap-8 ${index === 0 ? 'col-start-1 col-end-4 lg:col-end-7 row-span-full h-full' : 'lg:col-start-7 lg:col-end-10'} ${index == 1 ? '' : ''} ${index === 2 ? 'col-start-2 col-end-3' : ''}`}
            >
              <Media
                className={`h-full w-full ${index === 0 ? '' : 'h-[200px] lg:h-[400px]'}`}
                imgClassName="h-full w-full object-cover"
                resource={media}
              />
              {attribution && (
                <p className="text-xs lg:text-base border-2 px-3 py-2 lg:px-4 border-dashed border-ash rounded-[1.875rem] w-fit">
                  {attribution}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
