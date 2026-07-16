import{j as e,M as c}from"./blocks-C0Hy_QiU.js";import{useMDXComponents as o}from"./index-CYcGtXlX.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-_r7gOCbv.js";function l(n){const s={h2:"h2",h3:"h3",h4:"h4",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Documentació/Changelog v2/2.16.1"}),`
`,e.jsx(s.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx("br",{}),`
`,e.jsxs("div",{class:"dss-grid",children:[e.jsx("div",{class:"dss-col--6 dss-col--sm-4 sb-changelog-col",children:e.jsx("dss-badge",{size:"lg",state:"ideal",text:"Versió: 2.16.1",hideIcon:!0})}),e.jsx("div",{class:"dss-col--6 dss-col--sm-4 sb-changelog-col sb-changelog-col--right",children:e.jsx("changelog-release",{date:"13/07/2026"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsxs("div",{class:"dss-grid",children:[e.jsx("div",{class:"dss-col--8 dss-col--sm-5",children:e.jsx(s.h3,{id:"informe-de-registre-de-canvis",children:"Informe de registre de canvis"})}),e.jsx("div",{class:"dss-col--4 dss-col--sm-3 sb-changelog-col sb-changelog-col--right sb-changelog-col---legend",children:e.jsx("changelog-legend",{})})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx("div",{class:"dss-grid",children:e.jsxs("div",{class:"dss-col--12 dss-col--sm-8",children:[e.jsx(s.h4,{id:"collisió-destils-de-web-components",children:"Col·lisió d'estils de Web Components"}),e.jsx("changelog-item",{status:"bug",children:e.jsx(s.p,{children:`S'ha corregit un error pel qual l'estil de l'host dels components icon-button i button s'estava aplicant
per error en diversos components com Modal i Drawer.»`})}),e.jsx("br",{}),e.jsx(s.h4,{id:"form-select",children:"Form Select"}),e.jsx("changelog-item",{status:"bug",children:e.jsx(s.p,{children:`S'ha corregit un error pel qual el desplegable del component en l'estat inicial podia generar un espai
buit dins del component.`})}),e.jsx("changelog-item",{status:"bug",children:e.jsx(s.p,{children:`S'ha corregit un error pel qual en tancar el desplegable amb el botó de 'toggle' no s'eliminava el
placeholder correctament.`})}),e.jsx("changelog-item",{status:"design",children:e.jsx(s.p,{children:"S'ha reduït el max-height per defecte del dropdown a 50vh."})})]})})]})}function h(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{h as default};
