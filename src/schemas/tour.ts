import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'Tour',
  title: 'Tour',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      title: 'subTitle',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'superb',
      title: 'superb',
      type: 'text',
    }),
    defineField({
      name: 'rate',
      title: 'rate',
      type: 'text',
    }),
    defineField({
      name: 'meta',
      type: 'array',
      title: 'Tags for meta',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'meta',
          fields: [
            { type: 'string', name: 'label' },
            { type: 'string', name: 'value' },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
