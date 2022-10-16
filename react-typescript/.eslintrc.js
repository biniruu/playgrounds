module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended', // 타입스크립트 추천 룰셋
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime', // If you are using the new JSX transform from React 17, you should enable this
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true }, // JSX 파싱을 위해 필요
    project: 'tsconfig.json', // parser: @typescript-eslint/parser를 활성화 하기 위해 꼭 필요
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
      },
    ], // 설명을 추가하는 조건으로 @ts-expect-error, @ts-ignore, @ts-nocheck, @ts-check 주석을 허용
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'error', // any 타입 사용 시 알림을 띄움
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unused-vars': 'error', // typescript는 트랜스파일 시 사용하지 않는 변수가 있으면 error를 발생시키기 때문에 warn으로 지정해봐야 의미 없다.
    '@typescript-eslint/no-var-requires': 'error', // typescript에서 var 변수 사용 시 에러 발생
    '@typescript-eslint/restrict-plus-operands': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    // 'react/destructuring-assignment': 'warn', // state, prop 등에 구조분해 할당 적용
    'react/jsx-curly-brace-presence': 'warn', // jsx 내 불필요한 중괄호 금지
    // 'react/jsx-curly-spacing': ['warn', { when: 'always', children: true, objectLiterals: 'never' }], // prettier와 충돌하여 사용할 수 없음
    'react/jsx-key': 'warn', // 반복문으로 생성하는 요소에 key 강제
    'react/jsx-no-useless-fragment': 'warn', // 불필요한 fragment 금지
    'react/jsx-pascal-case': 'warn', // 컴포넌트 이름은 PascalCase로
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowFunctions: true,
      },
    ], // 함수를 props로 넘길 수 있도록 허용
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-direct-mutation-state': 'warn', // state 직접 수정 금지
    'react/no-unescaped-entities': 'warn', // jsx 안에서 escape 되지 않은 entity 코드를 사용했을 때 경고 발생
    'react/no-unused-state': 'warn', // 사용되지 않는 state
    'react/prop-types': 'off', // typescript를 사용하면 필요없는 옵션
    'react/self-closing-comp': ['warn', { component: true, html: false }],
    'react/static-property-placement': ['error', 'static public field'], // defaultProps를 클래스 내부에 정의하도록 허용
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      // {
      //   additionHooks: '(useRecoilCallback|useRecoilTransaction_UNSTABLE)', // recoil 사용 시 필요
      // },
    ],
  },
  settings: {
    react: {
      version: 'detect', // eslint-plugin-react가 자동 리액트버전탐지
    },
  },
}
