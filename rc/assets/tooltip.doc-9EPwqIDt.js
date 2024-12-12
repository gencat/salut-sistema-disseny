import{ae as e,af as r,ag as o,ah as t,ai as a}from"./index-Dxx82nxn.js";import{u as l}from"./index-w933pGNw.js";import{S as d,P as c,a as x,A as h}from"./tooltip.stories-C41kQzR2.js";import"./iframe-BDLrX2vE.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";function s(i){const n={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
`,e.jsx(r,{of:d}),`
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
`,e.jsx(a,{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"propietats",children:"Propietats"}),`
`,e.jsx(n.h3,{id:"dss-tooltip",children:"dss-tooltip"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Àmbit"}),e.jsx(n.th,{children:"Condition"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"positon"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"top"}),e.jsx(n.td,{children:"Defineix la posició del tooltip dins de l’element relacionat."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"align"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"left"}),e.jsx(n.td,{children:"Modifica l'alineació del text dins del tooltip."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"hidden"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Oculta el component dinàmicament."})]})]})]}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#posici%C3%B3",children:"Posició"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#alineaci%C3%B3",children:"Alineació"})}),`
`]}),`
`,e.jsx(n.h3,{id:"posició",children:"Posició"}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h3,{id:"alineació",children:"Alineació"}),`
`,e.jsx(t,{of:h})]})}function y(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{y as default};
