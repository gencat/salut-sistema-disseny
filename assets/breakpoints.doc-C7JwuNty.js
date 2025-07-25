import{j as e,M as a,S as i}from"./index-drePgg27.js";import{useMDXComponents as t}from"./index-Clj9JPy_.js";import"./DocsRenderer-CFRXHY34-D_nDHUV5.js";import"./iframe-BtXA6xDI.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";function r(n){const s={blockquote:"blockquote",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .description {
      font-size: 13px;
      text-align: center;
      color: var(--color-neutral-400);
    }

    .breakpoint-demo {
      height: 20px;
      width: 100%;
      background-color: var(--color-primary-900);
    }

    @media screen and (min-width: 1440px) and (max-width: 1919px) {
      .breakpoint-demo {
        background-color: var(--color-primary-500);
      }
    }

    @media only screen and (max-width: 1439px) {
      .breakpoint-demo {
        background-color: var(--color-primary-200);
      }
    }
  `}),`
`,e.jsx(a,{title:"Foundations/Breakpoints",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx(s.h1,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsx(s.p,{children:`Els punts de ruptura, o breakpoints, són punts clau en el disseny responsiu que defineixen
com ha de canviar la presentació d'una UI en diferents dimensions de pantalla.`}),`
`,e.jsx(s.p,{children:`Aquests punts permeten adaptar de manera eficient el contingut i la estructura de la UI per oferir
una experiència òptima als usuaris, ja sigui en pantalles grans com a ordinadors de sobretaula o en
dispositius mòbils més petits.`}),`
`,e.jsx(s.p,{children:"En el nostre sistema de disseny disposem de 4 punts de ruptura."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom"}),e.jsx(s.th,{children:"min-width"}),e.jsx(s.th,{children:"max-width"}),e.jsx(s.th,{children:"Grid"}),e.jsx(s.th,{children:"Content Max-width"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Dispositiu gran"})}),e.jsx(s.td,{children:"1920px"}),e.jsx(s.td,{children:"∞"}),e.jsx(s.td,{children:"lg"}),e.jsx(s.td,{children:"100%"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Dispositiu mitjà"})}),e.jsx(s.td,{children:"1440px"}),e.jsx(s.td,{children:"1919px"}),e.jsx(s.td,{children:"md"}),e.jsx(s.td,{children:"100%"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Dispositiu petit"})}),e.jsx(s.td,{children:"1024px"}),e.jsx(s.td,{children:"1439px"}),e.jsx(s.td,{children:"sm"}),e.jsx(s.td,{children:"100%"})]})]})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"A les pantalles de menys de 1024px no se'ls donarà suport directe, per tant, s'utilitzarà la mida sm."}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"media-queries",children:"Media queries"}),`
`,e.jsx(s.p,{children:`Un media query és una tècnica de disseny web que permet adaptar els estils d'una pàgina en funció de les
característiques del dispositiu, com ara la mida de la pantalla o la resolució.`}),`
`,e.jsx(s.p,{children:`Els media queries es fan servir com a part de les fulls d'estil en cascada (CSS) i permeten als desenvolupadors
web crear dissenys responsius que s'ajustin automàticament a diferents mides de pantalla i dispositius.`}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"El breakpoint per defecte serà sempre per dispositiu gran."}),`
`]}),`
`,e.jsx(i,{code:`
  /* Codi per a la resolució base 1920px (Desktop) */
  
  @media screen and (min-width: 1440px) and (max-width: 1919px) {
      /* Estils específics per a pantalles de 1440 píxels o més */
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
      /* Estils per a dispositius amb ample entre 1024px i 1439px */
  }
`}),`
`,e.jsx(s.p,{children:`A mode de recomanació, i atès que no hi ha suport per a pantalles per sota de 1024px, proposem ajustar el disseny d’aquestes pantalles al dels dispositius
petits perquè el contingut s’hi pugui adaptar de la millor manera possible. Per a això, hem de reajustar les media queries de la següent manera:`}),`
`,e.jsx(i,{code:`
  /* Codi per a la resolució base 1920px (Desktop) */
  
  @media screen and (min-width: 1440px) and (max-width: 1919px) {
      /* Estils específics per a pantalles de 1440 píxels o més */
  }

  @media screen and (max-width: 1439px) {
      /* Estils per a dispositius amb ample entre 0 i 1439px */
  }
`}),`
`,e.jsx(s.h3,{id:"try-it",children:"Try it"}),`
`,e.jsx("p",{class:"description",children:"Redueix l'amplada de la finestra/navegador per canviar el color de fons en el punt de ruptura de la consulta de mitjans."}),`
`,e.jsx("div",{class:"breakpoint-demo"}),`
`,e.jsx("br",{})]})}function u(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{u as default};
