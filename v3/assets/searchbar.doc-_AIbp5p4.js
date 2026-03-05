import{j as e,M as s,T as t,C as i}from"./blocks-BQe3t3mS.js";import{useMDXComponents as r}from"./index-D25yCQlW.js";import{S as c,P as d,a as o,M as h,b as p,R as u,c as m,D as x,L as j,d as f,e as g,C as b,A as q}from"./searchbar.stories-BqF2q2AM.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CdZ_4rdx.js";import"./storybook-decorators-DSS85Rnr.js";function l(n){const a={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(t,{}),e.jsx("component-title",{children:"dss-searchbar"})]}),`
`,e.jsx("br",{}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(a.p,{children:`El cercador és un component que pot utilitzar-se tant per a realitzar filtres en el contingut
d'una pàgina com per a navegar dins de la mateixa en funció de la cerca. Sí el catàleg de termes o cerques
recents està definit, el component mostrarà un desplegable amb suggerències quan l'usuari escriu a l'input.`}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#simple",children:"Simple"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#m%C3%BAltiple",children:"Múltiple"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#mides",children:"Mides"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#requerit",children:"Requerit"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#nom%C3%A9s-lectura",children:"Només lectura"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#%C3%BAltimes-cerques",children:"Últimes cerques"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-cerca-predefinida",children:"Amb cerca predefinida"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#cat%C3%A0leg-carregant",children:"Catàleg carregant"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#modificar-l%E2%80%99estil-del-desplegable",children:"Modificar l’estil del desplegable"})}),`
`]}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"Cerca per diagnostics, settings o home per habilitar el cercador predictiu."}),`
`]}),`
`,e.jsx(a.h3,{id:"simple",children:"Simple"}),`
`,e.jsx(a.p,{children:`Permet realitzar una cerca escrivint el text en l’input, executant un esdeveniment per activar-la
quan es prem la tecla Enter. Si l’usuari fa clic en un dels resultats predictius, s’assignarà com
a valor de l'input i s’iniciarà la cerca.`}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(a.h3,{id:"múltiple",children:"Múltiple"}),`
`,e.jsx(a.p,{children:`Permet seleccionar diferents termes de cerca al mateix temps. Ja sigui escrivint a l’input i separant-los amb una coma per
tal d’afegir-los o bé fent clic en els resultats predictius. Cada cop que s’afegeixi un nou terme es llençarà un esdeveniment de cerca.`}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(a.h3,{id:"mides",children:"Mides"}),`
`,e.jsx(a.p,{children:"Utilitzarem la mida (md | lg)."}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(a.h3,{id:"requerit",children:"Requerit"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(a.h3,{id:"només-lectura",children:"Només lectura"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(a.h3,{id:"deshabilitat",children:"Deshabilitat"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(a.h3,{id:"últimes-cerques",children:"Últimes cerques"}),`
`,e.jsxs(a.p,{children:[`Aquesta variant permet afegir un títol al contenidor del catàleg simulant un llistat de cerques recents.
Per al llistat de cerca s’utilitzarà la mateixa propietat `,e.jsx(a.code,{children:"catalog=[...]"})," i ",e.jsx(a.code,{children:"recentsearches={true}"}),"."]}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"Cerca per last, o term  per habilitar el cercador predictiu."}),`
`]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(a.h3,{id:"amb-cerca-predefinida",children:"Amb cerca predefinida"}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(a.h3,{id:"catàleg-carregant",children:"Catàleg carregant"}),`
`,e.jsx(a.p,{children:"El component permet dos estats de càrrega:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["La propietat catalog encara no s'ha inicialitzat perquè s'està esperant la resposta del backend mentre es renderitza el component: ",e.jsx(a.code,{children:"catalog=[]"})," i ",e.jsx(a.code,{children:"isCatalogLoading=true"})]}),`
`,e.jsxs(a.li,{children:["La propietat catalog que retorna el backend pot tenir molts resultats i necessitem fer un filtre des de la iniciativa cada vegada que s’escriu al component per reinicialitzar els valors del catàleg: ",e.jsx(a.code,{children:"catalog=currentCatalog"})," (on currentCatalog.length > 0) i ",e.jsx(a.code,{children:"isCatalogLoading=true"})]}),`
`]}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(a.h3,{id:"modificar-lestil-del-desplegable",children:"Modificar l’estil del desplegable."}),`
`,e.jsx(a.p,{children:"Existeixen dues propietats que sobreescriuen l’estil per defecte del desplegable del component:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"dropdownStyle"})," afecta el posicionament del desplegable; es gestiona internament i es recomana no modificar-ne el valor si no hi ha problemes de visualització."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"catalogStyle"})," afecta el contenidor de les opcions del catàleg; es pot utilitzar, per exemple, per limitar l’alçada màxima d’aquest contenidor i aplicar-hi un desplaçament intern (scroll) quan hi ha molts elements."]}),`
`]}),`
`,e.jsx(i,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h3,{id:"filtre-avançat",children:"Filtre avançat"}),`
`,e.jsx(a.p,{children:`Nova cerca avançada que s’activa amb la propietat advancedFilter.
La propietat threshold s’aplica de manera individual a cada terme, de manera que si per defecte tenim un llindar de 3,
la cerca "diag cri" aplicarà tots dos termes, però la cerca "diag cr" només aplicarà el terme "diag".`}),`
`,e.jsx(i,{of:q})]})}function k(n={}){const{wrapper:a}={...r(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(l,{...n})}):l(n)}export{k as default};
