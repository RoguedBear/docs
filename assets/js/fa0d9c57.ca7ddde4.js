"use strict";(self.webpackChunk_betterdiscord_docs=self.webpackChunk_betterdiscord_docs||[]).push([[264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i="Optimizing Performance",s={unversionedId:"themes/advanced/performance",id:"themes/advanced/performance",title:"Optimizing Performance",description:"This guide goes over what it means when we say CSS performance as well as some potential optimizations you can take advantage of.",source:"@site/docs/themes/advanced/performance.md",sourceDirName:"themes/advanced",slug:"/themes/advanced/performance",permalink:"/themes/advanced/performance",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"themesSidebar",previous:{title:"Preprocessing & Minification",permalink:"/themes/advanced/preprocessing"}},l={},c=[{value:"CSS Performance",id:"css-performance",level:2},{value:"Selectors",id:"selectors",level:3},{value:"Descendant Selectors",id:"descendant-selectors",level:4},{value:"Attribute Selectors",id:"attribute-selectors",level:4},{value:"Animations &amp; Transitions",id:"animations--transitions",level:3},{value:"Optimizations",id:"optimizations",level:2},{value:"Selectors",id:"selectors-1",level:3},{value:"Descendant Selectors",id:"descendant-selectors-1",level:4},{value:"Attribute Selectors",id:"attribute-selectors-1",level:4},{value:"Animations &amp; Transitions",id:"animations--transitions-1",level:3}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"optimizing-performance"},"Optimizing Performance"),(0,r.kt)("p",null,"This guide goes over what it means when we say CSS performance as well as some potential optimizations you can take advantage of."),(0,r.kt)("h2",{id:"css-performance"},"CSS Performance"),(0,r.kt)("p",null,"For many, the performance of CSS may sound crazy. It's a stylesheet language not a programming language. But the way you write your CSS can have a serious effect on the performance of rendering the page. This is especially evident in applications with many moving parts and constantly shifting elements. Discord is definitely one of those applications. For some detailed information, take a look at ",(0,r.kt)("a",{parentName:"p",href:"https://web.dev/howbrowserswork/#style-computation"},"how browsers perform style computations"),"."),(0,r.kt)("h3",{id:"selectors"},"Selectors"),(0,r.kt)("h4",{id:"descendant-selectors"},"Descendant Selectors"),(0,r.kt)("p",null,"If you're a developer using CSS, you probably think about descendant selectors from left to right or top to bottom. Meaning if you see the selector ",(0,r.kt)("inlineCode",{parentName:"p"},".container .row"),' you might read or interpret it as "from ',(0,r.kt)("inlineCode",{parentName:"p"},".container")," find ",(0,r.kt)("inlineCode",{parentName:"p"},".row"),' and apply styles". But browsers do the opposite and process from the right-most to the left-most. So for the selector ',(0,r.kt)("inlineCode",{parentName:"p"},".container .row")," every time the browser encounters and element matching ",(0,r.kt)("inlineCode",{parentName:"p"},".row")," it walks the ancestors of this element until it finds ",(0,r.kt)("inlineCode",{parentName:"p"},".container")," and if it isn't found, that means it will walk the ",(0,r.kt)("strong",{parentName:"p"},"entire tree"),". You can read a bit more about this process in the article linked above."),(0,r.kt)("p",null,"But how might this affect performance? In a complex DOM tree like Discord there might be many instances of ",(0,r.kt)("inlineCode",{parentName:"p"},".container .row")," and even more instances of just ",(0,r.kt)("inlineCode",{parentName:"p"},".row"),". So by adding your style you'll be causing the browser to walk the DOM tree several times over. This can get compounded even more when we deal with ",(0,r.kt)("a",{parentName:"p",href:"/themes/basics/selectors"},"specificity")," and try to overwrite Discord's styles. If Discord's style uses ",(0,r.kt)("inlineCode",{parentName:"p"},".container .row")," it might be instinctual to use ",(0,r.kt)("inlineCode",{parentName:"p"},".main .container .row")," to override their styles. This means that not only will every ",(0,r.kt)("inlineCode",{parentName:"p"},".row")," be tree walked to find ",(0,r.kt)("inlineCode",{parentName:"p"},".container"),", now every ",(0,r.kt)("inlineCode",{parentName:"p"},".container .row")," will be tree walked to additionally look for ",(0,r.kt)("inlineCode",{parentName:"p"},".main"),"."),(0,r.kt)("p",null,"On their own having some styles with many descendant selectors will not have much of an effect on the performance of the client except on the absolute lowest power of machines. But it's easy to see how compounding your selectors can easily add up, especially in large themes with hundreds and hundreds of styles."),(0,r.kt)("h4",{id:"attribute-selectors"},"Attribute Selectors"),(0,r.kt)("p",null,"Attribute selectors are great and very useful. But they also mean more computations for every single element in an attempt to match them. This is worse for attribute selectors that do partial matching rather than exact matching."),(0,r.kt)("h3",{id:"animations--transitions"},"Animations & Transitions"),(0,r.kt)("p",null,"This section may feel a little more obvious than the last, but having more animations can lead to a drop in performance. More animations means more calculations for the users computer to handle and more rendering for it to deal with. The same can be said for transitions. This is usually not as bad when the user has a dedicated GPU and they have hardware acceleration enabled, but this is definitely not the case for all users. What's worse, is that web rendering doesn't always get put onto the dedicated GPU even if it exists and hardware acceleration is on. There are some ways to try and trick it though that we'll go over in the next section."),(0,r.kt)("h2",{id:"optimizations"},"Optimizations"),(0,r.kt)("p",null,"So we've talked about some potential performance issues with selectors and animations. Now let's talk about how we can improve them."),(0,r.kt)("h3",{id:"selectors-1"},"Selectors"),(0,r.kt)("h4",{id:"descendant-selectors-1"},"Descendant Selectors"),(0,r.kt)("p",null,"Here are a few tips for improving your descendant selectors while keeping up specificity."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use an element closer in the tree for the next ancestor (",(0,r.kt)("inlineCode",{parentName:"li"},".main .container .row")," => ",(0,r.kt)("inlineCode",{parentName:"li"},".container .row-wrap .row"),")"),(0,r.kt)("li",{parentName:"ul"},"Use another class on the target or parent element (",(0,r.kt)("inlineCode",{parentName:"li"},".card-container .card")," => ",(0,r.kt)("inlineCode",{parentName:"li"},".card.card-info"),")"),(0,r.kt)("li",{parentName:"ul"},"Use IDs whenever possible"),(0,r.kt)("li",{parentName:"ul"},"Make use of pseudo-classes on target elements"),(0,r.kt)("li",{parentName:"ul"},"Consider the use of ",(0,r.kt)("inlineCode",{parentName:"li"},"!important")," sparingly"),(0,r.kt)("li",{parentName:"ul"},"Duplicate your selectors (",(0,r.kt)("inlineCode",{parentName:"li"},".container .row")," => ",(0,r.kt)("inlineCode",{parentName:"li"},".row.row.row"),")")),(0,r.kt)("h4",{id:"attribute-selectors-1"},"Attribute Selectors"),(0,r.kt)("p",null,"Here are a few tips for improving your attribute selectors."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Consider if it's absolutely necessary."),(0,r.kt)("li",{parentName:"ul"},"Try using an exact match ",(0,r.kt)("inlineCode",{parentName:"li"},"[attr=value]")," over a wildcard ",(0,r.kt)("inlineCode",{parentName:"li"},"[attr*=val]")),(0,r.kt)("li",{parentName:"ul"},"Try using native attribute selection via pseudo-classes"),(0,r.kt)("li",{parentName:"ul"},"Try using state checks rather than attributes"),(0,r.kt)("li",{parentName:"ul"},"Monitor the classes on the element to see if a state related class (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"active"),") is added when needed")),(0,r.kt)("h3",{id:"animations--transitions-1"},"Animations & Transitions"),(0,r.kt)("p",null,'There are a few different techniques that improve your animations and transitions. One of the first is understanding the rule of thumb: "Do not animate CSS properties that trigger layout or painting whenever possible." This includes properties like heigh and width that could cause other elements to move around as you animate. It is very difficult to produce smooth and performant animations in these cases.'),(0,r.kt)("p",null,"You can indicate to the browser before animations and transitions what properties will change which can help the browser optimize performance. Just add ",(0,r.kt)("inlineCode",{parentName:"p"},"will-change: property;")," to the element in question."),(0,r.kt)("p",null,"As we talked about above, not all animations will be rendering on the GPU when available. There a couple ways to try and trigger this, and it usually involves creating new paint layers. If you're unfamiliar with this concept, that's understandable, it's a concept internal to web browsers. But if you do want to go down this route, you can try adding a 3d ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," to the element that does nothing (",(0,r.kt)("inlineCode",{parentName:"p"},"transform: translateZ(0)"),"). This works in all browsers. If you're targeting just modern browsers (like Chrome/Discord) then it's enough to just do ",(0,r.kt)("inlineCode",{parentName:"p"},"will-change: transform"),"."),(0,r.kt)("p",null,"If you want to learn more about performant CSS animations and even learn how to debug your own, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://web.dev/animations-guide/"},"animation guide")," from web.dev."))}m.isMDXComponent=!0}}]);