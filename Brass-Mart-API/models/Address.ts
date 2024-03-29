import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";
import { allowAll } from '@keystone-6/core/access';

export const Address = list({
  access: allowAll,
  fields: {
    user: relationship({
      ref: 'User.addresses',
    }),
    name: text({
      validation: { isRequired: true },
    }),
    street: text({
      validation: { isRequired: true },
    }),
    street2: text(),
    city: text({
      validation: { isRequired: true },
    }),
    state: text({
      validation: { isRequired: true },
    }),
    zipCode: text({
      validation: { isRequired: true },
    }),
    country: text({
      validation: { isRequired: true },
    }),
  }
});