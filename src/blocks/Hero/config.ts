import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const Hero: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  fields: [
    {
      name: 'richText',
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
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'mediaGroup',
      type: 'group',
      fields: [
        {
          name: 'mediaRounded',
          type: 'select',
          defaultValue: 'none',
          label: 'Rounded Border Direction',
          options: [
            {
              label: 'None',
              value: 'none',
            },
            {
              label: 'Border Rounded Top',
              value: 'top',
            },
            {
              label: 'Border Rounded Left',
              value: 'left',
            },
            {
              label: 'Border Rounded Right',
              value: 'right',
            },
            {
              label: 'Border Rounded Bottom',
              value: 'bottom',
            },
          ],
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
  ],
  labels: {
    plural: 'Heros',
    singular: 'Hero',
  },
}
