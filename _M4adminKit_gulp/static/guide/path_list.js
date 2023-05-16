var __GUIDE_LIST, __SITENAME,  __CONSTANT_HEAD, __CONSTANT_RULE, __CONSTANT_LSIT;

__SITENAME = { siteName : "siteName"};
/**
 * 보여줄 칼럼에는 1, 보여주지 않을 칼럼에는 0
 */
__CONSTANT_HEAD = {
    no : 1,  		// NO
    dep1 : 1,		// depth-1
    dep2 : 1,		// depth-2
    dep3 : 1,		// depth-3
    dep4 : 0,		// depth-4
    dep5 : 0,		// depth-5
    url : 1,		// File path
    role : 0,		// 담당자
    stateHTML : 0,	// HTML
    stateJS : 0,	// javascript
    state : 0,		// 완료상태
    pubUpdate  : 1,	// 퍼블수정 날짜
    devUpdate  : 0,	// 개발수정 날짜
    check      : 0,	// 옵션
    etc : 1			// 기타 메모
};


/***
 * 아래 리스트 추가
 * 지원 key 값
 *  각 뎁스에 해당하는 key값으로 입력
 */
__CONSTANT_LIST = [
/**
    * example
    {
        stateLine : "",              // 상태 클래스 (이상무 : "" ,  진행 : "ing" ,  수정 : "edit", 삭제 : "del")
        dep1 : '1뎁스 메뉴 이름',     // option ( 1뎁스 입력시 구분선 )
        dep2 : '2뎁스 메뉴 이름',     // option
        dep3 : '3뎁스 메뉴 이름',     // option
        dep4 : '4뎁스 메뉴 이름',     // option
        dep5 : '5뎁스 메뉴 이름',     // option
        url :  '/html/main.html'	//파일URL
        role : '홍길동',             // 담당자
        stateHTML : 1,              // 1을 넣으면 상태에 '완료' 라는 문구 출력, //option
        stateJS : 1,                // 1을 넣으면 상태에 '완료' 라는 문구 출력, //option
        state   : 1,                // 1을 넣으면 상태에 '완료' 라는 문구 출력, //option
        pubUpdate : 2022-0000,		// 마지막날 배경색표기
        devUpdate : 2022-0000,		// 
        option : '디자인변경예정',       // 비고 란에 출력
        etc    : '디자인변경예정',       // 비고 란에 출력
    }
*/
	
    // Guide
    /* 
    {
        stateLine   : "", 
        dep1 	  	: 'GUIDE',
        dep2 	  	: 'STYLE',
        dep3 	  	: '',
        url  	  	: '/guide/guide_style.html',
        pubUpdate 	: '2022-0000',
        pubUpdate 	: '2022-0000',
        etc 	  	: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'GRID&align',
        url 		: '/guide/guide_grid-align.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    }, 
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'UI',
        dep3 		: '',
        url 		: '/guide/guide_ui.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    }, 

    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: 'ICONS GUIDE',
        dep3 		: 'SPRITE IMAGES',
        url 		: '/guide/guide_icons.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    },
    {
        stateLine   : "ing", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'icon fonts',
        url 		: '/guide/guide_iconfonts.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    },
    {
        stateLine   : "del", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'jQuery UI icon',
        url 		: '/guide/guide_jqueryUI_icons.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'LAYOUT',
        dep3 		: '',
        url 		: '/html/sub/sub.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: 'etc',
        dep2 		: 'page_error',
        dep3 		: '',
        url 		: '/html/etc/page_error.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'page_loading',
        dep3 		: '',
        url 		: '/html/etc/page_loading.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'dm',
        dep3 		: '',
        url 		: '/html/dm/dm.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    }, */
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        url 		: './charts-chartjs.html',
        pubUpdate 	: '2023-0000',
        etc 		: '',
    },
 
];


