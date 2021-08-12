// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let getImgBtn = document.getElementById('getImgBtn');

chrome.storage.sync.get('color', function(data) {
  getImgBtn.style.backgroundColor = data.color;
  getImgBtn.setAttribute('value', data.color);
});

getImgBtn.onclick = function(element) {
  let color = element.target.value;
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
};
