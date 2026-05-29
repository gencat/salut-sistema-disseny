import{j as e,M as l,T as o,C as i}from"./index-CsBN5yOs.js";import{useMDXComponents as t}from"./index-DHt3m49f.js";import{S as r,P as d,B as c,E as m,a as p}from"./header-menu-patient.stories-BdZqnPmZ.js";import"./iframe-CSr0S3c1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";function a(s){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .innerZoomElementWrapper {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 600px;
    }
  `}),`
`,e.jsx(l,{of:r}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(o,{}),e.jsx("component-title",{children:"dss-header-menu-patient"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#per-defecte",children:"Per defecte"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#extern-no-inclou-detalls-de-pacient",children:"Extern (no inclou detalls de pacient)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-professionals-assignats",children:"Amb professionals assignats"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"per-defecte",children:"Per defecte"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h4,{id:"extern-no-inclou-detalls-de-pacient",children:"Extern (no inclou detalls de pacient)"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h4,{id:"amb-professionals-assignats",children:"Amb professionals assignats"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"breaking-changes-v290",children:"Breaking changes v2.9.0"}),`
`,e.jsx(n.p,{children:`S’ha modificat el tipatge del camp assignments.up a un valor booleà, ja que el missatge és sempre el mateix, habilitant
les propietats upLabel i upMessage per si s’haguessin de modificar en algun moment.`}),`
`,e.jsx(n.h3,{id:"breaking-changes-v230",children:"Breaking changes v2.3.0"}),`
`,e.jsxs(n.p,{children:[`S'ha modificat el disseny del dropdown del component, eliminant l'action-menu que disposava els diferents elements amb el seu
esdeveniment associat `,e.jsx(n.code,{children:"onActionPatientClick"}),` i utilitzant en el seu lloc un contenidor per mostrar els diferents detalls del pacient i un botó que
llançarà un nou esdeveniment perquè la iniciativa gestioni com es mostren més detalls d'aquest, ja sigui a través d'un modal o
redirigint a una nova pàgina.`]}),`
`,e.jsx(n.p,{children:`Tots els camps mostrats en el component són opcionals, de manera que, si no es defineix un valor a través de la propietat
corresponent, es ocultaran.`})]})}function k(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{k as default};
