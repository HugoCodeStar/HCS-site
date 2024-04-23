"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[588],{5680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>c});var t=a(6540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=t.createContext({}),u=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),g=i,c=d["".concat(o,".").concat(g)]||d[g]||m[g]||r;return a?t.createElement(c,l(l({ref:n},p),{},{components:a})):t.createElement(c,l({ref:n},p))}));function c(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=g;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<r;u++)l[u]=a[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6439:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var t=a(8168),i=(a(6540),a(5680));const r={title:"Fondements de la programmation scientifique",sidebar_label:"2 - Intro programmation",sidebar_position:2},l=void 0,s={unversionedId:"inf5111/Cours/cours2",id:"inf5111/Cours/cours2",isDocsHomePage:!1,title:"Fondements de la programmation scientifique",description:"Programmation",source:"@site/docs/inf5111/Cours/cours2.md",sourceDirName:"inf5111/Cours",slug:"/inf5111/Cours/cours2",permalink:"/site/docs/inf5111/Cours/cours2",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf5111/Cours/cours2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Fondements de la programmation scientifique",sidebar_label:"2 - Intro programmation",sidebar_position:2},sidebar:"INF5111Sidebar",previous:{title:"1 - Intro",permalink:"/site/docs/inf5111/Cours/cours1"},next:{title:"3 - Intro BD",permalink:"/site/docs/inf5111/Cours/cours3"}},o=[{value:"Programmation",id:"programmation",children:[]},{value:"Programmation",id:"programmation-1",children:[]},{value:"Anaconda / Jupyter Notebook / Google Collab",id:"anaconda--jupyter-notebook--google-collab",children:[]},{value:"Affichage avec la fonction <code>print</code>",id:"affichage-avec-la-fonction-print",children:[]},{value:"Les chaines de caract\xe8res",id:"les-chaines-de-caract\xe8res",children:[]},{value:"Commentaires",id:"commentaires",children:[]},{value:"<strong>Exemple 1</strong>",id:"exemple-1",children:[]},{value:"Variables et instruction d&#39;assignation",id:"variables-et-instruction-dassignation",children:[]},{value:"Assignation et instruction",id:"assignation-et-instruction",children:[]},{value:"Identificateurs",id:"identificateurs",children:[]},{value:"<strong>Exemple 2</strong>",id:"exemple-2",children:[]},{value:"Type de donn\xe9es",id:"type-de-donn\xe9es",children:[]},{value:"Saisie avec la fonction <code>input</code>",id:"saisie-avec-la-fonction-input",children:[]},{value:"<strong>Exemple 3</strong>",id:"exemple-3",children:[]},{value:"Affichage d&#39;expression avec <code>print</code>",id:"affichage-dexpression-avec-print",children:[]},{value:"Caract\xe8re d&#39;\xe9chapement",id:"caract\xe8re-d\xe9chapement",children:[]},{value:"<strong>Exemple 4</strong>",id:"exemple-4",children:[{value:"Param\xe8tres nomm\xe9s",id:"param\xe8tres-nomm\xe9s",children:[]}]},{value:"Modules fournis",id:"modules-fournis",children:[]},{value:"Listes",id:"listes",children:[]},{value:"Initialisation de liste",id:"initialisation-de-liste",children:[]},{value:"Acc\xe8s aux \xe9l\xe9ments de la liste",id:"acc\xe8s-aux-\xe9l\xe9ments-de-la-liste",children:[]},{value:"Liste dynamique",id:"liste-dynamique",children:[]},{value:"D\xe9coupage d&#39;une liste (slicing)",id:"d\xe9coupage-dune-liste-slicing",children:[]},{value:"M\xe9thodes sur les listes",id:"m\xe9thodes-sur-les-listes",children:[]},{value:"Tuple",id:"tuple",children:[]}],u={toc:o},p="wrapper";function d(e){let{components:n,...a}=e;return(0,i.yg)(p,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"programmation"},"Programmation"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Instructions"),(0,i.yg)("li",{parentName:"ul"},"M\xe9moire"),(0,i.yg)("li",{parentName:"ul"},"Algorithme / Contr\xf4le de flux")),(0,i.yg)("h2",{id:"programmation-1"},"Programmation"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Language du cours : Python 3"),(0,i.yg)("li",{parentName:"ul"},"Environement de d\xe9velopment",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Google Collab ",(0,i.yg)("a",{parentName:"li",href:"https://colab.research.google.com/"},"https://colab.research.google.com/")),(0,i.yg)("li",{parentName:"ul"},"PyCharm"),(0,i.yg)("li",{parentName:"ul"},"Anaconda / Jupyter - ",(0,i.yg)("a",{parentName:"li",href:"https://www.anaconda.com/products/individual"},"https://www.anaconda.com/products/individual"))))),(0,i.yg)("h2",{id:"anaconda--jupyter-notebook--google-collab"},"Anaconda / Jupyter Notebook / Google Collab"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Les notebooks sont un environnement de travail pour les sciences de la donn\xe9es."),(0,i.yg)("li",{parentName:"ul"},"L'application permet la gestion et configuration de plusieurs plateformes des scienses de la donn\xe9e bas\xe9 sur Python, R et d'autres."),(0,i.yg)("li",{parentName:"ul"},"La majorit\xe9 du travail en Python se fait \xe0 l'int\xe9rieur de Notebooks qui permet de m\xe9lang\xe9 documentation, code et visualisation dans un seul fichier. Ce fichier \xe0 l'extension ",(0,i.yg)("inlineCode",{parentName:"li"},".ipynb")," pour ",(0,i.yg)("inlineCode",{parentName:"li"},"Interactive PYthon NoteBook"),". Ce fichier peut \xeatre lu par une panoplie d'application."),(0,i.yg)("li",{parentName:"ul"},"Dans notre cas, Google Collab est conseiller pour la session. Celui-ci offre en environnement de notebook en infonuagique. Il existe aussi d'autres applications permettant de lire les Python notebook :",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"PyCharm"),(0,i.yg)("li",{parentName:"ul"},"Datalore"),(0,i.yg)("li",{parentName:"ul"},"VS Code"),(0,i.yg)("li",{parentName:"ul"},"Jupyter Labs/ Notebook (anciennce version de Jupyter Labs)")))),(0,i.yg)("h1",{id:"markdown"},"Markdown"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Pour la documentation, la format Markdown est utilis\xe9. Celui-ci utilise des balises pour avoir un formatage facile et conviviale qui est initiallement en format texte."),(0,i.yg)("li",{parentName:"ul"},"Veuillez vous r\xe9f\xe9r\xe9 \xe0 la ",(0,i.yg)("a",{parentName:"li",href:"https://jupyter-notebook.readthedocs.io/en/stable/examples/Notebook/Working%20With%20Markdown%20Cells.html"},"Documentation de Markdown")," pour l'utilisation des diff\xe9rentes balises du format.")),(0,i.yg)("h2",{id:"affichage-avec-la-fonction-print"},"Affichage avec la fonction ",(0,i.yg)("inlineCode",{parentName:"h2"},"print")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"L'affichage de texte utilise la fonction ",(0,i.yg)("inlineCode",{parentName:"li"},"print")," pour pr\xe9senter une chaine de caract\xe8res dans la fen\xeatre de commande.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"print('5 + 5')\nprint(\"C'est super\")\n")),(0,i.yg)("h2",{id:"les-chaines-de-caract\xe8res"},"Les chaines de caract\xe8res"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Les chaines de caract\xe8res (du texte lit\xe9ral) est d\xe9limit\xe9 par des guillement simple ",(0,i.yg)("inlineCode",{parentName:"li"},"'")," ou double ",(0,i.yg)("inlineCode",{parentName:"li"},'"'),"."),(0,i.yg)("li",{parentName:"ul"},"Cette distinction permet de faire la diff\xe9rence entre les instructions et le texte \xe0 utiliser dans le programme."),(0,i.yg)("li",{parentName:"ul"},"Deux symbole sont disponible pour facilit\xe9 l'utlisation de l'autre type de guillemet dans une chaine."),(0,i.yg)("li",{parentName:"ul"},"Il est aussi possible d'utiliser les triples symboles pour d\xe9limit\xe9 une chaine.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'print(\'Texte \xe0 afficher!\')\nprint(\'Le "best" texte\')\nprint("Y\'en a pas de meilleur texte.")\nprint("""C\'est possible d\'avoir du texte avec les deux "quotes" dans une chaine.""")\nprint("""M\xeame\nsur plusieurs\nligne""")\n')),(0,i.yg)("h2",{id:"commentaires"},"Commentaires"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Le hashtag ",(0,i.yg)("inlineCode",{parentName:"li"},"#")," d\xe9bute une ligne de commentaire;"),(0,i.yg)("li",{parentName:"ul"},"Le reste de la ligne apr\xe8s le ",(0,i.yg)("inlineCode",{parentName:"li"},"#")," ne sera pas consid\xe9r\xe9 par python durant l'ex\xe9cution du code;"),(0,i.yg)("li",{parentName:"ul"},"Une ligne vide sera aussi saut\xe9e par python;"),(0,i.yg)("li",{parentName:"ul"},"Les commentaires sont primordiaux \xe0 la programmation;"),(0,i.yg)("li",{parentName:"ul"},"Les commentaires sont utilis\xe9s en en-t\xeate de fichiers, fonctions et programme ainsi qu\u2019\xe0 l\u2019int\xe9rieur d\u2019un programme pour aider \xe0 comprendre l\u2019intention des instructions.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"print('Texte \xe0 afficher!')\n# Utilise le caract\xe8re sp\xe9cial \\n pour un saut de ligne\nprint('Une ligne\\net une autre')\nprint (3 + 6) # print peut aussi afficher le r\xe9sultat d'une expression\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"Texte \xe0 afficher!\nUne ligne\net une autre\n9\n")),(0,i.yg)("h2",{id:"exemple-1"},(0,i.yg)("strong",{parentName:"h2"},"Exemple 1")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\xc9crivez un script qui calcule un salaire hebdomadaire \xe0 partir d\u2019un nombre d\u2019heures travaill\xe9es et un salaire horaire.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'# Calcul du salaire\n# hebdomadaire d\'une personne.\n\nprint("Mon salaire hebdomadaire")\nprint(6 * 20.5)\n')),(0,i.yg)("h2",{id:"variables-et-instruction-dassignation"},"Variables et instruction d'assignation"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Une variable est la combinaison d\u2019un espace m\xe9moire r\xe9serv\xe9, un identificateur et une valeur;"),(0,i.yg)("li",{parentName:"ul"},"L'assignation utilise l'\xe9galit\xe9 ",(0,i.yg)("inlineCode",{parentName:"li"},"=")," pour lier la valeur \xe0 l'identificateur")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"nomVariable = 99\nprint(nomVariable)\n")),(0,i.yg)("h2",{id:"assignation-et-instruction"},"Assignation et instruction"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"L\u2019assignation se fait toujours d\u2019une ",(0,i.yg)("strong",{parentName:"li"},"expression")," \xe0 droite vers un identificateur \xe0 gauche;"),(0,i.yg)("li",{parentName:"ul"},"L'expression sera \xe9valu\xe9e avant d'\xeatre assign\xe9e dans la variable;")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"nomVariable = nomVariable  + 5\nprint( nomVariable ) # affiche 109\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"# Si la variable n'a qu'une op\xe9ration,\n# il existe une version raccourci de l'assignation\nx += 5 # M\xeame instruction que x = x + 5\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Le contenu d'une variable existante est \xe9cras\xe9 lors d'une assignation.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Une longue instruction peut \xeatre coup\xe9 sur une deuxi\xe8me ligne avec le caract\xe8re ",(0,i.yg)("inlineCode",{parentName:"p"},"\\")))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"nomVariable = nomVariable + 5 + nomVariable + \\\n  nomVariable + nomVariable\nprint(nomVariable)\n")),(0,i.yg)("h2",{id:"identificateurs"},"Identificateurs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Les identificateurs sont utilis\xe9s pour identifier les diff\xe9rents \xe9l\xe9ments que nous ajoutons \xe0 notre programme;"),(0,i.yg)("li",{parentName:"ul"},"Les identificateurs sont les noms que l\u2019on donne \xe0 nos variables, scripts et fonctions;"),(0,i.yg)("li",{parentName:"ul"},"Les caract\xe8res permis sont :",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Tout caract\xe8re alphanum\xe9rique;"),(0,i.yg)("li",{parentName:"ul"},"Le tiret-bas ",(0,i.yg)("inlineCode",{parentName:"li"},"_"),"."))),(0,i.yg)("li",{parentName:"ul"},"Le premier caract\xe8re doit \xeatre alphab\xe9tique;"),(0,i.yg)("li",{parentName:"ul"},"Le nom de la variable ne doit pas \xeatre un mot r\xe9serv\xe9 par la syntaxe de python;"),(0,i.yg)("li",{parentName:"ul"},"Faites attention! Pour python, les majuscules et minuscules sont des caract\xe8res diff\xe9rents;"),(0,i.yg)("li",{parentName:"ul"},"Par convention, ",(0,i.yg)("inlineCode",{parentName:"li"},"camelCase"),".")),(0,i.yg)("h2",{id:"exemple-2"},(0,i.yg)("strong",{parentName:"h2"},"Exemple 2")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\xc9crivez un script qui calcule un salaire hebdomadaire \xe0 partir d\u2019un nombre d\u2019heures travaill\xe9es et un salaire horaire. Affichez le salaire brut ainsi que le salaire net apr\xe8s 15% de taxes."),(0,i.yg)("li",{parentName:"ul"},"Utilisez des variables pour le nombre d\u2019heures travaill\xe9es, le salaire horaire, le salaire brut et le salaire net.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'# Donn\xe9es initiales\nheuresTravailler = 18\ntauxHoraire = 45\n\n# Calcul du salaire Brut\nsalaireHebdomadaireBrut = heuresTravailler * tauxHoraire\nprint("Mon salaire hebdomadaire brut")\nprint(salaireHebdomadaireBrut)\n\n# Calcul du salaire net\ntauxImposition = 0.15\nsalaireHebdomadaireNet = salaireHebdomadaireBrut - salaireHebdomadaireBrut * tauxImposition\nprint("Mon salaire hebdomadaire net")\nprint(salaireHebdomadaireNet)\n')),(0,i.yg)("h2",{id:"type-de-donn\xe9es"},"Type de donn\xe9es"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Quatre types de donn\xe9es seront rencontr\xe9s g\xe9n\xe9ralement durant ce cours:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"int")," - entit\xe9 num\xe9rique enti\xe8re(ex: 3, -4);"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"float")," - entit\xe9e num\xe9rique flottante (3.542, -0.23);"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"str")," - entit\xe9 textuelle (ex: 'a', 'Bonjour!');",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Les chaines de caract\xe8res sont d\xe9limit\xe9es par des guillemets simples ou doubles."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"bool")," - valeur logique vraie (True) ou fausse (False).")))),(0,i.yg)("h2",{id:"saisie-avec-la-fonction-input"},"Saisie avec la fonction ",(0,i.yg)("inlineCode",{parentName:"h2"},"input")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Une saisie utilise la fonction ",(0,i.yg)("inlineCode",{parentName:"li"},"input")," pour assigner l'entr\xe9e d'un utilisateur dans une variable."),(0,i.yg)("li",{parentName:"ul"},"Puisque le retour sera toujours en ",(0,i.yg)("inlineCode",{parentName:"li"},"str"),", il faut le convertir au besoin. "),(0,i.yg)("li",{parentName:"ul"},"La fonction ",(0,i.yg)("inlineCode",{parentName:"li"},"int")," ou ",(0,i.yg)("inlineCode",{parentName:"li"},"float")," permet de convertir la chaine en entier ou en r\xe9el.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"## Saisie d'un nombre\n## Doit convertir la valeur\nsaisi = int(input('Texte \xe0 afficher \xe0 la saisie: '))\n\n## Saisie d'une chaine de caract\xe8res (texte)\n#saisiChaine = input('Nombre \xe0 afficher: ')\nprint(saisi + 5)\n")),(0,i.yg)("h2",{id:"exemple-3"},(0,i.yg)("strong",{parentName:"h2"},"Exemple 3")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\xc9crivez un script qui calcule un salaire hebdomadaire \xe0 partir d\u2019un nombre d\u2019heures travaill\xe9es et un salaire horaire;"),(0,i.yg)("li",{parentName:"ul"},"Faites-la saisie du nombre d\u2019heures travaill\xe9es et du salaire horaire au clavier;"),(0,i.yg)("li",{parentName:"ul"},"Afficher un message d\u2019information avant d\u2019afficher le salaire.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'\n# Saisit des donn\xe9es initiales\nheuresTravailler = float(input("Entrez le nombre d\'heures travailler : "))\ntauxHoraire = float(input("Entrez le nombre taux horaire : "))\n\n# Calcul du salaire Brut\nsalaireHebdomadaireBrut = heuresTravailler * tauxHoraire\nprint("Mon salaire hebdomadaire brut")\nprint(salaireHebdomadaireBrut)\n\n# Calcul du salaire net\ntauxImposition = 0.18\nsalaireHebdomadaireNet = salaireHebdomadaireBrut - salaireHebdomadaireBrut * tauxImposition\nprint("Mon salaire hebdomadaire net")\nprint(salaireHebdomadaireNet)\n')),(0,i.yg)("h2",{id:"affichage-dexpression-avec-print"},"Affichage d'expression avec ",(0,i.yg)("inlineCode",{parentName:"h2"},"print")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"print")," a la possibilit\xe9 d'afficher l'\xe9valuation d'une expression;"),(0,i.yg)("li",{parentName:"ul"},"Il est possible de d\xe9couper sur plusieurs ligne l'utilsation du print.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"x = 3\nchaine = 'allo'\nprint('Chiffre: ', x)\nprint('Chaine: ', chaine)\nprint('Chiffre' , x, \n  'et chaine', chaine)\n")),(0,i.yg)("h2",{id:"caract\xe8re-d\xe9chapement"},"Caract\xe8re d'\xe9chapement"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Les caract\xe8res d'\xe9chapements permetent d'ins\xe9r\xe9 des \xe9l\xe9ments non-textuelles dans un affichage de la fonction print.")),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Caract\xe8re"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"\\n")),(0,i.yg)("td",{parentName:"tr",align:null},"Saut de ligne")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"\\t")),(0,i.yg)("td",{parentName:"tr",align:null},"Saut de tabulation horizontale")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"\\'")),(0,i.yg)("td",{parentName:"tr",align:null},"Affiche un guillemet simple")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},'\\"')),(0,i.yg)("td",{parentName:"tr",align:null},"Affiche un guillemet double")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"\\\\")),(0,i.yg)("td",{parentName:"tr",align:null},"Affiche un backslash")))),(0,i.yg)("h2",{id:"exemple-4"},(0,i.yg)("strong",{parentName:"h2"},"Exemple 4")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\xc9crivez un script qui calcule un salaire hebdomadaire \xe0 partir d\u2019un nombre d\u2019heures travaill\xe9es et un salaire horaire."),(0,i.yg)("li",{parentName:"ul"},"Faites-la saisie du nombre d\u2019heures travaill\xe9es et du salaire horaire au clavier."),(0,i.yg)("li",{parentName:"ul"},"Afficher un message avec le salaire net.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'# Saisit des donn\xe9es initiales\nheuresTravailler = float(input("Entrez le nombre d\'heures travailler : "))\ntauxHoraire = float(input("Entrez le nombre taux horaire : "))\n\n# Calcul du salaire Brut\nsalaireHebdomadaireBrut = heuresTravailler * tauxHoraire\n\n# Calcul du salaire net\ntauxImposition = 0.18\nsalaireHebdomadaireNet = salaireHebdomadaireBrut - salaireHebdomadaireBrut * tauxImposition\n\n# Affichage final\nprint("Mon salaire hebdomadaire brut est", salaireHebdomadaireBrut, \n      "et mon salaire net est", salaireHebdomadaireNet)\n')),(0,i.yg)("h1",{id:"appel-de-m\xe9thodes-et-de-fonctions"},"Appel de m\xe9thodes et de fonctions"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Les fonctions (comme ",(0,i.yg)("inlineCode",{parentName:"p"},"print")," et ",(0,i.yg)("inlineCode",{parentName:"p"},"input"),") prennent des param\xe8tres d'entr\xe9s pour s'ex\xe9cuter correctement")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Les param\xe8tres sont d\xe9limit\xe9s par des virgules et chaque param\xe8tre sont des expressions (comme vue durant les assignations")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Certaines fonctions sont import\xe9es \xe0 partir de librairies")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Certains \xe9l\xe9ments (comme les listes que nous allons voir) sont des objets sauvegard\xe9 dans des variables.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Les objets sont un m\xe9lange de valeurs (propri\xe9t\xe9s) et fonctions (m\xe9thodes).")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"On acc\xe8de aux \xe9l\xe9ments de l'objet avec le ",(0,i.yg)("inlineCode",{parentName:"p"},"."),". Nous verrons sont utilisation avec les listes et autres objets."))),(0,i.yg)("h3",{id:"param\xe8tres-nomm\xe9s"},"Param\xe8tres nomm\xe9s"),(0,i.yg)("p",null,"Certains appels ont des param\xe8tres nomm\xe9es qui permettent d'avoir des \xe9l\xe9ments facultatifs \xe0 l'appel. Le nom du param\xe8tre nomm\xe9 est suivi d'un ",(0,i.yg)("inlineCode",{parentName:"p"},"=")," et de la valeur voulu. Les param\xe8tres nomm\xe9es sont toujours apr\xe8s les param\xe8tres normaux et leurs ordres n'est pas important."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"# Le param\xe8tre nomm\xe9 `end` permet de modifier la fin du print qui utilise habituellement un saut de ligne\nprint('One', end=' ')\nprint('Two', end=' ')\nprint('Three')\n")),(0,i.yg)("h2",{id:"modules-fournis"},"Modules fournis"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Plusieurs modules sont fournis et nous verrons qu'il existe un tr\xe8s grand \xe9cosyst\xe8me de module pouvant nous faciliter la cr\xe9ation de nos programmes."),(0,i.yg)("li",{parentName:"ul"},"Par exemple, le module ",(0,i.yg)("inlineCode",{parentName:"li"},"math")," nous donne plusieurs fonctions math\xe9matiques communes."),(0,i.yg)("li",{parentName:"ul"},"Pour savoir lesquelles et leurs utilisations, il faut consulter leur documentation;",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.python.org/3/library/math.html"},"https://docs.python.org/3/library/math.html"))))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"import math # La commande import peut \xeatre fait une fois au d\xe9but du projet/notebook\n\nreponse = math.sqrt(45)\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"# Il est aussi possible de renomm\xe9 une importation pour facilit\xe9 son utilisation\nimport math as m\n\nreponse = m.sqrt(45)\n\n# Ou encore de seulement importer une fonction pr\xe9cise sans avoir de pr\xe9fixe\nfrom math import sqrt\nreponse = sqrt(12)\n")),(0,i.yg)("h1",{id:"liste-et-tuples"},"Liste et tuples"),(0,i.yg)("h2",{id:"listes"},"Listes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Les listes sont des collections de plusieurs \xe9l\xe9ments de m\xeame type sous un seul identificateur;"),(0,i.yg)("li",{parentName:"ul"},"La liste est construite de cases m\xe9moire cons\xe9cutives en m\xe9moire;"),(0,i.yg)("li",{parentName:"ul"},"\xc0 chaque \xe9l\xe9ment de la liste, on associe un indice qui permet de facilement acc\xe9der aux cases individuellement;"),(0,i.yg)("li",{parentName:"ul"},"Nous regarderons pour commencer que des listes d'une dimension;")),(0,i.yg)("h2",{id:"initialisation-de-liste"},"Initialisation de liste"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"[ valeurs\xa0]")," - Une liste de valeurs d\xe9limit\xe9es par des virgules. Construis un tableau avec les valeurs donn\xe9es."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"list(range(x))")," permet de convertir le r\xe9sultat de la fonction ",(0,i.yg)("inlineCode",{parentName:"li"},"range")," en liste."),(0,i.yg)("li",{parentName:"ul"},"La fonction ",(0,i.yg)("inlineCode",{parentName:"li"},"len")," peut afficher nombre d'\xe9l\xe9ments d'une liste")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"liste = [4, 6, 3, 5, 7]\nliste_noms = ['Bob', 'Marie', 'Aird']\nliste_mixte = [3, True, 'ok']\nliste_repeat = ['allo'] * 3 # Donne ['allo', 'allo', 'allo']\nliste_range = list(range(4)) # Donne [0, 1, 2, 3]\n\nprint(len(liste))\n")),(0,i.yg)("h2",{id:"acc\xe8s-aux-\xe9l\xe9ments-de-la-liste"},"Acc\xe8s aux \xe9l\xe9ments de la liste"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"L'acc\xe8s aux \xe9l\xe9ments de la liste se fait \xe0 travers un indice. L'indice est utilis\xe9 entre des crochets ",(0,i.yg)("inlineCode",{parentName:"li"},"[]")," suivant l'identificateur de la liste;"),(0,i.yg)("li",{parentName:"ul"},"Cette m\xe9thode peut \xeatre utilis\xe9e pour assigner une valeur \xe0 une case sp\xe9cifique."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Attention")," : Les indices commencent \xe0 0.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"x = [3, 2, 5, 6, 7]\nprint(x[1])\n\nprint(x[2])\nx[2] = 4\nprint(x[2])\n")),(0,i.yg)("h2",{id:"liste-dynamique"},"Liste dynamique"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Les listes de Python sont dynamiques. Elles peuvent changer de taille au besoin;"),(0,i.yg)("li",{parentName:"ul"},"L'ajout d'\xe9l\xe9ments se fait avec la fonction ",(0,i.yg)("inlineCode",{parentName:"li"},"append"),";"),(0,i.yg)("li",{parentName:"ul"},"La concat\xe9nation de listes se fait avec l'op\xe9ration ",(0,i.yg)("inlineCode",{parentName:"li"},"+"),";"),(0,i.yg)("li",{parentName:"ul"},"La suppression d'un \xe9l\xe9ment se fait avec l'instruction ",(0,i.yg)("inlineCode",{parentName:"li"},"del"),".")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"x = [4, 5, 3]\ny = [1, 2, 3]\nx.append(7)\nprint(x[3]) # Affiche 7\n\nz = x + y\nprint(z) # Affiche [4, 5, 3, 7, 1, 2, 3]\n\ndel z[2]\nprint(z) # Affiche [4, 5, 7, 1, 2, 3]\n")),(0,i.yg)("h2",{id:"d\xe9coupage-dune-liste-slicing"},"D\xe9coupage d'une liste (slicing)"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Une sous-liste d'une liste peut \xeatre g\xe9n\xe9r\xe9e en utilisant les op\xe9rations de d\xe9coupage."),(0,i.yg)("li",{parentName:"ul"},"Le d\xe9coupage prend deux indices, un de d\xe9but et un de fin (la fin sera exclue de la s\xe9lection)"),(0,i.yg)("li",{parentName:"ul"},"Il est possible d'omettre le d\xe9but ou la fin."),(0,i.yg)("li",{parentName:"ul"},"Si le d\xe9but est omis, l'indice 0 est utilis\xe9"),(0,i.yg)("li",{parentName:"ul"},"Si la fin est omise, l'indice de fin est la fin de la liste")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"x = ['a', 'b', 'c', 'd', 'e', 'f']\n\nmid_x = x[2:4] # Contient ['c', 'd']\nprint(mid_x)\n\nend_x = x[4:] # Contient ['e', 'f']\nprint(end_x)\n")),(0,i.yg)("p",null,"Les fonctions ",(0,i.yg)("inlineCode",{parentName:"p"},"min")," et ",(0,i.yg)("inlineCode",{parentName:"p"},"max")," trouves l'\xe9l\xe9ment le plus petit ou plus grand dans une s\xe9quence (une liste est un type de s\xe9quence)."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"x = [5, 3, 8, 10, 4]\n\nprint(min(x)) # Affiche 3\nprint(max(x)) # Affiche 10\n")),(0,i.yg)("h2",{id:"m\xe9thodes-sur-les-listes"},"M\xe9thodes sur les listes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Les m\xe9thodes sont des fonctions sp\xe9ciales qui sont appell\xe9s directement de la liste."),(0,i.yg)("li",{parentName:"ul"},"Une m\xe9thode est appell\xe9 en pr\xe9fixant le nom de la liste avec un ",(0,i.yg)("inlineCode",{parentName:"li"},"."),"."),(0,i.yg)("li",{parentName:"ul"},"Les m\xe9thodes font partie de la programmation orient\xe9-objet que nous verrons \xe0 la fin du cours.")),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Fonction"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"append(item)"),(0,i.yg)("td",{parentName:"tr",align:null},"Ajoute un \xe9l\xe9ment \xe0 la fin de la liste.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"index(item)"),(0,i.yg)("td",{parentName:"tr",align:null},"Retourne l'indice du premier \xe9l\xe9ment trouv\xe9 dans la liste.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"insert(index, item)"),(0,i.yg)("td",{parentName:"tr",align:null},"Ins\xe8re ",(0,i.yg)("inlineCode",{parentName:"td"},"item")," \xe0 la position ",(0,i.yg)("inlineCode",{parentName:"td"},"index"),". D\xe9cale les autres \xe9l\xe9ments.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"sort()"),(0,i.yg)("td",{parentName:"tr",align:null},"Tri la liste de mani\xe8re croissante.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"remove(item)"),(0,i.yg)("td",{parentName:"tr",align:null},"Enl\xe8ve la premi\xe8re occurrence o\xf9 ",(0,i.yg)("inlineCode",{parentName:"td"},"item")," se trouve dans la liste.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"reverse()"),(0,i.yg)("td",{parentName:"tr",align:null},"Inverse la liste.")))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"x = [3, 7, 10, 2]\n\nx.sort()\n\nprint(x) # Affiche [2, 3, 7, 10]\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"[2, 3, 7, 10]\n")),(0,i.yg)("h2",{id:"tuple"},"Tuple"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Le tulpe est tr\xe8s sembable \xe0 une liste. La diff\xe9rence fondamental est que le tuple est immuable. Il ne peux pas \xeatre modifier apr\xe8s sa cr\xe9ation. Les tuples utilisent des parenth\xe8ses \xe0 la place de crochet carr\xe9s des listes \xe0 leurs cr\xe9ations.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"monTuple = (4, 6, 8, 3)\nprint(monTuple) #Affiche (4, 6, 8, 3)\nprint(monTuple[2]) #Affiche 8\nmonTuple[0] = 10 # G\xe9n\xe8re une erreur\n")),(0,i.yg)("p",null,"Il est possible de convertir un tuple en liste avec la fonction ",(0,i.yg)("inlineCode",{parentName:"p"},"list")," qui re\xe7oit le tuple et retourne une liste avec les m\xeames \xe9l\xe9ments."))}d.isMDXComponent=!0}}]);