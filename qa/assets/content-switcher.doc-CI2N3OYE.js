import{j as e,M as r,T as l,C as i,S as a}from"./index-CsTAJ4rn.js";import{useMDXComponents as d}from"./index-dbzUcnWe.js";import{S as c,P as h,a as x,F as j,E as o,D as p,M as m}from"./content-switcher.stories-Cc1zDpL7.js";import"./iframe-DW4sVY8Y.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-element-DhY7bShc.js";import"./lit-html-B2eaWknC.js";function t(n){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
      .wrapper {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;
      }
      .full-width-wrapper {
        display: block;
        width: 800px;
      }
  `}),`
`,e.jsx(r,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("dss-badge",{text:"dss-content-switcher",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:`Els Content Switchers permeten als usuaris canviar entre visualitzacions
alternatives de contingut similar o relacionat. Només es mostra una secció de
contingut alhora.`}),`
`,e.jsx("h3",{children:"Història d'exemple"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx("h3",{children:"Content Switcher"}),`
`,e.jsx(s.p,{children:"Utilitzarem la següent estructura per crear un Content Switcher:"}),`
`,e.jsx(a,{code:`
    <dss-content-switcher tabs={tabs}></dss-content-switcher>
  `}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"size"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'md'"}),e.jsx(s.td,{children:"Mida del switcher. Pot ser: sm, md o lg."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"fullWidth"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Assigna al component una amplada del 100%."})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"propietats-de-cada-pestanya",children:"Propietats de cada pestanya"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["label",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Text que es mostra dins de la pestanya."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"selected"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"'false'"}),e.jsx(s.td,{children:"Marca la pestanya seleccionada. En cas que no hi hagi cap seleccionada per defecte, el switcher seleccionara la primera pestanya que no estigui deshabilitada."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"disabled"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"'false'"}),e.jsx(s.td,{children:"Deshabilita la pestanya."})]})]})]})}),`
`,e.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onChange"})}),e.jsx(s.td,{children:"Esdeveniment que retorna el nom de la pestanya seleccionada."})]})})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#mides-del-switches",children:"Mides del switches"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amplada-m%C3%A0xima",children:"Amplada màxima"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#habilitat",children:"Habilitat"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#habilitat-i-deshabilitat",children:"Habilitat i deshabilitat"})}),`
`]}),`
`,e.jsx("h5",{children:"Mides del switches"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx("h5",{children:"Amplada màxima"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx("h5",{children:"Habilitat"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx("h5",{children:"Deshabilitat"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx("h5",{children:"Habilitat i deshabilitat"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.0.0"})}),e.jsx(s.td,{children:"Refactor v2."})]})})]})]})}function q(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{q as default};
