module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/react',
  ],
  plugins: [
    'react-hot-loader/babel',
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-optional-chaining',
    ['import', { libraryName: 'ramda', libraryDirectory: 'src' }, 'ramda'],
  ],
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['react-hot-loader/babel', 'babel-plugin-styled-components', '@babel/plugin-proposal-optional-chaining'],
    },
  },
}
