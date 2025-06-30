import{j as e,M as a,T as l,C as s,a as d}from"./index-DhUcFbDN.js";import{useMDXComponents as r}from"./index-BDVYwx0h.js";import{S as c,P as o,a as h,M as x,L as j,b as p,c as u,d as m,e as b,f as g}from"./input-switch.stories-CxZ5b5cj.js";import"./iframe-DOsF_W3z.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function i(t){const n={blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .innerZoomElementWrapper #root-inner {
      display: flex;
      gap: 24px;  
    }
  `}),`
`,e.jsx(a,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("dss-badge",{text:"dss-input-switch",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(n.p,{children:`Un Switch és un control que s'utilitza per canviar ràpidament entre dos estats
possibles. S'utilitzen habitualment per als estats "encès/apagat".`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"size"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'md'"}),e.jsx(n.td,{children:"Mida del component. Pot ser: sm, md o lg."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"checked"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Marca l'input com a seleccionat."})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onChangeValue"})}),e.jsx(n.td,{children:"Esdeveniment que retorna el valor de l'input en funció de si està seleccionat o no."})]})})]})}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsx("h5",{children:"Switch petit"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx("h5",{children:"Switch mitjà"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx("h5",{children:"Switch gran"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx("h3",{children:"Switch amb Label"}),`
`,e.jsx("h5",{children:"Switch petit"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx("h5",{children:"Switch mitjà"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx("h5",{children:"Switch gran"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx("h3",{children:"Switch seleccionat"}),`
`,e.jsx(n.p,{children:"Actualmente hay dos formas de marcar el input switch como seleccionado:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"1: Utilitzant l'atribut checked del propi input"}),", que s'ha de gestionar amb funcions de JavaScript natives, com ara setAttribute('checked', 'true') o removeAttribute('checked')."]}),`
`,e.jsx(n.p,{children:"Aquest atribut no es pot manipular a través de variables d'Angular a causa de la manera en què Angular entén que 'checked' no és un atribut, sinó una propietat de l'element, fet que provoca que l'observador intern de Lit no detecti el canvi."}),`
`,e.jsx(s,{of:b}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"2: Utilitzant la propietat checked del component"}),", la qual sí que es pot manipular a través de variables d'Angular."]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.p,{children:"Nota: en cas que s'utilitzi la propietat checked, el valor definit prevaldrà sobre l'atribut checked de l'input, per la qual cosa es recomana no barrejar ambdues opcions."}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Versió"}),e.jsx(n.th,{children:"Canvis"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.0"})}),e.jsx(n.td,{children:"Refactor v2."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.10.0"})}),e.jsx(n.td,{children:`S'ha afegit la propietat checked a nivell de component per solucionar els problemes amb la gestió que fa Angular de l'atribut checked natiu de l'input quan se li passa una variable [checked]="myVar".`})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.8.2"})}),e.jsx(n.td,{children:"S' ha creat una nova versió del component Switch, amb el nom Input Switch, que permet utilitzar el component anterior dins de formularis reactius d' Angular, seguint el mateix patró que en components prèviament adaptats, on input i label es defineixen a través de slots."})]})]})]})]})}function C(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{C as default};
