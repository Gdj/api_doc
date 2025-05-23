# tailwindcss-v3-doc

- [◎ Grid system](#grid-system)
- [◎ passion](#passion)
- [◎ color](#color)
- [◎ display](#display)
- [◎ typography](#typography)
- [◎ overflow](#overflow)
- [◎ position](#position)
- [◎ sizing](#sizing)
- [◎ spacing](#spacing)
- [◎ object fit](#object-fit)
- [◎ plugin API link](#plugin-api-link)

## start

- CDN
최신버젼, 특정버젼
```html
  <script src="https://cdn.tailwindcss.com/"></script>
  <script src="https://cdn.tailwindcss.com/3.4.3"></script>
```

- npm : (https://tailwindcss.com/docs/installation)
Tailwind CLI 로설치해서 사용할 때는 css 확장해서 사용할 수 있다.
```
  @layer components {
    .btn-primary {
      @apply py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75;
    }
  }
```

## ◎ Grid syste <a name="grid-system"></a>

### container

- [AIP container](https://tailwindcss.com/docs/container/)
- 기본크기 : `.container`
- 크기변형 : `(sm, md, lg, xl, 2xl):container`
  <table>
    <thead>
      <tr> 
        <th> 크기 </th>
        <th> ≥640px (sm) </th>
        <th> ≥768px (md)</th>
        <th> ≥1024px (lg)</th>
        <th> ≥1280px (xl)</th>
        <th> ≥1536px (2xl)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>.container</th>
        <td>100%</td>
        <td>768px</td>
        <td>1024px</td>
        <td>1280px</td>
        <td>1536px</td>
      </tr>
      <tr>
        <th>2xl:container</th>
        <td>100%</td>
        <td>100</td>
        <td>100</td>
        <td>100</td>
        <td>1536px</td>
      </tr>
    </tbody>
  </table>
- 자식 순번 : (부모:`justify-between`) `order-1~12`, `order-first`, `order-last`, `order-none`

### .grid

#### X axis

- [API grid](https://tailwindcss.com/docs/grid-template-columns)
- 부모요소 : `grid-cols-1~12`, `grid-cols-none`

```html
  <div class="grid grid-cols-4">
    <div>01</div>
    <!-- ... -->
    <div>09</div>
  </div
```

- 자식요소 : `col-auto`, `col-span-1~12`, `col-span-full`, `col-start-1~12`, `col-end-1~12`

#### Y axis

- 세로 축으로 샇기 : `grid-rows-1~12`, `grid-rows-none`

### .gap-X

- columns 간간격
- .5간격 : gap-0.5 ~ 3.5
- 1간격 : gap-4 ~ 12
- 2간격 : gap-14 ~ 16
<table>
  <tbody>
    <tr>
      <th>gap-0</th>
      <td>gap: 0px;</td>
      <th>gap-x-0</th>
      <td>column-gap: 0px;</td>
      <th>gap-y-0</th>
      <td>row-gap: 0px; </td>
    </tr>
    <tr>
      <th>gap-px</th>
      <td>gap: 1px;</td>
      <th>gap-x-px</th>
      <td>column-gap: 1px;</td>
      <th>gap-y-px</th>
      <td>row-gap: 1px;</td>
    </tr>
    <tr>
      <th>gap-0.5</th>
      <td>column-gap: 0.125rem; /* 2px */</td>
      <th>gap-x-0.5</th>
      <td>column-gap: 0.125rem; /* 2px */</td>
      <th>gap-y-0.5</th>
      <td>row-gap: 0.125rem; /* 2px */</td>
    </tr>
    <tr>
      <th>gap-1</th>
      <td>column-gap: 0.25rem; /* 4px */</td>
      <th>gap-x-1</th>
      <td>column-gap: 0.25rem; /* 4px */</td>
      <th>gap-y-1</th>
      <td>row-gap: 0.25rem; /* 4px */</td>
    </tr>
  </tbody>
</table>

### .columns-X

- [API columns](https://tailwindcss.com/docs/columns)
- 자식 요소의 크기 지정 (top-down, left-right)
- 크기 : columns-[XXrem]
- 크기 : columns-(1~12)
- 크기 : columns-auto
- 크기 : columns-XX
  <table>
    <tbody>
      <tr>
        <th>columns-3xs</th>
        <td>16rem; /* 256px */</td>
        <th>columns-2xs</th>
        <td>18rem; /* 288px */</td>
      </tr>
      <tr>
        <th>columns-xs</th>
        <td>20rem; /* 320px */</td>
        <th>columns-sm</th>
        <td>24rem; /* 384px */</td>
      </tr>
      <tr>
        <th>columns-md</th>
        <td>28rem; /* 448px */</td>
        <th>columns-lg</th>
        <td>32rem; /* 512px */</td>
      </tr>
      <tr>
        <th>columns-xl</th>
        <td>36rem; /* 576px */</td>
        <th>columns-2xl</th>
        <td>42rem; /* 672px */</td>
      </tr>
      <tr>
        <th>columns-3xl</th>
        <td>48rem; /* 768px */</td>
        <th>columns-4xl</th>
        <td>56rem; /* 896px */</td>
      </tr>
      <tr>
        <th>columns-5xl</th>
        <td>64rem; /* 1024px */</td>
        <th>columns-6xl</th>
        <td>80rem; /* 1152px */</td>
      </tr>
      <tr>
        <th>columns-7xl</th>
        <td>80rem; /* 1280px */</td>
        <th>-</th>
        <td>-</td>
      </tr>
    </tbody>
  </table>

## ◎ passion <a name="passion"></a>

### .flex

- [API grid](https://tailwindcss.com/docs/flex-basis)
- 부모 흐름: flex (flex-wrap, flex-row, flex-col, flex-nowrap)
- 부모 정열 :
  <table>
    <thead>
      <tr>
        <th>상하정열</th>
        <th>좌우정열</th>
        <th>상하</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>content-normal</td>
        <td>justify-normal</td>
        <td>-</td>
      <tr>
      <tr>
        <td>content-start</td>
        <td>justify-start</td>
        <td>items-start</td>
      <tr>
      <tr>
        <td>content-end</td>
        <td>justify-end</td>
        <td>items-end</td>
      <tr>
      <tr>
        <td>content-center</td>
        <td>justify-center</td>
        <td>items-center</td>
      <tr>
      <tr>
        <td>content-between</td>
        <td>justify-between</td>
        <td>-</td>
      <tr>
      <tr>
        <td>content-around</td>
        <td>justify-around</td>
        <td>-</td>
      <tr>
      <tr>
        <td>content-evenly</td>
        <td>justify-evenly</td>
        <td>-</td>
      <tr>
      <tr>
        <td>content-stretch</td>
        <td>justify-stretch</td>
        <td>items-stretch</td>
      <tr>
      <tr>
        <td>content-baseline</td>
        <td>-</td>
        <td>items-baseline</td>
      <tr>
  </table>

- 자식 크기변형 : `(sm, md, lg, xl, 2xl):basis-1/4`
- 자식 크기변형 flex , grow(늘리는 요소), shrink(줄이는 요소) :
- (flex-grow, flex-shrink, flex-basis)
  <table>
    <tbody>
      <tr>
        <th>flex-1</th>
        <td>flex: 1 1 0%; </td>
        <th>flex-auto</th>
        <td>flex: 1 1 auto; </td>
      </tr>
      <tr>
        <th>flex-initial</th>
        <td>flex: 0 1 auto;</td>
        <th>flex-none</th>
        <td>flex: none;</td>
      </tr>
    </tbody>
  </table>

```html
<div class="flex flex-wrap">
  <div class="basis-1/4 md:basis-1/2">01</div>
  <div class="basis-1/4 md:basis-1/2">02</div>
  <div class="basis-1/2 md:basis-1/1">03</div>
</div>
```

### float

    - [API float](https://tailwindcss.com/docs/float)
    - `float-right`, `float-left`, `float-none`

### clear

    - [API clear](https://tailwindcss.com/docs/clear)
    - `clear-left`, `clear-right`, `clear-both`, `clear-none`,

### align text

- [API align text](https://tailwindcss.com/docs/text-align)
  ```html
  <p class="text-left">Start aligned text on all viewport sizes.</p>
  <p class="text-right">Start aligned text on all viewport sizes.</p>
  <p class="text-justify">Start aligned text on all viewport sizes.</p>
  <p class="text-start">Start aligned text on all viewport sizes.</p>
  <p class="text-center">Center aligned text on all viewport sizes.</p>
  <p class="text-end">End aligned text on all viewport sizes.</p>
  ```

## ◎ color <a name="color"></a>

- [API customizing-colors](https://tailwindcss.com/docs/customizing-colors)
- [API background-color](https://tailwindcss.com/docs/background-color)
- "XXX" => [`text`, `decoration` `bg`, `border`, `divide`, `ring`, `shadow`, `accent`, `caret`]
- `XXX-inherit`, `XXX-current`, `XXX-transparent`, `XXX-black`, `XXX-white`
- XXX-XX-50, XXX-XX-100~900, XXX-XX-950
<table>
    <tr>
      <td style="background-color:#fb2c36">bg-red-500</td>
      <td style="background-color:#ff6900">bg-orange-500</td>
      <td style="background-color:#fe9a00">bg-amber-500</td>
      <td style="background-color:#f0b100">bg-yellow-500</td>
      <td>-</td>
    </tr>
    <tr>
      <td style="background-color:#7ccf00">bg-lime-500</td>
      <td style="background-color:#00c951">bg-green-500</td>
      <td style="background-color:#00bc7d">bg-emerald-500</td>
      <td style="background-color:#00bba7">bg-teal-500</td>
      <td>-</td>
    </tr>
    <tr>
      <td style="background-color:#00b8db">bg-cyan-500</td>
      <td style="background-color:#00a6f4">bg-sky-500</td>
      <td style="background-color:#2b7fff">bg-blue-500</td>
      <td style="background-color:#615fff">bg-indigo-500</td>
      <td>-</td>
    </tr>
    <tr>
      <td style="background-color:#8e51ff">bg-violet-500</td>
      <td style="background-color:#ad46ff">bg-purple-500</td>
      <td style="background-color:#e12afb">bg-fuchsia-500</td>
      <td style="background-color:#f6339a">bg-pink-500</td>
      <td style="background-color:#ff2056">bg-rose-500</td>
    </tr>
    <tr>
      <td style="background-color:#62748e">bg-slate-500</td>
      <td style="background-color:#6a7282">bg-gray-500</td>
      <td style="background-color:#71717b">bg-zinc-500</td>
      <td style="background-color:#737373">bg-neutral-500</td>
      <td style="background-color:#79716b">bg-stone-500</td>
    </tr>
  <table>
</table>

## ◎ display <a name="display"></a>

- [API display](https://tailwindcss.com/docs/display)
- 기본 사용 : `block`, `hidden` `inline-block`, `inline`, `flex`, `inline-flex`, `table`, `inline-table`, `table-cell`, `table-column`, `table-row` ...

## ◎ Typography <a name="typography"></a>

### font-size

- [API font-size](https://tailwindcss.com/docs/font-size)
- text-XX : `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2~9xl`
  <table>
    <tbody>
      <tr>
        <th>text-xs</th>
        <td>
          font-size: 0.75rem; /* 12px */
          line-height: 1rem; /* 16px */
        </td>
        <th>text-sm</th>
        <td>
          font-size: 0.875rem; /* 14px */
          line-height: 1.25rem; /* 20px */
        </td>
      </tr>
      <tr>
        <th>text-base</th>
        <td>
          font-size: 1rem; /* 16px */
          line-height: 1.5rem; /* 24px */
        </td>
        <th>text-lg</th>
        <td>
          font-size: 1.125rem; /* 18px */
          line-height: 1.75rem; /* 28px */
        </td>
      </tr>
      <tr>
        <th>text-xl</th>
        <td>
          font-size: 1.25rem; /* 20px */
          line-height: 1.75rem; /* 28px */
        </td>
        <th>text-2~9xl</th>
        <td>
          font-size: 1.5rem; /* 24px */
          line-height: 2rem; /* 32px */
          ~
          font-size: 8rem; /* 128px */
          line-height: 1;
        </td>
      </tr>
    </tbody>
  </table>
- 폰트크기에 자간변경 : `text-base/3~10`, `text-base/loose`, `text-base/[$px]`

### font-weight

- [API font-weight](https://tailwindcss.com/docs/font-weight)
- 100~900 : `font-thin`, `font-extralight`, `font-light`, `font-normal : 400`, `font-medium`,
  `font-semibold`, `font-bold`, `font-extrabold`, `font-black`
- font-[$$$]

### text-overflow

- [API font-clamp](https://tailwindcss.com/docs/text-overflow)
- 1줄 말줄임 : `truncate`, `text-ellipsis`, `text-clip`
- [API font-clamp](https://tailwindcss.com/docs/line-clamp)
- 라인 글자수재한 : `line-clamp-1~6`, `line-clamp-none`
- truncate

### whitespace

- [API whitespace](https://tailwindcss.com/docs/whitespace)
- `whitespace-normal`, `whitespace-nowrap`, `whitespace-pre`, `whitespace-pre-line`, `whitespace-pre-wrap`, `whitespace-break-spaces`

### word-break

- [API word-break](https://tailwindcss.com/docs/word-break)
- `break-normal`, `break-words`, `break-all`, `break-keep`

### fonw-height

- [API font-clamp](https://tailwindcss.com/docs/line-height)
- 라인 글자수재한 : `line-clamp-1~6`, `line-clamp-none`

### text-align

- [API text-align](https://tailwindcss.com/docs/text-align)
- text 정열 : `text-left`, `text-center`, `text-right`, `text-justify`, `text-start`, `text-end`,

### text-decoration

- [API text-decoration](https://tailwindcss.com/docs/text-decoration)
- decoration : `underline`, `overline`, `line-through` ,`no-underline`
- decoration-style : `decoration-[solid, double, dotted, dashed, wavy]`
- decoration Thickness : `decoration-[auto, from-font, 0~8]`
- underline-offset- : `underline-offset-[auto, 0~8]`

### text-transform

- [API text-transform](https://tailwindcss.com/docs/text-transform)
- `normal-case`, `uppercase`, `lowercase`, `cAPItalize`

### text-indent

- [API text-indent](https://tailwindcss.com/docs/text-indent)
- 들여쓰기 : `indent-px`, `indent-.5~3.5`, `indent-4~96`

### vertical-align

- [API vertical-align](https://tailwindcss.com/docs/vertical-align)
- `align-baseline`, `align-top`, `align-middle`, `align-bottom`, `align-text-top`, `align-text-bottom`, `align-sub`, `align-super`

### hyphens

- [API hyphens](https://tailwindcss.com/docs/hyphens)
- 단어줄바꿈 : `&shy;` `hyphens-none`, `hyphens-manual`, `hyphens-auto`

### content

- [API content](https://tailwindcss.com/docs/content)
- before 문자넣기 : `before:content-['Hello_World']`, `before:content-['Hello\_World']`

### list style Type

- [API list-style-type](https://tailwindcss.com/docs/list-style-type)
- ul 스타일 : `list-none`, `list-disc`, `list-decimal`, `list-image-[url(checkmark.png)]`

## ◎ overflow <a name="overflow"></a>

- [API overflow](https://tailwindcss.com/docs/overflow)
<table>
  <tbody>
    <tr>
      <td>overflow-auto</td>
      <td>overflow-hidden</td>
      <td>overflow-visible</td>
      <td>overflow-scroll</td>
    <tr>
    </tr>
      <td>overflow-x-auto</td>
      <td>overflow-y-auto</td>
      <td>overflow-x-hidden</td>
      <td>overflow-y-hidden</td>
    </tr>
    </tr>
      <td>overflow-x-scoll</td>
      <td>overflow-y-scoll</td>
      <td>overflow-x-visible</td>
      <td>overflow-y-visible</td>
    </tr>
    </tr>
      <td>overflow-clip</td>
      <td>overflow-x-clip</td>
      <td>overflow-y-clip</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## ◎ position <a name="position"></a>

- [API position](https://tailwindcss.com/docs/position)
- `static`, `fixed`, `absolute`, `relative`, `sticky`
- 위치 {inset|top|right|bottom|left|start|end}-{size}
  - .5간격 : XXX-0.5 ~ 3.5 : (width: 0.125rem; /_ 2px _/)
  - 1간격 : XXX-4 ~ 12
  - 2간격 : XXX-14 ~ 16
  <table>
    <tr>
      <td>inset-0</td>
      <td>top-0</td>
      <td>right-0</td>
      <td>bottom-0</td>
      <td>left-0</td>
    </tr>
    <tr>
      <td>XXX-x-0</td>
      <td>XXX-y-0</td>
      <td>XXX-px</td>
      <td>XXX-x-px</td>
      <td>XXX-y-px</td>
    </tr>
  </table>
- 위치(%) {inset|top|right|bottom|left|start|end}-{size}
  `XXX-auto`, `XXX-full`, `XXX-1/4`, `XXX-1/3`, `XXX-1/2`, `XXX-2/3`, `XXX-3/4l`

## ◎ sizing <a name="sizing"></a>

### width & height

- [API widht](https://tailwindcss.com/docs/width)
- [API height](https://tailwindcss.com/docs/height)
- w-XX, h-XX
  + .5간격 : XXX-0.5 ~ 3.5 : (width: 0.125rem; /_ 2px _/)
  + 1간격 : XXX-4 ~ 12
  + 2간격 : XXX-14 ~ 16
- min-w-XX, max-w-XX, min-h-XX, max-h-XX
  + 0, full, min, max, fit
- 커스텀 크기 적용 : `w-[XXpx]`, `w-[130px]`

### aspect-ratio
- [API aspect-ratio](https://tailwindcss.com/docs/aspect-ratio)
  <table>
    <tr>
      <th>커스텀비율</th>
      <th>정사각형</th>
      <th>비디오비율16:9</th>
      <th>auto</th>
    </tr>
    <tr>
      <td>aspect-3/2</td>
      <td>aspect-square</td>
      <td>aspect-video</td>
      <td>aspect-auto</td>
    </tr>
  </table>

## ◎ spacing <a name="spacing"></a>

- [customizing-spacing](https://tailwindcss.com/docs/customizing-spacing)
- padding, margin
  - .5간격 : XXX-0.5 ~ 3.5 : (width: 0.125rem; /_ 2px _/)
  - 1간격 : XXX-4 ~ 12
  - 2간격 : XXX-14 ~ 16
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
        <td>.m-X</td>
        <td>.mx-X</td>
        <td>.my-X</td>
        <td>.ms-X</td>
        <td>.me-X</td>
        <td>.mt-X</td>
        <td>.ml-X</td>
        <td>.mr-X</td>
        <td>.mb-X</td>
      </tr>
      <tr>
        <th>padding</th>
        <td>.p-X</td>
        <td>.px-X</td>
        <td>.py-X</td>
        <td>.ps-X</td>
        <td>.pe-X</td>
        <td>.pt-X</td>
        <td>.pl-X</td>
        <td>.pr-X</td>
        <td>.pb-X</td>
      </tr>
    </tbody>
  </table>

## ◎ object fit <a name="object-fit"></a>

- [object fit](https://tailwindcss.com/docs/object-fit)
- 이미지를 백그라운스 속성처럼 적용.

```html
<img src="..." class="object-contain border rounded" alt="..." />
<img src="..." class="object-cover border rounded" alt="..." />
<img src="..." class="object-fill border rounded" alt="..." />
<img src="..." class="object-scale-down border rounded" alt="..." />
<img src="..." class="object-none border rounded" alt="..." />
```

## ◎ plugin API link <a name="plugin-api-link"></a>

- [tailwindcss3 doc](https://tailwindcss.com/docs/)
- [tailwindcss 공식유튜브](https://www.youtube.com/c/TailwindLabs)
- [daisyUI (무료)](https://daisyui.com/)
- [flowbite (무료)](https://flowbite.com/)
