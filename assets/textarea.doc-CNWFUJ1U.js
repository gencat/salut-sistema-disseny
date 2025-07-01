import{j as e,M as l,T as d,S as n,C as r}from"./index-DFUKtqtU.js";import{useMDXComponents as t}from"./index-BVJxqH-I.js";import{S as c,P as o,a as x,D as h,R as j,b as p,I as m,c as u,d as b,C as f}from"./textarea.stories-BIoms4tN.js";import"./iframe-pHR0vHcf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function i(s){const a={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
    }
  `}),`
`,e.jsx(l,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(d,{}),e.jsx("dss-badge",{text:"dss-textarea",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsxs(a.p,{children:["El component ",e.jsx(a.strong,{children:"dss-textarea"})," ofereix als usuaris una caixa de text per a un formulari. Dins aquesta etiqueta hi afegirem el label i el textarea."]}),`
`,e.jsx(a.p,{children:e.jsxs(a.em,{children:[e.jsx(a.strong,{children:"Important:"})," Hem d'afegir al label i al textarea els seus respectius slots, com es mostra a continuació."]})}),`
`,e.jsx(n,{code:`
  <dss-textarea>
    <label for="myTextarea" slot="label">Label</label>
    <textarea id="myTextarea" slot="textarea" rows="1"></textarea>
  </dss-textarea>
`}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(r,{of:o}),`
`,e.jsx("h3",{children:"Índex"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#mida",children:"Mida"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#nom%C3%A9s-lectura",children:"Només lectura"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#requerit",children:"Requerit"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#invalid",children:"Invalid"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-descripci%C3%B3",children:"Amb descripció"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-placeholder",children:"Amb placeholder"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-comptador",children:"Amb comptador"})}),`
`]}),`
`,e.jsx(a.h3,{id:"mida",children:"Mida"}),`
`,e.jsxs(a.p,{children:[`La mida del textarea es vertical i s'aplica en les files. Per defecte, el
aspecete o mida del textarea es el correponent a la mida mitjana dels
input.Sempre configurarem el component amb la quantitat de files que volem.
Les files donen la altura a la caixa de text. Per defecte, sempre posarem
`,e.jsx(a.code,{children:'rows="1"'}),"."]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(a.h3,{id:"deshabilitat",children:"Deshabilitat"}),`
`,e.jsxs(a.p,{children:[`Per indicar que l'input es troba deshabilitat, cal afegir la propietat
`,e.jsx(a.strong,{children:"disabled"})," a l'input o textarea."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(a.h3,{id:"només-lectura",children:"Només lectura"}),`
`,e.jsxs(a.p,{children:["Per indicar que l'input o textarea es troba només lectura, cal afegir la propietat ",e.jsx(a.strong,{children:"readOnly"})," a l'element."]}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(a.h3,{id:"requerit",children:"Requerit"}),`
`,e.jsxs(a.p,{children:["Per indicar que l'input és obligatori, cal afegir la propietat ",e.jsx(a.strong,{children:"required"})," a l'input."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(a.h2,{id:"invalid",children:"Invalid"}),`
`,e.jsxs(a.p,{children:["Per indicar que l'input és invalid, cal afegir la propietat ",e.jsx(a.strong,{children:"showError"})," al component amb la validació que sigui necessària."]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(a.h3,{id:"amb-descripció",children:"Amb descripció"}),`
`,e.jsx(n,{code:`
  <dss-textarea>
    <label slot="label">Label</label>
    <textarea slot="input" rows="1"></textarea>
    <span slot="description">Descripció</span>
  </dss-textarea>
`}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(a.h2,{id:"amb-placeholder",children:"Amb placeholder"}),`
`,e.jsxs(a.p,{children:["Per mostrar el placeholder cal indicar la propietat ",e.jsx(a.strong,{children:"placeholder"}),"."]}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(a.h3,{id:"amb-comptador",children:"Amb comptador"}),`
`,e.jsxs(a.p,{children:["Per mostrar el comptador de carters cal indicar la propietat ",e.jsx(a.strong,{children:"maxLength"}),"."]}),`
`,e.jsx(r,{of:f}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(a.table,{children:[e.jsx(a.thead,{children:e.jsxs(a.tr,{children:[e.jsx(a.th,{children:"Versió"}),e.jsx(a.th,{children:"Canvis"})]})}),e.jsxs(a.tbody,{children:[e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"2.5.0"})}),e.jsx(a.td,{children:"S'ha corregit un error en l'estat readOnly pel qual els elements del component es desplaçaven com en el cas per defecte, donant la sensació que el textarea no estava blocat."})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"2.0.0"})}),e.jsx(a.td,{children:"Refactor v2."})]})]})]})]})}function R(s={}){const{wrapper:a}={...t(),...s.components};return a?e.jsx(a,{...s,children:e.jsx(i,{...s})}):i(s)}export{R as default};
