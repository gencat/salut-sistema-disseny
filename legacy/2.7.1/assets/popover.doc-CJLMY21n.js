import{j as e,M as l,T as d,C as s,a as o}from"./index-38zNK1Ms.js";import{useMDXComponents as t}from"./index-CYIFmVlv.js";import{S as a,P as c,B as h,I as x,a as j,b as p,c as m,d as f,F as u,e as g}from"./popover.stories-vxoe54Ir.js";import"./iframe-B9pHa-5w.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function r(i){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
`,e.jsx(n.p,{children:"Un Popover mostra als usuaris que hi ha més informació per completar el flux de treball."}),`
`,e.jsxs(n.p,{children:["Dentro del component podem utilitzar els slots 'body' o 'item-list' per definir dos tipus de contingut. Per a això podem fer ús del subcomponent ",e.jsx(n.code,{children:'<dss-popover-body slot="body">'})," o del component ",e.jsx(n.code,{children:'<dss-item-list slot="item-list">'}),", cadascun amb les seves respectives propietats."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(o,{}),`
`,e.jsx(n.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"variant"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'default'"}),e.jsxs(n.td,{children:["Modifica la versió del component. Pot ser: '",e.jsx(n.strong,{children:"default"}),"' o '",e.jsx(n.strong,{children:"filter"}),"'."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"hideHeader"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Amaga la capçalera del popover."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsxs(n.strong,{children:["title",e.jsx("span",{children:"*"})]})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Titol que es mostra dins del component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsxs(n.strong,{children:["actionIcon",e.jsx("span",{children:"*"})]})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Mostra una icona que permet executar una acció."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"hideCloseIcon"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Amaga la icona per tancar el component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"position"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'top'"}),e.jsx(n.td,{children:"Defineix la posició del popover dins de l’element relacionat. Pot ser: top, left, bottom, right."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"open"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Mostra el component quan aquesta propietat està definida."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"disableParentClick"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Desactiva la funcionalitat interna per mostrar el component quan es fa clic al contenidor pare."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"popoverFixed"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Modifica l'estratègia de posicionament del desplegable a fixed en lloc d'absolute. Utilitza-ho només en casos on el desplegable no apareix correctament perquè està afectat per algun position: absolute o overflow:hidden."})]})]})]})}),`
`,e.jsx(n.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onAction"})}),e.jsx(n.td,{children:"Esdeveniment que es llança quan es fa clic a la icona d'acció."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onClose"})}),e.jsx(n.td,{children:"Esdeveniment que es llança quan es fa clic a la icona per tancar el popover."})]})]})]})}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#contingut-text",children:"Per defecte: text"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#contingut-lista-delements",children:"Per defecte: lista d'elements"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#posici%C3%B3",children:"Per defecte: posició"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#filtres-amb-header",children:"Filtres amb capçalera"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#filtres-sense-header",children:"Filtres sense capçalera"})}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsx(n.h3,{id:"variant-per-defecte",children:"Variant per defecte"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Min-width: 300px"}),`
`,e.jsx(n.li,{children:"Max-width: 500px"}),`
`,e.jsx(n.li,{children:"Max-height: 480px (Si el contingut del popover supera l'altura màxima permesa, apareixerà una barra de desplaçament a l'interior del component.)"}),`
`]}),`
`,e.jsx(n.h5,{id:"contingut-text",children:"Contingut: text"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h5,{id:"contingut-lista-delements",children:"Contingut: lista d'elements"}),`
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
`,e.jsx(s,{of:f}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"variant-filtres",children:"Variant filtres"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Posició fixa: 'bottom'"}),`
`,e.jsx(n.li,{children:"Flip deshabilitat"}),`
`,e.jsx(n.li,{children:"Width: 500px"}),`
`,e.jsx(n.li,{children:"Max-height: Calculat dinàmicament, espai disponible entre l'inici del popover i el final del viewport del navegador disponible."}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Per aplicar el contingut del popover de filtres dins del ",e.jsx(n.code,{children:"custom-table"}),", es pot copiar el ",e.jsx(n.code,{children:"dss-popover-body"})," i ",e.jsx(n.code,{children:"dss-popover-footer"})," de l'exemple i canviar el nom dels slots per ",e.jsx(n.strong,{children:"filters-popover-body"})," i ",e.jsx(n.strong,{children:"filters-popover-footer"}),". ",e.jsx(n.a,{href:"/docs/components-custom-table-header--docs#popover",children:"Vegeu l'exemple aquí"}),"."]}),`
`]}),`
`,e.jsx(n.h5,{id:"filtres-amb-header",children:"Filtres amb header"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h5,{id:"filtres-sense-header",children:"Filtres sense header"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Versió"}),e.jsx(n.th,{children:"Canvis"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.7.1"})}),e.jsxs(n.td,{children:["S'ha afegit la variant filter que modifica l'aparença del component i fixa la seva posició a la part inferior.",e.jsx("br",{})," S'ha eliminat la propietat hasDivider."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.2.0"})}),e.jsx(n.td,{children:"S'ha corregit el posicionament i l'ombra de la fletxa indicadora que apareix en desplegar el popover."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.3"})}),e.jsx(n.td,{children:"S'ha afegit l'esdeveniment onClose quan el popover es tanca de qualsevol manera, no només fent clic a icona de tancar."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.2"})}),e.jsx(n.td,{children:"S'ha corregit un error de posicionament després que l'element pare s'hagi desplaçat a la pantalla."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.0"})}),e.jsx(n.td,{children:"Refactor v2."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.11.0"})}),e.jsx(n.td,{children:"Nou web component."})]})]})]})]})}function F(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{F as default};
