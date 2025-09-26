import{j as e,M as t,T as l,C as i,S as d}from"./index-BY7F2io9.js";import{useMDXComponents as s}from"./index-Bfc6lsx-.js";import{S as o,P as c,a as p,D as u,R as m,b as h,I as x,T as j,V as f}from"./datepicker.stories-DMRTVqpT.js";import"./iframe-ni553lxn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-element-BL4lq474.js";import"./lit-html-D6cejpwM.js";function r(n){const a={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
   .datepicker-canvas {
      min-height: 350px;
      display: flex;
      justify-content: flex-start;
    }

    .datepicker-canvas--temps {
      min-height: 700px;
    }

    .datepicker-canvas--botons {
      min-height: 420px;
    }

    dss-datepicker + dss-datepicker {
      margin-left: 20px;
    }
  `}),`
`,e.jsx(t,{of:o}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("component-title",{children:"dss-datepicker"})]}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#mida",children:"Mida"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#nom%C3%A9s-lectura",children:"Només lectura"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#requerit",children:"Requerit"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#invalid",children:"Invalid"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-temps",children:"Amb temps"})}),`
`]}),`
`,`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-validaci%C3%B3",children:"Amb validació"})}),`
`]}),`
`,e.jsx(a.h3,{id:"mida",children:"Mida"}),`
`,e.jsxs(a.p,{children:[`Hi ha dos tipus de mesura, el mitjà i el petit, per defecte es mostra el
mitjà, si volem mostrar el petit hem d'afegir la propietat `,e.jsx(a.strong,{children:"small"}),` al
component.`]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(a.h3,{id:"deshabilitat",children:"Deshabilitat"}),`
`,e.jsxs(a.p,{children:[`Per indicar que l'input es troba deshabilitat, cal afegir la propietat
`,e.jsx(a.strong,{children:"disabled"})," al component."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(a.h3,{id:"només-lectura",children:"Només lectura"}),`
`,e.jsxs(a.p,{children:[`Per indicar que l'input es troba només lectura, cal afegir la propietat
`,e.jsx(a.strong,{children:"readonly"})," al component."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(a.h3,{id:"requerit",children:"Requerit"}),`
`,e.jsxs(a.p,{children:["Per indicar que l'input és obligatori, cal afegir la propietat ",e.jsx(a.strong,{children:"required"}),` a
l'input.`]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(a.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsxs(a.p,{children:["Per indicar que l'input és invalid, cal afegir la propietat ",e.jsx(a.strong,{children:"invalid"}),` al
component amb la validació que sigui necessària.`]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(a.h3,{id:"amb-temps",children:"Amb temps"}),`
`,e.jsxs(a.p,{children:["Per indicar que el date-picker mostri temps, cal afegir la propietat ",e.jsx(a.strong,{children:"showTime"})," al component."]}),`
`,e.jsx(a.p,{children:"Pots escollir entre tres tipus de timepicker: sense dropdown (per defecte, no cal definir-ho), dropdown de tipus llista (timepicker='list') o dropdown de tipus manual (timepicker='manual')."}),`
`,e.jsx(a.p,{children:"A més es pot configurar el timepicker utilitzant les propietats pròpies del component: minutesRange, minHour, MaxHour i customTimeListOptions."}),`
`,e.jsxs(a.p,{children:["Veure ",e.jsx(a.a,{href:"/docs/components-timepicker--exemple",children:"documentació del componente timepicker"}),"."]}),`
`,e.jsx(i,{of:j}),`
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
`,e.jsx(i,{of:f}),`
`,`
`,e.jsx(a.h2,{id:"resolució-de-problemes",children:"Resolució de problemes"}),`
`,e.jsx(a.h3,{id:"el-valor-del-datepicker-no-sactualitza-en-angular-form",children:"El valor del datepicker no s'actualitza en Angular Form"}),`
`,e.jsx(a.p,{children:e.jsx(a.strong,{children:"Problema:"})}),`
`,e.jsxs(a.p,{children:[`S'ha afegit la funcionalitat per a poder detectar aquest component des de formularis reactius, no obstant això, s'ha detectat que quan l'usuari tria una data
fent clic en el calendari no s'actualitza el valor dins del form control per al camp de data.`,e.jsx("br",{})]}),`
`,e.jsx(a.p,{children:e.jsx(a.strong,{children:"Solució:"})}),`
`,e.jsxs(a.p,{children:["Es recomana capturar la data triada des del calendari mitjançant l'esdeveniment 'onValueChange' emès en el component ",e.jsx(a.code,{children:"dss-date-picker"}),` i posteriorment
utilitzar el mètode `,e.jsx(a.code,{children:"setValue"})," per a assignar el valor manualment al camp de data."]}),`
`,e.jsx(a.h3,{id:"label-i-input-solapats-en-assignar-un-valor-en-els-formularis-reactius-dangular",children:"Label i input solapats en assignar un valor en els formularis reactius d'Angular."}),`
`,e.jsx(a.p,{children:e.jsx(a.strong,{children:"Problema:"})}),`
`,e.jsx(a.p,{children:`S'ha detectat un problema en utilitzar el component en formularis reactius d'Angular, on, en actualitzar el component des d'Angular,
el DOM no s'actualitza directament, de manera que l'observador intern de l'input, que refresca la posició de la label quan s'afegeix un nou valor,
no s'està executant.`}),`
`,e.jsx(a.p,{children:e.jsx(a.strong,{children:"Solució:"})}),`
`,e.jsx(a.p,{children:`Utilitzeu la nova propietat value, que actua com un listener per detectar directament quan s'ha modificat el valor i així restablir la posició dels
elements del component. Per evitar afegir complexitat a les iniciatives, el valor es pot capturar directament des del mateix formulari reactiu de la
manera següent:`}),`
`,e.jsx(d,{code:`
  <dss-datepicker 
    [value]="myForm.get('date')?.value"
    (onValueChange)="onDatepickerChange($event)">
    <label slot="label" for="myDatepicker">Datepicker</label>
    <input slot="input" id="myDatepicker" type="text" formControlName="date"/>
  </dss-datepicker>
`})]})}function C(n={}){const{wrapper:a}={...s(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(r,{...n})}):r(n)}export{C as default};
