module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    // General rules
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-spacing': 'error',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'eol-last': 'error',
    'no-trailing-spaces': 'error',
    'prettier/prettier': 'error',
  },
  overrides: [
    // Frontend-specific configuration
    {
      files: ['packages/frontend/**/*.{js,jsx}'],
      env: {
        browser: true,
        node: false,
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier',
      ],
      plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier'],
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        'react/react-in-jsx-scope': 'off', // Not needed in React 17+
        'react/prop-types': 'warn',
        'prettier/prettier': 'error',
      },
    },
    // Backend-specific configuration
    {
      files: ['packages/backend/**/*.js'],
      env: {
        node: true,
        browser: false,
      },
      extends: [
        'eslint:recommended',
        'plugin:node/recommended',
        'prettier',
      ],
      plugins: ['node', 'prettier'],
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'commonjs',
      },
      rules: {
        'node/no-unpublished-require': 'off',
        'prettier/prettier': 'error',
      },
    },
    // Test files configuration
    {
      files: ['**/__tests__/**/*.js', '**/*.test.js', '**/*.spec.js'],
      env: {
        jest: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:jest/recommended',
        'prettier',
      ],
      plugins: ['jest', 'prettier'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'prettier/prettier': 'error',
      },
    },
  ],
};