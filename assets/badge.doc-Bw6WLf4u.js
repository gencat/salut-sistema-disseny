import{j as e,M as d,T as l,C as i,a as c}from"./index-BLqgKUE9.js";import{useMDXComponents as r}from"./index-C-yrU3Bz.js";import{S as a,P as o,a as h,D as x,T as j,I as m,b as p,c as f,d as u,M as g,e as b,f as C,g as I,h as M,i as v,C as A,U as D,j as q,k as y,A as S,l as L,m as w,N as P}from"./badge.stories-CLVF_yXt.js";import"./iframe-C_0fz1pU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-BBo-_xnV.js";import"./index-ogSvIofg.js";import"./lit-element-DyeN6MU1.js";import"./lit-html-CeYizTxc.js";import"./badge-CmUksSkr.js";import"./property-CttF5lnp.js";import"./icon.style-DPTab5RN.js";import"./property-types-CkH-zh1n.js";import"./class-map-bus_Wqs6.js";import"./static-Dd08Oexw.js";import"./custom-element-scope-Dp4Dg8bo.js";function s(n){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
   .innerZoomElementWrapper {
      flex-direction: row;
      align-items: center;
    }
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    dss-badge {
      margin-left: 10px;
      margin-right: 10px;
    }
  `}),`
`,e.jsx(d,{of:a}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("dss-badge",{text:"dss-badge",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(t.p,{children:`Els Badges transmeten informació dinàmica, com ara recomptes o estats. Un
Badge pot incloure etiquetes o números. L’amplada mínima serà de 40px.`}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Name"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Default"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"size"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"sm"}),e.jsx(t.td,{children:"Defineix la mida del component. Pot ser: sm, md, lg o xl."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"icon"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"Depèn de l'estat"}),e.jsx(t.td,{children:"Sobreescriu la icona mostrada. Per defecte cada estat tindrà una icona assignada."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsxs(t.strong,{children:["text",e.jsx("span",{children:"*"})]})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"-"}),e.jsx(t.td,{children:"Text que es mostrarà dins del component."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsxs(t.strong,{children:["state",e.jsx("span",{children:"*"})]})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"-"}),e.jsx(t.td,{children:"Estil que mostrarà el component en funció del nivell de criticitat o informació. Veure llistat de correspondència per saber quin estat definir."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"dot"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:"false"}),e.jsx(t.td,{children:"Activa la vista alternativa del componente."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"disabled"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:"false"}),e.jsx(t.td,{children:"Assigna al component l’estat deshabilitat."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"outlined"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:"false"}),e.jsx(t.td,{children:"Modifica l’aparença del component quan l’estat definit és de criticitat. Aquest paràmetre no afecta els estats de criticitat."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"hideIcon"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:"false"}),e.jsx(t.td,{children:"Oculta el icono mostrado por defecto."})]})]})]}),`
`,e.jsx(t.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx(t.h3,{id:"relació-estats---criticidat",children:"Relació estats - criticidat"}),`
`,e.jsx(t.p,{children:"Els estats de criticitat han de definir-se en anglès per a mantenir la consistència en el codi de la llibreria. Cal seguir la següent taula per obtenir la correspondència:"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{}),e.jsx(t.th,{}),e.jsx(t.th,{}),e.jsx(t.th,{}),e.jsx(t.th,{}),e.jsx(t.th,{}),e.jsx(t.th,{}),e.jsx(t.th,{}),e.jsx(t.th,{}),e.jsx(t.th,{}),e.jsx(t.th,{}),e.jsx(t.th,{})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"Criticitat"})}),e.jsx(t.td,{children:"Molt Greu"}),e.jsx(t.td,{children:"Greu"}),e.jsx(t.td,{children:"Greu lleu"}),e.jsx(t.td,{children:"Moderat Greu"}),e.jsx(t.td,{children:"Moderat"}),e.jsx(t.td,{children:"Moderat lleu"}),e.jsx(t.td,{children:"Lleu moderat"}),e.jsx(t.td,{children:"Lleu"}),e.jsx(t.td,{children:"Poc"}),e.jsx(t.td,{children:"Correcte"}),e.jsx(t.td,{children:"No determinat"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"state"})}),e.jsx(t.td,{children:"danger-high"}),e.jsx(t.td,{children:"danger"}),e.jsx(t.td,{children:"danger-low"}),e.jsx(t.td,{children:"moderate-high"}),e.jsx(t.td,{children:"moderate"}),e.jsx(t.td,{children:"moderate-low"}),e.jsx(t.td,{children:"slight-high"}),e.jsx(t.td,{children:"slight"}),e.jsx(t.td,{children:"slight-low"}),e.jsx(t.td,{children:"correct"}),e.jsx(t.td,{children:"undeterminated"})]})]})]}),`
`,e.jsx(t.h3,{id:"relació-estats---informació",children:"Relació estats - informació"}),`
`,e.jsx(t.p,{children:"En el cas dels estats d'informació, aquests concedeixen amb els estats interns del component."}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{}),e.jsx(t.th,{}),e.jsx(t.th,{}),e.jsx(t.th,{}),e.jsx(t.th,{}),e.jsx(t.th,{}),e.jsx(t.th,{})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"Informació"})}),e.jsx(t.td,{children:"Ideal"}),e.jsx(t.td,{children:"Critic"}),e.jsx(t.td,{children:"Alert"}),e.jsx(t.td,{children:"Info"}),e.jsx(t.td,{children:"Info-alt"}),e.jsx(t.td,{children:"Neutral"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"state"})}),e.jsx(t.td,{children:"ideal"}),e.jsx(t.td,{children:"critic"}),e.jsx(t.td,{children:"alert"}),e.jsx(t.td,{children:"info"}),e.jsx(t.td,{children:"info-alt"}),e.jsx(t.td,{children:"neutral"})]})]})]}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#mides",children:"Mides"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#disabled",children:"Disabled"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#amb-tooltip",children:"Amb tooltip"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#amb-icon",children:"Amb icon"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#criticitat",children:"Criticitat"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#informaci%C3%B3",children:"Informació"})}),`
`]}),`
`,e.jsx(t.h3,{id:"mides",children:"Mides"}),`
`,e.jsx(t.p,{children:"Utilitzarem la mida (sm | md | lg )."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(t.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(t.h3,{id:"amb-tooltip",children:"Amb tooltip"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(t.h3,{id:"amb-icon",children:"Amb icon"}),`
`,e.jsxs(t.p,{children:["Podem modificar la icona assignada a cada estat utilitzant la propietat ",e.jsx(t.code,{children:"icon"}),"."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(t.h3,{id:"criticitat",children:"Criticitat"}),`
`,e.jsx("h5",{children:"Criticitat: Molt Greu"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx("h5",{children:"Criticitat: Greu"}),`
`,e.jsx(i,{of:f}),`
`,e.jsx("h5",{children:"Criticitat: Greu Lleu"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx("h5",{children:"Criticitat: Moderat Greu"}),`
`,e.jsx(i,{of:g}),`
`,e.jsx("h5",{children:"Criticitat: Moderat"}),`
`,e.jsx(i,{of:b}),`
`,e.jsx("h5",{children:"Criticitat: Moderat lleu"}),`
`,e.jsx(i,{of:C}),`
`,e.jsx("h5",{children:"Criticitat: Lleu moderat"}),`
`,e.jsx(i,{of:I}),`
`,e.jsx("h5",{children:"Criticitat: Lleu"}),`
`,e.jsx(i,{of:M}),`
`,e.jsx("h5",{children:"Criticitat: Poc"}),`
`,e.jsx(i,{of:v}),`
`,e.jsx("h5",{children:"Criticitat: Correcte"}),`
`,e.jsx(i,{of:A}),`
`,e.jsx("h5",{children:"Criticitat: No determinat"}),`
`,e.jsx(i,{of:D}),`
`,e.jsx(t.h3,{id:"informació",children:"Informació"}),`
`,e.jsxs(t.p,{children:["En els estats d’informació podem utilitzar la propietat ",e.jsx(t.code,{children:"outlined"})," per a mostrar la versió alternativa del component."]}),`
`,e.jsx("h5",{children:"Informació: Ideal"}),`
`,e.jsx(i,{of:q}),`
`,e.jsx("h5",{children:"Informació: Critic"}),`
`,e.jsx(i,{of:y}),`
`,e.jsx("h5",{children:"Informació: Alert"}),`
`,e.jsx(i,{of:S}),`
`,e.jsx("h5",{children:"Informació: Info"}),`
`,e.jsx(i,{of:L}),`
`,e.jsx("h5",{children:"Informació: Info Alt"}),`
`,e.jsx(i,{of:w}),`
`,e.jsx("h5",{children:"Informació: Neutral"}),`
`,e.jsx(i,{of:P}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Versió"}),e.jsx(t.th,{children:"Canvis"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"2.0.0"})}),e.jsx(t.td,{children:"Refactor v2."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"1.12.4"})}),e.jsx(t.td,{children:"S'ha afegit la mida xl."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"1.5.0"})}),e.jsx(t.td,{children:"S'ha corregit un error pel qual la propietat text no incloïa el text dins del component."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"1.4.1"})}),e.jsx(t.td,{children:"S'ha creat una nova versió del badge on passa a ser un Web Component, això permet la possibilitat de poder incloure un tooltip. Es mantè el component simple actual per tal d'evitar problemes en les aplicacions ja desenvolupades."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"1.1.5"})}),e.jsxs(t.td,{children:["S’han afegit nous estats per al component Badge, incloent-hi tots els relacionats amb indicadors de criticitat i informació:",e.jsx("br",{}),e.jsx(t.strong,{children:"Criticitat"}),": molt greu, greu, greu lleu, moderat greu, moderat, moderat lleu, lleu moderat, lleu, lleu poc, correcte, no determinat.",e.jsx("br",{}),e.jsx(t.strong,{children:"Informatiu"}),": ideal, crític, alerta, info, info alt, neutral."]})]})]})]})]})}function J(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{J as default};
