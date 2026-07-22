import{j as e,M as t}from"./blocks-0TN8mBac.js";import{useMDXComponents as s}from"./index-D_THLDEK.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Dc24GPd4.js";function i(a){const n={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Documentació/Changelog v3/Breaking changes/5) Header components"}),`
`,e.jsx(n.h2,{id:"migració-v3-canvi-de-botons-a-enllaços-a-header-menu-patient-i-menu-professional",children:"Migració v3: Canvi de botons a enllaços a Header Menu Patient i Menu Professional"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.p,{children:`En les col·leccions Header Menu Pacient i Menu Professional s’estaven utilitzant botons per als elements
de Veure  detalls i Editar usuari, que en realitat haurien de funcionar com a enllaços a través dels
quals es navegui a la  pàgina adequada. Per aquest motiu, s’han substituït en ambdues col·leccions els
botons pel component link.`}),`
`,e.jsx(n.p,{children:"Per adaptar la funcionalitat, els passos a seguir són:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Eliminar l’event listener per a les accions ",e.jsx(n.code,{children:"onViewDetails"})," i ",e.jsx(n.code,{children:"onEdit"})]}),`
`,e.jsxs(n.li,{children:["Afegir les propietats ",e.jsx(n.code,{children:"detailsHref"})," i ",e.jsx(n.code,{children:"editHref"})," quan sigui necessari."]}),`
`,e.jsxs(n.li,{children:["Les propietats ",e.jsx(n.code,{children:"detailsTarget"})," i ",e.jsx(n.code,{children:"editTarget"})," són opcionals, només s’utilitzen en el cas que la navegació hagi d’obrir l’enllaç en una nova pestanya."]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"migració-v3-reanomenament-de-header-links-a-header-navigation",children:"Migració v3: Reanomenament de header-links a header-navigation"}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.p,{children:["El component header-links ha estat reanomenat a ",e.jsx(n.strong,{children:"header-navigation"}),` per alinear-lo amb el seu contingut
intern, ja que realment no es tracta d’enllaços, sinó de botons que permeten la navegació posterior
mitjançant esdeveniments.`]}),`
`,e.jsxs(n.p,{children:[`Així mateix, l’slot per injectar aquest component al Header principal s’ha reanomenat de slot="links"
a `,e.jsx(n.code,{children:'slot="navigation"'}),"."]})]})}function u(a={}){const{wrapper:n}={...s(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(i,{...a})}):i(a)}export{u as default};
