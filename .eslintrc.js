module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/standard', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'no-underscore-dangle': 'off',
    'global-require': 'off',
    'arrow-parens': ['error', 'always'],
    'class-methods-use-this': 'off',
    'valid-jsdoc': [2, { requireReturn: false }],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],

    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',

    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],

    'prettier/prettier': 'error',

    'react/destructuring-assignment': 'off',
  },
};
