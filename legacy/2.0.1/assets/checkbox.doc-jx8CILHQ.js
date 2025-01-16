import{ae as e,af as l,ag as r,ah as i,ai as d}from"./index-Rj5sKnnY.js";import{u as t}from"./index-COmZ33MR.js";import{S as c,P as o,N as h,T as x,L as j}from"./checkbox.stories-xV2c7f2F.js";import"./iframe-B8zLdvo4.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";function a(n){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 20px;
    }
  `}),`
`,e.jsx(l,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(r,{}),e.jsx("dss-badge",{text:"dss-checkbox",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:`Els Checkboxs permeten als usuaris seleccionar un o més elements d'un conjunt.
Les caselles de selecció poden activar o desactivar una opció.`}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(d,{}),`
`,e.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"variant"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'default'"}),e.jsx(s.td,{children:"Variant de botó. Pot ser: default o validation"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"indeterminate"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Marca l'input com a indeterminat."})]})]})]})}),`
`,e.jsx(s.p,{children:"Les propietats natives del checkbox, com ara checked o disabled, s'han de definir en l'HTML del propi input."}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onChange"})}),e.jsx(s.td,{children:"Esdeveniment que retorna el valor de l'input en funció de si està seleccionat o no."})]})})]}),`
`,e.jsx("br",{}),`
`,e.jsx("h3",{children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#sense-label",children:"Sense label"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#tipus-validacio",children:"Tipús validacio"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-label",children:"Amb label"})}),`
`]}),`
`,e.jsx(s.h3,{id:"sense-label",children:"Sense label"}),`
`,e.jsxs(s.p,{children:["Les icones que apareixen als estats de ",e.jsx(s.code,{children:"checked"})," i ",e.jsx(s.code,{children:"indeterminate"}),` son de la
galería de Google Material rounded, de mida 16 x 16px.`]}),`
`,e.jsxs(s.p,{children:["L'estat indeterminate no es pot definir a l'HTML, per la qual cosa serà necessari fer ús de la propietat del component o bé afegir-lo mitjançant JavaScript com ",e.jsx(s.code,{children:"input.indeterminate=true"}),"."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(s.h3,{id:"tipús-validacio",children:"Tipús validacio"}),`
`,e.jsx(s.p,{children:"Utilitzeu aquesta classe si voleu activar la casella de selecció verda per a marcar la tasca com a validada"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(s.h3,{id:"amb-label",children:"Amb label"}),`
`,e.jsx(s.p,{children:`Hi ha que crear un contenidor per a crear un conjunt. La separació entre el
checkbox y el label es de 16px i la mida del text es heredada del body, també
16px.`}),`
`,e.jsx(i,{of:j})]})}function q(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{q as default};
