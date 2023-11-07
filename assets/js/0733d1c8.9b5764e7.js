"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[9349],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3127:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={title:"Atelier 3",sidebar_label:"3 - Regroupement, NumPy & pandas"},l=void 0,o={unversionedId:"inf5111/Atelier/atelier3",id:"inf5111/Atelier/atelier3",isDocsHomePage:!1,title:"Atelier 3",description:"Regroupement SQL",source:"@site/docs/inf5111/Atelier/atelier3.md",sourceDirName:"inf5111/Atelier",slug:"/inf5111/Atelier/atelier3",permalink:"/site/docs/inf5111/Atelier/atelier3",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf5111/Atelier/atelier3.md",tags:[],version:"current",frontMatter:{title:"Atelier 3",sidebar_label:"3 - Regroupement, NumPy & pandas"},sidebar:"INF5111Sidebar",previous:{title:"2 - Outils BD",permalink:"/site/docs/inf5111/Atelier/atelier2"},next:{title:"4 - ETL avec pandas",permalink:"/site/docs/inf5111/Atelier/atelier4"}},u=[{value:"Regroupement SQL",id:"regroupement-sql",children:[]},{value:"NumPy base 1",id:"numpy-base-1",children:[]},{value:"NumPy base 2",id:"numpy-base-2",children:[]},{value:"NumPy base 3",id:"numpy-base-3",children:[]},{value:"Pandas",id:"pandas",children:[]}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"regroupement-sql"},"Regroupement SQL"),(0,a.kt)("p",null,"Sur la base de donn\xe9e dvdrental. Trouvez les informations suivantes :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Trouvez la valeur moyenne du prix de location (rental_rate)"),(0,a.kt)("li",{parentName:"ul"},"Trouvez le nombre de film ayant plus de 120 minutes (length)"),(0,a.kt)("li",{parentName:"ul"},"La langue (langage) la plus utilis\xe9 dans les films"),(0,a.kt)("li",{parentName:"ul"},"Trouvez le titre du film avec le plus d'acteurs")),(0,a.kt)("h2",{id:"numpy-base-1"},"NumPy base 1"),(0,a.kt)("p",null,"\xc9crivez un programme NumPy pour cr\xe9er un tableau de 10 z\xe9ros, 10 uns, 10 cinq."),(0,a.kt)("h2",{id:"numpy-base-2"},"NumPy base 2"),(0,a.kt)("p",null,"\xc9crivez un programme NumPy pour cr\xe9er un tableau des entiers de 30 \xe0 70."),(0,a.kt)("h2",{id:"numpy-base-3"},"NumPy base 3"),(0,a.kt)("p",null,"\xc9crivez un programme NumPy pour cr\xe9er un tableau de tous les entiers pairs de 30 \xe0 70."),(0,a.kt)("h2",{id:"pandas"},"Pandas"),(0,a.kt)("p",null,"Avec les donn\xe9es initiales suivantes :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"student_data1 = pd.DataFrame({\n        'id': ['S1', 'S2', 'S3', 'S4', 'S5'],\n         'name': ['Danniella Fenton', 'Ryder Storey', 'Bryce Jensen', 'Ed Bernal', 'Kwame Morin'], \n        'marks': [200, 210, 190, 222, 199]})\n\n\nexam_data = pd.DataFrame({\n        'student_id': ['S1', 'S2', 'S3', 'S4', 'S5' ],\n        'exam_id': [23, 45, 12, 67, 21]})\n")),(0,a.kt)("p",null,"\xc9crivez le code qui permet de faire la jointure entre les deux dataframe. Faire attention, la colonne ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," de ",(0,a.kt)("inlineCode",{parentName:"p"},"student_data1")," doit \xeatre reli\xe9 \xe0 la colonne ",(0,a.kt)("inlineCode",{parentName:"p"},"student_id")," de ",(0,a.kt)("inlineCode",{parentName:"p"},"exam_data"),"."))}d.isMDXComponent=!0}}]);