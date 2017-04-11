$(function () {
    var $navTop = $('#topNav'), $navMain = $navTop.find('#navMain'), $navSub = $navMain.find('#navSub'), $navIndex = $navMain.find('#navIndex'), de = 200;
    $navIndex.mouseenter(function () {
        $navSub.show().stop().animate({
            'height': '187px'
        }, de);
        $navTop.stop().animate({
            'height': '242px'
        }, de);
    });
    $navMain.mouseleave(function () {
        $navSub.stop().animate({
            'height': '3px'
        }, de, function () {
            $navSub.hide();
        });
        $navTop.stop().animate({
            'height': '75px'
        }, de);
    });
    $navIndex.find('li:not(:eq(0))').mouseenter(function () {
        var $this = $(this), i = $this.index() - 1;
        $(this).addClass('nav3').siblings().removeClass('nav3');
        $navSub.find('dt:eq(' + i + ')').show();
    }).mouseleave(function () {
        var $this = $(this), i = $this.index() - 1;
        $this.removeClass('nav3');
        $navSub.find('dt:eq(' + i + ')').hide();
    });
    $navSub.find('dl').hover(function () {
        var $this = $(this), i = $this.index() + 1;
        $this.find('dt').show();
        $navIndex.find('li:eq(' + i + ')').addClass('nav3');
    }, function () {
        var $this = $(this), i = $this.index() + 1;
        $this.find('dt').hide();
        $navIndex.find('li:eq(' + i + ')').removeClass('nav3');
    });
});
$(function() {
    $('#web_search_header').focus(function() {
        $('.hot_words').html('');

    });
    $('#web_search_header').blur(function() {
        $('.hot_words').html("<a href='http://search.jikexueyuan.com/course/?q=Android'>Android</a><a href='http://search.jikexueyuan.com/course/?q=iOS'>iOS</a><a href='http://search.jikexueyuan.com/course/?q=HTML5'>HTML5</a>");

    });
});
// <!-- hot-lesson导航 -->
$(function() {
    $(".hot-recommend").mouseover(function(event) {
        $(".lesson-one").show();
        $(".lesson-two").hide();
        $(".lesson-three").hide();
        $(".lesson-four").hide();
        $(".lesson-five").hide();
        $(".lesson-six").hide();
    });
    $(".new-course").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").show();
        $(".lesson-three").hide();
        $(".lesson-four").hide();
        $(".lesson-five").hide();
        $(".lesson-six").hide();
    });
    $(".free-course").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").hide();
        $(".lesson-three").show();
        $(".lesson-four").hide();
        $(".lesson-five").hide();
        $(".lesson-six").hide();
    });
    $(".pro-pratice").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").hide();
        $(".lesson-three").hide();
        $(".lesson-four").show();
        $(".lesson-five").hide();
        $(".lesson-six").hide();
    });
    $(".glob-premiere").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").hide();
        $(".lesson-three").hide();
        $(".lesson-four").hide();
        $(".lesson-five").show();
        $(".lesson-six").hide();
    });
    $(".cooperation").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").hide();
        $(".lesson-three").hide();
        $(".lesson-four").hide();
        $(".lesson-five").hide();
        $(".lesson-six").show();
    });
});

$(function() {
    //置顶按钮显示/隐藏实现
    $(window).scroll(function() {
        var w_height = $(window).height(); //浏览器高度
        var scroll_top = $(document).scrollTop(); //滚动条到顶部的垂直高度
        if (scroll_top > w_height) {
            $("#goto-top").fadeIn(500);
        } else {
            $("#goto-top").fadeOut(500);
        }
    });
    //置顶
    $("#goto-top").click(function(e) {
        e.preventDefault();
        $(document.documentElement).animate({
            scrollTop: 0
        }, 200);
        //支持chrome
        $(document.body).animate({
            scrollTop: 0
        }, 200);
    });
})

