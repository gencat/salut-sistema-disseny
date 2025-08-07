import{j as e,M as o,T as l,C as s}from"./index-DS-34JQe.js";import{useMDXComponents as t}from"./index-PSX0vFQO.js";import{S as d,P as a,B as c,I as p,a as x,b as h,c as j,d as m,F as f,e as u}from"./popover.stories-vxoe54Ir.js";import"./iframe-D_YQAhjb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function r(n){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h5:"h5",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
`,e.jsx(o,{of:d}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("component-title",{children:"dss-popover"})]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:a}),`
`,e.jsxs(i.p,{children:["Dentro del component podem utilitzar els slots 'body' o 'item-list' per definir dos tipus de contingut. Per a això podem fer ús del subcomponent ",e.jsx(i.code,{children:'<dss-popover-body slot="body">'})," o del component ",e.jsx(i.code,{children:'<dss-item-list slot="item-list">'}),", cadascun amb les seves respectives propietats."]}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#default",children:"Default"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#item-list",children:"Item List"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#posici%C3%B3",children:"Posició"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#filters",children:"Filters"})}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsx(i.h3,{id:"default",children:"Default"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Min-width: 300px"}),`
`,e.jsx(i.li,{children:"Max-width: 500px"}),`
`,e.jsx(i.li,{children:"Max-height: 480px (Si el contingut del popover supera l'altura màxima permesa, apareixerà una barra de desplaçament a l'interior del component.)"}),`
`]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h3,{id:"item-list",children:"Item List"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(i.h3,{id:"posició",children:"Posició"}),`
`,e.jsx(i.p,{children:e.jsxs(i.em,{children:[e.jsx(i.strong,{children:"Nota:"})," En aquest exemple farem servir la propietat 'position'."]})}),`
`,e.jsx(i.h5,{id:"superior",children:"Superior"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(i.h5,{id:"dreta",children:"Dreta"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(i.h5,{id:"inferior",children:"Inferior"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(i.h5,{id:"esquerra",children:"Esquerra"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h3,{id:"filters",children:"Filters"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Posició fixa: 'bottom'"}),`
`,e.jsx(i.li,{children:"Flip deshabilitat"}),`
`,e.jsx(i.li,{children:"Width: 500px"}),`
`,e.jsx(i.li,{children:"Max-height: Calculat dinàmicament, espai disponible entre l'inici del popover i el final del viewport del navegador disponible."}),`
`]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["Per aplicar el contingut del popover de filtres dins del ",e.jsx(i.code,{children:"custom-table"}),", es pot copiar el ",e.jsx(i.code,{children:"dss-popover-body"})," i ",e.jsx(i.code,{children:"dss-popover-footer"})," de l'exemple i canviar el nom dels slots per ",e.jsx(i.strong,{children:"filters-popover-body"})," i ",e.jsx(i.strong,{children:"filters-popover-footer"}),". ",e.jsx(i.a,{href:"/docs/components-custom-table-header--docs#popover",children:"Vegeu l'exemple aquí"}),"."]}),`
`]}),`
`,e.jsx(i.h5,{id:"filter-amb-header",children:"Filter amb header"}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(i.h5,{id:"filter-sense-header",children:"Filter sense header"}),`
`,e.jsx(s,{of:u})]})}function D(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{D as default};
