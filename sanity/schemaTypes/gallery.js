import {defineField, defineType} from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: 'gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
  ],
})