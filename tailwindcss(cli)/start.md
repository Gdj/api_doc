# tailwindcss
  - nodejs : 14.21.0 


## tailwindcss CLI 설치 
  > https://tailwindcss.com/docs/installation
  - packckage.json 생성 : `npm init -y`
  - tailwindcss 설치 : `npm install -D tailwindcss`
  - tailwind.config.js 생성 : `npx tailwindcss init`
  - tailwind.config.js 파일 경로 확인.
    ``` js
    module.exports = {
      content: ["./src/**/*.{html,js}"],
      theme: {
        extend: {},
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
  - Tailwindcss 변환실행 : `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`
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
  - 실행 : `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`