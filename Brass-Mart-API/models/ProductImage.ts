import { list } from "@keystone-6/core";
import { cloudinaryImage } from '@keystone-6/cloudinary';
import { relationship, text } from "@keystone-6/core/fields";

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || 'dkyy9wjvs',
  apiKey: process.env.CLOUDINARY_KEY || '591194678998568',
  apiSecret: process.env.CLOUDINARY_SECRET || '3QndzzGcefbUBrLh6OQPLHfw4_A',
  // folder: '',
}

export const ProductImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',
    }),
    altText: text(),
    product: relationship({ ref: 'Product.photos' }),
  },
});