import { registerAs } from '@nestjs/config';

export default () => ({
  env: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10) || 2001,
  app: { name: process.env.APP_NAME, slug: process.env.APP_SLUG },
})
