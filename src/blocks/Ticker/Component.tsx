import React from 'react'

import { TickerBlock as TickerBlockProps } from '@/payload-types'

export const TickerBlock: React.FC<TickerBlockProps> = ({ title, tickerItems }) => {
  return (
    <div className="bg-paper-200 flex">
      <h3 className="px-16 py-[1.625rem] shrink-0 text-paper-100 bg-ash relative z-10">{title}</h3>
      <div className="relative border-t border-b border-feather flex items-center overflow-x-hidden">
        <div className="animate-marquee flex items-center justify-center whitespace-nowrap">
          {Array.isArray(tickerItems) &&
            tickerItems.length > 0 &&
            tickerItems.map(({ subtitle }, index) => {
              return (
                <div key={index} className="pl-8 shrink-0">
                  {subtitle}
                </div>
              )
            })}
        </div>
        <div className="absolute animate-marquee2 flex items-center justify-center whitespace-nowrap">
          {Array.isArray(tickerItems) &&
            tickerItems.length > 0 &&
            tickerItems.map(({ subtitle }, index) => {
              return (
                <div key={index} className="pl-8 shrink-0">
                  {subtitle}
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
