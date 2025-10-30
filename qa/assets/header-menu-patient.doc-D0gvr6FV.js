import{j as e,M as a,T as o,C as r}from"./index-CRXZcEuw.js";import{useMDXComponents as i}from"./index-DfI6Iev8.js";import{S as l,P as c}from"./header-menu-patient.stories-SRFlRP6h.js";import"./iframe-nUu_t3LE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";function t(s){const n={blockquote:"blockquote",code:"code",h3:"h3",p:"p",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .innerZoomElementWrapper {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 600px;
    }
  `}),`
`,e.jsx(a,{of:l}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(o,{}),e.jsx("component-title",{children:"dss-header-menu-patient"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(r,{of:c}),`
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
corresponent, es ocultaran.`})]})}function v(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{v as default};
