"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[6426],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),d=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(u.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=d(t),p=i,f=c["".concat(u,".").concat(p)]||c[p]||m[p]||l;return t?n.createElement(f,o(o({ref:r},s),{},{components:t})):n.createElement(f,o({ref:r},s))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=p;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a[c]="string"==typeof e?e:i,o[1]=a;for(var d=2;d<l;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3373:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var n=t(7462),i=(t(7294),t(3905));const l={title:"Programmes \xe0 faire de l'atelier 1",sidebar_label:"1 - Bases"},o=void 0,a={unversionedId:"inf1035/Atelier/atelier1",id:"inf1035/Atelier/atelier1",isDocsHomePage:!1,title:"Programmes \xe0 faire de l'atelier 1",description:"Allo, Monde!",source:"@site/docs/inf1035/Atelier/atelier1.md",sourceDirName:"inf1035/Atelier",slug:"/inf1035/Atelier/atelier1",permalink:"/site/docs/inf1035/Atelier/atelier1",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf1035/Atelier/atelier1.md",tags:[],version:"current",frontMatter:{title:"Programmes \xe0 faire de l'atelier 1",sidebar_label:"1 - Bases"},sidebar:"INF1035Sidebar",next:{title:"2 - If, While, For",permalink:"/site/docs/inf1035/Atelier/atelier2"}},u=[{value:"Allo, Monde!",id:"allo-monde",children:[]},{value:"Horaire",id:"horaire",children:[{value:"Bonus",id:"bonus",children:[]}]},{value:"Double du nombre",id:"double-du-nombre",children:[]},{value:"Carr\xe9 du nombre",id:"carr\xe9-du-nombre",children:[]},{value:"Nom et pr\xe9nom",id:"nom-et-pr\xe9nom",children:[]},{value:"Multiplie deux nombres",id:"multiplie-deux-nombres",children:[]}],d={toc:u},s="wrapper";function c(e){let{components:r,...t}=e;return(0,i.kt)(s,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"allo-monde"},"Allo, Monde!"),(0,i.kt)("p",null,'Affiche le message "Allo, monde!" dans la fen\xeatre de commande.'),(0,i.kt)("h2",{id:"horaire"},"Horaire"),(0,i.kt)("p",null,"Affiche l'horaire suivant dans le fen\xeatre de commande:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Horaire:\n7h00 \u2013 d\xe9jeuner\n12h00 \u2013 diner\n17h00 \u2013 souper\n")),(0,i.kt)("h3",{id:"bonus"},"Bonus"),(0,i.kt)("p",null,"Utilisez seulement qu'un seul appel \xe0 la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"print")," avec une utilisation de caract\xe8res d'\xe9chapement."),(0,i.kt)("h2",{id:"double-du-nombre"},"Double du nombre"),(0,i.kt)("p",null,"Demande \xe0 l\u2019utilisateur de saisir un nombre, le script affiche ensuite\nle double (multiplication par 2) du nombre. L'affichage prends la forme\n",(0,i.kt)("inlineCode",{parentName:"p"},"Double du nombre : NOMBRE"),"."),(0,i.kt)("h2",{id:"carr\xe9-du-nombre"},"Carr\xe9 du nombre"),(0,i.kt)("p",null,"Demande \xe0 l'utilisateur de saisir un nombre, le script affiche ensuite le\nnombre au carr\xe9 (multipli\xe9 par lui-m\xeame). L'affichage prends la forme\n",(0,i.kt)("inlineCode",{parentName:"p"},"Carr\xe9 du nombre : NOMBRE"),"."),(0,i.kt)("h2",{id:"nom-et-pr\xe9nom"},"Nom et pr\xe9nom"),(0,i.kt)("p",null,"Demande \xe0 l\u2019utilisateur de saisir le nom suivi du pr\xe9nom de l'utilisateur\n(avec deux saisis disctinctes). Le script affiche les message suivant\navec le nom et pr\xe9nom de l'utilisateur ",(0,i.kt)("inlineCode",{parentName:"p"},"Bonjour PRENOM NOM!"),"."),(0,i.kt)("h2",{id:"multiplie-deux-nombres"},"Multiplie deux nombres"),(0,i.kt)("p",null,"Demande \xe0 l'utilisateur de saisir deux nombres et affiche le produit des deux nombres. L'affichage prends la forme ",(0,i.kt)("inlineCode",{parentName:"p"},"NOMBRE1 x NOMBRE2 = PRODUIT"),"."))}c.isMDXComponent=!0}}]);