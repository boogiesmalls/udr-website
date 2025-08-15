import React from 'react'

import type { ContentQuoteBlock as ContentQuoteBlockProps } from '@/payload-types'

import RichText from '@/components/RichText'

export const ContentQuoteBlock: React.FC<ContentQuoteBlockProps> = ({
  quoteType,
  singleQuote,
  quoteColumns,
}) => {
  return (
    <div className="">
      {quoteType === 'singleQuote' && singleQuote && (
        <RichText
          className="px-4 lg:px-[10.125rem] prose-p:text-xl lg:prose-p:text-[3.5rem] lg:prose-p:leading-[120%] underline-offset-8"
          data={singleQuote}
          enableGutter={false}
        />
      )}
      {quoteType === 'quoteColumns' && quoteColumns && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 lg:px-[11rem] py-8 bg-paper-200 w-full">
          {quoteColumns.map((column, index) => (
            <RichText
              key={index}
              className="lg:prose-p:text-3xl underline-offset-8"
              data={column.richText}
              enableGutter={false}
            />
          ))}
        </div>
      )}
    </div>
  )
}