__CONSTANT_RULE = { getIndex: function () { var _idx = ++window['INDEX'] || (window['INDEX'] = 0); return _idx + 1; }, li_option: function ($item) { var _return = ""; /*topLine*/ if ($item.dep1) { _return += ' t-divide'; }; /*compareUpdate*/ if ($item.pubUp && $item.devUp) { if ($item.pubUp > $item.devUp) { _return += ' is-different'; } }; /*isDone*/ if ($item.stateHTML && $item.stateJS) { if ($item.stateHTML && $item.stateJS) { _return += ' is-done'; } }; /* 상태라인 */ if ($item.stateLine) { if ($item.stateLine == "ing") { _return += ' state_ing'; } if ($item.stateLine == "edit") { _return += ' state_edit'; } if ($item.stateLine == "del") { _return += ' state_del'; } }; return _return; }, path: function () { return '..' + this.url; }, getfileName: function ($item) { var aURL = $item.url.split('/'); return aURL[aURL.length - 1]; }, };


var _data = { _temp_dep1: "" }; Vue.component('search-component', { props: ['listItem', 'dep1SearchIndex'], data: function () { return _data }, template: '<cite style="position:absolute; font-size:0; line-height:0">{{ listItem.dep1? _temp_dep1 = listItem.dep1 : _temp_dep1 }}</cite>' }); __GUIDE_LIST = new Vue({ el: '#guide_list', data: { config: __SITENAME, t_head: __CONSTANT_HEAD, t_rule: __CONSTANT_RULE, t_body: __CONSTANT_LIST, }, methods: __CONSTANT_RULE, beforeCreate: function () { $("#guide_list").show() }, mounted: function () { 
    /* $("._GUIDE__list__body > li.state_ing").hide() */ 
}, });


$(document).ready(function () { /* 배열 변수넣기 */ var _updateArr = []; $("._GUIDE__list__col--update-pub").each(function (index) { _updateArr.push($("._GUIDE__list__col--update-pub").eq(index).text().replace("-", "")); }); /* 배열 최대값 */ var _max = _updateArr.reduce(function (a, b) { return Math.max(a, b); }); /* 최대값 클래스 넣기 */ for (var i in _updateArr) { if (_updateArr[i] == _max) { var _tag = $("._GUIDE__list__col--update-pub").eq(i).closest("._GUIDE__list__item"); var _sch = _tag.find("._GUIDE__list__col--no .sch_state"); _tag.addClass("state_new"); _sch.text(_sch.text() + " state_new"); } }; /* 검색 */ var oItems = $("#list-body ._GUIDE__list__item ._GUIDE__list__col").each(function ($index) { $(this).attr("data-search", $(this).text().toLowerCase()); }); var searchFn = function () { var o = $("#list-body"); $("#list-sch_txt").on("keyup", function ($e) { var t = $(this).val().toLowerCase(); o.find("li").hide(), /* o.find(":contains(" + t + ")").closest("li").show(); */ $("#list-body ._GUIDE__list__item ._GUIDE__list__col").each(function ($index) { var str = $(this).attr("data-search"); if (str.match(t)) { $(this).closest("li").show(); } }); /* 입력 문자 해쉬 변환 */ if ($e.keyCode === 13) { window.location.hash = ''; var _url = window.location.href; if (_url.indexOf("#") == -1) { window.location.href = _url + "#" + encodeURI(t, "UTF-8"); } else { window.location.href = _url + encodeURI(t, "UTF-8"); } searchFn(); } }); }; $("#list-head").length && searchFn(); if (window.location.hash) { var _hash = decodeURI(window.location.hash, "UTF-8"); $("#list-sch_txt").val(_hash.replace("#", "")); $("#list-sch_txt").trigger("keyup"); }; /* 검색 클릭 */ $(".js-legend_list li").on("click", function ($e) { $e.preventDefault(); var _state_sch = $(this).data("state"); if ($("#list-sch_txt").val()) { $(".js-legend_list li").removeClass("on"); $("#list-sch_txt").val(""); $("#list-sch_txt").trigger("keyup"); } else { $(this).addClass("on"); $("#list-sch_txt").val(_state_sch); $("#list-sch_txt").trigger("keyup"); } }) });