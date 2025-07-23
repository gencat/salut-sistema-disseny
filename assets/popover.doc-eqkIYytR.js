import{j as e,M as l,T as d,C as n,a as o}from"./index-BTzLlL9D.js";import{useMDXComponents as t}from"./index-Cz3Lqr56.js";import{S as a,P as c,B as h,I as x,a as j,b as p,c as m,d as f,F as u,e as g}from"./popover.stories-vxoe54Ir.js";import"./iframe-BFL1ZyYe.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function r(i){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
   .innerZoomElementWrapper{
      height: 600px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .filter-wrapper {
      height: 600px;
      display: flex;
      flex-direction: column;
      margin-top: 32px;
    }
    .demo-wrapper {
      position: relative;
      width: fit-content;
    }
    .demo-wrapper--filter {
      align-self: start;
    }
    .demo-related-content {
      font-size: 12px;
      color: lightgray;
    }
  `}),`
`,e.jsx(l,{of:a}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(d,{}),e.jsx("dss-badge",{text:"dss-popover",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:"Un Popover mostra als usuaris que hi ha més informació per completar el flux de treball."}),`
`,e.jsxs(s.p,{children:["Dentro del component podem utilitzar els slots 'body' o 'item-list' per definir dos tipus de contingut. Per a això podem fer ús del subcomponent ",e.jsx(s.code,{children:'<dss-popover-body slot="body">'})," o del component ",e.jsx(s.code,{children:'<dss-item-list slot="item-list">'}),", cadascun amb les seves respectives propietats."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(o,{}),`
`,e.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"variant"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'default'"}),e.jsxs(s.td,{children:["Modifica la versió del component. Pot ser: '",e.jsx(s.strong,{children:"default"}),"' o '",e.jsx(s.strong,{children:"filter"}),"'."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hideHeader"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Amaga la capçalera del popover."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["title",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Titol que es mostra dins del component."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["actionIcon",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Mostra una icona que permet executar una acció."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hideCloseIcon"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Amaga la icona per tancar el component."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"position"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'top'"}),e.jsx(s.td,{children:"Defineix la posició del popover dins de l’element relacionat. Pot ser: top, left, bottom, right."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"open"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Mostra el component quan aquesta propietat està definida."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"disableParentClick"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Desactiva la funcionalitat interna per mostrar el component quan es fa clic al contenidor pare."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"popoverFixed"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Modifica l'estratègia de posicionament del desplegable a fixed en lloc d'absolute. Utilitza-ho només en casos on el desplegable no apareix correctament perquè està afectat per algun position: absolute o overflow:hidden."})]})]})]})}),`
`,e.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onAction"})}),e.jsx(s.td,{children:"Esdeveniment que es llança quan es fa clic a la icona d'acció."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onClose"})}),e.jsx(s.td,{children:"Esdeveniment que es llança quan es fa clic a la icona per tancar el popover."})]})]})]})}),`
`,e.jsx(s.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#default",children:"Default"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#item-list",children:"Item List"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#posici%C3%B3",children:"Posició"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#filters",children:"Filters"})}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.h3,{id:"default",children:"Default"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Min-width: 300px"}),`
`,e.jsx(s.li,{children:"Max-width: 500px"}),`
`,e.jsx(s.li,{children:"Max-height: 480px (Si el contingut del popover supera l'altura màxima permesa, apareixerà una barra de desplaçament a l'interior del component.)"}),`
`]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"item-list",children:"Item List"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.h3,{id:"posició",children:"Posició"}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:[e.jsx(s.strong,{children:"Nota:"})," En aquest exemple farem servir la propietat 'position'."]})}),`
`,e.jsx(s.h5,{id:"superior",children:"Superior"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.h5,{id:"dreta",children:"Dreta"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h5,{id:"inferior",children:"Inferior"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(s.h5,{id:"esquerra",children:"Esquerra"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"filters",children:"Filters"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Posició fixa: 'bottom'"}),`
`,e.jsx(s.li,{children:"Flip deshabilitat"}),`
`,e.jsx(s.li,{children:"Width: 500px"}),`
`,e.jsx(s.li,{children:"Max-height: Calculat dinàmicament, espai disponible entre l'inici del popover i el final del viewport del navegador disponible."}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Per aplicar el contingut del popover de filtres dins del ",e.jsx(s.code,{children:"custom-table"}),", es pot copiar el ",e.jsx(s.code,{children:"dss-popover-body"})," i ",e.jsx(s.code,{children:"dss-popover-footer"})," de l'exemple i canviar el nom dels slots per ",e.jsx(s.strong,{children:"filters-popover-body"})," i ",e.jsx(s.strong,{children:"filters-popover-footer"}),". ",e.jsx(s.a,{href:"/docs/components-custom-table-header--docs#popover",children:"Vegeu l'exemple aquí"}),"."]}),`
`]}),`
`,e.jsx(s.h5,{id:"filter-amb-header",children:"Filter amb header"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.h5,{id:"filter-sense-header",children:"Filter sense header"}),`
`,e.jsx(n,{of:g}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.7.1"})}),e.jsxs(s.td,{children:["S'ha afegit la variant filter que modifica l'aparença del component i fixa la seva posició a la part inferior.",e.jsx("br",{})," S'ha eliminat la propietat hasDivider."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.2.0"})}),e.jsx(s.td,{children:"S'ha corregit el posicionament i l'ombra de la fletxa indicadora que apareix en desplegar el popover."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.0.3"})}),e.jsx(s.td,{children:"S'ha afegit l'esdeveniment onClose quan el popover es tanca de qualsevol manera, no només fent clic a icona de tancar."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.0.2"})}),e.jsx(s.td,{children:"S'ha corregit un error de posicionament després que l'element pare s'hagi desplaçat a la pantalla."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.0.0"})}),e.jsx(s.td,{children:"Refactor v2."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.11.0"})}),e.jsx(s.td,{children:"Nou web component."})]})]})]})]})}function F(i={}){const{wrapper:s}={...t(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(r,{...i})}):r(i)}export{F as default};
