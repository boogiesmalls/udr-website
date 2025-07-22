import React, { Fragment } from 'react'

import type { Props } from './types'

import { ImageMedia } from './ImageMedia'
import { VideoMedia } from './VideoMedia'
import { type VariantProps, cva } from 'class-variance-authority'

const mediaRoundedVariants = cva('', {
  defaultVariants: {
    variant: 'none',
  },
  variants: {
    variant: {
      none: '',
      top: 'rounded-t-[20.375rem]',
      right: 'rounded-r-[20.375rem]',
      left: 'rounded-l-[20.375rem]',
      bottom: 'rounded-b-[20.375rem]',
    },
  },
})

export const Media: React.FC<Props> = (props) => {
  const { className, htmlElement = 'div', resource, rounded = 'none' } = props

  const isVideo = typeof resource === 'object' && resource?.mimeType?.includes('video')
  const Tag = htmlElement || Fragment

  const roundedClass = mediaRoundedVariants({ variant: rounded })

  return (
    <Tag
      {...(htmlElement !== null
        ? {
            className: `${className} ${roundedClass}`,
          }
        : {})}
    >
      {isVideo ? <VideoMedia {...props} /> : <ImageMedia {...props} />}
    </Tag>
  )
}
