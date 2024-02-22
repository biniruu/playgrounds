module.exports = {
  syntax: 'postcss-css-in-js',
  plugins: {
    autoprefixer: {},
    'postcss-preset-env': {
      features: {
        'nesting-rules': true,
      },
    },
    tailwindcss: {},
  },
}
