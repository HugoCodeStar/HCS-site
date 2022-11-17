"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[4458],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7191:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),s=["components"],o={title:"Fonctions & Conversion de classe en ERD",sidebar_label:"7 - Fonctions & ERD"},l=void 0,u={unversionedId:"inf5111/Cours/cours7",id:"inf5111/Cours/cours7",isDocsHomePage:!1,title:"Fonctions & Conversion de classe en ERD",description:"Fonctions",source:"@site/docs/inf5111/Cours/cours7.md",sourceDirName:"inf5111/Cours",slug:"/inf5111/Cours/cours7",permalink:"/site/docs/inf5111/Cours/cours7",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf5111/Cours/cours7.md",tags:[],version:"current",frontMatter:{title:"Fonctions & Conversion de classe en ERD",sidebar_label:"7 - Fonctions & ERD"},sidebar:"INF5111Sidebar",previous:{title:"6 - If, while et for",permalink:"/site/docs/inf5111/Cours/cours6"},next:{title:"8 - Visualisation",permalink:"/site/docs/inf5111/Cours/cours8"}},c=[{value:"Fonctions",id:"fonctions",children:[]},{value:"Pr\xe9sentation d&#39;une fonction minimale",id:"pr\xe9sentation-dune-fonction-minimale",children:[]},{value:"Param\xe8tres d&#39;entr\xe9es",id:"param\xe8tres-dentr\xe9es",children:[]},{value:"Retours",id:"retours",children:[]},{value:"Exemple 1",id:"exemple-1",children:[]},{value:"Pr\xe9sentation de l&#39;en-t\xeate d&#39;une fonction",id:"pr\xe9sentation-de-len-t\xeate-dune-fonction",children:[]},{value:"Contexte et dur\xe9e de vies des variables",id:"contexte-et-dur\xe9e-de-vies-des-variables",children:[]},{value:"Passage par valeurs",id:"passage-par-valeurs",children:[]},{value:"Exemple 2",id:"exemple-2",children:[]},{value:"1 - Transformation des classes en entit\xe9s",id:"1---transformation-des-classes-en-entit\xe9s",children:[]},{value:"2 - Ajout ou l&#39;identification de la cl\xe9 primaire",id:"2---ajout-ou-lidentification-de-la-cl\xe9-primaire",children:[]},{value:"3 - Transformation des associations",id:"3---transformation-des-associations",children:[{value:"Ajout de cl\xe9 \xe9trang\xe8re",id:"ajout-de-cl\xe9-\xe9trang\xe8re",children:[]},{value:"Transformation n-m",id:"transformation-n-m",children:[]}]}],d={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"fonctions"},"Fonctions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Les fonctions sont des s\xe9ries d'instructions contenues dans un ensemble pouvant \xeatre facilement re-utilis\xe9. Par convention, la fonction doit faire une t\xe2che simple et pr\xe9cise;"),(0,i.kt)("li",{parentName:"ul"},"Contrairement aux scripts, les fonctions n'auront pas de saisit avec ",(0,i.kt)("inlineCode",{parentName:"li"},"input")," et pas d'affichage avec ",(0,i.kt)("inlineCode",{parentName:"li"},"print"),". Cela \xe0 moins d'\xeatre express\xe9ment demand\xe9."),(0,i.kt)("li",{parentName:"ul"},"Les fonctions peuvent demander des param\xe8tres (ou arguments) d'entr\xe9es. Ce sont des informations pr\xe9alables aux calculs de la fonction;"),(0,i.kt)("li",{parentName:"ul"},"Les fonctions peuvent \xe9mettre des r\xe9ponses que l'on appelle retour.")),(0,i.kt)("h2",{id:"pr\xe9sentation-dune-fonction-minimale"},"Pr\xe9sentation d'une fonction minimale"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def nomFonction():\n    instructions\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Une fonction est au d\xe9but du fichier;"),(0,i.kt)("li",{parentName:"ul"},"La fonction peut ensuite \xeatre appel\xe9e par son nom d'autres programmes.")),(0,i.kt)("h2",{id:"param\xe8tres-dentr\xe9es"},"Param\xe8tres d'entr\xe9es"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Une fonction peut demander des param\xe8tres d'entr\xe9es;"),(0,i.kt)("li",{parentName:"ul"},"Ceux-ci seront dans une liste apr\xe8s le nom de la fonction entre parenth\xe8ses d\xe9limit\xe9e par une virgule;"),(0,i.kt)("li",{parentName:"ul"},"Les param\xe8tres d'entr\xe9es seront fournis par l'appelant de la fonction et peuvent donc \xeatre utilis\xe9s \xe0 l'int\xe9rieur des instructions de la fonction sans \xeatre assign\xe9s pr\xe9alablement.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def fcnAvecIn(var1, var2):\n    print(var1 * var2)\n\n")),(0,i.kt)("h2",{id:"retours"},"Retours"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"La fonction peut retourner un r\xe9sultat qui sera utilisable par l'appelant de la fonction."),(0,i.kt)("li",{parentName:"ul"},"Le mot-cl\xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"return")," est utilis\xe9 quand l'expression de retour est pr\xeate \xe0 \xeatre renvoy\xe9e."),(0,i.kt)("li",{parentName:"ul"},"Une fonction qui ne contient pas de retour est aussi nomm\xe9e une proc\xe9dure.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def fcnAvecRetour():\n    instructions\n    return expression\n")),(0,i.kt)("h2",{id:"exemple-1"},"Exemple 1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\xc9crivez une fonction qui trouve l\u2019aire d\u2019un triangle \xe0 partir de sa base et sa hauteur.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def aireTriangle(base, hauteur):\n    return base * hauteur / 2\n\n# Utilisation de la fonction dans un programme\naire = aireTriangle(3,4)\n\nif aire > 10:\n    print('super')\nelse:\n    print('booooo')\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\xc9crivez une fonction qui d\xe9termine si un nombre est impair.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def estImpair(nombre):\n    if nombre % 2 == 1:\n        return True\n    else:\n        return False\n\ndef estImpairEfficace(nombre):\n    return nombre % 2 == 1\n\n\nprint(estImpair((1564)))\n")),(0,i.kt)("h2",{id:"pr\xe9sentation-de-len-t\xeate-dune-fonction"},"Pr\xe9sentation de l'en-t\xeate d'une fonction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def nomFonction(arg1, arg2):\n"""\nDescription g\xe9n\xe9rale de la fonction\nArgs:\n  arg1 (float) - Description de l\'arg1\n  arg2 (bool) - Description de l\'arg2\nReturns:\n  float: Description de retour1\nExample:\n  >> nomFonction(4,6)\n      34\n"""\n    instructions\n')),(0,i.kt)("h2",{id:"contexte-et-dur\xe9e-de-vies-des-variables"},"Contexte et dur\xe9e de vies des variables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tout ce qui se passe \xe0 l'int\xe9rieur des fonctions est d\xe9truit apr\xe8s l'appel de la fonction;"),(0,i.kt)("li",{parentName:"ul"},"Toute d\xe9claration de variables \xe0 l'int\xe9rieur d'une fonction est d\xe9truite apr\xe8s l'appel de la fonction;"),(0,i.kt)("li",{parentName:"ul"},"Seule la valeur de retour est renvoy\xe9e.")),(0,i.kt)("h2",{id:"passage-par-valeurs"},"Passage par valeurs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Les param\xe8tres et les retours sont renomm\xe9s pour la dur\xe9e de la fonction. Les noms des param\xe8tres de la fonction se nomment param\xe8tres formels;"),(0,i.kt)("li",{parentName:"ul"},"Seules leurs valeurs seront transf\xe9r\xe9es entre la fonction et l'appelant. On utilise le terme param\xe8tres effectifs;"),(0,i.kt)("li",{parentName:"ul"},"Les noms des param\xe8tres et des retours n'ont aucune incidence;"),(0,i.kt)("li",{parentName:"ul"},"L'ordre des param\xe8tres et des retours est ce qui sera consid\xe9r\xe9.")),(0,i.kt)("h2",{id:"exemple-2"},"Exemple 2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Quel est le r\xe9sultat de l'affichage du script ",(0,i.kt)("inlineCode",{parentName:"li"},"passageParValeurTest.py"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# passageParValeurTest.py\ndef  passageParValeur(x, y):\n    x = x + 2\n    y = y - 2\n    z = x - y + 2\n    return z\n\nx = 4\nz = 8\ny = 6\nx = passageParValeur(y,x)\nprint('La valeur de x,y et z sont :', x, y, z)\n")),(0,i.kt)("h1",{id:"conversion-des-diagrammes-de-classe-uml-\xe0-des-diagrammes-dentit\xe9-relations-erd"},"Conversion des diagrammes de classe UML \xe0 des diagrammes d'entit\xe9 relations (ERD)"),(0,i.kt)("p",null,"La conversion d'un diagramme de classe en ERD se fait en 3 \xe9tapes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Transformation des classes en entit\xe9s."),(0,i.kt)("li",{parentName:"ol"},"Ajout ou identification de cl\xe9 primaires"),(0,i.kt)("li",{parentName:"ol"},"Transformation des associations")),(0,i.kt)("h2",{id:"1---transformation-des-classes-en-entit\xe9s"},"1 - Transformation des classes en entit\xe9s"),(0,i.kt)("p",null,"Les classes se transforment en entit\xe9s et les types se transforment pour \xeatre conformes au type de donn\xe9e qui sera disponible avec la base de donn\xe9es utilis\xe9e. Les propri\xe9t\xe9s sont r\xe9duites \xe0 la liste suivante :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nullable"),(0,i.kt)("li",{parentName:"ul"},"Unique")),(0,i.kt)("p",null,"Si un des attributs avait une multiplicit\xe9 (une liste de valeurs), celle-ci devient sa propre entit\xe9 qui aura une association avec l'entit\xe9 initiale."),(0,i.kt)("h2",{id:"2---ajout-ou-lidentification-de-la-cl\xe9-primaire"},"2 - Ajout ou l'identification de la cl\xe9 primaire"),(0,i.kt)("p",null,"Une cl\xe9 primaire doit \xeatre identifi\xe9e pour chacune des entit\xe9s du ERD. Deux possibilit\xe9s sont disponibles :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Si une information identifie uniquement chacune des instances de l'entit\xe9, celle-ci est d\xe9sign\xe9e comme cl\xe9 primaire (on la nomme cl\xe9 primaire naturelle)."),(0,i.kt)("li",{parentName:"ul"},"Si aucune information est identifiante, un nouvel attribut est ajout\xe9 pour repr\xe9senter la cl\xe9 primaire (nomm\xe9 cl\xe9 primaire artificielle).")),(0,i.kt)("h2",{id:"3---transformation-des-associations"},"3 - Transformation des associations"),(0,i.kt)("p",null,"Les ERD ne peuvent que traiter deux types d'association :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 - 1 ou 0 - 1"),(0,i.kt)("li",{parentName:"ul"},"1 - n ou 0 - n")),(0,i.kt)("p",null,"Si les associations sont d'une autre multiplicit\xe9, elles seront normalis\xe9es \xe0 celles-ci. Dans les cas o\xf9 nous avons une relation n-m, une conversion additionnelle sera n\xe9cessaire."),(0,i.kt)("h3",{id:"ajout-de-cl\xe9-\xe9trang\xe8re"},"Ajout de cl\xe9 \xe9trang\xe8re"),(0,i.kt)("p",null,"Dans les associations, nous devons ajouter une cl\xe9 \xe9trang\xe8re pour que la base de donn\xe9es puisse faire le lien avec l'association repr\xe9sent\xe9e."),(0,i.kt)("h3",{id:"transformation-n-m"},"Transformation n-m"),(0,i.kt)("p",null,"Pour des associations n-m, il faut ajouter une table de jointure qui va s'ins\xe9rer entre les deux tables de la relation n-m avec une relation 1-n entre chacune. La table de jointure va contenir des cl\xe9s \xe9trang\xe8res des deux autres tables."),(0,i.kt)("p",null,"Dans le cas d'une classe d'association, c'est le m\xeame principe avec des attributs additionnels."))}p.isMDXComponent=!0}}]);