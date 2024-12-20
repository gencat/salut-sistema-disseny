import{ae as e,af as d,ag as l,ah as t,ai as c}from"./index-Da2BS-m_.js";import{u as r}from"./index-7D23P0E9.js";import{S as a,P as o,B as h,T as x,a as j,N as u}from"./input-action.stories-CqNdaC58.js";import"./iframe-BA9MAoLA.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";function i(s){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
   
  `}),`
`,e.jsx(d,{of:a}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("dss-badge",{text:"dss-input-action",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsxs(n.p,{children:["El component ",e.jsx(n.strong,{children:"dss-input-action"})," amplia l'input per defecte, afegint la possibilitat d'incloure fins a dos botons d'acció per completar-ne la funcionalitat."]}),`
`,e.jsxs(n.p,{children:["En aquest document només s'especifiquen les noves funcionalitats afegides; per a més informació, reviseu el component ",e.jsx(n.a,{href:"/docs/components-input--input-text",children:"Input"}),"."]}),`
`,e.jsxs(n.p,{children:["La principal diferència és que en aquest component s'han afegit dos nous ",e.jsx(n.strong,{children:"slots"}),", ",e.jsx(n.code,{children:"action"})," i ",e.jsx(n.code,{children:"secondaryAction"}),", utilitzats per poder incloure de forma extensiva dos botons d'acció, utilitzant el component icon-button."]}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Àmbit"}),e.jsx(n.th,{children:"Condition"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"icon"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Requerida"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Modifica la icona situada a l'esquerra l’input."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"inputSize"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"lg"}),e.jsx(n.td,{children:"Mida de l'input: Pot tenir els valors 'md' o 'lg'. Per defecte tindrà sempre el valor 'lg'"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"helpText"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Text d’ajuda que es mostrarà sota del component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"invalid"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"En definir aquesta propietat el component s mostrarà amb un estil d’error per tal de diferenciar-los de la resta."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"removeMinWidth"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Deshabilita el min-width definit per defecte per als inputs. Si aquesta propietat està activa, l'ample s'adaptarà al 100% del seu contenidor, per la qual cosa s'haurà de definir externament."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"value"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsxs(n.td,{children:["Aquesta propietat només és necessària per solucionar un problema en els formularis reactius d'Angular pel qual es produeix un solapament entre la label i el value de l'input en assignar el valor de manera externa.",e.jsx("br",{}),"Vegeu la secció de resolució de problemes."]})]})]})]}),`
`,e.jsx(n.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Àmbit"}),e.jsx(n.th,{children:"Condition"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onInputChange"})}),e.jsx(n.td,{children:"Output"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"CustomEvent"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Event que torna el valor de l'input. Només disponible en fer clic en els botons de l'input tipus number."})]})})]}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#default-text",children:"Default Text"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#text-amb-dues-accions",children:"Text amb dues accions "})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#default-nombre",children:"Default Nombre"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#text-amb-dues-accions",children:"Nombre amb dues accions "})}),`
`]}),`
`,e.jsx(n.h3,{id:"default-text",children:"Default Text"}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h3,{id:"text-amb-dues-accions",children:"Text amb dues accions"}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h3,{id:"default-nombre",children:"Default Nombre"}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(n.h3,{id:"nombre-amb-dues-accions",children:"Nombre amb dues accions"}),`
`,e.jsx(t,{of:u}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Versió"}),e.jsx(n.th,{children:"Canvis"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.0"})}),e.jsx(n.td,{children:"Refactor v2."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.12.2"})}),e.jsx(n.td,{children:"Nou web component."})]})]})]})]})}function T(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{T as default};
