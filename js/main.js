new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
	// 네비게이터를 봉;ㅁ/숨김
    navigation:true,
	// 네비게이터 위치
	navigationPosition: 'right',
	// 하이퍼링크
	anchors:['num0', 'num1', 'num2','num3','num4','num5','num6','num7'],

	afterLoad: function(origin, destination, direction){
		//  destination 변수는 해당 section에 들어왔을때
		//  origin 매개변수는 해당 section 을 벗어났을때
        var origin = this;
		console.log(origin)
		// console.log(`원래섹션:${old_sec} 다음섹션:${new_sec} 방향:${direction} `)
        //using index
		// 해당 섹션에 들어오면
        if(destination.index == 1){
			sec_in()
        }
		// 해당 섹션을 벗어났을 때
		if(origin.index == 2 ){
			sec_out()
		}

    }

});


// 1. 문서객체 선택
let btn = document.querySelector('.btn_menu')
console.log(btn)
let nav = document.querySelector('nav')
console.log(nav)

//  이벤트 발생
btn.addEventListener("click",function(){
	btn.classList.toggle('on')
	nav.classList.toggle('on')
})
// btn.addEventListener("click",function(){
	//     nav.classList.toggle('on')
	// })
	
	
	function sec_in(){
		// alert("나의 소개페이지 오신것을 환영합니다")
		// animeation gage
		var tl = anime.timeline({
			easing: 'easeInOutQuart',
			duration: 500
		});
		
		tl.add({	
			targets: '.g1',
			height: '95%',
			delay:1000,
		})
		.add({	
			targets: '.g2',
			height: '90%',
		})
		.add({	
			targets: '.g3',
			height: '85%',
		})
		.add({	
			targets: '.g4',
			height: '90%',
		})
		.add({	
			targets: '.g5',
			height: '80%',
		})
		.add({	
			targets: '.g6',
			height: '95%',
		})
		.add({	
			targets: '.g7',
			height: '95%',
		})
		.add({	
			targets: '.g8',
			height: '85%',
		})
	}
	function sec_out(){
		// alert("나의 소개를 잘 보셔나요")
		anime({
			targets:'.gage_in',
			height:0
		})
	}

	anime({
		targets: '.ss path',
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		duration: 1500,
		delay: function(el, i) { return i * 250 },
		direction: 'alternate',
		loop: true
	});

// 조금 더 줄인 코드
$(document).ready(function(){
	$('.graphics2').hide()
	// 탭메뉴 자신 클릭시
	$('.btn li').on('click',function(){
	  	$('.btn li').removeClass('active');    // 모든 li에 'active'클래스 제거
	  	$(this).addClass('active');    // 자신에게 'active'클래스 적용
		$('.tab_content ul').eq($(this).index()).fadeIn().siblings('.tab_content ul').hide();
	});	
});
$(window).on("load",function(){
	$('.btn .gr').addClass('active')

})
$(document).ready(function(){
	$('.skill, #section1 .cover').hide()
	// 탭메뉴 자신 클릭시
	$('.skill_btn button').on('click',function(){
	  	$('.skill, #section1 .cover').fadeIn();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
	$('.skill span').on('click',function(){
	  	$('.skill, #section1 .cover').fadeOut();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
});
// $(window).on("load",function(){
// 	$('.btn .gr').addClass('active')

// })

$(document).ready(function(){
	$('#section3 .info').hide()
	// 탭메뉴 자신 클릭시
	$('.graphics .p_free').on('click',function(){
	  	$('#section3 .free').fadeIn();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
	$('#section3 .info p').on('click',function(){
	  	$('#section3 .free').fadeOut();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
});
$(document).ready(function(){
	$('#section3 .info').hide()
	// 탭메뉴 자신 클릭시
	$('.graphics .p_info_ATEM').on('click',function(){
	  	$('#section3 .info_ATEM').fadeIn();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
	$('#section3 .info p').on('click',function(){
	  	$('#section3 .info_ATEM').fadeOut();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
});
$(document).ready(function(){
	$('#section3 .info').hide()
	// 탭메뉴 자신 클릭시
	$('.graphics .p_brcgv_info').on('click',function(){
	  	$('#section3 .brcgv_info').fadeIn();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
	$('#section3 .info p').on('click',function(){
	  	$('#section3 .brcgv_info').fadeOut();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
});
// 삼짜공방
$(document).ready(function(){
	$('#section3 .info').hide()
	// 탭메뉴 자신 클릭시
	$('.graphics .p_samjja').on('click',function(){
	  	$('#section3 .info_samjja').fadeIn();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
	$('#section3 .info p').on('click',function(){
	  	$('#section3 .info_samjja').fadeOut();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
});
// 강아지의 날
$(document).ready(function(){
	$('#section3 .info').hide()
	// 탭메뉴 자신 클릭시
	$('.graphics .p_dog').on('click',function(){
	  	$('#section3 .info_dog').fadeIn();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
	$('#section3 .info p').on('click',function(){
	  	$('#section3 .info_dog').fadeOut();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
});
// 텀블러할인
$(document).ready(function(){
	$('#section3 .info').hide()
	// 탭메뉴 자신 클릭시
	$('.graphics .p_Newspaper').on('click',function(){
	  	$('#section3 .info_new').fadeIn();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
	$('#section3 .info p').on('click',function(){
	  	$('#section3 .info_new').fadeOut();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
});
// 스타벅스
$(document).ready(function(){
	$('#section3 .info').hide()
	// 탭메뉴 자신 클릭시
	$('.graphics .p_star').on('click',function(){
	  	$('#section3 .info_star	').fadeIn();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
	$('#section3 .info p').on('click',function(){
	  	$('#section3 .info_star').fadeOut();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
});
// sktlogo
$(document).ready(function(){
	$('#section3 .info').hide()
	// 탭메뉴 자신 클릭시
	$('.graphics .p_logo2').on('click',function(){
	  	$('#section3 .info_logo2	').fadeIn();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
	$('#section3 .info p').on('click',function(){
	  	$('#section3 .info_logo2').fadeOut();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
});
//point
$(document).ready(function(){
	$('#section3 .info').hide()
	// 탭메뉴 자신 클릭시
	$('.graphics .p_point').on('click',function(){
	  	$('#section3 .info_point').fadeIn();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
	$('#section3 .info p').on('click',function(){
	  	$('#section3 .info_point').fadeOut();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
});
//p_DAO
$(document).ready(function(){
	$('#section3 .info').hide()
	// 탭메뉴 자신 클릭시
	$('.graphics .p_DAO').on('click',function(){
	  	$('#section3 .info_DAO').fadeIn();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
	$('#section3 .info p').on('click',function(){
	  	$('#section3 .info_DAO').fadeOut();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
});
//p_lunch
$(document).ready(function(){
	$('#section3 .info').hide()
	// 탭메뉴 자신 클릭시
	$('.graphics .p_lunch').on('click',function(){
	  	$('#section3 .info_lunch').fadeIn();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
	$('#section3 .info p').on('click',function(){
	  	$('#section3 .info_lunch').fadeOut();    // 모든 li에 'active'클래스 제거;    // 자신에게 'active'클래스 적;
	});	
});