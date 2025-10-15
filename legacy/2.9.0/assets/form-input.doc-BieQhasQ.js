import{j as e,M as l,T as t,C as n}from"./index-CFBZC0NR.js";import{useMDXComponents as r}from"./index-BZjvtQZR.js";import{S as d,P as c,R as o,D as m,a as x,I as h,b as p,H as u,C as j,F as b,N as f,U as q,c as g,M as A}from"./form-input.stories-ITNip53l.js";import"./iframe-DM_Byvnn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";import"./storybook-decorators-DSS85Rnr.js";function i(s){const a={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(t,{}),e.jsx("component-title",{children:"dss-form-input"})]}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#required",children:"Required"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#disabled",children:"Disabled"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#readonly",children:"Read Only"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#mida",children:"Mida"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-ajuda",children:"Amb ajuda"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-comptador",children:"Amb comptador"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-decimals",children:"Amb decimals"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#sense-label",children:"Sense label"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-unitats",children:"Amb unitats"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-prefix",children:"Amb prefix"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-m%C3%A0scara",children:"Amb màscara"})}),`
`]}),`
`,e.jsx(a.h3,{id:"required",children:"Required"}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(a.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(a.h3,{id:"read-only",children:"Read Only"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(a.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(a.h3,{id:"mida",children:"Mida"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(a.h2,{id:"amb-ajuda",children:"Amb ajuda"}),`
`,e.jsxs(a.p,{children:["Per mostrar el text d’ajuda cal indicar la propietat ",e.jsx(a.strong,{children:"helpText"}),"."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(a.h3,{id:"amb-comptador",children:"Amb comptador"}),`
`,e.jsxs(a.p,{children:["Per mostrar el comptador de carters cal indicar la propietat ",e.jsx(a.strong,{children:"maxlength"})," de l'input i també habilitar l'opció de veure el text d'ajuda."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(a.h3,{id:"amb-decimals",children:"Amb decimals"}),`
`,e.jsxs(a.p,{children:["L'input number ha de gestionar-se de manera nativa, per la qual cosa per a habilitar l'ús de decimals ha d'afegir-se la propietat ",e.jsx(a.code,{children:"step"})," dins del ",e.jsx(a.code,{children:"<input>"})," en lloc d'en el selector ",e.jsx(a.code,{children:"<dss-input>"}),`.
step="any" >> permet qualsevol decimal
step="1" >> no permet decimals
step="0.5" >> permetrà 0.5; 1; 1.5; ...
step="0.1" >> permetrà 0.1; 0.2; 0.3; 0.4; ...
step="0.01" >> permetrà 0.01; 0.02; 0.03; 0.04; ...`]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(a.h3,{id:"sense-label",children:"Sense label"}),`
`,e.jsx(a.p,{children:`Per requisits d'accessibilitat, tots els inputs han d'incloure una etiqueta (label) que indiqui als usuaris l'objectiu d'aquest
element. Per tant, en cas de no incloure una etiqueta a través de l'slot, és imprescindible que s'indiqui a l'input l'etiqueta corresponent
utilitzant etiquetes ARIA, com ara aria-label o aria-labelledby. Només per midas lg o md.`}),`
`,e.jsx(n,{of:f}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h3,{id:"amb-unitats",children:"Amb unitats"}),`
`,e.jsx(n,{of:q}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h3,{id:"amb-prefix",children:"Amb prefix"}),`
`,e.jsx(n,{of:g}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h3,{id:"amb-màscara",children:"Amb màscara"}),`
`,e.jsxs(a.p,{children:["Afegir una màscara visual amb les propietats ",e.jsx(a.code,{children:"maskRegex"})," i ",e.jsx(a.code,{children:"maskReplace"}),"."]}),`
`,e.jsx(a.p,{children:`Aquestes dues propietats es combinen internament per construir una operació de substitució mitjançant value.replace(maskRegex, maskReplace), la qual s’executa cada vegada que
l’usuari escriu, per aplicar la màscara al contingut del camp.`}),`
`,e.jsx(a.p,{children:"Aquestes propietats es poden combinar amb l'atribut max-length natiu de l'input per definir el resultat final de la màscara."}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsxs(a.p,{children:["En cas que l'expressió regular no funcioni correctament en HTML o JavaScript natiu, comproveu que els caràcters s'estiguin escapant correctament, per exemple utilitzar ",e.jsx(a.code,{children:"\\\\"})," en lloc de ",e.jsx(a.code,{children:"\\"}),"."]}),`
`]}),`
`,e.jsx(n,{of:A}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{children:`Credit card example React:
<dss-form-input icon="" inputsize="lg" maskRegex="/(\\d{4})(?=\\d)/g" maskReplace="$1 " allowedChars="/[0-9]/g" maxLength={19} />

Custom Pattern example React:
<dss-form-input maskRegex="/^(.{2})(.*)$/" maskReplace="$1-$2" maxLength={6} />

`})})]})}function T(s={}){const{wrapper:a}={...r(),...s.components};return a?e.jsx(a,{...s,children:e.jsx(i,{...s})}):i(s)}export{T as default};
