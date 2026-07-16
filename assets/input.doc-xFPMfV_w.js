import{j as e,M as l,T as t,C as s}from"./blocks-CmUYoZh4.js";import{useMDXComponents as r}from"./index-DZthTCuD.js";import{S as c,P as d,R as o,D as m,a as x,I as u,b as h,H as p,C as j,F as b,N as f,U as q,c as g,M as A,A as R,d as M}from"./input.stories-C2P7KjmG.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DHQWIC1_.js";import"./storybook-decorators-DSS85Rnr.js";function i(a){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(t,{}),e.jsx("component-title",{children:"dss-input"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:d}),`
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
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-accions",children:"Amb accions"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#focus-manual",children:"Focus manual"})}),`
`]}),`
`,e.jsx(n.h3,{id:"required",children:"Required"}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"read-only",children:"Read Only"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"mida",children:"Mida"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"amb-ajuda",children:"Amb ajuda"}),`
`,e.jsxs(n.p,{children:["Per mostrar el text d’ajuda cal indicar la propietat ",e.jsx(n.strong,{children:"helpText"}),"."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"amb-comptador",children:"Amb comptador"}),`
`,e.jsxs(n.p,{children:["Per mostrar el comptador de carters cal indicar la propietat ",e.jsx(n.strong,{children:"maxlength"})," de l'input i també habilitar l'opció de veure el text d'ajuda."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h3,{id:"amb-decimals",children:"Amb decimals"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'step="any" >> permet qualsevol decimal'}),`
`,e.jsx(n.li,{children:'step="1" >> no permet decimals'}),`
`,e.jsx(n.li,{children:'step="0.5" >> permetrà 0.5; 1; 1.5; ...'}),`
`,e.jsx(n.li,{children:'step="0.1" >> permetrà 0.1; 0.2; 0.3; 0.4; ...'}),`
`,e.jsx(n.li,{children:'step="0.01" >> permetrà 0.01; 0.02; 0.03; 0.04; ...'}),`
`]}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h3,{id:"sense-label",children:"Sense label"}),`
`,e.jsx(n.p,{children:`Per requisits d'accessibilitat, tots els inputs han d'incloure una etiqueta (label) que indiqui als usuaris l'objectiu d'aquest
element. Per tant, en cas de no incloure una etiqueta a través de l'slot, és imprescindible que s'indiqui a l'input l'etiqueta corresponent
utilitzant etiquetes ARIA, com ara aria-label o aria-labelledby. Només per midas lg o md.`}),`
`,e.jsx(s,{of:f}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"amb-unitats",children:"Amb unitats"}),`
`,e.jsx(s,{of:q}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"amb-prefix",children:"Amb prefix"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"amb-màscara",children:"Amb màscara"}),`
`,e.jsxs(n.p,{children:["Afegir una màscara visual amb les propietats ",e.jsx(n.code,{children:"maskRegex"})," i ",e.jsx(n.code,{children:"maskReplace"}),"."]}),`
`,e.jsx(n.p,{children:`Aquestes dues propietats es combinen internament per construir una operació de substitució mitjançant value.replace(maskRegex, maskReplace), la qual s’executa cada vegada que
l’usuari escriu, per aplicar la màscara al contingut del camp.`}),`
`,e.jsx(n.p,{children:"Aquestes propietats es poden combinar amb l'atribut max-length natiu de l'input per definir el resultat final de la màscara."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["En cas que l'expressió regular no funcioni correctament en HTML o JavaScript natiu, comproveu que els caràcters s'estiguin escapant correctament, per exemple utilitzar ",e.jsx(n.code,{children:"\\\\"})," en lloc de ",e.jsx(n.code,{children:"\\"}),"."]}),`
`]}),`
`,e.jsx(s,{of:A}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Credit card example React:
<dss-input icon="" inputsize="lg" maskRegex="/(\\d{4})(?=\\d)/g" maskReplace="$1 " allowedChars="/[0-9]/g" maxLength={19} />

Custom Pattern example React:
<dss-input maskRegex="/^(.{2})(.*)$/" maskReplace="$1-$2" maxLength={6} />

`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"amb-accions",children:"Amb accions"}),`
`,e.jsxs(n.p,{children:["La propietat ",e.jsx(n.code,{children:"hasActions"})," permet habilitar un slot intern mitjançant el qual introduir botons de tipus icona al component sense necessitat de definir un component diferent."]}),`
`,e.jsx(s,{of:R}),`
`,e.jsx(n.h3,{id:"focus-manual",children:"Focus manual"}),`
`,e.jsxs(n.p,{children:[`S'ha habilitat el mètode focus(options), que permet passar també les opcions del mètode natiu
`,e.jsx(n.a,{href:"https://www.w3api.com/HTMLDOM/HTMLElement/focus/#par%C3%A1metros",rel:"nofollow",children:"HTMLElement.focus()"}),"."]}),`
`,e.jsx(n.p,{children:`Aquest mètode força el focus sobre l'input intern per corregir problemes
amb la propietat autofocus en entorns complexos.`}),`
`,e.jsx(s,{of:M}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`const forceFocus = () => {
  const element = document.querySelector('#manual-focus-demo');
  if (element) {
    (element as HTMLElement).focus(); // Input | HTMLElement | any
  }
}
`})})]})}function H(a={}){const{wrapper:n}={...r(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(i,{...a})}):i(a)}export{H as default};
