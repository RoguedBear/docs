"use strict";(self.webpackChunk_betterdiscord_docs=self.webpackChunk_betterdiscord_docs||[]).push([[3999],{5162:(e,t,o)=>{o.d(t,{Z:()=>l});var a=o(7294),n=o(6010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:o,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,l),hidden:o},t)}},4866:(e,t,o)=>{o.d(t,{Z:()=>Z});var a=o(7462),n=o(7294),r=o(6010),l=o(2466),i=o(6775),s=o(1980),c=o(7392),p=o(12);function d(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:o,attributes:a,default:n}}=e;return{value:t,label:o,attributes:a,default:n}}))}function u(e){const{values:t,children:o}=e;return(0,n.useMemo)((()=>{const e=t??d(o);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function h(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:o}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,s._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function v(e){const{defaultValue:t,queryString:o=!1,groupId:a}=e,r=u(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=o.find((e=>e.default))??o[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,c]=m({queryString:o,groupId:a}),[d,v]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,p.Nk)(o);return[a,(0,n.useCallback)((e=>{o&&r.set(e)}),[o,r])]}({groupId:a}),f=(()=>{const e=s??d;return h({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),v(e)}),[c,v,r]),tabValues:r}}var f=o(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:o,selectedValue:i,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),u=e=>{const t=e.currentTarget,o=p.indexOf(t),a=c[o].value;a!==i&&(d(t),s(a))},h=e=>{var t;let o=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;o=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;o=p[t]??p[p.length-1];break}}null==(t=o)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},t)},c.map((e=>{let{value:t,label:o,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:u},l,{className:(0,r.Z)("tabs__item",k.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),o??t)})))}function y(e){let{lazy:t,children:o,selectedValue:a}=e;const r=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=v(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},n.createElement(b,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function Z(e){const t=(0,f.Z)();return n.createElement(g,(0,a.Z)({key:String(t)},e))}},6833:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=o(7462),n=(o(7294),o(3905)),r=o(4866),l=o(5162),i=o(614);const s={sidebar_position:2,description:"Learn the tools of the trade."},c="Developer Tools",p={unversionedId:"developers/devtools",id:"developers/devtools",title:"Developer Tools",description:"Learn the tools of the trade.",source:"@site/docs/developers/devtools.mdx",sourceDirName:"developers",slug:"/developers/devtools",permalink:"/developers/devtools",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Learn the tools of the trade."},sidebar:"developersSidebar",previous:{title:"Overview",permalink:"/developers/"},next:{title:"Environment",permalink:"/developers/environment"}},d={},u=[{value:"Chromium DevTools",id:"chromium-devtools",level:3},{value:"React Developer Tools",id:"react-developer-tools",level:3}],h={toc:u},m="wrapper";function v(e){let{components:t,...s}=e;return(0,n.kt)(m,(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"developer-tools"},"Developer Tools"),(0,n.kt)("p",null,"These are tools that help with both general web development, and working with the React UI library. "),(0,n.kt)("h3",{id:"chromium-devtools"},"Chromium DevTools"),(0,n.kt)("p",null,"If you have past web development experience you are probably already familiar with the Chrome/Chromium DevTools. If not, it might be a good idea to give ",(0,n.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/"},"its documentation")," a once-over."),(0,n.kt)("p",null,"Working in this Discord (and BetterDiscord) environment, we have access to these DevTools. Discord has this disabled by default, but it is possible to reenable this functionality in the BetterDiscord settings. Go to the BetterDiscord Settings page and find the Developer Settings. Then check the option for DevTools."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Developer Tools",src:o(4397).Z,width:"686",height:"561"})),(0,n.kt)("p",null,"Once this is enabled, you can press ",(0,n.kt)("inlineCode",{parentName:"p"},"ctrl"),"+",(0,n.kt)("inlineCode",{parentName:"p"},"shift"),"+",(0,n.kt)("inlineCode",{parentName:"p"},"i")," (or for a Mac ",(0,n.kt)("inlineCode",{parentName:"p"},"cmd"),"+",(0,n.kt)("inlineCode",{parentName:"p"},"opt"),"+",(0,n.kt)("inlineCode",{parentName:"p"},"i"),") to open the DevTools just as you would in Chrome."),(0,n.kt)("h3",{id:"react-developer-tools"},"React Developer Tools"),(0,n.kt)("p",null,"If you have past web development experience but not a lot of React experience, it might be a good idea to give ",(0,n.kt)("a",{parentName:"p",href:"https://reactjs.org/tutorial/tutorial.html"},"its documentation")," a once-over. It also may be worth taking a look through ",(0,n.kt)("a",{parentName:"p",href:"https://react-devtools-tutorial.vercel.app/"},"the tutorial")," for the React DevTools."),(0,n.kt)("p",null,"Since this environment is one with Chromium DevTools, we can add extensions meant for those DevTools. Unfortunately, this is not packaged with Discord or BetterDiscord, but BetterDiscord can add the React DevTools for you if you download it and place it in the BetterDiscord folder."),(0,n.kt)("p",null,"To get this setup, download this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mondaychen/react/raw/017f120369d80a21c0e122106bd7ca1faa48b8ee/packages/react-devtools-extensions/ReactDevTools.zip"},"special manifest v2")," version of the extension. Currently the version in the Chrome extension store only works for manifest v3 which is not compatible with electron."),(0,n.kt)("p",null,"Open your BetterDiscord folder and make a new folder inside called ",(0,n.kt)("inlineCode",{parentName:"p"},"extensions"),". Within this folder, make another new folder with the React DevTools extension ID ",(0,n.kt)("inlineCode",{parentName:"p"},"fmkadmapgofadopljbjfkapdkoienihi"),". The path should look something like ",(0,n.kt)("inlineCode",{parentName:"p"},"<BetterDiscord>/extensions/fmkadmapgofadopljbjfkapdkoienihi/"),". Extract the contents of the ",(0,n.kt)("inlineCode",{parentName:"p"},"zip")," you downloaded directly to this folder."),(0,n.kt)(r.Z,{className:"code-tabs",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,n.kt)(i.Z,{language:"bash",mdxType:"CodeBlock"},"%appdata%\\BetterDiscord\\extensions\\fmkadmapgofadopljbjfkapdkoienihi\\")),(0,n.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,n.kt)(i.Z,{language:"bash",mdxType:"CodeBlock"},"~/Library/Application Support/BetterDiscord/extensions/fmkadmapgofadopljbjfkapdkoienihi/")),(0,n.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,n.kt)(i.Z,{language:"bash",mdxType:"CodeBlock"},"~/.config/BetterDiscord/extensions/fmkadmapgofadopljbjfkapdkoienihi/"))),(0,n.kt)("p",null,"With this installed, head back to the Developer Settings in BetterDiscord (the same from the ",(0,n.kt)("a",{parentName:"p",href:"#chromium-devtools"},"image above"),") and this time select the React DevTools option. BetterDiscord should then prompt you to restart."),(0,n.kt)("p",null,"After restarting, you can press ",(0,n.kt)("inlineCode",{parentName:"p"},"ctrl"),"+",(0,n.kt)("inlineCode",{parentName:"p"},"shift"),"+",(0,n.kt)("inlineCode",{parentName:"p"},"i")," (or for a Mac ",(0,n.kt)("inlineCode",{parentName:"p"},"cmd"),"+",(0,n.kt)("inlineCode",{parentName:"p"},"opt"),"+",(0,n.kt)("inlineCode",{parentName:"p"},"i"),") to open the DevTools and then find that the React DevTools tabs, ",(0,n.kt)("inlineCode",{parentName:"p"},"Components")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Profiler")," have been added."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"React DevTools",src:o(3931).Z,width:"617",height:"450"})),(0,n.kt)("p",null,"If you don't see them there, be sure to check the tab overflow to see if they got added at the end of the list."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Tab Overflow",src:o(5292).Z,width:"163",height:"192"})))}v.isMDXComponent=!0},4397:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/developer_settings-8d022bea2bf5842f418d87fe8d4aeb29.png"},5292:(e,t,o)=>{o.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAADACAYAAABoDNN0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABGUSURBVHhe7Z17jF1FHcc3EAiUFuiDvii4lEqxvIoC0hoeBkExov6BiUTTTTWSoEhCfCEG0m0F+UMjKEZjDf8YNOau/qGWgAJGHgnYuBX/AIOgPGNbqhZBeQiO5zvnzJzfzJ25j917z8495/tJfrlnHudx93z2N+fuzuyOvW3dKcrEWe/cWGnIczMYlJGRTFBGRjJBGRONM7Ovz0UXX6Iu/sCHaxd4X3h//numjIkGbtj6088Ito164H3h/fn1lDHRQAYJ1dclQu+PMiYalDEgzDBDnpvhBmUMCDPMkOdmuEEZA8L4sWXLpPrEJz8VLfcT8twMN3qR8fMnrFYPrlurHj3lZP2KcqifjNtvv11d8enPBNticdkl42rvjjH9Gmr34+abb1HXXPPlYJuJgcgI8VpTU1bAQ+ctUzfe9PUZCSnPzXCjm4w7Tl6ndp99rnphw7ttoIz6UP+v3nCDFhGi9CvjQz84SP37njH9GmqX8dHLPqbPU4mMCCnkQQcvUiuPPmFGQspzM9zoJOM1WSbcffZ56p8Tl6v9n/2cFhGvKKP+S1l7aD9EvzIiGz5/57h64q7z1F9+Pt41O27fvl2LWJmMCCMkMiOYiZDy3Aw3Osm486wNVsA39+1TL9/6Pf1qxER7aD9EvzIiG+7+wxZ9j//68JaO2REC4thzLiM45dQN6pIPXRrsHwp5boYbnWR84l3n26EZIqo339Svpg7tof0Q/ciILPjSr8fU87+7Wt/fJx+8WpdD2RHDM46N7UplNCLiFcO05IgjjlbrTn57cD8/5LkZbnSScde5F2rpYpkR7aH9EP3IiCz48t1j6qk71+t7i1eUQ9kRz4lmuzIZpYgoy8xo6FVIeW6GG51kvG7j+WrPxguCz4yoR3toP0SvMpqsiA8u+381pvbcf75+RdnPjhAPMvqBD03ymDIGIqP/o5z5C1YUCrr4Qj7+xFMMRjRmJKMf/jAtkULihISEqETGV1/7rxWSMpIYlcgI9u9/SQvZ+tmOooYQl8pkBLt371UbNl6kHnr490UNISWVygiefvpZdcEFHyxKhJRAxrUnnjR4GV9++ZViK/8AYwKZkTKSEJDx+DUnDFZGiHjAAUeqX/zybl2GhGvXnqr74YSEhIAbxxw7PjgZjYj45Dxv3lJdh6EZ2+hHGUkMuLFi5dGDkVGKiLqFC49R9933sD4RtpEdKSOJATeWLV+hxs455xw1m1i4cJU68MAj1frTz7R12J53WP5rwkcf/ZOaP38ZZSRR4Mbq1avdzDjIWLBghRYRHHroUspIoujMuCzLjCGRBhFvXbtOHXzIEp05jzv+xIpk3KtaE2vU+HEmNqvW3qKpH6a35ftPTGVHJMNm6DL6UZ2MQsC9U2rTcdvUdFHsDe8YZOg0Q8YZiUUZq6aBMmK7HMIni3S5t7VZbWpNqUnUb73X6bOpOND01rJODt3uvruyiiwTZ+3TWX3Zd1febvrkezrnKevRN8vk5jEhC3OdGp3pzX5lxpfXZ655lGiGjLipWghf0uKmZ1sQSt5Y/xj6RltZiv5FuW3fQhZXYtOOc8prMMjzFeKa89nrB+H9cY5SWP99jgY1lrHMEq4Ish6R37Q8u8m7J28otqWowBXZ2bfIjKbGbfdEEdkPkQtVHjtHlNFffFPk+O9XHmt0aEZmtPg3uWROZHQynsxucRnbrxPE3u9o0TAZUR9+nuosYy5Kp2F6JjLKY+TC9ZAZ9SNA+3vzr28UsTKa5YWDCrlkUcbcygjym26Hs0KabjLm5fb9dMsMZXSvZZua7CEzapyh3dR71+fsPxrUVEYyilBGkgxBGbFt1rxiLex7Lnyv3pZSoY9Zd+v3R50vo2mnjCRGm4xYcC0Xd6MeMsp6lPGHfTr1lzLKPpSRxGiTEZKZLGYCIkm55J+t6KU/yqhHHWUkMYIyIrNh2w/TZrKirJP9EP4wjUCZMpIYbTJiSEVIiUwgG6KfbI/1D8mIoIwkRpuMCH/oNfXIgGa4NXWx/lJGyGraKCOJYWWUcg0zKCOJQRlJMlBGkgyUkSQDZSTJQBlJMlBGkgw1lbGY2xeZbFqHiah1xMqIvzpfRVQn42a1qW2pQIae+Jq1UcbkgBtIWGPlDOHhRpUyTm71Z29nLa2svpUJSRmTA24sWrSknjK2pt3p/3b6vr/CTk7jt/1FX92GLCum9jvHLYb+tmPk8ts11Vde5e2Hc8SWRzSPesuY3eRyxV1GJpbOlFJGT8xyvQpEya65aEN9+Td7cinNcbst1nLXqQj5vHM3ndrLWN7wUJ2RxbtO3RZYBCXEKSXHcUU/TblvKXeOLDvfKKQBMpptDNlGJk9G/7kyZzgy6jY9VJtXYmiAjLkQOLccrq1Y2JbSWXqVMd+Wbfp8HWSfzj5YtVrFIwOxNELGMhsVeGIZWU3kkvUuY34+8T7bPsB40kW/AZpNTWVMHE9skkMZKyfPomVWJQbKWCV6eB7Nv51YBZSRJANlJMlAGUkyUEaSDJSRJANlJMlAGUkyUEaSDJSRJIOVcePGjaqKoIwkBtwYHx9nZiRzj82MIXGGEZSRxKi5jPkMmYFNTJD/30X/c6DBzEmUk3GbTL1lhDBbt7mTZGeD98+GZgznMwaptYzIOJg3OLCFT5RxqNRYRgzRRUb0b34hlf1/0FlYWXtos8O0FLOYq6ijqHeXM4hrsXX50gh3aYK3hEFcd/5NheUQ7W11oL4yOgJ661kgUnYtVgBdLtq7tYVklH0iOMJ53xxlW/szLgQ0Zb3wy54H70mu8xl9aiujPzQ7ZSlSgW3vtU1su5lNIrIYwggYlTHr751bnqfje6oBNZXRk8CEEWDAMoal8DKXFJAyBqmnjN7NzhFy4AZLUXRZDtMd2gIy6vP5w7TcLwPidJex+zBNGQcYVcgYu0n2xmqRtmVZyFyXJ1/HtoCMKGZC2fcpMpmpm9wqBTSZOz+2O8x7WV1ISxkHHJVkxm54Ijl0aiNDhTL6UMY5A26cdtp6ymihjHMG3Dj++DUNk5EkCdxo3jBNkgRuTExMUEYy9zAzkmSgjCQZKCNJBspIkqEnGS9dsUqpsTG185BD1BnHHhfs02tQRhKDMpJk6EnGQQZlJDGsjMh8Jow4P1lwuK3z2xDIkqb+vFVvcdpQNm3rxlfbespIYsxKRtlncvESpx5l1H9j4SJbh23KSGI4Mj510EGOUCbed/SxURk3LV+p6/E8KetRRj32Rdlkyspk1BNezfV4E1+HhJ0vSWZEW2Ysb2AZnWREQGK0maHaiCcF/eKSpbquEhkx80YKmJVbFU9CrdvE1ypwZMSQa+SR0U1GMySbodqUr1i63PapVMbgsoNqoYz9Y2XE85z8oCGjm4zmg4zJhGaIlserVMZi6n5syIQo5rqcPnJo13MasSZFLDtwyjjHNtXSyw3yOiOgPD6O8xj6yG8OP3MTjZXRfvEC0U1GhPkgY34mKT+4IMyzZTUygnIxfHzdiJArKEg3GV2Z5bHd8+TimqK75oUYrIwQZfsRRzrZDHWx8Id0I5t5foSUsh1x17zDKpTRkEuTi1EKKgNtYUG6yejKG5dRlv1jEoMjoy+ZqQuFLyMkNiL6n6xln+plzLDPkHERfHlyBiejzry4BvNK2rAymsyGCIk0qKhExkw+KYJeRloIAEmCH27082L7cxz624yph/IZyqhFzp8x3XpisDLiGa9TVhtUVJMZcePFeZ0FVl6b9yzXto8W0NRhPXVvMtoPQ+Lc+vjOtRCJldFkxdCz3iCjGhnThB9cOmNlxIcX89uSYUZzZUQmDT+vkhwrY0icYUQTZTTDP58VO0MZSTJQRpIMlJEkA2UkyUAZSTJQRpIMlJEkA2UkyUAZSTJQRpIMlJEkA2UkyVBTGf0Z2gXBdS7t9DPVi9PCBkezZOyRjoJBaG/CLGUcDJQxAGWcG5oloyOSXH6Q9W2VC/9zwXaV7WYfuQQhC8xPjPbVyHNkYdfe+Ncny+4+5RzIWH19aKyM7sKs4kYLGcv/GZi32ZsfyIzhvvm2zJrl4i7/+kTZrmSU+P3b19/UgYbKGGgXEvhDr1MOyBjumwnjZMmM6PlFGX2yr5M8Zi6f/7UMvL8Rp6EyBjJLKjIW4Dj4euVZtp6Z0KehMsohE6B/dn0DlTE/pmyT53TOj2OGMp39Bmk/Vh2psYzuefWNdESSQ18mQtsHmPLGu+Xy2Mhanft6w2txfI0WsKiX67HNemsdMht6x/Kzbg2oqYz940tFqocyapB1AsMkqRQr4+UfGVNVRCoyIhPKb5I6/txu1IAbG04bU2PvOGlMVRFpZkaSAnBj1XLKSBKAMpJkoIwkGSgjSQbKSJJh1jJevXm9evGRbwfbQkEZSQzKSJLByqievE0hIJcRx9QhfOE6tcVi6tZNlJFEcTIjZImJ9cc7vqLbsf3MAzfZ7V4z47euf78WlzKSGI6MCAhjtiGdzIAQ0JevVxl/++OrdFQl44033qiOWrxKrVy2pudYvHhxsTeZC6Iy+lnSZMZRkXHLli3qsou+o2668rmeY9HhxxZ7k7nAkRGyIBtiG+KZbQhnMiPKkA/DrtnuRcaqh+mYjN+9/m/qp9/f11aP6CqjM9eQs3wGjZXRDMVSIFOHgKhGRryaekjWi4yIFDLjnudeV8/8+TX1o1teaGvrJKNewOVMaN2rWi0xWbYueDPZq8TJjFXEXMgI8Z5+/FUde559Xd09tV+/orzz3pe6yziHN6hyKOPgkTJCvgfu+JcOw/59b+ghG5mym4zdZ4F7yxzE8gJk1MnpcsmAWargD/X5OcT6a28Bls7MxTGcDF3IMx04JpD72fcQ2wf1RV+EnuMpH02GLCncmJiYqLeMCEj36n/+px5/5BUtJ0BZPj/GZMyFKgpttC+WQn9TzmUoxCputmnTUop1N76cpk0fQwgu2zod071uXKcrXWgfI2rRUu5TAY3IjCYD4lkRQ/P9O17UIu78zUs6usmImyVlc8mynp8xxA11hUCGFBmvw/LYsi+EcLOkcxxHngxb9rJ1Efpaovt42xnON9OQaYSMGJ6RERGQEGJimIaUoJuMWhp58xxSljGS1aL7eNsWnC+Tsq1+sDRCxm9+4Xn9IQbx4t/fUDt++A+dEVG+7Wt7usuob2x2M8xQpslukC7nbVIkCGjK/cgob7YcOnV2EueWbZ3E8vez9C0j6CD3gOhZRvnrwNnEXMgoAxIiO0JQvy0uY46+uXbIk9mqyBwmhAD9yLhp6zaxlloKUXwzhNo6ieXv1zWb6oLdZ3La3T/+qDIYGidjp+gm4zBpH6abh5XR/BAbv20x4uCH1KYeIWWU9ea3Md0CQlcp4znrL1cfv/j7Pcf8eUcVe1cPZfQyI2Qzv03xf7Piz9qR0kJIsx0LHA/7VSXjPffco6699tq+4rrrriv2rh7KGBimjVj+sCzLMiuakHKGAmKjT1UyktFjxjKa+l7CTJJAUEYSw5ExNmsH2xDJyIgsh77Y7jcoI4lhZTSZS4oD6VAHKeWsHYTpj5DPlt2CMpIYTmasIigjiUEZSTJQRpIMlJEkA2UkyUAZSTLUVkaumx49aivjqM3aIQ2UcWbrpr35is5cxj7BHEYcY2JKPSYmybrzHptJ42Sc2brpwKRYOTm1Z+KzpSljQ2Sc9bppX8a2cq9Qxk40QsbZrpvuJGM+D3EqK2dDr1luYIZiHUa+9in8cg6jK6Pb19QHz1UjGiEjYjbrpn0ZIYVcu+I8Q2oRRRnrS2zZzYxhGf3s6Yo/q+fVxGmEjLNdN50LUWYqfxWfnKGNsj/cxkQLy+idS0e+j3+uutEIGWe9btrLjJLhyNjbuepGI2Sc/brpPgQZyDAdXhZKGQcccyGjjJmtm+4vW6HOH2JzepEReEN18VhAGQcccy1jp4jLSKqg1jKO0rppImQM/W/oYURVMo7aummSy6j/33T5jDPcqEpGMnrADf2f+EPiDCMoI4lBGUkyUEaSDJSRJANlJMlAGUkyzImMDEYsFi1aov4P/v0wB8abROAAAAAASUVORK5CYII="},3931:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/react_devtools-31060d689bdd6e954140f4a2df998201.png"}}]);