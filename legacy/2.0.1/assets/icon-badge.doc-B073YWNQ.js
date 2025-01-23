import{j as e,M as d,T as l,C as s,a as c}from"./index-Bqq7-PG9.js";import{useMDXComponents as r}from"./index-CR9MyhlS.js";import{S as a,P as h,a as o,D as x,T as j,I as m,C as p,b as f}from"./icon-badge.stories-CioFacBZ.js";import"./iframe-B4D8hHrS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";function n(t){const i={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
   .css-1sqhzee {
    display:none
  }

  .innerZoomElementWrapper {
    flex-direction: row;
    align-items: center;
  }
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrapper--alignment {
    height: 240px;
  }
  .box {
    position: relative;
  }
  .box + .box {
    margin-left: 50px;
  }
  .wrapper--alignment > .box + .box {
    margin-left: 100px;
  }
  .tooltip {
    display: none;
  }
  .element:hover + .tooltip {
    display: block;
  }
  dss-icon-badge {
    margin-left: 10px;
    margin-right: 10px;
  }
  `}),`
`,e.jsx(d,{of:a}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("dss-badge",{text:"dss-icon-badge",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(i.p,{children:`Un Tooltip mostra als usuaris que hi ha més coses per aprendre només tocar o
passar el ratolí per sobre d'un element.`}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(c,{}),`
`,e.jsx(i.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Name"}),e.jsx(i.th,{children:"Type"}),e.jsx(i.th,{children:"Default"}),e.jsx(i.th,{children:"Description"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"size"})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"string"})}),e.jsx(i.td,{children:"sm"}),e.jsx(i.td,{children:"Defineix la mida del component."})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"icon"})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"string"})}),e.jsx(i.td,{children:"Depèn de l'estat"}),e.jsx(i.td,{children:"Sobreescriu la icona mostrada. Per defecte cada estat tindrà una icona assignada."})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsxs(i.strong,{children:["state",e.jsx("span",{children:"*"})]})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"string"})}),e.jsx(i.td,{children:"-"}),e.jsx(i.td,{children:"Estil que mostrarà el component en funció del nivell de criticitat o informació. Veure llistat de correspondència per saber quin estat definir."})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"disabled"})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"boolean"})}),e.jsx(i.td,{children:"false"}),e.jsx(i.td,{children:"Assigna al component l’estat deshabilitat."})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"outlined"})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"boolean"})}),e.jsx(i.td,{children:"false"}),e.jsx(i.td,{children:"Modifica l’aparença del component quan l’estat definit és de criticitat. Aquest paràmetre no afecta els estats de criticitat."})]})]})]})}),`
`,e.jsx(i.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx(i.h3,{id:"relació-estats---criticidat",children:"Relació estats - criticidat"}),`
`,e.jsx(i.p,{children:"Els estats de criticitat han de definir-se en anglès per a mantenir la consistència en el codi de la llibreria. Cal seguir la següent taula per obtenir la correspondència:"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Criticitat"})}),e.jsx(i.td,{children:"Molt Greu"}),e.jsx(i.td,{children:"Greu"}),e.jsx(i.td,{children:"Greu lleu"}),e.jsx(i.td,{children:"Moderat Greu"}),e.jsx(i.td,{children:"Moderat"}),e.jsx(i.td,{children:"Moderat lleu"}),e.jsx(i.td,{children:"Lleu moderat"}),e.jsx(i.td,{children:"Lleu"}),e.jsx(i.td,{children:"Poc"}),e.jsx(i.td,{children:"Correcte"}),e.jsx(i.td,{children:"No determinat"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"state"})}),e.jsx(i.td,{children:"danger-high"}),e.jsx(i.td,{children:"danger"}),e.jsx(i.td,{children:"danger-low"}),e.jsx(i.td,{children:"moderate-high"}),e.jsx(i.td,{children:"moderate"}),e.jsx(i.td,{children:"moderate-low"}),e.jsx(i.td,{children:"slight-high"}),e.jsx(i.td,{children:"slight"}),e.jsx(i.td,{children:"slight-low"}),e.jsx(i.td,{children:"correct"}),e.jsx(i.td,{children:"undeterminated"})]})]})]}),`
`,e.jsx(i.h3,{id:"relació-estats---informació",children:"Relació estats - informació"}),`
`,e.jsx(i.p,{children:"En el cas dels estats d'informació, aquests concedeixen amb els estats interns del component."}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Informació"})}),e.jsx(i.td,{children:"Ideal"}),e.jsx(i.td,{children:"Critic"}),e.jsx(i.td,{children:"Alert"}),e.jsx(i.td,{children:"Info"}),e.jsx(i.td,{children:"Info-alt"}),e.jsx(i.td,{children:"Neutral"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"state"})}),e.jsx(i.td,{children:"ideal"}),e.jsx(i.td,{children:"critic"}),e.jsx(i.td,{children:"alert"}),e.jsx(i.td,{children:"info"}),e.jsx(i.td,{children:"info-alt"}),e.jsx(i.td,{children:"neutral"})]})]})]}),`
`,e.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#mides",children:"Mides"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#disabled",children:"Disabled"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#amb-tooltip",children:"Amb tooltip"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#amb-icon",children:"Amb icon"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#criticitad",children:"Criticitat"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#informaci%C3%B3",children:"Informació"})}),`
`]}),`
`,e.jsx(i.h3,{id:"mides",children:"Mides"}),`
`,e.jsx(i.p,{children:"Utilitzarem la mida (sm | md | lg | xl)."}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(i.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(i.h3,{id:"amb-tooltip",children:"Amb tooltip"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(i.h3,{id:"amb-icon",children:"Amb icon"}),`
`,e.jsxs(i.p,{children:["Podem modificar la icona assignada a cada estat utilitzant la propietat ",e.jsx(i.code,{children:"icon"}),"."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(i.h3,{id:"criticitat",children:"Criticitat"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(i.h3,{id:"informació",children:"Informació"}),`
`,e.jsxs(i.p,{children:["En els estats d’informació podem utilitzar la propietat ",e.jsx(i.code,{children:"outlined"})," per a mostrar la versió alternativa del component."]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Versió"}),e.jsx(i.th,{children:"Canvis"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"2.0.0"})}),e.jsx(i.td,{children:"Refactor v2"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"1.4.1"})}),e.jsx(i.td,{children:"Nou component afegit per tal de poder definir un badge especial representat únicament per una icona. Disposem de badge de criticitat o informatius. El component també permet associar un tooltip per tal d'oferir més informació als usuaris."})]})]})]})]})}function I(t={}){const{wrapper:i}={...r(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{I as default};
