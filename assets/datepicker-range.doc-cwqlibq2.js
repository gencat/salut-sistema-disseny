import{j as a,M as t,T as r,C as i}from"./index-CsBN5yOs.js";import{useMDXComponents as l}from"./index-DHt3m49f.js";import{S as d,P as c,a as o,b as u,c as h,D as j,R as m,d as x,I as p,B as f,C as b,V as g}from"./datepicker-range.stories-CmeHN-Am.js";import"./iframe-CSr0S3c1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";import"./storybook-decorators-DSS85Rnr.js";function s(n){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...n.components};return a.jsxs(a.Fragment,{children:[a.jsx(t,{of:d}),`
`,a.jsxs("div",{className:"dss-sb-title",children:[a.jsx(r,{}),a.jsx("component-title",{children:"dss-datepicker-range"})]}),`
`,a.jsxs(e.blockquote,{children:[`
`,a.jsx(e.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,a.jsx(i,{of:c}),`
`,a.jsx(e.p,{children:a.jsx(e.strong,{children:"Funcionalitat del calendari per defecte:"})}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsx(e.li,{children:`En seleccionar una data el component comprova si la data d' inici ja ha estat seleccionada, si no és així, se selecciona la
data escollida com a data d' inici i es passa el focus a la data final.`}),`
`,a.jsx(e.li,{children:"En estar la data inicial ja seleccionada, quan se seleeciona la següent data, el component valida si és major que la inicial."}),`
`,a.jsx(e.li,{children:"En cas que la data final seleccionada sigui menor que la data inicial el component resetejarà llavors la data inicial havent de triar de nou la data final."}),`
`]}),`
`,a.jsx(e.p,{children:a.jsx(e.strong,{children:"Funcionalitat del calendari quan ambdues dates ja han estat seleccionades:"})}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsx(e.li,{children:"El component tindrà en compte en què input, inici o fi, estem fent el focus per actualitzar la data corresponent."}),`
`,a.jsx(e.li,{children:"Si el focus està en la data d' inici s' actualitzarà l' esmentada data sempre que sigui menor que la data final."}),`
`,a.jsx(e.li,{children:"En cas que la nova data inicial sigui major que l' anterior data final, el component resetejarà la data final i s' haurà de triar de nou."}),`
`,a.jsx(e.li,{children:"Si el focus està en la data final s' actualitzarà l' esmentada data sempre que sigui major que la data inicial."}),`
`,a.jsx(e.li,{children:"En cas que aquesta data sigui menor que la data inicial, el component establirà la data escollida com la data inicial."}),`
`]}),`
`,a.jsx(e.p,{children:a.jsx(e.strong,{children:"Funcionalitat del calendari quan s' activen els botons:"})}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsx(e.li,{children:"Si cap data ha estat seleccionada funcionarà igual que en la versió sense botons, llevat que les dates no es guardaran fins que s' acceptin els canvis."}),`
`,a.jsx(e.li,{children:"Si ambdues dates estan ja seleccionades, en tornar a obrir el calendari es resetejaran les dates i s' hauran de tornar a elegir tant la data inicial com la final."}),`
`]}),`
`,a.jsx("h3",{children:"Variants"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsx(e.li,{children:a.jsx(e.a,{href:"#mida",children:"Mida"})}),`
`,a.jsx(e.li,{children:a.jsx(e.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,a.jsx(e.li,{children:a.jsx(e.a,{href:"#nom%C3%A9s-lectura",children:"Només lectura"})}),`
`,a.jsx(e.li,{children:a.jsx(e.a,{href:"#requerit",children:"Requerit"})}),`
`,a.jsx(e.li,{children:a.jsx(e.a,{href:"#invalid",children:"Invalid"})}),`
`,a.jsx(e.li,{children:a.jsx(e.a,{href:"#amb-botons",children:"Amb botons"})}),`
`,a.jsx(e.li,{children:a.jsx(e.a,{href:"#amb-calendari-customitzat",children:"Amb calendari customitzat"})}),`
`,a.jsx(e.li,{children:a.jsx(e.a,{href:"#amb-validaci%C3%B3",children:"Amb validació"})}),`
`]}),`
`,a.jsx(e.h3,{id:"mida",children:"Mida"}),`
`,a.jsxs(e.p,{children:[`Hi ha dos tipus de mesura, el mitjà i el petit, per defecte es mostra el
mitjà, si volem mostrar el petit hem d'afegir la propietat `,a.jsx(e.strong,{children:"inputSize"}),` al
component. Pot ser: 'sm' o 'md'.`]}),`
`,a.jsx(i,{of:o}),`
`,a.jsx(i,{of:u}),`
`,a.jsx(i,{of:h}),`
`,a.jsx(e.h3,{id:"deshabilitat",children:"Deshabilitat"}),`
`,a.jsxs(e.p,{children:["Per indicar que els inputs es troben deshabilitats cal afegir la propietat nativa ",a.jsx(e.strong,{children:"disabled"})," als propis inputs definits com a slot."]}),`
`,a.jsx(i,{of:j}),`
`,a.jsx(e.h3,{id:"només-lectura",children:"Només lectura"}),`
`,a.jsxs(e.p,{children:["De la mateixa manera per a l'estat de només lectura farem servir la propietat nativa de l'input ",a.jsx(e.strong,{children:"readonly"})]}),`
`,a.jsx(i,{of:m}),`
`,a.jsx(e.h3,{id:"requerit",children:"Requerit"}),`
`,a.jsxs(e.p,{children:["Per indicar que l'input és obligatori, cal afegir la propietat nativa ",a.jsx(e.strong,{children:"required"}),` a
l'input.`]}),`
`,a.jsx(i,{of:x}),`
`,a.jsx(e.blockquote,{children:`
`}),`
`,a.jsx(e.h3,{id:"invalid",children:"Invalid"}),`
`,a.jsxs(e.p,{children:["Per indicar que el component és invàlid, cal afegir la propietat ",a.jsx(e.strong,{children:"invalid"}),`.
Podeu utilitzar aquesta propietat si necessiteu realitzar validacions addicionals a les que inclogui el mateix component.`]}),`
`,a.jsx(i,{of:p}),`
`,a.jsx(e.h3,{id:"amb-botons",children:"Amb botons"}),`
`,a.jsxs(e.p,{children:[`Per indicar que el date-picker mostri botons, cal afegir la propietat
`,a.jsx(e.strong,{children:"showButtons"})," al component, també indicar el ",a.jsx(e.strong,{children:"calendarLeftLabel"}),` i el
`,a.jsx(e.strong,{children:"calendarRightLabel"}),` per canviar els valors per defecte dels botons si cal. Per
defecte, els botons mostren `,a.jsx(e.strong,{children:"Cancel·lar"})," i ",a.jsx(e.strong,{children:"Acceptar"}),"."]}),`
`,a.jsx(i,{of:f}),`
`,a.jsx(e.h3,{id:"amb-calendari-customitzat",children:"Amb calendari customitzat"}),`
`,a.jsx(i,{of:b}),`
`,a.jsx(e.h3,{id:"amb-validació",children:"Amb validació"}),`
`,a.jsxs(e.p,{children:["La validació interna de la data s’activa afegint la propietat ",a.jsx(e.code,{children:"validate"}),`. Aquesta funcionalitat s’activa en tancar el calendari, ja sigui perquè s’ha fet clic en una
data del mateix o bé perquè s’ha introduït una data amb el teclat i s’ha tancat el calendari sense seleccionar manualment la data
(prement intro, escape o fent clic fora del calendari).`]}),`
`,a.jsx(e.p,{children:"Les validacions incloses són:"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsx(e.li,{children:"El format de la data és correcte MM/DD/AAAA"}),`
`,a.jsxs(e.li,{children:["Si s’ha definit un ",a.jsx(e.code,{children:"minDate"}),", la data ha de ser igual o superior a la especificada"]}),`
`,a.jsxs(e.li,{children:["Si s’ha definit un ",a.jsx(e.code,{children:"maxDate"}),", la data ha de ser igual o inferior a la especificada"]}),`
`]}),`
`,a.jsxs(e.blockquote,{children:[`
`,a.jsx(e.p,{children:"Nota: la validació sobreescriu el valor del helpText amb missatges d’error. Tingues-ho en compte a l’hora de maquetar el formulari, ja que en cas d’intentar alinear-los horitzontalment pot generar desajustos si per defecte no existeix un helpText. Aquests missatges es poden, al seu torn, definir a través de les propietats: errorMessageFormat, errorMessageMinDate, errorMessageMaxDate"}),`
`]}),`
`,a.jsx(i,{of:g})]})}function k(n={}){const{wrapper:e}={...l(),...n.components};return e?a.jsx(e,{...n,children:a.jsx(s,{...n})}):s(n)}export{k as default};
