# tailwindcss
  - nodejs : 18.17.0 

## tailwindcss CLI 설치 
  > https://tailwindcss.com/docs/installation
  - packckage.json 생성 : `npm init -y`
  - tailwindcss 설치 : `npm install -D tailwindcss`
  - tailwind.config.js 생성 : `npx tailwindcss init -p`
  - tailwind.config.js 파일 경로 확인.
    ``` js
    module.exports = {
      /* 적용될 경로 */
      content: ["./src/**/*.{html,js}"],
      theme: {
        /* 기존 선언 변경*/
        fontSize : {
          '3xl' : "23px"
        },
        /* 확작 새로운 선언 추가 */
        extend: {
          fontSize : {
            'fs33' : "33px"
          },
        },
      },
      plugins: [],
    }
    ```
  - src/input.css 생성
    ``` css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
    ```
  - src/index.html 생성
    ``` html
      <!doctype html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/dist/output.css" rel="stylesheet">
      </head>
      <body>
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
      </body>
      </html>
    ```
  ### Tailwindcss node 실행
    - Tailwindcss 변환실행 : `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`
  ### Tailwindcss gulp 실행
    - 추가설치 : `npm i -D gulp-postcss`
    - gulpfile.js
    ``` js
      import gulp         from 'gulp';
      import gulpSass     from "gulp-sass";
      import nodeSass     from "node-sass";
      let sass            = gulpSass(nodeSass);
      import postCSS      from "gulp-postcss";
      import tailwindcss  from "tailwindcss";
      ...


      function styles() {
        return gulp.src("소스경로" + "*.scss")
          .pipe(sass().on("error", sass.logError))
          .pipe(postCSS([tailwindcss]))
          .pipe(gulp.dest("빌드출력경로"))
      }

      function watch(){
        gulp.watch("소스경로" + "*.scss", styles);
      }

      export const dev = gulp.series([styles, watch]);
    ```
    - 실행 : `gulp dev`
  ### Tailwindcss vite 실행 (tailwindcss DOC)[https://tailwindcss.com/docs/guides/vite]
    - 추가설치 : `npm install -D tailwindcss postcss autoprefixer`
    - tailwind.config.js
    ``` js
      /** @type {import('tailwindcss').Config} */
      export default {
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      }
    ```
    - 실행 : `npm run dev`
