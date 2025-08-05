import{j as e,M as i,T as a,C as r}from"./index-Clk5vX7U.js";import{useMDXComponents as o}from"./index-DEUIWE5v.js";import{S as l,P as c}from"./header-menu-patient.stories-BtkA_o6q.js";import"./iframe-rOuWfouE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function s(t){const n={blockquote:"blockquote",code:"code",h3:"h3",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .innerZoomElementWrapper {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 300px;
    }
  `}),`
`,e.jsx(i,{of:l}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(a,{}),e.jsx("component-title",{children:"dss-header-menu-patient"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(r,{of:c}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"breaking-changes-v230",children:"Breaking changes v2.3.0"}),`
`,e.jsxs(n.p,{children:[`S'ha modificat el disseny del dropdown del component, eliminant l'action-menu que disposava els diferents elements amb el seu
esdeveniment associat `,e.jsx(n.code,{children:"onActionPatientClick"}),` i utilitzant en el seu lloc un contenidor per mostrar els diferents detalls del pacient i un botó que
llançarà un nou esdeveniment perquè la iniciativa gestioni com es mostren més detalls d'aquest, ja sigui a través d'un modal o
redirigint a una nova pàgina.`]}),`
`,e.jsx(n.p,{children:`Tots els camps mostrats en el component són opcionals, de manera que, si no es defineix un valor a través de la propietat
corresponent, es ocultaran.`})]})}function v(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{v as default};
