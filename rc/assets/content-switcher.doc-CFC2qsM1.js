import{ae as e,af as d,ag as a,ah as t,ak as l}from"./index-BwCk-pZ7.js";import{u as r}from"./index-Cy1XuORv.js";import{S as c,P as h,a as o,E as x,D as j,M as p}from"./content-switcher.stories-DgfjUAsB.js";import"./iframe-DMzjB3pt.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./lit-element-DhY7bShc.js";import"./lit-html-B2eaWknC.js";function i(n){const s={blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
      .wrapper {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;
      }
  `}),`
`,e.jsx(d,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(a,{}),e.jsx("dss-badge",{text:"dss-content-switcher",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:`Els Content Switchers permeten als usuaris canviar entre visualitzacions
alternatives de contingut similar o relacionat. Només es mostra una secció de
contingut alhora.`}),`
`,e.jsx("h3",{children:"Història d'exemple"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx("h3",{children:"Content Switcher"}),`
`,e.jsx(s.p,{children:"Utilitzarem la següent estructura per crear un Content Switcher:"}),`
`,e.jsx(l,{code:`
    <dss-content-switcher tabs={tabs}></dss-content-switcher>
  `}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"size"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'md'"}),e.jsx(s.td,{children:"Mida del switcher. Pot ser: sm, md o lg."})]})})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"propietats-de-cada-pestanya",children:"Propietats de cada pestanya"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["label",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Text que es mostra dins de la pestanya."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"selected"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"'false'"}),e.jsx(s.td,{children:"Marca la pestanya seleccionada. En cas que no hi hagi cap seleccionada per defecte, el switcher seleccionara la primera pestanya que no estigui deshabilitada."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"disabled"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"'false'"}),e.jsx(s.td,{children:"Deshabilita la pestanya."})]})]})]})}),`
`,e.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onChange"})}),e.jsx(s.td,{children:"Esdeveniment que retorna el nom de la pestanya seleccionada."})]})})]})}),`
`,e.jsx("br",{}),`
`,e.jsx("h5",{children:"Mides del switches"}),`
`,e.jsx(t,{of:o}),`
`,e.jsx("h5",{children:"Habilitat"}),`
`,e.jsx(t,{of:x}),`
`,e.jsx("h5",{children:"Deshabilitat"}),`
`,e.jsx(t,{of:j}),`
`,e.jsx("h5",{children:"Habilitat i deshabilitat"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.0.0"})}),e.jsx(s.td,{children:"Refactor v2."})]})})]})]})}function M(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{M as default};
