import{j as e,M as t,T as a,C as i,a as l}from"./index-E5f-sIfV.js";import{useMDXComponents as d}from"./index-Y2CEARYN.js";import{S as c,P as o,a as h,b as x,c as j,T as p,d as m}from"./pagination.stories-9IjkH24n.js";import"./iframe-Ru67yHrZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function r(s){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .innerZoomElementWrapper {
        flex-direction: column;
    }

    .innerZoomElementWrapper > * {
      width:100% !important;
    }
  `}),`
`,e.jsx(t,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(a,{}),e.jsx("dss-badge",{text:"dss-pagination",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-table-pagination",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(n.p,{children:`El component Pagination permet dividir grans quantitats de contingut en
fragments més petits en diverses pàgines.`}),`
`,e.jsx(n.p,{children:"Disposem de dos paginadors diferents:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"dss-pagination"})}),": és un paginador genèric que podríem aplicar a qualsevol llista. Aquest mostra els números de les pàgines disponibles i podríem moure'ns entre ells."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(l,{}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"dss-table-pagination"})}),": és un paginador específic per a taules. Mostra els botons per moure's entre pàgines però també el nombre de resultats a la taula i un selector per canviar la mida de la pàgina en qualsevol moment."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx(n.h3,{id:"dss-pagination",children:"dss-pagination"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"size"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"md"}),e.jsx(n.td,{children:"Mida del component: md o lg"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"length"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"0"}),e.jsx(n.td,{children:"Longitud de l'array que volem dividir en pàgines."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"pageSize"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"0"}),e.jsx(n.td,{children:"Nombre d'elements per pàgina que volem mostrar."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"currentIndex"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"1"}),e.jsx(n.td,{children:"Índex en què s'ha de posicionar el paginador. S'utilitza per exemple per mantenir l'estat del paginador quan l'usuari ha navegat entre diverses seccions i torna a la secció on es troba la taula."})]})]})]})}),`
`,e.jsx(n.h3,{id:"dss-table-pagination",children:"dss-table-pagination"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"size"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"md"}),e.jsx(n.td,{children:"Mida del component: md o lg"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"length"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"0"}),e.jsx(n.td,{children:"Longitud de l'array que volem dividir en pàgines."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"pageSize"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"10"}),e.jsx(n.td,{children:"Nombre d'elements per pàgina que volem mostrar."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"pageSizeOptions"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"[]"}),e.jsx(n.td,{children:"Array d'opcions que es mostra al Table Pagination per indicar quants elements volem per pàgina."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"pageSizeOptionsDisabled"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Permet deshabilitar el selector de mida de pàgina."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"currentIndex"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"1"}),e.jsx(n.td,{children:"Índex en què s'ha de posicionar el paginador. S'utilitza per exemple per mantenir l'estat del paginador quan l'usuari ha navegat entre diverses seccions i torna a la secció on es troba la taula."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"resultsText"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"Resultats"}),e.jsx(n.td,{children:"Etiqueta per al nombre de resultats."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"rowsPerPageText"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"Files per pàgina"}),e.jsx(n.td,{children:"Etiqueta per files per pàgina."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"hidePaginationResults"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Permet amagar el nombre de resultats total de la taula."})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx(n.h3,{id:"dss-pagination-1",children:"dss-pagination"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onChangePage"})}),e.jsx(n.td,{children:"Mètode que es llança quan es canvia de pàgina. El component Pagination només emet la pàgina actual que ens trobem."})]})})]})}),`
`,e.jsx(n.h3,{id:"dss-table-pagination-1",children:"dss-table-pagination"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onChangePage"})}),e.jsx(n.td,{children:"Mètode que es llança quan es canvia de pàgina. El component Table Pagination emet un objecte amb les propietats següents (currentIndex, startIndex, endIndex)."})]})})]})}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"variants-pagination",children:"Variants Pagination"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#mides",children:"Mides"})}),`
`]}),`
`,e.jsx(n.h3,{id:"mides",children:"Mides"}),`
`,e.jsxs(n.p,{children:[`El component Pagination està disponible en dos mides: Large i Medium. D'altra
banda, la mida mitjana serà el per defecte, per indicar la mida gran hem
d'afegir la propietat size amb la mida específica `,e.jsx(n.strong,{children:"lg"}),`. El Table Pagination
tant sols està disponible en una mida.`]}),`
`,e.jsx("h5",{children:"Medium"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx("h5",{children:"Large"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h2,{id:"variants-table-pagination",children:"Variants Table Pagination"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#per-defecte",children:"Per defecte"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-selector-de-mida-de-p%C3%A0gina",children:"Amb selector de mida de pàgina"})}),`
`]}),`
`,e.jsx(n.h3,{id:"per-defecte",children:"Per defecte"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"amb-selector-de-mida-de-pàgina",children:"Amb selector de mida de pàgina"}),`
`,e.jsx(n.p,{children:`Aquest tipus de paginació s'utilitza específicament en taules amb moltes
files. En lloc de dividir el contingut en pàgines, la taula s'organitza en
diferents pàgines, amb un nombre fix de files a cada pàgina.`}),`
`,e.jsx(i,{of:m}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Versió"}),e.jsx(n.th,{children:"Canvis"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.7.1"})}),e.jsx(n.td,{children:"S'ha corregit un error al paginador bàsic pel qual no es mostraven els botons per a cada pàgina."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.0"})}),e.jsx(n.td,{children:"Refactor v2."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.8.1"})}),e.jsx(n.td,{children:"S'ha corregit un error per la propietat pageSize no sorgia efecte i en el seu lloc es prenia com a referència el primer valor de la propietat pageSizeOptions. Ara el pageSize, per defecte 10, tindrà més pes sempre que existeixi dins de les opcions, en cas contrari el pageSize per defecte serà la primera opcion disponible."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.3.0"})}),e.jsx(n.td,{children:"Actualització en els estils del component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.1.5"})}),e.jsx(n.td,{children:"S’ha corregit un error en el component de paginació de taules pel qual es reiniciava cada vegada que l'usuari canviava el nombre d'elements per pàgina. Ara es pren com a referència el primer element mostrat a la taula perquè el component posi l'usuari en l'índex en què es continua mostrant aquest element. S'ha afegit una nova funcionalitat en el component pagination i table-pagination de taules per poder conservar la vista en què l'usuari estava localitzat en moure's entre pàgines, fent servir l'atribut 'currentindex'."})]})]})]})]})}function y(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{y as default};
