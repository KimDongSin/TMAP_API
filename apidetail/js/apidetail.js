const tabletBar = $('#tabletBar');
const sidebarList = $('.sidebar_list');

const sidebar = $('.sidebar_wrapper');
const sidebarBg = $('.sidebar_bg');

const user = $('.user');
const logout = $('.logout');

const selectFn = $('.select_fn');
const selectLi = $('.select_ul > li');

const trPopUp = $('.gate_lega_popup');

const overlay = $('.overlay');
const detailPopup = $('.detail_popup');
const errorPopup = $('.error_popup');

const detailPopupClose = $('.black_close');
const errorPopupClose = $('.white_close');


// 팝업 위치
function userMenuPop(e) {
    var sWidth = window.innerWidth;
    var sHeight = window.innerHeight;
    var oWidth = $('.gate_lega_popup').width();
    var oHeight = $('.gate_lega_popup').height();
    var divLeft = e.clientX + 10;
    var divTop = e.clientY + 5;

    if (divLeft + oWidth > sWidth) divLeft -= oWidth;
    if (divTop + oHeight > sHeight) divTop -= oHeight;
    if (divLeft < 0) divLeft = 0;
    if (divTop < 0) divTop = 0;
    $('.gate_lega_popup').css({
        "top": divTop,
        "left": divLeft,
        "position": "absolute"
    }).show();
}


// 태블릿 햄버거 클릭시
tabletBar.on('click', function () {
    sidebar.css({
        'left': '0px',
        'transition-duration': '.5s'
    });
    sidebarBg.show();
    trPopUp.hide();
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


// tr클릭
$(document).on('click', '.api_table_wrapper table tbody tr', function (e) {
    // trPopUp.show();
    userMenuPop(e)
});

// gate lega 클릭시 숨김
trPopUp.find('div.popup_item').on('click', function () {

    $('.detail_popup .popup_title > span').text($(this).text());
    trPopUp.hide();
    detailPopup.show();
    overlay.show();
});

// 오버레이 클릭
overlay.on('click', function() {
    $(this).hide();
    detailPopup.hide();
    errorPopup.hide();
});

// 닫기버튼
detailPopupClose.on('click', function() {
    detailPopup.hide();
    errorPopup.hide();
    overlay.hide();
});

errorPopupClose.on('click', function() {
    errorPopup.hide();
});

$(document).on('click', '.detail_popup .popup_table_wrapper table tr', function() {
    errorPopup.show();
});

// select 숨기기
$(document).click(function (e) {
    if ( !$(e.target).is('.select_fn') && !$(e.target).is('.select_fn > ul') && !$(e.target).is('.select_value') && !$(e.target).is('.select_value > span')) {
        $('.select_ul').hide();
    }
});

$('.api_btn_wrapper button').on('click', function() {
    $('.api_btn_wrapper button').removeClass('clicked');
    $(this).addClass('clicked');
    if ($(this).hasClass('clicked') && $(this).children('input').length != 0) {
        $('.api_btn_wrapper button input').removeAttr('readonly');
        console.log('있다');
    }else {
        $('.api_btn_wrapper button input').attr('readonly', 'true');
        console.log('없다');
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