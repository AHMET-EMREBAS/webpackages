module.exports = {
  apps: [
    {
      name: 'api-production',
      script: 'dist/apps/api/main.js',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        APP_NAME: 'Api',
        APP_DESCRIPTION: 'App description',
        PORT: 3005,
        ROOT_USERNAME: 'root',
        ROOT_PASSWORD: 'password',
        JWT_SECRET: 'Secret',
      },
    },
    {
      name: 'api-development',
      script: 'dist/apps/api/main.js',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        APP_NAME: 'Api Under Development ',
        APP_DESCRIPTION: 'App description',
        PORT: 3000,
        ROOT_USERNAME: 'root',
        ROOT_PASSWORD: 'password',
        JWT_SECRET: 'Secret',
      },
    },
  ],
};
