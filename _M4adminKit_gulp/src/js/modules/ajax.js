	/* 겟값 받기 */
	var $_GET = {};
		location.search.replace(/([^=&?]+)=([^&]+)/gi, function (a, b, c) {
		 $_GET[decodeURIComponent(b)] = decodeURIComponent(c);
	});	
	var _dep1, _dep2;
	if($_GET.dep1){	_dep1 = $_GET.dep1; 	}else{ 		_dep1 = -1;	 	}
	if($_GET.dep2){	_dep2 = $_GET.dep2; 	}else{ 		_dep2 = -1;	 	}


/** 
 * author : TR
 * gnb Active
 */
function gnbActive(){
  //console.log(_dep1, _dep2);
  /* === 불러온후 실행 == */
  /* 비활성화 */
  $(".sidebar-nav li").removeClass("active");
  $(".sidebar-nav .sidebar-dropdown").removeClass("show");
  /* 활성화 */
  $(".sidebar-nav > li").eq(_dep1).addClass("active").find(".sidebar-dropdown").addClass("show").find("> li").eq(_dep2).addClass("active");
  $(".sidebar-nav > li.active >.sidebar-link").attr("aria-expanded", true);
  

  /* 아이콘 생성 */
  feather.replace();

  /* 스라이드 바 생성 */
  const simpleBarElement = document.getElementsByClassName("js-simplebar")[0];
  if(simpleBarElement){
    /* Initialize simplebar */
    new SimpleBar(document.getElementsByClassName("js-simplebar")[0])
    const sidebarElement = document.getElementsByClassName("sidebar")[0];
    const sidebarToggleElement = document.getElementsByClassName("sidebar-toggle")[0];
    sidebarToggleElement.addEventListener("click", () => {
      sidebarElement.classList.toggle("collapsed");
      sidebarElement.addEventListener("transitionend", () => {
        window.dispatchEvent(new Event("resize"));
        console.log("===resize===")
      });
    });
  }
  
}
gnbActive();
window.gnbActive = gnbActive;

