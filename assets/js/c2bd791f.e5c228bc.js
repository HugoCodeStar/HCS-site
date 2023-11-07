"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[5977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1741:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={title:"Structures de contr\xf4les",sidebar_label:"2 - If, While, For"},l=void 0,o={unversionedId:"inf1256/cours/cours2",id:"inf1256/cours/cours2",isDocsHomePage:!1,title:"Structures de contr\xf4les",description:"Terminaison de ligne avec print",source:"@site/docs/inf1256/cours/cours2.md",sourceDirName:"inf1256/cours",slug:"/inf1256/cours/cours2",permalink:"/site/docs/inf1256/cours/cours2",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf1256/cours/cours2.md",tags:[],version:"current",frontMatter:{title:"Structures de contr\xf4les",sidebar_label:"2 - If, While, For"},sidebar:"INF1256Sidebar",previous:{title:"1 - Bases",permalink:"/site/docs/inf1256/cours/cours1"},next:{title:"3 - Fonctions",permalink:"/site/docs/inf1256/cours/cours3"}},u=[{value:"Terminaison de ligne avec <code>print</code>",id:"terminaison-de-ligne-avec-print",children:[]},{value:"S\xe9parateur d&#39;item avec <code>print</code>",id:"s\xe9parateur-ditem-avec-print",children:[]},{value:"Concat\xe9nation de chaine avec <code>+</code>",id:"concat\xe9nation-de-chaine-avec-",children:[]},{value:"Formatage des donn\xe9es avec <code>format</code>",id:"formatage-des-donn\xe9es-avec-format",children:[]},{value:"Op\xe9rations arithm\xe9tique",id:"op\xe9rations-arithm\xe9tique",children:[]},{value:"Op\xe9rateurs relationnels",id:"op\xe9rateurs-relationnels",children:[]},{value:"Options de la conditionnel <code>if</code>",id:"options-de-la-conditionnel-if",children:[]},{value:"Structure de contr\xf4le it\xe9rative <code>while</code>",id:"structure-de-contr\xf4le-it\xe9rative-while",children:[]},{value:"Exercice\xa01",id:"exercice1",children:[]},{value:"Structure de contr\xf4le it\xe9ratif <code>for</code>",id:"structure-de-contr\xf4le-it\xe9ratif-for",children:[]},{value:"Exercice\xa02",id:"exercice2",children:[]},{value:"Op\xe9rateurs logiques",id:"op\xe9rateurs-logiques",children:[]},{value:"Exercice\xa03",id:"exercice3",children:[]}],p={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"terminaison-de-ligne-avec-print"},"Terminaison de ligne avec ",(0,a.kt)("inlineCode",{parentName:"h2"},"print")),(0,a.kt)("p",null,"Il est possible de supprimer le saut de ligne du print avec le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"end")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print('One', end=' ') \nprint('Two', end=' ') \nprint('Three')\n# Affiche 'OneTwoThree'\n")),(0,a.kt)("h2",{id:"s\xe9parateur-ditem-avec-print"},"S\xe9parateur d'item avec ",(0,a.kt)("inlineCode",{parentName:"h2"},"print")),(0,a.kt)("p",null,"Il est aussi possible de change le s\xe9parateur d'items qui est l'espace par d\xe9fault."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Affiche 'One Two Three'. S\xe9parateur d'espace.\nprint('One', 'Two', 'Three') \n\n# Affiche 'OneTwoThree'. S\xe9prateur vide.\nprint('One', 'Two', 'Three', sep='') \n\n# Affiche 'One,Two,Three'. S\xe9parateur virgule.\nprint('One', 'Two', 'Three', sep=',')\n")),(0,a.kt)("h2",{id:"concat\xe9nation-de-chaine-avec-"},"Concat\xe9nation de chaine avec ",(0,a.kt)("inlineCode",{parentName:"h2"},"+")),(0,a.kt)("p",null,"Le ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," peut \xeatre utilis\xe9 entre deux chaines pour faire la concat\xe9nation (coll\xe9) entre les deux chaines."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Affiche 'Ceci est un test.'\nprint('Ceci est ' + 'un test.')\n")),(0,a.kt)("h2",{id:"formatage-des-donn\xe9es-avec-format"},"Formatage des donn\xe9es avec ",(0,a.kt)("inlineCode",{parentName:"h2"},"format")),(0,a.kt)("p",null,"La fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," permet de faire le formatage de valeur num\xe9rique pour un affichage."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"format")," re\xe7oit la valeur \xe0 formater et un ",(0,a.kt)("em",{parentName:"p"},"sp\xe9cificateur de formatage"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Affiche '123.45'\n# Le nombre \xe0 formater est 123.45678\n# Le sp\xe9cificateur de formatage est '.2f'\n# Le .2 indique la pr\xe9cision\n# Le f indique que le nombre est un float (point-flottant)\nprint(format(123.45678, '.2f'))\n\n# Affiche '1.234568e+04'\nprint(format(12345.6789, 'e'))\n# Affiche '1.23e+04'\nprint(format(12345.6789, '.2e'))\n\n# Affiche '50.000000%'\nprint(format(0.5, '%'))\n# Affiche '50%'\nprint(format(0.5, '.0%'))\n")),(0,a.kt)("h2",{id:"op\xe9rations-arithm\xe9tique"},"Op\xe9rations arithm\xe9tique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Symbole"),(0,a.kt)("th",{parentName:"tr",align:null},"Op\xe9ration"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"+")),(0,a.kt)("td",{parentName:"tr",align:null},"Addition"),(0,a.kt)("td",{parentName:"tr",align:null},"Additionne deux nombres")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-")),(0,a.kt)("td",{parentName:"tr",align:null},"Soustraction"),(0,a.kt)("td",{parentName:"tr",align:null},"Soustrait deux nombres")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"*")),(0,a.kt)("td",{parentName:"tr",align:null},"Multiplication"),(0,a.kt)("td",{parentName:"tr",align:null},"Multiplication de deux nombres")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/")),(0,a.kt)("td",{parentName:"tr",align:null},"Division"),(0,a.kt)("td",{parentName:"tr",align:null},"Division de deux nombres")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"//")),(0,a.kt)("td",{parentName:"tr",align:null},"Division enti\xe8re"),(0,a.kt)("td",{parentName:"tr",align:null},"Division de deux nombres, garde seulement la partie enti\xe8re")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"%")),(0,a.kt)("td",{parentName:"tr",align:null},"Modulo"),(0,a.kt)("td",{parentName:"tr",align:null},"Trouve le restant d'une division")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"**")),(0,a.kt)("td",{parentName:"tr",align:null},"Puissance"),(0,a.kt)("td",{parentName:"tr",align:null},"Met un nombre \xe0 une puissance")))),(0,a.kt)("h2",{id:"op\xe9rateurs-relationnels"},"Op\xe9rateurs relationnels"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Les op\xe9rateurs relationnels permettent de faire des comparaisons entre deux expressions;"),(0,a.kt)("li",{parentName:"ul"},"Les op\xe9rateurs donnent toujours un r\xe9sultat logique bool\xe9en(vrai ou faux);"),(0,a.kt)("li",{parentName:"ul"},"Les op\xe9rateurs sont :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"<="),", ",(0,a.kt)("inlineCode",{parentName:"li"},">"),", ",(0,a.kt)("inlineCode",{parentName:"li"},">="),", ",(0,a.kt)("inlineCode",{parentName:"li"},"==")," (\xe9galit\xe9), ",(0,a.kt)("inlineCode",{parentName:"li"},"!=")," (diff\xe9rent de)."))),(0,a.kt)("li",{parentName:"ul"},"Il est \xe0 noter ici que l'op\xe9rateur d'\xe9galit\xe9 utilise ",(0,a.kt)("inlineCode",{parentName:"li"},"==")," car l'assignation utilise d\xe9j\xe0 le simple ",(0,a.kt)("inlineCode",{parentName:"li"},"="),".")),(0,a.kt)("h2",{id:"options-de-la-conditionnel-if"},"Options de la conditionnel ",(0,a.kt)("inlineCode",{parentName:"h2"},"if")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Plusieurs options sont disponibles avec le if;")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"if expression logique:\n    instructions\nelif expression logique:\n    instructions\nelse:\n    instructions\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Seul un des blocs d\u2019instructions (d\xe9cision) du ",(0,a.kt)("inlineCode",{parentName:"li"},"if")," est ex\xe9cut\xe9"),(0,a.kt)("li",{parentName:"ul"},"Le ",(0,a.kt)("inlineCode",{parentName:"li"},"elif")," et le ",(0,a.kt)("inlineCode",{parentName:"li"},"else")," sont facultatifs"),(0,a.kt)("li",{parentName:"ul"},"Le ",(0,a.kt)("inlineCode",{parentName:"li"},"elif")," peut \xeatre r\xe9p\xe9t\xe9 \xe0 plusieurs reprises avec diff\xe9rentes expressions")),(0,a.kt)("h2",{id:"structure-de-contr\xf4le-it\xe9rative-while"},"Structure de contr\xf4le it\xe9rative ",(0,a.kt)("inlineCode",{parentName:"h2"},"while")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"La boucle ",(0,a.kt)("inlineCode",{parentName:"li"},"while")," r\xe9p\xe8te les instructions jusqu\u2019\xe0 ce que la condition soit fausse\u2009;")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"while condition:\n    instructions\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Le ",(0,a.kt)("inlineCode",{parentName:"li"},"while")," est habituellement utilis\xe9 quand on ne connait pas le nombre d\u2019it\xe9rations \xe0 faire.")),(0,a.kt)("h2",{id:"exercice1"},"Exercice\xa01"),(0,a.kt)("p",null,"\xc9crivez des scripts qui\xa0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Saisit un nombre \xe0 l\u2019utilisateur et recommence la saisit tant que le nombre saisit n\u2019est pas 0\u2009;"),(0,a.kt)("li",{parentName:"ul"},"Saisit un nombre n et calcule la somme des nombres de 1 \xe0 n."),(0,a.kt)("li",{parentName:"ul"},"Saisit un nombre n et calcule le nombre factoriel de n. Le nombre factoriel est la multiplication des nombres de 1 \xe0 n. Par exemple, le nombre factoriel de 5 est donn\xe9 par 1x2x3x4x5.")),(0,a.kt)("h2",{id:"structure-de-contr\xf4le-it\xe9ratif-for"},"Structure de contr\xf4le it\xe9ratif ",(0,a.kt)("inlineCode",{parentName:"h2"},"for")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Lorsque le nombre d\u2019it\xe9rations est connu, la boucle ",(0,a.kt)("inlineCode",{parentName:"li"},"for")," sera utilis\xe9e\u2009;"),(0,a.kt)("li",{parentName:"ul"},"La boucle ",(0,a.kt)("inlineCode",{parentName:"li"},"for")," inclut un compteur qui est configur\xe9 au d\xe9but de la boucle\u2009;")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"for x in liste:\n    instructions\n\nfor x in [4, 56, 3]:\n    intructions\n\nfor x in range(10):\n    instructions\n")),(0,a.kt)("h2",{id:"exercice2"},"Exercice\xa02"),(0,a.kt)("p",null,"\xc9crivez des scripts qui\xa0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Saisit un nombre n et calcule la somme des nombres de 1 \xe0 n en utilisant la boucle ",(0,a.kt)("inlineCode",{parentName:"li"},"for"),";"),(0,a.kt)("li",{parentName:"ul"},"Saisit un nombre n et calcule la somme des nombres pairs de 1 \xe0 n\u2009;"),(0,a.kt)("li",{parentName:"ul"},"Saisit 10 nombres cons\xe9cutivement. D\xe9termine et affiche le nombre de fois dont le nombre\xa00 a \xe9t\xe9 saisi.")),(0,a.kt)("h2",{id:"op\xe9rateurs-logiques"},"Op\xe9rateurs logiques"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Les op\xe9rateurs logiques op\xe8rent sur des valeurs logiques et retournent des valeurs logiques\u2009;",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"La conjonction ET ",(0,a.kt)("inlineCode",{parentName:"li"},"and")," ;"),(0,a.kt)("li",{parentName:"ul"},"La disjonction OU\u2009",(0,a.kt)("inlineCode",{parentName:"li"},"or")," ;"),(0,a.kt)("li",{parentName:"ul"},"La n\xe9gation NON ",(0,a.kt)("inlineCode",{parentName:"li"},"not"),".")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"A")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"B")),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"th"},"A and B")),(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"th"},"A or B")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:"center"},"False"),(0,a.kt)("td",{parentName:"tr",align:"center"},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:"center"},"False"),(0,a.kt)("td",{parentName:"tr",align:"center"},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:"center"},"False"),(0,a.kt)("td",{parentName:"tr",align:"center"},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:"center"},"True"),(0,a.kt)("td",{parentName:"tr",align:"center"},"True")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"A")),(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"th"},"not A")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:"center"},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:"center"},"False")))),(0,a.kt)("h2",{id:"exercice3"},"Exercice\xa03"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xc9crivez un script qui saisit l\u2019\xe2ge d\u2019un utilisateur et qui affiche si l\u2019utilisateur a droit \xe0 un tarif r\xe9duit. Le tarif r\xe9duit est disponible pour les personnes d\u2019\xe2ge mineur (plus petit que 18) ou d\u2019\xe2ge d\u2019or (plus grand que 60).")))}d.isMDXComponent=!0}}]);