$(function () {
    var $navTop = $('#topNav'), $navMain = $navTop.find('#navMain'), $navSub = $navMain.find('#navSub'), $navIndex = $navMain.find('#navIndex'), de = 200;
    $navIndex.mouseenter(function () {
        $navSub.show().stop().animate({
            'height': '187px'
        }, de);
        $navTop.stop().animate({
            'height': '242px'
        }, de);
    });
    $navMain.mouseleave(function () {
        $navSub.stop().animate({
            'height': '3px'
        }, de, function () {
            $navSub.hide();
        });
        $navTop.stop().animate({
            'height': '75px'
        }, de);
    });
    $navIndex.find('li:not(:eq(0))').mouseenter(function () {
        var $this = $(this), i = $this.index() - 1;
        $(this).addClass('nav3').siblings().removeClass('nav3');
        $navSub.find('dt:eq(' + i + ')').show();
    }).mouseleave(function () {
        var $this = $(this), i = $this.index() - 1;
        $this.removeClass('nav3');
        $navSub.find('dt:eq(' + i + ')').hide();
    });
    $navSub.find('dl').hover(function () {
        var $this = $(this), i = $this.index() + 1;
        $this.find('dt').show();
        $navIndex.find('li:eq(' + i + ')').addClass('nav3');
    }, function () {
        var $this = $(this), i = $this.index() + 1;
        $this.find('dt').hide();
        $navIndex.find('li:eq(' + i + ')').removeClass('nav3');
    });
});
$(function() {
    $('#web_search_header').focus(function() {
        $('.hot_words').html('');

    });
    $('#web_search_header').blur(function() {
        $('.hot_words').html("<a href='http://search.jikexueyuan.com/course/?q=Android'>Android</a><a href='http://search.jikexueyuan.com/course/?q=iOS'>iOS</a><a href='http://search.jikexueyuan.com/course/?q=HTML5'>HTML5</a>");

    });
});
// <!-- hot-lesson导航 -->
$(function() {
    $(".hot-recommend").mouseover(function(event) {
        $(".lesson-one").show();
        $(".lesson-two").hide();
        $(".lesson-three").hide();
        $(".lesson-four").hide();
        $(".lesson-five").hide();
        $(".lesson-six").hide();
    });
    $(".new-course").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").show();
        $(".lesson-three").hide();
        $(".lesson-four").hide();
        $(".lesson-five").hide();
        $(".lesson-six").hide();
    });
    $(".free-course").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").hide();
        $(".lesson-three").show();
        $(".lesson-four").hide();
        $(".lesson-five").hide();
        $(".lesson-six").hide();
    });
    $(".pro-pratice").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").hide();
        $(".lesson-three").hide();
        $(".lesson-four").show();
        $(".lesson-five").hide();
        $(".lesson-six").hide();
    });
    $(".glob-premiere").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").hide();
        $(".lesson-three").hide();
        $(".lesson-four").hide();
        $(".lesson-five").show();
        $(".lesson-six").hide();
    });
    $(".cooperation").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").hide();
        $(".lesson-three").hide();
        $(".lesson-four").hide();
        $(".lesson-five").hide();
        $(".lesson-six").show();
    });
});

$(function() {
    //置顶按钮显示/隐藏实现
    $(window).scroll(function() {
        var w_height = $(window).height(); //浏览器高度
        var scroll_top = $(document).scrollTop(); //滚动条到顶部的垂直高度
        if (scroll_top > w_height) {
            $("#goto-top").fadeIn(500);
        } else {
            $("#goto-top").fadeOut(500);
        }
    });
    //置顶
    $("#goto-top").click(function(e) {
        e.preventDefault();
        $(document.documentElement).animate({
            scrollTop: 0
        }, 200);
        //支持chrome
        $(document.body).animate({
            scrollTop: 0
        }, 200);
    });
})

$(function () {
    var $navTop = $('#topNav'), $navMain = $navTop.find('#navMain'), $navSub = $navMain.find('#navSub'), $navIndex = $navMain.find('#navIndex'), de = 200;
    $navIndex.mouseenter(function () {
        $navSub.show().stop().animate({
            'height': '187px'
        }, de);
        $navTop.stop().animate({
            'height': '242px'
        }, de);
    });
    $navMain.mouseleave(function () {
        $navSub.stop().animate({
            'height': '3px'
        }, de, function () {
            $navSub.hide();
        });
        $navTop.stop().animate({
            'height': '75px'
        }, de);
    });
    $navIndex.find('li:not(:eq(0))').mouseenter(function () {
        var $this = $(this), i = $this.index() - 1;
        $(this).addClass('nav3').siblings().removeClass('nav3');
        $navSub.find('dt:eq(' + i + ')').show();
    }).mouseleave(function () {
        var $this = $(this), i = $this.index() - 1;
        $this.removeClass('nav3');
        $navSub.find('dt:eq(' + i + ')').hide();
    });
    $navSub.find('dl').hover(function () {
        var $this = $(this), i = $this.index() + 1;
        $this.find('dt').show();
        $navIndex.find('li:eq(' + i + ')').addClass('nav3');
    }, function () {
        var $this = $(this), i = $this.index() + 1;
        $this.find('dt').hide();
        $navIndex.find('li:eq(' + i + ')').removeClass('nav3');
    });
});
$(function() {
    $('#web_search_header').focus(function() {
        $('.hot_words').html('');

    });
    $('#web_search_header').blur(function() {
        $('.hot_words').html("<a href='http://search.jikexueyuan.com/course/?q=Android'>Android</a><a href='http://search.jikexueyuan.com/course/?q=iOS'>iOS</a><a href='http://search.jikexueyuan.com/course/?q=HTML5'>HTML5</a>");

    });
});
// <!-- hot-lesson导航 -->
$(function() {
    $(".hot-recommend").mouseover(function(event) {
        $(".lesson-one").show();
        $(".lesson-two").hide();
        $(".lesson-three").hide();
        $(".lesson-four").hide();
        $(".lesson-five").hide();
        $(".lesson-six").hide();
    });
    $(".new-course").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").show();
        $(".lesson-three").hide();
        $(".lesson-four").hide();
        $(".lesson-five").hide();
        $(".lesson-six").hide();
    });
    $(".free-course").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").hide();
        $(".lesson-three").show();
        $(".lesson-four").hide();
        $(".lesson-five").hide();
        $(".lesson-six").hide();
    });
    $(".pro-pratice").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").hide();
        $(".lesson-three").hide();
        $(".lesson-four").show();
        $(".lesson-five").hide();
        $(".lesson-six").hide();
    });
    $(".glob-premiere").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").hide();
        $(".lesson-three").hide();
        $(".lesson-four").hide();
        $(".lesson-five").show();
        $(".lesson-six").hide();
    });
    $(".cooperation").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").hide();
        $(".lesson-three").hide();
        $(".lesson-four").hide();
        $(".lesson-five").hide();
        $(".lesson-six").show();
    });
});

