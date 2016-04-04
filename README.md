﻿# chrome extension 「Link in Current Tab」

Force all links to be opened in current tab instead of the new one

无视页面里 a 链接的 target="_blank" 属性, 强制所有链接在当前 tab 页打开.

[Install from Chrome web store](https://chrome.google.com/webstore/detail/link-in-current-tab/cbkcdebbfbegnmbephalggnchfebihbl)

## How it works

This extension execute the below javascript code in all pages

```javascript
window.addEventListener('click', (e) => {
    if( e.target.tagName == 'A' && e.target.target == "_blank" ) {
        e.target.target = "_self";
    }
}, true);
```
