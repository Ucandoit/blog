module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['next/babel'],
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          ssr: true,
          displayName: process.env.NODE_ENV !== 'production',
        },
      ],
    ],
  };
};
