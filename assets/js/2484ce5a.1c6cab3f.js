"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[9427],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?i.createElement(m,l(l({ref:t},o),{},{components:r})):i.createElement(m,l({ref:t},o))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[d]="string"==typeof e?e:n,l[1]=u;for(var s=2;s<a;s++)l[s]=r[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8956:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var i=r(7462),n=(r(7294),r(3905));const a={title:"Validation et fichiers externes",sidebar_label:"7 - Validation et fichiers"},l="Objectifs de la semaine",u={unversionedId:"inf135/cours/cours7",id:"inf135/cours/cours7",isDocsHomePage:!1,title:"Validation et fichiers externes",description:"* Validation avec validateattributes",source:"@site/docs/inf135/cours/cours7.md",sourceDirName:"inf135/cours",slug:"/inf135/cours/cours7",permalink:"/site/docs/inf135/cours/cours7",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf135/cours/cours7.md",tags:[],version:"current",frontMatter:{title:"Validation et fichiers externes",sidebar_label:"7 - Validation et fichiers"},sidebar:"INF135Sidebar",previous:{title:"6 - Matrice",permalink:"/site/docs/inf135/cours/cours6"},next:{title:"8 - Graphiques et enregistrements",permalink:"/site/docs/inf135/cours/cours8"}},c=[],s={toc:c},o="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(o,(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"objectifs-de-la-semaine"},"Objectifs de la semaine"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Validation avec ",(0,n.kt)("inlineCode",{parentName:"li"},"validateattributes")),(0,n.kt)("li",{parentName:"ul"},"Fichiers externes")),(0,n.kt)("h1",{id:"validation-avec-validateattributes"},"Validation avec ",(0,n.kt)("inlineCode",{parentName:"h1"},"validateattributes")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"validateattributes")," permet de valider rapidement et efficacement les param\xe8tres d'entr\xe9es de fonctions."),(0,n.kt)("li",{parentName:"ul"},"La fonction re\xe7oit trois param\xe8tres:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"La variable \xe0 valider;"),(0,n.kt)("li",{parentName:"ul"},"Le type voulu de la variable;"),(0,n.kt)("li",{parentName:"ul"},"Une liste de caract\xe9ristique voulue \xe0 valider."))),(0,n.kt)("li",{parentName:"ul"},"L'utilisation des deux derniers param\xe8tres demande des tableaux de cellules. Nous n'irons pas dans les d\xe9tails de leurs utilisations.")),(0,n.kt)("h1",{id:"exemple-dutilisation-de-validateattributes"},"Exemple d'utilisation de ",(0,n.kt)("inlineCode",{parentName:"h1"},"validateattributes")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-MATLAB"},"% Valide que x est un entier scalaire (1x1) positif paire.\nvalidateattributes(x, {'numeric'}, {'scalar', 'positive', 'even'})\n\n% Valide que vec est un vecteur de valeur plus grande que 5.\nvalidateattributes(vec, {'numeric'}, {'vector', '>', 5})\n\n% Valide que chaine est une chaine de caract\xe8res avec 6 lettres (\xe9l\xe9ments)\nvalidateattributes(chaine, {'char'}, {'scalartext', 'numel', 6})\n")),(0,n.kt)("h1",{id:"les-fichiers-externes"},"Les fichiers externes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MATLAB peut acc\xe9der \xe0 des fichiers externes. Ces fichiers vont rester apr\xe8s l'ex\xe9cution de notre programme, contrairement aux variables. Il est donc possible de garder de l'information de mani\xe8res permanentes."),(0,n.kt)("li",{parentName:"ul"},"Deux types de fichiers seront \xe9tudi\xe9s dans le cours:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fichier texte (ASCII)"),(0,n.kt)("li",{parentName:"ul"},"Fichier binaire"))),(0,n.kt)("li",{parentName:"ul"},"Pour travailler avec les fichiers, des fonctions sp\xe9cifiques seront utilis\xe9es pour leurs gestions."),(0,n.kt)("li",{parentName:"ul"},"Un concept d'identificateur de fichier permet de faire r\xe9f\xe9rence \xe0 un fichier autrement que par son nom.")),(0,n.kt)("h1",{id:"identificateur-de-fichier-fid"},"Identificateur de fichier (fid)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pour ne pas avoir \xe0 redonner le nom de fichier \xe0 chaque fonction, un identificateur de fichier est utilis\xe9 pour repr\xe9senter le fichier durant ses interactions avec MATLAB."),(0,n.kt)("li",{parentName:"ul"},"La fonction ",(0,n.kt)("inlineCode",{parentName:"li"},"fopen")," g\xe9n\xe8re un nouvel identificateur de fichier qui sera utilis\xe9 par les fonctions subs\xe9quentes. Seule la fonction ",(0,n.kt)("inlineCode",{parentName:"li"},"fopen")," a donc besoin du nom de fichier."),(0,n.kt)("li",{parentName:"ul"},"L\u2019identificateur de fichier est seulement un chiffre qui permet \xe0 MATLAB de savoir avec quel fichier interagir."),(0,n.kt)("li",{parentName:"ul"},"L\u2019identificateur de fichier permet aussi \xe0 MATLAB de garder la position d\u2019un curseur dans le fichier. On peut donc lire plusieurs informations sans repartir du d\xe9but du fichier."),(0,n.kt)("li",{parentName:"ul"},"Pour arr\xeater les interactions avec le fichier, la fonction ",(0,n.kt)("inlineCode",{parentName:"li"},"fclose")," permet de lib\xe9rer l\u2019utilisation de l\u2019identificateur pour MATLAB.")),(0,n.kt)("h1",{id:"ouverture-de-fichier"},"Ouverture de fichier"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fopen")," permet d'ouvrir un fichier et g\xe9n\xe9rer un identificateur de fichier. L'utilisation de base ne demande que le nom du fichier. Ce fichier sera recherch\xe9 dans le dossier courant."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fopen")," retourne -1 si il y a un probl\xe8me. Par convention, nous allons toujours v\xe9rifier que le fid n'est pas -1 apr\xe8s une ouverture de fichier.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-MATLAB"},"fid = fopen('nomFichier.txt');\nassert(fid ~= -1)\n")),(0,n.kt)("h1",{id:"ouverture-en-\xe9criture-et-fermeture"},"Ouverture en \xe9criture et fermeture"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fopen")," ouvre le fichier en lecture par d\xe9faut. Un deuxi\xe8me param\xe8tre permet d'ouvrir le fichier en \xe9criture."),(0,n.kt)("li",{parentName:"ul"},"Si le fichier n'existe pas, il sera cr\xe9\xe9.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-MATLAB"},"% Ouverture en \xe9criture, efface le contenu\nfid = fopen('nomFichier.txt', 'w');\n% Ouverture en ajout du fichier courant\nfid = fopen('nomFichier.txt', 'a');\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fclose")," prends un identificateur et le ferme.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-MATLAB"},"fclose(fid)\n")),(0,n.kt)("h1",{id:"\xe9criture-de-fichier-texte"},"\xc9criture de fichier texte"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La fonction ",(0,n.kt)("inlineCode",{parentName:"li"},"fprintf")," permet d'\xe9crire dans un fichier texte \xe0 la place de la fen\xeatre de commande. Suffit de lui indiquer l'identificateur de fichier voulu.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-MATLAB"},"fprintf(fid, 'Allo le goupe %g!\\n, 1)\n")),(0,n.kt)("h1",{id:"lecture-de-ligne-de-texte"},"Lecture de ligne de texte"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"feof")," permet de d\xe9tecter si le curseur est \xe0 la fin du fichier;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fgetl"),"/",(0,n.kt)("inlineCode",{parentName:"li"},"fgets")," retourne une ligne de texte du fichier;",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fgetl")," retourne sans le caract\xe8re de saut de ligne;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fgets")," retourne avec le caract\xe8re de saut de ligne.")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-MATLAB"},"while ~feof(fid)\n  chaineLigne = fgetl(fid)\n  fpritnf('%s\\n', chaineLigne)\nend\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fscanf")," permet de faire la lecture de valeurs pr\xe9cise. Un peu comme un fprintf \xe0 l'envers.")),(0,n.kt)("h1",{id:"exercice"},"Exercice"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Trouvez le nombre de caract\xe8res sur la ligne ayant le plus grand nombre de caract\xe8res dans le fichier O_Canada.txt"),(0,n.kt)("li",{parentName:"ul"},"\xc9crivez un appel de fscanf qui lit le fichier donnees_formates3.txt et retourne toutes ses valeurs."),(0,n.kt)("li",{parentName:"ul"},"\xc9crivez un/des appel(s) de fscanf qui lit le fichier donnee_formatees4.txt et retourne toutes ses valeurs.")),(0,n.kt)("h1",{id:"\xe9criture-de-fichier-binaire"},"\xc9criture de fichier binaire"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fwrite")," permet d'\xe9crire dans un fichier binaire."),(0,n.kt)("li",{parentName:"ul"},"On doit sp\xe9cifier le type de l'information \xe0 \xe9crire pour que ",(0,n.kt)("inlineCode",{parentName:"li"},"fwrite")," d\xe9cide de la place \xe0 prendre pour l'\xe9criture."),(0,n.kt)("li",{parentName:"ul"},"Les types que nous utiliserons sont:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"int32")," pour les nombres entiers;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"double")," pour les nombres r\xe9els;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"char")," pour les chaines de caract\xe8res")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-MATLAB"},"% \xc9crire la valeur 34 (un entier) dans un fichier binaire.\nfwrite(fid, 34, 'int32')\n% \xc9crire une matrice de nombres r\xe9els.\nfwrite(fid, [1 2 3; 4 5 6], 'double')\n% \xc9crire une chaine.\nfwrite(fid, 'allo', 'char')\n")),(0,n.kt)("h1",{id:"lecture-de-fichier-binaire"},"Lecture de fichier binaire"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fread")," fait la lecture de fichier binaire."),(0,n.kt)("li",{parentName:"ul"},"L'utilisation demande un nombre d'\xe9l\xe9ments \xe0 aller lire.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-MATLAB"},"% Lire une valeur d'un entier.\nentier = fread(fid, 1, 'int32')\n\n% Lire une matrice 2x3 de r\xe9els.\nmat = fread(fid, [2 3], 'double')\n\n% Lire une chaine qui va jusqu'\xe0 la fin du fichier.\nchaineLu = fread(fid, 'char')\n% fread donne des vecteur colonne et la chaine doit\n% \xeatre un vecteur ligne\nchaine = chaineLu'\n")))}d.isMDXComponent=!0}}]);