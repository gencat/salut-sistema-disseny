import{j as s,M as d,T as l,C as n,a as c}from"./index-MlXj6sD6.js";import{useMDXComponents as t}from"./index-DYs5BNo_.js";import{A as a,P as h,S as o,a as x,b as j,E as m,W as u,c as p,I as f}from"./alert.stories-zoXwS2Yx.js";import"./iframe-OrK7ehTE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-element-DhY7bShc.js";import"./lit-html-B2eaWknC.js";import"./alert-DzPjPEry.js";import"./property-DnLABHHV.js";import"./reset.style-B0CQ8619.js";import"./property-types-CkH-zh1n.js";import"./static-B9bHPl91.js";import"./custom-element-scope-Dp4Dg8bo.js";function r(i){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
    .innerZoomElementWrapper{
        flex-direction: column;
        align-items: flex-start;
    }
    .dss-alert {
      max-width: 400px;
    }
    .demo-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      max-width: 400px;
    }
  `}),`
`,s.jsx(d,{of:a}),`
`,s.jsxs("div",{className:"dss-sb-title",children:[s.jsx(l,{}),s.jsx("dss-badge",{text:"dss-alert",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,s.jsx(e.p,{children:`Els Alerts comuniquen un estat que afecta tot el sistema, no només una funció
o pàgina. Persisteix durant una sessió i apareix sense que l'usuari iniciï
l'acció.`}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,s.jsx(n,{of:h}),`
`,s.jsx(c,{}),`
`,s.jsx(e.h3,{id:"propietats",children:"Propietats"}),`
`,s.jsx("div",{className:"dss-sb-properties",children:s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Name"}),s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"}),s.jsx(e.th,{children:"Description"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsxs(e.strong,{children:["message",s.jsx("span",{children:"*"})]})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"string"})}),s.jsx(e.td,{children:"-"}),s.jsx(e.td,{children:"Text que es mostra dins del component."})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"state"})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"string"})}),s.jsx(e.td,{children:"'info'"}),s.jsx(e.td,{children:"Tipus d'alerta. Pot ser: error, warning, success o info."})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"size"})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"string"})}),s.jsx(e.td,{children:"'lg'"}),s.jsx(e.td,{children:"Mida del component. Pot ser: sm, md o lg."})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"hasCloseIcon"})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"boolean"})}),s.jsx(e.td,{children:"false"}),s.jsx(e.td,{children:"Habilita l'icon-button per poder tancar l'alerta."})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"hasButton"})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"boolean"})}),s.jsx(e.td,{children:"false"}),s.jsx(e.td,{children:"Mostra un botó dins del component. L'estil del botó està vinculat a l'estat de l'alerta, de manera que no es pot modificar."})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"buttonLabel"})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"string"})}),s.jsx(e.td,{children:"'Button'"}),s.jsx(e.td,{children:"Text que es mostra dins del botó."})]})]})]})}),`
`,s.jsx(e.p,{children:"(*) Propietat obligatòria"}),`
`,s.jsx(e.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Name"}),s.jsx(e.th,{children:"Description"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"onClose"})}),s.jsx(e.td,{children:"Notifica que l'alerta s'ha de tancar."})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"onButtonClick"})}),s.jsx(e.td,{children:"Notifica quan es fa clic al botó."})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"#mides-lg",children:"Mides: lg"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"#mides-md",children:"Mides: md"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"#mides-sm",children:"Mides: sm"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"#error",children:"Estats: Error"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"#warning",children:"Estats: Warning"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"#success",children:"Estats: Success"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"#info",children:"Estats: Info"})}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"mides",children:"Mides"}),`
`,s.jsx(e.h4,{id:"mides-lg",children:"Mides: lg"}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Nota:"})," La versió que inclou un botó només està disponible per a la mida LG."]}),`
`,s.jsx(n,{of:o}),`
`,s.jsx(e.h4,{id:"mides-md",children:"Mides: md"}),`
`,s.jsx(n,{of:x}),`
`,s.jsx(e.h4,{id:"mides-sm",children:"Mides: sm"}),`
`,s.jsx(n,{of:j}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"estats",children:"Estats"}),`
`,s.jsx(e.h4,{id:"error",children:"Error"}),`
`,s.jsx(n,{of:m}),`
`,s.jsx(e.h4,{id:"warning",children:"Warning"}),`
`,s.jsx(n,{of:u}),`
`,s.jsx(e.h4,{id:"success",children:"Success"}),`
`,s.jsx(n,{of:p}),`
`,s.jsx(e.h4,{id:"info",children:"Info"}),`
`,s.jsx(n,{of:f}),`
`,s.jsx("br",{}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h4,{id:"changelog",children:"Changelog"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Versió"}),s.jsx(e.th,{children:"Canvis"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"2.0.0"})}),s.jsx(e.td,{children:"Refactor v2."})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"1.11.0"})}),s.jsx(e.td,{children:"Nou web component."})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"1.8.0"})}),s.jsx(e.td,{children:"S'han afegit les mesures lg, md i sm. Si no s'afegeixen les classes específiques de cada mesura el component seguira apareixent igual que fins ara, per la qual cosa no és necessari readptar el mateix en iniciatives ja finalitzades."})]})]})]})]})}function L(i={}){const{wrapper:e}={...t(),...i.components};return e?s.jsx(e,{...i,children:s.jsx(r,{...i})}):r(i)}export{L as default};
