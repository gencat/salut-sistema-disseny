import{j as e,M as n}from"./blocks-CmUYoZh4.js";import{useMDXComponents as r}from"./index-DZthTCuD.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DHQWIC1_.js";function t(s){const a={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Documentació/Changelog v3/Breaking changes/7) Refactor Searchbar"}),`
`,e.jsx(a.h2,{id:"migració-v3-refactorització-del-component-dss-searchbar",children:"Migració v3: Refactorització del component dss-searchbar"}),`
`,e.jsx("br",{}),`
`,e.jsx(a.p,{children:"S'ha refactoritzat el component per habilitar nous casos d'ús."}),`
`,e.jsx(a.h3,{id:"nou-variant-cerques-recents",children:"Nou variant: cerques recents"}),`
`,e.jsx(a.p,{children:`La versió bàsica es manté tal com funcionava fins ara, mentre que a la variant amb text predictiu
s'han introduït els canvis següents:`}),`
`,e.jsxs(a.p,{children:["La propietat ",e.jsx(a.code,{children:"recentSearches"}),` deixa de ser un valor booleà que activava o desactivava el títol per
utilitzar el catàleg com una llista de cerques recents, i passa a ser un nou array de `,e.jsx(a.code,{children:"CatalogOption"}),`,
que permet mostrar al desplegable dues llistes predictives alhora: tant les cerques recents com el catàleg
de termes.`]}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"/docs/components-searchbar--docs#searchbar-predictiva-cerques-recents",children:e.jsx(a.strong,{children:"Veure nou variant cerques recents"})})}),`
`,e.jsx(a.h3,{id:"habilitar-la-gestió-externa-dels-catàlegs",children:"Habilitar la gestió externa dels catàlegs"}),`
`,e.jsxs(a.p,{children:["La nova propietat ",e.jsx(a.code,{children:"serverSideFilter"}),` desactiva els filtres interns que el component aplica sobre el
catàleg de termes, de manera que sigui la iniciativa qui controli completament la gestió i el filtratge
del catàleg o de les cerques recents.`]}),`
`,e.jsx(a.h3,{id:"nova-lògica-per-mostrar-el-desplegable",children:"Nova lògica per mostrar el desplegable"}),`
`,e.jsx(a.p,{children:`Quan s'habilita la llista de cerques recents, el desplegable es mostrarà en fer focus sobre l'input,
mostrant un màxim de 8 resultats. En el cas del catàleg de termes, es manté el funcionament actual,
mostrant el desplegable quan s'introdueixi el nombre de caràcters definit al threshold.`}),`
`,e.jsx(a.h3,{id:"gestió-de-labels",children:"Gestió de labels"}),`
`,e.jsx(a.p,{children:`S'han modificat i afegit les propietats necessàries per poder personalitzar els títols de cada secció
dins del desplegable (cerques recents / catàleg).`})]})}function p(s={}){const{wrapper:a}={...r(),...s.components};return a?e.jsx(a,{...s,children:e.jsx(t,{...s})}):t(s)}export{p as default};
