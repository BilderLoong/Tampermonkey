// ==UserScript==
// @name         autoChapterTimes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动刷超星学习通的章节访问次数
// @author       bilder
// @match        https://mooc1-2.chaoxing.com/mycourse/*
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// @license      GPL
// @grant        none
// ==/UserScript==
var course=/.*studentcourse.*/;
var study =/.*studentstudy.*/;
var url=window.location.href
function getRandomIntInclusive(min, max) { 
    // get a random number
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
  }
function autoclick(i){
    //clik a chapter
    var list= $('div[class="content1 roundcorner"] a[href!="javascript:void(0)"]');
    list[i].click();
}
 function bind (){
    if(course.test(url))
    autoclick(getRandomIntInclusive(1,25));
    else
    goback(); //the function exist in the icxk web
 }
(function () {
    'use strict';
    window.onload = window.setInterval(bind,10000);
})();