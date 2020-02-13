console.clear();
/* 좌측에 따라다니는 정보 */
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    if (scrollTop < 100) {
        scrollTop = 100;
    } else if (scrollTop > 9600) {
        scrollTop = 9600;
    }

    var duration = 1000;
    $('.main-1 > .quick').stop().animate({
        top: scrollTop
    }, duration);

    console.log(scrollTop);
});
/* 메인 가운데 슬라이더 페이지 버튼 클릭하면 사진 변경*/
$('.slider-1 > .pages > ul > li').click(function () {
    var $this = $(this);
    var $slider1 = $this.closest('.slider-1');

    $this.addClass('active');
    $this.siblings('.active').removeClass('active');

    var index = $this.index();

    $slider1.find('> .slides > a').removeClass('active');
    $slider1.find('> .slides > a').eq(index).addClass('active');
});
/* 메인 가운데 슬라이더 사이드버튼 (좌우) 버튼 클릭하면 사진 변경*/
$('.slider-1 > .side-btns > div').click(function () {
    var $this = $(this);
    var index = $this.index();
    var $slider1 = $this.closest('.slider-1');

    var $current = $slider1.find(' > .pages > ul > li.active');
    var $post;

    if (index == 0) {
        $post = $current.prev();
    } else {
        $post = $current.next();
    }

    if ($post.length == 0) {
        if (index == 0) {
            $post = $slider1.find('.pages > ul > li:last-child');
        } else {
            $post = $slider1.find('.pages > ul > li:first-child');
        }
    }
    $post.click();
});
/* 메인 우측 슬라이더 사이드버튼 (좌우) 버튼 클릭하면 사진 변경*/
$('.slider-2 > div').click(function () {
    var $this = $(this);
    var index = $this.index();
    var $slider2 = $this.closest('.slider-2');

    var $current = $slider2.find('.slides > a.active');
    var $post;

    if (index == 0) {
        $post = $current.prev();
    } else {
        $post = $current.next();
    }

    if ($post.length == 0) {
        if (index == 0) {
            $post = $slider2.find('.slides > a:last-child');
        } else {
            $post = $slider2.find('.slides > a:first-child');
        }
    }

    $current.removeClass('active');
    $post.addClass('active');
});
/* main-2 마우스엔터시 컨텐츠 내용 바뀌는 것 */
$('.main-2 > .best-menu > .menu1 > li').mouseenter(function () {
    var $this = $(this);
    var index = $this.index();
    var $bestMenu = $this.closest('.best-menu');

    $bestMenu.find(' > .content-box > .content').removeClass('active');
    $bestMenu.find(' > .content-box > .content').eq(index).addClass('active');
});
