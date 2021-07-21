(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{102:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(2),a=t(6),o=(t(0),t(127)),i={title:"Programmes \xe0 faire de l'atelier 6",sidebar_label:"6 - Chaines de caract\xe8res"},l={unversionedId:"inf1256/atelier/atelier6",id:"inf1256/atelier/atelier6",isDocsHomePage:!1,title:"Programmes \xe0 faire de l'atelier 6",description:"mostfrequentcharacter",source:"@site/docs/inf1256/atelier/atelier6.md",slug:"/inf1256/atelier/atelier6",permalink:"/site/docs/inf1256/atelier/atelier6",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf1256/atelier/atelier6.md",version:"current",sidebar_label:"6 - Chaines de caract\xe8res",sidebar:"INF1256Sidebar",previous:{title:"Programmes \xe0 faire de l'atelier 5",permalink:"/site/docs/inf1256/atelier/atelier5"},next:{title:"Programmes \xe0 faire de l'atelier 6",permalink:"/site/docs/inf1256/atelier/atelier9"}},c=[{value:"most_frequent_character",id:"most_frequent_character",children:[]},{value:"word_separator",id:"word_separator",children:[]},{value:"convert_alpha_telephone",id:"convert_alpha_telephone",children:[]}],s={rightToc:c};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"most_frequent_character"},"most_frequent_character"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Trouve le caract\xe8re le plus utiliser \xe0 l'int\xe9rieur d'une chaine.\nArgs:\n    string: La chaine \xe0 \xe9valuer.\n\nReturns:\n    Le caract\xe8re le plus utilis\xe9 dans la chaine.\n")),Object(o.b)("p",null,"Exemples:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'>>> most_frequent_character("salut tous!")\ns\n')),Object(o.b)("h2",{id:"word_separator"},"word_separator"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Convertis une chaine de caract\xe8res en camelCase en phrase normale. L'entr\xe9e\nen camelCase est une chaine ou tous les mots d'une phrase sont indiqu\xe9s par une\nlettre majuscule et non par des espaces.\nArgs:\n    string: La chaine en camelCase.\n\nReturns:\n    La chaine en phrase normale avec des espaces entre chaque mot.\n")),Object(o.b)("p",null,"Exemples:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'>>> word_separator("HelloMyWorld")\nHello my world\n')),Object(o.b)("h2",{id:"convert_alpha_telephone"},"convert_alpha_telephone"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Traducteur de num\xe9ro de t\xe9l\xe9phone alphab\xe9tique\nDe nombreuses entreprises utilisent des num\xe9ros de t\xe9l\xe9phone \ntels que 555-GET-FOOD afin que leurs clients se souviennent plus \nfacilement du num\xe9ro. Sur un t\xe9l\xe9phone standard, les lettres \nalphab\xe9tiques sont mapp\xe9es aux nombres de la mani\xe8re suivante:\nA, B et C = 2\nD, E et F = 3\nG, H et I = 4\nJ, K et L = 5\nM, N et O = 6 P, Q, R et S = 7 T, U et V = 8\nW, X, Y et Z = 9\n\xc9crivez une fonction qui re\xe7oit un num\xe9ro de t\xe9l\xe9phone \xe0 10 \ncaract\xe8res au format XXX-XXX-XXXX. L'application doit retourner \nle num\xe9ro de t\xe9l\xe9phone avec tous les caract\xe8res alphab\xe9tiques \napparaissant dans l'original traduit en leur \xe9quivalent \nnum\xe9rique. Par exemple, si l'utilisateur entre 555-GET-FOOD, \nl'application doit retourner 555-438-3663.\n")))}u.isMDXComponent=!0},127:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=n,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?a.a.createElement(b,l(l({ref:r},s),{},{components:t})):a.a.createElement(b,l({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);