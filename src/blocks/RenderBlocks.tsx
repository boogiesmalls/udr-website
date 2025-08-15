import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ColumnBlock } from '@/blocks/Columns/Component'
import { HeroBlock } from '@/blocks/Hero/Component'
import { HeroGridBlock } from '@/blocks/HeroGrid/Component'
import { TickerBlock } from '@/blocks/Ticker/Component'
import { TeamListBlock } from '@/blocks/TeamList/Component'
import { SponsorsBlock } from '@/blocks/Sponsors/Component'
import { ContentTextBlock } from '@/blocks/BlogComponents/ContentText/Component'
import { ContentTextMediaBlock } from '@/blocks/BlogComponents/ContentTextMedia/Component'
import { ContentHeaderBlock } from '@/blocks/BlogComponents/ContentHeader/Component'
import { ContentHeaderLargeMediaBlock } from '@/blocks/BlogComponents/ContentHeaderLargeMedia/Component'
import { ContentQuoteBlock } from '@/blocks/BlogComponents/ContentQuote/Component'
import { CardGridBlock } from './BlogComponents/CardGrid/Component'
import { ImageGridBlock } from './BlogComponents/ImageGrid/Component'

const blockComponents = {
  column: ColumnBlock,
  hero: HeroBlock,
  heroGrid: HeroGridBlock,
  sponsors: SponsorsBlock,
  teamList: TeamListBlock,
  ticker: TickerBlock,
  contentHeader: ContentHeaderBlock,
  contentHeaderLargeMedia: ContentHeaderLargeMediaBlock,
  contentText: ContentTextBlock,
  contentTextMedia: ContentTextMediaBlock,
  contentQuote: ContentQuoteBlock,
  cardGrid: CardGridBlock,
  imageGrid: ImageGridBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-10 lg:my-[4.5rem]" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
