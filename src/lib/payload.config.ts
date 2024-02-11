import { webpackBundler } from '@payloadcms/bundler-webpack';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';
import path from 'path';
import { Users } from '../collections/Users';
import dotenv from 'dotenv';

dotenv.config({
  path: path.resolve(__dirname, '../../.env')
})

const MONGODB_URI = process.env.MONGODB_URI as string;

/* eslint-disable */
export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  collections: [
    Users
  ],
  routes: {
    admin: '/sell',
  },
  admin: {
    user: 'users',
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- MK Portfolio',
      favicon: '/favicon.ico',
      ogImage: '/thumbnail.png',
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: MONGODB_URI,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
/* eslint-enable */