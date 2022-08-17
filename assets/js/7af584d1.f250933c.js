"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[9101],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return p}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),p=r,v=m["".concat(u,".").concat(p)]||m[p]||d[p]||o;return t?a.createElement(v,i(i({ref:n},s),{},{components:t})):a.createElement(v,i({ref:n},s))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9978:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={title:"ADO.net",sidebar_label:"10 - ADO.net",sidebar_position:10},u=void 0,c={unversionedId:"b07/cours/cours10",id:"b07/cours/cours10",isDocsHomePage:!1,title:"ADO.net",description:"ADO.NET",source:"@site/docs/b07/cours/cours10.md",sourceDirName:"b07/cours",slug:"/b07/cours/cours10",permalink:"/site/docs/b07/cours/cours10",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/b07/cours/cours10.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"ADO.net",sidebar_label:"10 - ADO.net",sidebar_position:10},sidebar:"B07Sidebar",previous:{title:"9 - Entity Framework",permalink:"/site/docs/b07/cours/cours9"},next:{title:"11 - Connexion DBMS",permalink:"/site/docs/b07/cours/cours11"}},s=[{value:"ADO.NET",id:"adonet",children:[]},{value:"Ajout de la librairie",id:"ajout-de-la-librairie",children:[]},{value:"La connexion avec un objet <code>SQliteConnection</code>",id:"la-connexion-avec-un-objet-sqliteconnection",children:[{value:"La connexion et la chaine de connexion",id:"la-connexion-et-la-chaine-de-connexion",children:[]}]},{value:"Les commande avec les objet de commande",id:"les-commande-avec-les-objet-de-commande",children:[{value:"Ex\xe9cution de la commande",id:"ex\xe9cution-de-la-commande",children:[]},{value:"Example de cr\xe9ation de table avec <code>ExecuteNonQuery</code>",id:"example-de-cr\xe9ation-de-table-avec-executenonquery",children:[]}]},{value:"Configuration d&#39;une requ\xeate avec des param\xe8tres (Prepared statement)",id:"configuration-dune-requ\xeate-avec-des-param\xe8tres-prepared-statement",children:[{value:"Ajout d&#39;\xe9l\xe9ments param\xe9tr\xe9s dans une requ\xeate",id:"ajout-d\xe9l\xe9ments-param\xe9tr\xe9s-dans-une-requ\xeate",children:[]}]},{value:"Lecture des retours avec un <code>DataReader</code>",id:"lecture-des-retours-avec-un-datareader",children:[{value:"Meta-donn\xe9es des colonnes avec le Reader",id:"meta-donn\xe9es-des-colonnes-avec-le-reader",children:[]}]}],d={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"adonet"},"ADO.NET"),(0,o.kt)("p",null,"ADO.NET est une librairie qui permet d'effectuer une connection \xe0 une base de donn\xe9es et d'y envoyer des commande SQL et d'interpr\xe9t\xe9 ses r\xe9ponses. La librairies ADO.NET est la base du Entity Framework que nous avons regard\xe9 pr\xe9c\xe9demment."),(0,o.kt)("h2",{id:"ajout-de-la-librairie"},"Ajout de la librairie"),(0,o.kt)("p",null,"Comme pour le entity framework, on doit ajouter une librairie avec NuGet pour utiliser les fonctionnalit\xe9 de ADO.net"),(0,o.kt)("p",null,"Pour ajouter la librairie, vous pouvez :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dans une application console nouvellement cr\xe9\xe9,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tools > NuGet Package Manager > Package Manager Console")),(0,o.kt)("li",{parentName:"ul"},"Ex\xe9cut\xe9 la commande suivante : ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c#"},"Install-Package Microsoft.Data.Sqlite\n")),(0,o.kt)("p",null,"Nous utiliserons la librairie pour SQLite aujourd'hui et nous verrons plus tard comment se connecter \xe0 d'autre SGBD."),(0,o.kt)("h2",{id:"la-connexion-avec-un-objet-sqliteconnection"},"La connexion avec un objet ",(0,o.kt)("inlineCode",{parentName:"h2"},"SQliteConnection")),(0,o.kt)("p",null,"ADO.NET travaille avec une connection que nous \xe9tablissons d\xe8s le d\xe9but de notre programme. Cet objet sera notre lien vers la base de donn\xe9es. C'est cette objet de connection que nous pourrons modifier par la suite pour configur\xe9 la connection vers d'autre base de donn\xe9es. Pour aujourd'hui, nous utiliserons une connection sur une base de donn\xe9e SQLite en m\xe9moire (qui sera donc d\xe9truite apr\xe8s l'ex\xe9cution de nos application) pour explorer le fonctionnement des commandes et de leurs r\xe9ponses."),(0,o.kt)("h3",{id:"la-connexion-et-la-chaine-de-connexion"},"La connexion et la chaine de connexion"),(0,o.kt)("p",null,"L'objet ",(0,o.kt)("inlineCode",{parentName:"p"},"SqliteConnection")," a besoin d'une chaine qui indique les propri\xe9t\xe9s de la connection. Cette chaine indique par exemple le nom du fichier pour une base de donn\xe9e SQLite ou les param\xe8tres d'authetification sur une SGBD."),(0,o.kt)("p",null,"Voici un exemple d'un programme qui utilise une connexion vers un base de donn\xe9e SQLite en m\xe9moire:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c#"},'// Utilisation de la librairie install\xe9\nusing Microsoft.Data.Sqlite;\n\n// La chaine de connextion qui indique que la DB est en m\xe9moire avec le :memory:\nstring cs = "Data Source=:memory:";\n\n// La cr\xe9ation de l\'objet de connexion avec la chaine de connexion\nusing var con = new SqliteConnection(cs);\n// Ouverture de la base de donn\xe9e pour des commandes.\ncon.Open();\n\n// Ex\xe9cution d\'une commande (nous verrons plus loins les modalit\xe9s)\nstring stm = "SELECT SQLITE_VERSION()";\nusing var cmd = new SqliteCommand(stm, con);\nstring version = cmd.ExecuteScalar().ToString();\n\nConsole.WriteLine($"SQLite version: {version}");\n')),(0,o.kt)("p",null,"Avec l'objet de connexion construit. Il nous faut utiliser la m\xe9thode ",(0,o.kt)("inlineCode",{parentName:"p"},"Open()")," pour \xe9tablir la connexion avec la base de donn\xe9e pour ensuite lui envoy\xe9 des commandes."),(0,o.kt)("p",null,"Il est aussi possible de cr\xe9\xe9 le fichier avec un nom de fichier comme Data Source."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c#"},'string cs = @"Data Source=C:\\Users\\dullin\\Documents\\test.db";\n')),(0,o.kt)("h2",{id:"les-commande-avec-les-objet-de-commande"},"Les commande avec les objet de commande"),(0,o.kt)("p",null,"Les commandes sont des objets que nous allons construire et configur\xe9 avec des objets. Pour SQLite, les objets seront des objets ",(0,o.kt)("inlineCode",{parentName:"p"},"SqliteCommand"),"."),(0,o.kt)("p",null,"Les commandes ont besoin d'avoir deux informations primodriales : la requ\xeate et la connexion qui doit \xeatre utilis\xe9."),(0,o.kt)("p",null,"Ces deux \xe9l\xe9ments peuvents \xeatre \xe9tablie soit \xe0 la construction de l'objet ou en modifiant ses propri\xe9t\xe9s."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c#"},"string stm = \"SELECT SQLITE_VERSION()\";\n\n// En assumant un objet con d\xe9j\xe0 construit comme dans l'exmple plus haut\n// Configuration \xe0 la construction de l'objet\nusing var cmd = new SqliteCommand(stm, con);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c#"},'string stm = "SELECT SQLITE_VERSION()";\n\n// Cr\xe9ation d\'une commande vide\nusing var cmd = new SqliteCommand();\n\n// Configuration de la requ\xeate et de la connexion avec le propri\xe9t\xe9s\ncmd.CommandText = stm;\ncmd.Connection = con;\n')),(0,o.kt)("h3",{id:"ex\xe9cution-de-la-commande"},"Ex\xe9cution de la commande"),(0,o.kt)("p",null,"L'ex\xe9cution de la commande se fait avec un m\xe9thode de notre objet de commande. La m\xe9thode va d\xe9pendre des r\xe9sultats possible de la commande."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"M\xe9thode"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Retour"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ExecuteNonQuery")),(0,o.kt)("td",{parentName:"tr",align:null},"Ex\xe9cution sans retour"),(0,o.kt)("td",{parentName:"tr",align:null},"Aucun")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ExecuteScalar")),(0,o.kt)("td",{parentName:"tr",align:null},"Ex\xe9cution avec une seule valeur"),(0,o.kt)("td",{parentName:"tr",align:null},"La valeur retourn\xe9")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ExecuteReader")),(0,o.kt)("td",{parentName:"tr",align:null},"Ex\xe9cution avec plusieurs retours (voir plus bas)"),(0,o.kt)("td",{parentName:"tr",align:null},"Objet ",(0,o.kt)("inlineCode",{parentName:"td"},"DataReader")," pour la lecture des retours")))),(0,o.kt)("h3",{id:"example-de-cr\xe9ation-de-table-avec-executenonquery"},"Example de cr\xe9ation de table avec ",(0,o.kt)("inlineCode",{parentName:"h3"},"ExecuteNonQuery")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c#"},'using Microsoft.Data.Sqlite;\n\nstring cs = @"Data Source=C:\\Users\\dullin\\Documents\\test.db";\n\nstring stm = "SELECT SQLITE_VERSION()";\n\nusing var con = new SqliteConnection(cs);\ncon.Open();\n\nusing var cmd = new SqliteCommand();\ncmd.Connection = con;\n\ncmd.CommandText = "DROP TABLE IF EXISTS cars";\ncmd.ExecuteNonQuery();\n\ncmd.CommandText = @"CREATE TABLE cars(id INTEGER PRIMARY KEY,\n            name TEXT, price INT)";\ncmd.ExecuteNonQuery();\n\ncmd.CommandText = "INSERT INTO cars(name, price) VALUES(\'Audi\',52642)";\ncmd.ExecuteNonQuery();\n\ncmd.CommandText = "INSERT INTO cars(name, price) VALUES(\'Mercedes\',57127)";\ncmd.ExecuteNonQuery();\n\ncmd.CommandText = "INSERT INTO cars(name, price) VALUES(\'Skoda\',9000)";\ncmd.ExecuteNonQuery();\n\ncmd.CommandText = "INSERT INTO cars(name, price) VALUES(\'Volvo\',29000)";\ncmd.ExecuteNonQuery();\n\ncmd.CommandText = "INSERT INTO cars(name, price) VALUES(\'Bentley\',350000)";\ncmd.ExecuteNonQuery();\n\ncmd.CommandText = "INSERT INTO cars(name, price) VALUES(\'Citroen\',21000)";\ncmd.ExecuteNonQuery();\n\ncmd.CommandText = "INSERT INTO cars(name, price) VALUES(\'Hummer\',41400)";\ncmd.ExecuteNonQuery();\n\ncmd.CommandText = "INSERT INTO cars(name, price) VALUES(\'Volkswagen\',21600)";\ncmd.ExecuteNonQuery();\n\nConsole.WriteLine("Table cars created");\n')),(0,o.kt)("h2",{id:"configuration-dune-requ\xeate-avec-des-param\xe8tres-prepared-statement"},"Configuration d'une requ\xeate avec des param\xe8tres (Prepared statement)"),(0,o.kt)("p",null,"Il arrive souvent que notre programme va avoir des param\xe8tres variables dans les commandes (par example l'ajout de plusieurs valeurs qui serait dans une m\xe9thodes avec des param\xe8tres d'entr\xe9s). Pour faire l'ajout d'\xe9l\xe9ment de mani\xe8re s\xe9curitaire dans des requ\xeates, nous avons les param\xe8tres pr\xe9par\xe9s."),(0,o.kt)("h3",{id:"ajout-d\xe9l\xe9ments-param\xe9tr\xe9s-dans-une-requ\xeate"},"Ajout d'\xe9l\xe9ments param\xe9tr\xe9s dans une requ\xeate"),(0,o.kt)("p",null,"Durant la contruction d'une requ\xeate, il est possible d'ajouter des \xe9l\xe9ments variables en utilisant un symbole sp\xe9ciale devant la variable. Pour SQLite, le symbole est ",(0,o.kt)("inlineCode",{parentName:"p"},"@"),"."),(0,o.kt)("p",null,"Il est ensuite possible d'ajouter les \xe9l\xe9ments avec la m\xe9thode ",(0,o.kt)("inlineCode",{parentName:"p"},"Parameters.AddWithValue")," qui indique le param\xe8tre et la valeur."),(0,o.kt)("p",null,"Quand tous les param\xe8tres sont \xe9tablie, nous pouvons pr\xe9par\xe9 la commande avec la m\xe9thode ",(0,o.kt)("inlineCode",{parentName:"p"},"Prepare")," avant l'ex\xe9cution de la commande."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c#"},'using var cmd = new SqliteCommand();\ncmd.Connection = con;\n\n// Les param\xe8tres @name et @price sont \xe9tablie comme variable\ncmd.CommandText = "INSERT INTO cars(name, price) VALUES(@name, @price)";\n\n// On ajout les param\xe8tres avec des valeurs pr\xe9cise\ncmd.Parameters.AddWithValue("@name", "BMW");\ncmd.Parameters.AddWithValue("@price", 36600);\n\n// On pr\xe9pare et ex\xe9cute la commande\ncmd.Prepare();\ncmd.ExecuteNonQuery();\n')),(0,o.kt)("h2",{id:"lecture-des-retours-avec-un-datareader"},"Lecture des retours avec un ",(0,o.kt)("inlineCode",{parentName:"h2"},"DataReader")),(0,o.kt)("p",null,"Quand nous avons besoin de lire plusieurs retour, nous utiliserons la m\xe9thode ",(0,o.kt)("inlineCode",{parentName:"p"},"ExecuteReader")," qui nous retourne une ",(0,o.kt)("inlineCode",{parentName:"p"},"SqliteDataReader")," qui pourra regarder les diff\xe9rentes valeurs de notre r\xe9ponse."),(0,o.kt)("p",null,"Le reader utilise un curseur pour s\xe9lectionner un r\xe9sultat qui peux \xeatre d\xe9plac\xe9."),(0,o.kt)("p",null,"Le curseur peux \xeatre avanc\xe9 avec la m\xe9thode ",(0,o.kt)("inlineCode",{parentName:"p"},"Read")," qui avance sur l'autre ligne des r\xe9sultat."),(0,o.kt)("p",null,"Avec une ligne s\xe9lectionn\xe9, nous pouvons all\xe9 chercher les informations des colonnes avec des m\xe9thodes ",(0,o.kt)("inlineCode",{parentName:"p"},"Get*(colonne)")," ou ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," est le type de l'information et ",(0,o.kt)("inlineCode",{parentName:"p"},"colonne")," est le num\xe9ro de colonne de l'information recherch\xe9."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c#"},'// Commande avec plusieurs ligne de retours\ncmd.CommandText = "SELECT * FROM cars LIMIT 5";\nusing SqliteDataReader rdr = cmd.ExecuteReader();\n\n// La m\xe9thode Read renvoie vrai tant qu\'il reste des lignes dans les r\xe9sultats\nwhile (rdr.Read())\n{\n    // On utilise GetInt32, GetString et GetInt32 pour aller chercher les r\xe9sultat des colonne 0, 1 et 2 respectivement.\n    Console.WriteLine($"{rdr.GetInt32(0)} {rdr.GetString(1)} {rdr.GetInt32(2)}");\n}\n')),(0,o.kt)("h3",{id:"meta-donn\xe9es-des-colonnes-avec-le-reader"},"Meta-donn\xe9es des colonnes avec le Reader"),(0,o.kt)("p",null,"Il est aussi possible d'aller chercher des m\xe9ta-donn\xe9es comme le nom des colonnes avec un Reader avec les m\xe9thode ",(0,o.kt)("inlineCode",{parentName:"p"},"GetName"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c#"},'cmd.CommandText = "SELECT * FROM cars LIMIT 5";\nusing SqliteDataReader rdr = cmd.ExecuteReader();\n\nConsole.WriteLine($"{rdr.GetName(0)} {rdr.GetName(1)} {rdr.GetName(2)}");\n')))}m.isMDXComponent=!0}}]);