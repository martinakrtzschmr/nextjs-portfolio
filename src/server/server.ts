import express from 'express';
import { nextApp, nextHandler } from '../lib/next-utils';
// import * as trpcExpress from '@trpc/server/adapters/express';
import { getPayloadClient } from './get-payload';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// const createContext = ({
//   req,
//   res,
// }: trpcExpress.CreateExpressContextOptions) => ({
//   req,
//   res,
// });

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL()}`);
      },
    },
  });

  // TODO: Typescript needed for Promise
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  app.use(async (req, res) => nextHandler(req, res));

  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  nextApp.prepare().then(() => {
    payload.logger.info('Next.js started');

    app.listen(PORT, async () => {
      payload.logger.info(
        `Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
      );
    });
  });
};

start();
