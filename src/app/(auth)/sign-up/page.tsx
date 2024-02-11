'use client'; // TODO: Move use client to parts of the components that TRULY only use client
import React from 'react';
import { Icons } from '@/components/icons';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthCredentialsValitor } from '@/lib/validators/account-credentials-validator';
import type { TAuthCredentialsValidator } from '@/lib/validators/account-credentials-validator';
import { trpc } from '@/trpc/client';

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValitor),
  });

  // const { data } = trpc.anyApiRoute.useQuery();

  // const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {};

  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.home className="h-20 w-20" />

            <h1 className="text-2xl font-bold">Create an account</h1>

            <Link
              className={buttonVariants({
                variant: 'link',
                className: 'gap-1.5',
              })}
              href="/sign-in"
            >
              Sign In
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6">
            <form>{/* onSubmit={handleSubmit(onSubmit)} */}
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register('email')}
                    className={cn({
                      'focus-visible:ring-red-500': errors.email,
                    })}
                    placeholder="you@example.com"
                  />
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Password</Label>
                  <Input
                    {...register('password')}
                    className={cn({
                      'focus-visible:ring-red-500': errors.password,
                    })}
                    placeholder="Password"
                  />
                </div>

                <Button>Sign Up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
