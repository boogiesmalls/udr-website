import { Block } from 'payload'

export const ImageGrid: Block = {
  slug: 'imageGrid',
  interfaceName: 'ImageGridBlock',
  labels: {
    plural: 'Images Grid',
    singular: 'Image Grid',
  },
  fields: [
    {
      name: 'images',
      label: 'Image Grid',
      type: 'array',
      required: true,
      maxRows: 3,
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
        {
          name: 'attribution',
          type: 'text',
          required: false,
        },
      ],
    },
  ],
}
