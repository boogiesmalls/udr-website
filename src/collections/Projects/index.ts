import type { CollectionConfig } from 'payload'

import { Column } from '../../blocks/Columns/config'
import { Hero } from '@/blocks/Hero/config'
import { HeroGrid } from '@/blocks/HeroGrid/config'
import { Ticker } from '@/blocks/Ticker/config'
import { TeamList } from '@/blocks/TeamList/config'
import { Sponsors } from '@/blocks/Sponsors/config'
import { ContentHeader } from '@/blocks/BlogComponents/ContentHeader/config'
import { ContentHeaderLargeMedia } from '@/blocks/BlogComponents/ContentHeaderLargeMedia/config'
import { ContentText } from '@/blocks/BlogComponents/ContentText/config'
import { ContentTextMedia } from '@/blocks/BlogComponents/ContentTextMedia/config'
import { ContentQuote } from '@/blocks/BlogComponents/ContentQuote/config'
import { ImageGrid } from '@/blocks/BlogComponents/ImageGrid/config'
import { CardGrid } from '@/blocks/BlogComponents/CardGrid/config'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidateProject } from './hooks/revalidateProject'
import { colorPickerField } from '@innovixx/payload-color-picker-field'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'
import { Form } from 'react-hook-form'
import { FormBlock } from '@/blocks/Form/config'

export const Projects: CollectionConfig<'projects'> = {
  slug: 'projects',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a project is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'posts'>
  defaultPopulate: {
    title: true,
    slug: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'projects',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'projects',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Styling',
          name: 'styling',
          fields: [
            colorPickerField({
              name: 'backgroundColor',
              label: 'Background Color',
              defaultValue: '#FFFBF4',
              required: true,
            }),
          ],
        },
        {
          fields: [
            {
              name: 'projectsLayout',
              type: 'blocks',
              blocks: [
                Column,
                Hero,
                HeroGrid,
                Sponsors,
                Ticker,
                TeamList,
                ContentHeader,
                ContentHeaderLargeMedia,
                ContentText,
                ContentTextMedia,
                ContentQuote,
                CardGrid,
                ImageGrid,
                FormBlock,
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidateProject],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
  dbName: 'proj',
}
