(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||a;return n?i.a.createElement(m,o(o({ref:t},c),{},{components:n})):i.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),a=(n(0),n(101)),s={title:"Liste en compr\xe9hension, tests unitaires, environnement de d\xe9veloppement",sidebar_label:"8 - Liste, Test & IDE"},o={unversionedId:"inf1256/cours/cours8",id:"inf1256/cours/cours8",isDocsHomePage:!1,title:"Liste en compr\xe9hension, tests unitaires, environnement de d\xe9veloppement",description:"Liste en compr\xe9hension",source:"@site/docs/inf1256/cours/cours8.md",slug:"/inf1256/cours/cours8",permalink:"/site/docs/inf1256/cours/cours8",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf1256/cours/cours8.md",version:"current",sidebar_label:"8 - Liste, Test & IDE",sidebar:"INF1256Sidebar",previous:{title:"Sets, dictionnaires et format de fichiers de donn\xe9es",permalink:"/site/docs/inf1256/cours/cours7"},next:{title:"Programmes \xe0 faire de l'atelier 1",permalink:"/site/docs/inf1256/atelier/atelier1"}},l=[{value:"Liste en compr\xe9hension",id:"liste-en-compr\xe9hension",children:[]},{value:"Ajout de condition ou de boucle imbriqu\xe9s",id:"ajout-de-condition-ou-de-boucle-imbriqu\xe9s",children:[]},{value:"Test unitaires",id:"test-unitaires",children:[]},{value:"Tests",id:"tests",children:[]},{value:"Exemple de tests",id:"exemple-de-tests",children:[]},{value:"Tests de valeurs fractionnaires",id:"tests-de-valeurs-fractionnaires",children:[]},{value:"IDE",id:"ide",children:[]},{value:"PyCharm",id:"pycharm",children:[{value:"D\xe9boguage",id:"d\xe9boguage",children:[]}]},{value:"Jupyter Lab/Notebooks",id:"jupyter-labnotebooks",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"liste-en-compr\xe9hension"},"Liste en compr\xe9hension"),Object(a.b)("p",null,"Une liste en compr\xe9hension est un raccourci syntaxique pour cr\xe9\xe9 des liste. Cela permet de faire ce qui est habituellement dans une boucle sur une seule ligne."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"squares = []\nfor x in range(10):\n    squares.append(x**2)\n\n# \xc9quivalent avec une liste en compr\xe9hension\nsquares = [x**2 for x in range(10)]\n")),Object(a.b)("h2",{id:"ajout-de-condition-ou-de-boucle-imbriqu\xe9s"},"Ajout de condition ou de boucle imbriqu\xe9s"),Object(a.b)("p",null,"Il est possible d'avoir apr\xe8s le ",Object(a.b)("inlineCode",{parentName:"p"},"for")," initial d'autre ",Object(a.b)("inlineCode",{parentName:"p"},"for")," ou des conditionnelles ",Object(a.b)("inlineCode",{parentName:"p"},"if"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"combs = []\nfor x in [1,2,3]:\n    for y in [3,1,4]:\n        if x != y:\n            combs.append((x, y))\n\n# \xc9quivalent\ncombs = [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]\n")),Object(a.b)("h2",{id:"test-unitaires"},"Test unitaires"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Les tests unitaires est un m\xe9thodes standardis\xe9 de v\xe9rifier le bon fonctionnement des fonctions de notres programmes. "),Object(a.b)("li",{parentName:"ul"},"Les tests unitaires est des fonctions sp\xe9cialis\xe9 pour v\xe9rifier le r\xe9sultats de d'autres fonctions.")),Object(a.b)("h2",{id:"tests"},"Tests"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Pour assurer la bonne op\xe9ration de nos fonctions, des tests seront impl\xe9ment\xe9s;"),Object(a.b)("li",{parentName:"ul"},"Nous utiliserons la libraire ",Object(a.b)("inlineCode",{parentName:"li"},"pytest")," pour faire nos tests. Il existe d'autres librairies de tests."),Object(a.b)("li",{parentName:"ul"},"Un test est un script qui, par convention, utilise le nom du programme \xe0 tester suivi du mot ",Object(a.b)("inlineCode",{parentName:"li"},"test"),";"),Object(a.b)("li",{parentName:"ul"},"Le test va convenir des fonctions d\xe9butant par le mot ",Object(a.b)("inlineCode",{parentName:"li"},"test_")," qui seront utilis\xe9es par ",Object(a.b)("inlineCode",{parentName:"li"},"pytest"),";"),Object(a.b)("li",{parentName:"ul"},"La fonction\xa0",Object(a.b)("inlineCode",{parentName:"li"},"assert")," teste une condition. La fonction ne fait rien si la condition est vraie et g\xe9n\xe8re une erreur si la condition est fausse."),Object(a.b)("li",{parentName:"ul"},"Le script de tests utilise la fonction ",Object(a.b)("inlineCode",{parentName:"li"},"assert")," pour faire des appels de la fonction \xe0 tester avec des param\xe8tres d'entr\xe9es arbitraires;"),Object(a.b)("li",{parentName:"ul"},"Les fonctions de tests n'ont pas de commentaires.")),Object(a.b)("h2",{id:"exemple-de-tests"},"Exemple de tests"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"# Tests pour des fonctions du module math\nimport math\n\ndef test_factorial():\n    assert math.factorial(4) == 24\n    assert math.factorial(20) == 2432902008176640000\n\ndef test_gcd():\n    assert math.gcd(8, 6) == 2\n")),Object(a.b)("h2",{id:"tests-de-valeurs-fractionnaires"},"Tests de valeurs fractionnaires"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Les valeurs fractionnaires sont plus difficiles \xe0 tester, car la comparaison de valeurs fractionnaires est assez difficile;"),Object(a.b)("li",{parentName:"ul"},"Pour tester des valeurs fractionnaires, des valeurs diff\xe9rentielles absolues seront utilis\xe9es pour faire le test ou le module ",Object(a.b)("inlineCode",{parentName:"li"},"pytest")," nous fournit la fonction ",Object(a.b)("inlineCode",{parentName:"li"},"approx"),".")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"import pytest\nimport math\n\n# Tests de la fonction sin\nassert math.fabs(math.sin(1) - 0.8415) < 0.0001\nassert math.fabs(math.sin(2) - 0.9093) < 0.0001 \nassert math.fabs(math.sin(1.5) - 0.9975) < 0.0001 \n\nassert math.sin(1) == pytest.approx(0.8414709848)\n")),Object(a.b)("h2",{id:"ide"},"IDE"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Les environnements de d\xe9veloppement (Integrated Development Environment - IDE) permettent de centraliser dans un application le d\xe9veloppement de programme en Python."),Object(a.b)("li",{parentName:"ul"},"Inversement, il est possible d'execut\xe9 des script dans la ligne de commande de l'ordinateurs."),Object(a.b)("li",{parentName:"ul"},"Il existe une panoplie d'IDE. Deux seront regarder aujourd'hui :",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"PyCharm"),Object(a.b)("li",{parentName:"ul"},"Jupiter Notebook")))),Object(a.b)("h2",{id:"pycharm"},"PyCharm"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.jetbrains.com/pycharm/"}),"https://www.jetbrains.com/pycharm/")),Object(a.b)("li",{parentName:"ul"},"PyCharm est un IDE pour le d\xe9veloppement d'application en python.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Gestion de plusieurs fichiers"),Object(a.b)("li",{parentName:"ul"},"Installation de module externe avec pip"),Object(a.b)("li",{parentName:"ul"},"D\xe9boguage de code pas \xe0 pas")))),Object(a.b)("h3",{id:"d\xe9boguage"},"D\xe9boguage"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Permet de voir chaque pas du programme"),Object(a.b)("li",{parentName:"ul"},"Le programme continue jusqu'au prochain point d'arr\xeat"),Object(a.b)("li",{parentName:"ul"},"Les structure de donn\xe9es peuvents \xeatre \xe9valu\xe9 localement.")),Object(a.b)("h2",{id:"jupyter-labnotebooks"},"Jupyter Lab/Notebooks"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://jupyter.org/"}),"https://jupyter.org/")),Object(a.b)("li",{parentName:"ul"},"Interface web avec un m\xe9lange de texte et d'instruction"),Object(a.b)("li",{parentName:"ul"},"Tr\xe8s utile pour de la visualisation de probl\xe8me")))}u.isMDXComponent=!0}}]);