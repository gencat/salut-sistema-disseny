import{j as e,M as t,T as s,C as a}from"./index-CRXZcEuw.js";import{useMDXComponents as i}from"./index-DfI6Iev8.js";import{S as l,P as d,N as c,L as u,G as p,a as h,b as x,c as m,d as j}from"./form-radio-button.stories-D9-Hidvc.js";import"./iframe-nUu_t3LE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";import"./storybook-decorators-DSS85Rnr.js";function r(o){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(s,{}),e.jsx("component-title",{children:"dss-form-radio-button"}),e.jsx("component-title",{children:"dss-form-radio-button-group"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(a,{of:d}),`
`,e.jsx("br",{}),`
`,e.jsx("h3",{children:"Índex"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#sense-label",children:"Sense label"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-label",children:"Amb label"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#radio-group",children:"Radio Group"})}),`
`]}),`
`,e.jsx(n.h3,{id:"sense-label",children:"Sense label"}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(n.h3,{id:"amb-label",children:"Amb label"}),`
`,e.jsx(a,{of:u}),`
`,e.jsx(n.h3,{id:"radio-group",children:"Radio Group"}),`
`,e.jsx(n.p,{children:"Aquest nou component no permet l’associació directa a través de la propietat name amb altres radio-button, ja que l’input es troba dins del shadow DOM."}),`
`,e.jsxs(n.p,{children:["Per aquest motiu, ",e.jsx(n.strong,{children:"s’ha creat un nou component radio-button-group que gestiona internament la interacció entre tots els radio-buttons definits dins del slot"}),`,
habilitant un esdeveniment `,e.jsx(n.code,{children:"valueChanged"}),` que retorna el valor seleccionat i implementant tota la lògica per a la navegació per teclat amb un únic element
focusable i la resta accessibles mitjançant la navegació amb les fletxes de direcció.`]}),`
`,e.jsxs(n.p,{children:["En cas d’utilitzar el component group, el canvi de valor s’ha de detectar a través d’un event listener de l’esdeveniment ",e.jsx(n.code,{children:"valueChanged"}),`, evitant així haver de
recórrer tots els radio-buttons un per un per comprovar l’estat checked.`]}),`
`,e.jsx(n.h4,{id:"radio-group-vertical",children:"Radio Group: vertical"}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(n.h4,{id:"radio-group-horizontal",children:"Radio Group: horizontal"}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(n.h4,{id:"radio-group-sense-label",children:"Radio Group: sense label"}),`
`,e.jsx(a,{of:x}),`
`,e.jsx(n.h4,{id:"radio-group-value-seleccionat",children:"Radio Group: value seleccionat"}),`
`,e.jsx(n.p,{children:`Per marcar un valor seleccionat per defecte, s’ha de definir la propietat value amb un valor que existeixi en alguna de les opcions definides. Important: no definir
la propietat checked en el radio-button en qüestió, ja que el propi radio-button-group s’encarrega de gestionar-ho internament.`}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(n.h4,{id:"radio-group-deshabilitat",children:"Radio Group: deshabilitat"}),`
`,e.jsx(a,{of:j})]})}function k(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{k as default};
