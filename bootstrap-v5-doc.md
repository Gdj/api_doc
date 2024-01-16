# bootstrap-v5-doc

- [Grid system](#grid-system)
- [passion](#passion)
- [color](#color)
- [display](#display)
- [text](#text)
- [overflow](#overflow)
- [position](#position)
- [sizing](#sizing)
- [spacing](#spacing)
- [object fit](#object-fit)
- [script UI](#script-ui)
  + [Modal](#modal)
- [ plugin API link](#plugin-api-link)

## CDN
``` html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" ></script>
```

---------

## Grid system
  ### container
  - [API container](https://getbootstrap.com/docs/5.3/layout/containers/)
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
  - [API grid](https://getbootstrap.com/docs/5.3/layout/grid/)
  - 사용:
    ``` html  
    <div class="row"> 
      <div class="col">
      <div class="col">
    </div> 
    ```
  - 간격 
    + `.row` <= 적용  
    + `.col` <= 반영
    <table>
      <thead>
        <tr> 
          <th>class</th>
          <th>descriptions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>g-0, ~5 </td>
          <td>$var : [0rem, 0.25rem, 0.5rem, 1rem, 1.5rem, 3.rem] <br>
             margin-top:$var; padding-left: calc($var * .5); padding-right: calc($var * .5); 
          </td>
        </tr>
        <tr>
          <td>gy-0, ~5 </td>
          <td>$var : [0rem, 0.25rem, 0.5rem, 1rem, 1.5rem, 3.rem] <br>
             margin-top:$var; 
          </td>
        </tr>
        <tr>
          <td>gx-0, ~5 </td>
          <td>$var : [0rem, 0.25rem, 0.5rem, 1rem, 1.5rem, 3.rem] <br>
            padding-left: calc($var * .5); padding-right: calc($var * .5); 
          </td>
        </tr>
      </tbody>
    </table>

  - 반응형 크기 auto : `col`
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
          <th>컬럼 반응형 크기</th>
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

  - 강제 위치
    + `.order-last`  : 컬럼 위치 강제로 뒤로 보내기
    + `.order-first` : 컬럼 위치 강제로 앞으로 보내기

  - Horizontal 정렬  
    + `.row` <= 적용  
    + `.col` <= 반영   
  | class                    | descriptions         |
  | ------------------------ | -------------------- |
  | justify-content-start    | 왼쪽으로 정렬         |
  | justify-content-center   | 중앙으로 정렬         |
  | justify-content-end      | 오른쪽으로 정렬       |
  | justify-content-around   | 좌우 고정비율 간격    |
  | justify-content-between  | 양끝 정렬             |
  | justify-content-evenly   | 양끝 `.col` 동일 비율 |

  - Vertical 정렬  
    + `.row` <= 적용  
    + `.col` <= 반영   
  | class                | descriptions        |
  | -------------------- | ------------------- |
  | align-items-start    | 상단으로 정렬        |
  | align-items-center   | 중앙으로 정렬        |
  | align-items-end      | 하단으로 정렬        |
      
  - Vertical self 정렬  
    + `.col` <= 적용, 반영   
  | class                | descriptions        |
  | -------------------- | ------------------- |
  | align-self-start     | 상단으로 정렬        |
  | align-self-center    | 중앙으로 정렬        |
  | align-self-end       | 하단으로 정렬        |

  ### .grid
  - [API css grid](https://getbootstrap.com/docs/5.3/layout/css-grid/)
  - 사용:
  ``` html
    <div class="grid text-center">
      <div class="g-col-6">.g-col-6</div>
      <div>1</div>
      <div>1</div>
    </div>
  ```
  - 간격 
    + `.row` <= 적용  
    + `.col` <= 반영
    <table>
      <thead>
        <tr> 
          <th>class</th>
          <th>descriptions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>gap-0, ~5 </td>
          <td>$var : [0rem, 0.25rem, 0.5rem, 1rem, 1.5rem, 3.rem] <br>
            gap: $var; (X, Y)
          </td>
        </tr>
        <tr>
          <td>row-gap-0, ~5 </td>
          <td>$var : [0rem, 0.25rem, 0.5rem, 1rem, 1.5rem, 3.rem] <br>
            row-gap: $var; (Y)
          </td>
        </tr>
        <tr>
          <td>column-gap-0, ~5 </td>
          <td>$var : [0rem, 0.25rem, 0.5rem, 1rem, 1.5rem, 3.rem] <br>
             column-gap: $var; (X) 
          </td>
        </tr>
      </tbody>
    </table>

  - 컬럼 시작 :  `g-start-(1~12)`, `grid-column-start`
  - 컬럼 종료 :  `g-end-(1~12)`, `grid-column-end`

---------

## passion
  ### flex
  - [API flex](https://getbootstrap.com/docs/5.3/utilities/flex/)
  ``` html
    <div class="d-flex flex-XXX">...</div>
    <div class="d-flex justify-content-XXX">...</div>
    <div class="d-flex align-items-XXX">...</div>
  ```
  #### - Wrapping (flex-wrap)
  | class                    | descriptions                  |
  | ------------------------ | ----------------------------- |
  | `flex-nowrap`            | (default) 한 라인으로 정렬     |
  | `flex-wrap`              | 넘치면 줄바꿈 되어 정렬         |


  #### - justify content (justify-content)
  | class                    | descriptions                        |
  | ------------------------ | ----------------------------------- |
  | justify-content-start    | → 좌측정렬                           |
  | justify-content-end      | ← 우측정렬                           |
  | justify-content-center   | ↔ 중앙정렬                           |
  | justify-content-between  |┃ ↔ ┃ 양끝정열                        |
  | justify-content-around   |┃ ↔ ┃ 컨텐츠 여백 동일 하게 정렬       |
  | justify-content-evenly   |┃ ↔ ┃ 컨텐츠 중복 여백 동일하게 정렬   |


  #### - Align items (align-items)
  | class                    | descriptions                        |
  | ------------------------ | ----------------------------------- |
  | align-items-start        | ↓ 상단 에서부터 정렬                 |
  | align-items-end          | ↑ 하단 에서부터 정렬                 |
  | align-items-center       | ↕ 중앙 에버부터 정렬                 |
  | align-items-stretch      | ↕  컨텐츠 크기 채움                  |


  #### fill (flex)   
  - 좌우 fill & Auto margins (item)  

  | class                | descriptions                                                |
  | -------------------- | ------------------------------------------------------------|
  | flex-fill            | 수평 요소를 컨테이너 크기만큼 채움  ( flex: 1 1 au to)         |
  | flex-grow-1          | 최대크기 ↑ 커짐                    ( flex-grow: 1 )          |
  | flex-shrink-1        | 최소크기 ↑ 작아짐                  ( flex-shrink: 1 )        |
  | ms-auto              | 왼쪽에 있는 아이템 왼쪽으로 밀      ( margin-left: auto )     |
  | me-auto              | 오르쪽에 있는 아이템 오른쪽으로 밀기 ( margin-right: auto )    | 
  | mt-auto              | 왼쪽에 있는 아이템 위로로 밀기      ( margin-top: auto )       |
  | mb-auto              | 오른쪽에 있는 아이템 아래로 밀기    ( margin-bottom: auto )    |
  | over-1 ~ 5           | 아이템 순서                                                  | 

  #### Align self (align-self : flex-XXX)   
  - 상하 Align self (item)    

  | class                | descriptions        |
  | -------------------- | ------------------- |
  | align-self-start     | 상단으로 정렬        |
  | align-self-end       | 하단으로 정렬        |
  | align-self-center    | 중앙으로 정렬        |
  | align-self-baseline  | 기준선              |
  | align-self-stretch   | 영역 채우기          |

  

  ### float
  - [API float](https://getbootstrap.com/docs/5.3/utilities/float/)
  - .clearfix > ( .float-start, .float-end ) : clearfix 하위 클래스

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

---------

## color
  ### typo & backgound
  - text- : [API colors](https://getbootstrap.com/docs/5.3/utilities/colors/) 
  - bg-   : [API background](https://getbootstrap.com/docs/5.3/utilities/background/)
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
  - [API borders](https://getbootstrap.com/docs/5.3/utilities/borders/)
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

---------

## display
  - [API display](https://getbootstrap.com/docs/5.3/utilities/display/)
  - 기본 사용 : `d-inline-block, d-inline, d-block, d-none`
  - 반응형 사용 : `d-(sm, md, lg, xl, xxl)-block` 

---------

## text 
  - [API text](https://getbootstrap.com/docs/5.3/utilities/text/)
  ### 폰트 크기
  font-size
  - (.fs-1 ~ .fs-6)
  
  ### 줄간격 (`line-height`)
  - (lh-1, lh-sm, lh-base, lh-lg)
  
  ### 텍스트 weight & italics
  ``` html  
  <p class="fw-bold">(700)Bold text.</p>
  <p class="fw-bolder">(bolder)Bolder weight text (relative to the parent element).</p>
  <p class="fw-semibold">(600)Semibold weight text.</p>
  <p class="fw-medium">(500)Medium weight text.</p>
  <p class="fw-normal">(400)Normal weight text.</p>
  <p class="fw-light">(300)Light weight text.</p>
  <p class="fw-lighter">(lighter)Lighter weight text (relative to the parent element).</p>
  <p class="fst-italic">Italic text.</p>
  <p class="fst-normal">Text with normal font style</p>
  ```
  ### Text decoration
  - `text-decoration-underline`    : 언더라인
  - `text-decoration-line-through` : 쉬소선
  - `text-decoration-line-none`    : 데코 레이션 삭제

  ### 텍스트 넘침
  - 단어 줄바꿈 : `.text-wrap`
  - 줄바꿈 안함 : `.text-nowrap`
  - 강제 줄바꿈 : `.text-break`
  - 말줄임 (d-inline-block) : `.text-truncate`

---------

## overflow
  - [API Overflow](https://getbootstrap.com/docs/5.3/utilities/overflow/)
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

---------

## position
  - [API position](https://getbootstrap.com/docs/5.3/utilities/position/)
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

---------

## sizing
  - [API sizing](https://getbootstrap.com/docs/5.3/utilities/sizing/)
  - width, height : unit(%)
    <table>
      <thead>
        <tr> 
          <th> 종류 </th>
          <th> 25% </th>
          <th> 50% </th>
          <th> 75% </th>
          <th> 100% </th>
          <th> auto </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>width</th>
          <td>.w-25</td>
          <td>.w-50</td>
          <td>.w-75</td>
          <td>.w-100</td>
          <td>.w-auto</td>
        </tr>
        <tr>
          <th>height</th>
          <td>.h-25</td>
          <td>.h-50</td>
          <td>.h-75</td>
          <td>.h-100</td>
          <td>.h-auto</td>
        </tr>
      </tbody>
    </table>

  - other
    <table>
      <thead>
        <tr> 
          <th> max-width:100% </th>
          <th> max-height:100% </th>
          <th> width:100vw </th>
          <th> height:100vh</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>.mw-100</td>
          <td>.mh-100</td>
          <td>.vw-100</td>
          <td>.vh-100</td>
        </tr>
      </tbody>
    </table>

---------

## spacing
  - [API spacing](https://getbootstrap.com/docs/5.3/utilities/spacing/)
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

---------
    
## object fit
  - [API Object fit](https://getbootstrap.com/docs/5.3/utilities/object-fit/)
  ``` html
  <img src="..." class="object-fit-contain border rounded" alt="...">
  <img src="..." class="object-fit-cover border rounded" alt="...">
  <img src="..." class="object-fit-fill border rounded" alt="...">
  <img src="..." class="object-fit-scale border rounded" alt="...">
  <img src="..." class="object-fit-none border rounded" alt="...">
  ```
---------

## script UI
### Modal 
- [API Modal](https://getbootstrap.com/docs/5.3/components/modal/)
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

---------

## plugin API link
- [bootstrap5 doc](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [bootstrap5 doc(kr)](https://getbootstrap.kr/)
- [부트스트랩 테마(무료&유료)](https://startbootstrap.com/)
- [부트스트랩 테마(유료)](https://wrapbootstrap.com/)
- [부트스트랩 UI(무료)](https://www.codehim.com/category/bootstrap/)
- [에디터:summernote](https://summernote.org//)
- [경고창:sweetalert2](https://sweetalert2.github.io/)
- [bootstrap5-datepicker](https://www.codehim.com/bootstrap/bootstrap-text-input/bootstrap-5-datepicker-with-vanilla-js/)
- [Bootstrap5-select](https://www.cssscript.com/enhanced-select-box-bootstrap/)
