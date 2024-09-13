import { list } from "@keystone-6/core";
import { cloudinaryImage } from '@keystone-6/cloudinary';
import { relationship, text } from "@keystone-6/core/fields";
import { allowAll } from "@keystone-6/core/access";
import { permissions } from "../access";

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
  apiKey: process.env.CLOUDINARY_KEY || '',
  apiSecret: process.env.CLOUDINARY_SECRET || '',
  folder: process.env.CLOUDINARY_FOLDER,
};

// console.log(cloudinary)

export const ProductImage = list({
  access: {
    operation: {
      query: () => true,
      create: args => !permissions.canManageProducts(args),
      update: args => !permissions.canManageProducts(args),
      delete: args => !permissions.canManageProducts(args),
    }
  },
  ui: {
    // hide the back end UI from regular users
    hideCreate: args => !permissions.canManageUsers(args),
    hideDelete: args => !permissions.canManageUsers(args),
    listView: {
      initialColumns: ['image', 'altText', 'product'],
    },
  },
  fields: {
    image: cloudinaryImage({
      cloudinary,
    }),
    altText: text({
      validation: { isRequired: true }
    }),
    product: relationship({
      ref: 'Product.photos',
    }),
  },
});