import{j as e,M as r,T as o,C as t,a as d}from"./index-C53Pb-wt.js";import{useMDXComponents as l}from"./index-CCGKjApK.js";import{S as a,P as c,a as h,A as x}from"./tooltip.stories-C7N1xBUX.js";import"./iframe-C5JhQJD_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function s(i){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .innerZoomElementWrapper {
      flex-direction: column;
      align-items: center;
      gap: 150px;
    }
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 120px;
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
  `}),`
`,e.jsx(r,{of:a}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(o,{}),e.jsx("dss-badge",{text:"dss-tooltip",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(n.p,{children:"Un Tooltip és un contenidor que mostra temporalment un text breu i contextual. Aquest s'activa quan l’usuari passa el cursor per sobre d’un element."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Breaking change:"})}),`
`,e.jsx(n.p,{children:"La lògica per mostrar o amagar el component s’ha implementat dins del component per facilitar-ne l’ús, de manera que és el mateix component qui gestiona els esdeveniments mouse-enter o mouse-leave sobre l’element pare per mostrar el tooltip a la posició indicada."}),`
`,e.jsx(n.p,{children:"Per aquest motiu, és imprescindible que s’elimini en les iniciatives qualsevol lògica CSS afegida anteriorment, incloent qualsevol position:relative o position:absolute."}),`
`,e.jsx(n.p,{children:"Aquesta nova funcionalitat s’ha implementat de manera que els tooltips no es vegin afectats pel flux de la resta de components, corregint així el problema que trobàvem fins ara quan un tooltip apareixia retallat a causa d’un contenidor amb la propietat overflow definida."}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(d,{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"propietats",children:"Propietats"}),`
`,e.jsx(n.h3,{id:"dss-tooltip",children:"dss-tooltip"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"positon"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"top"}),e.jsx(n.td,{children:"Defineix la posició del tooltip dins de l’element relacionat."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"variant"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'default'"}),e.jsx(n.td,{children:"Modifica l'aparença del tooltip a una versió amb espai més reduït. Pot ser: default o reduced."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"align"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"left"}),e.jsx(n.td,{children:"Modifica l'alineació del text dins del tooltip."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"hidden"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Oculta el component dinàmicament."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"tooltipFixed"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Modifica l'estratègia de posicionament del desplegable a fixed en lloc d'absolute. Utilitza-ho només en casos on el desplegable no apareix correctament perquè està afectat per algun position: absolute o overflow:hidden."})]})]})]})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#posici%C3%B3",children:"Posició"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#alineaci%C3%B3",children:"Alineació"})}),`
`]}),`
`,e.jsx(n.h3,{id:"posició",children:"Posició"}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h3,{id:"alineació",children:"Alineació"}),`
`,e.jsx(t,{of:x}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Versió"}),e.jsx(n.th,{children:"Canvis"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.2.0"})}),e.jsxs(n.td,{children:["S'ha eliminat la fletxa del component.",e.jsx("br",{}),"S'ha afegit la propietat tooltipFixed."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.1.1"})}),e.jsx(n.td,{children:"S'ha modificat el padding intern del component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.0"})}),e.jsx(n.td,{children:"Refactor v2."})]})]})]})]})}function y(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{y as default};
