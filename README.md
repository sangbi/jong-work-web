# 미사새벽도배 기본 소스

## 시작하기

```sh
npm install
npm run dev
```

## 검사 및 정적 빌드

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

`npm run build`는 `out/`에 정적 파일을 생성합니다. `npm start`는 serve로 이 폴더를 확인합니다. output: export 프로젝트에서는 next start를 사용하지 않습니다.

## 이번 수정

- layout.tsx의 클라이언트 선언, async 함수, 예시 API fetch를 제거했습니다.
- MUI ThemeProvider와 CssBaseline을 app/providers.tsx로 분리했습니다.
- page.tsx의 ssr:false 동적 import를 일반 import로 바꿨습니다.
- 서버 레이아웃에 한국어 제목·설명·Open Graph 정보를 추가했습니다.
- 전역 CSS를 연결하고 밝은 MUI 테마와 모바일 스타일을 적용했습니다.
- 기존 Topbar 대신 components/Header.tsx를 추가했습니다.
- 포트폴리오 문구를 매장 소개 기본 화면으로 바꿨습니다.
- 정적 export와 이미지 최적화 비활성화 설정을 유지하고 StrictMode를 활성화했습니다.
- lint 명령을 ESLint 직접 실행으로 바꾸고 typecheck 명령을 추가했습니다.
- start 명령은 정적 out 폴더를 제공하도록 변경했습니다.

## 내용 수정 위치

`src/content/site.ts`의 name, address, phone, kakaoUrl, hours를 수정하세요. 빈 연락처의 버튼은 자동으로 숨겨집니다.

`galleryImages`는 향후 사진 연결을 위한 타입과 데이터 자리입니다. 이번 기본 화면에서는 아직 갤러리를 렌더링하지 않습니다. src에 외부 샘플 URL 또는 public/images에 넣은 파일의 `/images/파일명.jpg` 경로를 사용할 수 있습니다. 샘플 사진은 isSample: true로 관리하고 실제 시공 사례와 구분해 표시하세요.

Pretendard 이름은 폰트 대체 목록이며 별도로 다운로드하지 않습니다. 현재 한국어 시스템 폰트로 표시됩니다.

실제 홈페이지 도메인을 정하면 metadataBase, canonical, 공유 이미지, sitemap을 추가하세요. 브랜드, 경력, 후기, 영업시간은 확인된 정보만 사용하세요.

원본의 .env.local과 .next 빌드 캐시는 전달 패키지에 포함하지 않았습니다. 기본 소개 화면에는 API나 환경변수가 필요하지 않습니다.

Next.js와 eslint-config-next는 15.5.27로 맞추고 package-lock.json으로 설치 버전을 고정했습니다.

검증 완료: npm run typecheck, npm run lint, npm run build 모두 통과. out/index.html 생성 확인. 브라우저 시각 검증은 수행하지 않았습니다.

Hydration 대응: providers.tsx에 @mui/material-nextjs/v15-appRouter의 AppRouterCacheProvider를 추가했습니다. @mui/material-nextjs 7 계열과 @emotion/cache를 설치합니다. 기존 개발 서버를 종료하고 npm install 후 npm run dev로 다시 실행하세요. 오류 화면의 서버/클라이언트 차이 내용은 아직 제공되지 않아 원인은 확정할 수 없습니다.
