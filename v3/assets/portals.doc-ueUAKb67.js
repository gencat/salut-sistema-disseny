import{j as e,M as s}from"./blocks-BQe3t3mS.js";import{useMDXComponents as t}from"./index-D25yCQlW.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CdZ_4rdx.js";function o(a){const n={blockquote:"blockquote",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Documentació/Changelog v3/Breaking changes/Portals"}),`
`,e.jsx(n.h2,{id:"migració-a-la-v3-nova-estratègia-de-portals-per-a-elements-desplegables",children:"Migració a la v3: Nova estratègia de portals per a elements desplegables"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Problema"})}),`
`,e.jsx(n.p,{children:`Els components desplegables (especialment els tooltips) mostraven problemes de posicionament en determinades situacions,
principalment en contextos d’apilament de contenidors amb diferents regles CSS de position i/o overflow niats. Per solucionar
aquests problemes, a la v2 es van afegir diversos workarounds, que provocaven que aquests components fossin cada vegada més
complexos d’utilitzar correctament.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Solució"})}),`
`,e.jsx(n.p,{children:"Per arribar a una solució definitiva, s’han dut a terme les actuacions següents:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"S’ha actualitzat la llibreria Popper.js v2 a la seva nova distribució, ara anomenada Floating UI, que ofereix un millor rendiment i noves funcionalitats."}),`
`,e.jsx(n.li,{children:"S’ha refactoritzat el codi dels components desplegables per aprofitar les noves funcionalitats de Floating UI."}),`
`,e.jsx(n.li,{children:"S’ha implementat una nova estratègia de portals per renderitzar els elements desplegables directament al body del document, evitant així els problemes d’apilament i posicionament."}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"L’estratègia de portals s’aplica només als components que no inclouen slots personalitzats per al contingut desplegable, com ara popover i action-menu."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Refactor en iniciatives"})}),`
`,e.jsx(n.p,{children:`No calen canvis per al nou funcionament; tot i així, només per als components que utilitzen el nou portal-manager,
es recomana fer una neteja dels workarounds aplicats a la v2, ja que propietats com tooltipFixed, tooltipPosition
o forceViewport ja no tenen efecte a la v3.`})]})}function d(a={}){const{wrapper:n}={...t(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(o,{...a})}):o(a)}export{d as default};
