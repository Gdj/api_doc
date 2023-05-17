# bootstrap-v5-doc

- [◎ Grid system](#-grid-system)
- [◎ 정열](#-정열)
- [◎ 색](#-색)
- [◎ display](#-display)
- [◎ text](#-text)
- [◎ overflow](#-overflow)
- [◎ position](#-position)
- [◎ sizing](#-sizing)
- [◎ Object fit](#-object-fit)
- [◎ plugin & api](#-plugin-api)

## CDN
``` html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" ></script>
```


## ◎ Grid system
  ### container
  - [AIP container](https://getbootstrap.com/docs/5.3/layout/containers/)
  - 기본크기 : `.container`
  - 크기변형 : `.container-(sm, md, lg, xl, xxl)`
   <table>
      <thead>
        <tr> 
          <th> 크기 </th>
          <th> ＜576px </th>
          <th> ≥576px </th>
          <th> ≥768px </th>
          <th> ≥992px </th>
          <th> ≥1200px </th>
          <th> ≥1400px </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>.container</th>
          <td>100%</td>
          <td>540px</td>
          <td>720px</td>
          <td>960px</td>
          <td>1140px</td>
          <td>1320px</td>
        </tr>
        <tr>
          <th>.container-fluid</th>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
        </tr>
      </tbody>
    </table>

  ### .row
  - [AIP grid](https://getbootstrap.com/docs/5.3/layout/grid/)
  - 사용:
    ``` html  
    <div class="row"> 
      <div class="col">
      <div class="col">
    </div> 
    ```
  - 크기 auto : `col`
    <table>
      <thead>
        <tr> 
          <th> 크기 </th>
          <th> ＜576px </th>
          <th> ≥576px </th>
          <th> ≥768px </th>
          <th> ≥992px </th>
          <th> ≥1200px </th>
          <th> ≥1400px </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>컬럼크기</th>
          <td>.col-</td>
          <td>.col-sm-</td>
          <td>.col-md-</td>
          <td>.col-lg-</td>
          <td>.col-xl-</td>
          <td>.col-xxl-</td>
        </tr>
        <tr>
          <th>여백크기</th>
          <td>.offset-</td>
          <td>.offset-sm-</td>
          <td>.offset-md-</td>
          <td>.offset-lg-</td>
          <td>.offset-xl-</td>
          <td>.offset-xxl-</td>
        </tr>
      </tbody>
    </table>

  
  ### .grid
  - [AIP css grid](https://getbootstrap.com/docs/5.3/layout/css-grid/)
  - 사용:
  ``` html
    <div class="grid text-center">
      <div class="g-col-6">.g-col-6</div>
      <div>1</div>
      <div>1</div>
    </div>
  ```
  - 컬럼 시작 :  `g-start-(1~12)`, `grid-column-start`
  - 컬럼 종료 :  `g-end-(1~12)`, `grid-column-end`

  ### 여백
   - X : 1~5
  <table>
    <thead>
      <tr> 
        <th> 종류 </th>
        <th> 위 </th>
        <th> 아래 </th>
        <th> 왼쪽 </th>
        <th> 오른쪽 </th>
        <th> 상하 </th>
        <th> 좌우 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>margin</th>
        <td>.mt-X</td>
        <td>.mb-X-</td>
        <td>.ms-X-</td>
        <td>.me-X-</td>
        <td>.my-X-</td>
        <td>.mx-X-</td>
      </tr>
      <tr>
        <th>padding</th>
        <td>.pt-X</td>
        <td>.pb-X</td>
        <td>.ps-X</td>
        <td>.pe-X</td>
        <td>.py-X</td>
        <td>.px-X</td>
      </tr>
    </tbody>
  </table>

## ◎ 정열
  ### flex
  - [api flex](https://getbootstrap.com/docs/5.3/utilities/flex/)
  #### - justify content
  ``` html
  <div class="d-flex justify-content-start">...</div>
  <div class="d-flex justify-content-end">...</div>
  <div class="d-flex justify-content-center">...</div>
  <div class="d-flex justify-content-between">...</div>
  <div class="d-flex justify-content-around">...</div>
  <div class="d-flex justify-content-evenly">...</div>
  ```
  #### - Align items
  ``` html
  <div class="d-flex align-items-start">...</div>
  <div class="d-flex align-items-end">...</div>
  <div class="d-flex align-items-center">...</div>
  <div class="d-flex align-items-baseline">...</div>
  <div class="d-flex align-items-stretch">...</div>
  ```

  ### float
  - [api float](https://getbootstrap.com/docs/5.3/utilities/float/)
  - ( .float-start, .float-end ) .clearfix 

  ### vertical 
  ``` html  
    <span class="align-baseline">baseline</span>
    <span class="align-top">top</span>
    <span class="align-middle">middle</span>
    <span class="align-bottom">bottom</span>
    <span class="align-text-top">text-top</span>
    <span class="align-text-bottom">text-bottom</span>
  ```

  ### align text
  ``` html
    <p class="text-start">Start aligned text on all viewport sizes.</p>
    <p class="text-center">Center aligned text on all viewport sizes.</p>
    <p class="text-end">End aligned text on all viewport sizes.</p>
  ```

## ◎ 색
  ### typo & backgound
  - text- : [api colors](https://getbootstrap.com/docs/5.3/utilities/colors/) 
  - bg-   : [api background](https://getbootstrap.com/docs/5.3/utilities/background/)
  <table>
    <tr>
      <td><span style="background-color:#0D7efd">.bg-primary</span></td>
      <td><span style="background-color:#6ea8fe">.bg-primary-emphasis</span></td>
      <td><span style="background-color:#6c757d">.bg-secondary</span></td>
      <td><span style="background-color:#a7acb1">.bg-secondary-emphasis</span></td>
    </tr>
    <tr>
      <td><span style="background-color:#198754">.bg-success</span></td>
      <td><span style="background-color:#75b798">.bg-success-emphasis</span></td>
      <td><span style="background-color:#dc3545">.bg-danger</span></td>
      <td><span style="background-color:#ea868f">.bg-danger-emphasis</span></td>
    </tr>
    <tr>
      <td><span style="background-color:#ffc107">.bg-warning</span></td>
      <td><span style="background-color:#ffda6a">.bg-warning-emphasis</span></td>
      <td><span style="background-color:#0dcaf0">.bg-info</span></td>
      <td><span style="background-color:#6edff6">.bg-info-emphasis</span></td>
    </tr>
    <tr>
      <td><span style="background-color:#f8f9fa">.bg-light</span></td>
      <td><span style="background-color:#f8f9fa">.bg-light-emphasis</span></td>
      <td><span style="background-color:#212529; color:#ccc">.bg-dark</span></td>
      <td><span style="background-color:#dee2e6">.bg-dark-emphasis</span></td>
    </tr>
    <tr>
      <td><span style="background-color:#adb5bd">.bg-body</span></td>
      <td><span style="background-color:#ffffff">.bg-body-emphasis</span></td>
      <td><span style="background-color:#adb5bdbf">.bg-body-secondary</span></td>
      <td><span style="background-color:#adb5bd80">.bg-body-tertiary</span></td>
    </tr>
    <tr>
      <td><span style="background-color:#000000; color:#ccc" >.bg-black</span></td>
      <td><span style="background-color:#ffffff">.bg-white</span></td>
      <td><span style="background-color:#00000080">.bg-black-50</span></td>
      <td><span style="background-color:#ffffff80">.bg-white-50</span></td>
    </tr>
  </table>

  ### opacity
  - style : `style="--bs-text-opacity: .5;`
  - class : `text-opacity-75 text-opacity-50 text-opacity-25`
            `opacity-100 opacity-75 opacity-50 opacity-25`
  
  ### borders
  - [api borders](https://getbootstrap.com/docs/5.3/utilities/borders/)
  ``` html 
    <span class="border border-primary"></span>
    <span class="border border-primary-subtle"></span>
    <span class="border border-secondary"></span>
    <span class="border border-secondary-subtle"></span>
    <span class="border border-success"></span>
    <span class="border border-success-subtle"></span>
    <span class="border border-danger"></span>
    <span class="border border-danger-subtle"></span>
    <span class="border border-warning"></span>
    <span class="border border-warning-subtle"></span>
    <span class="border border-info"></span>
    <span class="border border-info-subtle"></span>
    <span class="border border-light"></span>
    <span class="border border-light-subtle"></span>
    <span class="border border-dark"></span>
    <span class="border border-dark-subtle"></span>
    <span class="border border-black"></span>
    <span class="border border-white"></span>
  ```



## ◎ display
  - [api display](https://getbootstrap.com/docs/5.3/utilities/display/)
  - 기본 사용 : `d-inline-block, d-inline, d-block, d-non`
  - 반응형 사용 : `d-(sm, md, lg, xl, xxl)-block` 


## ◎ text 
  - [api text](https://getbootstrap.com/docs/5.3/utilities/text/)
  ### 폰트 크기
  - (.fs-1 ~ .fs-6)
  
  ### 줄간격
  - (lh-1, lh-sm, lh-base, lh-lg)
  
  ### 폰트 weight & italics
  ``` html  
  <p class="fw-bold">Bold text.</p>
  <p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
  <p class="fw-semibold">Semibold weight text.</p>
  <p class="fw-medium">Medium weight text.</p>
  <p class="fw-normal">Normal weight text.</p>
  <p class="fw-light">Light weight text.</p>
  <p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
  <p class="fst-italic">Italic text.</p>
  <p class="fst-normal">Text with normal font style</p>
  ```

  ### 텍스트 넘침
  - 단어 줄바꿈 : `.text-wrap`
  - 줄바꿈 안함 : `.text-nowrap`
  - 강제 줄바꿈 : `.text-break`

## ◎ overflow
  - [api Overflow](https://getbootstrap.com/docs/5.3/utilities/overflow/)
  - overflow-y 
    ``` html
    <div class="overflow-auto">...</div>
    <div class="overflow-hidden">...</div>
    <div class="overflow-visible">...</div>
    <div class="overflow-scroll">...</div>
    ```
  - overflow-x 
    ``` html
    <div class="overflow-x-auto">...</div>
    <div class="overflow-x-hidden">...</div>
    <div class="overflow-x-visible">...</div>
    <div class="overflow-x-scroll">...</div>
    ```

## ◎ position
  - [api position](https://getbootstrap.com/docs/5.3/utilities/position/)
  - 속성 
    ``` html
    <div class="position-static">...</div>
    <div class="position-relative">...</div>
    <div class="position-absolute">...</div>
    <div class="position-fixed">...</div>
    <div class="position-sticky">...</div>
    ```
  - 위치(%)
    (.top-0, .start-50, .bottom-0, .end-50)
  - 위치 중심
    (.translate-middle, .translate-middle-x, .translate-middle-y)

## ◎ sizing
  - [api sizing](https://getbootstrap.com/docs/5.3/utilities/sizing/)
  - width : (w-25, w-50, w-75, w-100, w-auto) (25%, 50%, 75%, 100%)
  - height : (h-25, h-50, h-75, h-100, h-auto) (25%, 50%, 75%, 100%)
  - other :  
    max-width: (mw-100), max-width: (mh-100), width 100vw: (vw-100), height 100vh: (vh-100)

    
## ◎ Object fit
  - [api Object fit](https://getbootstrap.com/docs/5.3/utilities/object-fit/)
  ``` html
  <img src="..." class="object-fit-contain border rounded" alt="...">
  <img src="..." class="object-fit-cover border rounded" alt="...">
  <img src="..." class="object-fit-fill border rounded" alt="...">
  <img src="..." class="object-fit-scale border rounded" alt="...">
  <img src="..." class="object-fit-none border rounded" alt="...">
  ```

## ◎ Modal 
- [api Modal](https://getbootstrap.com/docs/5.3/components/modal/)
- 모달 크기 : 
  + 기본 설정없음 : 500px
  + .modal-sm : 300px
  + .modal-lg : 800px
  + .modal-xl : 1140px
  + .modal-fullscreen : 100%
    .modal-fullscreen-(sm, md, lg, xl, xxl)-down : 브라우져 < (576px, 768px, 992px, 1200px, 1400)
- sample
``` html
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Launch static backdrop modal
  </button>

  <!-- Modal -->
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>
```


## ◎ plugin & api
- [bootstrap5 doc](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [bootstrap5 doc(kr)](https://getbootstrap.kr/)
- [부트스트랩 테마(무료&유료)](https://startbootstrap.com/)
- [부트스트랩 테마(유료)](https://wrapbootstrap.com/)
- [부트스트랩 UI(무료)](https://www.codehim.com/category/bootstrap/)
- [에디터:summernote](https://summernote.org//)
- [경고창:sweetalert2](https://sweetalert2.github.io/)
- [bootstrap5-datepicker](https://www.codehim.com/bootstrap/bootstrap-text-input/bootstrap-5-datepicker-with-vanilla-js/)
- [Bootstrap5-select](https://www.cssscript.com/enhanced-select-box-bootstrap/)
