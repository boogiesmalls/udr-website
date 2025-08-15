import { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { linkGroup } from '@/fields/linkGroup'

export const ContentTextMedia: Block = {
  slug: 'contentTextMedia',
  interfaceName: 'ContentTextMediaBlock',
  fields: [
    {
      name: 'layout',
      type: 'radio',
      defaultValue: 'left',
      options: [
        {
          label: 'Left Aligned',
          value: 'left',
        },
        {
          label: 'Right Aligned',
          value: 'right',
        },
      ],
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Subheading',
    },
    {
      name: 'images',
      type: 'array',
      label: 'Images',
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
        },
      ],
      required: false,
      maxRows: 2,
    },
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
      required: true,
    },
    linkGroup({
      appearances: ['default', 'outline'],
    }),
  ],
}
