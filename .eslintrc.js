/* eslint-disable */

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
    "eslint:recommended",
    "plugin:nuxt/recommended",
    "plugin:vue/recommended"
  ],
  rules: {
    "no-empty": "warn",
    "no-debugger": 1,
    "camelcase": ["off"],
    "no-duplicate-imports": ["error", {"includeExports": true}],
    "no-template-curly-in-string": "error",
    "curly": [1, "all"],
    "eqeqeq": "error",
    "max-classes-per-file": ["error", 1],
    "no-console": "warn",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-sequences": "error",
    "block-scoped-var": "error",
    "complexity": "error",
    "consistent-return": "error",
    "default-case": "error",
    // "default-case-last": "error",
    "dot-notation": "warn",
    "guard-for-in": "warn",
    "no-alert": "warn",
    "no-caller": "warn",
    "no-constructor-return": "error",
    "no-empty-function": "warn",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-fallthrough": "warn",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "off",
    "no-implicit-globals": "warn",
    "no-implied-eval": "error",
    "no-invalid-this": "off",
    "no-loop-func": "error",
    "no-multi-spaces": "warn",
    "no-multi-str": "error",
    "no-new": "warn",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "warn",
    "no-param-reassign": "warn",
    "no-proto": "warn",
    "no-prototype-builtins": "warn",
    "no-redeclare": "error",
    "no-return-assign": "warn",
    "no-return-await": "warn",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-warning-comments": [0, { "terms": ["todo", "fixme"]}],
    "no-with": "error",
    "require-await": "warn",
    "radix": "warn",
    "prefer-regex-literals": "warn",
    "yoda": "warn",
    "init-declarations": "off",
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-restricted-globals": "warn",
    "no-shadow": "warn",
    "no-shadow-restricted-names": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-unused-vars": "warn",
    "no-use-before-define": "off",
    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": ["error", "consistent"],
    "comma-dangle": ["error", "never"],
    "comma-spacing": ["error", {"before": false, "after": true}],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "func-style": ["error", "declaration", {"allowArrowFunctions": true}],
    "function-call-argument-newline": ["error", "consistent"],
    "id-length": ["error", {"min": 1, "max": 35}],
    "indent": "off",
    "key-spacing": ["error", {"afterColon": true}],
    "lines-between-class-members": ["error", "always"],
    "max-depth": ["error", 4],
    "max-len": ["warn", {"code": 180, "comments": 180}],
    "max-lines": ["warn", 500],
    "max-lines-per-function": ["warn", 200],
    "max-nested-callbacks": ["error", 10],
    "max-params": ["error", {"max": 5}],
    "max-statements-per-line": ["error", {"max": 1}],
    "newline-per-chained-call": ["error", {"ignoreChainWithDepth": 5}],
    "no-bitwise": "error",
    "no-inline-comments": "error",
    "no-mixed-operators": [
      "error",
      {
        "groups": [
          ["+", "-", "*", "/", "%", "**"],
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["in", "instanceof"]
        ],
        "allowSamePrecedence": true
      }
    ],
    'no-mixed-spaces-and-tabs': ["error", "smart-tabs"],
    "no-multi-assign": "error",
    "no-multiple-empty-lines": ["error", {"max": 1, "maxEOF": 1, "maxBOF": 0}],
    "no-new-object": "error",
    "no-trailing-spaces": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "object-curly-spacing": ["error", "always"],
    'padding-line-between-statements': [
      "error",
      {blankLine: "always", prev: "*", next: "return"}
    ],
    "quotes": ["error", "double", {"allowTemplateLiterals": true}],
    "semi": ["error", "always"],
    "semi-spacing": "error",
    "semi-style": ["error", "last"],
    "space-before-blocks": ["error", "always"],
    "no-case-declarations": "off"
  }
};
