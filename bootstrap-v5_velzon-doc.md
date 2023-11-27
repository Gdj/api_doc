# Bootstrap-v5 Velzon
- [LAYOUT](#layout)
- [SIZING](#sizing)
- [SPACING](#spacing)
- [COLOR](#color)
- [TYPOGRAPHY](#typography)
- [BADGE](#badge)
- [BUTTON](#button)
- [TABLE](#table)
- [SCROLL](#scroll)
- [MODAL](#modal)

> `@` (확장된 요소)  
> [velzon sample URL](https://themesbrand.com/velzon/html/default/index.html)

---------

## LAYOUT
### row
> 12 그리드로 레이아웃 적용
> col-(컬럼크기)
  ``` html
  <div class="row"> 
    <div class="col-6">
    <div class="col-6">
  </div> 
  ```
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
        <td>.col-(컬럼크기)</td>
        <td>.col-sm-(컬럼크기)</td>
        <td>.col-md-(컬럼크기)</td>
        <td>.col-lg-(컬럼크기)</td>
        <td>.col-xl-(컬럼크기)</td>
        <td>.col-xxl-(컬럼크기)</td>
      </tr>
      <tr>
        <th>여백크기</th>
        <td>.offset-(컬럼크기)</td>
        <td>.offset-sm-(컬럼크기)</td>
        <td>.offset-md-(컬럼크기)</td>
        <td>.offset-lg-(컬럼크기)</td>
        <td>.offset-xl-(컬럼크기)</td>
        <td>.offset-xxl-(컬럼크기)</td>
      </tr>
    </tbody>
  </table>

### flex 속성 다루기
> d-flex 와 같이 선언

- 정렬 방향성
  | class                    | descriptions                  |
  | ------------------------ | ----------------------------- |
  | flex-nowrap              | (default) 한 라인으로 정렬     |
  | flex-wrap                | 넘치면 줄바꿈 되어 정          |


- 좌우 배치 
  | class                    | descriptions         |
  | ------------------------ | -------------------- |
  | justify-content-start    | 왼쪽으로 정렬         |
  | justify-content-center   | 중앙으로 정렬         |
  | justify-content-end      | 오른쪽으로 정렬       |
  | justify-content-around   | 좌우 고정비율 간격    |
  | justify-content-between  | 양끝 정렬             |
  | justify-content-evenly   | 양끝 `.col` 동일 비율 |

- 상하 배치
  | class                | descriptions        |
  | -------------------- | ------------------- |
  | align-items-start    | 상단으로 정렬        |
  | align-items-center   | 중앙으로 정렬        |
  | align-items-end      | 하단으로 정렬        |

> flex 자식 요소에 직접 적용
- 상하 Align self  (item)  
  | class                | descriptions        |
  | -------------------- | ------------------- |
  | align-self-start     | 상단으로 정렬        |
  | align-self-center    | 중앙으로 정렬        |
  | align-self-end       | 하단으로 정렬        |

- 좌우 fill (item)
  | class                | descriptions                       |
  | -------------------- | ---------------------------------- |
  | flex-fill            | 수평 요소를 컨테이너 크기만큼 채움    |
  | flex-grow-1          | 최대크기 ↑ 커짐                     |
  | flex-shrink-1        | 최소크기 ↑ 작아짐                   |
  | ms-auto              | 왼쪽에 있는 아이템 왼쪽으로 밀       |
  | me-auto              | 오르쪽에 있는 아이템 오른쪽으로 밀기  | 
  | mt-auto              | 왼쪽에 있는 아이템 위로로 밀기       |
  | mb-auto              | 오른쪽에 있는 아이템 아래로 밀기     |
  | over-1 ~ 5           | 아이템 순서                         |
  

---------

## SIZING
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
### Custom Sizing @
  - w-X: unit(% !important)
    <table>
      <tbody>
        <tr>
          <td>.w-10</td>
          <td>.w-15</td>
          <td>.w-20</td>
          <td>.w-22</td>
          <td>.w-25</td>
          <td>.w-30</td>
          <td>.w-40</td>
        </tr>
        <tr>
          <td>.w-45</td>
          <td>.w-50</td>
          <td>.w-55</td>
          <td>.w-60</td>
          <td>.w-70</td>
          <td>.w-80</td>
          <td>.w-auto</td>
        </tr>
      </tbody>
    </table>

  - wpx-X : 
    + interval : 10px 
    + range : 10~1000px
    + unic(px !important)
  - hpx-X : 
    + interval : 10px
    + range : 10~300px
    + unic(px !important)

---------    

## SPACING
  - magin, padding : X(1~5), [.25rem, .5rem, 1rem, 1.5rem, 3rem]
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
  
### Custom spacing @
  - magin : X(1~5)
  <table>
    <thead>
      <tr> 
        <th> -.25rem </th>
        <th> -.5rem </th>
        <th> -1rem </th>
        <th> -1.5rem </th>
        <th> -3.rem </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>.mt-m1</td>
        <td>.mt-m2</td>
        <td>.mt-m3</td>
        <td>.mt-m4</td>
        <td>.mt-m5</td>
      </tr>
      <tr>
        <td>.mb-m1</td>
        <td>.mb-m2</td>
        <td>.mb-m3</td>
        <td>.mb-m4</td>
        <td>.mb-m5</td>
      </tr>
    </tbody>
  </table>
  
  - padding
    + .py-2_5 : top, bottom (.75rem)
    + .ps-2_5 : left  (.75rem)
    + .pe-2_5 : right (.75rem)

---------

## color
  ### typo & backgound
  - text-색이름 : [primary, secondary, success, info, warning, danger, light, dark]
  - bg-색이름   : 
  <table>
    <tr>
      <td><span style="background-color:#405189">.bg-primary</span></td>
      <td><span style="background-color:#DADDE7">.bg-soft-primary</span></td>
      <td><span style="background-color:#3577f1">.bg-secondary</span></td>
      <td><span style="background-color:#DBE6FC">.bg-soft-secondary</span></td>
    </tr>
    <tr>
      <td><span style="background-color:#0ab39c">.bg-success</span></td>
      <td><span style="background-color:#D0EEEA">.bg-soft-success</span></td>
      <td><span style="background-color:#f06548">.bg-danger</span></td>
      <td><span style="background-color:#FCE3DE">.bg-soft-danger</span></td>
    </tr>
    <tr>
      <td><span style="background-color:#f7b84b">.bg-warning</span></td>
      <td><span style="background-color:#FBEFDC">.bg-soft-warning</span></td>
      <td><span style="background-color:#299cdb">.bg-info</span></td>
      <td><span style="background-color:#D8EDF9">.bg-soft-info</span></td>
    </tr>
    <tr>
      <td><span style="background-color:#f3f6f9">.bg-light</span></td>
      <td><span style="background-color:#FDFDFE">.bg-soft-light</span></td>
      <td><span style="background-color:#212529; color:#ccc">.bg-dark</span></td>
      <td><span style="background-color:#D4D5D5">.bg-soft-dark</span></td>
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
  ``` html 
    <span class="border"></span>
  ```

---------

## TYPOGRAPHY
### 폰트 크기
  | tag            | 크기           | tag            | 크기            |  tag          | 크기            | 
  | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- |
  | `h1`           | 2.03125rem     | `h2`           | 1.625rem       | `h3`           | 1.421875rem    |
  | `h4`           | 1.21875rem     | `h5`           | 1.015625rem    | `h6`           | 0.8125rem      | 

  | class          | 크기           | class          | 크기           | class           | 크기           | 
  | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- |
  | `fs-1`         | 2.03125rem     | `fs-2`         | 1.625rem       | `fs-3`         | 1.421875rem    |
  | `fs-4`         | 1.21875rem     | `fs-5`         | 1.015625rem    | `fs-6`         | 0.8125rem      | 
  
  | class-px       | class-px       | class-px       | class-px       |  class-px      | class-px       | 
  | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- |
  | `fs-10`        | `fs-11`        | `fs-12`        | `fs-13`        | `fs-14`        | `fs-15`        |
  | `fs-16`        | `fs-17`        | `fs-18`        | `fs-19`        | `fs-20`        | `fs-21`        | 
  | `fs-22`        | `fs-23`        | `fs-24`        | `fs-36`        | `fs-48`        |                |

### 폰트 굵기 (굵은 > 얇은)
  | class(700)     | class(bolder)  | class(600)     | class(500)   | class(400)   | class(300)   | class(lighter) | 
  | -------------- | -------------- | -------------- | ------------ | ------------ | ------------ | -------------- | 
  | `fw-bold`      | `fw-bolder`    | `fw-semibold`  | `fw-medium`  | `fw-normal`  | `fw-light`   | `fw-lighter`   | 

  |  class       | class        |  
  | ------------ | ------------ |  
  | `fst-italic` | `fst-normal` | 

### 라인 하이트 (class)
  | class          | class        | class        | class        | 
  | -------------- | ------------ | ------------ | ------------ | 
  | `lh-1`         | `lh-sm`      | `lh-base`    | `lh-lg`      | 

### 정열 horizontal  ↔  (class)
  | class          | class           | class        |
  | -------------- | --------------- | ------------ |
  | `text-start`   | `text-end`      | `text-center`|

### 정열 vertical ↕ (class)
  | class          | class           | class          |
  | -------------- | --------------- | -------------- |
  | `align-top`    | `align-middle`  | `align-bottom` |
  
### 데코 (class)
 - `fw-bold`                     : 굵게
 - `text-decoration-underline`   : 하단 라인
 - `text-decoration-line-through`: 취소선
 - `text-decoration-none`        : 데코 사용안함.
 - +`linkline`                   : 링크 하단 라인
 - +`link_line`                  : 링크 가상 라인 대상타겟이 (inline, inline-block) 이여야 하며, 폰트속성에 따라 다르게 보일 여지 있음. 

### 텍스트 넘침
- 단어 줄바꿈 : `.text-wrap`
- 줄바꿈 안함 : `.text-nowrap`
- 강제 줄바꿈 : `.text-break`
- 말줄임 (d-inline-block) : `.text-truncate`

### 말줄임 요소 `@`
> 말줄임 요소는 적용대상이 블럭 요소일때 적용됩니다. 인라인 요소일때는 `d-block`클래스 추가. 
 - `ellip`    : 한 줄 말줄임.
 - `ellip-2`  : 2줄 말줄임.



### 툴팁 플러그인 적용
> 툴팁 대상에 요소 추가 
 - data-bs-toggle="tooltip" data-bs-title="툴팁내용"  data-bs-html="true"

---------

## BADGE
  - type 1 (상태 기본)
  ``` html
    <span class="badge badge-outline-primary">기본값</span>
    <span class="badge badge-outline-info">신청 전</span>
    <span class="badge badge-outline-primary">임시저장</span>
    <span class="badge badge-outline-warning">대기</span>
    <span class="badge badge-outline-success">승인</span>
    <span class="badge badge-outline-danger">반려</span>
    <span class="badge badge-outline-light">종료</span>
  ```
  - type 2 (약어 상태)
  ``` html
    <span class="badge badge-soft-primary fs-11">옥</span>
  ```
  - type 3 (게시판 상태)
  ``` html
    <span class="badge badge-pill bg-danger" data-key="t-!">!</span>
    <span class="badge badge-pill bg-danger" data-key="t-N">N</span>
  ```

---------

## BUTTON
### color & style
  #### color
  > **.btn** <= 적용위치 | (일반적인사용) <= 적용범위  
  > `<button type="button" class="btn btn-primary">Primary</button>`
 
  | class          | class           | class        | class       |
  | -------------- | --------------- | ------------ | ----------- |
  | `btn-primary`  | `btn-secondary` | `btn-succes` | `btn-info`  |
  | `btn-warning`  | `btn-danger`    | `btn-dark`   | `btn-light` |

  > **.btn** <= 적용위치 | (테이블 안에사용) <= 적용범위

  | class               | class                | class             | class            |
  | ------------------- | -------------------- | ----------------- | ---------------- |
  | `btn-soft-primary`  | `btn-soft-secondary` | `btn-soft-succes` | `btn-soft-info`  |
  | `btn-soft-warning`  | `btn-soft-danger`    | `btn-soft-dark`   | `btn-soft-light` |

  #### style
  - 싱글 아이콘 버튼 : 
    ``` html
    <button type="button" class="btn btn-success btn-icon">
      <i class="ri-file-excel-2-line"></i>
    </button>
    ```
  - 아이콘 텍스트 버튼 : 
    ``` html
    <button type="button" class="btn btn-label btn-outline-primary">
      <i class="bx bxs-file-pdf label-icon align-middle fs-24 me-2"></i> 사용자 메뉴얼 (2.46 MB)
    </button>
    ```
  - 버튼 크기 : `btn-lg`, `btn-sm`
  - 버튼 그룹 
    ``` html
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-primary">Left</button>
      <button type="button" class="btn btn-primary">Middle</button>
      <button type="button" class="btn btn-primary">Right</button>
    </div>
    ```

---------

## TABLE

### table type `@`
  > **.table-card** <= 적용위치  
  > `<div class="table-responsive table-card list_table">`
                    

  | class               | 설명 / 기본정렬          | class             | 설명 / 기본정렬          | class             | 설명 / 기본정렬          |
  | ------------------- | ----------------------- | ----------------- | ----------------------- | ----------------- | ----------------------- |
  | `list_table`        | 리스트형 테이블 /        | `list_edit`       | 수정형 테이블 /          | `list_data`       | 테이터 테이블 /          |
  |                     | head:left, body:left    |                   | head:left, body:left    |                   | head:left, body:left    |


### table 정렬
- 가로 정렬 (텍스트 정렬과 동일)
  | class          | class           | class        |
  | -------------- | --------------- | ------------ |
  | `text-start`   | `text-end`      | `text-center`|

- 세로 정렬  (텍스트 정렬과 동일)
  | class          | class           | class          |
  | -------------- | --------------- | -------------- |
  | `align-top`    | `align-middle`  | `align-bottom` |

- 체크박스 
  ``` html
  <div class="form-check none_label_center"> 
    <input class="form-check-input js-CheckItem" type="checkbox" value="" id="tableCheck1-3"> 
    <label class="form-check-label" for="tableCheck1-3"></label> 
  </div>
  ```

---------

## SCROLL
### 플러그인 스크롤 
- Y, X 스크롤 : 적용타겟 `data-simplebar` 속성 추가, 속성에 맞는 크기 지정 style="max-height: **px" or style="max-width: **px"

### css 스크롤 `@`
- Y 적용타겟 `.scroll-type` 클래스 추가, style="max-height: **px"
- X 적용타겟 `.scroll-type.typeX` 클래스 추가, style="max-width: **px"

---------

## MODAL
### modal size
  > **.modal-dialog** <= 적용위치

  | class               | 크기                 | class             | 크기              |
  | ------------------- | -------------------- | ----------------- | ---------------- |
  | `modal-sm`          |  max 300px           | `modal-md`   `@`  | max 500px        |
  | `modal-lg`          |  max 800px           | `modal-xl`        | max 1140px       |
  | `modal-xxl`  `@`    |  max 1400px          | `modal-xxxl` `@`  | max 1800px       |
  | `modal-fullscreen`  |  max full            |                   |                  |

### modal body scroll 
  > **.modal-dialog** <= 적용위치
  - `modal-dialog-scrollable`

  > **.modal-body** <= 적용위치
  - +`scroll-type`

