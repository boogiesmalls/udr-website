import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'footerEmail',
      type: 'email',
      label: 'Footer Email',
    },
    {
      name: 'footerText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      label: 'Footer Text',
    },
    // {
    //   name: 'navItems',
    //   type: 'array',
    //   fields: [
    //     link({
    //       appearances: false,
    //     }),
    //   ],
    //   maxRows: 6,
    //   admin: {
    //     initCollapsed: true,
    //     components: {
    //       RowLabel: '@/Footer/RowLabel#RowLabel',
    //     },
    //   },
    // },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
