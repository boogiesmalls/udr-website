import { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const ContentQuote: Block = {
  slug: 'contentQuote',
  interfaceName: 'ContentQuoteBlock',
  fields: [
    {
      name: 'quoteType',
      type: 'select',
      options: [
        {
          label: 'Single Quote',
          value: 'singleQuote',
        },
        {
          label: 'Quote Columns',
          value: 'quoteColumns',
        },
      ],
      required: true,
    },
    {
      name: 'singleQuote',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      label: false,
      required: true,
      admin: {
        condition: (_, data) => data.quoteType === 'singleQuote',
      },
    },
    {
      name: 'quoteColumns',
      type: 'array',
      fields: [
        {
          name: 'richText',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
            },
          }),
          label: false,
          required: true,
        },
      ],
      admin: {
        condition: (_, data) => data.quoteType === 'quoteColumns',
      },
    },
  ],
}
