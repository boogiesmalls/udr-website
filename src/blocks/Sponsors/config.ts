import { Block } from 'payload'
import { link } from '@/fields/link'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Sponsors: Block = {
  slug: 'sponsors',
  interfaceName: 'SponsorsBlock',
  fields: [
    {
      name: 'introText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    {
      name: 'sponsorItems',
      type: 'array',
      fields: [
        {
          name: 'sponsorGroup',
          type: 'group',
          fields: [
            {
              name: 'sponsorMedia',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            link({
              appearances: false,
              disableLabel: true,
              typeFieldOverrides: {
                dbName: 'spons_link_type',
              },
            }),
          ],
        },
      ],
    },
  ],
}
