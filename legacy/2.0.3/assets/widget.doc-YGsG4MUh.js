import{j as e,M as r,T as o,C as i,a}from"./index-BLqgKUE9.js";import{useMDXComponents as l}from"./index-C-yrU3Bz.js";import{S as c,P as d,B as h,a as p,T as x,A as j,b as m}from"./widget.stories-G6G8TYdg.js";import"./iframe-C_0fz1pU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-BBo-_xnV.js";import"./index-ogSvIofg.js";import"./lit-html-CeYizTxc.js";function n(t){const s={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .innerZoomElementWrapper {
      flex-direction: row;
      align-items: center;
    }
    .wrapper {
      width: 400px;
    }
    .popover-wrapper {
      height: 600px;
      width: 600px;
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }
    .demo-wrapper {
      position: relative;
      width: fit-content;
    }
    .demo-related-content {
      font-size: 12px;
      color: lightgray;
    }
  `}),`
`,e.jsx(r,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(o,{}),e.jsx("dss-badge",{text:"dss-accordion",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-item-list",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-popover",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.p,{children:"Element que encapsula funcionalitats especifiques."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(a,{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.p,{children:["En totes les variants mostrades a continuació s'ha habilitat la propietat ",e.jsx(s.strong,{children:"isOpen"}),` perquè es mostri el contingut dels acordions per defecte.
En l'aplicació real de la col·lecció no caldrà afegir aquesta propietat.`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#box",children:"Box"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#popover",children:"Popover"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-t%C3%ADtol-i-switch",children:"Amb títol i switch"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#accions-delements-m%C3%BAltiples",children:"Accions d'elements múltiples"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#m%C3%BAltiples-sections",children:"Múltiples seccions"})}),`
`]}),`
`,e.jsx(s.h3,{id:"box",children:"Box"}),`
`,e.jsxs(s.p,{children:["La variant de tipus box utilitza l'estil per defecte de l'acordió, de manera que no cal afegir la propietat ",e.jsx(s.strong,{children:"accordionStyle"}),"."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(s.h3,{id:"popover",children:"Popover"}),`
`,e.jsxs(s.p,{children:["La variant del widget dins d'un popover necessita aplicar l'estil ",e.jsx(s.strong,{children:"inner"}),` a la propietat accordionStyle de l'acordió, per eliminar els marges
al seu voltant i deixar que sigui el popover qui delimiti visualment el contingut.`]}),`
`,e.jsxs(s.p,{children:["Per a la seva aplicació real, cal amagar els elements corresponents al títol del popover i eliminar la propietat ",e.jsx(s.strong,{children:"open"})," del component popover."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"amb-títol-i-switch",children:"Amb títol i switch"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(s.h3,{id:"accions-delements-múltiples",children:"Accions d'elements múltiples"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(s.h3,{id:"múltiples-seccions",children:"Múltiples seccions"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(s.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.12.6"})}),e.jsx(s.td,{children:"Nou collection."})]})})]})]})}function A(t={}){const{wrapper:s}={...l(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(n,{...t})}):n(t)}export{A as default};
