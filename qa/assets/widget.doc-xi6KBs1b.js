import{j as e,M as o,T as a,C as s}from"./index-DiQ4A3nA.js";import{useMDXComponents as r}from"./index-C7ZSKJ31.js";import{S as l,P as d,C as c,F as p,a as h,A as x,b as u,T as m,c as j,d as f,e as g}from"./widget.stories-DzCipeMH.js";import"./iframe-DhVf0-AU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";function t(n){const i={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
`,e.jsx(o,{of:l}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(a,{}),e.jsx("dss-badge",{text:"dss-widget",size:"md",state:"info-alt",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-accordion",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-item-list",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-popover",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx("br",{}),`
`,e.jsx(i.p,{children:"Element que encapsula funcionalitats especifiques. El widget té dues formes de visualització:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Contenidor, per al qual s’ha d’utilitzar la col·lecció ",e.jsx("code",{children:"dss-widget"}),","]}),`
`,e.jsxs(i.li,{children:["Acordió, per al qual cal fer servir el ",e.jsx("code",{children:"dss-accordion"}),"."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Aquestes dues variants es poden aplicar en diferents casos d’ús, on s’hauran d’utilitzar juntament amb altres components, per exemple, dins d’un ",e.jsx("code",{children:"dss-popover"}),"."]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:d}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#contenidor",children:"Contenidor"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#accordi%C3%B3",children:"Acordió"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#popover",children:"Popover"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#amb-t%C3%ADtol-i-switch",children:"Amb títol i switch"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#accions-delements-m%C3%BAltiples",children:"Accions d'elements múltiples"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#m%C3%BAltiples-sections",children:"Múltiples seccions"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#custom-item-list",children:"Custom Item List"})}),`
`]}),`
`,e.jsx(i.h3,{id:"contenidor",children:"Contenidor"}),`
`,e.jsx(i.h4,{id:"default",children:"Default"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(i.h4,{id:"reducido-folded",children:"Reducido (Folded)"}),`
`,e.jsxs(i.p,{children:["Aquesta variant es defineix afegint la propietat ",e.jsx(i.code,{children:"folded"})," i mostra una versió reduïda del widget només amb la capçalera, sense incloure cap contingut dels ítems."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(i.p,{children:"widgetReduced"}),`
`,e.jsx(i.h4,{id:"amb-scroll",children:"Amb scroll"}),`
`,e.jsxs(i.p,{children:["La propietat ",e.jsx(i.code,{children:"hasScroll"}),` transforma el widget en un contenidor flex on el body s’ajusta a la mida disponible. Perquè aparegui la barra
de desplaçament, cal limitar l’alçada del div que el conté mitjançant CSS fora del component, ajustant-se el giny a aquesta amb
un height: 100% intern.`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(i.h3,{id:"acordió",children:"Acordió"}),`
`,e.jsxs(i.p,{children:["La variant de tipus acordió  utilitza l'estil per defecte 'box', de manera que no cal afegir la propietat ",e.jsx(i.strong,{children:"accordionStyle"}),"."]}),`
`,e.jsxs(i.p,{children:["En totes les variants acordió mostrades a continuació s'ha habilitat la propietat ",e.jsx(i.strong,{children:"isOpen"}),` perquè es mostri el contingut dels acordions per defecte.
En l'aplicació real de la col·lecció no caldrà afegir aquesta propietat.`]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(i.h3,{id:"popover",children:"Popover"}),`
`,e.jsxs(i.p,{children:["La variant del widget:accordió dins d'un popover necessita aplicar l'estil ",e.jsx(i.strong,{children:"inner"}),` a la propietat accordionStyle de l'acordió, per eliminar els marges
al seu voltant i deixar que sigui el popover qui delimiti visualment el contingut.`]}),`
`,e.jsxs(i.p,{children:["Per a la seva aplicació real, cal amagar els elements corresponents al títol del popover i eliminar la propietat ",e.jsx(i.strong,{children:"open"})," del component popover."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h3,{id:"variants-de-contingut-per-widget",children:"Variants de contingut per widget"}),`
`,e.jsxs(i.p,{children:[`Tots els exemples a continuació mostren diferents casos d’ús de contingut dins d’aquesta col·lecció i serien vàlids per a
tots dos tipus: contenidor o acordió. Només caldria canviar el selector `,e.jsx("code",{children:"dss-accordion"})," per ",e.jsx("code",{children:"dss-widget"}),`
i adaptar les propietats segons els requisits, però l’interior en ambdós casos es mantindria complet.`]}),`
`,e.jsx(i.h4,{id:"amb-títol-i-switch",children:"Amb títol i switch"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(i.h4,{id:"accions-delements-múltiples",children:"Accions d'elements múltiples"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(i.h4,{id:"múltiples-seccions",children:"Múltiples seccions"}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(i.h4,{id:"custom-item-list",children:"Custom Item List"}),`
`,e.jsx(s,{of:g})]})}function M(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{M as default};
