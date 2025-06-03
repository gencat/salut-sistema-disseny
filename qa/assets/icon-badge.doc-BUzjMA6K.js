import{j as e,M as d,T as l,C as i,a}from"./index-CA4Zg_Ir.js";import{useMDXComponents as r}from"./index-DBgEsdF9.js";import{S as c,P as o,a as h,D as x,T as j,I as p,C as m,b as u,N as b}from"./icon-badge.stories-5O3qvsqT.js";import"./iframe-DX2m0xhP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function n(t){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  .wrapper + .wrapper {
    margin-top: 24px;
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
`,e.jsx(d,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("dss-badge",{text:"dss-icon-badge",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:`Un Tooltip mostra als usuaris que hi ha més coses per aprendre només tocar o
passar el ratolí per sobre d'un element.`}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(a,{}),`
`,e.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"size"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"sm"}),e.jsx(s.td,{children:"Defineix la mida del component."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"icon"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"Depèn de l'estat"}),e.jsx(s.td,{children:"Sobreescriu la icona mostrada. Per defecte cada estat tindrà una icona assignada."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["state",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Estil que mostrarà el component en funció del nivell de criticitat o informació. Veure llistat de correspondència per saber quin estat definir."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"disabled"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Assigna al component l’estat deshabilitat."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"outlined"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Modifica l’aparença del component quan l’estat definit és de criticitat. Aquest paràmetre no afecta els estats de criticitat."})]})]})]})}),`
`,e.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx(s.h3,{id:"relació-estats---criticidat",children:"Relació estats - criticidat"}),`
`,e.jsx(s.p,{children:"Els estats de criticitat han de definir-se en anglès per a mantenir la consistència en el codi de la llibreria. Cal seguir la següent taula per obtenir la correspondència:"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{}),e.jsx(s.th,{}),e.jsx(s.th,{}),e.jsx(s.th,{}),e.jsx(s.th,{}),e.jsx(s.th,{}),e.jsx(s.th,{}),e.jsx(s.th,{}),e.jsx(s.th,{}),e.jsx(s.th,{}),e.jsx(s.th,{}),e.jsx(s.th,{})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Criticitat"})}),e.jsx(s.td,{children:"Molt Greu"}),e.jsx(s.td,{children:"Greu"}),e.jsx(s.td,{children:"Greu lleu"}),e.jsx(s.td,{children:"Moderat Greu"}),e.jsx(s.td,{children:"Moderat"}),e.jsx(s.td,{children:"Moderat lleu"}),e.jsx(s.td,{children:"Lleu moderat"}),e.jsx(s.td,{children:"Lleu"}),e.jsx(s.td,{children:"Poc"}),e.jsx(s.td,{children:"Correcte"}),e.jsx(s.td,{children:"No determinat"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"state"})}),e.jsx(s.td,{children:"danger-high"}),e.jsx(s.td,{children:"danger"}),e.jsx(s.td,{children:"danger-low"}),e.jsx(s.td,{children:"moderate-high"}),e.jsx(s.td,{children:"moderate"}),e.jsx(s.td,{children:"moderate-low"}),e.jsx(s.td,{children:"slight-high"}),e.jsx(s.td,{children:"slight"}),e.jsx(s.td,{children:"slight-low"}),e.jsx(s.td,{children:"correct"}),e.jsx(s.td,{children:"undeterminated"})]})]})]}),`
`,e.jsx(s.h3,{id:"relació-estats---informació",children:"Relació estats - informació"}),`
`,e.jsx(s.p,{children:"En el cas dels estats d'informació, aquests concedeixen amb els estats interns del component."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{}),e.jsx(s.th,{}),e.jsx(s.th,{}),e.jsx(s.th,{}),e.jsx(s.th,{}),e.jsx(s.th,{}),e.jsx(s.th,{})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Informació"})}),e.jsx(s.td,{children:"Ideal"}),e.jsx(s.td,{children:"Critic"}),e.jsx(s.td,{children:"Alert"}),e.jsx(s.td,{children:"Info"}),e.jsx(s.td,{children:"Info-alt"}),e.jsx(s.td,{children:"Neutral"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"state"})}),e.jsx(s.td,{children:"ideal"}),e.jsx(s.td,{children:"critic"}),e.jsx(s.td,{children:"alert"}),e.jsx(s.td,{children:"info"}),e.jsx(s.td,{children:"info-alt"}),e.jsx(s.td,{children:"neutral"})]})]})]}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#mides",children:"Mides"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#disabled",children:"Disabled"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-tooltip",children:"Amb tooltip"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-icon",children:"Amb icon"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#criticitad",children:"Criticitat"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#informaci%C3%B3",children:"Informació"})}),`
`]}),`
`,e.jsx(s.h3,{id:"mides",children:"Mides"}),`
`,e.jsx(s.p,{children:"Utilitzarem la mida (sm | md | lg | xl)."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(s.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(s.h3,{id:"amb-tooltip",children:"Amb tooltip"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(s.h3,{id:"amb-icon",children:"Amb icon"}),`
`,e.jsxs(s.p,{children:["Podem modificar la icona assignada a cada estat utilitzant la propietat ",e.jsx(s.code,{children:"icon"}),"."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(s.h3,{id:"criticitat",children:"Criticitat"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(s.h3,{id:"informació",children:"Informació"}),`
`,e.jsxs(s.p,{children:["En els estats d’informació podem utilitzar la propietat ",e.jsx(s.code,{children:"outlined"})," per a mostrar la versió alternativa del component."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(s.h3,{id:"resultats-numèrics",children:"Resultats numèrics"}),`
`,e.jsx(s.p,{children:"La variant per a resultats numèrics es defineix amb els estats above i below, que al seu torn tenen diferents variants en funció de la criticitat. Poden ser: above, above-high, above-low, below, below-high i below-low."}),`
`,e.jsx(i,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.5.0"})}),e.jsxs(s.td,{children:["S'ha afegit la variant per a resultats numèrics.",e.jsx("br",{}),"S'ha corregit un error pel qual no es mostraven les icones correctes per als estats de criticitat."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.0.0"})}),e.jsx(s.td,{children:"Refactor v2."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.4.1"})}),e.jsx(s.td,{children:"Nou component afegit per tal de poder definir un badge especial representat únicament per una icona. Disposem de badge de criticitat o informatius. El component també permet associar un tooltip per tal d'oferir més informació als usuaris."})]})]})]})]})}function I(t={}){const{wrapper:s}={...r(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(n,{...t})}):n(t)}export{I as default};
