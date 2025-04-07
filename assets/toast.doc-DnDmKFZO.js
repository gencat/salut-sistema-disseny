import{j as e,M as o,T as a,C as s,a as l}from"./index-DcnCV2Xv.js";import{useMDXComponents as i}from"./index-C4a9eaVM.js";import{T as d,P as c,N as h,I as x,a as j,B as p,b as m,D as u,c as b,M as f,d as g,e as v,f as E,g as q,h as w,S as P,W as S,E as N}from"./toast.stories-Bku0YsRe.js";import"./iframe-76s_ikBD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";import"./toast-DQHJMGON.js";import"./lit-element-DhY7bShc.js";import"./property-DnLABHHV.js";import"./icon.style-DPTab5RN.js";import"./reset.style-B0CQ8619.js";import"./property-types-CkH-zh1n.js";import"./class-map-BDeD7Kfm.js";import"./when-BR7zwNJC.js";import"./static-B9bHPl91.js";import"./custom-element-scope-Dp4Dg8bo.js";function r(t){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .innerZoomElementWrapper {
      flex-direction: column;
      align-items: flex-start;
    }

    .css-15dql7d{
      min-height: 150px;
    }

    .exemple-container-canvas {
      width: 100%;
      height:100%;
      overflow:hidden;
    }

    .exemple-container {
      display: block;
      width: 100%;
    }

    .exemple-container + .exemple-container {
      margin-top: 20px;
    }

    .exemple-container .dss-toast,
    .exemple-container dss-toast {
      position: relative;
      right: 0px;
      bottom: 0px;
      left: 0px;
      top: 0px;
    }

    .exemple-container-toast-canvas {
      width: 600px;
      height: 300px;
      position: relative;
      overflow: hidden;
    }
`}),`
`,e.jsx(o,{of:d}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(a,{}),e.jsx("dss-badge",{text:"dss-toast",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(n.p,{children:`Els Toast serveixen com a mecanisme de comentaris i confirmació després que
l'usuari faci una acció.`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Nota:"})," El element ",e.jsx(n.strong,{children:"exemple-container-toast-canvas"}),` només s'utilitza per
a la previsualització en Storybook.`,e.jsx("br",{}),`
El component té un posicionament absolut, per tant, ha de estar dins d'un contenidor amb posicionament relatiu, si no, prendrà com a referència el viewport.`]})}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsxs(n.strong,{children:["isShow",e.jsx("span",{children:"*"})]})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Mostra o tanca el toast."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"text"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Text que es mostra dins del toast. Per fer salt de línia, utilitza '\\n'."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"state"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'info'"}),e.jsx(n.td,{children:"Estat del toast. Pot ser: error, warning, success o info."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"position"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'bottom-left'"}),e.jsx(n.td,{children:"Posició del toast. Pot ser: bottom-left, bottom-right, top-left o top-right."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"icon"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"''"}),e.jsx(n.td,{children:"Icona mostrada dins del toast. Si no s'indica cap icona, es mostrarà la icona per defecte de l'estat."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"hasIcon"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Mostra o amaga la icona."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"buttonLabel"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'Button'"}),e.jsx(n.td,{children:"Text del botó."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"hasButton"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Mostra o amaga el botó."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"hasButtonClose"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Mostra o amaga el botó de tancar."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"duration"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"4000"}),e.jsx(n.td,{children:"Duració del toast en milisegons. Si és 0, el toast no es tancarà automàticament."})]})]})]})}),`
`,e.jsx(n.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx(n.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onClose"})}),e.jsx(n.td,{children:"Esdeveniment que notifica a l'usuari quan es tanca el toast."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onButtonClick"})}),e.jsx(n.td,{children:"Esdeveniment que notifica a l'usuari quan es fa clic al botó del toast."})]})]})]})}),`
`,e.jsx("h3",{children:"Índex"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tipus",children:"Tipus"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#posicionament",children:"Posicionament"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#estat",children:"Estat"})}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsx(n.h3,{id:"tipus",children:"Tipus"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"El toast es pot construir de diferents maneres, sense icona, amb icona, sense acció, amb botó de tancar, amb botó, amb duració, sense duració y multilínies."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Nota:"})," El element ",e.jsx(n.strong,{children:"exemple-container"})," només s'utilitza per la documentació.",e.jsx("br",{}),`
El component té un posicionament absolut, per tant, ha de estar dins d'un contenidor amb posicionament relatiu, si no, prendrà com a referència el viewport.`]})}),`
`,e.jsx("h5",{children:"Sense icona"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx("h5",{children:"Amb icona"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx("h5",{children:"Sense acció"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx("h5",{children:"Amb botó de tancar"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx("h5",{children:"Amb botó"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx("h5",{children:"Amb duració"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest toast es tancarà automàticament després de 10 segons."}),`
`]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx("h5",{children:"Sense duració"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest toast no es tancarà automàticament."}),`
`]}),`
`,e.jsx(s,{of:b}),`
`,e.jsx("h5",{children:"Multilínies"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Per fer salt de línia, utilitza '\\n'."}),`
`]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h3,{id:"posicionament",children:"Posicionament"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"El toast pot estar posicionat a la part superior o inferior de la pantalla, així com a la part esquerra o dreta."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Nota:"})," El element ",e.jsx(n.strong,{children:"exemple-container-toast-canvas"})," només s'utilitza per la documentació.",e.jsx("br",{}),`
El component té un posicionament absolut, per tant, ha de estar dins d'un contenidor amb posicionament relatiu, si no, prendrà com a referència el viewport.`]})}),`
`,e.jsx("h5",{children:"Part superior esquerra"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx("h5",{children:"Part superior dreta"}),`
`,e.jsx(s,{of:v}),`
`,e.jsx("h5",{children:"Part inferior esquerra"}),`
`,e.jsx(s,{of:E}),`
`,e.jsx("h5",{children:"Part inferior dreta"}),`
`,e.jsx(s,{of:q}),`
`,e.jsx(n.h3,{id:"estat",children:"Estat"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"El toast pot tenir diferents estats: info, success, warning i error."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Nota:"})," El element ",e.jsx(n.strong,{children:"exemple-container"})," només s'utilitza per la documentació.",e.jsx("br",{}),`
El component té un posicionament absolut, per tant, ha de estar dins d'un contenidor amb posicionament relatiu, si no, prendrà com a referència el viewport.`]})}),`
`,e.jsx("h5",{children:"Info"}),`
`,e.jsxs(n.p,{children:["Es passa la propietat ",e.jsx(n.strong,{children:"state"})," amb el valor ",e.jsx(n.strong,{children:"info"}),"."]}),`
`,e.jsx(s,{of:w}),`
`,e.jsx("h5",{children:"Success"}),`
`,e.jsxs(n.p,{children:["Es passa la propietat ",e.jsx(n.strong,{children:"state"})," amb el valor ",e.jsx(n.strong,{children:"success"}),"."]}),`
`,e.jsx(s,{of:P}),`
`,e.jsx("h5",{children:"Warning"}),`
`,e.jsxs(n.p,{children:["Es passa la propietat ",e.jsx(n.strong,{children:"state"})," amb el valor ",e.jsx(n.strong,{children:"warning"}),"."]}),`
`,e.jsx(s,{of:S}),`
`,e.jsx("h5",{children:"Error"}),`
`,e.jsxs(n.p,{children:["Es passa la propietat ",e.jsx(n.strong,{children:"state"})," amb el valor ",e.jsx(n.strong,{children:"error"}),"."]}),`
`,e.jsx(s,{of:N}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Versió"}),e.jsx(n.th,{children:"Canvis"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.2.0"})}),e.jsxs(n.td,{children:["S'ha actualitzat l'estil de la variant warning.",e.jsx("br",{})," S'ha modificat l'estil de l'icon-button per tancar el component en totes les variants."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.0"})}),e.jsx(n.td,{children:"Nou Web Component."})]})]})]})]})}function H(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{H as default};
