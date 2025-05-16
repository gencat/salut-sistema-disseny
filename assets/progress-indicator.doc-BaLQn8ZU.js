import{j as e,M as d,T as l,C as n,a as c}from"./index-DN_bkMkN.js";import{useMDXComponents as i}from"./index-BBQZjJYr.js";import{S as a,P as o,N as h,T as x,D as j,I as p,a as u,W as g,E as m}from"./progress-indicator.stories-DUiaG9l2.js";import"./iframe-fAG1Epc4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-element-Dloa6E9d.js";import"./lit-html-D6a8R3xZ.js";function t(r){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("dss-badge",{text:"dss-progress-indicator",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:`Els indicadors de progrés s'utilitzen per mostrar l'estat de finalització
d'una operació que dura més de 2 segons. Si no es pot determinar l'estat de
progrés, utilitzeu un Spinner.`}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Nota:"})," El element ",e.jsx(s.strong,{children:"exemple-container-progress-indicator-canvas"})," només s'utilitza per la documentació."]}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(c,{}),`
`,e.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom"}),e.jsx(s.th,{children:"Tipus"}),e.jsx(s.th,{children:"Per defecte"}),e.jsx(s.th,{children:"Descripció"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"title"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"''"}),e.jsx(s.td,{children:"Títol del procés."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["description",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"''"}),e.jsx(s.td,{children:"Descripció curta i clara del procés."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"percentage"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number"})}),e.jsx(s.td,{children:"0"}),e.jsx(s.td,{children:"El percentatge actual del procés."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"state"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'default'"}),e.jsx(s.td,{children:"Estat de l'indicador de progrés. Pot ser: default, info, success, warning o error."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hasFailed"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsxs(s.td,{children:["Indica si ha fallat l'operació. Si és ",e.jsx(s.strong,{children:"true"}),", la propietat ",e.jsx(s.strong,{children:"state"})," será ",e.jsx(s.strong,{children:"error"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hidePercentage"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Permet ocultar el text amb el percentatge numèric."})]})]})]})}),`
`,e.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("h3",{children:"Índex"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#tipus",children:"Tipus"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#estat",children:"Estat"})}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.h3,{id:"tipus",children:"Tipus"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"El progress indicator pot ser de dos tipus: sense títol, amb títol."}),`
`]}),`
`,e.jsx("h5",{children:"Sense títol"}),`
`,e.jsx(s.p,{children:`Aquesta opció no inclou cap títol, sinó que es mostra simplement una barra
animada que indica el progrés de la tasca. Aquesta opció és útil per als
usuaris que ja coneixen la tasca o procés que es duu a terme i només
necessiten informació visual sobre el progrés.`}),`
`,e.jsx(n,{of:h}),`
`,e.jsx("h5",{children:"Amb títol"}),`
`,e.jsx(s.p,{children:`Aquesta opció inclou un títol que descriu el procés o tasca que s'està duent a
terme, així com el percentatge completat o el temps estimat restant. Aquesta
opció ajuda als usuaris a entendre millor quin procés està en marxa i quan
s'espera que estigui acabat.`}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.h3,{id:"estat",children:"Estat"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"El progress indicator pot tenir cinc estats diferents: default, info, success, warning i error."}),`
`]}),`
`,e.jsx("h5",{children:"Default"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx("h5",{children:"Info"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx("h5",{children:"Success"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx("h5",{children:"Warning"}),`
`,e.jsx(n,{of:g}),`
`,e.jsx("h5",{children:"Error"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Nota:"})," Si la propietat ",e.jsx(s.strong,{children:"hasFailed"})," és ",e.jsx(s.strong,{children:"true"}),", l'estat serà ",e.jsx(s.strong,{children:"error"}),"."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.2.2"})}),e.jsx(s.td,{children:"S'ha afegit la propietat hidePercentage."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.0.0"})}),e.jsx(s.td,{children:"Nou web component"})]})]})]})]})}function N(r={}){const{wrapper:s}={...i(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(t,{...r})}):t(r)}export{N as default};
