export const offer = {
    name: 'offer',
    type: 'document',
    title: 'Offer Modal',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'description', type: 'text', title: 'Description' },
        { name: 'image', type: 'image', title: 'App Demo Image' },
    ],
};
export const hero = {
    name: 'hero',
    type: 'document',
    title: 'Hero Section',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'subtitle', type: 'string', title: 'Subtitle' },
        { name: 'description', type: 'text', title: 'Description' },
        { name: 'buttonUrl', type: "url", title: 'Button Url' },
        { name: 'buttonText', type: "string", title: 'Button Text' },
        { name: 'cardTitle', type: "string", title: 'Card Title' },
        { name: 'cardDescription', type: "text", title: 'Card Description' },
        { name: 'image', type: 'image', title: 'App Demo Image' },
    ],
};
export const join = {
    name: 'join',
    type: 'document',
    title: 'Join Us Section',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'description', type: 'text', title: 'Description' },
        { name: 'buttonUrl', type: "url", title: 'Button Url' },
        { name: 'buttonText', type: "string", title: 'Button Text' },
    ],
};
export const welcome = {
    name: 'welcome',
    type: 'document',
    title: 'Welcome Section',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'subTitle', type: 'string', title: 'Subtitle' },
        { name: 'description', type: 'text', title: 'Description' },
        { name: 'buttonUrl', type: "url", title: 'Button Url' },
        { name: 'buttonText', type: "string", title: 'Button Text' },
    ],
};
export const feature = {
    name: 'feature',
    type: 'document',
    title: 'Feature Section',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'description', type: 'text', title: 'Description' },
        {
            name: 'features',
            type: 'array',
            title: 'Features List',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'name', type: 'string', title: 'Feature Name' },
                  { name: 'desc', type: 'text', title: 'Feature Description' },
                  { name: 'detail', type: 'text', title: 'Feature Detail' },
                ],
              },
            ],
            validation: (Rule) =>
              Rule.required()
                .min(12)
                .max(12)
                .error('You must add exactly 12 features.'),
          },
    ],
};
export const reviews = {
    name: 'reviews',
    type: 'document',
    title: 'Reviews Section',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'description', type: 'text', title: 'Description' },
        { name: 'rating', type: "string", title: 'Rating' },
    ],
};
export const partnership = {
    name: 'partnership',
    type: 'document',
    title: 'Partnership Section',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'description', type: 'text', title: 'Description' },
        { name: 'buttonUrl', type: "string", title: 'Button Url' },
        { name: 'buttonText', type: "string", title: 'Button Text' },
    ],
};

const heroQuery = `*[_type == "hero" && _id == "singleton-hero"]{title, description, image}[0]`;
const aboutQuery = `*[_type == "about" && _id == "singleton-about"]{heading, content, image}[0]`;