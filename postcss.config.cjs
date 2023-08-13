
const config = {
  plugins: [
    require('postcss-jit-props')({
      files: [
        'node_modules/open-props/open-props.min.css',
        'src/assets/styles/vars.postcss'
      ]
    }),
    require('autoprefixer')
  ]
}

module.exports = config
