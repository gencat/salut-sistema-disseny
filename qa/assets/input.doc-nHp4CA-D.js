import{j as e,M as l,T as t,C as a,S as d}from"./index-D6OjdqE2.js";import{useMDXComponents as r}from"./index-Cs_-3dnX.js";import{S as c,P as o,R as u,D as m,a as p,I as x,b as h,H as j,C as b,F as f,N as g,U as q,c as v,M as A}from"./input.stories-DWSPcJMb.js";import"./iframe-Cp4mteJF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";function i(s){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .inputs-sizes {
      display: flex;
      gap: 16px;
      align-items: end;
    }
  `}),`
`,e.jsx(l,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(t,{}),e.jsx("component-title",{children:"dss-input"})]}),`
`,e.jsx("br",{}),`
`,e.jsx("dss-alert",{fullWidth:!0,state:"warning",size:"md",message:"Aquest component es mantindrà només per a les iniciatives que continuïn utilitzant Angular Reactive Forms; en cas contrari, si us plau, feu servir el nou component dss-form-input."}),`
`,e.jsxs(n.p,{children:["Veure nou component: ",e.jsx(n.a,{href:"/docs/components-form-input--docs",children:e.jsx(n.strong,{children:"Form: Input"})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(n.p,{children:`Per habilitar l’ús del component en formularis s’ha extret l’input fora del mateix utilitzant slots.
D’aquesta forma totes les propietats natives de l’input (placeholder, required, disabled, readonly, maxlength, min, max, etc.) poden definir-se en el mateix input sense la necessitat de definir una propietat en el selector del web component.
L'element label també s'ha hagut de definir amb slots per tal de situar-lo en el mateix nivell del DOM per tal d'assolit els requisits d'accessibilitat.`}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#required",children:"Required"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#disabled",children:"Disabled"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#readonly",children:"Read Only"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#mida",children:"Mida"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-ajuda",children:"Amb ajuda"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-comptador",children:"Amb comptador"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-decimals",children:"Amb decimals"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#sense-label",children:"Sense label"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-unitats",children:"Amb unitats"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-prefix",children:"Amb prefix"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-m%C3%A0scara",children:"Amb màscara"})}),`
`]}),`
`,e.jsx(n.h3,{id:"required",children:"Required"}),`
`,e.jsx(a,{of:u}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(n.h3,{id:"read-only",children:"Read Only"}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(a,{of:x}),`
`,e.jsx(n.h3,{id:"mida",children:"Mida"}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(n.h2,{id:"amb-ajuda",children:"Amb ajuda"}),`
`,e.jsxs(n.p,{children:["Per mostrar el text d’ajuda cal indicar la propietat ",e.jsx(n.strong,{children:"helpText"}),"."]}),`
`,e.jsx(a,{of:j}),`
`,e.jsx(n.h3,{id:"amb-comptador",children:"Amb comptador"}),`
`,e.jsxs(n.p,{children:["Per mostrar el comptador de carters cal indicar la propietat ",e.jsx(n.strong,{children:"maxlength"})," de l'input i també habilitar l'opció de veure el text d'ajuda."]}),`
`,e.jsx(a,{of:b}),`
`,e.jsx(n.h3,{id:"amb-decimals",children:"Amb decimals"}),`
`,e.jsxs(n.p,{children:["L'input number ha de gestionar-se de manera nativa, per la qual cosa per a habilitar l'ús de decimals ha d'afegir-se la propietat ",e.jsx(n.code,{children:"step"})," dins del ",e.jsx(n.code,{children:"<input>"})," en lloc d'en el selector ",e.jsx(n.code,{children:"<dss-input>"}),`.
step="any" >> permet qualsevol decimal
step="1" >> no permet decimals
step="0.5" >> permetrà 0.5; 1; 1.5; ...
step="0.1" >> permetrà 0.1; 0.2; 0.3; 0.4; ...
step="0.01" >> permetrà 0.01; 0.02; 0.03; 0.04; ...`]}),`
`,e.jsx(a,{of:f}),`
`,e.jsx(n.h3,{id:"sense-label",children:"Sense label"}),`
`,e.jsx(n.p,{children:`Per requisits d'accessibilitat, tots els inputs han d'incloure una etiqueta (label) que indiqui als usuaris l'objectiu d'aquest
element. Per tant, en cas de no incloure una etiqueta a través de l'slot, és imprescindible que s'indiqui a l'input l'etiqueta corresponent
utilitzant etiquetes ARIA, com ara aria-label o aria-labelledby. Només per midas lg o md.`}),`
`,e.jsx(a,{of:g}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"amb-unitats",children:"Amb unitats"}),`
`,e.jsx(a,{of:q}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"amb-prefix",children:"Amb prefix"}),`
`,e.jsx(a,{of:v}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"amb-màscara",children:"Amb màscara"}),`
`,e.jsxs(n.p,{children:["Afegir una màscara visual amb les propietats ",e.jsx(n.code,{children:"maskRegex"})," i ",e.jsx(n.code,{children:"maskReplace"}),"."]}),`
`,e.jsx(n.p,{children:`Aquestes dues propietats es combinen internament per construir una operació de substitució mitjançant value.replace(maskRegex, maskReplace), la qual s’executa cada vegada que
l’usuari escriu, per aplicar la màscara al contingut del camp.`}),`
`,e.jsx(n.p,{children:"Aquestes propietats es poden combinar amb l'atribut max-length natiu de l'input per definir el resultat final de la màscara."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["En cas que l'expressió regular no funcioni correctament en HTML o JavaScript natiu, comproveu que els caràcters s'estiguin escapant correctament, per exemple utilitzar ",e.jsx(n.code,{children:"\\\\"})," en lloc de ",e.jsx(n.code,{children:"\\"}),"."]}),`
`]}),`
`,e.jsx(a,{of:A}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Credit card example React:
<dss-input icon="" inputsize="lg" maskRegex="/(\\d{4})(?=\\d)/g" maskReplace="$1 " >
...
<input ... maxLength={19} />
</dss-input>

Custom Pattern example React:
<dss-input maskRegex="/^(.{2})(.*)$/" maskReplace="$1-$2">
...
<input ... maxLength={6} />
</dss-input>

`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"resolució-de-problemes",children:"Resolució de problemes"}),`
`,e.jsx(n.h3,{id:"label-i-input-solapats-en-assignar-un-valor-en-els-formularis-reactius-dangular",children:"Label i input solapats en assignar un valor en els formularis reactius d'Angular."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Problema:"})}),`
`,e.jsx(n.p,{children:`S'ha detectat un problema en utilitzar el component en formularis reactius d'Angular, on, en actualitzar el component des d'Angular,
el DOM no s'actualitza directament, de manera que l'observador intern de l'input, que refresca la posició de la label quan s'afegeix un nou valor,
no s'està executant.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Solució:"})}),`
`,e.jsx(n.p,{children:`Utilitzeu la nova propietat value, que actua com un listener per detectar directament quan s'ha modificat el valor i així restablir la posició dels
elements del component. Per evitar afegir complexitat a les iniciatives, el valor es pot capturar directament des del mateix formulari reactiu de la
manera següent:`}),`
`,e.jsx(d,{code:`
  <dss-input icon="person" [value]="myForm.get('name')?.value">
    <label slot="label" for="myInputName">Name</label>
    <input id="myInputName" slot="input" type="text" formControlName="name">
  </dss-input>
`})]})}function L(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{L as default};
