import{j as e,M as t,T as r,C as i}from"./index-Clk5vX7U.js";import{useMDXComponents as l}from"./index-DEUIWE5v.js";import{S as d,P as c,a as o,b as h,c as u,D as x,R as j,d as p,I as m,B as f,V as g}from"./datepicker-range.stories-CqolsdRu.js";import"./iframe-rOuWfouE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function s(n){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
   .datepicker-canvas {
      min-height: 350px;
      display: flex;
      justify-content: flex-start;
    }
    dss-datepicker-range {
      height: fit-content;
    } 

    .datepicker-canvas--botons {
      min-height: 420px;
    }

    dss-datepicker + dss-datepicker {
      margin-left: 20px;
    }
  `}),`
`,e.jsx(t,{of:d}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(r,{}),e.jsx("component-title",{children:"dss-datepicker-range"})]}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(a.p,{children:e.jsx(a.strong,{children:"Funcionalitat del calendari per defecte:"})}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:`En seleccionar una data el component comprova si la data d' inici ja ha estat seleccionada, si no és així, se selecciona la
data escollida com a data d' inici i es passa el focus a la data final.`}),`
`,e.jsx(a.li,{children:"En estar la data inicial ja seleccionada, quan se seleeciona la següent data, el component valida si és major que la inicial."}),`
`,e.jsx(a.li,{children:"En cas que la data final seleccionada sigui menor que la data inicial el component resetejarà llavors la data inicial havent de triar de nou la data final."}),`
`]}),`
`,e.jsx(a.p,{children:e.jsx(a.strong,{children:"Funcionalitat del calendari quan ambdues dates ja han estat seleccionades:"})}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"El component tindrà en compte en què input, inici o fi, estem fent el focus per actualitzar la data corresponent."}),`
`,e.jsx(a.li,{children:"Si el focus està en la data d' inici s' actualitzarà l' esmentada data sempre que sigui menor que la data final."}),`
`,e.jsx(a.li,{children:"En cas que la nova data inicial sigui major que l' anterior data final, el component resetejarà la data final i s' haurà de triar de nou."}),`
`,e.jsx(a.li,{children:"Si el focus està en la data final s' actualitzarà l' esmentada data sempre que sigui major que la data inicial."}),`
`,e.jsx(a.li,{children:"En cas que aquesta data sigui menor que la data inicial, el component establirà la data escollida com la data inicial."}),`
`]}),`
`,e.jsx(a.p,{children:e.jsx(a.strong,{children:"Funcionalitat del calendari quan s' activen els botons:"})}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"Si cap data ha estat seleccionada funcionarà igual que en la versió sense botons, llevat que les dates no es guardaran fins que s' acceptin els canvis."}),`
`,e.jsx(a.li,{children:"Si ambdues dates estan ja seleccionades, en tornar a obrir el calendari es resetejaran les dates i s' hauran de tornar a elegir tant la data inicial com la final."}),`
`]}),`
`,e.jsx("h3",{children:"Variants"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#mida",children:"Mida"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#nom%C3%A9s-lectura",children:"Només lectura"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#requerit",children:"Requerit"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#invalid",children:"Invalid"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-botons",children:"Amb botons"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-validaci%C3%B3",children:"Amb validació"})}),`
`]}),`
`,e.jsx(a.h3,{id:"mida",children:"Mida"}),`
`,e.jsxs(a.p,{children:[`Hi ha dos tipus de mesura, el mitjà i el petit, per defecte es mostra el
mitjà, si volem mostrar el petit hem d'afegir la propietat `,e.jsx(a.strong,{children:"inputSize"}),` al
component. Pot ser: 'sm' o 'md'.`]}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(a.h3,{id:"deshabilitat",children:"Deshabilitat"}),`
`,e.jsxs(a.p,{children:["Per indicar que els inputs es troben deshabilitats cal afegir la propietat nativa ",e.jsx(a.strong,{children:"disabled"})," als propis inputs definits com a slot."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(a.h3,{id:"només-lectura",children:"Només lectura"}),`
`,e.jsxs(a.p,{children:["De la mateixa manera per a l'estat de només lectura farem servir la propietat nativa de l'input ",e.jsx(a.strong,{children:"readonly"})]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(a.h3,{id:"requerit",children:"Requerit"}),`
`,e.jsxs(a.p,{children:["Per indicar que l'input és obligatori, cal afegir la propietat nativa ",e.jsx(a.strong,{children:"required"}),` a
l'input.`]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(a.blockquote,{children:`
`}),`
`,e.jsx(a.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsxs(a.p,{children:["Per indicar que el component és invàlid, cal afegir la propietat ",e.jsx(a.strong,{children:"invalid"}),`.
Podeu utilitzar aquesta propietat si necessiteu realitzar validacions addicionals a les que inclogui el mateix component.`]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(a.h3,{id:"amb-botons",children:"Amb botons"}),`
`,e.jsxs(a.p,{children:[`Per indicar que el date-picker mostri botons, cal afegir la propietat
`,e.jsx(a.strong,{children:"showButtons"})," al component, també indicar el ",e.jsx(a.strong,{children:"calendarLeftLabel"}),` i el
`,e.jsx(a.strong,{children:"calendarRightLabel"}),` per canviar els valors per defecte dels botons si cal. Per
defecte, els botons mostren `,e.jsx(a.strong,{children:"Cancel·lar"})," i ",e.jsx(a.strong,{children:"Acceptar"}),"."]}),`
`,e.jsx(i,{of:f}),`
`,`
`,e.jsx(a.h3,{id:"amb-validació",children:"Amb validació"}),`
`,e.jsxs(a.p,{children:["La validació interna de la data s’activa afegint la propietat ",e.jsx(a.code,{children:"validate"}),`. Aquesta funcionalitat s’activa en tancar el calendari, ja sigui perquè s’ha fet clic en una
data del mateix o bé perquè s’ha introduït una data amb el teclat i s’ha tancat el calendari sense seleccionar manualment la data
(prement intro, escape o fent clic fora del calendari).`]}),`
`,e.jsx(a.p,{children:"Les validacions incloses són:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"El format de la data és correcte MM/DD/AAAA"}),`
`,e.jsxs(a.li,{children:["Si s’ha definit un ",e.jsx(a.code,{children:"minDate"}),", la data ha de ser igual o superior a la especificada"]}),`
`,e.jsxs(a.li,{children:["Si s’ha definit un ",e.jsx(a.code,{children:"maxDate"}),", la data ha de ser igual o inferior a la especificada"]}),`
`]}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"Nota: la validació sobreescriu el valor del helpText amb missatges d’error. Tingues-ho en compte a l’hora de maquetar el formulari, ja que en cas d’intentar alinear-los horitzontalment pot generar desajustos si per defecte no existeix un helpText. Aquests missatges es poden, al seu torn, definir a través de les propietats: errorMessageFormat, errorMessageMinDate, errorMessageMaxDate"}),`
`]}),`
`,e.jsx(i,{of:g})]})}function P(n={}){const{wrapper:a}={...l(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(s,{...n})}):s(n)}export{P as default};
