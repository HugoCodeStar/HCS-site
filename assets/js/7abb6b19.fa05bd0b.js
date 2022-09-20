"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[1003],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},u=Object.keys(e);for(a=0;a<u.length;a++)t=u[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)t=u[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,u=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,y=c["".concat(o,".").concat(m)]||c[m]||d[m]||u;return t?a.createElement(y,l(l({ref:n},p),{},{components:t})):a.createElement(y,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var u=t.length,l=new Array(u);l[0]=c;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<u;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3932:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=t(7462),r=t(3366),u=(t(7294),t(3905)),l=["components"],i={title:"NumPy, librairie de calcul scientifique de Python",sidebar_label:"X - NumPy"},o=void 0,s={unversionedId:"inf5111/Cours/numpy",id:"inf5111/Cours/numpy",isDocsHomePage:!1,title:"NumPy, librairie de calcul scientifique de Python",description:"NumPy",source:"@site/docs/inf5111/Cours/numpy.md",sourceDirName:"inf5111/Cours",slug:"/inf5111/Cours/numpy",permalink:"/site/docs/inf5111/Cours/numpy",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf5111/Cours/numpy.md",tags:[],version:"current",frontMatter:{title:"NumPy, librairie de calcul scientifique de Python",sidebar_label:"X - NumPy"},sidebar:"INF5111Sidebar",previous:{title:"3 - Intro BD",permalink:"/site/docs/inf5111/Cours/cours3"},next:{title:"Intro",permalink:"/site/docs/inf5111"}},p=[{value:"NumPy",id:"numpy",children:[{value:"Installation et importation de NumPy",id:"installation-et-importation-de-numpy",children:[]},{value:"Quelle est la diff\xe9rence entre une liste Python et un tableau NumPy?",id:"quelle-est-la-diff\xe9rence-entre-une-liste-python-et-un-tableau-numpy",children:[]},{value:"Qu&#39;est-ce qu&#39;un tableau?",id:"quest-ce-quun-tableau",children:[]},{value:"Sp\xe9cification de votre type de donn\xe9es",id:"sp\xe9cification-de-votre-type-de-donn\xe9es",children:[]},{value:"Ajouter, supprimer et trier des \xe9l\xe9ments",id:"ajouter-supprimer-et-trier-des-\xe9l\xe9ments",children:[]},{value:"Comment conna\xeetre la forme et la taille d&#39;un tableau?",id:"comment-conna\xeetre-la-forme-et-la-taille-dun-tableau",children:[]},{value:"Indexation et d\xe9coupage",id:"indexation-et-d\xe9coupage",children:[]}]}],d={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,l);return(0,u.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"numpy"},"NumPy"),(0,u.kt)("p",null,"NumPy (Numerical Python) est une biblioth\xe8que Python open source utilis\xe9e dans presque tous les domaines de la science et de l'ing\xe9nierie. C'est la norme universelle pour travailler avec des donn\xe9es num\xe9riques en Python, et c'est au c\u0153ur des \xe9cosyst\xe8mes scientifiques Python et PyData. La majorit\xe9 des libraires traitant des donn\xe9es sont bas\xe9s sur les structures de donn\xe9es qui sont introduit avec ",(0,u.kt)("inlineCode",{parentName:"p"},"NumPy"),"."),(0,u.kt)("h3",{id:"installation-et-importation-de-numpy"},"Installation et importation de NumPy"),(0,u.kt)("p",null,"La libraire ",(0,u.kt)("inlineCode",{parentName:"p"},"NumPy")," est d\xe9j\xe0 install\xe9 dans plusieurs plateforme scientifique comme Google Collab. Il suffit de l'importer comme nous l'avons vu pr\xe9c\xe9dement."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\n")),(0,u.kt)("p",null,"Nous raccourcissons le nom import\xe9 en ",(0,u.kt)("inlineCode",{parentName:"p"},"np")," pour une meilleure lisibilit\xe9 du code \xe0 l'aide de NumPy. Il s'agit d'une convention largement adopt\xe9e que vous devez suivre afin que toute personne travaillant avec votre code puisse facilement la comprendre."),(0,u.kt)("h3",{id:"quelle-est-la-diff\xe9rence-entre-une-liste-python-et-un-tableau-numpy"},"Quelle est la diff\xe9rence entre une liste Python et un tableau NumPy?"),(0,u.kt)("p",null,"NumPy vous offre une vaste gamme de moyens rapides et efficaces de cr\xe9er des tableaux et de manipuler des donn\xe9es num\xe9riques \xe0 l'int\xe9rieur de ceux-ci. Alors qu'une liste Python peut contenir diff\xe9rents types de donn\xe9es dans une seule liste, tous les \xe9l\xe9ments d'un tableau NumPy doivent \xeatre homog\xe8nes. Les op\xe9rations math\xe9matiques cens\xe9es \xeatre effectu\xe9es sur des tableaux seraient extr\xeamement inefficaces si les tableaux n'\xe9taient pas homog\xe8nes."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Pourquoi utiliser NumPy ?")),(0,u.kt)("p",null,"Les tableaux NumPy sont plus rapides et plus compacts que les listes Python. Un tableau consomme moins de m\xe9moire et est pratique \xe0 utiliser. NumPy utilise beaucoup moins de m\xe9moire pour stocker les donn\xe9es et fournit un m\xe9canisme de sp\xe9cification des types de donn\xe9es. Cela permet d'optimiser encore plus le code."),(0,u.kt)("h3",{id:"quest-ce-quun-tableau"},"Qu'est-ce qu'un tableau?"),(0,u.kt)("p",null,"Un tableau est une structure de donn\xe9es centrale de la biblioth\xe8que ",(0,u.kt)("inlineCode",{parentName:"p"},"NumPy"),". Un tableau dispose d'une grille d'\xe9l\xe9ments qui peuvent \xeatre index\xe9s de diff\xe9rentes mani\xe8res . Les \xe9l\xe9ments sont tous du m\xeame type, appel\xe9s tableau ",(0,u.kt)("inlineCode",{parentName:"p"},"dtype"),"."),(0,u.kt)("p",null,"Une fa\xe7on d'initialiser les tableaux NumPy est \xe0 partir de listes Python, en utilisant des listes imbriqu\xe9es pour les donn\xe9es \xe0 deux dimensions ou plus."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"a = np.array([1, 2, 3, 4, 5, 6])\nb = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])\nprint(a[0])\nprint(b[0])\n")),(0,u.kt)("p",null,"La classe ",(0,u.kt)("inlineCode",{parentName:"p"},"NumPy")," ",(0,u.kt)("inlineCode",{parentName:"p"},"ndarray")," est utilis\xe9e pour repr\xe9senter \xe0 la fois les matrices et les vecteurs. Un vecteur est un tableau \xe0 une seule dimension (il n'y a pas de diff\xe9rence entre les vecteurs ligne et colonne), tandis qu'une matrice fait r\xe9f\xe9rence \xe0 un tableau \xe0 deux dimensions. Pour les tableaux 3D ou de dimension sup\xe9rieure, le terme tenseur est \xe9galement couramment utilis\xe9."),(0,u.kt)("h1",{id:"cr\xe9ation-de-tableau"},"Cr\xe9ation de tableau"),(0,u.kt)("p",null,"Pour cr\xe9er un tableau NumPy, vous pouvez utiliser la fonction np.array()."),(0,u.kt)("p",null,"Tout ce que vous avez \xe0 faire pour cr\xe9er un tableau simple est de lui transmettre une liste. Si vous le souhaitez, vous pouvez \xe9galement sp\xe9cifier le type de donn\xe9es dans votre liste."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"a = np.array([1, 2, 3])\n")),(0,u.kt)("p",null,"Outre la cr\xe9ation d'un tableau \xe0 partir d'une s\xe9quence d'\xe9l\xe9ments, vous pouvez facilement cr\xe9er un tableau rempli de 0's :"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"np.zeros(2)\n")),(0,u.kt)("p",null,"Ou un tableau rempli de 1's :"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"np.ones(2)\n")),(0,u.kt)("p",null,"Vous pouvez cr\xe9er un tableau avec une plage d'\xe9l\xe9ments :"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"np.arange(4)\n")),(0,u.kt)("p",null,"Et m\xeame un tableau contenant une plage d'intervalles r\xe9guli\xe8rement espac\xe9s. Pour ce faire, vous sp\xe9cifierez ",(0,u.kt)("strong",{parentName:"p"},"le premier nombre"),", ",(0,u.kt)("strong",{parentName:"p"},"le dernier nombre")," et ",(0,u.kt)("strong",{parentName:"p"},"la taille du pas"),"."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"np.arange(2, 9, 2)\n")),(0,u.kt)("p",null,"Vous pouvez \xe9galement utiliser ",(0,u.kt)("inlineCode",{parentName:"p"},"np.linspace()")," pour cr\xe9er un tableau avec des valeurs espac\xe9es lin\xe9airement dans un intervalle sp\xe9cifi\xe9 :"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"np.linspace(0, 10, num=5)\n")),(0,u.kt)("h3",{id:"sp\xe9cification-de-votre-type-de-donn\xe9es"},"Sp\xe9cification de votre type de donn\xe9es"),(0,u.kt)("p",null,"Bien que le type de donn\xe9es par d\xe9faut soit \xe0 virgule flottante (",(0,u.kt)("inlineCode",{parentName:"p"},"np.float64"),"), vous pouvez sp\xe9cifier explicitement le type de donn\xe9es souhait\xe9 \xe0 l'aide du param\xe8tre nomm\xe9e ",(0,u.kt)("inlineCode",{parentName:"p"},"dtype"),"."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"x = np.ones(2, dtype=np.int64)\n")),(0,u.kt)("h3",{id:"ajouter-supprimer-et-trier-des-\xe9l\xe9ments"},"Ajouter, supprimer et trier des \xe9l\xe9ments"),(0,u.kt)("p",null,"Trier un \xe9l\xe9ment est simple avec ",(0,u.kt)("inlineCode",{parentName:"p"},"np.sort()"),"."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"arr = np.array([2, 1, 5, 3, 7, 4, 6, 8])\nnp.sort(arr) # Attention, on retourne un nouveau tableau\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"a = np.array([1, 2, 3, 4])\n>>> b = np.array([5, 6, 7, 8])\n")),(0,u.kt)("p",null,"Vous pouvez les concat\xe9ner avec ",(0,u.kt)("inlineCode",{parentName:"p"},"np.concatenate()"),"."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"np.concatenate((a, b))\n")),(0,u.kt)("h3",{id:"comment-conna\xeetre-la-forme-et-la-taille-dun-tableau"},"Comment conna\xeetre la forme et la taille d'un tableau?"),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"ndarray.ndim")," vous indiquera le nombre d'axes, ou dimensions, du tableau."),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"ndarray.size")," vous dira le nombre total d'\xe9l\xe9ments du tableau. C'est le produit des \xe9l\xe9ments de la forme du tableau."),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"ndarray.shape")," affichera un tuple d'entiers indiquant le nombre d'\xe9l\xe9ments stock\xe9s le long de chaque dimension du tableau. Si, par exemple, vous avez un tableau 2D avec 2 lignes et 3 colonnes, la forme de votre tableau est .(2, 3)"),(0,u.kt)("p",null,"Par exemple, si vous cr\xe9ez ce tableau :"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"array_example = np.array([[[0, 1, 2, 3],\n                           [4, 5, 6, 7]],\n                          [[0, 1, 2, 3],\n                           [4, 5, 6, 7]],\n                          [[0 ,1 ,2, 3],\n                           [4, 5, 6, 7]]])\n\nprint(array_example.ndim)\nprint(array_example.size)\nprint(array_example.shape)\n")),(0,u.kt)("h3",{id:"indexation-et-d\xe9coupage"},"Indexation et d\xe9coupage"),(0,u.kt)("p",null,"Vous pouvez indexer et d\xe9couper des tableaux NumPy de la m\xeame mani\xe8re que vous pouvez d\xe9couper des listes Python."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"data = np.array([1, 2, 3])\nprint(data[1])\nprint(data[0:2])\nprint(data[1:])\nprint(data[-2:])\n")),(0,u.kt)("p",null,"Si vous souhaitez s\xe9lectionner des valeurs de votre tableau qui remplissent certaines conditions, c'est simple avec NumPy."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"a = np.array([[1 , 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])\nprint(a[a < 5])\n\nfive_up = (a >= 5)\nprint(a[five_up])\n\ndivisible_by_2 = a[a%2==0]\nprint(divisible_by_2)\n\nfive_up = (a > 5) | (a == 5)\nprint(five_up)\n")),(0,u.kt)("p",null,"Vous pouvez utiliser ",(0,u.kt)("inlineCode",{parentName:"p"},"np.nonzero()")," pour imprimer les indices des \xe9l\xe9ments qui sont, par exemple, inf\xe9rieurs \xe0 5 :"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"b = np.nonzero(a < 5)\nprint(b)\n")))}c.isMDXComponent=!0}}]);