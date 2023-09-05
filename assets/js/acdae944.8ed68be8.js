"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[6416],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,g=d["".concat(o,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8937:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],s={title:"Date, Visualisation et widgets",sidebar_label:"8 - Visualisation",sidebar_position:8},o=void 0,p={unversionedId:"inf5111/Cours/cours8",id:"inf5111/Cours/cours8",isDocsHomePage:!1,title:"Date, Visualisation et widgets",description:"Date et temps",source:"@site/docs/inf5111/Cours/cours8.md",sourceDirName:"inf5111/Cours",slug:"/inf5111/Cours/cours8",permalink:"/site/docs/inf5111/Cours/cours8",editUrl:"https://github.com/HugoCodeStar/site/edit/master/docs/inf5111/Cours/cours8.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Date, Visualisation et widgets",sidebar_label:"8 - Visualisation",sidebar_position:8},sidebar:"INF5111Sidebar",previous:{title:"7 - Fonctions & ERD",permalink:"/site/docs/inf5111/Cours/cours7"},next:{title:"9 - Mongo & Redis",permalink:"/site/docs/inf5111/Cours/cours9"}},u=[{value:"Date et temps",id:"date-et-temps",children:[{value:"Les modules <code>datetime</code> et <code>dateutil</code>",id:"les-modules-datetime-et-dateutil",children:[]},{value:"Numpy et <code>datetime64</code>",id:"numpy-et-datetime64",children:[]}]},{value:"Visualisation avec <code>matplotlib</code>",id:"visualisation-avec-matplotlib",children:[{value:"Importation",id:"importation",children:[]},{value:"Exemple initial",id:"exemple-initial",children:[]},{value:"La fonction <code>plot</code> pour un premier affichage",id:"la-fonction-plot-pour-un-premier-affichage",children:[]},{value:"Configuration des graphiques",id:"configuration-des-graphiques",children:[]},{value:"Ajustement des axes",id:"ajustement-des-axes",children:[]},{value:"Ajout de l\xe9gende",id:"ajout-de-l\xe9gende",children:[]}]},{value:"Type de graphiques",id:"type-de-graphiques",children:[{value:"Donn\xe9es X,Y",id:"donn\xe9es-xy",children:[]},{value:"Barre d&#39;erreur",id:"barre-derreur",children:[]},{value:"Histogramme",id:"histogramme",children:[]}]},{value:"Ajout de widgets interactif",id:"ajout-de-widgets-interactif",children:[{value:"Premier contact : <code>interact</code>",id:"premier-contact--interact",children:[]},{value:"Cr\xe9ation de contr\xf4les",id:"cr\xe9ation-de-contr\xf4les",children:[]}]}],d={toc:u},m="wrapper";function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"date-et-temps"},"Date et temps"),(0,i.kt)("p",null,"Les donn\xe9es de date et d'heure se pr\xe9sentent sous plusieurs formes, dont nous discuterons ici\xa0:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Les ",(0,i.kt)("em",{parentName:"li"},"timestamps")," font r\xe9f\xe9rence \xe0 des moments particuliers dans le temps (par exemple, le 4 juillet 2015 \xe0 7h00)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Intervalles de temps")," (time intervals) et ",(0,i.kt)("em",{parentName:"li"},"p\xe9riodes")," (periods) font r\xe9f\xe9rence \xe0 une dur\xe9e entre un d\xe9but et une fin particuliers\xa0; par exemple, l'ann\xe9e 2015. Les p\xe9riodes font g\xe9n\xe9ralement r\xe9f\xe9rence \xe0 un cas particulier d'intervalles de temps dans lesquels chaque intervalle est de longueur uniforme et ne se chevauche pas (par exemple, des p\xe9riodes de 24 heures comprenant des jours)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Delta de temps")," (timedelta) ou ",(0,i.kt)("em",{parentName:"li"},"dur\xe9es")," font r\xe9f\xe9rence \xe0 une dur\xe9e exacte (par exemple, une dur\xe9e de 22,56 secondes).")),(0,i.kt)("h3",{id:"les-modules-datetime-et-dateutil"},"Les modules ",(0,i.kt)("inlineCode",{parentName:"h3"},"datetime")," et ",(0,i.kt)("inlineCode",{parentName:"h3"},"dateutil")),(0,i.kt)("p",null,"Les modules ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"dateutil")," permettent de cr\xe9\xe9 des objets repr\xe9sentant les temps et date mentionn\xe9e plus haut."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from datetime import datetime\nsimpledate = datetime(year=2015, month=7, day=4)\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/datetime.html"},"Documentation de ",(0,i.kt)("inlineCode",{parentName:"a"},"datetime"))),(0,i.kt)("p",null,"Le ",(0,i.kt)("inlineCode",{parentName:"p"},"dateutil")," contient des utilitaires pour facilit\xe9 l'utilisation de date."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from dateutil import parser\nsimpledate = parser.parse("4th of July, 2015")\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dateutil.readthedocs.io/en/stable/"},"Documentation de ",(0,i.kt)("inlineCode",{parentName:"a"},"dateutil"))),(0,i.kt)("p",null,"Les datetime sont int\xe9ressants pour une repr\xe9sentation facile des dates, mais \xe7a ne fonctionne pas facilement pour une liste ou un range."),(0,i.kt)("h3",{id:"numpy-et-datetime64"},"Numpy et ",(0,i.kt)("inlineCode",{parentName:"h3"},"datetime64")),(0,i.kt)("p",null,"Pour pallier \xe0 la situation, NumPy \xe0 incorporer le type ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime64")," pour pouvoir mieux manier les dates pour repr\xe9sentation en index ou comme liste. Il est donc possible de faire une date et de le travailler comme un tableau."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\ndate = np.array('2015-07-04', dtype=np.datetime64)\ndisplay(date) # array(datetime.date(2015, 7, 4), dtype='datetime64[D]')\n\ndisplay(date + np.arange(12))\n# array(['2015-07-04', '2015-07-05', '2015-07-06', '2015-07-07',\n#       '2015-07-08', '2015-07-09', '2015-07-10', '2015-07-11',\n#       '2015-07-12', '2015-07-13', '2015-07-14', '2015-07-15'], dtype='datetime64[D]')\n")),(0,i.kt)("p",null,"Les ",(0,i.kt)("inlineCode",{parentName:"p"},"datetimes64")," sont aussi capable de parsing par d\xe9faut."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"np.datetime64('2015-07-04')\n")),(0,i.kt)("h2",{id:"visualisation-avec-matplotlib"},"Visualisation avec ",(0,i.kt)("inlineCode",{parentName:"h2"},"matplotlib")),(0,i.kt)("p",null,"La librairie ",(0,i.kt)("inlineCode",{parentName:"p"},"matplotlib")," est une librairie de visualisation bas\xe9e sur les graphiques disponibles sous le logiciel et langages de programmation MATLAB. Cette librairie permet de construire des graphiques qui vont nous permettre de visualiser les donn\xe9es sur lesquelles nous avons travaill\xe9."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"matplotlib")," est la libraire de base que nous allons regarder, mais il existe des librairies de plus haut niveau avec des configurations qui facilite d'avoir des graphiques plus modernes. Les librairies sont :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://seaborn.pydata.org"},"Seaborn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://plotly.com"},"Plotly/Dash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bokeh.org"},"Bokeh"))),(0,i.kt)("h3",{id:"importation"},"Importation"),(0,i.kt)("p",null,"Comme Numpy et Pandas, matplotlib \xe0 son propre raccourci. On utilise la sous-librairie de graphisme avec le nom ",(0,i.kt)("inlineCode",{parentName:"p"},"plt"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\n")),(0,i.kt)("h3",{id:"exemple-initial"},"Exemple initial"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"matplotlib")," permet de prendre des donn\xe9es et des pr\xe9sent\xe9s sous forme de graphique. Nous regarderons les graphiques pr\xe9cis, mais le d\xe9but avec un exemple complet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nx = np.linspace(0, 10, 100)\n\nfig = plt.figure() # Sauvegarde la figure pour enregistrement\nplt.plot(x, np.sin(x), '-')\nplt.plot(x, np.cos(x), '--');\n\n# Sauvegarde d'une image de la figure\nfig.savefig('my_figure.png')\n")),(0,i.kt)("h3",{id:"la-fonction-plot-pour-un-premier-affichage"},"La fonction ",(0,i.kt)("inlineCode",{parentName:"h3"},"plot")," pour un premier affichage"),(0,i.kt)("p",null,"Le plus simple est un graphique lin\xe9aire des donn\xe9es sur un axe X,Y qui sont reli\xe9s."),(0,i.kt)("p",null,"La m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"plot")," permet de pr\xe9senter des s\xe9quences d'\xe9l\xe9ments repr\xe9sentant le X et le Y qui seront dessin\xe9s."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# G\xe9n\xe8re 1000 valeurs de 0 \xe0 10\nx = np.linspace(0, 10, 1000)\n# Dessine le graphique\nplt.plot(x, np.sin(x));\n")),(0,i.kt)("h3",{id:"configuration-des-graphiques"},"Configuration des graphiques"),(0,i.kt)("p",null,"Plusieurs param\xe8tres nomm\xe9s sont disponibles pour configurer les graphiques."),(0,i.kt)("p",null,"La couleur"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"plt.plot(x, np.sin(x - 0), color='blue')        # specify color by name\nplt.plot(x, np.sin(x - 1), color='g')           # short color code (rgbcmyk)\nplt.plot(x, np.sin(x - 2), color='0.75')        # Grayscale between 0 and 1\nplt.plot(x, np.sin(x - 3), color='#FFDD44')     # Hex code (RRGGBB from 00 to FF)\nplt.plot(x, np.sin(x - 4), color=(1.0,0.2,0.3)) # RGB tuple, values 0 to 1\nplt.plot(x, np.sin(x - 5), color='chartreuse'); # all HTML color names supported\n")),(0,i.kt)("p",null,"Le type de trait"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"plt.plot(x, x + 0, linestyle='solid')\nplt.plot(x, x + 1, linestyle='dashed')\nplt.plot(x, x + 2, linestyle='dashdot')\nplt.plot(x, x + 3, linestyle='dotted');\n\n# For short, you can use the following codes:\nplt.plot(x, x + 4, linestyle='-')  # solid\nplt.plot(x, x + 5, linestyle='--') # dashed\nplt.plot(x, x + 6, linestyle='-.') # dashdot\nplt.plot(x, x + 7, linestyle=':');  # dotted\n")),(0,i.kt)("h3",{id:"ajustement-des-axes"},"Ajustement des axes"),(0,i.kt)("p",null,"Plusieurs m\xe9thodes sont aussi disponibles dans la construction des axes et leurs \xe9tiquettes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'plt.plot(x, np.sin(x))\n\nplt.xlim(-1, 11)\nplt.ylim(-1.5, 1.5)\n\nplt.title("A Sine Curve")\nplt.xlabel("x")\nplt.ylabel("sin(x)")\n')),(0,i.kt)("h3",{id:"ajout-de-l\xe9gende"},"Ajout de l\xe9gende"),(0,i.kt)("p",null,"Les donn\xe9es peuvent \xeatre identifi\xe9es pour ensuite ins\xe9rer une l\xe9gende qui les identifie."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"plt.plot(x, np.sin(x), '-g', label='sin(x)')\nplt.plot(x, np.cos(x), ':b', label='cos(x)')\nplt.axis('equal')\n\nplt.legend();\n")),(0,i.kt)("h2",{id:"type-de-graphiques"},"Type de graphiques"),(0,i.kt)("h3",{id:"donn\xe9es-xy"},"Donn\xe9es X,Y"),(0,i.kt)("p",null,"Nous avons vu que la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"plot")," permet de faire un graphique lign\xe9. Il est aussi possible de changer sa configuration pour qu'elle n'affiche que les points de donn\xe9es."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"x = np.linspace(0, 10, 30)\ny = np.sin(x)\n\nplt.plot(x, y, 'o', color='black')\n")),(0,i.kt)("p",null,'Des nuages de points sont donc possibles avec diff\xe9rents "marqueurs".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"rng = np.random.RandomState(0)\nfor marker in ['o', '.', ',', 'x', '+', 'v', '^', '<', '>', 's', 'd']:\n    plt.plot(rng.rand(5), rng.rand(5), marker,\n             label=\"marker='{0}'\".format(marker))\nplt.legend(numpoints=1)\nplt.xlim(0, 1.8)\n")),(0,i.kt)("p",null,"Pour des nuages de points plus complexes, la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"scatter")," permet d'avoir une troisi\xe8me information (couleur, taille, etc.) pour chaque point."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"rng = np.random.RandomState(0)\nx = rng.randn(100)\ny = rng.randn(100)\ncolors = rng.rand(100)\nsizes = 1000 * rng.rand(100)\n\nplt.scatter(x, y, c=colors, s=sizes, alpha=0.3,\n            cmap='viridis')\nplt.colorbar()  # show color scale\n")),(0,i.kt)("h4",{id:"exemple-de-nuages-de-points"},"Exemple de nuages de points"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from sklearn.datasets import load_iris\niris = load_iris()\nfeatures = iris.data.T\n\nplt.scatter(features[0], features[1], alpha=0.2,\n            s=100*features[3], c=iris.target, cmap='viridis')\nplt.xlabel(iris.feature_names[0])\nplt.ylabel(iris.feature_names[1])\n")),(0,i.kt)("h3",{id:"barre-derreur"},"Barre d'erreur"),(0,i.kt)("p",null,"La m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"errorbar")," est capable de pr\xe9senter des graphiques de barres d'erreur."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"x = np.linspace(0, 10, 50)\ndy = 0.8\ny = np.sin(x) + dy * np.random.randn(50)\n\nplt.errorbar(x, y, yerr=dy, fmt='.k')\n")),(0,i.kt)("h3",{id:"histogramme"},"Histogramme"),(0,i.kt)("p",null,"Des diagrammes \xe0 barres sont aussi disponibles avec ",(0,i.kt)("inlineCode",{parentName:"p"},"hist"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"data = np.random.randn(1000)\nplt.hist(data)\n\n# Ou avec plus d'option\nplt.hist(data, bins=30, alpha=0.5,\n         histtype='stepfilled', color='steelblue',\n         edgecolor='none');\n")),(0,i.kt)("p",null,"Les diagrammes \xe0 barres peuvent aussi repr\xe9senter des donn\xe9es de 2 dimensions (heatmap) avec la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"hist2d"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"mean = [0, 0]\ncov = [[1, 1], [1, 2]]\nx, y = np.random.multivariate_normal(mean, cov, 10000).T\n\nplt.hist2d(x, y, bins=30, cmap='Blues')\ncb = plt.colorbar()\ncb.set_label('counts in bin')\n")),(0,i.kt)("h2",{id:"ajout-de-widgets-interactif"},"Ajout de widgets interactif"),(0,i.kt)("p",null,"La libraire ",(0,i.kt)("inlineCode",{parentName:"p"},"pywidgets")," permet d'avoir des contr\xf4les interactifs pouvant \xeatre modifi\xe9s. En jumelant les contr\xf4les avec des graphiques, nous avons une visualisation de tableau de bord interactif."),(0,i.kt)("p",null,"Comme les autres librairies, la librairie se renomme ",(0,i.kt)("inlineCode",{parentName:"p"},"widgets")," pour faciliter son utilisation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import ipywidgets as widgets\n")),(0,i.kt)("h3",{id:"premier-contact--interact"},"Premier contact : ",(0,i.kt)("inlineCode",{parentName:"h3"},"interact")),(0,i.kt)("p",null,"La m\xe9thode la plus simple d'utiliser les widgets et d'utiliser sa m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"interact")," qui va cr\xe9\xe9e automatiquement les widgets pour nous."),(0,i.kt)("p",null,"La m\xe9thode re\xe7oit une fonction et les param\xe8tres variables de la fonction."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from ipywidgets import interact\n\n# Une fonction de notre choix qui retourne le r\xe9sulat voulu\ndef f(x, y):\n    return 3 * x + y\n\n# La m\xe9thode interact re\xe7oit la fonction et on lui envoie les param\xe8tres possible\n\ninteract(f, x=10)\n")),(0,i.kt)("p",null,"En fournissant une valeur initiale, un contr\xf4le est automatiquement g\xe9n\xe9r\xe9. Le type de donn\xe9es envoy\xe9es d\xe9finit le contr\xf4le cr\xe9\xe9."),(0,i.kt)("p",null,"Il est aussi possible de fournir les configurations du contr\xf4le."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Cr\xe9ation d'un wigdet (sp\xe9cifiquatin plus tards)\nmywidget = widgets.IntSlider(min=-10, max=30, step=1, value=10)\n\ninteract(f, x=mywidget)\n")),(0,i.kt)("h4",{id:"exemple-avec-un-graphique-interactif"},"Exemple avec un graphique interactif"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport numpy as np\n\ndef f(m, b):\n    plt.grid() # Ajout d'un grillage\n    x = np.linspace(-10, 10, num=1000)\n    plt.plot(x, m * x + b)\n    plt.ylim(-5, 5)\n\n\ninteract(f, m=(-2.0, 2.0), b=(-3, 3, 0.5))\n")),(0,i.kt)("h3",{id:"cr\xe9ation-de-contr\xf4les"},"Cr\xe9ation de contr\xf4les"),(0,i.kt)("p",null,"Les contr\xf4les permettent de cr\xe9\xe9 des \xe9l\xe9ments interactifs allant d'une valeur num\xe9rique, d'une zone de texte jusqu'\xe0 la s\xe9lection d'une date ou d'une couleur."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ipywidgets.readthedocs.io/en/stable/examples/Widget%20List.html#"},"Documentation des diff\xe9rents widgets")))}c.isMDXComponent=!0}}]);