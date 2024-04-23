"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[676],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,g=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3001:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=t(8168),a=(t(6540),t(5680));const i={title:"Fonctions et Tests",sidebar_label:"3 - Fonctions"},s=void 0,l={unversionedId:"inf135/cours/cours3",id:"inf135/cours/cours3",isDocsHomePage:!1,title:"Fonctions et Tests",description:"Objectifs de la semaine",source:"@site/docs/inf135/cours/cours3.md",sourceDirName:"inf135/cours",slug:"/inf135/cours/cours3",permalink:"/site/docs/inf135/cours/cours3",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf135/cours/cours3.md",tags:[],version:"current",frontMatter:{title:"Fonctions et Tests",sidebar_label:"3 - Fonctions"},sidebar:"INF135Sidebar",previous:{title:"2 - Boucles",permalink:"/site/docs/inf135/cours/cours2"},next:{title:"4 - Chemin, validation, tableaux",permalink:"/site/docs/inf135/cours/cours4"}},o=[{value:"Objectifs de la semaine",id:"objectifs-de-la-semaine",children:[]},{value:"Fonctions",id:"fonctions",children:[]},{value:"Pr\xe9sentation d&#39;une fonction minimale",id:"pr\xe9sentation-dune-fonction-minimale",children:[]},{value:"Param\xe8tres d&#39;entr\xe9s",id:"param\xe8tres-dentr\xe9s",children:[]},{value:"Retours",id:"retours",children:[]},{value:"Exercice 1",id:"exercice-1",children:[]},{value:"Multiple retours",id:"multiple-retours",children:[]},{value:"Pr\xe9sentation de l&#39;en-t\xeate d&#39;une fonction",id:"pr\xe9sentation-de-len-t\xeate-dune-fonction",children:[]},{value:"Exercice 2",id:"exercice-2",children:[]},{value:"Fonctions locales",id:"fonctions-locales",children:[]},{value:"Contexte et dur\xe9e de vies des variables",id:"contexte-et-dur\xe9e-de-vies-des-variables",children:[]},{value:"Passage par valeurs",id:"passage-par-valeurs",children:[]},{value:"Exercice 3",id:"exercice-3",children:[]},{value:"Variables globales",id:"variables-globales",children:[]},{value:"Tests",id:"tests",children:[]},{value:"Exemple de tests",id:"exemple-de-tests",children:[]},{value:"Exercice 4",id:"exercice-4",children:[]},{value:"Tests de valeurs fractionnaires",id:"tests-de-valeurs-fractionnaires",children:[]}],u={toc:o},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"objectifs-de-la-semaine"},"Objectifs de la semaine"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fonctions",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Fonction minimale"),(0,a.yg)("li",{parentName:"ul"},"Param\xe8tres d'entr\xe9s"),(0,a.yg)("li",{parentName:"ul"},"Retour"),(0,a.yg)("li",{parentName:"ul"},"Multiple retours"))),(0,a.yg)("li",{parentName:"ul"},"Fonctions vs scripts",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Port\xe9es des fonctions"),(0,a.yg)("li",{parentName:"ul"},"Dur\xe9es de vies des variables"),(0,a.yg)("li",{parentName:"ul"},"Passage par valeurs"),(0,a.yg)("li",{parentName:"ul"},"Variables globales"))),(0,a.yg)("li",{parentName:"ul"},"Tests")),(0,a.yg)("h2",{id:"fonctions"},"Fonctions"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Les fonctions sont des s\xe9ries d'instructions contenues dans un ensemble pouvant \xeatre facilement re-utilis\xe9. Par convention, la fonction doit faire une t\xe2che simple et pr\xe9cise;"),(0,a.yg)("li",{parentName:"ul"},"Contrairement aux scripts, les fonctions n'auront pas de saisit avec ",(0,a.yg)("inlineCode",{parentName:"li"},"input")," et pas d'affichage avec ",(0,a.yg)("inlineCode",{parentName:"li"},"fprintf"),". Cela \xe0 moins d'\xeatre express\xe9ment demand\xe9."),(0,a.yg)("li",{parentName:"ul"},"Les fonctions peuvents demand\xe9s des param\xe8tres (ou arguments) d'entr\xe9es. Ce sont des informations pr\xe9alables aux calculs de la fonction;"),(0,a.yg)("li",{parentName:"ul"},"Les fonctions peuvent \xe9mettrent des r\xe9ponses que l'on appel retour.")),(0,a.yg)("h2",{id:"pr\xe9sentation-dune-fonction-minimale"},"Pr\xe9sentation d'une fonction minimale"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-MATLAB"},"function nomFonction\n    instructions\nend\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Une fonction est dans un fichier de fonctions qui porte le m\xeame nom que le nom de la fonction;"),(0,a.yg)("li",{parentName:"ul"},"La fonction peut ensuite \xeatre appell\xe9 par son nom de d'autre programme.")),(0,a.yg)("h2",{id:"param\xe8tres-dentr\xe9s"},"Param\xe8tres d'entr\xe9s"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Une fonction peut demander des param\xe8tres d'entr\xe9s;"),(0,a.yg)("li",{parentName:"ul"},"Ceux-ci seront dans un liste apr\xe8s le nom de la fonctions entre parenth\xe8ses d\xe9limit\xe9s par une virgule;"),(0,a.yg)("li",{parentName:"ul"},"Le param\xe8tres d'entr\xe9s seront fournies par l'appelant de la fonction et peuvent donc \xeatre utilis\xe9 \xe0 l'int\xe9rieur des instruction de la fonctions sans \xeatre assign\xe9 pr\xe9alablement.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-MATLAB"},"function fcnAvecIn(var1, var2)\n    fprintf('%g', var1 * var2)\nend\n")),(0,a.yg)("h2",{id:"retours"},"Retours"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"La fonction peut retourner un r\xe9sultat qui sera utilisable par l'appelant de la fonction."),(0,a.yg)("li",{parentName:"ul"},"Le retour se retrouv\xe9 \xe0 gauche du nom de la fonction entre braquette carr\xe9s suivi d'une assignation."),(0,a.yg)("li",{parentName:"ul"},'Le retour \xe9labore une variable de retour dans laquelle la "r\xe9ponse" de la fonction est assign\xe9.'),(0,a.yg)("li",{parentName:"ul"},"Une fonction qui ne contient pas de retour est aussi nomm\xe9e une proc\xe9dure.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-MATLAB"},"function [monRetour] = fcnAvecRetour\n    monRetour = ...\nend\n")),(0,a.yg)("h2",{id:"exercice-1"},"Exercice 1"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\xc9crivez une fonction qui trouve l\u2019aire d\u2019un triangle \xe0 partir de sa base et sa hauteur."),(0,a.yg)("li",{parentName:"ul"},"\xc9crivez une fonction qui d\xe9termine si un nombre est impaire. Indice : utilisez la fonction mod.")),(0,a.yg)("h2",{id:"multiple-retours"},"Multiple retours"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Il est possible d'avoir plusieurs retours \xe0 une fonction. La cr\xe9ation de la fonctions garde les m\xeames r\xe8gles, plusieurs valeurs de retours d\xe9limit\xe9 par un virgule seront d\xe9sign\xe9 et ensuite assign\xe9 durant la fonction."),(0,a.yg)("li",{parentName:"ul"},"L'appel d'une fonction \xe0 multi-retours demande de faire une multi-assignation.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-MATLAB"},"function [retour1, retour2] = fcnMultiRetour\n    retour1 = ...\n    retour2 = ...\nend\n\n% L'appel de la fonction utilise la multi-assignation\n[a, b] = fcnMultiRetour\n")),(0,a.yg)("h2",{id:"pr\xe9sentation-de-len-t\xeate-dune-fonction"},"Pr\xe9sentation de l'en-t\xeate d'une fonction"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-MATLAB"},"function [retour1] = nomFonction(arg1, arg2)\n% Description g\xe9n\xe9rale de la fonction\n%\n% Args:\n%   arg1 (double) - Description de l'arg1\n%   arg2 (logical) - Description de l'arg2\n% Returns:\n%   double: Description de retour1\n% Example:\n%   >> nomFonction(4,6)\n%       ans = \n%       34\n%\n\ninstructions\nend\n")),(0,a.yg)("h2",{id:"exercice-2"},"Exercice 2"),(0,a.yg)("p",null,"\xc9crivez une fonction qui trouve l\u2019aire et le p\xe9rim\xe8tre d\u2019un triangle \xe0 partir de sa base et sa hauteur."),(0,a.yg)("h2",{id:"fonctions-locales"},"Fonctions locales"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Une fonction qui est la premi\xe8re dans son document ",(0,a.yg)("inlineCode",{parentName:"li"},".m")," est consid\xe9r\xe9e \xe0 port\xe9e globale. Tous programmes et scripts pourront l\u2019utiliser."),(0,a.yg)("li",{parentName:"ul"},"Une fonction qui n'est pas la premi\xe8re dans son document ",(0,a.yg)("inlineCode",{parentName:"li"},".m")," est consid\xe9r\xe9e \xe0 port\xe9e locale. Seul les sous-programmes dans le m\xeame fichier pourront l\u2019utiliser. Cela inclut les scripts.")),(0,a.yg)("h2",{id:"contexte-et-dur\xe9e-de-vies-des-variables"},"Contexte et dur\xe9e de vies des variables"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Tout ce qui se passe \xe0 l'int\xe9rieur des fonctions est d\xe9truit apr\xe8s l'appel de la fonction;"),(0,a.yg)("li",{parentName:"ul"},"Toutes d\xe9claration de variables \xe0 l'int\xe9rieur d'une fonction est d\xe9truite apr\xe8s l'appel de la fonction;"),(0,a.yg)("li",{parentName:"ul"},"Seule la valeur de retour est renvoy\xe9e.")),(0,a.yg)("h2",{id:"passage-par-valeurs"},"Passage par valeurs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Les param\xe8tres et les retours sont renomm\xe9 pour la dur\xe9e de la fonction. Les noms des param\xe8tres de la fonction se nomme param\xe8tres formels;"),(0,a.yg)("li",{parentName:"ul"},"Seul leur valeurs seront transf\xe9r\xe9 entre la fonction et l'appelant. On utilise le terme param\xe8tres effectifs;"),(0,a.yg)("li",{parentName:"ul"},"Les noms des param\xe8tres et des retours n'ont aucune incidence;"),(0,a.yg)("li",{parentName:"ul"},"L'ordre des param\xe8tre et des retours est ce qui sera consid\xe9r\xe9.")),(0,a.yg)("h2",{id:"exercice-3"},"Exercice 3"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Quel est le r\xe9sultat de l'affichage du script ",(0,a.yg)("inlineCode",{parentName:"li"},"passageParValeurTest.m"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-MATLAB"},"% passageParValeurTest.m\nx = 4;\nz = 8;\ny = 6;\nx = passageParValeur(y,x);\nfprintf('La valeur de x,y et z sont : %g %g %g\\n', x, y, z);\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-MATLAB"},"% passageParValeur.m\nfunction  [z] = passageParValeur(x, y)\n    x = x + 2;\n    y = y - 2;\n    z = x - y + 2;\nend\n")),(0,a.yg)("h2",{id:"variables-globales"},"Variables globales"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Une variable global permet de li\xe9 une variable de l\u2019espace de travail normal \xe0 l\u2019espace de travail d\u2019une fonction;"),(0,a.yg)("li",{parentName:"ul"},"La variable doit \xeatre indiquer comme globale dans l\u2019espace de travail dans les deux endroit avec la command ",(0,a.yg)("inlineCode",{parentName:"li"},"global nomVar")," pour \xeatre li\xe9;"),(0,a.yg)("li",{parentName:"ul"},"Sauf avis contraire, l\u2019utilisation de variable globale est ",(0,a.yg)("strong",{parentName:"li"},"interdite")," dans le cours.")),(0,a.yg)("h2",{id:"tests"},"Tests"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Pour assurer la bonne op\xe9rations de nos fonctions, des tests seront impl\xe9ment\xe9s;"),(0,a.yg)("li",{parentName:"ul"},"Un test est un script qui, par convention, utilise le nom du programme \xe0 tester suivie du mot ",(0,a.yg)("inlineCode",{parentName:"li"},"Test"),";"),(0,a.yg)("li",{parentName:"ul"},"La fonction\xa0",(0,a.yg)("inlineCode",{parentName:"li"},"assert")," teste une condition. La fonction ne fait rien si la condition est vrai et g\xe9n\xe8re une erreur si la condition est fausse"),(0,a.yg)("li",{parentName:"ul"},"Le script de tests utilise la fonction ",(0,a.yg)("inlineCode",{parentName:"li"},"assert")," pour faire des appels de la fonctions \xe0 tester avec des param\xe8tres d'ent\xe9res arbitraire;"),(0,a.yg)("li",{parentName:"ul"},"Les fonction de tests n'ont pas de commentaires.")),(0,a.yg)("h2",{id:"exemple-de-tests"},"Exemple de tests"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-MATLAB"},"% Tests pour la fonctions mod\nassert(mod(5, 3) == 2)\nassert(mod(23, 1) == 0)\nassert(mod(4, 12) == 4)\n")),(0,a.yg)("h2",{id:"exercice-4"},"Exercice 4"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\xc9crivez des scripts de tests pour les fonctions de calcul d'aire et de d\xe9tection de nombre impaire.")),(0,a.yg)("h2",{id:"tests-de-valeurs-fractionnaires"},"Tests de valeurs fractionnaires"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Les valeurs fractionnaires sont plus difficiles \xe0 tester car la comparaisont de valeurs fractionnaires est assez difficile;"),(0,a.yg)("li",{parentName:"ul"},"Pour tester des valeurs fractionnaires, des valeurs diff\xe9rentielles absolues seront utilis\xe9es pour faire le test.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-MATLAB"},"% Tests de la fonction sin\nassert(abs(sin(1) - 0.8415) < 0.0001)\nassert(abs(sin(2) - 0.9093) < 0.0001)\nassert(abs(sin(1.5) - 0.9975) < 0.0001)\n")))}d.isMDXComponent=!0}}]);