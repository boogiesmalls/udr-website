import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'

import Image from 'next/image'

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { contentTitle, columns } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  const udrShapes = ['/images/u-shape.svg', '/images/d-shape.svg', '/images/r-shape.svg']

  return (
    <div className="px-8 lg:px-16 my-16">
      <h2 className="mb-[4.5rem] text-[2.5rem]">{contentTitle}</h2>
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-[60px]">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { richText, size } = col

            return (
              <div
                className={cn(`col-span-4 lg:col-span-${colsSpanClasses[size!]} relative`, {
                  'md:col-span-2': size !== 'full',
                })}
                key={index}
              >
                {richText && (
                  <RichText data={richText} enableGutter={false} className="relative z-10 line" />
                )}

                <Image
                  src={udrShapes[index % 3]}
                  height={100}
                  width={100}
                  alt="udr-shape"
                  aria-hidden
                  className="absolute -top-[15px] -left-[30px] lg:-top-[26px] lg:-left-[14px] h-[3.75rem] lg:h-[90px]"
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}
