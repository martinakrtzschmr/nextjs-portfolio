import { webpackBundler } from '@payloadcms/bundler-webpack';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';
import path from 'path';

const MONGODB_URI = process.env.MONGODB_URI ?? '';

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL ?? '',
  collections: [],
  routes: {
    admin: '/sell',
  },
  admin: {
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
