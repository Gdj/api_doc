# daisyUI
  > daisyUI as a Tailwind CSS
  > URL : [https://daisyui.com/](https://daisyui.com/)

**INDEX**

  - [◎ Setting](#setting)
  - [◎ Color](#Color)
  - [◎ Themes](#themes)
  - [◎ Modal](#modal)

## Setting
- CDN :
```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.2/dist/full.min.css" rel="stylesheet" type="text/css"/>
<script src="https://cdn.tailwindcss.com"></script>
```
- install :
  + tailwind css, postcss 설치 : `npm install -D tailwindcss postcss autoprefixer`
  + tailwind css, postcss 세팅 : `npx tailwindcss init`
    **postcss.config.js**
    ``` js
      export default {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      }

    ```
    **tailwind.config.js**
    ``` js
    module.exports = {
      content: ["./src/**/*.{html, vue, js, jsx, ts, tsx}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```
    **src/assets/main.css**
    ``` css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
    ```
  + daisUI 설치 (postcss8 이상버젼필요)
    `npm i -D daisyui@latest` or `yarn add -D daisyui@latest`
    **tailwind.config.js**
    ``` js
      import daisyui from "daisyui"
      module.exports = {
        plugins: [
          daisyui,
        ],
      }
    ```


## ◎ Color  <a name="color"></a>
  - bg-{COLOR_NAME}
  - btn-XXX, bg-XXX, text-XXX, accent-XXX, placeholder-XXX, decoration-XXX

  <table>
    <tbody>
      <tr>
        <td style="background-color:#5f5cff">primary</td>
        <td style="background-color:#edf1ff">primary-content</td>
        <td style="background-color:#f53199">secondary</td>
        <td style="background-color:#fae6f1">secondary-content</td>
      </tr>
      <tr>
        <td style="background-color:#00d4bb">accent</td>
        <td style="background-color:#084d49">accent-content</td>
        <td style="background-color:#08080a">neutral</td>
        <td style="background-color:#e6e6e8">neutral-content</td>
      </tr>
      <tr>
        <td style="background-color:#00d4bb">accent</td>
        <td style="background-color:#084d49">accent-content</td>
        <td style="background-color:#08080a">neutral</td>
        <td style="background-color:#e6e6e8">neutral-content</td>
      </tr>
      <tr>
        <td style="background-color:#00bbff">info</td>
        <td style="background-color:#042e49">info-content</td>
        <td style="background-color:#00d390">success</td>
        <td style="background-color:#004c39">success-content</td>
      </tr>
      <tr>
        <td style="background-color:#fcb700">warning</td>
        <td style="background-color:#793205">warning-content</td>
        <td style="background-color:#ff627d">error</td>
        <td style="background-color:#4b0319">error-content</td>
      </tr>
    </tbody>
  </table>

## ◎ Themes  <a name="themes"></a>
  - [AIP Themes](https://daisyui.com/docs/themes/)
  - [CDN Themes](https://reacthustle.com/blog/how-to-modify-daisyui-theme-using-cdn)

## ◎ Modal <a name="modal"></a>
  - [API modal](https://daisyui.com/components/modal/)

### default modal (script)

  ```html
  <!-- The button to open modal -->
  <label for="my-modal-4" class="btn">open modal</label>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my-modal-4" class="modal-toggle" />
  <label for="my-modal-4" class="modal cursor-pointer">
    <label class="modal-box relative" for="">
      <label for="my-modal-4" class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
      <p class="py-4">
        You've been selected for a chance to get one year of subscription to use
        Wikipedia for free!
      </p>
    </label>
  </label>
  <script>
    var modal_4 = document.querySelector("#my-modal-4");
    modal_4.addEventListener("change", function ($e) {
      console.log($e.target.checked);
    });
    // 모달 open  : modal_4.checked = true;
    // 모달 close : modal_4.checked = false;
  </script>
  ```

### modal custom (script)

  ```html
  <style>
    .modal.show {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
  </style>

  <button onClick="popupMenu(true)" class="btn">open modal 커스텀</button>
  <div id="custom-modal" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">title</h3>
      <p class="py-4">
        You've been ne year of subscription to use Wikipedia for free!
      </p>
      <div class="modal-action">
        <button onClick="popupMenu(false)" class="btn">닫기</button>
      </div>
    </div>
  </div>

  <script>
    var modalEl = document.getElementById("custom-modal");
    function popupMenu($b) {
      //modalEl.classList.toggle('show');
      if ($b) {
        modalEl.classList.add("show");
      } else {
        modalEl.classList.remove("show");
      }
    }
  </script>
  ```
