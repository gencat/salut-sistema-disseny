import{j as e,M as d,T as t,C as r,a as c}from"./index-DcCwtgtA.js";import{useMDXComponents as l}from"./index-CpKcFQy_.js";import{S as a,P as h,H as o,V as x,a as j,D as p}from"./slider.stories-BKwtC4-D.js";import"./iframe-DZFPKzkt.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-element-Dloa6E9d.js";import"./lit-html-D6a8R3xZ.js";function i(n){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
    }
    .container-slider{
      min-height: 200px;
      display: flex;
      align-items: center;
    }
  `}),`
`,e.jsx(d,{of:a}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(t,{}),e.jsx("dss-badge",{text:"dss-slider",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:"Els Sliders permeten als usuaris fer seleccions entre una sèrie de valors."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(c,{}),`
`,e.jsx(s.p,{children:`Utilitzarem el component dss-slider que per defecte s'adaptarà al 100% de l'ample del contenidor,
per tant, si volem un ample específic caldrà assignar-li l'estil necessari al contenidor.`}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["label",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'Input Range'"}),e.jsx(s.td,{children:"Label requerit en l'àmbit d'accessibilitat per a identificar l'input"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["value",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Valor inicial del slider"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["min",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number"})}),e.jsx(s.td,{children:"0"}),e.jsx(s.td,{children:"Valor mínim que pot prendre el slider"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["max",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Valor màxim que pot prendre el slider"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"step"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number"})}),e.jsx(s.td,{children:"1"}),e.jsx(s.td,{children:"Valor amb el qual el slider augmentarà o disminuirà en desplaçar-se. El valor del step ha de ser un número, divisor del màxim i del valor per defecte que es posa, si no, no funcionarà correctament."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"orient"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'horizontal'"}),e.jsx(s.td,{children:"Orientació del slider, podrà ser: horitzontal o vertical"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"disabled"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Opció per a deshabilitar el component."})]})]})]})}),`
`,e.jsx(s.p,{children:"(*) Propietats requerides."}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onDssSliderValueChange"})}),e.jsx(s.td,{children:"Retorna el valor de l'input després de fer clic o lliscar el slider."})]})})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#orientacio",children:"Orientació"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#pasos",children:"Pasos"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#deshabillitat",children:"Deshabil·litat"})}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.h3,{id:"orientació",children:"Orientació"}),`
`,e.jsxs(s.p,{children:["Les opcions son: ",e.jsx(s.strong,{children:"vertical"})," | ",e.jsx(s.strong,{children:"horizontal"})]}),`
`,e.jsx("h5",{children:"Horizontal"}),`
`,e.jsx(r,{of:o}),`
`,e.jsx("h5",{children:"Vertical"}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:[e.jsx(s.strong,{children:"Nota:"})," El div amb la classe ",e.jsx(s.strong,{children:"container-slider"}),` es només per a mostrar-ho
amb un mínim de altura a la documentació. `,e.jsx(s.strong,{children:`No es te que fer servir fora de la
pàgina de documentació.`})]})}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(s.h3,{id:"pasos",children:"Pasos"}),`
`,e.jsxs(s.p,{children:["Es recomana utilizar ",e.jsx(s.code,{children:'step="1"'}),"."]}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:[e.jsx(s.strong,{children:"Nota:"}),` El valor del step te que ser números divisors del màxim y del valor
per defecte que es pose, si no no funcionarà correctament.`]})}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(s.h3,{id:"deshabillitat",children:"Deshabil·litat"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.0.0"})}),e.jsx(s.td,{children:"Refactor v2."})]})})]})]})}function C(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{C as default};
