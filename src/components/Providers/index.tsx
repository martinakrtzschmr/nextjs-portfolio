'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { trpc } from '@/trpc/client';
import { httpBatchLink } from '@trpc/client';

/*
 * TODO: QueryClientProvider can be used withuout TRPC 
 */

const Providers = (props: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => trpc.createClient({
    links: [
      httpBatchLink({
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
        fetch(url, options) {
          return fetch (url, {
            ...options,
            credentials: 'include'
          })
        }
      })
    ]
  }));

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default Providers;
