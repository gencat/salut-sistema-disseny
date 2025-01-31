import{j as e,M as a,T as t,C as s,a as d,S as o}from"./index-BLqgKUE9.js";import{useMDXComponents as l}from"./index-C-yrU3Bz.js";import{S as c,P as h,R as x,D as u,a as j,b as p,H as m,C as b,F as f,N as g}from"./input.stories-DqIty0xR.js";import"./iframe-C_0fz1pU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-BBo-_xnV.js";import"./index-ogSvIofg.js";import"./lit-html-CeYizTxc.js";function i(r){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
   
  `}),`
`,e.jsx(a,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(t,{}),e.jsx("dss-badge",{text:"dss-input",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsxs(n.p,{children:["El component ",e.jsx(n.strong,{children:"dss-input"}),` ofereix als usuaris una entrada senzilla per
a un formulari, cal indicar si és de tipus text o number.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"icon"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Modifica la icona situada a l'esquerra l’input."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"inputSize"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"lg"}),e.jsx(n.td,{children:"Mida de l'input: Pot tenir els valors 'md' o 'lg'. Per defecte tindrà sempre el valor 'lg'"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"helpText"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Text d’ajuda que es mostrarà sota del component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"invalid"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"En definir aquesta propietat el component s mostrarà amb un estil d’error per tal de diferenciar-los de la resta."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"removeMinWidth"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Deshabilita el min-width definit per defecte per als inputs. Si aquesta propietat està activa, l'ample s'adaptarà al 100% del seu contenidor, per la qual cosa s'haurà de definir externament."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"value"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"}),e.jsxs(n.td,{children:["Aquesta propietat només és necessària per solucionar un problema en els formularis reactius d'Angular pel qual es produeix un solapament entre la label i el value de l'input en assignar el valor de manera externa.",e.jsx("br",{}),"Vegeu la secció de resolució de problemes."]})]})]})]}),`
`,e.jsx(n.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx(n.p,{children:`Per habilitar l’ús del component en formularis s’ha extret l’input fora del mateix utilitzant slots.
D’aquesta forma totes les propietats natives de l’input (placeholder, required, disabled, readonly, maxlength, min, max, etc.) poden definir-se en el mateix input sense la necessitat de definir una propietat en el selector del web component.
L'element label també s'ha hagut de definir amb slots per tal de situar-lo en el mateix nivell del DOM per tal d'assolit els requisits d'accessibilitat.`}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onInputChange"})}),e.jsx(n.td,{children:"Event que torna el valor de l'input. Només disponible en fer clic en els botons de l'input tipus number."})]})})]}),`
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
`]}),`
`,e.jsx(n.h3,{id:"required",children:"Required"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"read-only",children:"Read Only"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h3,{id:"mida",children:"Mida"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"amb-ajuda",children:"Amb ajuda"}),`
`,e.jsxs(n.p,{children:["Per mostrar el text d’ajuda cal indicar la propietat ",e.jsx(n.strong,{children:"helpText"}),"."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"amb-comptador",children:"Amb comptador"}),`
`,e.jsxs(n.p,{children:["Per mostrar el comptador de carters cal indicar la propietat ",e.jsx(n.strong,{children:"maxlength"})," de l'input i també habilitar l'opció de veure el text d'ajuda."]}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h3,{id:"amb-decimals",children:"Amb decimals"}),`
`,e.jsxs(n.p,{children:["L'input number ha de gestionar-se de manera nativa, per la qual cosa per a habilitar l'ús de decimals ha d'afegir-se la propietat ",e.jsx(n.code,{children:"step"})," dins del ",e.jsx(n.code,{children:"<input>"})," en lloc d'en el selector ",e.jsx(n.code,{children:"<dss-input>"}),`.
step="any" >> permet qualsevol decimal
step="1" >> no permet decimals
step="0.5" >> permetrà 0.5; 1; 1.5; ...
step="0.1" >> permetrà 0.1; 0.2; 0.3; 0.4; ...
step="0.01" >> permetrà 0.01; 0.02; 0.03; 0.04; ...`]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h3,{id:"sense-label",children:"Sense label"}),`
`,e.jsx(n.p,{children:`Per requisits d'accessibilitat, tots els inputs han d'incloure una etiqueta (label) que indiqui als usuaris l'objectiu d'aquest
element. Per tant, en cas de no incloure una etiqueta a través de l'slot, és imprescindible que s'indiqui a l'input l'etiqueta corresponent
utilitzant etiquetes ARIA, com ara aria-label o aria-labelledby.`}),`
`,e.jsx(s,{of:g}),`
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
`,e.jsx(o,{code:`
  <dss-input icon="person" [value]="myForm.get('name')?.value">
    <label slot="label" for="myInputName">Name</label>
    <input id="myInputName" slot="input" type="text" class="dss-input" formControlName="name">
  </dss-input>
`}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Versió"}),e.jsx(n.th,{children:"Canvis"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.0"})}),e.jsx(n.td,{children:"Refactor v2"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.12.2"})}),e.jsxs(n.td,{children:["S'ha afegit la propietat value per resoldre un problema amb els formularis reactius d'Angular.",e.jsx("br",{}),"S'ha corregit l'estil del component quan no es defineix una etiqueta a través de l'slot corresponent."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.4.1"})}),e.jsx(n.td,{children:"Refactor:  reemplaça a l'actual Input Field i solucionat errors associats a formularis els impedien accedir al valor dels inputs o utilitzar components en formularis reactius d'Angular."})]})]})]})]})}function R(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{R as default};
