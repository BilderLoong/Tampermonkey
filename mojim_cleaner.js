// ==UserScript==
// @name         Clean Mojim TW and JA
// @namespace
// @version      0.1.1
// @description  魔鏡歌詞網去除 "更多更詳盡歌詞"
// @author       Birudo
// @match        *://mojim.com/*
// @icon         https://mojim.com/favicon-t.ico
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  const lyric = document.querySelector('#fsZx1');
  try {
    const innerText = lyric.innerText.replaceAll(/.*※.*/g, '');
    console.log(innerText);

    // Replace the displayed text.
    lyric.innerText = innerText;
  } catch (err) {}
})();
