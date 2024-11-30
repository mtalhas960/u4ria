import {defineField, defineType} from 'sanity'

export const coment = defineType({
  name: 'coment',
  title: 'coment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'post',
      type: 'reference',
      to: [{type: 'blog'}],
      validation: (rule) => rule.required(),
    }),
  ],
})