import{ae as e,af as o,ag as c,ak as r,ah as n,ai as l}from"./index-0DKGoewk.js";import{u as i}from"./index-FamfD7PC.js";import{S as d,P as p,N as u,T as m}from"./progress-indicator.stories-C9fFX99H.js";import"./iframe-BaSWKbVt.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./lit-element-vV9fql9z.js";import"./lit-html-paDGiEfB.js";function a(t){const s={blockquote:"blockquote",p:"p",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}),`
`,e.jsx(o,{of:d}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(c,{}),e.jsx("dss-badge",{text:"dss-progress-indicator",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:`Els indicadors de progrés s'utilitzen per mostrar l'estat de finalització
d'una operació que dura més de 2 segons. Si no es pot determinar l'estat de
progrés, utilitzeu un Spinner.`}),`
`,e.jsx(r,{code:`
<dss-progress-indicator
  title="Title"
  description="Description, short and clear."
  percentage="20"
></dss-progress-indicator>
`}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(l,{}),`
`,e.jsx("h5",{children:"Error"}),`
`,e.jsxs(s.p,{children:["Farem servir l'atribut ",e.jsx(s.strong,{children:"hasFailed"})," per indicar si ha fallat."]}),`
`,e.jsx(r,{code:`
<dss-progress-indicator
  title="Title"
  description="Description, short and clear."
  percentage="20"
  hasFailed
></dss-progress-indicator>
`}),`
`,e.jsx("h5",{children:"Sense títol"}),`
`,e.jsx(s.p,{children:`Aquesta opció no inclou cap títol, sinó que es mostra simplement una barra
animada que indica el progrés de la tasca. Aquesta opció és útil per als
usuaris que ja coneixen la tasca o procés que es duu a terme i només
necessiten informació visual sobre el progrés.`}),`
`,e.jsx(n,{of:u}),`
`,e.jsx("h5",{children:"Amb títol"}),`
`,e.jsx(s.p,{children:`Aquesta opció inclou un títol que descriu el procés o tasca que s'està duent a
terme, així com el percentatge completat o el temps estimat restant. Aquesta
opció ajuda als usuaris a entendre millor quin procés està en marxa i quan
s'espera que estigui acabat.`}),`
`,e.jsx(n,{of:m})]})}function S(t={}){const{wrapper:s}={...i(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(a,{...t})}):a(t)}export{S as default};
