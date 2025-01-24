import{j as e,M as t,T as l,C as r,a as c}from"./index-BLqgKUE9.js";import{useMDXComponents as d}from"./index-C-yrU3Bz.js";import{S as h,P as a,H as o,V as x,a as j,D as p}from"./slider.stories-BR-_BtWR.js";import"./iframe-C_0fz1pU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-BBo-_xnV.js";import"./index-ogSvIofg.js";import"./lit-element-DyeN6MU1.js";import"./lit-html-CeYizTxc.js";function i(s){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
`,e.jsx(t,{of:h}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("dss-badge",{text:"dss-slider",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(n.p,{children:"Els Sliders permeten als usuaris fer seleccions entre una sèrie de valors."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(c,{}),`
`,e.jsx(n.p,{children:`Utilitzarem el component dss-slider que per defecte s'adaptarà al 100% de l'ample del contenidor,
per tant, si volem un ample específic caldrà assignar-li l'estil necessari al contenidor.`}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"propietats",children:"Propietats"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Àmbit"}),e.jsx(n.th,{children:"Condition"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"label"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Requerida"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"'Input Range'"}),e.jsx(n.td,{children:"Label requerit en l'àmbit d'accessibilitat per a identificar l'input"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"min"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"number"}),e.jsx(n.td,{children:"0"}),e.jsx(n.td,{children:"Valor mínim que pot prendre el slider"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"max"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Requerida"}),e.jsx(n.td,{children:"number"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Valor màxim que pot prendre el slider"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"value"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Requerida"}),e.jsx(n.td,{children:"number"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Valor inicial del slider"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"step"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"number"}),e.jsx(n.td,{children:"1"}),e.jsx(n.td,{children:"Valor amb el qual el slider augmentarà o disminuirà en desplaçar-se. El valor del step ha de ser un número, divisor del màxim i del valor per defecte que es posa, si no, no funcionarà correctament."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"orient"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"'horizontal'"}),e.jsx(n.td,{children:"Orientació del slider, podrà ser: horitzontal o vertical"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"disabled"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Opció per a deshabilitar el component."})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Àmbit"}),e.jsx(n.th,{children:"Condition"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onDssSliderValueChange"})}),e.jsx(n.td,{children:"Output"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"CustomEvent"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Esdeveniment que retorna el valor de l'input després de fer clic o lliscar el slider."})]})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#orientacio",children:"Orientació"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#pasos",children:"Pasos"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#deshabillitat",children:"Deshabil·litat"})}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsx(n.h3,{id:"orientació",children:"Orientació"}),`
`,e.jsxs(n.p,{children:["Les opcions son: ",e.jsx(n.strong,{children:"vertical"})," | ",e.jsx(n.strong,{children:"horizontal"})]}),`
`,e.jsx("h5",{children:"Horizontal"}),`
`,e.jsx(r,{of:o}),`
`,e.jsx("h5",{children:"Vertical"}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Nota:"})," El div amb la classe ",e.jsx(n.strong,{children:"container-slider"}),` es només per a mostrar-ho
amb un mínim de altura a la documentació. `,e.jsx(n.strong,{children:`No es te que fer servir fora de la
pàgina de documentació.`})]})}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h3,{id:"pasos",children:"Pasos"}),`
`,e.jsxs(n.p,{children:["Es recomana utilizar ",e.jsx(n.code,{children:'step="1"'}),"."]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Nota:"}),` El valor del step te que ser números divisors del màxim y del valor
per defecte que es pose, si no no funcionarà correctament.`]})}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h3,{id:"deshabillitat",children:"Deshabil·litat"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Versió"}),e.jsx(n.th,{children:"Canvis"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.0"})}),e.jsx(n.td,{children:"Refactor v2."})]})})]})]})}function O(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{O as default};
