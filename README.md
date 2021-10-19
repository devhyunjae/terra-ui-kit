# Directories

- `public/styles`
  - Color, Responsive size 등을 CSS Variables 로 이쪽에 선언합니다.
- `src/@terra-ui-kit/*`
  - 하위의 각각의 디렉토리들이 Package 입니다.
  - `npm run pack && npm run publish` 를 통해서 NPM 으로 배포할 수 있습니다.
- `.package.json` 은 만들어질 Package 들의 `package.json` 파일들에 공통적으로 선언될 내용들 입니다.
- `.packages.json` 은 Package 들의 리스트 입니다. (Glob Pattern 지원)
