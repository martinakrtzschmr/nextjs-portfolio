import express from 'express';
import { nextApp, nextHandler } from '../lib/next-utils';
import { getPayloadClient } from './get-payload';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from '../trpc';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
});

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL()}`);
      },
    },
  });

  // Following code is unfriendly to typescript. Following erros occur:
  // @typescript-eslint/no-misused-promises
  // @typescript-eslint/no-floating-promises
  /* eslint-disable */
  app.use(
    '/api/trpc',
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  app.use(async (req, res) => nextHandler(req, res));

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
/* eslint-enable */
