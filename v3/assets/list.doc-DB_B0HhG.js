import{j as e,M as a,T as d,C as n,a as o,S as l}from"./blocks-BQe3t3mS.js";import{useMDXComponents as r}from"./index-D25yCQlW.js";import{S as c,P as x,N as j,O as u,U as h}from"./list.stories-CHRQBawV.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CdZ_4rdx.js";function i(t){const s={a:"a",blockquote:"blockquote",h3:"h3",li:"li",p:"p",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
  }
`}),`
`,e.jsx(a,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(d,{}),e.jsx("dss-badge",{text:"HTML/CSS",size:"md",state:"moderate-high",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:"Les llistes s'utilitzen per organitzar un grup d'elements de text relacionats."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(o,{}),`
`,e.jsx("h3",{children:"Índex"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#sense-estil",children:"Sense estil"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#estil-ordenat",children:"Estil ordenat"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#estil-desordenat",children:"Estil desordenat"})}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.h3,{id:"sense-estil",children:"Sense estil"}),`
`,e.jsx(s.p,{children:"Utilitzarem la següent estructura per crear una llista sense estil:"}),`
`,e.jsx(l,{code:`
<ol class="dss-list">
<li class="dss-list__item">List item text.</li>
</ol>
`}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.h3,{id:"estil-ordenat",children:"Estil ordenat"}),`
`,e.jsx(s.p,{children:"Utilitzarem la següent estructura per crear una llista amb estil ordenat:"}),`
`,e.jsx(l,{code:`
  <ol class="dss-list dss-list--ordered">
    <li class="dss-list__item">List item text.</li>
  </ol>
`}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.h3,{id:"estil-desordenat",children:"Estil desordenat"}),`
`,e.jsx(s.p,{children:"Utilitzarem la següent estructura per crear una llista amb estil desordenat:"}),`
`,e.jsx(l,{code:`
<ol class="dss-list dss-list--unordered">
<li class="dss-list__item">List item text.</li>
</ol>
`}),`
`,e.jsx(n,{of:h})]})}function _(t={}){const{wrapper:s}={...r(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(i,{...t})}):i(t)}export{_ as default};
