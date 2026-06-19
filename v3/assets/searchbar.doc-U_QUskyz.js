import{j as e,M as c,T as l,C as r}from"./blocks-CfVR1a0K.js";import{useMDXComponents as s}from"./index-BMHellmX.js";import{S as t,P as d,B as o,a as h,b as p,c as u,d as x,e as m,L as j,f as b,g as f,R as g,h as v,D as q,A as S,C}from"./searchbar.stories-Bk41nARH.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CqPuVMaj.js";import"./storybook-decorators-DSS85Rnr.js";function n(i){const a={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:t}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("component-title",{children:"dss-searchbar"})]}),`
`,e.jsx("br",{}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(a.p,{children:`El cercador és un component que pot utilitzar-se tant per a realitzar filtres en el contingut
d'una pàgina com per a navegar dins de la mateixa en funció de la cerca. Sí el catàleg de termes o cerques
recents està definit, el component mostrarà un desplegable amb suggerències quan l'usuari escriu a l'input.`}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"#searchbar-b%C3%A0sica",children:e.jsx(a.strong,{children:"Searchbar bàsica"})})}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#searchbar-b%C3%A0sica-cerca-%C3%BAnica",children:"Searchbar bàsica: cerca única"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#searchbar-b%C3%A0sica-cerca-m%C3%BAltiple",children:"Searchbar bàsica: cerca múltiple"})}),`
`]}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"#searchbar-predictiva",children:e.jsx(a.strong,{children:"Searchbar predictiva"})})}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#searchbar-predictiva-cerques-recents",children:"Searchbar predictiva: cerques recents"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#searchbar-predictiva-cat%C3%A0leg-predictiu",children:"Searchbar predictiva: catàleg predictiu"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#searchbar-predictiva-combinat",children:"Searchbar predictiva: combinat"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#searchbar-predictiva-personalitzaci%C3%B3-del-cat%C3%A0leg",children:"Searchbar predictiva: personalització del catàleg"})}),`
`]}),`
`,e.jsx(a.p,{children:e.jsx(a.strong,{children:"Altres"})}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-cerca-predefinida",children:"Amb cerca predefinida"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#mides",children:"Mides"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#requerit",children:"Requerit"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#nom%C3%A9s-lectura",children:"Només lectura"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#filtre-avan%C3%A7at",children:"Filtre avançat"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#modificar-lestil-del-desplegable",children:"Modificar l’estil del desplegable"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h3,{id:"searchbar-bàsica",children:"Searchbar bàsica"}),`
`,e.jsx(a.p,{children:`El mode bàsic del component permet utilitzar-lo com un cercador senzill, sense mostrar un catàleg d'opcions ni cerques recents.
En aquest cas, el component es comporta com un camp de text en què es poden utilitzar dos esdeveniments per detectar-ne el valor:`}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"input"}),": s'executa cada vegada que l'usuari escriu al camp de text."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"search"}),": s'executa quan l'usuari prem la tecla Enter o fa clic en un resultat del catàleg (en el cas de la Searchbar predictiva)."]}),`
`]}),`
`,e.jsx(a.h4,{id:"searchbar-bàsica-cerca-única",children:"Searchbar bàsica: cerca única"}),`
`,e.jsx(a.p,{children:"La cerca única és el comportament predeterminat del component, en què l'usuari només pot introduir un únic terme de cerca."}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(a.h4,{id:"searchbar-bàsica-cerca-múltiple",children:"Searchbar bàsica: cerca múltiple"}),`
`,e.jsxs(a.p,{children:["La cerca múltiple s'activa mitjançant la propietat ",e.jsx(a.code,{children:"multiple"}),` i permet a l'usuari introduir diversos termes de cerca separats per comes.
Cada vegada que s'afegeix un terme nou, es genera un esdeveniment de cerca `,e.jsx(a.code,{children:"search"}),"."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h3,{id:"searchbar-predictiva",children:"Searchbar predictiva"}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"En totes les opcions del cercador predictiu es pot habilitar la cerca única o múltiple."}),`
`]}),`
`,e.jsx(a.p,{children:`Des de la v3, aquest component permet definir dos tipus d'objectes per ajudar l'usuari a completar les cerques, de manera que
s'activarà un desplegable amb una llista de cerques recents o de termes filtrats segons el valor introduït al camp de text.`}),`
`,e.jsx(a.h4,{id:"searchbar-predictiva-cerques-recents",children:"Searchbar predictiva: cerques recents"}),`
`,e.jsxs(a.p,{children:["Afegir propietat ",e.jsx(a.code,{children:"recentSearches"}),": permet crear una llista de cerques recents de fins a un màxim de 8 elements, que es mostren per defecte tan bon punt l'usuari posa el focus sobre el component."]}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"Quan es defineixen les cerques recents, el desplegable es mostrarà tan bon punt es faci focus al camp de cerca."}),`
`]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(a.h4,{id:"searchbar-predictiva-catàleg-predictiu",children:"Searchbar predictiva: catàleg predictiu"}),`
`,e.jsxs(a.p,{children:["Afegir propietat ",e.jsx(a.code,{children:"catalog"}),": permet crear una llista de termes o possibles cerques per oferir a l'usuari quan activa o escriu el filtre dins del component."]}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsxs(a.p,{children:["Per a cerques al catàleg, el desplegable apareixerà quan la longitud del filtre sigui major o igual que la propietat ",e.jsx(a.code,{children:"threshold"}),"."]}),`
`]}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(a.h4,{id:"searchbar-predictiva-combinat",children:"Searchbar predictiva: combinat"}),`
`,e.jsxs(a.p,{children:[`En cas d'afegir tots dos objectes, el component mostrarà una combinació d'ambdós, que es distingiran fàcilment
gràcies a la icona predeterminada que inclou cadascun d'ells. Tanmateix, la icona es pot sobrescriure mitjançant
els atributs de `,e.jsx(a.code,{children:"CatalogOption"})," (vegeu les propietats)."]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(a.h4,{id:"searchbar-predictiva-personalització-del-catàleg",children:"Searchbar predictiva: personalització del catàleg"}),`
`,e.jsx(a.p,{children:`Els elements de recentSearch i del catalog utilitzen el tipus CatalogOption i permeten definir els atributs icon o disabled,
que sobrescriuen la seva aparença.`}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(a.h4,{id:"searchbar-predictiva-gestió-externa-del-catàleg",children:"Searchbar predictiva: gestió externa del catàleg"}),`
`,e.jsx(a.p,{children:`En algunes situacions es pot donar el cas que el catàleg de termes s’inicialitzi buit, per exemple si hi ha massa elements i es decideix,
des de la iniciativa, fer un primer filtratge de cerca fora del component, de manera que el catàleg no es carrega fins que l’usuari ha
fet ús del camp de text. Per a aquests casos s’han definit les propietats següents:`}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"isCatalogLoading"}),`: activa un indicador de càrrega (spinner) que es mostra dins del desplegable fins que la iniciativa torna a carregar
el valor de la propietat catalog. Serà la iniciativa la que gestioni el valor d’aquesta propietat de true a false quan s’hagin obtingut les dades del catàleg.`]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"serverSideFilter"}),`: que desactiva el filtre intern del component, de manera que serà la iniciativa la que s’encarregarà d’actualitzar
tant el `,e.jsx(a.code,{children:"catalog"})," com el ",e.jsx(a.code,{children:"recentSearches"})," cada vegada que l’usuari escriu al component, fent ús de l’esdeveniment ",e.jsx(a.code,{children:"input"}),"."]}),`
`]}),`
`,e.jsx(r,{of:j}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h3,{id:"amb-cerca-predefinida",children:"Amb cerca predefinida"}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(a.h3,{id:"mides",children:"Mides"}),`
`,e.jsx(a.p,{children:"Utilitzarem la mida (md | lg)."}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(a.h3,{id:"requerit",children:"Requerit"}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(a.h3,{id:"només-lectura",children:"Només lectura"}),`
`,e.jsx(r,{of:v}),`
`,e.jsx(a.h3,{id:"deshabilitat",children:"Deshabilitat"}),`
`,e.jsx(r,{of:q}),`
`,e.jsx(a.h3,{id:"filtre-avançat",children:"Filtre avançat"}),`
`,e.jsx(a.p,{children:`Nova cerca avançada que s’activa amb la propietat advancedFilter.
La propietat threshold s’aplica de manera individual a cada terme, de manera que si per defecte tenim un llindar de 3,
la cerca "diag cri" aplicarà tots dos termes, però la cerca "diag cr" només aplicarà el terme "diag".`}),`
`,e.jsx(r,{of:S}),`
`,e.jsx(a.h3,{id:"modificar-lestil-del-desplegable",children:"Modificar l’estil del desplegable."}),`
`,e.jsx(a.p,{children:"Existeixen dues propietats que sobreescriuen l’estil per defecte del desplegable del component:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"catalogStyle"})," afecta el contenidor de les opcions del catàleg; es pot utilitzar, per exemple, per limitar l’alçada màxima d’aquest contenidor i aplicar-hi un desplaçament intern (scroll) quan hi ha molts elements."]}),`
`]}),`
`,e.jsx(r,{of:C})]})}function R(i={}){const{wrapper:a}={...s(),...i.components};return a?e.jsx(a,{...i,children:e.jsx(n,{...i})}):n(i)}export{R as default};
