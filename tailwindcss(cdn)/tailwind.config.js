/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: { // 아래의 값들은 min-width이다.
      mobile: '320px',  // <-- *신규로 추가한 모바일 스크린용 breakpoint prefix
      sm: '640px',      // sm  : 640px
      md: '768px',      // md  : 768px
      lg: '1024px',     // lg  : 1024px
      xl: '1380px',     // xl  : 1280px
      '2xl': '1536px',  // xl  : 1536px
    },

    /* 기본컬러변경 */
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },

    /* 확장 새로운 선언 추가 */
    extend: {
      colors: {
        coffee: '#6f4f28',
      }
    },
  },
  corePlugins: {
  },
  plugins: [],
}