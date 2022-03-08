const tabletBar = $('#tabletBar');
const sidebarList = $('.sidebar_list');

const sidebar = $('.sidebar_wrapper');
const sidebarBg = $('.sidebar_bg');

const user = $('.user');
const logout = $('.logout');

const selectFn = $('.select_fn');
const selectLi = $('.select_ul > li');



// 태블릿 햄버거 클릭시
tabletBar.on('click', function () {
    sidebar.css({
        'left': '0px',
        'transition-duration': '.5s'
    });
    sidebarBg.show();
});

// 태블릭 배경 클릭시
sidebarBg.on('click', function () {
    sidebar.css({ 'left': '-228px' });
    sidebarBg.hide();
});


// 달력
$('input[name="daterange"]').daterangepicker({
    opens: 'right'
}, function (start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
});


// select토글 
selectFn.on('click', function () {
    console.log($(this).find('ul.select_ul').css('display'));
    if ($(this).find('ul.select_ul').css('display') == 'none') {
        $('.select_fn ul.select_ul').hide();
        $(this).find('ul.select_ul').toggle();
    } else {
        $(this).find('ul.select_ul').hide();
    }
});

selectLi.on('click', function (e) {
    e.stopPropagation();
    $(this).closest('span').text($(this).text())
    $(this).closest('ul').hide();
});


// 아이디 클릭
user.on('click', function () {
    $(this).find('.logout').css({ 'display': 'flex' });
});

// 로그아웃 숨기기
$(document).click(function (e) {
    (!$(e.target).is('span.id')) ? $('.logout').hide() : '';
});

// select 숨기기
$(document).click(function (e) {
    if ( !$(e.target).is('.select_fn') && !$(e.target).is('.select_fn > ul') && !$(e.target).is('.select_value') && !$(e.target).is('.select_value > span')) {
        $('.select_ul').hide();
    }
});

// 분 시간 클릭
$('.time button').on('click', function() {
    $('.time button').removeClass('clicked');
    $(this).addClass('clicked');
});

// 리스트 클릭
$('.select_list').on('click', function() {
    $(this).closest('.select_value').find('span').text($(this).text());
})