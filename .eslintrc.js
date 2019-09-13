module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'airbnb-base',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'never'],
    'import/extensions': ['error', 'never', {
      'js': 'never',
      'vue': 'never'
    }],
    'import/no-unresolved': 0,
    'import/no-dynamic-require': 0,
    'space-before-function-paren': ['error', 'never'],
    'vue/attributes-order': ['error', 'always'],
    'import/no-extraneous-dependencies': context => [
      'error',
      {
        devDependencies: true,
        packageDir: [context.getFilename(), __dirname]
      }
    ],
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': ['error', { 'props': false }],
    'max-len': ['error', { 'code': 120, 'ignoreStrings': true, 'ignoreUrls': true, 'ignoreComments': true, 'ignoreTemplateLiterals': true }]

  },
  settings: {
    'import/core-modules': ['vue'],
    'import/resolver': {
      alias: [
        ['@', './'],
        ['~', './']
      ]
    }
  }
}
