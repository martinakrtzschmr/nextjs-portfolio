import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  auth: authRouter,
  anyApiRoute: publicProcedure.query(() => {
    return 'hello'
  })
});

export type AppRouter = typeof appRouter;