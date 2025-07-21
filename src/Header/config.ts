import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        {
          name: 'type',
          type: 'select',
          defaultValue: 'singleLink',
          label: 'Nav Item Type',
          options: [
            {
              label: 'Single Link',
              value: 'singleLink',
            },
            {
              label: 'Dropdown Menu',
              value: 'dropDownMenu',
            },
          ],
        },
        link({
          appearances: false,
          overrides: {
            admin: {
              condition: (_, { type } = {}) => type === 'singleLink',
            },
          },
        }),
        {
          name: 'dropDownTitle',
          type: 'text',
          label: 'Nav Dropdown Title',
          admin: {
            condition: (_, { type } = {}) => type === 'dropDownMenu',
          },
        },
        {
          name: 'dropDownNavItems',
          type: 'array',
          fields: [
            link({
              appearances: false,
            }),
          ],
          maxRows: 4,
          admin: {
            initCollapsed: true,
            condition: (_, { type } = {}) => type === 'dropDownMenu',
            components: {
              RowLabel: '@/Header/RowLabel#RowLabel',
            },
          },
        },
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
