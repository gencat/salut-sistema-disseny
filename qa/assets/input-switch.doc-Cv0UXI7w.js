import{j as e,M as r,T as o,C as t}from"./index-C6REoxga.js";import{useMDXComponents as i}from"./index-Bcw9cYpG.js";import{S as c,P as l,a as d,M as h,L as p,b as u,c as m,d as x,e as j,f as b}from"./input-switch.stories-zc_UFLzZ.js";import"./iframe-DwujomfX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";function s(a){const n={blockquote:"blockquote",h3:"h3",p:"p",strong:"strong",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .innerZoomElementWrapper #root-inner {
      display: flex;
      gap: 24px;  
    }
  `}),`
`,e.jsx(r,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(o,{}),e.jsx("component-title",{children:"dss-input-switch"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(t,{of:l}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsx("h5",{children:"Switch petit"}),`
`,e.jsx(t,{of:d}),`
`,e.jsx("h5",{children:"Switch mitjà"}),`
`,e.jsx(t,{of:h}),`
`,e.jsx("h5",{children:"Switch gran"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx("h3",{children:"Switch amb Label"}),`
`,e.jsx("h5",{children:"Switch petit"}),`
`,e.jsx(t,{of:u}),`
`,e.jsx("h5",{children:"Switch mitjà"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx("h5",{children:"Switch gran"}),`
`,e.jsx(t,{of:x}),`
`,e.jsx("h3",{children:"Switch seleccionat"}),`
`,e.jsx(n.p,{children:"Actualmente hay dos formas de marcar el input switch como seleccionado:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"1: Utilitzant l'atribut checked del propi input"}),", que s'ha de gestionar amb funcions de JavaScript natives, com ara setAttribute('checked', 'true') o removeAttribute('checked')."]}),`
`,e.jsx(n.p,{children:"Aquest atribut no es pot manipular a través de variables d'Angular a causa de la manera en què Angular entén que 'checked' no és un atribut, sinó una propietat de l'element, fet que provoca que l'observador intern de Lit no detecti el canvi."}),`
`,e.jsx(t,{of:j}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"2: Utilitzant la propietat checked del component"}),", la qual sí que es pot manipular a través de variables d'Angular."]}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(n.p,{children:"Nota: en cas que s'utilitzi la propietat checked, el valor definit prevaldrà sobre l'atribut checked de l'input, per la qual cosa es recomana no barrejar ambdues opcions."})]})}function A(a={}){const{wrapper:n}={...i(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(s,{...a})}):s(a)}export{A as default};
