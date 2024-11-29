import {defineField, defineType} from 'sanity'

export const retreat = defineType({
  name: 'retreat',
  title: 'retreat',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'url',
    }),
    defineField({
      name: 'category',
      type: 'string',
    }),
    defineField({
      name: 'body',
      type: 'markdown',
    }),
  ],
})