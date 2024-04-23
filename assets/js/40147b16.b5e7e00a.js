"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[4550],{5680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>g});var t=r(6540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=t.createContext({}),u=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=i,g=c["".concat(o,".").concat(m)]||c[m]||p[m]||a;return r?t.createElement(g,s(s({ref:n},d),{},{components:r})):t.createElement(g,s({ref:n},d))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[c]="string"==typeof e?e:i,s[1]=l;for(var u=2;u<a;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6154:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var t=r(8168),i=(r(6540),r(5680));const a={title:"Proc\xe9dures ETL - Fichiers de donn\xe9es externe avec pandas - Principe des SGBD",sidebar_label:"5 - ETL, source externe et SGBD",sidebar_position:5},s=void 0,l={unversionedId:"inf5111/Cours/cours5",id:"inf5111/Cours/cours5",isDocsHomePage:!1,title:"Proc\xe9dures ETL - Fichiers de donn\xe9es externe avec pandas - Principe des SGBD",description:"ETL - Extract, Transform, Load",source:"@site/docs/inf5111/Cours/cours5.md",sourceDirName:"inf5111/Cours",slug:"/inf5111/Cours/cours5",permalink:"/site/docs/inf5111/Cours/cours5",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf5111/Cours/cours5.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Proc\xe9dures ETL - Fichiers de donn\xe9es externe avec pandas - Principe des SGBD",sidebar_label:"5 - ETL, source externe et SGBD",sidebar_position:5},sidebar:"INF5111Sidebar",previous:{title:"4 - Jointures & pandas",permalink:"/site/docs/inf5111/Cours/cours4"},next:{title:"6 - If, while et for",permalink:"/site/docs/inf5111/Cours/cours6"}},o=[{value:"ETL - Extract, Transform, Load",id:"etl---extract-transform-load",children:[]},{value:"Sources de donn\xe9es externes pour pandas",id:"sources-de-donn\xe9es-externes-pour-pandas",children:[{value:"Format des fichiers pour des donn\xe9es externes",id:"format-des-fichiers-pour-des-donn\xe9es-externes",children:[]},{value:"Fichier CSV - Comma-separated values",id:"fichier-csv---comma-separated-values",children:[]},{value:"JSON - JavaScript Object Notation",id:"json---javascript-object-notation",children:[]},{value:"Fichier Excel",id:"fichier-excel",children:[]},{value:"Fichier SQLite",id:"fichier-sqlite",children:[]},{value:"Requ\xeates web vers des API REST",id:"requ\xeates-web-vers-des-api-rest",children:[]},{value:"Extraction de donn\xe9es avec pandas",id:"extraction-de-donn\xe9es-avec-pandas",children:[]}]},{value:"Principes des SGBD",id:"principes-des-sgbd",children:[{value:"Int\xe9grit\xe9 s\xe9mantique",id:"int\xe9grit\xe9-s\xe9mantique",children:[]},{value:"Contr\xf4le de concurrence",id:"contr\xf4le-de-concurrence",children:[]},{value:"Fiabilit\xe9",id:"fiabilit\xe9",children:[]},{value:"S\xe9curit\xe9",id:"s\xe9curit\xe9",children:[]},{value:"Gestion de transactions",id:"gestion-de-transactions",children:[]}]}],u={toc:o},d="wrapper";function c(e){let{components:n,...r}=e;return(0,i.yg)(d,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"etl---extract-transform-load"},"ETL - Extract, Transform, Load"),(0,i.yg)("p",null,"Dans le monde de la science des donn\xe9es, la majorit\xe9 des travaux demande d'utiliser le processus ETL. Les \xe9tapes sont les suivantes :"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Extract - Extraction (lecture des donn\xe9es de la source originale)"),(0,i.yg)("li",{parentName:"ul"},"Transform - Transformer (modifier) les donn\xe9es pour filtrer/ajouter des informations ou en assurer la qualit\xe9 "),(0,i.yg)("li",{parentName:"ul"},"Load - Charger (sauvegarder) les donn\xe9es dans une destination (possiblement la source originale)")),(0,i.yg)("h2",{id:"sources-de-donn\xe9es-externes-pour-pandas"},"Sources de donn\xe9es externes pour pandas"),(0,i.yg)("p",null,"Nous avons \xe9tudi\xe9 comment pandas travaille avec des DataFrame comme structure de donn\xe9es. Pour faciliter la cr\xe9ation de ce genre de base de donn\xe9es, il est possible d'extraire les donn\xe9es de sources externes \xe0 pandas."),(0,i.yg)("h3",{id:"format-des-fichiers-pour-des-donn\xe9es-externes"},"Format des fichiers pour des donn\xe9es externes"),(0,i.yg)("p",null,"Pandas est capable de lire d'une base de donn\xe9e SQL (nous verrons plus loin comment). Pandas est aussi capable d'extraire des DataFrame de plusieurs autres types de fichiers. Nous regarderons premi\xe8rement le format de chacun de ses fichiers."),(0,i.yg)("h3",{id:"fichier-csv---comma-separated-values"},"Fichier CSV - Comma-separated values"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Le CSV est un fichier texte qui d\xe9limite ses informations comme un tableur."),(0,i.yg)("li",{parentName:"ul"},"Chaque ligne de texte est une entr\xe9e."),(0,i.yg)("li",{parentName:"ul"},'Chaque ligne contient des "colonne" qui sont s\xe9par\xe9es par des virgules.')),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"Name,Email,Phone Number,Address\nBob Smith,bob@example.com,123-456-7890,123 Fake Street\nMike Jones,mike@example.com,098-765-4321,321 Fake Avenue\n")),(0,i.yg)("h3",{id:"json---javascript-object-notation"},"JSON - JavaScript Object Notation"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Repr\xe9sente un dictionnaire sous forme de texte."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.json.org/"},"https://www.json.org/")),(0,i.yg)("li",{parentName:"ul"},"Un document qui permet de formater des collections en fichier texte pour transmission facile."),(0,i.yg)("li",{parentName:"ul"},"N'a pas de lien fort avec JavaScript (malgr\xe9 son nom)."),(0,i.yg)("li",{parentName:"ul"},"Permets de facilement imbriquer des informations.")),(0,i.yg)("h4",{id:"exemple-json"},"Exemple JSON"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "firstName": "John",\n  "lastName": "Smith",\n  "isAlive": true,\n  "age": 27,\n  "address": {\n    "streetAddress": "21 2nd Street",\n    "city": "New York",\n    "state": "NY",\n    "postalCode": "10021-3100"\n  },\n  "phoneNumbers": ["212 555-1234" ,"646 555-4567"],\n  "children": [],\n  "spouse": null\n}\n')),(0,i.yg)("h3",{id:"fichier-excel"},"Fichier Excel"),(0,i.yg)("p",null,"Excel est un tableur qui permet d'avoir des informations dans des feuilles de calculs qui sont ensuite s\xe9par\xe9es par des cellules identifi\xe9es par une ligne et une colonne."),(0,i.yg)("h3",{id:"fichier-sqlite"},"Fichier SQLite"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://sqlite.org/index.html"},"SQLite")," est une impl\xe9mentation d'une base de donn\xe9es SQL \xe0 l'int\xe9rieur d'un fichier."),(0,i.yg)("li",{parentName:"ul"},"Cette impl\xe9mentation est une version extr\xeamement simplifi\xe9e de ce que nous donne une SGBD mais permet de facilement transmettre de l'information sous forme de tables.")),(0,i.yg)("h4",{id:"types-des-colonnes"},"Types des colonnes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"NULL - Valeur nulle."),(0,i.yg)("li",{parentName:"ul"},"INTEGER - Entier sign\xe9."),(0,i.yg)("li",{parentName:"ul"},"REAL - Valeur flottante."),(0,i.yg)("li",{parentName:"ul"},"TEXT - Texte."),(0,i.yg)("li",{parentName:"ul"},"BLOB - Donn\xe9e ind\xe9finie.")),(0,i.yg)("h3",{id:"requ\xeates-web-vers-des-api-rest"},"Requ\xeates web vers des API REST"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Une m\xe9thode courante d'acquisition de donn\xe9es est l'utilisation d'API (Application Programming Interface) de type REST."),(0,i.yg)("li",{parentName:"ul"},"Cette m\xe9thode permet de faire une requ\xeate \xe0 un site web avec des param\xe8tres donn\xe9s et de recevoir une r\xe9ponse en JSON.")),(0,i.yg)("h4",{id:"librairie-requests"},"Librairie requests"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Pour faire des requ\xeates WEB avec python, la librairie ",(0,i.yg)("a",{parentName:"li",href:"https://docs.python-requests.org/en/master/"},"request")," est utilis\xe9e.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"# import requests module\nimport requests\n  \n# Making a get request\nresponse = requests.get('https://api.github.com')\n  \n# print response\nprint(response)\n  \n# print json content\nprint(response.json())\n")),(0,i.yg)("h4",{id:"les-requ\xeates-web-et-les-r\xe8gles-du-rest"},"Les requ\xeates web et les r\xe8gles du REST"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Le principe des requ\xeates REST est d'avoir les param\xe8tres dans l'URL qui est utilis\xe9e pour faire la requ\xeate."),(0,i.yg)("li",{parentName:"ul"},"Le chemin de l'application permet de recevoir seulement l'information voulue.")),(0,i.yg)("h4",{id:"exemple-avec-jsonplaceholder"},"Exemple avec JSONPlaceholder"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://jsonplaceholder.typicode.com/"},"JSONPlaceholder")," est un site simple avec un API REST qui peut \xeatre utilis\xe9 pour tester nos requ\xeates.")),(0,i.yg)("h4",{id:"routes"},"Routes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Les diff\xe9rents chemins sont nomm\xe9s routes et ceux-ci font partie d'une arborescence."),(0,i.yg)("li",{parentName:"ul"},"Par exemple, JSONPlaceholder \xe0 les routes suivantes :",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"/posts")," vers tous les articles sauvegard\xe9s"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"/posts/1")," le nombre 1 permet de s\xe9lectionner un article en particulier"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"/posts/1/comments")," la continuation de la route avec ",(0,i.yg)("inlineCode",{parentName:"li"},"comments")," permet d'aller chercher les commentaires de l'article sp\xe9cifi\xe9.")))),(0,i.yg)("h3",{id:"extraction-de-donn\xe9es-avec-pandas"},"Extraction de donn\xe9es avec pandas"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://pandas.pydata.org/docs/user_guide/io.html#io"},"R\xe9f\xe9rence")),(0,i.yg)("p",null,"Les fonctions suivantes sont disponibles pour lecture/\xe9criture de fichiers externe :"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"CSV - ",(0,i.yg)("inlineCode",{parentName:"li"},"read_csv")," / ",(0,i.yg)("inlineCode",{parentName:"li"},"to_csv")),(0,i.yg)("li",{parentName:"ul"},"JSON - ",(0,i.yg)("inlineCode",{parentName:"li"},"read_json")," / ",(0,i.yg)("inlineCode",{parentName:"li"},"to_json")),(0,i.yg)("li",{parentName:"ul"},"Excel - ",(0,i.yg)("inlineCode",{parentName:"li"},"read_excel")," / ",(0,i.yg)("inlineCode",{parentName:"li"},"to_excel")),(0,i.yg)("li",{parentName:"ul"},"SQL - ",(0,i.yg)("inlineCode",{parentName:"li"},"read_sql")," / ",(0,i.yg)("inlineCode",{parentName:"li"},"to_sql"))),(0,i.yg)("p",null,"Chaque fonction \xe0 ses propres options pour configurer les situations particuli\xe8res entourant le type de fichiers. L'utilisation habituelle ressemble \xe0 :"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"# Extraction du DataFrame\ndf = read_csv('fichier.csv')\n\n# Transformation des donn\xe9es ou analyse\nresults = df.describe()\n\n# Chargement des donn\xe9es transform\xe9\nresults.to_csv('new_fichier.csv')\n")),(0,i.yg)("h4",{id:"connexion-\xe0-des-bases-de-donn\xe9es-sql--sqlite"},"Connexion \xe0 des bases de donn\xe9es SQL / SQLite"),(0,i.yg)("p",null,"Les connexions de pandas \xe0 des bases de donn\xe9es se font par l'interm\xe9diaire de ",(0,i.yg)("inlineCode",{parentName:"p"},"SQLAlchemy"),", une librairie de Python pour la connexion \xe0 des BD SQL. Il faut donc \xe9tablir un engin de connexion qui sera utilis\xe9 par la fonction de lecture/\xe9criture."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"from sqlalchemy import create_engine, text\n\n# SQLite peut exister dans la m\xe9moire avec :memory: ou on peut lire un fichier existant\nengine = create_engine(\"sqlite:///SQLiteBD.db\")\n\ndf = pd.read_sql_table('TableName', engine)\n\n# Il est aussi possible de recevoir le r\xe9sultat d'une requ\xeate sp\xe9cifique\ndf2 = pd.read_sql(text('select * from TableName where param > 0'), engine)\n")),(0,i.yg)("p",null,"L'engin de connexion doit avoir l'URL de la base de donn\xe9es. Vous pouvez avoir la liste des ",(0,i.yg)("a",{parentName:"p",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#database-urls"},"connexions disponible ici"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"# Exemple de connection avec une base de donn\xe9e postgres\nengine1 = create_engine('postgresql://username:password@server/databasename')\nconn = engine1.connect()\ndf = pd.read_sql_table('TableName', conn)\n")),(0,i.yg)("h2",{id:"principes-des-sgbd"},"Principes des SGBD"),(0,i.yg)("p",null,"Le SGBD apporte plusieurs \xe9l\xe9ments qui n'\xe9taient pas possibles dans la sauvegarde de donn\xe9es."),(0,i.yg)("h3",{id:"int\xe9grit\xe9-s\xe9mantique"},"Int\xe9grit\xe9 s\xe9mantique"),(0,i.yg)("p",null,"Une contrainte d'int\xe9grit\xe9 s\xe9mantique (semantic integrity constraint)\nou simplement contrainte d'int\xe9grit\xe9 est une r\xe8gle qui doit toujours \xeatre respect\xe9e par les donn\xe9es de la BD. Par exemple, \"Le solde d'un compte ne peut \xeatre n\xe9gatif\""),(0,i.yg)("h3",{id:"contr\xf4le-de-concurrence"},"Contr\xf4le de concurrence"),(0,i.yg)("p",null,"Emp\xeacher les effets ind\xe9sirables de transactions concurrentes. Par exemple, deux connexions qui retirent d'un m\xeame compte pourrait avoir un impact sur le solde si trait\xe9 sans consid\xe9ration sp\xe9ciale."),(0,i.yg)("h3",{id:"fiabilit\xe9"},"Fiabilit\xe9"),(0,i.yg)("p",null,"Assurer que les donn\xe9es ne deviennent pas corrompues suite \xe0 une panne ou \xeatre capable de revenir d'un \xe9tat incoh\xe9rent."),(0,i.yg)("h3",{id:"s\xe9curit\xe9"},"S\xe9curit\xe9"),(0,i.yg)("p",null,"Utilisateurs/r\xf4les pour d\xe9limiter les droits disponibles. Chiffrement (encryption) des donn\xe9es."),(0,i.yg)("h3",{id:"gestion-de-transactions"},"Gestion de transactions"),(0,i.yg)("p",null,"Pr\xe9senter les op\xe9rations comme \xe9tant \xe0 l'int\xe9rieur d'une transaction qui permet d'assurer les propri\xe9t\xe9s ACID."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Atomicit\xe9 - Que la transaction est accomplie au complet ou pas du tout."),(0,i.yg)("li",{parentName:"ul"},"Coh\xe9rence - Que la transaction se termine avec la base de donn\xe9es dans un \xe9tat valide."),(0,i.yg)("li",{parentName:"ul"},"Isolation - Que la transaction soit isol\xe9e entre d'autres transactions qui travaillent sur les m\xeames donn\xe9es pour faire le contr\xf4le de concurrence."),(0,i.yg)("li",{parentName:"ul"},"Durabilit\xe9 - Que la transaction soit assur\xe9e d'\xeatre gard\xe9e si elle a \xe9t\xe9 compl\xe9t\xe9e, m\xeame en cas de panne subs\xe9quente.")))}c.isMDXComponent=!0}}]);