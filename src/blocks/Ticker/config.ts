import type { Block } from 'payload'

export const Ticker: Block = {
  slug: 'ticker',
  interfaceName: 'tickerBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Ticker Title',
    },
    {
      name: 'tickerItems',
      type: 'array',
      fields: [
        {
          name: 'subtitle',
          type: 'text',
          label: 'Ticker Subtitle',
        },
      ],
    },
  ],
}
