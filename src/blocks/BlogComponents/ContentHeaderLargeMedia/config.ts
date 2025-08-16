import { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { linkGroup } from '@/fields/linkGroup'

export const ContentHeaderLargeMedia: Block = {
  slug: 'contentHeaderLargeMedia',
  interfaceName: 'ContentHeaderLargeMediaBlock',
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
      required: true,
    },
    {
      name: 'mediaGroup',
      type: 'group',
      fields: [
        {
          name: 'mode',
          type: 'radio',
          defaultValue: 'media',
          label: 'Media Mode',
          options: [
            {
              label: 'Media Upload',
              value: 'media',
            },
            {
              label: 'Embed iframe',
              value: 'embed',
            },
          ],
          dbName: 'media_mode',
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: false,
          admin: {
            condition: (_, siblingData) => siblingData?.mode === 'media',
          },
        },
        {
          name: 'iframe',
          label: 'Iframe Embed',
          type: 'textarea',
          required: false,
          admin: {
            condition: (_, siblingData) => siblingData?.mode === 'embed',
          },
        },
      ],
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 1,
      },
    }),
  ],
}
