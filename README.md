# BackEnd

## Need package

### eslint + prettier (airbnb)
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint // 단 8.22.0
- eslint-config-airbnb-base
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-prettier
- prettier

### jest
- jest
- @types/jest
- ts-jest

## Package.json scripts

- test: jest
- lint: eslint '.src/** /*.{ts,tsx,js,jsx}'
- lint:fix: eslint --fix '.src/** /*.{ts,tsx,js,jsx}'
