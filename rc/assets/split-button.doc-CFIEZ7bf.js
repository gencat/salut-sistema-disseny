import{ae as e,af as r,ag as l,ah as t,ai as c}from"./index-CQXi_Y6g.js";import{u as d}from"./index-CkYTJ7Ip.js";import{S as a,P as h,a as o,T as x,A as j,D as p,M as u}from"./split-button.stories-CAV-ol94.js";import"./iframe-i1QLOcry.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";function i(s){const n={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
   .css-1sqhzee {
    display:none
  }

  .innerZoomElementWrapper {
    flex-direction: row;
    align-items: center;
  }
  
  .wrapper {
    min-height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
  }
  `}),`
`,e.jsx(r,{of:a}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("dss-badge",{text:"dss-split-button",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(n.p,{children:`El component Split Button està compost per dos botons individuals, això ens permet executar dues accions diferents a l'interaccionar amb cadascun d'ells.
La lògica implementada només inclous la interacció amb els botons i els elements mostrats dins del component, per tant, l'acció que desencadena ha de controlar-se fora del component utilitzant els esdeveniments generats per cada botó.`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Àmbit"}),e.jsx(n.th,{children:"Condition"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"iconClose"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"expand_more"}),e.jsx(n.td,{children:"Sobreescriu la icona mostrada per defecte."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"iconOpen"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"expand_less"}),e.jsx(n.td,{children:"Sobreescriu la icona mostrada quan el component està actiu."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"text"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Text que es mostrarà sota del component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"type"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"primary"}),e.jsx(n.td,{children:"Tipus d'estil dels botons del component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"disabled"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Assigna al component l’estat deshabilitat."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"hasMenu"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Habilita el slot=menu, que permet afegir un action-menu que apareixerà a manera de desplegable quan l'usuari faci clic en el botó de tipus icona."})]})]})]}),`
`,e.jsx(n.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Àmbit"}),e.jsx(n.th,{children:"Condition"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onSplitButtonMainClick"})}),e.jsx(n.td,{children:"Output"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"CustomEvent"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Esdeveniment executat en fer clic en el botó principal del component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onSplitButtonIconClick"})}),e.jsx(n.td,{children:"Output"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"CustomEvent"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Esdeveniment executat en fer clic en el botó de tipus icona del component."})]})]})]}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#mida",children:"Mida"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tipus",children:"Tipus"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#actiu",children:"Actiu"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-menu",children:"Amb menú"})}),`
`]}),`
`,e.jsx(n.h3,{id:"mida",children:"Mida"}),`
`,e.jsx(n.p,{children:"lg (default) / md / sm"}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(n.h3,{id:"tipus",children:"Tipus"}),`
`,e.jsx(n.p,{children:"Primary / Secondary"}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h3,{id:"actiu",children:"Actiu"}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(n.h3,{id:"deshabilitat",children:"Deshabilitat"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h3,{id:"amb-menú",children:"Amb menú"}),`
`,e.jsx(t,{of:u}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Versió"}),e.jsx(n.th,{children:"Canvis"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.0"})}),e.jsx(n.td,{children:"Refactor v2."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.12.4"})}),e.jsx(n.td,{children:"S'ha modificat la posició del desplegable per millorar-ne la visibilitat en totes les mides del component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.12.2"})}),e.jsx(n.td,{children:"S'ha afegit la funcionalitat per mostrar un desplegable amb un action-menu en fer clic al botó de tipus icona."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.5.0"})}),e.jsx(n.td,{children:"Nou component que ofereix l'opció d'executar dues accions des d'un mateix element visual."})]})]})]})]})}function M(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{M as default};
