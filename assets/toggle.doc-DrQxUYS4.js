import{j as e,M as r,T as c,C as s}from"./blocks-C0Hy_QiU.js";import{useMDXComponents as a}from"./index-CYcGtXlX.js";import{S as l,P as i,a as m,M as d,L as h,b as u,c as x,d as j,F as p}from"./toggle.stories-BBW3ceQP.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-_r7gOCbv.js";import"./storybook-decorators-DSS85Rnr.js";function t(o){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(c,{}),e.jsx("component-title",{children:"dss-toggle"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:i}),`
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
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h3,{id:"focus-manual",children:"Focus manual"}),`
`,e.jsxs(n.p,{children:[`S'ha habilitat el mètode focus(options), que permet passar també les opcions del mètode natiu
`,e.jsx(n.a,{href:"https://www.w3api.com/HTMLDOM/HTMLElement/focus/#par%C3%A1metros",rel:"nofollow",children:"HTMLElement.focus()"}),"."]}),`
`,e.jsx(n.p,{children:`Aquest mètode força el focus sobre l'input intern per corregir problemes
amb la propietat autofocus en entorns complexos.`}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`const forceFocus = () => {
  const element = document.querySelector('#manual-focus-demo');
  if (element) {
    (element as HTMLElement).focus(); // Toggle | HTMLElement | any
  }
}
`})})]})}function T(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{T as default};
