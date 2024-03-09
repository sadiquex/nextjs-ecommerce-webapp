/*
each product
*/

export default {
  name: 'product', // how we will query from db
  type: 'document',
  title: 'Product', // how it wil be displayed on studio

  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      //  generate slug from name
      options: {
        source: 'name',
      },
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product images',
      of: [{type: 'image'}], // explicitly tell sanity that it's an array of image
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price ',
    },
    {
      // want to reference our category for the products
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [
        // what we're referencing
        {
          type: 'category',
        },
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
}
