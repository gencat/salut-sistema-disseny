import{j as e,M as t,T as l,C as i,a as c}from"./index-RzZhMaWa.js";import{useMDXComponents as r}from"./index-C8LEX8zn.js";import{S as a,P as o,C as h,F as x,a as j,A as p,b as g,T as u,c as m,d as f,e as b}from"./widget.stories-6EWmOIKZ.js";import"./iframe-DLRl5xPR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function d(n){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .innerZoomElementWrapper {
      flex-direction: row;
      align-items: center;
    }
    .wrapper {
      width: 400px;
    }
    .wrapper--fixed-height {
      height: 250px;
    }
    .popover-wrapper {
      height: 500px;
      width: 600px;
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }
    .popover-wrapper--xl {
      width: 900px;
      gap: 100px
    }
    .demo-wrapper {
      position: relative;
      width: fit-content;
    }
    .demo-related-content {
      font-size: 12px;
      color: lightgray;
    }
  `}),`
`,e.jsx(t,{of:a}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("dss-badge",{text:"dss-widget",size:"md",state:"info-alt",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-accordion",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-item-list",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-popover",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.p,{children:"Element que encapsula funcionalitats especifiques. El widget té dues formes de visualització:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Contenidor, per al qual s’ha d’utilitzar la col·lecció ",e.jsx("code",{children:"dss-widget"}),","]}),`
`,e.jsxs(s.li,{children:["Acordió, per al qual cal fer servir el ",e.jsx("code",{children:"dss-accordion"}),"."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Aquestes dues variants es poden aplicar en diferents casos d’ús, on s’hauran d’utilitzar juntament amb altres components, per exemple, dins d’un ",e.jsx("code",{children:"dss-popover"}),"."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(c,{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx(s.h4,{id:"dss-widget-widget-contenidor",children:"dss-widget: widget contenidor"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"variant"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'box'"}),e.jsx(s.td,{children:"Estil del widget. Els valors poden ser box (amb border & padding) o inner."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"icon"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Mostra la icona."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"iconStatus"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsxs(s.td,{children:["Modifica l'aparença de la icona d'acció secundària. Pot ser: ",e.jsx(s.strong,{children:"default"}),", ",e.jsx(s.strong,{children:"error"}),", ",e.jsx(s.strong,{children:"success"})," o ",e.jsx(s.strong,{children:"disabled"}),". Pot validar l'estat que necessita a la pàgina del decorative-icon."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"title"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Títol que es mostrarà dins del component."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"titleSize"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'sm'"}),e.jsx(s.td,{children:"Modifica la mida del decorative-icon i la mida de la lletra del títol (14px o 16px). Pot ser: sm o md."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"results"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Habilita el badge de resultats i defineix el número d'aquests."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"resultsText"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Text que es mostra dins del badge de resultats."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"resultsState"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Assigneu un estil d'estat al badge de resultats. Veure opcions de badge informatiu."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"info"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Text que es mostrarà en la informació sobre eines dins de la insígnia d'icona informativa."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"infoBadgeState"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Estat de criticitat que mostrarà la insígnia."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"infoBadgeIcon"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Icona que es mostra dins de la insígnia d'icona d'informació."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"infoBadgeOutlined"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"true"}),e.jsx(s.td,{children:"Deshabilita la propietat outlined de la insígnia d'icona d'informació."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"notifications"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Comptador de notificacions que es mostra a la capçalera de l'acordió."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"notificationsState"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsxs(s.td,{children:["Assigneu un estil d'estat al comptador de notificacions. Pot ser: ",e.jsx(s.strong,{children:"success"}),", ",e.jsx(s.strong,{children:"error"}),", ",e.jsx(s.strong,{children:"alert"}),", ",e.jsx(s.strong,{children:"info"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hasAction"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Habilita la icona per a realitzar una acció secundària."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"actionIcon"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'add_box'"}),e.jsx(s.td,{children:"Modifica la icona d'acció secundària."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"actionLabel"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"''"}),e.jsx(s.td,{children:"Defineix l'aria-label de la icona mostrada."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"actionVariant"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'primary'"}),e.jsxs(s.td,{children:["Modifica l'aparença de la icona d'acció secundària. Pot ser: ",e.jsx(s.strong,{children:"default"}),", ",e.jsx(s.strong,{children:"primary"}),", ",e.jsx(s.strong,{children:"error"}),", ",e.jsx(s.strong,{children:"warning"}),", ",e.jsx(s.strong,{children:"success"})," o ",e.jsx(s.strong,{children:"info"}),". Pot validar l'estat que necessita a la pàgina del icon-button."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"actionDisabled"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Deshabilita la icona d'acció secundària."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hasNext"})}),e.jsx(s.td,{children:"boolean"}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Mostra el botó d'acció següent."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hasClose"})}),e.jsx(s.td,{children:"boolean"}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Mostra el botó de tancar el widget."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hasScroll"})}),e.jsx(s.td,{children:"boolean"}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Fixa l’alçada del giny al 100% del seu contenidor i adapta el contingut amb flex, de manera que el widget-body mostrarà una barra de desplaçament si el seu contingut no és visible en l’espai disponible."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"tooltipFixed"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Modifica l'estratègia de posicionament del tooltip sobre el títol a fixed en lloc d'absolute. Utilitza-ho només en casos on el tooltip no apareix correctament perquè està afectat per algun position: absolute o overflow:hidden."})]})]})]})}),`
`,e.jsx(s.h4,{id:"dss-accordion-widget-acordió",children:"dss-accordion: widget acordió"}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"/docs/components-accordion--docs#propietats",children:"Propietats del acordió"})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx(s.h4,{id:"dss-widget-widget-contenidor-1",children:"dss-widget: widget contenidor"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onAction"})}),e.jsx(s.td,{children:"Notifica quan s'ha fet clic al botó d'acció."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onNext"})}),e.jsx(s.td,{children:"Notifica quan s'ha fet clic al botó 'següent'."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onClose"})}),e.jsx(s.td,{children:"Notifica quan s'ha fet clic al botó de tancar."})]})]})]})}),`
`,e.jsx(s.h4,{id:"dss-accordion-widget-acordió-1",children:"dss-accordion: widget acordió"}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"/docs/components-accordion--docs#esdeveniments",children:"Esdeveniments del acordió"})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#contenidor",children:"Contenidor"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#accordi%C3%B3",children:"Acordió"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#popover",children:"Popover"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-t%C3%ADtol-i-switch",children:"Amb títol i switch"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#accions-delements-m%C3%BAltiples",children:"Accions d'elements múltiples"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#m%C3%BAltiples-sections",children:"Múltiples seccions"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#custom-item-list",children:"Custom Item List"})}),`
`]}),`
`,e.jsx(s.h3,{id:"contenidor",children:"Contenidor"}),`
`,e.jsx(s.h4,{id:"default",children:"Default"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(s.h4,{id:"reducido-folded",children:"Reducido (Folded)"}),`
`,e.jsxs(s.p,{children:["Aquesta variant es defineix afegint la propietat ",e.jsx(s.code,{children:"folded"})," i mostra una versió reduïda del widget només amb la capçalera, sense incloure cap contingut dels ítems."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(s.p,{children:"widgetReduced"}),`
`,e.jsx(s.h4,{id:"amb-scroll",children:"Amb scroll"}),`
`,e.jsxs(s.p,{children:["La propietat ",e.jsx(s.code,{children:"hasScroll"}),` transforma el widget en un contenidor flex on el body s’ajusta a la mida disponible. Perquè aparegui la barra
de desplaçament, cal limitar l’alçada del div que el conté mitjançant CSS fora del component, ajustant-se el giny a aquesta amb
un height: 100% intern.`]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(s.h3,{id:"acordió",children:"Acordió"}),`
`,e.jsxs(s.p,{children:["La variant de tipus acordió  utilitza l'estil per defecte 'box', de manera que no cal afegir la propietat ",e.jsx(s.strong,{children:"accordionStyle"}),"."]}),`
`,e.jsxs(s.p,{children:["En totes les variants acordió mostrades a continuació s'ha habilitat la propietat ",e.jsx(s.strong,{children:"isOpen"}),` perquè es mostri el contingut dels acordions per defecte.
En l'aplicació real de la col·lecció no caldrà afegir aquesta propietat.`]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(s.h3,{id:"popover",children:"Popover"}),`
`,e.jsxs(s.p,{children:["La variant del widget:accordió dins d'un popover necessita aplicar l'estil ",e.jsx(s.strong,{children:"inner"}),` a la propietat accordionStyle de l'acordió, per eliminar els marges
al seu voltant i deixar que sigui el popover qui delimiti visualment el contingut.`]}),`
`,e.jsxs(s.p,{children:["Per a la seva aplicació real, cal amagar els elements corresponents al títol del popover i eliminar la propietat ",e.jsx(s.strong,{children:"open"})," del component popover."]}),`
`,e.jsx(i,{of:g}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"variants-de-contingut-per-widget",children:"Variants de contingut per widget"}),`
`,e.jsxs(s.p,{children:[`Tots els exemples a continuació mostren diferents casos d’ús de contingut dins d’aquesta col·lecció i serien vàlids per a
tots dos tipus: contenidor o acordió. Només caldria canviar el selector `,e.jsx("code",{children:"dss-accordion"})," per ",e.jsx("code",{children:"dss-widget"}),`
i adaptar les propietats segons els requisits, però l’interior en ambdós casos es mantindria complet.`]}),`
`,e.jsx(s.h4,{id:"amb-títol-i-switch",children:"Amb títol i switch"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(s.h4,{id:"accions-delements-múltiples",children:"Accions d'elements múltiples"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(s.h4,{id:"múltiples-seccions",children:"Múltiples seccions"}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(s.h4,{id:"custom-item-list",children:"Custom Item List"}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(s.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.7.1"})}),e.jsxs(s.td,{children:["S'ha corregit l'alçada del capçalera a 56px.",e.jsx("br",{}),"S'ha definit la mida de lletra predeterminada del títol a 16px i s'ha eliminat la propietat titleSize que permetia canviar la mida entre 14px i 16px.",e.jsx("br",{}),"S'ha afegit la propietat ",e.jsx(s.code,{children:"actionLabel"})," per corregir un error d'accessibilitat."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.5.0"})}),e.jsx(s.td,{children:"Nou variant reducida."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.4.0"})}),e.jsx(s.td,{children:"Nou variant widget:contenidor."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.1.1"})}),e.jsx(s.td,{children:"Nou variant amb item-list:custom."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.12.6"})}),e.jsx(s.td,{children:"Nou collection."})]})]})]})]})}function P(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(d,{...n})}):d(n)}export{P as default};
