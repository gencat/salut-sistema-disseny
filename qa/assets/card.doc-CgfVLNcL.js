import{j as e,M as r,T as l,C as n,a}from"./index-BkALlaDr.js";import{useMDXComponents as i}from"./index-DGbs5ZQ5.js";import{S as c,P as h,F as x,a as o,M as j,D as u,b as m,N as p,c as f,d as b,e as g,I,f as v}from"./card.stories-BOrCyOIw.js";import"./iframe-MnerCUsN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";function d(t){const s={a:"a",blockquote:"blockquote",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .innerZoomElementWrapper{
        flex-direction: column;
        align-items: flex-start;
    }
    .wrapper {
        width: 500px;
    }
  `}),`
`,e.jsx(r,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("dss-badge",{text:"dss-card",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.p,{children:`Cards are used to group information and to display related actions. Cards can include images, text, buttons, links, and data visualizations.
Les targetes s'utilitzen per agrupar informació i mostrar accions relacionades. Les targetes poden incloure imatges, text, botons, enllaços i visualitzacions de dades.`}),`
`,e.jsx(s.p,{children:"Per permetre una total flexibilitat, s'ha modularitzat tot el contingut de la targeta en subcomponents, cadascun amb les seves pròpies propietats i estils. D'aquesta manera, podrem utilitzar només aquells que necessitem sense haver de manipular propietats per amagar contingut."}),`
`,e.jsx(s.p,{children:"Els diferents elements que formen aquesta col·lecció són:"}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx("dss-badge",{text:"dss-card-tags",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-card-info",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-card-info-item",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-card-header",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-card-title",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx("br",{}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx("dss-badge",{text:"dss-card-menu",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-card-form",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-card-body",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-card-subtitle",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-card-description",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(a,{}),`
`,e.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx(s.h4,{id:"dss-card",children:"dss-card"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Àmbit"}),e.jsx(s.th,{children:"Condition"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"selected"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"boolean"}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Marca el component com a seleccionat."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"dragged"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"boolean"}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Permet modificar l'estil del component quan la targeta està sent moguda mitjançant drag&drop. L'estil es modifica alternant el valor d'aquesta variable de false a true; l'estat de dragover o dragleave no es gestiona internament i ha de ser controlat des de la pròpia iniciativa."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"deleted"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"boolean"}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Marca el component com a eliminat."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"disabled"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"boolean"}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Marca el component com a deshabilitat."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hasClose"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"boolean"}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Habilita la funcionalitat de tancar la targeta. En fer clic al botó d'icona, el component enviarà un esdeveniment personalitzat per a notificar de l'acció, de manera que la pròpia iniciativa ha de capturar aquest esdeveniment per ocultar l'element, per exemple, modificant una variable assignada a un ngIf."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hasDetails"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"boolean"}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Habilita la secció de detalls que inclou les etiquetes i la informació extra."})]})]})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Nota:"})," Les propietats deleted i disabled es propaguen dinàmicament als components fills inclosos a la targeta a través dels slots, de manera que no cal afegir-les manualment a cadascun d'ells."]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"dss-card-info-item",children:"dss-card-info-item"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Àmbit"}),e.jsx(s.th,{children:"Condition"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"icon"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Requerida"}),e.jsx(s.td,{children:"string"}),e.jsx(s.td,{children:"'add_box'"}),e.jsx(s.td,{children:"Icona mostrada davant del text."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"text"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Requerida"}),e.jsx(s.td,{children:"string"}),e.jsx(s.td,{children:"'Item'"}),e.jsx(s.td,{children:"Text que es mostrarà a l'element."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"critic"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"boolean"}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Afegeix l'estil de criticitat a l'element."})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"dss-card-header",children:"dss-card-header"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Àmbit"}),e.jsx(s.th,{children:"Condition"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"flag"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"boolean"}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Mostra una icona 'flag' al header."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hasMenu"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"boolean"}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Habilita un action menu al header. L'icon-button actualment no es pot modificar i el contingut del menú s'ha d'afegir manualment a través d'un slot fent ús del subcomponent dss-card-menu."})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"dss-card-menu",children:"dss-card-menu"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Àmbit"}),e.jsx(s.th,{children:"Condition"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"position"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"string"}),e.jsx(s.td,{children:"'right'"}),e.jsx(s.td,{children:"Defineix la posició en la qual apareixerà el desplegable amb el menú. Pot ser: left / right."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"disabled"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"boolean"}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Deshabilita el botó per obrir el desplegable amb el menú. Si el component principal ja té afegida la propietat disabled, no cal afegir-la aquí, ja que es propagarà dinàmicament."})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"dss-card-image",children:"dss-card-image"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Àmbit"}),e.jsx(s.th,{children:"Condition"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"source"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Requerida"}),e.jsx(s.td,{children:"string"}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"URL de la imatge."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"alt"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Requerida"}),e.jsx(s.td,{children:"string"}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Text alternatiu."})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"dss-card-subtitle",children:"dss-card-subtitle"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Àmbit"}),e.jsx(s.th,{children:"Condition"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hasIcon"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"boolean"}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Habilita la icona dins del subtítol."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"icon"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"string"}),e.jsx(s.td,{children:"'add_box'"}),e.jsx(s.td,{children:"Icona."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hasLink"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"boolean"}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Habilita un enllaç dins del subtítol."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"linkHref"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"string"}),e.jsx(s.td,{children:"'#'"}),e.jsx(s.td,{children:"Href del enllaç."})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"dss-card-highlights-item",children:"dss-card-highlights-item"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Àmbit"}),e.jsx(s.th,{children:"Condition"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"title"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Requerida"}),e.jsx(s.td,{children:"string"}),e.jsx(s.td,{children:"'Title'"}),e.jsx(s.td,{children:"Títol que es mostrarà a l'element."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"icon"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"string"}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Icona mostrada davant del text."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"text"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Requerida"}),e.jsx(s.td,{children:"string"}),e.jsx(s.td,{children:"'Item'"}),e.jsx(s.td,{children:"Text que es mostrarà a l'element."})]})]})]}),`
`,e.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Àmbit"}),e.jsx(s.th,{children:"Condition"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onClose"})}),e.jsx(s.td,{children:"Output"}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"CustomnEvent"}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Esdeveniment que notifica a l'usuari quan es fa clic al botó d'icona per tancar la targeta."})]})})]}),`
`,e.jsx(s.h3,{id:"variants",children:"Variants"}),`
`,e.jsx(s.p,{children:`El component principal dss-card és només un esquelet sobre el qual es poden afegir qualsevol dels subcomponents.
Per defecte, la targeta estarà buida i haurem d'anar afegint els elements que necessitem a través dels slots.
D'aquesta manera, reduïm la complexitat del component en no necessitar utilitzar una multitud de variables per ocultar contingut per defecte,
com passa en altres components.`}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#completa",children:"Completa"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#estat-seleccionat",children:"Estat: seleccionat"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#estat-en-moviment",children:"Estat: en moviment"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#estat-eliminat",children:"Estat: eliminat"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#estat-deshabilitat",children:"Estat: deshabilitat"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#per-defecte-sense-incloure-hasclose",children:"Per defecte: sense incloure hasClose"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#per-defecte-sense-incloure-hasdetails",children:"Per defecte: sense incloure hasDetails"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#per-defecte-sense-incloure-flag",children:"Per defecte: sense incloure flag"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#per-defecte-sense-incloure-hasmenu",children:"Per defecte: sense incloure hasMenu"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#info-item-critic",children:"Info Item Critic"})}),`
`]}),`
`,e.jsx(s.h3,{id:"completa",children:"Completa"}),`
`,e.jsx(s.p,{children:`En el següent exemple, podem veure una targeta completa; a partir d'aquest template podrem treure o modificar qualsevol dels elements
per alinear-lo al disseny de cada iniciativa.`}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.h3,{id:"estat-seleccionat",children:"Estat: seleccionat"}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(s.h3,{id:"estat-en-moviment",children:"Estat: en moviment"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.h3,{id:"estat-eliminat",children:"Estat: eliminat"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.h3,{id:"estat-deshabilitat",children:"Estat: deshabilitat"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(s.h3,{id:"per-defecte-sense-incloure-hasclose",children:"Per defecte: sense incloure hasClose"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h3,{id:"per-defecte-sense-incloure-details",children:"Per defecte: sense incloure details"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(s.h3,{id:"per-defecte-sense-incloure-flag",children:"Per defecte: sense incloure flag"}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(s.h3,{id:"per-defecte-sense-incloure-hasmenu",children:"Per defecte: sense incloure hasMenu"}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(s.h3,{id:"info-item-critic",children:"Info Item critic"}),`
`,e.jsx(n,{of:I}),`
`,e.jsx(s.h3,{id:"menu-position-left",children:"Menu Position Left"}),`
`,e.jsx(n,{of:v}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.0.0"})}),e.jsx(s.td,{children:"Refactor v2."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.11.0"})}),e.jsx(s.td,{children:"S'han afegit propietats per afegir una icona i un enllaç al subcomponent dss-card-subtitle."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.10.0"})}),e.jsx(s.td,{children:"Nou component afegit."})]})]})]})]})}function P(t={}){const{wrapper:s}={...i(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(d,{...t})}):d(t)}export{P as default};
