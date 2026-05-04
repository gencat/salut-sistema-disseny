import{j as e,M as i,T as o,C as r}from"./blocks-BkZO9fI4.js";import{useMDXComponents as t}from"./index-0zFPf0Xu.js";import{S as l,P as d}from"./header-menu-patient.stories-xM2N1Vkh.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DIl293iJ.js";function a(s){const n={blockquote:"blockquote",code:"code",h3:"h3",p:"p",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
  .innerZoomElementWrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 600px;
  }
`}),`
`,e.jsx(i,{of:l}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(o,{}),e.jsx("component-title",{children:"dss-header-menu-patient"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"breaking-changes-v300",children:"Breaking changes v3.0.0"}),`
`,e.jsx(n.p,{children:`Els botons de veure detalls i editar usuari shan transformat en enllaços amb les seves propietats href i target.
Per això els esdeveniments de botó onViewDetails i onEdit ja no són necessaris.`}),`
`,e.jsx(n.h3,{id:"breaking-changes-v290",children:"Breaking changes v2.9.0"}),`
`,e.jsx(n.p,{children:`S’ha modificat el tipatge del camp assignments.up a un valor booleà, ja que el missatge és sempre el mateix, habilitant
les propietats upLabel i upMessage per si s’haguessin de modificar en algun moment.`}),`
`,e.jsx(n.h3,{id:"breaking-changes-v230",children:"Breaking changes v2.3.0"}),`
`,e.jsxs(n.p,{children:[`S'ha modificat el disseny del dropdown del component, eliminant l'action-menu que disposava els diferents elements amb el seu
esdeveniment associat `,e.jsx(n.code,{children:"onActionPatientClick"}),` i utilitzant en el seu lloc un contenidor per mostrar els diferents detalls del pacient i un botó que
llançarà un nou esdeveniment perquè la iniciativa gestioni com es mostren més detalls d'aquest, ja sigui a través d'un modal o
redirigint a una nova pàgina.`]}),`
`,e.jsx(n.p,{children:`Tots els camps mostrats en el component són opcionals, de manera que, si no es defineix un valor a través de la propietat
corresponent, es ocultaran.`})]})}function g(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{g as default};
