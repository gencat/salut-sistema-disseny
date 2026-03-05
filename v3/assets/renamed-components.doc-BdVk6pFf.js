import{j as e,M as i}from"./blocks-BQe3t3mS.js";import{useMDXComponents as r}from"./index-D25yCQlW.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CdZ_4rdx.js";function t(n){const s={blockquote:"blockquote",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Documentació/Changelog v3/Breaking changes/Components renombrats"}),`
`,e.jsx(s.h2,{id:"migració-a-la-v3-components-renombrats",children:"Migració a la v3: Components renombrats"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Problema"})}),`
`,e.jsx(s.p,{children:`Necessitat d’homogeneïtzar els noms dels components per millorar-ne la consistència i facilitar-ne l’ús,
reduint la complexitat i la confusió actuals, especialment en l’ús de components de tipus formulari.`}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Solució"})}),`
`,e.jsx(s.p,{children:`Seguint les recomanacions de l’equip d’arquitectura, s’ha donat prioritat als components orientats al seu ús en
React, en detriment dels anteriors components modificats per a la seva adaptació a formularis reactius d’Angular.`}),`
`,e.jsx(s.p,{children:`D’aquesta manera, els components principals de tipus formulari, que no necessiten l’ús de slots, seran els estàndard
dss-input, dss-datepicker i dss-timepicker. En canvi, els components anteriors adaptats per a formularis  reactius
d’Angular, que inclouen slots per a label i input, seran reanomenats amb el prefix -ng (dss-ng-input, dss-ng-datepicker, dss-ng-timepicker).`}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Refactor en iniciatives"})}),`
`,e.jsx(s.p,{children:"S’hauran de reanomenar els components llistats a continuació pel seu nou selector:"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Selector v2"}),e.jsx(s.th,{children:"Selector v3"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-checkbox"}),e.jsx(s.td,{children:"dss-ng-checkbox"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-datepicker"}),e.jsx(s.td,{children:"dss-ng-datepicker"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-datepicker-range"}),e.jsx(s.td,{children:"dss-ng-datepicker-range"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-input"}),e.jsx(s.td,{children:"dss-ng-input"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-input-action"}),e.jsx(s.td,{children:"dss-ng-input-action"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-input-dropdown"}),e.jsx(s.td,{children:"dss-ng-input-dropdown"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-input-switch"}),e.jsx(s.td,{children:"dss-ng-input-switch"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-radio-button"}),e.jsx(s.td,{children:"dss-ng-radio-button"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-search-bar"}),e.jsx(s.td,{children:"dss-ng-search-bar"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-textarea"}),e.jsx(s.td,{children:"dss-ng-textarea"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-timepicker"}),e.jsx(s.td,{children:"dss-ng-timepicker"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-form-checkbox"}),e.jsx(s.td,{children:"dss-checkbox"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-form-checkbox-group"}),e.jsx(s.td,{children:"dss-checkbox-group"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-form-datepicker"}),e.jsx(s.td,{children:"dss-datepicker"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-form-datepicker-range"}),e.jsx(s.td,{children:"dss-datepicker-range"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-form-input"}),e.jsx(s.td,{children:"dss-input"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-form-radio-button"}),e.jsx(s.td,{children:"dss-radio-button"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-form-radio-button-group"}),e.jsx(s.td,{children:"dss-radio-button-group"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-form-select"}),e.jsx(s.td,{children:"dss-select"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-form-timepicker"}),e.jsx(s.td,{children:"dss-timepicker"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-form-toggle"}),e.jsx(s.td,{children:"dss-toggle"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"nova-estratègia-de-portals-per-a-elements-desplegables",children:"Nova estratègia de portals per a elements desplegables"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Problema"})}),`
`,e.jsx(s.p,{children:`Els components desplegables (especialment els tooltips) mostraven problemes de posicionament en determinades situacions,
principalment en contextos d’apilament de contenidors amb diferents regles CSS de position i/o overflow niats. Per solucionar
aquests problemes, a la v2 es van afegir diversos workarounds, que provocaven que aquests components fossin cada vegada més
complexos d’utilitzar correctament.`}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Solució"})}),`
`,e.jsx(s.p,{children:"Per arribar a una solució definitiva, s’han dut a terme les actuacions següents:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"S’ha actualitzat la llibreria Popper.js v2 a la seva nova distribució, ara anomenada Floating UI, que ofereix un millor rendiment i noves funcionalitats."}),`
`,e.jsx(s.li,{children:"S’ha refactoritzat el codi dels components desplegables per aprofitar les noves funcionalitats de Floating UI."}),`
`,e.jsx(s.li,{children:"S’ha implementat una nova estratègia de portals per renderitzar els elements desplegables directament al body del document, evitant així els problemes d’apilament i posicionament."}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"L’estratègia de portals s’aplica només als components que no inclouen slots personalitzats per al contingut desplegable, com ara popover i action-menu."}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Refactor en iniciatives"})}),`
`,e.jsx(s.p,{children:`No calen canvis per al nou funcionament; tot i així, només per als components que utilitzen el nou portal-manager,
es recomana fer una neteja dels workarounds aplicats a la v2, ja que propietats com tooltipFixed, tooltipPosition
o forceViewport ja no tenen efecte a la v3.`})]})}function p(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{p as default};
