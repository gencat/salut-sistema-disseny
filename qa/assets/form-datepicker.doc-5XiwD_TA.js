import{j as e,M as t,T as l,C as a}from"./index-Q9ZcdDX_.js";import{useMDXComponents as r}from"./index-BOjpbkyY.js";import{S as d,P as o,a as c,D as p,R as h,b as m,I as x,T as u,V as j}from"./form-datepicker.stories-BuMWZlxG.js";import"./iframe-CUtb2GDb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-element-BL4lq474.js";import"./lit-html-D6cejpwM.js";import"./storybook-decorators-DSS85Rnr.js";function s(n){const i={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("component-title",{children:"dss-form-datepicker"})]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(a,{of:o}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#mida",children:"Mida"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#nom%C3%A9s-lectura",children:"Només lectura"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#requerit",children:"Requerit"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#invalid",children:"Invalid"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#amb-temps",children:"Amb temps"})}),`
`]}),`
`,`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#amb-validaci%C3%B3",children:"Amb validació"})}),`
`]}),`
`,e.jsx(i.h3,{id:"mida",children:"Mida"}),`
`,e.jsxs(i.p,{children:[`Hi ha dos tipus de mesura, el mitjà i el petit, per defecte es mostra el
mitjà, si volem mostrar el petit hem d'afegir la propietat `,e.jsx(i.strong,{children:"small"}),` al
component.`]}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(i.h3,{id:"deshabilitat",children:"Deshabilitat"}),`
`,e.jsxs(i.p,{children:[`Per indicar que l'input es troba deshabilitat, cal afegir la propietat
`,e.jsx(i.strong,{children:"disabled"})," al component."]}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(i.h3,{id:"només-lectura",children:"Només lectura"}),`
`,e.jsxs(i.p,{children:[`Per indicar que l'input es troba només lectura, cal afegir la propietat
`,e.jsx(i.strong,{children:"readonly"})," al component."]}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(i.h3,{id:"requerit",children:"Requerit"}),`
`,e.jsxs(i.p,{children:["Per indicar que l'input és obligatori, cal afegir la propietat ",e.jsx(i.strong,{children:"required"}),` a
l'input.`]}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(i.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsxs(i.p,{children:["Per indicar que l'input és invalid, cal afegir la propietat ",e.jsx(i.strong,{children:"invalid"}),` al
component amb la validació que sigui necessària.`]}),`
`,e.jsx(a,{of:x}),`
`,e.jsx(i.h3,{id:"amb-temps",children:"Amb temps"}),`
`,e.jsxs(i.p,{children:["Per indicar que el date-picker mostri temps, cal afegir la propietat ",e.jsx(i.strong,{children:"showTime"})," al component."]}),`
`,e.jsx(i.p,{children:"Pots escollir entre tres tipus de timepicker: sense dropdown (per defecte, no cal definir-ho), dropdown de tipus llista (timepicker='list') o dropdown de tipus manual (timepicker='manual')."}),`
`,e.jsx(i.p,{children:"A més es pot configurar el timepicker utilitzant les propietats pròpies del component: minutesRange, minHour, MaxHour i customTimeListOptions."}),`
`,e.jsxs(i.p,{children:["Veure ",e.jsx(i.a,{href:"/docs/components-timepicker--exemple",children:"documentació del componente timepicker"}),"."]}),`
`,e.jsx(a,{of:u}),`
`,`
`,e.jsx(i.h3,{id:"amb-validació",children:"Amb validació"}),`
`,e.jsxs(i.p,{children:["La validació interna de la data s’activa afegint la propietat ",e.jsx(i.code,{children:"validate"}),`. Aquesta funcionalitat s’activa en tancar el calendari, ja sigui perquè s’ha fet clic en una
data del mateix o bé perquè s’ha introduït una data amb el teclat i s’ha tancat el calendari sense seleccionar manualment la data
(prement intro, escape o fent clic fora del calendari).`]}),`
`,e.jsx(i.p,{children:"Les validacions incloses són:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"El format de la data és correcte MM/DD/AAAA"}),`
`,e.jsxs(i.li,{children:["Si s’ha definit un ",e.jsx(i.code,{children:"minDate"}),", la data ha de ser igual o superior a la especificada"]}),`
`,e.jsxs(i.li,{children:["Si s’ha definit un ",e.jsx(i.code,{children:"maxDate"}),", la data ha de ser igual o inferior a la especificada"]}),`
`]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"Nota: la validació sobreescriu el valor del helpText amb missatges d’error. Tingues-ho en compte a l’hora de maquetar el formulari, ja que en cas d’intentar alinear-los horitzontalment pot generar desajustos si per defecte no existeix un helpText. Aquests missatges es poden, al seu torn, definir a través de les propietats: errorMessageFormat, errorMessageMinDate, errorMessageMaxDate"}),`
`]}),`
`,e.jsx(a,{of:j}),`
`]})}function C(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{C as default};
