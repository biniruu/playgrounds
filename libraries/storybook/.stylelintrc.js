module.exports = {
  extends: [
    'stylelint-config-standard',
    //  'stylelint-config-standard-scss',
    'stylelint-config-prettier',
  ], // stylelint-config-prettier는 항상 마지막에 추가할 것. 이전 확장 규칙을 덮어쓰기 함으로써 prettier와 stylelint끼리 충돌하는 상황을 무마할 수 있다
  plugins: [
    // 'stylelint-scss',
    'stylelint-order',
  ],
  overrides: [
    {
      files: ['**/*.{html,jsx,svg,tsx}'],
      // customSyntax: 'postcss-html', // postcss를 사용하는 환경에서 stylelint(CssSyntaxError) 에러 발생 방지
      customSyntax: '@stylelint/postcss-css-in-js',
    },
  ],
  rules: {
    'alpha-value-notation': 'number', // rgba()에서 opacity를 % 대신 숫자로 표현
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'blockless-after-same-name-blockless'],
        ignore: ['after-comment', 'first-nested'],
        ignoreAtRules: ['else'],
      },
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }], // css 기본 문법 이외에 다른 @ 문법 사용 시 에러 발생
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-before': ['always'],
    'block-opening-brace-newline-after': ['always'],
    'color-function-notation': 'modern', // grb() 같은 컬러 함수를 modern 방식으로 표현 (legacy 방식이 더 편할 수도 있음)
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'comment-empty-line-before': [
      'always',
      { except: ['first-nested'], ignore: ['after-comment', 'stylelint-commands'] },
    ],
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': ['always', { except: ['after-custom-property', 'first-nested'] }],
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-trailing-semicolon': null, // This rule is recommanded because of conflict by semicolon rule between prettier and stylelint
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': ['always', { except: ['after-comment', 'after-declaration', 'first-nested'] }],
    'font-family-name-quotes': 'always-where-recommended',
    'function-comma-space-after': 'always-single-line',
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'length-zero-no-unit': true,
    'max-empty-lines': [1, { ignore: ['comments'] }],
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-query-list-comma-newline-after': 'never-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'no-descending-specificity': [true, { ignore: ['selectors-within-list'] }], // 이 옵션을 비활성할 수 있는 방법이 없음
    'no-extra-semicolons': true,
    'number-leading-zero': 'always',
    'number-max-precision': 10,
    'number-no-trailing-zeros': true,
    'order/properties-alphabetical-order': true,
    'property-case': 'lower',
    'rule-empty-line-before': ['always-multi-line', { except: ['after-single-line-comment', 'first-nested'] }],
    // 'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }], // scss 기본 문법 이외에 다른 @ 문법 사용 시 에러 발생
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always', // 'never'로 하면 "Unclosed string (CssSyntaxError)" 에러 발생. 아마도 eslint의 rule과 충돌하는 듯.
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-nested-pattern': '^&', // nested 문법을 사용할 때는 꼭 '&'를 붙여야 함
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['export'] }],
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep'] }],
    'selector-type-case': 'lower',
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements', 'default-namespace'],
        // ignoreNamespaces: ["/regex/", /regex/, "string"],
        // ignoreTypes: ["/regex/", /regex/, "string"],
      },
    ],
    'selector-list-comma-newline-after': 'always-multi-line',
    'string-quotes': 'single',
    'unit-case': 'lower',
    'value-keyword-case': ['lower', { ignoreKeywords: ['backgroundColor'] }],
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
  },
}
