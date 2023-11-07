"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[4881],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,k=c["".concat(o,".").concat(m)]||c[m]||p[m]||l;return t?a.createElement(k,r(r({ref:n},d),{},{components:t})):a.createElement(k,r({ref:n},d))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<l;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},462:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=t(7462),i=(t(7294),t(3905));const l={title:"Structures de donn\xe9es et gestion d'informations",sidebar_label:"3 - Gestion de donn\xe9es"},r=void 0,s={unversionedId:"db4/cours/cours3",id:"db4/cours/cours3",isDocsHomePage:!1,title:"Structures de donn\xe9es et gestion d'informations",description:"Liens vers les fichiers",source:"@site/docs/db4/cours/cours3.md",sourceDirName:"db4/cours",slug:"/db4/cours/cours3",permalink:"/site/docs/db4/cours/cours3",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/db4/cours/cours3.md",tags:[],version:"current",frontMatter:{title:"Structures de donn\xe9es et gestion d'informations",sidebar_label:"3 - Gestion de donn\xe9es"},sidebar:"DB4Sidebar",previous:{title:"2 - Interm\xe9diaires",permalink:"/site/docs/db4/cours/cours2"},next:{title:"4 - Numpy et pandas",permalink:"/site/docs/db4/cours/cours4"}},o=[{value:"Liens vers les fichiers",id:"liens-vers-les-fichiers",children:[]},{value:"Liste en compr\xe9hension",id:"liste-en-compr\xe9hension",children:[]},{value:"Ajout de condition ou de boucle imbriqu\xe9s",id:"ajout-de-condition-ou-de-boucle-imbriqu\xe9s",children:[]},{value:"Set",id:"set",children:[]},{value:"Cr\xe9ation d&#39;un set",id:"cr\xe9ation-dun-set",children:[]},{value:"Acc\xe8s au set",id:"acc\xe8s-au-set",children:[]},{value:"Soustraction au set",id:"soustraction-au-set",children:[]},{value:"Trouv\xe9 de \xe9l\xe9ments dans un set",id:"trouv\xe9-de-\xe9l\xe9ments-dans-un-set",children:[]},{value:"Op\xe9ration sur les sets",id:"op\xe9ration-sur-les-sets",children:[]},{value:"Dictionnaire",id:"dictionnaire",children:[]},{value:"Acc\xe8s au dictionnaire",id:"acc\xe8s-au-dictionnaire",children:[]},{value:"Modification d&#39;un dictionnaire",id:"modification-dun-dictionnaire",children:[]},{value:"Les m\xe9thodes des dictionnaires",id:"les-m\xe9thodes-des-dictionnaires",children:[]},{value:"Les formats des fichiers de donn\xe9es",id:"les-formats-des-fichiers-de-donn\xe9es",children:[]},{value:"CSV - Comma-separated values",id:"csv---comma-separated-values",children:[]},{value:"Module csv",id:"module-csv",children:[]},{value:"JSON - JavaScript Object Notation",id:"json---javascript-object-notation",children:[]},{value:"Module json",id:"module-json",children:[]},{value:"Exemple JSON",id:"exemple-json",children:[]},{value:"Module json",id:"module-json-1",children:[]},{value:"Programmation orient\xe9e-objet",id:"programmation-orient\xe9e-objet",children:[]},{value:"Les objets",id:"les-objets",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Exemple d&#39;une classe",id:"exemple-dune-classe",children:[]},{value:"M\xe9thodes d&#39;une classe",id:"m\xe9thodes-dune-classe",children:[]},{value:"Cr\xe9ation d&#39;objets \xe0 partir d&#39;une classe",id:"cr\xe9ation-dobjets-\xe0-partir-dune-classe",children:[]},{value:"Attributs priv\xe9s",id:"attributs-priv\xe9s",children:[]},{value:"Multiple instance",id:"multiple-instance",children:[]},{value:"Accesseurs et mutateurs",id:"accesseurs-et-mutateurs",children:[]},{value:"SQLite avec Python",id:"sqlite-avec-python",children:[]},{value:"Tables",id:"tables",children:[]},{value:"Types des colonnes",id:"types-des-colonnes",children:[]},{value:"Cr\xe9ation de tables",id:"cr\xe9ation-de-tables",children:[]},{value:"Ajout de donn\xe9es dans une table",id:"ajout-de-donn\xe9es-dans-une-table",children:[]},{value:"Chercher dans la table",id:"chercher-dans-la-table",children:[]},{value:"Condition de s\xe9lection",id:"condition-de-s\xe9lection",children:[]},{value:"Modification des lignes - Supprimer",id:"modification-des-lignes---supprimer",children:[]},{value:"Intr\xe9gration de SQL avec python",id:"intr\xe9gration-de-sql-avec-python",children:[]},{value:"Envoi de commande avec les curseurs",id:"envoi-de-commande-avec-les-curseurs",children:[]},{value:"S\xe9lection de lignes avec les curseurs",id:"s\xe9lection-de-lignes-avec-les-curseurs",children:[]},{value:"Requ\xeates vers des API REST",id:"requ\xeates-vers-des-api-rest",children:[]},{value:"Librairie requests",id:"librairie-requests",children:[]},{value:"Les requ\xeates web et les r\xe8gles du REST",id:"les-requ\xeates-web-et-les-r\xe8gles-du-rest",children:[]},{value:"Exemple avec JSONPlaceholder",id:"exemple-avec-jsonplaceholder",children:[]},{value:"Routes",id:"routes",children:[]}],u={toc:o},d="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"liens-vers-les-fichiers"},"Liens vers les fichiers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"pathname:///DB4-Cours3.ipynb"},"Pyhton Notebook")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"pathname:///address.csv"},"address.csv")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"pathname:///iris.json"},"iris.json"))),(0,i.kt)("h2",{id:"liste-en-compr\xe9hension"},"Liste en compr\xe9hension"),(0,i.kt)("p",null,"Une liste en compr\xe9hension est un raccourci syntaxique pour cr\xe9\xe9 des liste. Cela permet de faire ce qui est habituellement dans une boucle sur une seule ligne."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"squares = []\nfor x in range(10):\n    squares.append(x**2)\n\n# \xc9quivalent avec une liste en compr\xe9hension\nsquares = [x**2 for x in range(10)]\n")),(0,i.kt)("h2",{id:"ajout-de-condition-ou-de-boucle-imbriqu\xe9s"},"Ajout de condition ou de boucle imbriqu\xe9s"),(0,i.kt)("p",null,"Il est possible d'avoir apr\xe8s le ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," initial d'autre ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," ou des conditionnelles ",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"combs = []\nfor x in [1,2,3]:\n    for y in [3,1,4]:\n        if x != y:\n            combs.append((x, y))\n\n# \xc9quivalent\ncombs = [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]\n")),(0,i.kt)("h2",{id:"set"},"Set"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Un ",(0,i.kt)("inlineCode",{parentName:"li"},"set")," est une collection, semblable \xe0 une liste, mais avec la distinction que tous les \xe9l\xe9ments doivent \xeatre unique."),(0,i.kt)("li",{parentName:"ul"},"L'ordre des \xe9l\xe9ments est aussi laiss\xe9 \xe0 l'impl\xe9mentation. Il n'existe pas d'indice pouvant identifier l'emplacement de l'\xe9l\xe9ment dans la collection.")),(0,i.kt)("h2",{id:"cr\xe9ation-dun-set"},"Cr\xe9ation d'un set"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Le set peut \xeatre cr\xe9\xe9 vide avec un constructeur ",(0,i.kt)("inlineCode",{parentName:"li"},"set()")," ou \xe0 partir d'une autre collection existante.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"mon_set = set()\nautre_set = set([4, 65, 34, 3, 4]) # Le 4 s'y retrouvera qu'une fois.\nencore_set = set('allo') # Le 'l' ne sera pas en 2 copies.\ndernier_set = set(['un', 'deux', 'trois']) # Contient chaque mot.\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Il est aussi possible d'utiliser les accolades pour construire un ",(0,i.kt)("inlineCode",{parentName:"li"},"set"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"curly_set = {'allo', 'salut', 'allo', 'bonjour'}\nprint(curly_set) # Affiche {'salut', 'allo', 'bonjour'}\n")),(0,i.kt)("h2",{id:"acc\xe8s-au-set"},"Acc\xe8s au set"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"La taille du set peut \xeatre connue avec ",(0,i.kt)("inlineCode",{parentName:"li"},"len"),"."),(0,i.kt)("li",{parentName:"ul"},"On ajoute un \xe9l\xe9ment avec la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"li"},"add"),"."),(0,i.kt)("li",{parentName:"ul"},"On ajoute plusieurs \xe9l\xe9ments avec la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"li"},"update"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"mon_set = set()\nmon_set.add(3)\nmon_set.add(4)\nmon_set.update([4, 5, 6])\n\nprint(len(mon_set)) # Affiche 4\n")),(0,i.kt)("h2",{id:"soustraction-au-set"},"Soustraction au set"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Les m\xe9thodes ",(0,i.kt)("inlineCode",{parentName:"li"},"remove")," et ",(0,i.kt)("inlineCode",{parentName:"li"},"discard")," enl\xe8vent des \xe9l\xe9ments du set."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remove")," soul\xe8ve un ",(0,i.kt)("inlineCode",{parentName:"li"},"KeyError")," si l'\xe9l\xe9ment n'est pas trouv\xe9."),(0,i.kt)("li",{parentName:"ul"},"La m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"li"},"clear")," permet de vider le set.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"mon_set = set([4, 5, 6, 7])\nmon_set.remove(4)\n\nmon_set.remove(10) # KeyError\nmon_set.discard(10)\n")),(0,i.kt)("h2",{id:"trouv\xe9-de-\xe9l\xe9ments-dans-un-set"},"Trouv\xe9 de \xe9l\xe9ments dans un set"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"L'op\xe9rateur ",(0,i.kt)("inlineCode",{parentName:"li"},"in")," et ",(0,i.kt)("inlineCode",{parentName:"li"},"not in")," permet de faire la d\xe9tection d'un \xe9l\xe9ment dans un set.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'mon_set = set([1, 2, 3])\n\nif 2 in mon_set:\n    print("Trouv\xe9!")\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"La boucle ",(0,i.kt)("inlineCode",{parentName:"li"},"for")," peut it\xe9rer sur un set. L'ordre des \xe9l\xe9ments ne peut pas \xeatre connu d'avance.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"curly_set = {'allo', 'salut', 'allo', 'bonjour'}\n\nfor item in curly_set:\n  print(item)\n")),(0,i.kt)("h2",{id:"op\xe9ration-sur-les-sets"},"Op\xe9ration sur les sets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On trouve l'union de deux sets avec la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"li"},"union"),"."),(0,i.kt)("li",{parentName:"ul"},"On trouve l'intersection de deux sets avec la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"li"},"intersection"),"."),(0,i.kt)("li",{parentName:"ul"},"On trouve la diff\xe9rence de deux sets avec la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"li"},"difference"),"."),(0,i.kt)("li",{parentName:"ul"},"On trouve la diff\xe9rence sym\xe9trique (ceux exclusifs \xe0 chaque set) avec la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"li"},"symmetric_difference"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"set1 = set([1, 2, 3])\nset2 = set([3, 4, 5])\nset3 = set1.union(set2)\n\nprint(len(set3)) # Affiche 5\n")),(0,i.kt)("h2",{id:"dictionnaire"},"Dictionnaire"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Le dictionnaire est une autre collection."),(0,i.kt)("li",{parentName:"ul"},"Chaque \xe9l\xe9ment contient deux parties : une cl\xe9 et une valeur (key-value pair)."),(0,i.kt)("li",{parentName:"ul"},"La cl\xe9 est utilis\xe9e pour rep\xe9rer l'\xe9l\xe9ment dans la collection."),(0,i.kt)("li",{parentName:"ul"},"Les cl\xe9s sont uniques."),(0,i.kt)("li",{parentName:"ul"},"Le dictionnaire repr\xe9sente ses key-value avec un ",(0,i.kt)("inlineCode",{parentName:"li"},":")," entre chacun et les inclus dans des accollades ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"telephone = {'Marie':'444-1111', 'Bob':'444-2222', 'Alice':'444-3333'}\n")),(0,i.kt)("h2",{id:"acc\xe8s-au-dictionnaire"},"Acc\xe8s au dictionnaire"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Les \xe9l\xe9ments du dictionnaire sont acc\xe9der avec les cl\xe9s entre crochets (comme une liste)."),(0,i.kt)("li",{parentName:"ul"},"Comme les set, les op\xe9rateurs ",(0,i.kt)("inlineCode",{parentName:"li"},"in")," et ",(0,i.kt)("inlineCode",{parentName:"li"},"not in")," permettent de d\xe9terminer si une cl\xe9 existe."),(0,i.kt)("li",{parentName:"ul"},"La fonction ",(0,i.kt)("inlineCode",{parentName:"li"},"len")," permet de d\xe9terminer le nombre d'\xe9l\xe9ments")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"telephone = {'Marie':'444-1111', 'Bob':'444-2222', 'Alice':'444-3333'}\nif 'Bob' in telephone:\n    print(telephone['Bob']) # Affiche '444-2222'\n\nprint(len(telephone)) # Affiche 4\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"La boucle ",(0,i.kt)("inlineCode",{parentName:"li"},"for")," permet d'avoir les ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," du dictionnaire")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"telephone = {'Marie':'444-1111', 'Bob':'444-2222', 'Alice':'444-3333'}\n\nfor item in telephone:\n  print(item) # Affiche en ordre Marie, Bob, Alice\n  print(telephone[item]) # Affiche les num\xe9ro 444-1111, 444-2222, 444-3333\n")),(0,i.kt)("h2",{id:"modification-dun-dictionnaire"},"Modification d'un dictionnaire"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On ajoute dans un dictionnaire avec l'assignation d'une nouvelle cl\xe9."),(0,i.kt)("li",{parentName:"ul"},"On d\xe9truit un \xe9l\xe9ment avec le mot cl\xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"del"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"telephone = {'Marie':'444-1111', 'Bob':'444-2222', 'Alice':'444-3333'}\ntelehphone['Corinne'] = '444-1111' # M\xeame valeur que Marie et c'est ok\n\ndel telephone['Bob']\n")),(0,i.kt)("h2",{id:"les-m\xe9thodes-des-dictionnaires"},"Les m\xe9thodes des dictionnaires"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Nom"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clear()"),(0,i.kt)("td",{parentName:"tr",align:null},"Vide le dictionnaire.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"get(key)"),(0,i.kt)("td",{parentName:"tr",align:null},"Retourne la valeur associ\xe9e avec la cl\xe9. Ne g\xe9n\xe8re pas d'erreur.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"items()"),(0,i.kt)("td",{parentName:"tr",align:null},"Renvoie une s\xe9quence de tuple de (key, value)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"keys()"),(0,i.kt)("td",{parentName:"tr",align:null},"Retourne toutes les cl\xe9s.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pop(key)"),(0,i.kt)("td",{parentName:"tr",align:null},"Retourne la valeur associ\xe9e avec la cl\xe9. Enl\xe8ve l'\xe9l\xe9ment du dictionnaire.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"popitem()"),(0,i.kt)("td",{parentName:"tr",align:null},"Retourne un tuple (key, value) al\xe9atoire et l'enl\xe8ve du dictionnaire.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"values()"),(0,i.kt)("td",{parentName:"tr",align:null},"Retourne les valeurs des \xe9l\xe9ments.")))),(0,i.kt)("h2",{id:"les-formats-des-fichiers-de-donn\xe9es"},"Les formats des fichiers de donn\xe9es"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dans le domaine des sciences, deux fichiers de donn\xe9es sont populaires:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CSV - Comma-separated values"),(0,i.kt)("li",{parentName:"ul"},"JSON - JavaScript Object Notation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Python nous fournit des modules pour travailler avec ses deux types de fichiers."))),(0,i.kt)("h2",{id:"csv---comma-separated-values"},"CSV - Comma-separated values"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Le CSV est un fichier texte qui d\xe9limite ses informations comme un tableur."),(0,i.kt)("li",{parentName:"ul"},"Chaque ligne de texte est une entr\xe9e."),(0,i.kt)("li",{parentName:"ul"},'Chaque ligne contient des "colonne" qui sont s\xe9par\xe9s par des virgules.')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Name,Email,Phone Number,Address\nBob Smith,bob@example.com,123-456-7890,123 Fake Street\nMike Jones,mike@example.com,098-765-4321,321 Fake Avenue\n")),(0,i.kt)("h2",{id:"module-csv"},"Module csv"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Le module csv contient la fonctionnalit\xe9 qui permet de lire un fichier csv et le convertir en collection de Python.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import csv\n\n# Avec reader on convertie en liste\nwith open('address.csv', newline='') as csvfile:\n    reader = csv.reader(csvfile)\n    for row in reader:\n        print(row)\n\n# Avec DictReader on convetie en dictionnaire\nwith open('address.csv', newline='') as csvfile:\n    reader = csv.DictReader(csvfile)\n    for row in reader:\n        print(row)\n")),(0,i.kt)("h2",{id:"json---javascript-object-notation"},"JSON - JavaScript Object Notation"),(0,i.kt)("h2",{id:"module-json"},"Module json"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.json.org/"},"https://www.json.org/")),(0,i.kt)("li",{parentName:"ul"},"Un document qui permet de formater des collections en fichier texte pour transmission facile."),(0,i.kt)("li",{parentName:"ul"},"N'a pas de lien fort avec JavaScript (malgr\xe9 son nom)."),(0,i.kt)("li",{parentName:"ul"},"Permets de facilement imbriquer des informations.")),(0,i.kt)("h2",{id:"exemple-json"},"Exemple JSON"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "firstName": "John",\n  "lastName": "Smith",\n  "isAlive": true,\n  "age": 27,\n  "address": {\n    "streetAddress": "21 2nd Street",\n    "city": "New York",\n    "state": "NY",\n    "postalCode": "10021-3100"\n  },\n  "phoneNumbers": ["212 555-1234" ,"646 555-4567"],\n  "children": [],\n  "spouse": null\n}\n')),(0,i.kt)("h2",{id:"module-json-1"},"Module json"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Le module json nous permet de lire un fichier ou une chaine json et la convertie en objet Python."),(0,i.kt)("li",{parentName:"ul"},"La fonction ",(0,i.kt)("inlineCode",{parentName:"li"},"load")," permet de convertir un fichier ouvert."),(0,i.kt)("li",{parentName:"ul"},"La fonction ",(0,i.kt)("inlineCode",{parentName:"li"},"loads")," permet de convertir une chaine de caract\xe8re d\xe9crivant un objet JSON.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'with open(\'iris.json\', newline=\'\') as jsonfile:\n    reader = json.load(jsonfile)\n    for row in reader:\n        print(row)\n\n# json.loads permet de parcourir une chaine\ninfo = json.loads(\'{"name":"mkyong.com","messages":["msg 1","msg 2","msg 3"],"age":100}\')\nprint(info)\n')),(0,i.kt)("h2",{id:"programmation-orient\xe9e-objet"},"Programmation orient\xe9e-objet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"La programmation orient\xe9e-objet (POO) est un paradigme de programmation qui permet de conceptualiser des probl\xe8mes complexes d'une mani\xe8re plus humaine."),(0,i.kt)("li",{parentName:"ul"},"On consid\xe8re les \xe9l\xe9ments du probl\xe8me comme \xe9tant des entit\xe9s distinctes (des objets) qui pourront \xe9voluer face \xe0 la probl\xe9matique."),(0,i.kt)("li",{parentName:"ul"},"Cela vient en contraste \xe0 la programmation proc\xe9durale qui se base sur le flux s\xe9quentiel des instructions et de l'utilisation de fonctions avec des entr\xe9es et sorties bien d\xe9finies.")),(0,i.kt)("h2",{id:"les-objets"},"Les objets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Un objet repr\xe9sente deux informations :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Les donn\xe9es (attributs, variables)"),(0,i.kt)("li",{parentName:"ul"},"Les comportements (m\xe9thodes, fonctions)")))),(0,i.kt)("p",null,"Par exemple, une alarme aura les informations suivantes:"),(0,i.kt)("p",null,"Attributs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"current_second (0\u201359)"),(0,i.kt)("li",{parentName:"ul"},"current_minute (0\u201359)"),(0,i.kt)("li",{parentName:"ul"},"current_hour (1\u201312)"),(0,i.kt)("li",{parentName:"ul"},"alarm_time (heure et minute valide)"),(0,i.kt)("li",{parentName:"ul"},"alarm_is_set (True, False)")),(0,i.kt)("p",null,"M\xe9thodes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"set_time"),(0,i.kt)("li",{parentName:"ul"},"set_alarm_time "),(0,i.kt)("li",{parentName:"ul"},"set_alarm_on"),(0,i.kt)("li",{parentName:"ul"},"set_alarm_off")),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("p",null,"Une classe est un gabarit pour la construction d'objet. On peut aussi le voir comme une recette."),(0,i.kt)("p",null,"La classe est le code qui pourra d\xe9crire les diff\xe9rents objets qui sont cr\xe9\xe9s \xe0 partir de la classe. Les objets cr\xe9\xe9s \xe0 partir d'une classe sont nomm\xe9s les instances de la classe."),(0,i.kt)("h2",{id:"exemple-dune-classe"},"Exemple d'une classe"),(0,i.kt)("p",null,"La classe est indiqu\xe9e par le bloc de code ",(0,i.kt)("inlineCode",{parentName:"p"},"class")," qui va contenir diff\xe9rentes m\xe9thodes de la classe."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import random\n\n# Simulation d'une pi\xe8ce de monaie\n\nclass Coin:\n    \n    # __init__ initialise a 'Face'.\n    \n    def __init__(self):\n        self.sideup = 'Face'\n    \n    def toss(self):\n        # G\xe9n\xe9ration al\xe9atoire de nombre pour\n        # \"lancer\" la pi\xe8ce\n        if random.randint(0, 1) == 0:\n            self.sideup = 'Face'\n        else:\n            self.sideup = 'Pile'\n\n    # Retourne l'\xe9tat courant de la pi\xe8ce\n    \n    def get_sideup(self):\n        return self.sideup\n\n\n")),(0,i.kt)("h2",{id:"m\xe9thodes-dune-classe"},"M\xe9thodes d'une classe"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Les m\xe9thodes sont des d\xe9finitions de fonctions \xe0 l'int\xe9rieur d'une classe.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Chaque fonction doit recevoir le param\xe8tre obligatoire ",(0,i.kt)("inlineCode",{parentName:"p"},"self"),". Le ",(0,i.kt)("inlineCode",{parentName:"p"},"self")," fait r\xe9f\xe9rence \xe0 l'instance de l'objet \xe0 manipuler.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"La m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"__init__")," est sp\xe9ciale, car c'est la m\xe9thode qui sera appel\xe9e \xe0 l'initialisation d'une nouvelle instance (un objet) de la classe. Elle permet donc d'initialiser les diff\xe9rentes donn\xe9es de l'instance.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Les attributs sont attach\xe9s au ",(0,i.kt)("inlineCode",{parentName:"p"},"self")," et peuvent \xeatre ensuite modifi\xe9 en utilisant l'op\xe9rateur ",(0,i.kt)("inlineCode",{parentName:"p"},"."),"."))),(0,i.kt)("h2",{id:"cr\xe9ation-dobjets-\xe0-partir-dune-classe"},"Cr\xe9ation d'objets \xe0 partir d'une classe"),(0,i.kt)("p",null,"Suivant l'exemple de la classe ",(0,i.kt)("inlineCode",{parentName:"p"},"Coin"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def main():\n    # Cr\xe9ation de l'objet avec la m\xe9thode init\n    my_coin = Coin()\n\n    # Affiche l'\xe9tat de la pi\xe8ce\n    print('This side is up:', my_coin.get_sideup())\n\n    # Lance la pi\xe8ce\n    print('I am tossing the coin...')\n    my_coin.toss()\n\n    # Affiche l'\xe9tat de la pi\xe8ce\n    print('This side is up:', my_coin.get_sideup())\n    \nmain()\n\n")),(0,i.kt)("h2",{id:"attributs-priv\xe9s"},"Attributs priv\xe9s"),(0,i.kt)("p",null,"Il est possible de cacher les attributs pour que ceux-ci ne soient pas accessibles \xe0 l'ext\xe9rieur de la classe."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import random\n\nclass Coin:\n\n    def __init__(self):\n        self.__sideup = 'Heads'\n\n    def toss(self):\n        if random.randint(0, 1) == 0:\n            self.__sideup = 'Heads'\n        else:\n            self.__sideup = 'Tails'\n\n    def get_sideup(self):\n        return self.__sideup\n")),(0,i.kt)("p",null,"Les attributs avec deux tirets bas seront cach\xe9s \xe0 un acc\xe8s public."),(0,i.kt)("h2",{id:"multiple-instance"},"Multiple instance"),(0,i.kt)("p",null,"Chaque objet aura ses propres valeurs dans les attributs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\ndef main():\n    coin1 = Coin()\n    coin2 = Coin()\n    coin3 = Coin()\n\n    print('I have three coins with these sides up:')\n    print(coin1.get_sideup())\n    print(coin2.get_sideup())\n    print(coin3.get_sideup())\n    print()\n    \n    print('I am tossing all three coins...')\n    print()\n    coin1.toss()\n    coin2.toss()\n    coin3.toss()\n\n    print('Now here are the sides that are up:')\n    print(coin1.get_sideup())\n    print(coin2.get_sideup())\n    print(coin3.get_sideup())\n    print()\n\nmain()\n\n")),(0,i.kt)("h2",{id:"accesseurs-et-mutateurs"},"Accesseurs et mutateurs"),(0,i.kt)("p",null,"Pour avoir un meilleur contr\xf4le sur les donn\xe9es des objets, on utilise habituellement des attributs priv\xe9s et on expose des m\xe9thodes d'acc\xe8s (get) et de mutation (set) pour travailler sur les attributs."),(0,i.kt)("p",null,"Par exemple, l'attribut ",(0,i.kt)("inlineCode",{parentName:"p"},"__sideup")," de la classe ",(0,i.kt)("inlineCode",{parentName:"p"},"Coin")," pourrait avoir la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"get_sideup")," qui retourne la valeur de l'attribut et la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"set_sideup")," qui re\xe7oit et assigne une nouvelle valeur \xe0 l'attribut. Les m\xe9thodes d'acc\xe8s et de mutations permettent d'ajouter de la validation \xe0 la modification d'attributs."),(0,i.kt)("h2",{id:"sqlite-avec-python"},"SQLite avec Python"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sqlite.org/index.html"},"SQLite")," est une impl\xe9mentation d'une base de donn\xe9es SQL \xe0 l'int\xe9rieur d'un fichier.")),(0,i.kt)("h2",{id:"tables"},"Tables"),(0,i.kt)("p",null,"Les informations d'une base de donn\xe9es sont regroup\xe9es en plusieurs tables de plusieurs colonnes. Chaque colonne porte un nom et peut contenir un type de donn\xe9e pr\xe9cise. Plusieurs lignes de donn\xe9es formeront l'information de la BD."),(0,i.kt)("h2",{id:"types-des-colonnes"},"Types des colonnes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NULL - Valeur nulle."),(0,i.kt)("li",{parentName:"ul"},"INTEGER - Entier sign\xe9."),(0,i.kt)("li",{parentName:"ul"},"REAL - Valeur flottante."),(0,i.kt)("li",{parentName:"ul"},"TEXT - Texte."),(0,i.kt)("li",{parentName:"ul"},"BLOB - Donn\xe9e ind\xe9finie.")),(0,i.kt)("h2",{id:"cr\xe9ation-de-tables"},"Cr\xe9ation de tables"),(0,i.kt)("p",null,"La cr\xe9ation d'une nouvelle table demande de nommer la table, ses colonnes et le type de chacune des colonnes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Client(\n    nom TEXT,\n    num_id INTEGER,\n    solde REAL\n);\n")),(0,i.kt)("h2",{id:"ajout-de-donn\xe9es-dans-une-table"},"Ajout de donn\xe9es dans une table"),(0,i.kt)("p",null,"L'ajout d'une ligne dans une table se fait avec la commande ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Client\n    VALUES ('Bob', 34252, 2.34);\n\n-- On peut sp\xe9cifier quelle colonne remplir\nINSERT INTO Client(nom, num_id)\n    VALUES ('Bob', 34252);\n\nINSERT INTO Client\n    VALUES ('Annie', 21513, 346.25),\n        ('Julie', 135153, 2352.43);\n")),(0,i.kt)("h2",{id:"chercher-dans-la-table"},"Chercher dans la table"),(0,i.kt)("p",null,"La majorit\xe9 des interactions avec une base de donn\xe9es est d'aller chercher de l'information \xe0 l'int\xe9rieur de celle-ci. La commande ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," permet de faire des recherches dans les tables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * from Client;\n\n-- Le premier param\xe8tre est les colonnes \xe0 afficher\nSELECT nom,solde from Client;\n")),(0,i.kt)("h2",{id:"condition-de-s\xe9lection"},"Condition de s\xe9lection"),(0,i.kt)("p",null,"Il est possible de filtrer un ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," avec l'option ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT nom from Client WHERE solde < 0;\n")),(0,i.kt)("h2",{id:"modification-des-lignes---supprimer"},"Modification des lignes - Supprimer"),(0,i.kt)("p",null,"La commande ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," permet de supprimer des lignes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- Supprime toutes les lignes\nDELETE FROM Client;\n\nDELETE FROM Client WHERE solde < 0;\n\n-- Supprime une table\nDROP TABLE Client;\n")),(0,i.kt)("h2",{id:"intr\xe9gration-de-sql-avec-python"},"Intr\xe9gration de SQL avec python"),(0,i.kt)("p",null,"La librairie sqlite3 permet de se connecter \xe0 une BD SQLite (un fichier). \xc0 partir de l\xe0, on peut envoyer des commandes et recevoir les r\xe9ponses de commandes SQL."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import sqlite3\nconn = sqlite3.connect("MaBD.db")\n\n# C\'est le curseur qui envoie les commandes et re\xe7oit nos r\xe9ponses.\ncur = conn.cursor()\n\ncur.close()\nconn.close()\n')),(0,i.kt)("h2",{id:"envoi-de-commande-avec-les-curseurs"},"Envoi de commande avec les curseurs"),(0,i.kt)("p",null,"Les commandes sont \xe9crites avec la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," et \xe9crite dans la base de donn\xe9es avec ",(0,i.kt)("inlineCode",{parentName:"p"},"commit")," pour les actions modifiantes la BD."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"cur.execute(\"INSERT INTO Client VALUES('Jean', 24432, 2.634)\")\nconn.commit()\n")),(0,i.kt)("h2",{id:"s\xe9lection-de-lignes-avec-les-curseurs"},"S\xe9lection de lignes avec les curseurs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"cur.execute('SELECT * FROM Client')\n\n# Parcours avec un for\nfor e in cur:\n    print(e)\n\n# Gestion dans une liste\nma_liste = list(cur)\n\n# Insertion dans une liste\nres = cur.fetchall()\n")),(0,i.kt)("h2",{id:"requ\xeates-vers-des-api-rest"},"Requ\xeates vers des API REST"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Une m\xe9thode courante d'acquisition de donn\xe9es est l'utilisation d'API (Application Programming Interface) de type REST."),(0,i.kt)("li",{parentName:"ul"},"Cette m\xe9thode permet de faire une requ\xeate \xe0 un site web avec des param\xe8tres donn\xe9es et de recevoir une r\xe9ponse en JSON.")),(0,i.kt)("h2",{id:"librairie-requests"},"Librairie requests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pour faire des requ\xeates WEB avec python, la librairie ",(0,i.kt)("a",{parentName:"li",href:"https://docs.python-requests.org/en/master/"},"request")," est utilis\xe9.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# import requests module\nimport requests\n  \n# Making a get request\nresponse = requests.get('https://api.github.com')\n  \n# print response\nprint(response)\n  \n# print json content\nprint(response.json())\n")),(0,i.kt)("h2",{id:"les-requ\xeates-web-et-les-r\xe8gles-du-rest"},"Les requ\xeates web et les r\xe8gles du REST"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Le principe des requ\xeates REST est d'avoir les param\xe8tres dans l'URL qui est utilis\xe9 pour faire la requ\xeate."),(0,i.kt)("li",{parentName:"ul"},"Le chemin de l'application permet de recevoir seulement l'information voulu.")),(0,i.kt)("h2",{id:"exemple-avec-jsonplaceholder"},"Exemple avec JSONPlaceholder"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jsonplaceholder.typicode.com/"},"JSONPlaceholder")," est un site simple avec un API rest qui peut \xeatre utilis\xe9 pour tester nos requ\xeates.")),(0,i.kt)("h2",{id:"routes"},"Routes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Les diff\xe9rents chemin sont nomm\xe9 routes et ceux-ci font partie d'une arborescence."),(0,i.kt)("li",{parentName:"ul"},"Par exemple, JSONPlaceholder \xe0 les routes suivantes :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/posts")," vers tous les articles sauvegard\xe9s"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/posts/1")," le nombre 1 permet de s\xe9lectionner un article en particulier"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/posts/1/comments")," la continuation de la route avec ",(0,i.kt)("inlineCode",{parentName:"li"},"comments")," permet d'aller chercher les commentaire de l'article sp\xe9cifi\xe9.")))))}c.isMDXComponent=!0}}]);