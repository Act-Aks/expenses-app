module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
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
            '@assets': './src/assets',
            '@components': './src/components',
            '@configs': './src/configs',
            '@constants': './src/constants',
            '@hooks': './src/hooks',
            '@infrastructure': './src/infrastructure',
            '@reducers': './src/reducers',
            '@screens': './src/screens',
            '@services': './src/services',
            '@typings': './src/typings',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
