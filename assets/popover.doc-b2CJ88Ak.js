import{j as e,M as o,T as l,C as i}from"./blocks-BHGpa58c.js";import{useMDXComponents as r}from"./index-Cw7OAl4r.js";import{S as a,P as d,B as c,I as x,a as h,b as p,c as j,d as m}from"./popover.stories-Crceyo8D.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-c9-t6flx.js";import"./storybook-decorators-DSS85Rnr.js";function t(n){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h5:"h5",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("component-title",{children:"dss-popover"})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:d}),`
`,e.jsxs(s.p,{children:["Dentro del component podem utilitzar els slots 'body' o 'item-list' per definir dos tipus de contingut. Per a això podem fer ús del subcomponent ",e.jsx(s.code,{children:'<dss-popover-body slot="body">'})," o del component ",e.jsx(s.code,{children:'<dss-item-list slot="item-list">'}),", cadascun amb les seves respectives propietats."]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#default",children:"Default"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#item-list",children:"Item List"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#posici%C3%B3",children:"Posició"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#filters",children:"Filters"})}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.h3,{id:"default",children:"Default"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Min-width: 300px"}),`
`,e.jsx(s.li,{children:"Max-width: 500px"}),`
`,e.jsx(s.li,{children:"Max-height: 480px (Si el contingut del popover supera l'altura màxima permesa, apareixerà una barra de desplaçament a l'interior del component.)"}),`
`]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"item-list",children:"Item List"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(s.h3,{id:"posició",children:"Posició"}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:[e.jsx(s.strong,{children:"Nota:"})," En aquest exemple farem servir la propietat 'position'."]})}),`
`,e.jsx(s.h5,{id:"superior",children:"Superior"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(s.h5,{id:"dreta",children:"Dreta"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(s.h5,{id:"inferior",children:"Inferior"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(s.h5,{id:"esquerra",children:"Esquerra"}),`
`,e.jsx(i,{of:m})]})}function q(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{q as default};
