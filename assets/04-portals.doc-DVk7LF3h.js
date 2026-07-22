import{j as e,M as t}from"./blocks-D_zk3kjZ.js";import{useMDXComponents as a}from"./index-D0A3GcHo.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DNLJd-HG.js";function o(s){const n={a:"a",blockquote:"blockquote",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Documentació/Changelog v3/Breaking changes/4) Portals"}),`
`,e.jsx(n.h2,{id:"migració-v3-nova-estratègia-de-portals-per-a-elements-desplegables",children:"Migració v3: Nova estratègia de portals per a elements desplegables"}),`
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
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Components que inclouen el desplegament a través de portals"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-select--docs",children:"select"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-datepicker--docs",children:"datepicker"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-datepicker-range--docs",children:"datepicker-range"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-timepicker--docs",children:"timepicker"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-tooltip--docs",children:"tooltip"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-searchbar--docs",children:"searchbar"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/collections-context-menu--docs",children:"context-menu"})}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Refactor en iniciatives"})}),`
`,e.jsx(n.p,{children:`No calen canvis per al nou funcionament; tot i així, només per als components que utilitzen el nou portal-manager,
es recomana fer una neteja dels workarounds aplicats a la v2, ja que propietats com tooltipFixed, tooltipPosition
o forceViewport ja no tenen efecte a la v3.`})]})}function p(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{p as default};
