module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    env: {
      development: {
        plugins: ['inline-dotenv'],
      },
    },
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            services: './src/services',
            scenes: './src/scenes',
            theme: './src/theme',
            utils: './src/utils',
            modules: './src/modules',
          },
        },
      ],
      'inline-dotenv',
    ],
  }
}
