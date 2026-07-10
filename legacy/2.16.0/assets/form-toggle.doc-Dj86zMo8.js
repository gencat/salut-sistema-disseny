import{j as e,M as a,T as i,C as s}from"./index-D_jfrqsI.js";import{useMDXComponents as r}from"./index-DkaCJzjH.js";import{S as c,P as l,a as m,M as d,L as h,b as u,c as x,d as p,F as j}from"./form-toggle.stories-B3n2js6s.js";import"./iframe-Dpt1IGHE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";import"./storybook-decorators-DSS85Rnr.js";function t(o){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(i,{}),e.jsx("component-title",{children:"dss-form-toggle"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:l}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsx("h5",{children:"Switch petit"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx("h5",{children:"Switch mitjà"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx("h5",{children:"Switch gran"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx("h3",{children:"Switch amb Label"}),`
`,e.jsx("h5",{children:"Switch petit"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx("h5",{children:"Switch mitjà"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx("h5",{children:"Switch gran"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"focus-manual",children:"Focus manual"}),`
`,e.jsxs(n.p,{children:[`S'ha habilitat el mètode focus(options), que permet passar també les opcions del mètode natiu
`,e.jsx(n.a,{href:"https://www.w3api.com/HTMLDOM/HTMLElement/focus/#par%C3%A1metros",rel:"nofollow",children:"HTMLElement.focus()"}),"."]}),`
`,e.jsx(n.p,{children:`Aquest mètode força el focus sobre l'input intern per corregir problemes
amb la propietat autofocus en entorns complexos.`}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`const forceFocus = () => {
  const element = document.querySelector('#manual-focus-demo');
  if (element) {
    (element as HTMLElement).focus(); // FormToggle | HTMLElement | any
  }
}
`})})]})}function F(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{F as default};
