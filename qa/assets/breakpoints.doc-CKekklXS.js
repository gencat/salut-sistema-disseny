import{j as e,M as t,S as d}from"./index-KMACJRXa.js";import{useMDXComponents as i}from"./index-XPDFNXkx.js";import"./DocsRenderer-CFRXHY34-aYoYhhAt.js";import"./iframe-CyG353bw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";function r(s){const n={blockquote:"blockquote",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .description {
      font-size: 13px;
      text-align: center;
      color: var(--color-neutral-400);
    }

    .breakpoint-demo {
      height: 20px;
      width: 100%;
      background-color: var(--color-primary-800);
    }

    @media screen and (min-width: 1440px) and (max-width: 1919px) {
      .breakpoint-demo {
        background-color: var(--color-primary-600);
      }
    }
    
    @media only screen and (min-width: 1024px) and (max-width: 1439px) {
      .breakpoint-demo {
        background-color: var(--color-primary-400);
      }
    }
    
    @media only screen and (max-width: 1023px) {
      .breakpoint-demo {
        background-color: var(--color-primary-200);
      }
    }
  `}),`
`,e.jsx(t,{title:"Foundations/Breakpoints",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx(n.h1,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsx(n.p,{children:`Els punts de ruptura, o breakpoints, són punts clau en el disseny responsiu que defineixen
com ha de canviar la presentació d'una UI en diferents dimensions de pantalla.`}),`
`,e.jsx(n.p,{children:`Aquests punts permeten adaptar de manera eficient el contingut i la estructura de la UI per oferir
una experiència òptima als usuaris, ja sigui en pantalles grans com a ordinadors de sobretaula o en
dispositius mòbils més petits.`}),`
`,e.jsx(n.p,{children:"En el nostre sistema de disseny disposem de 4 punts de ruptura."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Nom"}),e.jsx(n.th,{children:"min-width"}),e.jsx(n.th,{children:"max-width"}),e.jsx(n.th,{children:"Grid"}),e.jsx(n.th,{children:"Content Max-width"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"breakpoint-desktop"})}),e.jsx(n.td,{children:"1920px"}),e.jsx(n.td,{children:"∞"}),e.jsx(n.td,{children:"XL"}),e.jsx(n.td,{children:"1920px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"breakpoint-laptop-lg"})}),e.jsx(n.td,{children:"1440px"}),e.jsx(n.td,{children:"1919px"}),e.jsx(n.td,{children:"L"}),e.jsx(n.td,{children:"100%"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"breakpoint-laptop"})}),e.jsx(n.td,{children:"1024px"}),e.jsx(n.td,{children:"1439px"}),e.jsx(n.td,{children:"M"}),e.jsx(n.td,{children:"100%"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"breakpoint-tablet"})}),e.jsx(n.td,{children:"0"}),e.jsx(n.td,{children:"1023px"}),e.jsx(n.td,{children:"S"}),e.jsx(n.td,{children:"100%"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"media-queries",children:"Media queries"}),`
`,e.jsx(n.p,{children:`Un media query és una tècnica de disseny web que permet adaptar els estils d'una pàgina en funció de les
característiques del dispositiu, com ara la mida de la pantalla o la resolució.`}),`
`,e.jsx(n.p,{children:`Els media queries es fan servir com a part de les fulls d'estil en cascada (CSS) i permeten als desenvolupadors
web crear dissenys responsius que s'ajustin automàticament a diferents mides de pantalla i dispositius.`}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"El breakpoint per defecte serà sempre Desktop. No es farà servir una metodologia First Mobile ja que l'ús de breakpoints menors es limitarà a components i temperats molt específics."}),`
`]}),`
`,e.jsx(d,{code:`
  /* Codi per a la resolució base 1920px (Desktop) */
  @media screen and (min-width: 1440px) and (max-width: 1919px) {
      /* Estils específics per a pantalles de 1440 píxels o més */
  }
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
      /* Estils per a dispositius amb ample entre 1024px i 1339px */
  }
  @media only screen and (max-width: 1023px) {
      /* Estils per a dispositius amb ample màxim de 1023px */
  }
`}),`
`,e.jsx(n.h3,{id:"try-it",children:"Try it"}),`
`,e.jsx("p",{class:"description",children:"Reduce the window/browser width to change the background color on media query breakpoint"}),`
`,e.jsx("div",{class:"breakpoint-demo"}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Nota:"})," Les variables CSS no funcionen dins de media queries i container queries. En cas d'estar treballant en una aplicació amb Sass/SCSS recomanem definir variables pròpies del tipus:"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Nom"}),e.jsx(n.th,{children:"Value"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"$breakpoint-laptop-lg-max"})}),e.jsx(n.td,{children:"1919px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"$breakpoint-laptop-lg-min"})}),e.jsx(n.td,{children:"1440px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"$breakpoint-laptop-max"})}),e.jsx(n.td,{children:"1439px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"$breakpoint-laptop-min"})}),e.jsx(n.td,{children:"1024px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"$breakpoint-tablet-max"})}),e.jsx(n.td,{children:"1023px"})]})]})]})]})}function m(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{m as default};
