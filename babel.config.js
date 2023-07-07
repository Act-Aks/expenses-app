module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          alias: {
            '@': './src',
            '@assets': './assets',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@infrastructure': './src/infrastructure',
            '@screens': './src/screens',
          },
        },
      ],
    ],
  };
};
