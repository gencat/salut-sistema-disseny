import{j as e,M as r,T as l,C as s,a}from"./index-DFUKtqtU.js";import{useMDXComponents as d}from"./index-BVJxqH-I.js";import{A as c,P as o,a as h,E as x,D as j,I as p,N as m,b as u,c as f}from"./action-menu.stories-BZSxunA0.js";import"./iframe-pHR0vHcf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-element-Dloa6E9d.js";import"./lit-html-D6a8R3xZ.js";import"./action-menu-DjwZsIuF.js";import"./property-BpSxuat7.js";import"./reset.style-B0CQ8619.js";import"./property-types-CkH-zh1n.js";import"./class-map-t53NE6z1.js";import"./popper-CMBiYTiD.js";function t(i){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
    .only-demo-wrapper--positions {
      display: flex;
      flex-direction: column;
      gap: 24px;
      height: 450px;
      justify-content: center;
      align-items: center;
    }
     .only-demo-row {
      display: flex;
      gap: 24px;
      align-items: center;
    }

  `}),`
`,e.jsx(r,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("dss-badge",{text:"dss-action-menu",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-action-menu-item",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
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
`,e.jsx(a,{}),`
`,e.jsx(n.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("dss-badge",{text:"dss-action-menu",size:"md",state:"info",outlined:!0,hideIcon:!0}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"position"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'right-start'"}),e.jsx(n.td,{children:"Modifica la posició per defecte del component. Podem definir top, bottom, left o right. O combinar-les amb les posicions d'inici start o end per obtenir diverses posicions. Per exemple: bottom-start."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"open"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Mostra el component quan aquesta propietat està definida."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"disableParentClick"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Desactiva la funcionalitat interna per mostrar el component quan es fa clic al contenidor pare."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"dropdownFixed"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Modifica l'estratègia de posicionament del desplegable a fixed en lloc d'absolute. Utilitza-ho només en casos on el desplegable no apareix correctament perquè està afectat per algun position: absolute o overflow:hidden."})]})]})]})}),`
`,e.jsx("dss-badge",{text:"dss-action-menu-item",size:"md",state:"info",outlined:!0,hideIcon:!0}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"label"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'primary'"}),e.jsx(n.td,{children:"Text mostrat dins del component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"state"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'primary'"}),e.jsx(n.td,{children:"Estat d'element. Pot ser: primary o error."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"leftIcon"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Icona mostrada a l'esquerra de l'element."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"rightIcon"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Icona mostrada a la dreta de l'element."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"leftIconFill"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Canvia la icona al mode fill"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"rightIconFill"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Canvia la icona al mode fill"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"actionIcon"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Icona utilitzada per realitzar una acció secundària dins de l'element."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"actionState"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Estat de la icona d'acció secundària. Pot ser: default, primary, error, warning, success, info."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"notifications"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"0"}),e.jsx(n.td,{children:"Nombre de notificacions a mostrar a l'element."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"notificationsState"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'error'"}),e.jsx(n.td,{children:"Estat del badge de notificacions mostrat. Pot ser: 'error', 'alert', 'success', 'info'."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"selected"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Marca l'element com a seleccionat. La gestió d'aquesta propietat es realitza internament, definir només en casos d'ús molt específics."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"hasNestedMenu"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Habilita un slot per a la inclusió d'un nou action-menu niat dins de l'element. Ha d'anar acompanyat, per tant, d'un altre dss-action-menu definit a l'HTML."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"nestedMenuPosition"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'top'"}),e.jsx(n.td,{children:"Permet modificar la posició en què apareix el desplegable amb el menú. Pot ser top (de dalt cap avall) o bottom (de baix cap amunt)."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"disabled"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Deshabilita l'element."})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("dss-badge",{text:"dss-action-menu",size:"md",state:"info",outlined:!0,hideIcon:!0}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onCloseActionMenu"})}),e.jsx(n.td,{children:"Notifica quan s'ha tancat el menú."})]})})]})}),`
`,e.jsx("dss-badge",{text:"dss-action-menu-item",size:"md",state:"info",outlined:!0,hideIcon:!0}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onClick"})}),e.jsx(n.td,{children:"Esdeveniment que notifica quan s'ha fet clic en un element que no conté un menú niat."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onAction"})}),e.jsx(n.td,{children:"Esdeveniment que notifica quan s'ha fet clic a la icona d'acció secundària dins de l'element."})]})]})]})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#default",children:"Defaul"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#opcions-dicones",children:"Opcions d'icones"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#disabled",children:"Disabled"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#nested-menu",children:"Nested Menu"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#posici%C3%B3",children:"Posició"})}),`
`]}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(n.h5,{id:"estat-primary",children:"Estat primary"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h5,{id:"estat-error",children:"Estat error"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h5,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h3,{id:"opcions-dicones",children:"Opcions d'icones"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"notificacions",children:"Notificacions"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"nested-menu",children:"Nested Menu"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"posició",children:"Posició"}),`
`,e.jsx(n.p,{children:"La propietat position permet definir diferents tipus de combinacions per visualitzar el menú desplegable."}),`
`,e.jsx(n.p,{children:"Per defecte, les opcions 'top', 'bottom', 'left' o 'right' col·locaran el desplegable just en aquesta posició i centrat respecte a l’element de referència."}),`
`,e.jsx(n.p,{children:"Si cal desactivar el desplegable centrat, s'ha d'afegir la combinació 'xxx-start' o 'xxx-end'. Això farà que el desplegable se situï des de l'inici del component cap avall o cap a la dreta (-start), o cap amunt o cap a l'esquerra (-end), segons si es tracta de top/bottom o left/right."}),`
`,e.jsx(s,{of:f}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"ús",children:"Ús"}),`
`,e.jsx(n.h5,{id:"mida-màxima-amplada-i-alçada",children:"Mida màxima: amplada i alçada"}),`
`,e.jsx(n.p,{children:"Mínima amplada 160px i màxima amplada 280px, tenint en compte que a partir de 160px s'adaptarà l'amplada del modal fins a 280px."}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Versió"}),e.jsx(n.th,{children:"Canvis"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.1.0"})}),e.jsx(n.td,{children:"S'ha afegit la propietat dropdownFixed per corregir errors de posicionament en incloure el menú dins d'un contenidor amb position: absolute o sticky."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.3"})}),e.jsx(n.td,{children:"S'ha corregit un error de posicionament després que l'element pare s'hagi desplaçat a la pantalla."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.0"})}),e.jsx(n.td,{children:"Refactor v2."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.11.0"})}),e.jsx(n.td,{children:"Nou Web Component"})]})]})]})]})}function S(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{S as default};
