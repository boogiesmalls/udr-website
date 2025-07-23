import { link } from '@/fields/link'
import type { Block } from 'payload'

export const HeroGrid: Block = {
  slug: 'heroGrid',
  interfaceName: 'HeroGridBlock',
  fields: [
    {
      name: 'gridItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
          disableLabel: true,
        }),
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'cardTitles',
          type: 'group',
          label: 'Card Titles',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Card Title',
            },
            {
              name: 'subtitle',
              type: 'text',
              label: 'Sub Title',
            },
          ],
        },
      ],
      maxRows: 3,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
