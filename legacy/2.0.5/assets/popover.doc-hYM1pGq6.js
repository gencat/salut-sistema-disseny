import{j as e,M as d,T as l,C as s,a as c}from"./index-BxQK2Zvo.js";import{useMDXComponents as r}from"./index-BsUR1LQU.js";import{S as o,P as a,B as h,I as x,a as j,b as p,c as m,d as u}from"./popover.stories-Myann7nf.js";import"./iframe-yYBljcj6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";function t(i){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
   .innerZoomElementWrapper{
      height: 500px;
      display: flex;
      align-items: center;
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
`,e.jsx(d,{of:o}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("dss-badge",{text:"dss-popover",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(n.p,{children:"Un Popover mostra als usuaris que hi ha més informació per completar el flux de treball."}),`
`,e.jsxs(n.p,{children:["Dentro del component podem utilitzar els slots 'body' o 'item-list' per definir dos tipus de contingut. Per a això podem fer ús del subcomponent ",e.jsx(n.code,{children:'<dss-popover-body slot="body">'})," o del component ",e.jsx(n.code,{children:'<dss-item-list slot="item-list">'}),", cadascun amb les seves respectives propietats."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Àmbit"}),e.jsx(n.th,{children:"Condition"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"hasDivider"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opciona"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Mostra un divisor entre la capçalera i el contingut del popover."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"hideCloseIcon"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opciona"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Amaga la icona per tancar el component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"title"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Requerida"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Titol que es mostra dins del component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"position"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"'top'"}),e.jsx(n.td,{children:"Defineix la posició del popover dins de l’element relacionat. Pot ser: top, left, bottom, right."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"actionIcon"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Requerida"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Mostra una icona que permet executar una acció."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"open"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opciona"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Mostra el component quan aquesta propietat està definida."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"disableParentClick"})}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Desactiva la funcionalitat interna per mostrar el component quan es fa clic al contenidor pare."}),e.jsx(n.td,{}),e.jsx(n.td,{})]})]})]}),`
`,e.jsx(n.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Àmbit"}),e.jsx(n.th,{children:"Condition"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onAction"})}),e.jsx(n.td,{children:"Output"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"CustomnEvent"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Esdeveniment que es llança quan es fa clic a la icona d'acció."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onClose"})}),e.jsx(n.td,{children:"Output"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"CustomnEvent"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Esdeveniment que es llança quan es fa clic a la icona per tancar el popover."})]})]})]}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#default",children:"Default"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#item-list",children:"Item List"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#posici%C3%B3",children:"Posició"})}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"item-list",children:"Item List"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"posició",children:"Posició"}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Nota:"})," En aquest exemple farem servir la propietat 'position'."]})}),`
`,e.jsx(n.h5,{id:"superior",children:"Superior"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h5,{id:"dreta",children:"Dreta"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h5,{id:"inferior",children:"Inferior"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h5,{id:"esquerra",children:"Esquerra"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"ús",children:"Ús"}),`
`,e.jsx(n.h5,{id:"mida-màxima-amplada-i-alçada",children:"Mida màxima: amplada i alçada"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Min-width: 356px"}),`
`,e.jsx(n.li,{children:"Min-width: 500px"}),`
`,e.jsx(n.li,{children:"Max-height: 480px (Si el contingut del popover supera l'altura màxima permesa, apareixerà una barra de desplaçament a l'interior del component.)"}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Versió"}),e.jsx(n.th,{children:"Canvis"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.3"})}),e.jsx(n.td,{children:"S'ha afegit l'esdeveniment onClose quan el popover es tanca de qualsevol manera, no només fent clic a icona de tancar."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.2"})}),e.jsx(n.td,{children:"S'ha corregit un error de posicionament després que l'element pare s'hagi desplaçat a la pantalla."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.0"})}),e.jsx(n.td,{children:"Refactor v2."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.11.0"})}),e.jsx(n.td,{children:"Nou web component."})]})]})]})]})}function P(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{P as default};
