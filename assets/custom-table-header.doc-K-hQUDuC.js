import{j as e,M as t,T as d,C as r}from"./index-CuBtzvfW.js";import{useMDXComponents as l}from"./index-BDSzqcmZ.js";import{S as a,T as c,N as o,a as h,b as x,c as j,F as p,d as u,I as m,e as f,C as b,P as g}from"./custom-table-header.stories-CKSK5Vg3.js";import"./iframe-DnZgGT9z.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function i(n){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .table-wrapper {
      width: 900px;
      height: 150px;
    }

    .table-wrapper-inputs {
      height: 400px;
    }
    .table-wrapper-popover {
      height: 600px;
      position: relative;
    }
  `}),`
`,e.jsx(t,{of:a}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(d,{}),e.jsx("dss-badge",{text:"dss-custom-table-header",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:`Aquesta capçalera s’ha creat com a component individual per millorar tant el disseny com la funcionalitat dels seus elements. Tot i que es pot utilitzar per separat,
totes les seves propietats es poden definir al component pare dss-custom-table i es propagaran de manera automàtica.`}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Tots els exemples mostrats en aquest Story estan limitats per l'amplada del canvas que els conté, per la qual cosa, per poder veure'n el funcionament correcte en amplades superiors (per exemple, 1920), caldrà replicar l'exemple en un entorn propi."}),`
`]}),`
`,e.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"dss-custom-table-header",children:"dss-custom-table: header"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hideHeader"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Si es defineix s'ocultarà la capçalera de la taula."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"tableTitle"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'Title'"}),e.jsx(s.td,{children:"Títol mostrat a la capçalera de la taula."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"tableInfo"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Informació mostrat a la capçalera de la taula."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"filters"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string[]"})}),e.jsx(s.td,{children:"[]"}),e.jsx(s.td,{children:"Filtres aplicats prèviament a la taula. En cas d' interacció amb els mateixos, el component notificarà mitjançant esdeveniment que hi va haver un canvi i que s' ha de tornar a aplicar un nou filtratge fora de la taula."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"innerFilters"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Canvia la capçalera per defecte a una versió on es poden incloure els filtres a traves d' un slot. L' aplicació d' aquests filtres s' ha d' executar fora del component."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"expandTable"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Permet mostrar tots els elements de la taula quan es renderitza el component. Per defecte la taula mostra la meitat d' elements afegint scroll vertical."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"expandLabel"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'Ampliar'"}),e.jsx(s.td,{children:"Text mostrat al botó d'interacció per ampliar el nombre d' elements visibles a la taula."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"collapseLabel"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'Reduir'"}),e.jsx(s.td,{children:"Text mostrat al botó d'interacció per reduir el nombre d' elements visibles a la taula."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"filtersLabel"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'Selecció'"}),e.jsx(s.td,{children:"Text mostrat al botó d'interacció per obrir un component extern on s' alleugereixen els filtres."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"cleanFiltersLabel"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'Netejar filtres'"}),e.jsx(s.td,{children:"Text mostrat al botó d' interacció per eliminar tots els filtres seleccionats."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"noFiltersLabel"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'No hi ha filtres seleccionats'"}),e.jsx(s.td,{children:"Text mostrat quan no hi ha cap filtre seleccionat."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hideHeaderTitleAndExpand"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Amaga tota la fila de la capçalera on es mostra el títol i el botó d'expandir la taula en cas que només calgui utilitzar els filtres."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"showConfig"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Mostra el botó de configuració."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"configTableLabel"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'Configurar taula'"}),e.jsx(s.td,{children:"Label del botó de configuració."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hideActionExpand"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Oculta el botó d'ampliar/reduir."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"showActionFilters"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Mostra el botó per obrir els filtres."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"filtersVariant"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'drawer'"}),e.jsx(s.td,{children:"Canvia el tipus de desplegable en què es mostren els filtres. Pot ser: drawer o popover. Si es defineix popover, cal afegir el contingut del popover a través de l’slot filters-popover-body."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"filtersPopoverTitle"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"''"}),e.jsx(s.td,{children:"Títol a mostrar al popover de filtres."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"jcef"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Sobreescriu els breakpoints de cada component intern per l‟espai real disponible en iniciatives que es visualitzen dins de l‟ECAP a través de l‟aplicació JCEF."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"filtersPopoverFixed"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Corregeix errors de posicionament o visualització indesitjats del popover per a filtres. Per exemple a layout on l'espai per a la taula estigui limitat amb un overflow:hidden."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"customActions"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Habilita un slot per afegir accions personalitzades dins de la zona de configuració de la capçalera."})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onExpandTable"})}),e.jsx(s.td,{children:"Esdeveniment que notificarà a l'usuari que s' ha fet click en el botó d'ampliar o reduir la taula."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onConfigTable"})}),e.jsx(s.td,{children:"Notifica quan es fa clic al botó de configurar taula."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onOpenDrawer"})}),e.jsx(s.td,{children:"Esdeveniment que notificarà a l'usuari que s' ha fet click al botó per obrir el selector de filtres (drawer) fora del component."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onUpdateFilters"})}),e.jsx(s.td,{children:"Esdeveniment que notificarà que s'han eliminat algun dels filtres des de la pròpia taula. L'esdeveniment retorna un objecte amb els filtres actuals perquè l'usuari torni a aplicar la funcionalitat."})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s.p,{children:"Si necessita aplicar alguna de les variants definides a continuació a la seva taula, només ha d’utilitzar les mateixes propietats de l’exemple al seu dss-custom-table."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-t%C3%ADtol",children:"Amb títol"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#sense-t%C3%ADtol",children:"Sense títol"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#sense-acci%C3%B3-filtres",children:"Sense acció filtres"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#sense-acci%C3%B3-ampliarreduir",children:"Sense acció ampliar/reduir"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#sense-acci%C3%B3-ampliarreduir-amb-filtres",children:"Sense acció ampliar/reduir amb filtres"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#t%C3%ADtol-amb-filtres",children:"Títol amb filtres"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#filtres-sense-t%C3%ADtol",children:"Filtres sense títol"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#t%C3%ADtol-amb-inputs",children:"Títol amb inputs"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#inputs-sense-t%C3%ADtol",children:"Inputs sense títol"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#accions-personalitzades",children:"Accions personalitzades"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#popover",children:"Popover"})}),`
`]}),`
`,e.jsx(s.h3,{id:"amb-títol",children:"Amb títol"}),`
`,e.jsx(r,{of:c}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"sense-títol",children:"Sense títol"}),`
`,e.jsx(r,{of:o}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"sense-acció-filtres",children:"Sense acció filtres"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"sense-acció-ampliarreduir",children:"Sense acció ampliar/reduir"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"sense-acció-ampliarreduir-amb-filtres",children:"Sense acció ampliar/reduir amb filtres"}),`
`,e.jsx(r,{of:j}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"títol-amb-filtres",children:"Títol amb filtres"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"filtres-sense-títol",children:"Filtres sense títol"}),`
`,e.jsx(r,{of:u}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"títol-amb-inputs",children:"Títol amb inputs"}),`
`,e.jsxs(s.p,{children:["Si en utilitzar aquesta variant apareixen errors en el posicionament del desplegable per als components input-dropdown, afegeix-los la propietat ",e.jsx(s.code,{children:"dropdownFixed"})," en aquests elements.."]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"inputs-sense-títol",children:"Inputs sense títol"}),`
`,e.jsxs(s.p,{children:["Si en utilitzar aquesta variant apareixen errors en el posicionament del desplegable per als components input-dropdown, afegeix-los la propietat ",e.jsx(s.code,{children:"dropdownFixed"})," en aquests elements.."]}),`
`,e.jsx(r,{of:f}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"accions-personalitzades",children:"Accions personalitzades"}),`
`,e.jsx(r,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"popover",children:"Popover"}),`
`,e.jsxs(s.p,{children:["Si en utilitzar aquesta variant apareixen errors en el posicionament del desplegable, afegeix-los la propietat ",e.jsx(s.code,{children:"filtersPopoverFixed"})," en aquests elements."]}),`
`,e.jsx(s.p,{children:"Se ha añadido un metodo 'filtersPopoverClose()' que puede utilizarse de forma externa para cerrar el popover de filtros."}),`
`,e.jsx(r,{of:g}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.7.0"})}),e.jsx(s.td,{children:"S'ha afegit la variant amb accions personalitzades."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.6.0"})}),e.jsx(s.td,{children:"S’ha refactoritzat la part de la capçalera del component custom-table, creant un nou component específic i afegint noves funcionalitats."})]})]})]})]})}function N(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{N as default};
