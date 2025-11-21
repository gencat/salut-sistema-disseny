import{j as e,M as i,T as o,C as t}from"./index-CXNEF6Ou.js";import{useMDXComponents as r}from"./index-eHRSTGpG.js";import{S as c,P as l,a as d,M as u,L as h,b as p,c as m,d as x,e as j,f}from"./input-switch.stories-zc_UFLzZ.js";import"./iframe-CIo2Z1b8.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";function a(s){const n={a:"a",blockquote:"blockquote",h3:"h3",p:"p",strong:"strong",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .innerZoomElementWrapper #root-inner {
      display: flex;
      gap: 24px;  
    }
  `}),`
`,e.jsx(i,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(o,{}),e.jsx("component-title",{children:"dss-input-switch"})]}),`
`,e.jsx("br",{}),`
`,e.jsx("dss-alert",{fullWidth:!0,state:"warning",size:"md",message:"Aquest component es mantindrà només per a les iniciatives que continuïn utilitzant Angular Reactive Forms; en cas contrari, si us plau, feu servir el nou component dss-form-toggle."}),`
`,e.jsxs(n.p,{children:["Veure nou component: ",e.jsx(n.a,{href:"/docs/components-form-toggle--docs",children:e.jsx(n.strong,{children:"Form: Toggle"})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(t,{of:l}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsx("h5",{children:"Switch petit"}),`
`,e.jsx(t,{of:d}),`
`,e.jsx("h5",{children:"Switch mitjà"}),`
`,e.jsx(t,{of:u}),`
`,e.jsx("h5",{children:"Switch gran"}),`
`,e.jsx(t,{of:h}),`
`,e.jsx("h3",{children:"Switch amb Label"}),`
`,e.jsx("h5",{children:"Switch petit"}),`
`,e.jsx(t,{of:p}),`
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
`,e.jsx(t,{of:f}),`
`,e.jsx(n.p,{children:"Nota: en cas que s'utilitzi la propietat checked, el valor definit prevaldrà sobre l'atribut checked de l'input, per la qual cosa es recomana no barrejar ambdues opcions."})]})}function M(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{M as default};
