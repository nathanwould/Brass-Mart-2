import { config } from '@keystone-6/core';
import { lists } from './schema';
import { withAuth, session } from './auth';
import { extendGraphqlSchema } from './extendedSchema';

const frontEndURL = process.env.FRONTEND_URL || "http://localhost:7777";

export default withAuth(
  // Using the config function helps typescript guide you to the available options.
  config({
    server: {
      cors: {
        origin: frontEndURL,
        credentials: true,
      },
    },
    // the db sets the database provider - we're using sqlite for the fastest startup experience
    db: {
      provider: 'sqlite',
      url: 'file:./keystone.db',
      onConnect: async context => {
        console.log(`Session secret: ${process.env.FRONTEND_URL}`);
        // console.log(context);
        // if (process.argv.includes('--seed-data')) {
        //   await insertSeedData(keystone);
        // }
      },
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: (context) => true /*!!context.session?.data*/,
    },
    lists,
    extendGraphqlSchema,
    session,
  })
);
