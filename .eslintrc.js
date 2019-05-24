const config = 
{
    parser: "babel-eslint",

    env: {
      browser: true,
      node: true,
      es6: true,
      commonjs: true
    },
   
    extends: ['eslint:recommended', 'airbnb-base', 'plugin:react/recommended', 'plugin:flowtype/recommended'],
   
    plugins: ['jest', 'react', 'flowtype'],
   
    rules: {
      indent: [
          "error",
          2
      ],
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-underscore-dangle': 'off',
    },
   
    // Defines other global variables
    // 'false' means disallow overwriting of variable in code
    globals: {
      $: false,
    },
  };
   
  module.exports = config;