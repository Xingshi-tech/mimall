module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
},
  env: {
    node: true
  },
  plugins: [
    'html'
  ],
  "parser": "vue-eslint-parser",
  rules: {
	'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
