# Bootstrap-v5 Velzon
- [LAYOUT](#layou)
- [COLOR](#color)
- [TYPOGRAPHY](#typography)
- [BADGE](#badge)
- [BUTTON](#button)
- [TABLE](#table)
- [MODAL](#modal)

> `@` (확장된 요소)  
> [velzon sample URL](https://themesbrand.com/velzon/html/default/index.html)

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

### d-flex
> d-flex 와 같이 선언
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

> d-flex 자식 요소에 적용
- 상하 배치
  | class                | descriptions        |
  | -------------------- | ------------------- |
  | align-self-start     | 상단으로 정렬        |
  | align-self-center    | 중앙으로 정렬        |
  | align-self-end       | 하단으로 정렬        |

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
  | class          | class        | class        | class        | class        | class        | class        | class        | class        |  
  | -------------- | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |  
  | `fw-bold`      | `fw-bolder`  | `fw-semibold`| `fw-medium`  | `fw-normal`  | `fw-light`   | `fw-lighter` | `fst-italic` | `fst-normal` | 

### 라인 하이트 (class)
  | class          | class        | class        | class        | 
  | -------------- | ------------ | ------------ | ------------ | 
  | `lh-1`         | `lh-sm`      | `lh-base`    | `lh-lg`      | 

### 정열 (class)
  | class          | class           | class        |
  | -------------- | --------------- | ------------ |
  | `text-start`   | `text-end`      | `text-center`|
  
### 데코 (class)
 - `fw-bold`                     : 굵게
 - `text-decoration-underline`   : 하단 라인
 - `text-decoration-line-through`: 취소선
 - `text-decoration-none`        : 데코 사용안함.
 - +`linkline`                   : 링크 하단 라인
 - +`link_line`                  : 링크 가상 라인 대상타겟이 (inline, inline-block) 이여야 하며, 폰트속성에 따라 다르게 보일 여지 있음. 


### 말줄임 요소 `@`
> 말줄임 요소는 적용대상이 블럭 요소일때 적용됩니다. 인라인 요소일때는 `d-block`클래스 추가. 
 - `ellip`    : 한 줄 말줄임.
 - `ellip-2`  : 2줄 말줄임.

### 툴팁 플러그인 적용
> 툴팁 대상에 요소 추가 
 - data-bs-toggle="tooltip" data-bs-title="툴팁내용"  data-bs-html="true"


---------

## BADGE
  - type 1
  ``` html
    <span class="badge badge-outline-info">신청 전</span>
    <span class="badge badge-outline-primary">임시저장</span>
    <span class="badge badge-outline-warning">대기</span>
    <span class="badge badge-outline-success">승인</span>
    <span class="badge badge-outline-danger">반려</span>
    <span class="badge badge-outline-light">종료</span>
  ```
  - type 2
  ``` html
    <span class="badge badge-soft-primary fs-11">옥</span>
  ```
  - type 3
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

- 세로 정렬 
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

