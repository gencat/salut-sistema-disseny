import{j as e,M as i}from"./blocks-D_zk3kjZ.js";import{useMDXComponents as d}from"./index-D0A3GcHo.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DNLJd-HG.js";function t(n){const s={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Documentació/Changelog v3/Breaking changes/1) Components eliminats"}),`
`,e.jsx(s.h2,{id:"migració-v3-components-eliminats",children:"Migració v3: Components eliminats"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Problema"})}),`
`,e.jsx(s.p,{children:"Necessitat de reduir la mida de la llibreria i eliminar components que no s’utilitzen o que tenen alternatives actualitzades."}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Solució"})}),`
`,e.jsx(s.p,{children:`S’han eliminat els components depreciats a la v1, especialment tots aquells components de tipus HTML/CSS per als quals
es van crear alternatives basades en Web Components a la v2.`}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Refactor en iniciatives"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#llista-de-components-htmlcss-eliminats",children:"Llista de components HTML/CSS eliminats"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#llista-de-components-lit-deprecats-eliminats",children:"Llista de components Lit deprecats eliminats"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"llista-de-components-htmlcss-eliminats",children:"Llista de components HTML/CSS eliminats"}),`
`,e.jsx(s.p,{children:`Els següents elements fan referències a les versions HTML/CSS deprecades a la v1. Si encara segueix
utilitzant-ne alguna ha de substituir-les per la corresponent versió de web component Lit.`}),`
`,e.jsx(s.p,{children:"S’hauran de substituir els components HTML/CSS eliminats per les seves alternatives basades en Web Components."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Abans: ",e.jsx(s.code,{children:'<button class="dss-button dss-button--primary">Label</button>'})]}),`
`,e.jsxs(s.li,{children:["Ara: ",e.jsx(s.code,{children:'<dss-button variant="primary" label="Label"></dss-button>'})]}),`
`]}),`
`,e.jsx(s.p,{children:`Amb l’objectiu de facilitar la transició, posem a disposició dels desenvolupadors una còpia de seguretat CSS de l’anterior
v2 disponible al següent enllaç:`}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://codisisdisseny.salut.gencat.cat/backup/dss-v2-backup-css.zip",rel:"nofollow",children:"Backup CSS v2"})}),`
`]}),`
`,e.jsx(s.p,{children:`Aquesta còpia de seguretat només s’ha d’utilitzar temporalment per facilitar la migració, i no se’n recomana l’ús en producció,
ja que pot suposar un impacte en els temps de càrrega de l’aplicació en carregar dues fulles d’estils.`}),`
`,e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Action menu"}),e.jsx("td",{children:"Alert"}),e.jsx("td",{children:"Badge"}),e.jsx("td",{children:"Breadcrumb"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Button"}),e.jsx("td",{children:"Checkbox"}),e.jsx("td",{children:"Chip"}),e.jsx("td",{children:"Content switcher"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Divider"}),e.jsx("td",{children:"Decorative icon"}),e.jsx("td",{children:"Floating button"}),e.jsx("td",{children:"Footer"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Header"}),e.jsx("td",{children:"Icon button"}),e.jsx("td",{children:"Input field"}),e.jsx("td",{children:"List menu"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Legend"}),e.jsx("td",{children:"Radio button"}),e.jsx("td",{children:"Modal"}),e.jsx("td",{children:"Module header"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Popover"}),e.jsx("td",{children:"Sidebar"}),e.jsx("td",{children:"Skeleton"}),e.jsx("td",{children:"Tile"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Tooltip"}),e.jsx("td",{children:"Table"}),e.jsx("td",{children:"Tabs"}),e.jsx("td",{children:"Toast"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"User feedback"}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"llista-de-components-lit-deprecats-eliminats",children:"Llista de components Lit deprecats eliminats"}),`
`,e.jsx(s.p,{children:`Els elements següents ja havien estat marcats com a deprecats durant la v2 i disposen de versions
millorades per a cadascun.`}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Deprecat"}),e.jsx(s.th,{children:"Alternativa"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-input-field"}),e.jsx(s.td,{children:"dss-ng-input o dss-input"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-date-picker"}),e.jsx(s.td,{children:"dss-ng-datepicker o dss-datepicker"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-dropdownlist"}),e.jsx(s.td,{children:"dss-ng-input-dropdown o dss-select"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-switch"}),e.jsx(s.td,{children:"dss-ng-input-switch o dss-toggle"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-search-bar"}),e.jsx(s.td,{children:"dss-ng-searchbar o dss-searchbar"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-sidemenu"}),e.jsx(s.td,{children:"dss-side-menu"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-breadcrumb"}),e.jsx(s.td,{children:"dss-breadcrumb-bar"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dss-button-link"}),e.jsx(s.td,{children:"dss-button o dss-link"})]})]})]})]})}function h(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{h as default};
