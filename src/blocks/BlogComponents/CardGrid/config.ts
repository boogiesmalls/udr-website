import { Block } from 'payload'

import { link } from '@/fields/link'

export const CardGrid: Block = {
  slug: 'cardGrid',
  interfaceName: 'CardGridBlock',
  fields: [
    {
      name: 'gridTitle',
      type: 'text',
      label: 'Grid Title',
      required: false,
    },
    {
      name: 'cardItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
          disableLabel: true,
        }),
        {
          name: 'gridTitles',
          type: 'group',
          label: 'Card Titles',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Card Title',
            },
            {
              name: 'subtitles',
              type: 'array',
              label: 'Subtitles',
              fields: [
                {
                  name: 'subtitle',
                  type: 'text',
                  label: 'Subtitle',
                },
              ],
              maxRows: 3,
            },
          ],
        },
      ],
    },
  ],
  dbName: 'cGrid',
}
