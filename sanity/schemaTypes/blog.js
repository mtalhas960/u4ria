import {defineField, defineType} from 'sanity'

export const blogPost = defineType({
  name: 'blog',
  title: 'blog',
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
      options: {
        list: ['Recipes', 'Gratitude', 'Meditation', 'Affirmations'],
      },
    }),
    defineField({
      name: 'body',
      type: 'markdown',
    }),
  ],
})