import express from 'express';
import type { NextFunction, Request, Response } from 'express';
import { nextApp, nextHandler } from '../lib/next-utils';
import { getPayloadClient } from './get-payload';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const start = async (): Promise<void> => {
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
  app.use(async (req: Request, res: Response, next: NextFunction) => {
      nextHandler(req, res);
      next();
    }
  );

  nextApp.prepare().then(() => {
    payload.logger.info('Next.js started');

    app.listen(PORT, async (): Promise<void> => {
      payload.logger.info(
        `Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
      );
    });
  });
};

start();
/* eslint-enable */