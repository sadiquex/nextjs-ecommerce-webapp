/*
each category
*/

export default {
  name: 'category', // how we'll query data
  type: 'document',
  title: 'Categories',
  fields: [
    {
      name: 'name',
      title: 'Name of Category',
      type: 'string',
    },
    {
      title: 'Thumbnail',
      name: 'logo',
      type: 'image',
    },
  ],
}

// - be sure to add to the schemaTypes/index.js