$(function() {
    //置顶按钮显示/隐藏实现
    $(window).scroll(function() {
        var w_height = $(window).height(); //浏览器高度
        var scroll_top = $(document).scrollTop(); //滚动条到顶部的垂直高度
        if (scroll_top > w_height) {
            $("#goto-top").fadeIn(500);
        } else {
            $("#goto-top").fadeOut(500);
        }
    });
    //置顶
    $("#goto-top").click(function(e) {
        e.preventDefault();
        $(document.documentElement).animate({
            scrollTop: 0
        }, 200);
        //支持chrome
        $(document.body).animate({
            scrollTop: 0
        }, 200);
    });
})

$(function () {
    var $navTop = $('#topNav'), $navMain = $navTop.find('#navMain'), $navSub = $navMain.find('#navSub'), $navIndex = $navMain.find('#navIndex'), de = 200;
    $navIndex.mouseenter(function () {
        $navSub.show().stop().animate({
            'height': '187px'
        }, de);
        $navTop.stop().animate({
            'height': '242px'
        }, de);
    });
    $navMain.mouseleave(function () {
        $navSub.stop().animate({
            'height': '3px'
        }, de, function () {
            $navSub.hide();
        });
        $navTop.stop().animate({
            'height': '75px'
        }, de);
    });
    $navIndex.find('li:not(:eq(0))').mouseenter(function () {
        var $this = $(this), i = $this.index() - 1;
        $(this).addClass('nav3').siblings().removeClass('nav3');
        $navSub.find('dt:eq(' + i + ')').show();
    }).mouseleave(function () {
        var $this = $(this), i = $this.index() - 1;
        $this.removeClass('nav3');
        $navSub.find('dt:eq(' + i + ')').hide();
    });
    $navSub.find('dl').hover(function () {
        var $this = $(this), i = $this.index() + 1;
        $this.find('dt').show();
        $navIndex.find('li:eq(' + i + ')').addClass('nav3');
    }, function () {
        var $this = $(this), i = $this.index() + 1;
        $this.find('dt').hide();
        $navIndex.find('li:eq(' + i + ')').removeClass('nav3');
    });
});
$(function() {
    $('#web_search_header').focus(function() {
        $('.hot_words').html('');

    });
    $('#web_search_header').blur(function() {
        $('.hot_words').html("<a href='http://search.jikexueyuan.com/course/?q=Android'>Android</a><a href='http://search.jikexueyuan.com/course/?q=iOS'>iOS</a><a href='http://search.jikexueyuan.com/course/?q=HTML5'>HTML5</a>");

    });
});
// <!-- hot-lesson导航 -->
$(function() {
    $(".hot-recommend").mouseover(function(event) {
        $(".lesson-one").show();
        $(".lesson-two").hide();
        $(".lesson-three").hide();
        $(".lesson-four").hide();
        $(".lesson-five").hide();
        $(".lesson-six").hide();
    });
    $(".new-course").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").show();
        $(".lesson-three").hide();
        $(".lesson-four").hide();
        $(".lesson-five").hide();
        $(".lesson-six").hide();
    });
    $(".free-course").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").hide();
        $(".lesson-three").show();
        $(".lesson-four").hide();
        $(".lesson-five").hide();
        $(".lesson-six").hide();
    });
    $(".pro-pratice").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").hide();
        $(".lesson-three").hide();
        $(".lesson-four").show();
        $(".lesson-five").hide();
        $(".lesson-six").hide();
    });
    $(".glob-premiere").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").hide();
        $(".lesson-three").hide();
        $(".lesson-four").hide();
        $(".lesson-five").show();
        $(".lesson-six").hide();
    });
    $(".cooperation").mouseover(function(event) {
        $(".lesson-one").hide();
        $(".lesson-two").hide();
        $(".lesson-three").hide();
        $(".lesson-four").hide();
        $(".lesson-five").hide();
        $(".lesson-six").show();
    });
});

$(function() {
    //置顶按钮显示/隐藏实现
    $(window).scroll(function() {
        var w_height = $(window).height(); //浏览器高度
        var scroll_top = $(document).scrollTop(); //滚动条到顶部的垂直高度
        if (scroll_top > w_height) {
            $("#goto-top").fadeIn(500);
        } else {
            $("#goto-top").fadeOut(500);
        }
    });
    //置顶
    $("#goto-top").click(function(e) {
        e.preventDefault();
        $(document.documentElement).animate({
            scrollTop: 0
        }, 200);
        //支持chrome
        $(document.body).animate({
            scrollTop: 0
        }, 200);
    });
})
