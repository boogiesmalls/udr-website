import { Block } from 'payload'
import { link } from '@/fields/link'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const TeamList: Block = {
  slug: 'teamList',
  interfaceName: 'teamListBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'List Title',
    },
    {
      name: 'Items',
      type: 'array',
      fields: [
        {
          name: 'mediaGroup',
          type: 'group',
          fields: [
            {
              name: 'mediaRound',
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
        {
          name: 'personGroup',
          type: 'group',
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Full Name',
              required: true,
            },
            {
              name: 'role',
              type: 'text',
              label: 'Role and/or Job Title',
            },
            link({
              appearances: false,
            }),
          ],
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
          label: 'Bio',
        },
      ],
    },
    {
      name: 'ctaGroup',
      type: 'group',
      fields: [
        {
          name: 'ctaTitle',
          type: 'text',
          label: 'Call to Action Title',
        },
        link({
          appearances: ['default'],
        }),
      ],
      label: 'Call to Action Group',
    },
  ],
}
