"use strict";var BJLL_options=BJLL_options||{},BJLL={_ticking:!1,check:function(){if(!BJLL._ticking){BJLL._ticking=!0,"undefined"==typeof BJLL.threshold&&("undefined"!=typeof BJLL_options.threshold?BJLL.threshold=parseInt(BJLL_options.threshold):BJLL.threshold=200);var e=document.documentElement.clientHeight||body.clientHeight,t=!1,n=document.getElementsByClassName("lazy-hidden");[].forEach.call(n,function(n,a,i){var c=n.getBoundingClientRect();e-c.top+BJLL.threshold>0&&(BJLL.show(n),t=!0)}),BJLL._ticking=!1,t&&BJLL.check()}},show:function(e){e.className=e.className.replace(/(?:^|\s)lazy-hidden(?!\S)/g,""),e.addEventListener("load",function(){e.className+=" lazy-loaded",BJLL.customEvent(e,"lazyloaded")},!1);var t=e.getAttribute("data-lazy-type");if("image"==t)e.setAttribute("src",e.getAttribute("data-lazy-src")),null!=e.getAttribute("data-lazy-srcset")&&e.setAttribute("srcset",e.getAttribute("data-lazy-srcset"));else if("iframe"==t){var n=e.getAttribute("data-lazy-src"),a=document.createElement("div");a.innerHTML=n;var i=a.firstChild;e.parentNode.replaceChild(i,e)}},customEvent:function(e,t){var n;document.createEvent?(n=document.createEvent("HTMLEvents"),n.initEvent(t,!0,!0)):(n=document.createEventObject(),n.eventType=t),n.eventName=t,document.createEvent?e.dispatchEvent(n):e.fireEvent("on"+n.eventType,n)}};window.addEventListener("load",BJLL.check,!1),window.addEventListener("scroll",BJLL.check,!1),window.addEventListener("resize",BJLL.check,!1),document.getElementsByTagName("body").item(0).addEventListener("post-load",BJLL.check,!1);
//# sourceMappingURL=maps/bj-lazy-load.js.map
