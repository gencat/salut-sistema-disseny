import{j as e,M as r,T as l,C as s,a as c}from"./index-CwUnIK6l.js";import{useMDXComponents as d}from"./index--VIXWnPk.js";import{S as a,P as o,a as h,D as x,T as j,I as m,b as p,A as f,c as u,d as b,e as g,M as C,f as I,g as M,h as q,i as w,j as A,C as v,U as D,k as y,l as N,m as S,n as P,o as L,N as z}from"./badge-button.stories-7yaaY7Lq.js";import"./iframe-CdaQSJPn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-element-Dloa6E9d.js";import"./lit-html-D6a8R3xZ.js";import"./badge-button-Ba5Y43fn.js";import"./property-BpSxuat7.js";import"./reset.style-B0CQ8619.js";import"./property-types-CkH-zh1n.js";import"./class-map-t53NE6z1.js";import"./static-BTPASdtP.js";import"./custom-element-scope-Dp4Dg8bo.js";function t(n){const i={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
    }
  `}),`
`,e.jsx(r,{of:a}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("dss-badge",{text:"dss-badge-button",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(i.p,{children:`El badge-button és una ampliació del component badge, que converteix l’anterior component en un botó clicable amb
els seus diferents estats interactius: hover, active, focus i disabled.`}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(c,{}),`
`,e.jsx(i.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Name"}),e.jsx(i.th,{children:"Type"}),e.jsx(i.th,{children:"Default"}),e.jsx(i.th,{children:"Description"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"size"})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"string"})}),e.jsx(i.td,{children:"sm"}),e.jsx(i.td,{children:"Defineix la mida del component. Pot ser: sm, md, lg o xl."})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"icon"})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"string"})}),e.jsx(i.td,{children:"Depèn de l'estat"}),e.jsx(i.td,{children:"Sobreescriu la icona mostrada. Per defecte cada estat tindrà una icona assignada."})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"width"})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"string"})}),e.jsx(i.td,{children:"-"}),e.jsx(i.td,{children:`Modifica l'amplada automàtica del component per l'amplada fixa definida en píxels. Ej: width="48px".`})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsxs(i.strong,{children:["label",e.jsx("span",{children:"*"})]})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"string"})}),e.jsx(i.td,{children:"-"}),e.jsx(i.td,{children:"Text que es mostrarà dins del component."})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsxs(i.strong,{children:["state",e.jsx("span",{children:"*"})]})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"string"})}),e.jsx(i.td,{children:"-"}),e.jsx(i.td,{children:"Estil que mostrarà el component en funció del nivell de criticitat o informació. Veure llistat de correspondència per saber quin estat definir."})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"disabled"})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"boolean"})}),e.jsx(i.td,{children:"false"}),e.jsx(i.td,{children:"Assigna al component l’estat deshabilitat."})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"outlined"})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"boolean"})}),e.jsx(i.td,{children:"false"}),e.jsx(i.td,{children:"Modifica l’aparença del component quan l’estat definit és de criticitat. Aquest paràmetre no afecta els estats de criticitat."})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"hideIcon"})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"boolean"})}),e.jsx(i.td,{children:"false"}),e.jsx(i.td,{children:"Oculta el icono mostrado por defecto."})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"showIcon"})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"boolean"})}),e.jsx(i.td,{children:"false"}),e.jsx(i.td,{children:"Només per a la mida sm: Mostra la icona d'estat associada o la definida amb la propietat icon, que per defecte està oculta en la mida sm."})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"action"})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"string"})}),e.jsx(i.td,{children:"'dropdown'"}),e.jsx(i.td,{children:"modifica la icona dacció situada a la dreta del component. Pot ser: dropdown, details o external."})]})]})]})}),`
`,e.jsx(i.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx(i.h3,{id:"relació-estats-criticitat",children:"Relació estats: criticitat"}),`
`,e.jsx(i.p,{children:"Els estats de criticitat han de definir-se en anglès per a mantenir la consistència en el codi de la llibreria. Cal seguir la següent taula per obtenir la correspondència:"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Criticitat"})}),e.jsx(i.td,{children:"Molt Greu"}),e.jsx(i.td,{children:"Greu"}),e.jsx(i.td,{children:"Greu lleu"}),e.jsx(i.td,{children:"Moderat Greu"}),e.jsx(i.td,{children:"Moderat"}),e.jsx(i.td,{children:"Moderat lleu"}),e.jsx(i.td,{children:"Lleu moderat"}),e.jsx(i.td,{children:"Lleu"}),e.jsx(i.td,{children:"Poc"}),e.jsx(i.td,{children:"Correcte"}),e.jsx(i.td,{children:"No determinat"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"state"})}),e.jsx(i.td,{children:"danger-high"}),e.jsx(i.td,{children:"danger"}),e.jsx(i.td,{children:"danger-low"}),e.jsx(i.td,{children:"moderate-high"}),e.jsx(i.td,{children:"moderate"}),e.jsx(i.td,{children:"moderate-low"}),e.jsx(i.td,{children:"slight-high"}),e.jsx(i.td,{children:"slight"}),e.jsx(i.td,{children:"slight-low"}),e.jsx(i.td,{children:"correct"}),e.jsx(i.td,{children:"undetermined"})]})]})]}),`
`,e.jsx(i.h3,{id:"relació-estats-informació",children:"Relació estats: Informació"}),`
`,e.jsx(i.p,{children:"En el cas dels estats d'informació, aquests concedeixen amb els estats interns del component."}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{}),e.jsx(i.th,{})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Informació"})}),e.jsx(i.td,{children:"Ideal"}),e.jsx(i.td,{children:"Crític"}),e.jsx(i.td,{children:"Alerta"}),e.jsx(i.td,{children:"Info"}),e.jsx(i.td,{children:"Info-alt"}),e.jsx(i.td,{children:"Neutral"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"state"})}),e.jsx(i.td,{children:"ideal"}),e.jsx(i.td,{children:"critical"}),e.jsx(i.td,{children:"alert"}),e.jsx(i.td,{children:"info"}),e.jsx(i.td,{children:"info-alt"}),e.jsx(i.td,{children:"neutral"})]})]})]}),`
`,e.jsx(i.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Name"}),e.jsx(i.th,{children:"Description"})]})}),e.jsx(i.tbody,{children:e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"onClick"})}),e.jsx(i.td,{children:"Notifica a l'usuari quan es fa clic al botó."})]})})]})}),`
`,e.jsx(i.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#mides",children:"Mides"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#disabled",children:"Disabled"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#amb-tooltip",children:"Amb tooltip"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#amb-icon",children:"Amb icon"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#amb-icon-sm",children:"Amb icon SM"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#amb-acci%C3%B3",children:"Amb acció"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#criticitat",children:"Criticitat"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#informaci%C3%B3",children:"Informació"})}),`
`]}),`
`,e.jsx(i.h3,{id:"mides",children:"Mides"}),`
`,e.jsx(i.p,{children:"Utilitzarem la mida (sm | md | lg | xl )."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(i.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(i.h3,{id:"amb-tooltip",children:"Amb tooltip"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(i.h3,{id:"amb-icon",children:"Amb icon"}),`
`,e.jsxs(i.p,{children:["Podem modificar la icona assignada a cada estat utilitzant la propietat ",e.jsx(i.code,{children:"icon"}),"."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(i.h3,{id:"amb-icon-sm",children:"Amb icon SM"}),`
`,e.jsxs(i.p,{children:["Mostra la icona d'estat associada o la definida amb la propietat icon, que per defecte està oculta en la mida sm, utilitzant les propietats ",e.jsx(i.code,{children:"showIcon"})," i ",e.jsx(i.code,{children:"icon"}),"."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(i.h3,{id:"amb-acció",children:"Amb acció"}),`
`,e.jsxs(i.p,{children:["Podem modificar la icona dacció utilitzant la propietat ",e.jsx(i.code,{children:"action"}),". Pot ser ",e.jsx(i.code,{children:"dropdown"})," (defecte), ",e.jsx(i.code,{children:"details"})," o ",e.jsx(i.code,{children:"external"}),"."]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(i.h3,{id:"criticitat",children:"Criticitat"}),`
`,e.jsx("h5",{children:"Criticitat: Molt Greu"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx("h5",{children:"Criticitat: Greu"}),`
`,e.jsx(s,{of:b}),`
`,e.jsx("h5",{children:"Criticitat: Greu Lleu"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx("h5",{children:"Criticitat: Moderat Greu"}),`
`,e.jsx(s,{of:C}),`
`,e.jsx("h5",{children:"Criticitat: Moderat"}),`
`,e.jsx(s,{of:I}),`
`,e.jsx("h5",{children:"Criticitat: Moderat lleu"}),`
`,e.jsx(s,{of:M}),`
`,e.jsx("h5",{children:"Criticitat: Lleu moderat"}),`
`,e.jsx(s,{of:q}),`
`,e.jsx("h5",{children:"Criticitat: Lleu"}),`
`,e.jsx(s,{of:w}),`
`,e.jsx("h5",{children:"Criticitat: Poc"}),`
`,e.jsx(s,{of:A}),`
`,e.jsx("h5",{children:"Criticitat: Correcte"}),`
`,e.jsx(s,{of:v}),`
`,e.jsx("h5",{children:"Criticitat: No determinat"}),`
`,e.jsx(s,{of:D}),`
`,e.jsx(i.h3,{id:"informació",children:"Informació"}),`
`,e.jsxs(i.p,{children:["En els estats d’informació podem utilitzar la propietat ",e.jsx(i.code,{children:"outlined"})," per a mostrar la versió alternativa del component."]}),`
`,e.jsx("h5",{children:"Informació: Ideal"}),`
`,e.jsx(s,{of:y}),`
`,e.jsx("h5",{children:"Informació: Critic"}),`
`,e.jsx(s,{of:N}),`
`,e.jsx("h5",{children:"Informació: Alert"}),`
`,e.jsx(s,{of:S}),`
`,e.jsx("h5",{children:"Informació: Info"}),`
`,e.jsx(s,{of:P}),`
`,e.jsx("h5",{children:"Informació: Info Alt"}),`
`,e.jsx(s,{of:L}),`
`,e.jsx("h5",{children:"Informació: Neutral"}),`
`,e.jsx(s,{of:z}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Versió"}),e.jsx(i.th,{children:"Canvis"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"2.7.0"})}),e.jsx(i.td,{children:"S’ha afegit la variant external per a la propietat action."})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"2.5.1"})}),e.jsxs(i.td,{children:["S’ha modificat l’aparença del component per incloure una icona a la dreta que farà referència a les diferents accions que pot representar aquest botó d’estil badge.",e.jsx("br",{}),"S'ha afegit la propietat width que modifica l'amplada automàtica del component per l'amplada fixa definida en píxels.",e.jsx("br",{}),"S'ha afegit la propietat showIcon que mostra la icona d'estat associada o la definida amb la propietat icon, que per defecte està oculta en la mida sm."]})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"2.4.0"})}),e.jsx(i.td,{children:"Nou web component."})]})]})]})]})}function Y(n={}){const{wrapper:i}={...d(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{Y as default};
