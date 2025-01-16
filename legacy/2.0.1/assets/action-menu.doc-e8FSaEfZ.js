import{ae as e,af as d,ag as a,ah as s,ai as l}from"./index-Rj5sKnnY.js";import{u as r}from"./index-COmZ33MR.js";import{A as c,P as o,a as h,E as x,D as j,I as m,N as p,b as u}from"./action-menu.stories-EUvRgOUS.js";import"./iframe-B8zLdvo4.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./lit-element-DhY7bShc.js";import"./lit-html-B2eaWknC.js";import"./action-menu-5NH5DUNh.js";import"./property-DnLABHHV.js";import"./reset.style-B0CQ8619.js";import"./property-types-CkH-zh1n.js";import"./class-map-BDeD7Kfm.js";import"./popper-CMBiYTiD.js";function t(i){const n={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .only-demo-nested {
      width: 800px;
    }
    .only-demo-wrapper {
      height: 250px;
    }
    .only-demo-parent {
      width: fit-content;
    }
     .only-demo-button {
      padding: 4px;
    }
  `}),`
`,e.jsx(d,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(a,{}),e.jsx("dss-badge",{text:"dss-action-menu",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-action-menu-item",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(n.p,{children:`L'Action Menu s'utilitza quan hi ha opcions addicionals disponibles per a
l'usuari i hi ha una restricció d'espai. El menú d'accions manté les accions
clau a prop en un menú net i discret.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Breaking change:"})}),`
`,e.jsx(n.p,{children:`La lògica per mostrar o amagar el component s’ha implementat dins del component per facilitar-ne l’ús, de manera que és el mateix component
qui gestiona els esdeveniments click i click-out sobre l’element pare per mostrar el action-menu a la posició indicada.`}),`
`,e.jsx(n.p,{children:"Per aquest motiu, és imprescindible que s’elimini en les iniciatives qualsevol lògica afegida anteriorment, incloent qualsevol position:relative o position:absolute."}),`
`,e.jsx(n.p,{children:`Aquesta nova funcionalitat s’ha implementat de manera que els action-menus no es vegin afectats pel flux de la resta de components, corregint així el problema que
trobàvem fins ara quan un element apareixia retallat a causa d’un contenidor amb la propietat overflow definida.`}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-selector",children:"dss-action-menu-item"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"label"})}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"'primary'"}),e.jsx(n.td,{children:"Text mostrat dins del component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"state"})}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"'primary'"}),e.jsx(n.td,{children:"Estat d'element. Pot ser: primary o error."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"leftIcon"})}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Icona mostrada a l'esquerra de l'element."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"rightIcon"})}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Icona mostrada a la dreta de l'element."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"actionIcon"})}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Icona utilitzada per realitzar una acció secundària dins de l'element."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"actionState"})}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Estat de la icona d'acció secundària. Pot ser: default, primary, error, warning, success, info."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"notifications"})}),e.jsx(n.td,{children:"number"}),e.jsx(n.td,{children:"0"}),e.jsx(n.td,{children:"Nombre de notificacions a mostrar a l'element."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"notificationsState"})}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"'error'"}),e.jsx(n.td,{children:"Estat del badge de notificacions mostrat. Pot ser: 'error', 'alert', 'success', 'info'."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"selected"})}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Marca l'element com a seleccionat. La gestió d'aquesta propietat es realitza internament, definir només en casos d'ús molt específics."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"hasNestedMenu"})}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Habilita un slot per a la inclusió d'un nou action-menu niat dins de l'element. Ha d'anar acompanyat, per tant, d'un altre dss-action-menu definit a l'HTML."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"nestedMenuPosition"})}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"'top'"}),e.jsx(n.td,{children:"Permet modificar la posició en què apareix el desplegable amb el menú. Pot ser top (de dalt cap avall) o bottom (de baix cap amunt)."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"disabled"})}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Deshabilita l'element."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"open"})}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Mostra el component quan aquesta propietat està definida."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"disableParentClick"})}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Desactiva la funcionalitat interna per mostrar el component quan es fa clic al contenidor pare."})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("div",{className:"dss-sb-selector",children:"dss-action-menu"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onCloseActionMenu"})}),e.jsx(n.td,{children:"Notifica quan s'ha tancat el menú."})]})})]}),`
`,e.jsx("div",{className:"dss-sb-selector",children:"dss-action-menu-item"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onClick"})}),e.jsx(n.td,{children:"Esdeveniment que notifica quan s'ha fet clic en un element que no conté un menú niat."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onAction"})}),e.jsx(n.td,{children:"Esdeveniment que notifica quan s'ha fet clic a la icona d'acció secundària dins de l'element."})]})]})]}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#default",children:"Defaul"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#opcions-dicones",children:"Opcions d'icones"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#disabled",children:"Disabled"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#nested-menu",children:"Nested Menu"})}),`
`]}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(n.h5,{id:"estat-primary",children:"Estat primary"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h5,{id:"estat-error",children:"Estat error"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h5,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h3,{id:"opcions-dicones",children:"Opcions d'icones"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"notificacions",children:"Notificacions"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"nested-menu",children:"Nested Menu"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h2,{id:"ús",children:"Ús"}),`
`,e.jsx(n.h5,{id:"mida-màxima-amplada-i-alçada",children:"Mida màxima: amplada i alçada"}),`
`,e.jsx(n.p,{children:"Mínima amplada 160px i màxima amplada 280px, tenint en compte que a partir de 160px s'adaptarà l'amplada del modal fins a 280px."}),`
`,e.jsx(n.h5,{id:"visibilitat",children:"Visibilitat"}),`
`,e.jsxs(n.p,{children:["El component action-menu es mostrarà ",e.jsx(n.strong,{children:"sempre visible per defecte"}),", ja que està inclòs en altres components de nivell superior, on la visibilitat es gestiona internament, com per exemple en dss-card-menu."]}),`
`,e.jsxs(n.p,{children:["En cas que aquest component s'utilitzi de manera individual, serà cada iniciativa la que haurà de gestionar quan es mostra o s'oculta l'Action Menu. Per a això, disposarà dels esdeveniments ",e.jsx(n.strong,{children:"onClickOutside"})," del dss-action-menu i dels esdeveniments ",e.jsx(n.strong,{children:"onClick"})," i ",e.jsx(n.strong,{children:"onAction"})," del dss-action-menu-item, els quals haurien de tancar el menú principal i tots els seus menús niats."]}),`
`,e.jsx(n.p,{children:"Els components action-menu que s'incloguin niats dins d'un altre action-menu principal sí que seran controlats per la pròpia lògica interna del mateix, per la qual cosa no necessitaran cap funcionalitat extra."}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Versió"}),e.jsx(n.th,{children:"Canvis"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.0"})}),e.jsx(n.td,{children:"Refactor v2."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.11.0"})}),e.jsx(n.td,{children:"Nou Web Component"})]})]})]})]})}function w(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{w as default};
