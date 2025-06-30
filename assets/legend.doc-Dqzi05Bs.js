import{j as e,M as t,T as d,C as r,a as c}from"./index-DhUcFbDN.js";import{useMDXComponents as i}from"./index-BDVYwx0h.js";import{S as o,P as a,C as h,I as x}from"./legend.stories-BTr_vIHS.js";import"./iframe-DOsF_W3z.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function l(n){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
    }
  `}),`
`,e.jsx(t,{of:o}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(d,{}),e.jsx("dss-badge",{text:"dss-legend",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:`Els Legends resumeixen les propietats visuals distintives, com ara els colors
utilitzats en la visualització. Tanmateix, ajuda l'usuari a crear les
associacions necessàries per donar sentit al gràfic.`}),`
`,e.jsxs(s.p,{children:["Utilitzarem la propietat ",e.jsx(s.strong,{children:"orientation"}),` per personalitzar la orientació del contenidor dels ítems. Per defecte,
tenen disposició en fila, però podem donar la orientació de columna indicant amb `,e.jsx(s.strong,{children:"column"}),". Es permeten ",e.jsx(s.strong,{children:"fins a 5 ítems per fila o columna"}),`.
Per defecte en tindrà 5 ítems, però amb la propietat `,e.jsx(s.strong,{children:"itemsPerRowOrColumn"})," es pot escollir el número d'ítems a mostrar."]}),`
`,e.jsxs(s.p,{children:[`Cada color i títol de llegenda es construeix a través de la classe
`,e.jsx(s.strong,{children:"dss-legend__item"}),`, i el color de la llegenda s'afegeix en la variable
`,e.jsx(s.strong,{children:"--legend-bg-color"}),". Se li poden especificar qualsevol color juntament amb el seu matís."]}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:[e.jsx(s.strong,{children:"Nota:"})," els colors que s'han d'utilitzar són els de Foundations."]})}),`
`,e.jsxs(s.p,{children:["Una altre propietat és la de ",e.jsx(s.strong,{children:"type"}),`, amb la qual es pot escollir entre mostrar una icona o el punt que ve per defecte a la llegenda.
En el cas de voler mostrar una icona, se li ha d'especificar mitjançant la propietat `,e.jsx(s.strong,{children:"icon"}),"."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(c,{}),`
`,e.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["items",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"Array"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"row"})}),e.jsx(s.td,{children:"List d'elements"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["type",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"color"})}),e.jsx(s.td,{children:"Mostrar un color o una icona per definir les llegendes."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"orientation"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"row"})}),e.jsx(s.td,{children:"Pot ser: row o column"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"itemsPerRowOrColumn"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number"})}),e.jsx(s.td,{children:"5"}),e.jsx(s.td,{children:"Número d'ítems per fila o columna"})]})]})]})}),`
`,e.jsx(s.h4,{id:"legenditems",children:"legend:items"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["label",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"''"}),e.jsx(s.td,{children:"Text mostrat a la llegenda."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"icon"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Mostra una icona per a la llegenda en lloc d’un color."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"color"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Color per a la llegenda definit a les foundations. Pot ser: 'primary', 'red', 'yellow', 'green', 'blue', 'purple', 'neutral'"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"shade"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"To del color definit a les foundations. Pot ser: '50', '100', '200', '300', '400', '500', '600', '700', '800', '900'"})]})]})]})}),`
`,e.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#color",children:"Color"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#icona",children:"Icona"})}),`
`]}),`
`,e.jsx(s.h3,{id:"color",children:"Color"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(s.h3,{id:"icona",children:"Icona"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.0.0"})}),e.jsx(s.td,{children:"Nou web component."})]})})]})]})}function C(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{C as default};
