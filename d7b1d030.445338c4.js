(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),r=(n(0),n(127)),s={title:"Programmation orient\xe9e objet - m\xe9thodes",sidebar_label:"10 - POO - M\xe9thodes"},l={unversionedId:"inf135/cours/cours10",id:"inf135/cours/cours10",isDocsHomePage:!1,title:"Programmation orient\xe9e objet - m\xe9thodes",description:"Principe de programmation orient\xe9e objet",source:"@site/docs/inf135/cours/cours10.md",slug:"/inf135/cours/cours10",permalink:"/site/docs/inf135/cours/cours10",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf135/cours/cours10.md",version:"current",sidebar_label:"10 - POO - M\xe9thodes",sidebar:"INF135Sidebar",previous:{title:"Programmation orient\xe9e objet",permalink:"/site/docs/inf135/cours/cours9"}},o=[{value:"Principe de programmation orient\xe9e objet",id:"principe-de-programmation-orient\xe9e-objet",children:[]},{value:"M\xe9thodes",id:"m\xe9thodes",children:[]},{value:"handle",id:"handle",children:[]},{value:"D\xe9finitions des m\xe9thodes",id:"d\xe9finitions-des-m\xe9thodes",children:[]},{value:"Exemple de classe avec des m\xe9thodes",id:"exemple-de-classe-avec-des-m\xe9thodes",children:[]},{value:"Utilisation de m\xe9thodes",id:"utilisation-de-m\xe9thodes",children:[]},{value:"Exemple d&#39;utilisation de m\xe9thode",id:"exemple-dutilisation-de-m\xe9thode",children:[]},{value:"Exercice",id:"exercice",children:[]},{value:"Constructeur",id:"constructeur",children:[]},{value:"Exemple d&#39;une classe avec un constructeur",id:"exemple-dune-classe-avec-un-constructeur",children:[]},{value:"Exercice",id:"exercice-1",children:[]},{value:"Classes imbriqu\xe9es",id:"classes-imbriqu\xe9es",children:[]},{value:"Red\xe9finition de fonctions",id:"red\xe9finition-de-fonctions",children:[]},{value:"Exemple de la red\xe9finition de l&#39;affichage",id:"exemple-de-la-red\xe9finition-de-laffichage",children:[]},{value:"Attributs des propri\xe9t\xe9s",id:"attributs-des-propri\xe9t\xe9s",children:[]},{value:"Exemple d&#39;attributs de propri\xe9t\xe9s",id:"exemple-dattributs-de-propri\xe9t\xe9s",children:[]},{value:"Propri\xe9t\xe9s d\xe9pendantes",id:"propri\xe9t\xe9s-d\xe9pendantes",children:[]},{value:"Exemple de propri\xe9t\xe9s d\xe9pendantes",id:"exemple-de-propri\xe9t\xe9s-d\xe9pendantes",children:[]},{value:"Classe d&#39;\xe9num\xe9ration",id:"classe-d\xe9num\xe9ration",children:[]},{value:"Exemple d&#39;une classe d&#39;\xe9num\xe9ration",id:"exemple-dune-classe-d\xe9num\xe9ration",children:[]},{value:"Validation de classe",id:"validation-de-classe",children:[]},{value:"M\xe9thodes statiques",id:"m\xe9thodes-statiques",children:[]},{value:"Exemple de m\xe9thodes statique",id:"exemple-de-m\xe9thodes-statique",children:[]},{value:"Dossier de classe",id:"dossier-de-classe",children:[]}],c={rightToc:o};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"principe-de-programmation-orient\xe9e-objet"},"Principe de programmation orient\xe9e objet"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"La programmation orient\xe9e objet est un concept de programmation o\xf9 un probl\xe8me est caract\xe9ris\xe9 par des objets sur lesquels on agit."),Object(r.b)("li",{parentName:"ul"},"La programmation orient\xe9e objet utilise un concept d\u2019une d\xe9finition de classe (recette) qui permet de g\xe9n\xe9rer des objets (biscuits) de ladite classe."),Object(r.b)("li",{parentName:"ul"},"La d\xe9finition de la classe va caract\xe9riser l\u2019objet (properties) ainsi que d\xe9finir les comportements de l\u2019objet (m\xe9thodes).")),Object(r.b)("h2",{id:"m\xe9thodes"},"M\xe9thodes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Les m\xe9thodes sont des fonctions qui sont attach\xe9es \xe0 notre classe."),Object(r.b)("li",{parentName:"ul"},"Les m\xe9thodes auront acc\xe8s aux diff\xe9rentes propri\xe9t\xe9s des objets des classes d\xe9finies."),Object(r.b)("li",{parentName:"ul"},"On peut red\xe9finir des fonctions pr\xe9d\xe9finies avec la red\xe9finition de fonctions."),Object(r.b)("li",{parentName:"ul"},"Les fonctions d\xe9finies dans le bloc de m\xe9thodes appartiennent \xe0 la classe et ne peuvent pas \xeatre utilis\xe9es de l\u2019ext\xe9rieur.")),Object(r.b)("h2",{id:"handle"},"handle"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"L\u2019option handle doit \xeatre ajout\xe9e au d\xe9but de notre d\xe9finition de classe."),Object(r.b)("li",{parentName:"ul"},"Les fonctions (autre que le constructeur) auront comme premier param\xe8tre l\u2019objet sur lequel on travaille."),Object(r.b)("li",{parentName:"ul"},"\xc9tant l\u2019objet, on peut utiliser les propri\xe9t\xe9s de l\u2019objet \xe0 l\u2019int\xe9rieur des m\xe9thodes en les acc\xe9dants par le premier param\xe8tre.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-MATLAB"}),"classdef MaClasse < handle % TOUJOURS AJOUTER CECI\n    % Reste du classdef\nend\n")),Object(r.b)("h2",{id:"d\xe9finitions-des-m\xe9thodes"},"D\xe9finitions des m\xe9thodes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"La d\xe9finition de m\xe9thodes se fait dans le bloc methods d\u2019une d\xe9finition de classe."),Object(r.b)("li",{parentName:"ul"},"On peut d\xe9finir plusieurs fonctions l\u2019une apr\xe8s l\u2019autre dans les blocs de m\xe9thodes qui seront attach\xe9es \xe0 la classe."),Object(r.b)("li",{parentName:"ul"},"Les m\xe9thodes auront acc\xe8s aux propri\xe9t\xe9s de la classe. On peut donc les utiliser \xe0 l\u2019int\xe9rieur de nos fonctions."),Object(r.b)("li",{parentName:"ul"},"Des r\xe8gles suppl\xe9mentaires sont requises pour l\u2019impl\xe9mentation des fonctions dans le bloc de m\xe9thodes."),Object(r.b)("li",{parentName:"ul"},"Plusieurs types de fonctions sont disponibles dans le bloc de m\xe9thodes (constructeur, red\xe9finition, etc.)")),Object(r.b)("h2",{id:"exemple-de-classe-avec-des-m\xe9thodes"},"Exemple de classe avec des m\xe9thodes"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-MATLAB"}),"classdef MaClasse < handle\n    properties\n        x\n        y\n        z\n    end\n    methods\n        function maMethod1(obj) % Premier param\xe8tre obligatoire\n            % Utilise la r\xe9f\xe9rence pour l'acc\xe8s aux propri\xe9t\xe9s.\n            obj.z = obj.x + obj.y;\n        end\n        function [retour] = methodAvecRetour(obj, arg1)\n            retour = arg1 + obj.z;\n        end\n    end\nend\n")),Object(r.b)("h2",{id:"utilisation-de-m\xe9thodes"},"Utilisation de m\xe9thodes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Une fois l\u2019objet cr\xe9\xe9 on peut les utiliser comme avec leurs m\xe9thodes."),Object(r.b)("li",{parentName:"ul"},"On peut utiliser les m\xe9thodes avec les objets correspondants."),Object(r.b)("li",{parentName:"ul"},"L\u2019utilisation des m\xe9thodes est activ\xe9e avec le \u2018.\u2019, on a le nom de l\u2019objet suivi de la fonction."),Object(r.b)("li",{parentName:"ul"},"Si l\u2019on utilise la forme courte (avec \u2018.\u2019), on peut omettre le premier param\xe8tre de la fonction (qui est l\u2019objet lui-m\xeame).")),Object(r.b)("h2",{id:"exemple-dutilisation-de-m\xe9thode"},"Exemple d'utilisation de m\xe9thode"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-MATLAB"}),"mc1 = MaClasse; % Cr\xe9ation de l'objet\nmc1.x = 45;\nmc1.y = 23; % Assignation des propri\xe9t\xe9s\n% Appel de la m\xe9thode maMethod1. Remarquez l'omission du premier param\xe8tre.\n% Les modifications de propri\xe9t\xe9s dans la fonction reste,\n% contrairement aux fonctions normales.\nmc1.maMethod1\n\n% Appel d'une m\xe9thode avec un retour\n% Le premier param\xe8tre envoy\xe9 \xe0 l'appel sera le deuxi\xe8me de la d\xe9finition.\n% Ici, la valeur 34 sera assign\xe9e au param\xe8tre d\u2019entr\xe9e arg1 de la m\xe9thode.\nmaReponse = mc1.methodAvecRetour(34)\n")),Object(r.b)("h2",{id:"exercice"},"Exercice"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\xc9crivez une classe qui repr\xe9sente un \xe9tudiant avec les propri\xe9t\xe9s suivantes:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"nom"),Object(r.b)("li",{parentName:"ul"},"code permanent"),Object(r.b)("li",{parentName:"ul"},"liste de notes d'examens"))),Object(r.b)("li",{parentName:"ul"},"Ajoutez \xe0 la classe une m\xe9thode qui ajoute un examen \xe0 liste des notes d'examens."),Object(r.b)("li",{parentName:"ul"},"Ajoutez \xe0 la classe une m\xe9thode qui retourne la moyenne des notes d'examens. Valide qu'il y a au moins un examen dans la liste d'examens."),Object(r.b)("li",{parentName:"ul"},"\xc9crivez un script qui construit un objet de type Etudiant et remplit son nom et code permanent. Ajoute ensuite deux examens avec la m\xe9thode \xe9crite plus haut. Affiche finalement la moyenne de l'\xe9tudiant en utilisant la m\xe9thode \xe9crite plus haut.")),Object(r.b)("h2",{id:"constructeur"},"Constructeur"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"On peut avoir un constructeur pr\xe9cis qui remplace (red\xe9fini) le constructeur par d\xe9faut. Le nom de la fonction du constructeur doit \xeatre la m\xeame que le nom de la classe."),Object(r.b)("li",{parentName:"ul"},"La fonction constructrice ne pourra qu\u2019avoir qu\u2019une seule valeur de retour qui sera automatiquement l\u2019objet cr\xe9\xe9."),Object(r.b)("li",{parentName:"ul"},"On peut assigner les propri\xe9t\xe9s de l\u2019objet avec un acc\xe8s des propri\xe9t\xe9s de la valeur de retour."),Object(r.b)("li",{parentName:"ul"},"On valide habituellement le nombre de param\xe8tres d\u2019entr\xe9e pour \xeatre capable de cr\xe9er un objet avec les champs vides si l\u2019on ne donne aucun param\xe8tre au constructeur.")),Object(r.b)("h2",{id:"exemple-dune-classe-avec-un-constructeur"},"Exemple d'une classe avec un constructeur"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-MATLAB"}),"classdef MaClasse < handle\n    properties\n        x\n        y\n    end\n    methods\n        function [obj] = MaClasse(x, y)\n            if nargin == 2\n                obj.x = x;\n                obj.y = y;\n            end\n        end\n    end\nend\n")),Object(r.b)("h2",{id:"exercice-1"},"Exercice"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ajoutez un constructeur \xe0 la classe Etudiant qui re\xe7oit le nom et le code permanent et assigne leurs propri\xe9t\xe9s en cons\xe9quence.")),Object(r.b)("h2",{id:"classes-imbriqu\xe9es"},"Classes imbriqu\xe9es"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Les classes peuvent \xeatre imbriqu\xe9es l\u2019une dans l\u2019autre."),Object(r.b)("li",{parentName:"ul"},"Habituellement, on appel le constructeur MaClasse.empty sur la propri\xe9t\xe9 par d\xe9faut."),Object(r.b)("li",{parentName:"ul"},"L\u2019utilisation de la m\xe9thode courte d\u2019appels devient encore plus puissante ici. Ex: objet1.objet2.fcnobj2"),Object(r.b)("li",{parentName:"ul"},"Faire attention \xe0 la conversion de type si on ne d\xe9finit pas par d\xe9faut le type.")),Object(r.b)("h2",{id:"red\xe9finition-de-fonctions"},"Red\xe9finition de fonctions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"On peut remplacer des m\xe9thodes de fonctions qui existent d\xe9j\xe0 dans MATLAB."),Object(r.b)("li",{parentName:"ul"},"La red\xe9finition remplace l\u2019utilisation normale des fonctions par notre impl\xe9mentation."),Object(r.b)("li",{parentName:"ul"},"La red\xe9finition est habituellement utilis\xe9e pour le constructeur, les fonctions arithm\xe9tiques (plus, minus, mddivide) et les fonctions de comparaison (eq, gt, lt, le, ge, ne).\nCela permet de faire de la comparaison directe sur les objets avec les op\xe9rateurs habituels ( ==, >, <, <=, >=, ~=)."),Object(r.b)("li",{parentName:"ul"},"On remplace souvent la fonction ",Object(r.b)("inlineCode",{parentName:"li"},"char")," et ",Object(r.b)("inlineCode",{parentName:"li"},"disp")," pour prendre le contr\xf4le de l'affichage des objets.")),Object(r.b)("h2",{id:"exemple-de-la-red\xe9finition-de-laffichage"},"Exemple de la red\xe9finition de l'affichage"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-MATLAB"}),"classdef Point2D < handle\n    properties\n        x\n        y\n    end\n    methods\n        function [chaine] = char(obj)\n            chaine = sprintf('Le x est : %g \\n', obj.x);\n            chaine = [chaine sprintf('Le y est : %g \\n', obj.y)];\n        end\n        function disp(obj)\n            fprintf('%s', obj)\n        end\n    end\nend\n")),Object(r.b)("h2",{id:"attributs-des-propri\xe9t\xe9s"},"Attributs des propri\xe9t\xe9s"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Les propri\xe9t\xe9s peuvent avoir des attributs pour limiter ou configurer l'acc\xe8s aux propri\xe9t\xe9s."),Object(r.b)("li",{parentName:"ul"},"Les attributs possibles sont les suivants :",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Access = private")," : Limite l'utilisation des propri\xe9t\xe9s aux m\xe9thodes de la fonction;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SetAccess = private")," : Limite les modifications des propri\xe9t\xe9s;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"GetAccess = private")," : Limite les lectures des propri\xe9t\xe9s;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Constant = true")," : Permet une seule assignation \xe0 la propri\xe9t\xe9;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Dependant")," : La propri\xe9t\xe9 est calcul\xe9 avec des m\xe9thodes pour l'acc\xe8s et la modification.")))),Object(r.b)("h2",{id:"exemple-dattributs-de-propri\xe9t\xe9s"},"Exemple d'attributs de propri\xe9t\xe9s"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-MATLAB"}),"classdef MaClass < handle\n    properties\n        x\n    end\n    properties (SetAccess = private)\n        y\n    end\n    properties (Constant = true)\n        MA_CONSTANTE = 4\n    end\nend\n")),Object(r.b)("h2",{id:"propri\xe9t\xe9s-d\xe9pendantes"},"Propri\xe9t\xe9s d\xe9pendantes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Les propri\xe9t\xe9s d\xe9pendantes ne sont pas accessibles comme valeur. Leur information est calcul\xe9e avec une m\xe9thode \xe0 chaque acc\xe8s ou modification."),Object(r.b)("li",{parentName:"ul"},"Le nom des m\xe9thodes utilise le nom de la propri\xe9t\xe9 pour que MATLAB les identifie correctement.")),Object(r.b)("h2",{id:"exemple-de-propri\xe9t\xe9s-d\xe9pendantes"},"Exemple de propri\xe9t\xe9s d\xe9pendantes"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-MATLAB"}),"classdef MaClasse < handle\n    properties\n        x\n        y\n    end\n    properties (Dependent)\n        z\n    end\n    methods\n        function [z] get.z(obj)\n            z = obj.x + obj.y;\n        end\n        function set.z(obj, z)\n            obj.x = z - obj.y;\n        end\n    end\n")),Object(r.b)("h2",{id:"classe-d\xe9num\xe9ration"},"Classe d'\xe9num\xe9ration"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Une classe d\u2019\xe9num\xe9ration permet d\u2019avoir l\u2019\xe9num\xe9ration d\u2019\xe9l\xe9ment qui n\u2019a pas de valeur intrins\xe8quement rattach\xe9e. "),Object(r.b)("li",{parentName:"ul"},"Le bloc d\u2019\xe9num\xe9ration prend la place des propri\xe9t\xe9s. "),Object(r.b)("li",{parentName:"ul"},"On peut ensuite invoquer une \u201cvaleur\u201d de l\u2019\xe9num\xe9ration en utilisant NomClasse.ValeurEnumeration . "),Object(r.b)("li",{parentName:"ul"},"Les \xe9num\xe9rations peuvent avoir des m\xe9thodes qui travaillent sur les valeurs possibles des \xe9num\xe9rations.")),Object(r.b)("h2",{id:"exemple-dune-classe-d\xe9num\xe9ration"},"Exemple d'une classe d'\xe9num\xe9ration"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-MATLAB"}),"classdef MonEnum\n    enumaration\n        A\n        B\n        C\n    end\nend\n")),Object(r.b)("h2",{id:"validation-de-classe"},"Validation de classe"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"isequal(a,b)")," - D\xe9termine si deux \xe9l\xe9ments sont \xe9gaux. On regarde ici toutes les propri\xe9t\xe9s et on les compare;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"isa(x,'type')")," - D\xe9termine si un \xe9l\xe9ment est d\u2019un type sp\xe9cifique.")),Object(r.b)("h2",{id:"m\xe9thodes-statiques"},"M\xe9thodes statiques"),Object(r.b)("p",null,"On peut avoir besoin de cr\xe9er des m\xe9thodes qui n\u2019ont pas besoin de l\u2019objet lui-m\xeame. Il faut faire attention de n\u2019avoir ni besoin des propri\xe9t\xe9s ni des m\xe9thodes.\nOn peut avoir un bloc de m\xe9thode avec l\u2019option Static qui permet de faire abstraction de la r\xe8gle de l\u2019option handle.\nOn peut donc avoir des fonctions \u2018normales\u2019 qui sont rattach\xe9es \xe0 une classe."),Object(r.b)("h2",{id:"exemple-de-m\xe9thodes-statique"},"Exemple de m\xe9thodes statique"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-MATLAB"}),"classdef MaClasse < handle\n    properties\n        x\n        y\n    end\n    methods (Static)\n        function [c] = fcn1(a, b)\n            c = a + b;\n        end\n    end\nend\n")),Object(r.b)("h2",{id:"dossier-de-classe"},"Dossier de classe"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"On peut diviser une classe qui devient trop grande en multiple fichier "),Object(r.b)("li",{parentName:"ul"},"Pour se faire, il faut un dossier avec le nom @MaClasse. Les fichiers appartenant \xe0 la classe y seront. "),Object(r.b)("li",{parentName:"ul"},"Le dossier doit contenir un fichier du m\xeame nom o\xf9 il y aura une d\xe9finition du constructeur ainsi que des propri\xe9t\xe9s. "),Object(r.b)("li",{parentName:"ul"},"On peut avoir les autres m\xe9thodes dans des fichiers s\xe9par\xe9s de fonctions. "),Object(r.b)("li",{parentName:"ul"},"Si certaines m\xe9thodes ont besoin d\u2019options, pr\xe9cise (Access, Static). Il faut sp\xe9cifier le prototype de ses m\xe9thodes dans le fichier du constructeur.")))}d.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,m=u["".concat(s,".").concat(b)]||u[b]||p[b]||r;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=b;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);