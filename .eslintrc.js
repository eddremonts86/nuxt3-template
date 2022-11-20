module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    '@nuxtjs',
  ],
  plugins: [
    'vue'
  ],
  rules: {
    "no-console": "off",
    "space-before-function-paren": ["error", "always"],
    eqeqeq: "error",
    "vue/no-unused-vars": "error",
    "no-var": "error",
    "prefer-const": "error",
    "no-new-object": "error",
    "object-shorthand": "error",
    "quote-props": "error",
    "no-array-constructor": "error",
    "prefer-destructuring": [
      "error",
      { object: true, array: false }
    ],
    "prefer-template": "error",
    "template-curly-spacing": "error",
    "default-param-last": "error",
    "no-param-reassign": "error",
    "prefer-spread": "error",
    "prefer-arrow-callback": "error",
    "arrow-spacing": "error",
    "no-confusing-arrow": "error",
    "arrow-parens": "error",
    "nonblock-statement-body-position": "error",
    "brace-style": "error",
    "semicolon": [0, "never"],
    'no-restricted-syntax': [
      'error',
      {
        message: "Please don't use '.at', browser compatibility is not good",
        selector: 'MemberExpression > Identifier[name="at"]'
      }
    ],
    "vue/brace-style": "error",
    "vue/max-len": [
      "error",
      {
        tabWidth: 4,
        code: 140,
        template: 140,
        comments: 140,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreHTMLTextContents: true,
        ignoreTemplateLiterals: true,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreHTMLAttributeValues: false,
        ignorePattern: "",
      },
    ],
  },
};
