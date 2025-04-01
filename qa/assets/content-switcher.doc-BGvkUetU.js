import{j as e,M as r,T as a,C as n,a as l,S as c}from"./index-0u0DrSip.js";import{useMDXComponents as d}from"./index-DdDTH1VZ.js";import{S as h,P as x,a as o,F as j,E as p,D as m,M as b}from"./content-switcher.stories-DZFaq0-w.js";import"./iframe-CJlUKkM3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-element-DhY7bShc.js";import"./lit-html-B2eaWknC.js";function t(i){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
`,e.jsx(r,{of:h}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(a,{}),e.jsx("dss-badge",{text:"dss-content-switcher",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:`Els Content Switchers permeten als usuaris canviar entre visualitzacions
alternatives de contingut similar o relacionat. Només es mostra una secció de
contingut alhora.`}),`
`,e.jsx("h3",{children:"Història d'exemple"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(l,{}),`
`,e.jsx("h3",{children:"Content Switcher"}),`
`,e.jsx(s.p,{children:"Utilitzarem la següent estructura per crear un Content Switcher:"}),`
`,e.jsx(c,{code:`
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
`,e.jsx(s.h5,{id:"mides-del-switches",children:"Mides del switches"}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(s.h5,{id:"amplada-màxima",children:"Amplada màxima"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.h5,{id:"habilitat",children:"Habilitat"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h5,{id:"deshabilitat",children:"Deshabilitat"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(s.h5,{id:"habilitat-i-deshabilitat",children:"Habilitat i deshabilitat"}),`
`,e.jsx(n,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.2.2"})}),e.jsx(s.td,{children:"S'ha corregit un error pel qual el component no es visualitzava correctament en canviar la pestanya seleccionada en React, a causa d'un nou renderitzat no desitjat."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.2.1"})}),e.jsx(s.td,{children:"S'ha actualitzat l'estil del component: color de tipografia i ombra de l'element seleccionat, i distància entre cada element."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.0.0"})}),e.jsx(s.td,{children:"Refactor v2."})]})]})]})]})}function S(i={}){const{wrapper:s}={...d(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(t,{...i})}):t(i)}export{S as default};
