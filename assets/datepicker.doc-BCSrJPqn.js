import{j as e,M as t,T as l,C as i}from"./blocks-DZ0INpLb.js";import{useMDXComponents as r}from"./index-DiJh3frP.js";import{S as o,P as c,a as d,D as p,R as m,b as h,I as u,T as x,V as j,C as f,c as b,F as g}from"./datepicker.stories-Bc73avYv.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D7EeAtJA.js";import"./storybook-decorators-DSS85Rnr.js";function s(n){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:o}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("component-title",{children:"dss-datepicker"})]}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#mida",children:"Mida"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#nom%C3%A9s-lectura",children:"Només lectura"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#requerit",children:"Requerit"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#invalid",children:"Invalid"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-temps",children:"Amb temps"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-validaci%C3%B3",children:"Amb validació"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-calendari-customitzat",children:"Amb calendari customitzat"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-stepper",children:"Amb stepper"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#focus-manual",children:"Focus manual"})}),`
`]}),`
`,e.jsx(a.h3,{id:"mida",children:"Mida"}),`
`,e.jsxs(a.p,{children:[`Hi ha dos tipus de mesura, el mitjà i el petit, per defecte es mostra el
mitjà, si volem mostrar el petit hem d'afegir la propietat `,e.jsx(a.strong,{children:"small"}),` al
component.`]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(a.h3,{id:"deshabilitat",children:"Deshabilitat"}),`
`,e.jsxs(a.p,{children:[`Per indicar que l'input es troba deshabilitat, cal afegir la propietat
`,e.jsx(a.strong,{children:"disabled"})," al component."]}),`
`,e.jsx(i,{of:p}),`
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
`,e.jsx(i,{of:u}),`
`,e.jsx(a.h3,{id:"amb-temps",children:"Amb temps"}),`
`,e.jsxs(a.p,{children:["Per indicar que el date-picker mostri temps, cal afegir la propietat ",e.jsx(a.strong,{children:"showTime"})," al component."]}),`
`,e.jsx(a.p,{children:"Pots escollir entre tres tipus de timepicker: sense dropdown (per defecte, no cal definir-ho), dropdown de tipus llista (timepicker='list') o dropdown de tipus manual (timepicker='manual')."}),`
`,e.jsx(a.p,{children:"A més es pot configurar el timepicker utilitzant les propietats pròpies del component: minutesRange, minHour, MaxHour i customTimeListOptions."}),`
`,e.jsxs(a.p,{children:["Veure ",e.jsx(a.a,{href:"/docs/components-timepicker--exemple",children:"documentació del componente timepicker"}),"."]}),`
`,e.jsx(i,{of:x}),`
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
`,e.jsx(i,{of:j}),`
`,e.jsx(a.h3,{id:"amb-calendari-customitzat",children:"Amb calendari customitzat"}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(a.h3,{id:"amb-stepper",children:"Amb stepper"}),`
`,e.jsx(a.p,{children:"En activar el mode stepper, es deshabilita automàticament el botó per netejar la data seleccionada."}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(a.h3,{id:"focus-manual",children:"Focus manual"}),`
`,e.jsxs(a.p,{children:[`S'ha habilitat el mètode focus(options), que permet passar també les opcions del mètode natiu
`,e.jsx(a.a,{href:"https://www.w3api.com/HTMLDOM/HTMLElement/focus/#par%C3%A1metros",rel:"nofollow",children:"HTMLElement.focus()"}),"."]}),`
`,e.jsx(a.p,{children:`Aquest mètode força el focus sobre l'input intern per corregir problemes
amb la propietat autofocus en entorns complexos.`}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{children:`const forceFocus = () => {
  const element = document.querySelector('#manual-focus-demo');
  if (element) {
    (element as HTMLElement).focus(); // FormDatepicker | HTMLElement | any
  }
}
`})})]})}function C(n={}){const{wrapper:a}={...r(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(s,{...n})}):s(n)}export{C as default};
