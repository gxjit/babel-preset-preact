const jsxTransform = require('@babel/plugin-transform-react-jsx')

module.exports = () => ({
  plugins: [
    [
      jsxTransform,
      {
        pragma: 'h',
        pragmaFrag: 'Fragment'
      }
    ]
  ]
})
