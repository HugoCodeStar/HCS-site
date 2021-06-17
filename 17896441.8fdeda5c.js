(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{118:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(128),i=a(123),c=a(126),m=a(124);var o=function(e){var t=e.metadata;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},s=a(132);var d=function(){var e=Object(i.a)().siteConfig.title,t=Object(s.useActivePlugin)({failfast:!0}).pluginId,a=Object(s.useActiveVersion)(t),n=Object(s.useDocVersionSuggestions)(t),r=n.latestDocSuggestion,c=n.latestVersionSuggestion;if(!c)return l.a.createElement(l.a.Fragment,null);var o,d=null!=r?r:(o=c).docs.find((function(e){return e.id===o.mainDocId}));return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===a.name?l.a.createElement("div",null,"This is unreleased documentation for ",e," ",l.a.createElement("strong",null,a.label)," version."):l.a.createElement("div",null,"This is documentation for ",e," ",l.a.createElement("strong",null,a.label),", which is no longer actively maintained."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(m.a,{to:d.path},"latest version"))," ","(",c.label,")."))},u=a(136),v=a(125),g=a(61),E=a.n(g);t.default=function(e){var t,a=Object(i.a)().siteConfig,n=void 0===a?{}:a,m=n.url,g=n.title,p=e.content,f=p.metadata,b=f.description,h=f.title,N=f.permalink,_=f.editUrl,w=f.lastUpdatedAt,y=f.lastUpdatedBy,O=p.frontMatter,k=O.image,j=O.keywords,C=O.hide_title,x=O.hide_table_of_contents,I=Object(s.useActivePlugin)({failfast:!0}).pluginId,L=Object(s.useVersions)(I),A=Object(s.useActiveVersion)(I),S=L.length>1,T=h?h+" | "+g:g,B=Object(c.a)(k,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,T),l.a.createElement("meta",{property:"og:title",content:T}),b&&l.a.createElement("meta",{name:"description",content:b}),b&&l.a.createElement("meta",{property:"og:description",content:b}),j&&j.length&&l.a.createElement("meta",{name:"keywords",content:j.join(",")}),k&&l.a.createElement("meta",{property:"og:image",content:B}),k&&l.a.createElement("meta",{property:"twitter:image",content:B}),k&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+h}),N&&l.a.createElement("meta",{property:"og:url",content:m+N}),N&&l.a.createElement("link",{rel:"canonical",href:m+N})),l.a.createElement("div",{className:Object(v.a)("container padding-vert--lg",E.a.docItemWrapper)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(v.a)("col",(t={},t[E.a.docItemCol]=!x,t))},l.a.createElement(d,null),l.a.createElement("div",{className:E.a.docItemContainer},l.a.createElement("article",null,S&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",A.label)),!C&&l.a.createElement("header",null,l.a.createElement("h1",{className:E.a.docTitle},h)),l.a.createElement("div",{className:"markdown"},l.a.createElement(p,null))),(_||w||y)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},_&&l.a.createElement("a",{href:_,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(w||y)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",w&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*w).toISOString(),className:E.a.docLastUpdatedAt},new Date(1e3*w).toLocaleDateString()),y&&" "),y&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,y)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(o,{metadata:f})))),!x&&p.rightToc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(u.a,{headings:p.rightToc})))))}},136:function(e,t,a){"use strict";var n=a(0),l=a.n(n);var r=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],i=l[1];Object(n.useEffect)((function(){var n,l;function c(){var c=function(){var e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){var l=n[e],r=l.getBoundingClientRect().top;r>=0&&r<=a&&(t=l),e+=1}return t}();if(c){var m=0,o=!1;for(l=document.getElementsByClassName(e);m<l.length&&!o;){var s=l[m],d=s.href,u=decodeURIComponent(d.substring(d.indexOf("#")+1));c.id===u&&(r&&r.classList.remove(t),s.classList.add(t),i(s),o=!0),m+=1}}}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}))},i=a(48),c=a.n(i),m="table-of-contents__link";function o(e){var t=e.headings,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:m,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(o,{isChild:!0,headings:e.children}))}))):null}t.a=function(e){var t=e.headings;return r(m,"table-of-contents__link--active",100),l.a.createElement("div",{className:c.a.tableOfContents},l.a.createElement(o,{headings:t}))}}}]);