/**
 * Documentation
 * {@link https://eslint.org/docs/latest/}
 */

module.exports = {
  env: { browser: true, es6: true, node: true },
  /**
   * Extends
   *
   * eslint:recommended : eslint 추천 rule set
   * plugin:prettier/recommended : eslint-config-prettier 추천 rule set
   */
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  root: true, // 현재 설정 파일이 root임을 명시하는 옵션. true로 설정하면 상위 설정 파일 찾기를 여기서 멈춘다.
  rules: {
    /**
     * Rules reference
     * {@link https://eslint.org/docs/latest/rules}
     *
     * array-bracket-spacing : 대괄호 안에서 간격 허용 여부
     * camelcase : 카멜 케이스 작명 방식 강제
     * comma-dangle : trailing commas 사용 여부
     * computed-property-spacing : 계산된 인자(obj[property]) 표시 시 괄호 안에 공백문자 허용 여부
     * eqeqeq : 일치 연산자(===) 사용 강제. 동등 연산자(==) 사용 금지
     * generator-star-spacing : 제네레이터 함수에서 별표의 위치를 강제
     * new-cap : 'new' 연산자로 인스턴스 생성 시 constructor 함수명의 첫 글자를 대문자로 강제
     * no-array-constructor : Array() 생성자에 배열 리터럴 생성법을 사용해서 배열 생성 금지
     * no-console : 콘솔 사용 금지
     * no-debugger : debugger 사용 금지
     * no-duplicate-imports : 동일한 모듈에서 import를 여러 번 할 때 import문을 한 번만 사용하도록 강제. e.g. import { apple, banana } from 'fruits'
     * no-extra-semi : 불필요한 세미콜론 사용 금지
     * no-inner-declarations : nested block에서 변수 또는 함수 선언 금지
     * no-multiple-empty-lines : 여러 줄 공백 금지
     * no-nested-ternary : 중첩 삼항 연산자 금지
     * no-new-object : new Object로 객체 생성 금지
     * no-undef : 정의하지 않은 전역 변수는 /✱ global ... ✱/ 주석에 명시해야 사용 가능하도록 강제
     * no-underscore-dangle : 식별자 뒤에 언더스코어를 붙이지 못하도록 강제
     * no-unused-vars : 사용하지 않는 변수 금지
     * no-useless-escape : 불필요한 escape 문자 사용 금지. extends에 eslint:recommended를 설정했을 때 동작한다
     * no-var : var로 변수 선언 금지
     * object-curly-spacing : 중괄호 안에 간격 삽입. objectsInObjects: false 옵션은 사용할 수 없음. prettier의 bracketSpacing에 의해 덮어쓰기 되기 때문
     * prefer-const : 재할당이 이루어지지 않는 변수에 let을 사용했을 경우 const로 변경하도록 강제
     * prefer-rest-params : 함수의 parameter에서 arguments 객체 대신 rest parameter를 사용하도록 강제. e.g. function (...args) {}
     * quotes : 따옴표를 작은따옴표, 큰따옴표, 백틱 중 한 가지만 사용하도록 강제
     * semi : 세미콜론 사용 여부. 'never' 옵션은 semicolon before self-invoking function을 제외한 모든 세미콜론 사용 금지
     * sort-imports : import 정렬. ignoreDeclarationSort는 항상 true로 할 것. false로 하면 import 정렬 관련 경고가 발생하는데, 이 경고를 해결할 방법이 없다.
     * space-before-function-paren : 함수 선언 시 함수명과 괄호 사이에 간격 추가를 강제
     */
    'array-bracket-spacing': 'warn',
    camelcase: ['error', { properties: 'never' }],
    'comma-dangle': ['warn', 'always-multiline'],
    'computed-property-spacing': ['warn', 'never', { enforceForClassMembers: false }],
    eqeqeq: 'error',
    'generator-star-spacing': ['warn', 'after'],
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'no-duplicate-imports': 'error',
    'no-inner-declarations': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-nested-ternary': 'warn',
    'no-new-object': 'warn',
    'no-undef': 'error',
    'no-underscore-dangle': 'error',
    'no-unused-vars': ['error', { args: 'after-used' }],
    'no-useless-escape': 'warn',
    'no-var': 'error',
    'object-curly-spacing': ['warn', 'always'],
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'never'],
    'sort-imports': [
      'warn',
      {
        allowSeparatedGroups: true,
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    /**
     * Eslint-config-prettier options
     * {@link https://github.com/prettier/eslint-plugin-prettier#options}
     *
     * 공식 문서에서는 옵션 설정을 추천하지 않는다. prettier-vscode 확장 프로그램이 .prettierrc 파일을 읽고 이곳에 있는 옵션은 무시하는데, 이 때문에 예상치 못한 문제가 발생할 수도 있기 때문.
     *
     * prettier : 이곳에 설정한 옵션은 .prettier 파일에 있는 옵션을 덮어쓴다.
     */
    'prettier/prettier': 'warn',
  },
}
