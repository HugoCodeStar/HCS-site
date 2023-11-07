"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[9344],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=s,k=d["".concat(o,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:s,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5507:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var n=r(7462),s=(r(7294),r(3905));const a={title:"LINQ",sidebar_label:"8 - Expression de requ\xeates",sidebar_position:8},l=void 0,i={unversionedId:"b07/cours/cours8",id:"b07/cours/cours8",isDocsHomePage:!1,title:"LINQ",description:"Langague Integrated Queries (LINQ)",source:"@site/docs/b07/cours/cours8.md",sourceDirName:"b07/cours",slug:"/b07/cours/cours8",permalink:"/site/docs/b07/cours/cours8",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/b07/cours/cours8.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"LINQ",sidebar_label:"8 - Expression de requ\xeates",sidebar_position:8},sidebar:"B07Sidebar",previous:{title:"7 - Exception",permalink:"/site/docs/b07/cours/cours7"},next:{title:"9 - Entity Framework",permalink:"/site/docs/b07/cours/cours9"}},o=[{value:"Langague Integrated Queries (LINQ)",id:"langague-integrated-queries-linq",children:[]},{value:"Requ\xeates et <code>IEnumerable&lt;T&gt;</code>",id:"requ\xeates-et-ienumerablet",children:[]},{value:"Donn\xe9es initiales pour les exemples",id:"donn\xe9es-initiales-pour-les-exemples",children:[]},{value:"Bases des expressions de requ\xeates",id:"bases-des-expressions-de-requ\xeates",children:[]},{value:"Filtrage <code>where</code>",id:"filtrage-where",children:[]},{value:"Ordre des valeurs <code>orderby</code>",id:"ordre-des-valeurs-orderby",children:[]},{value:"Syntaxe d&#39;appel de m\xe9thodes",id:"syntaxe-dappel-de-m\xe9thodes",children:[]},{value:"M\xe9thode unique",id:"m\xe9thode-unique",children:[]},{value:"Jointure de collections",id:"jointure-de-collections",children:[]},{value:"Ajout de variables avec <code>let</code>",id:"ajout-de-variables-avec-let",children:[]}],u={toc:o},c="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"langague-integrated-queries-linq"},"Langague Integrated Queries (LINQ)"),(0,s.kt)("p",null,"Le ",(0,s.kt)("inlineCode",{parentName:"p"},"C#")," contient un type d'expression qui permet de faire des requ\xeates sur des donn\xe9es (similaire a ce qu'on fait avec le langage SQL). Ces expressions de requ\xeates (query expressions) permet de faciliter la recherche de donn\xe9e qui pourrait autrement \xeatre fait avec des ",(0,s.kt)("inlineCode",{parentName:"p"},"if")," et des boucles habituelles."),(0,s.kt)("h2",{id:"requ\xeates-et-ienumerablet"},"Requ\xeates et ",(0,s.kt)("inlineCode",{parentName:"h2"},"IEnumerable<T>")),(0,s.kt)("p",null,"Les expressions de requ\xeates fonctionnes sur n'importe quel structure qui impl\xe9mente ",(0,s.kt)("inlineCode",{parentName:"p"},"IEnumerable<T>"),". Cela inclus toutes les collections commes les listes que nous avons utilis\xe9s."),(0,s.kt)("h2",{id:"donn\xe9es-initiales-pour-les-exemples"},"Donn\xe9es initiales pour les exemples"),(0,s.kt)("p",null,"Nous aurons besoin d'avoir des donn\xe9es initiales pour faires des requ\xeates, nous utiliserons la repr\xe9sentation d'un camion qui a une position qui est conduit par un employ\xe9."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},'List<Truck> trucks = new List<Truck>();\ntrucks.Add(new Truck(){ID = 1, X = 0, Y = 0, NbParcels = 50, MaxNbParcels = 100, DriverID = 1});\ntrucks.Add(new Truck(){ID = 2, X = 4, Y = 2, NbParcels = 75, MaxNbParcels = 100, DriverID = 1});\ntrucks.Add(new Truck(){ID = 3, X = 9, Y = 3, NbParcels = 0, MaxNbParcels = 100, DriverID = 2});\n\nList<Driver> drivers = new List<Driver>();\ndrivers.Add(new Driver(){ID = 1, UserName = "Driver 1", Division = "Red"});\ndrivers.Add(new Driver(){ID = 2, UserName = "Driver 2", Division = "Blue"});\n\npublic class Truck\n{\n    public int ID { get; set; }\n    public double X { get; set; }\n    public double Y { get; set; }\n    public int MaxNbParcels { get; set; }\n    public int NbParcels { get; set; }\n    public int DriverID { get; set; }\n}\n\npublic class Driver\n{\n    public int ID { get; set; }\n    public string UserName { get; set; }\n    public string Division { get; set; }\n}\n')),(0,s.kt)("h2",{id:"bases-des-expressions-de-requ\xeates"},"Bases des expressions de requ\xeates"),(0,s.kt)("p",null,"Les expressions de requ\xeates sont form\xe9s de diff\xe9rentes clauses, comme dans le langage SQL. Elle d\xe9bute avec une clause ",(0,s.kt)("inlineCode",{parentName:"p"},"from")," et se termine avec une clause ",(0,s.kt)("inlineCode",{parentName:"p"},"select"),". Le ",(0,s.kt)("inlineCode",{parentName:"p"},"from")," d\xe9finie la source de donn\xe9es et le `select permet d'indiquer quelle partie de cette source sera s\xe9lectionn\xe9 comme r\xe9sultat."),(0,s.kt)("p",null,"Un example simple serait :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"IEnumerable<Truck> everything = from t in trucks select t;\n")),(0,s.kt)("p",null,"Le ",(0,s.kt)("inlineCode",{parentName:"p"},"from t in trucks")," permet de s\xe9lectionner la source et introduire une variable t qui repr\xe9sentera chacun des camions dans ma requ\xeates. Le ",(0,s.kt)("inlineCode",{parentName:"p"},"select t")," fait en sorte que tous les camions seront s\xe9lectionn\xe9."),(0,s.kt)("p",null,"Il est possible de faire une requ\xeate plus sp\xe9cifique sur seulement un des \xe9l\xe9ments de nos camions :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"var ids = from t in trucks select t.ID;\n")),(0,s.kt)("p",null,"Dans ce cas ",(0,s.kt)("inlineCode",{parentName:"p"},"ids")," est un ",(0,s.kt)("inlineCode",{parentName:"p"},"IEnumarable<int>")," car la s\xe9lection c'est fait sur une information qui est un entier."),(0,s.kt)("p",null,"Il est aussi possible d'avoir des expressions de toutes sortes."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},'// Donne une chaine explicative\nvar ratioText = from t in trucks select $"{t.NbParcels}/{t.MaxNbParcels}";\n\n// Retourne des double des ratios utilis\xe9s\nvar ratio = from t in trucks select (double)t.NbParcels/t.MaxNbParcels;\n\n// Permet m\xeame d\'avoir des tuples\nvar ratioStatus = from t in trucks select (t, $"{t.NbParcels}/{t.MaxNbParcels}");\n')),(0,s.kt)("h2",{id:"filtrage-where"},"Filtrage ",(0,s.kt)("inlineCode",{parentName:"h2"},"where")),(0,s.kt)("p",null,"La clause ",(0,s.kt)("inlineCode",{parentName:"p"},"where")," permet de filtrer les \xe9l\xe9ments de notre source ",(0,s.kt)("inlineCode",{parentName:"p"},"from"),". Elle inclue une expression bool\xe9enne (condition) qui sera tester sur chaque \xe9l\xe9ment. Si cette condition est vrai pour un \xe9l\xe9ment, il sera retenue dans notre r\xe9sultat."),(0,s.kt)("p",null,"Voici un exemple qui retient seulement les camions avec des colis :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"var truckAvecColis = from t in trucks where t.NbParcels > 0 select t;\n")),(0,s.kt)("p",null,"Il est possible d'avoir plusieurs clause ",(0,s.kt)("inlineCode",{parentName:"p"},"where")," entre le ",(0,s.kt)("inlineCode",{parentName:"p"},"from")," et le ",(0,s.kt)("inlineCode",{parentName:"p"},"select")," (ce qui est diff\xe9rent du SQL)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"var truckAvecColis = from t in trucks \n                where t.NbParcels > 0 \n                where t.DriverID == 2\n                select t;\n\n")),(0,s.kt)("h2",{id:"ordre-des-valeurs-orderby"},"Ordre des valeurs ",(0,s.kt)("inlineCode",{parentName:"h2"},"orderby")),(0,s.kt)("p",null,"La clause ",(0,s.kt)("inlineCode",{parentName:"p"},"orderby")," permet de manipuler l'ordres des \xe9l\xe9ments retourn\xe9."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"var orderCapacity = from t in trucks\n                    orderby t.MaxNbParcels\n                    select t;\n")),(0,s.kt)("p",null,"Il est aussi possible de changer le sens de l'ordre"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"var orderCapacity = from t in trucks\n                    orderby t.MaxNbParcels descending\n                    select t;\n")),(0,s.kt)("p",null,"Une autre option est de fournir plusieurs \xe9l\xe9ments pour l'ordre qui permetera de distinguer l'ordre dans le cas o\xf9 le premier premier crit\xe8re donne \xe9galit\xe9."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"var orderCapacity = from t in trucks\n                    orderby t.MaxNbParcels, t.NbParcels\n                    select t;\n")),(0,s.kt)("h2",{id:"syntaxe-dappel-de-m\xe9thodes"},"Syntaxe d'appel de m\xe9thodes"),(0,s.kt)("p",null,"Il est possible d'utiliser des m\xe9thodes pour faires la m\xeame s\xe9lection qu'avec les expressions de requ\xeates."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"var results = from t in trucks\n            where t.NbParcels > 0\n            orderby t.NbParcels\n            select (double)t.NbParcels/t.MaxNbParcels;\n\n// M\xeame requ\xeate avec des appels\nvar results = trucks\n                .Where(t => t.NbParcels > 0)\n                .OrderBy(t => t.NbParcels)\n                .Select(t => (double)t.NbParcels/t.MaxNbParcels);\n")),(0,s.kt)("p",null,"Nous utilisons ici des expressions lambda qui permet de fournir une m\xe9thode eph\xe9m\xe8re comme param\xe8tre."),(0,s.kt)("h2",{id:"m\xe9thode-unique"},"M\xe9thode unique"),(0,s.kt)("p",null,"Il existe quelque m\xe9thode qui nous permet de faires des op\xe9rations qui n'ont pas d'\xe9quivalent dans les expressions de requ\xeates."),(0,s.kt)("p",null,"La m\xe9thode ",(0,s.kt)("inlineCode",{parentName:"p"},"Count")," permet d'avoir le nombre d'\xe9l\xe9ments d'une collection et permet d'avoir une condition en from d'expression lambda."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"int total = trucks.Count();\nint nDriver1 = trucks.Count(t => t.DriverID == 1);\n")),(0,s.kt)("p",null,"Les m\xe9thodes ",(0,s.kt)("inlineCode",{parentName:"p"},"Any")," et ",(0,s.kt)("inlineCode",{parentName:"p"},"All")," permet de d\xe9terminer si au moins une (pour ",(0,s.kt)("inlineCode",{parentName:"p"},"Any"),") ou si tous les \xe9l\xe9ments (",(0,s.kt)("inlineCode",{parentName:"p"},"All"),") r\xe9pondes \xe0 un certain crit\xe8re."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"bool atLeastOneParcel = trucks.Any(t => t.NbParcels > 0);\nbool noParcels = trucks.All(t => t.NbParcels == 0);\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Skip")," et ",(0,s.kt)("inlineCode",{parentName:"p"},"Take")," permet de sauter un certain nombre d'item ou inversement de juste prendre ce nombre d'item."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"var allButFirst = trucks.OrderBy(t => t.NbParcels).Skip(1);\nvar firstThree = trucks.OrderBy(t => t.NbParcels).Take(3);\n")),(0,s.kt)("p",null,"Les m\xe9thodes ",(0,s.kt)("inlineCode",{parentName:"p"},"Average"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Sum"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Min")," et `Max donne des statistique sur les \xe9l\xe9ments."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"int longestName = drivers.Max(d => d.UserName.Length);\nint shortestName = drivers.Min(d => d.UserName.Length);\ndouble averageNameLength = drivers.Average(d => d.UserName.Length);\nint totalParcels    = trucks.Sum(t => t.NbParcels);\n")),(0,s.kt)("p",null,"Cette liste est non-exaustive, il existe d'autres m\xe9thodes int\xe9ressate \xe0 utliser sur les collections."),(0,s.kt)("h2",{id:"jointure-de-collections"},"Jointure de collections"),(0,s.kt)("p",null,"Il est possible de faire la jointure de deux collection pour avoir les \xe9l\xe9ments en r\xe9f\xe9rence d'une collection a une autre."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},"var truckDivision = from t in trucks\n    join d in drivers on t.DriverID equals d.ID\n    select (t, d.Division);\n")),(0,s.kt)("p",null,"Le ",(0,s.kt)("inlineCode",{parentName:"p"},"join")," permet d'ins\xe9r\xe9 une autre collection qui sera ratach\xe9. Cette jointure est l'\xe9quivalent d'un ",(0,s.kt)("inlineCode",{parentName:"p"},"inner join")," en SQL. Seulement les paires avec correspondances seront retenues."),(0,s.kt)("h2",{id:"ajout-de-variables-avec-let"},"Ajout de variables avec ",(0,s.kt)("inlineCode",{parentName:"h2"},"let")),(0,s.kt)("p",null,"La clause ",(0,s.kt)("inlineCode",{parentName:"p"},"let")," permet d'avoir des variables transitoire durant l'expression qui pourront \xeatre r\xe9utilis\xe9s dans la requ\xeate."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c#"},'var statuses = from t in trucks\n            let percentFull = (double)t.NbParcels / t.MaxNbParcels * 100.0\n            select $"{t.ID} is full at {percentFull}%";\n')))}d.isMDXComponent=!0}}]);