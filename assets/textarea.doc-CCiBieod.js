import{j as e,M as l,T as c,C as i}from"./blocks-CmUYoZh4.js";import{useMDXComponents as s}from"./index-DZthTCuD.js";import{S as o,P as d,a as t,I as h,D as x,R as m,b as p,c as j,d as u,e as f,C as b,H as g,F as q}from"./textarea.stories-DYX8YfO3.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DHQWIC1_.js";import"./storybook-decorators-DSS85Rnr.js";function a(r){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(c,{}),e.jsx("component-title",{children:"dss-textarea"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és l'exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx("br",{}),`
`,e.jsx("h3",{children:"Índex"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#mida",children:"Mida"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-icona",children:"Amb icona"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#nom%C3%A9s-lectura",children:"Només lectura"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#requerit",children:"Requerit"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#invalid",children:"Invalid"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-descripci%C3%B3",children:"Amb descripció"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-placeholder",children:"Amb placeholder"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-comptador",children:"Amb comptador"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#configuraci%C3%B3-de-lal%C3%A7ada",children:"Configuració de l'alçada"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#focus-manual",children:"Focus manual"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"mida",children:"Mida"}),`
`,e.jsxs(n.p,{children:[`Les mides inicials són sm, md o lg, sent lg la mida per defecte si no se'n defineix cap. En el cas del textarea,
també tenim l'opció de definir una mida vertical amb el nombre de files que volem mostrar per defecte.
Per defecte, sempre posarem `,e.jsx(n.code,{children:'rows="1"'}),"."]}),`
`,e.jsx(i,{of:t}),`
`,e.jsx(n.h3,{id:"amb-icona",children:"Amb icona"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"deshabilitat",children:"Deshabilitat"}),`
`,e.jsxs(n.p,{children:[`Per indicar que l'input es troba deshabilitat, cal afegir la propietat
`,e.jsx(n.strong,{children:"disabled"})," a l'input o textarea."]}),`
`,e.jsx("br",{}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"només-lectura",children:"Només lectura"}),`
`,e.jsxs(n.p,{children:["Per indicar que l'input o textarea es troba només lectura, cal afegir la propietat ",e.jsx(n.strong,{children:"readOnly"})," a l'element."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"requerit",children:"Requerit"}),`
`,e.jsxs(n.p,{children:["Per indicar que l'input és obligatori, cal afegir la propietat ",e.jsx(n.strong,{children:"required"})," a l'input."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsxs(n.p,{children:["Per indicar que l'input és invalid, cal afegir la propietat ",e.jsx(n.strong,{children:"showError"})," al component amb la validació que sigui necessària."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h3,{id:"amb-descripció",children:"Amb descripció"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"amb-placeholder",children:"Amb placeholder"}),`
`,e.jsxs(n.p,{children:["Per mostrar el placeholder cal indicar la propietat ",e.jsx(n.strong,{children:"placeholder"}),"."]}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(n.h3,{id:"amb-comptador",children:"Amb comptador"}),`
`,e.jsxs(n.p,{children:["Per mostrar el comptador de carters cal indicar la propietat ",e.jsx(n.strong,{children:"maxLength"}),"."]}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(n.h3,{id:"configuració-de-lalçada",children:"Configuració de l'alçada"}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h3,{id:"focus-manual",children:"Focus manual"}),`
`,e.jsxs(n.p,{children:[`S'ha habilitat el mètode focus(options), que permet passar també les opcions del mètode natiu
`,e.jsx(n.a,{href:"https://www.w3api.com/HTMLDOM/HTMLElement/focus/#par%C3%A1metros",rel:"nofollow",children:"HTMLElement.focus()"}),"."]}),`
`,e.jsx(n.p,{children:`Aquest mètode força el focus sobre l'input intern per corregir problemes
amb la propietat autofocus en entorns complexos.`}),`
`,e.jsx(i,{of:q}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`const forceFocus = () => {
  const element = document.querySelector('#manual-focus-demo');
  if (element) {
    (element as HTMLElement).focus(); // Textarea | HTMLElement | any
  }
}
`})})]})}function w(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{w as default};
