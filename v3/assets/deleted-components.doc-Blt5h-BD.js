import{j as e,M as i}from"./blocks-BQe3t3mS.js";import{useMDXComponents as t}from"./index-D25yCQlW.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CdZ_4rdx.js";function a(s){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Documentació/Changelog v3/Breaking changes/Components eliminats"}),`
`,e.jsx(n.h2,{id:"migració-a-la-v3-components-eliminats",children:"Migració a la v3: Components eliminats"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Problema"})}),`
`,e.jsx(n.p,{children:"Necessitat de reduir la mida de la llibreria i eliminar components que no s’utilitzen o que tenen alternatives actualitzades."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Solució"})}),`
`,e.jsx(n.p,{children:`S’han eliminat els components depreciats a la v1, especialment tots aquells components de tipus HTML/CSS per als quals
es van crear alternatives basades en Web Components a la v2.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Refactor en iniciatives"})}),`
`,e.jsx(n.p,{children:"S’hauran de substituir els components eliminats per les seves alternatives basades en Web Components."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Abans: ",e.jsx(n.code,{children:'<button class="dss-button dss-button--primary">Label</button>'})]}),`
`,e.jsxs(n.li,{children:["Ara: ",e.jsx(n.code,{children:'<dss-button variant="primary" label="Label"></dss-button>'})]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Amb l’objectiu de facilitar la transició, posem a disposició dels desenvolupadors una còpia de seguretat CSS de l’anterior
v2 disponible al següent enllaç: `,e.jsx(n.a,{href:"https://designsystem.govern.es/descargas/dss-v2-backup-css.zip",rel:"nofollow",children:"Backup CSS v2"}),"."]}),`
`,e.jsx(n.p,{children:`Aquesta còpia de seguretat només s’ha d’utilitzar temporalment per facilitar la migració, i no se’n recomana l’ús en producció,
ja que pot suposar un impacte en els temps de càrrega de l’aplicació en carregar dues fulles d’estils.`})]})}function p(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{p as default};
