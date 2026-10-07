import{j as e,M as a}from"./blocks-BZwW1gHL.js";import{useMDXComponents as l}from"./index-CL-ku6MX.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-g0Kz6tzy.js";function c(n){const s={h2:"h2",h3:"h3",h4:"h4",p:"p",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Documentació/Changelog v3/3.1.4"}),`
`,e.jsx(s.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx("br",{}),`
`,e.jsxs("div",{class:"dss-grid",children:[e.jsx("div",{class:"dss-col--6 dss-col--sm-4 sb-changelog-col",children:e.jsx("dss-badge",{size:"lg",state:"ideal",text:"Versió: 3.1.4",hideIcon:!0})}),e.jsx("div",{class:"dss-col--6 dss-col--sm-4 sb-changelog-col sb-changelog-col--right",children:e.jsx("changelog-release",{date:"7/10/2026"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsxs("div",{class:"dss-grid",children:[e.jsx("div",{class:"dss-col--8 dss-col--sm-5",children:e.jsx(s.h3,{id:"informe-de-registre-de-canvis",children:"Informe de registre de canvis"})}),e.jsx("div",{class:"dss-col--4 dss-col--sm-3 sb-changelog-col sb-changelog-col--right sb-changelog-col---legend",children:e.jsx("changelog-legend",{})})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx("div",{class:"dss-grid",children:e.jsxs("div",{class:"dss-col--12 dss-col--sm-8",children:[e.jsx(s.h4,{id:"badge-i-badge-button",children:"Badge i Badge Button"}),e.jsx("changelog-item",{status:"bug",children:e.jsx(s.p,{children:`S’ha afegit temporalment un workaround que permet ocultar les icones dels badges de
criticitat per resoldre un cas molt concret detectat a Producció. Aquesta solució
afecta l’accessibilitat visual del component i no es publicarà ni se’n documentarà
l’ús. Només se’n compartirà la implementació amb els equips afectats. Un cop disponible
una alternativa vàlida i accessible, aquest workaround s’eliminarà.`})}),e.jsx("br",{}),e.jsx(s.h4,{id:"sidemenu",children:"Sidemenu"}),e.jsx("changelog-item",{status:"bug",children:e.jsx(s.p,{children:`S’ha corregit un error pel qual, en fer clic en un element de la llista, es mostrava un error
a la consola que no afectava el funcionament del component.`})}),e.jsx("br",{})]})})]})}function g(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(c,{...n})}):c(n)}export{g as default};
