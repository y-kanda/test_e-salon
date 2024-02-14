$(function () {
    $('.burger-btn').on('click', function () {
        $('.burger-wrap').toggleClass('close');
        $('.burger-btn').toggleClass('close');
        $('.nav').toggleClass('fade');
        $('body').toggleClass('noscroll');
    });
});

var _window = $(window),
    _header = $('.nav'),
    pv_imgBottom;

_window.on('scroll', function () {
    heroBottom = $('.pv_img').height();
    if (_window.scrollTop() > heroBottom) {
        _header.addClass('fixed');
    }
    else {
        _header.removeClass('fixed');
    }
});

_window.trigger('scroll');

// swiperレスポンシブ設定1

// 2
let mySwiper = null;
const mediaQuery = window.matchMedia('(min-width: 767px)');

const checkBreakpoint = (e) => {
    if (e.matches) {
        initSwiper();
    } else if (mySwiper) {
        mySwiper.destroy(false, true);
    }
}
const initSwiper = () => {
    mySwiper = new Swiper(".swiper-container", {
        loop: true, //最後に達したら先頭に戻る
        effect: "fade",
        // effect: "fade",の時は必要
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: ".swiper-pagination", //ページネーションの要素
            type: "bullets", //ページネーションの種類
            clickable: true, //クリックに反応させる
        },
        navigation: {
            nextEl: ".swiper-button-next", //「次へボタン」要素の指定
            prevEl: ".swiper-button-prev", //「前へボタン」要素の指定
        },

        //スクロールバー表示の設定
        // scrollbar: {
        //   el: ".swiper-scrollbar", //要素の指定
        // },
    });
};

mediaQuery.addEventListener("change", checkBreakpoint);
checkBreakpoint(mediaQuery);

// (() => {
//     let swiper, swiperbool;
//     const breakPoint = 768;

//     window.addEventListener('load', () => {
//         if (breakPoint > window.innerWidth) {
//             swiperbool = false;
//         } else {
//             createSwiper();
//             swiperbool = true;
//         }
//     }, false);

//     window.addEventListener('resize', () => {
//         if (breakPoint > window.innerWidth && swiperbool) {
//             swiper.destroy(false, true);
//             swiperbool = false;
//         } else if (breakPoint <= window.innerWidth && !(swiperbool)) {
//             createSwiper();
//             swiperbool = true;
//         }
//     }, false);
// })();


