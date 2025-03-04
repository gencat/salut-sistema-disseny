import{j as e,M as l,T as r,C as i,a as d}from"./index-CVfZ8Ezd.js";import{useMDXComponents as a}from"./index-DJet-Jsx.js";import{S as c,P as o,N as h,T as x,L as j}from"./checkbox.stories-C7tqDK-X.js";import"./iframe-D5I3AWop.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";function t(s){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 20px;
    }
  `}),`
`,e.jsx(l,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(r,{}),e.jsx("dss-badge",{text:"dss-checkbox",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(n.p,{children:`Els Checkboxs permeten als usuaris seleccionar un o més elements d'un conjunt.
Les caselles de selecció poden activar o desactivar una opció.`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"variant"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'default'"}),e.jsx(n.td,{children:"Variant de botó. Pot ser: default o validation"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"indeterminate"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Marca l'input com a indeterminat."})]})]})]})}),`
`,e.jsx(n.p,{children:"Les propietats natives del checkbox, com ara checked o disabled, s'han de definir en l'HTML del propi input."}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onChange"})}),e.jsx(n.td,{children:"Esdeveniment que retorna el valor de l'input en funció de si està seleccionat o no."})]})})]}),`
`,e.jsx("br",{}),`
`,e.jsx("h3",{children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#sense-label",children:"Sense label"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tipus-validacio",children:"Tipús validacio"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-label",children:"Amb label"})}),`
`]}),`
`,e.jsx(n.h3,{id:"sense-label",children:"Sense label"}),`
`,e.jsxs(n.p,{children:["Les icones que apareixen als estats de ",e.jsx(n.code,{children:"checked"})," i ",e.jsx(n.code,{children:"indeterminate"}),` son de la
galería de Google Material rounded, de mida 16 x 16px.`]}),`
`,e.jsxs(n.p,{children:["L'estat indeterminate no es pot definir a l'HTML, per la qual cosa serà necessari fer ús de la propietat del component o bé afegir-lo mitjançant JavaScript com ",e.jsx(n.code,{children:"input.indeterminate=true"}),"."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"tipús-validacio",children:"Tipús validacio"}),`
`,e.jsx(n.p,{children:"Utilitzeu aquesta classe si voleu activar la casella de selecció verda per a marcar la tasca com a validada"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"amb-label",children:"Amb label"}),`
`,e.jsx(n.p,{children:`Hi ha que crear un contenidor per a crear un conjunt. La separació entre el
checkbox y el label es de 16px i la mida del text es heredada del body, també
16px.`}),`
`,e.jsx(i,{of:j})]})}function q(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{q as default};
