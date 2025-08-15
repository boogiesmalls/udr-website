import { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { linkGroup } from '@/fields/linkGroup'

export const ContentText: Block = {
  slug: 'contentText',
  interfaceName: 'ContentTextBlock',
  fields: [
    {
      name: 'layout',
      type: 'radio',
      defaultValue: 'centered',
      options: [
        {
          label: 'Centered',
          value: 'centered',
        },
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
    linkGroup({
      appearances: ['default', 'outline'],
    }),
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
  ],
}
