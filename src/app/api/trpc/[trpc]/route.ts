import { appRouter } from '../../../../trpc';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

/* eslint-disable */
const handler = (req: Request) => {
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({}),
  });
};

export { handler as GET, handler as POST };
/* eslint-enable */