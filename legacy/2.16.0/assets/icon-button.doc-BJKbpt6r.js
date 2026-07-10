import{j as n,M as a,T as i,C as o}from"./index-D_jfrqsI.js";import{useMDXComponents as r}from"./index-DkaCJzjH.js";import{S as c,P as l,a as m,N as u,E as d,W as p,b as x,I as h,O as j,c as f,d as b,F as M}from"./icon-button.stories-CyQTLQly.js";import"./iframe-Dpt1IGHE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";import"./storybook-decorators-DSS85Rnr.js";function t(s){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h5:"h5",p:"p",pre:"pre",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:c}),`
`,n.jsxs("div",{className:"dss-sb-title",children:[n.jsx(i,{}),n.jsx("component-title",{children:"dss-icon-button"})]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,n.jsx(o,{of:l}),`
`,n.jsx(e.h3,{id:"variants",children:"Variants"}),`
`,n.jsx("br",{}),`
`,n.jsx("h5",{children:"Primary"}),`
`,n.jsx(o,{of:m}),`
`,n.jsx("h5",{children:"Neutral"}),`
`,n.jsx(o,{of:u}),`
`,n.jsx("h5",{children:"Danger"}),`
`,n.jsx(o,{of:d}),`
`,n.jsx("h5",{children:"Warning"}),`
`,n.jsx(o,{of:p}),`
`,n.jsx("h5",{children:"Success"}),`
`,n.jsx(o,{of:x}),`
`,n.jsx("h5",{children:"Info"}),`
`,n.jsx(o,{of:h}),`
`,n.jsx("br",{}),`
`,n.jsx("h5",{children:"Orange"}),`
`,n.jsx(o,{of:j}),`
`,n.jsx("br",{}),`
`,n.jsx("h5",{children:"Purple"}),`
`,n.jsx(o,{of:f}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h5,{id:"amb-notificació",children:"Amb notificació"}),`
`,n.jsx(e.p,{children:`Aquest component no inclou una variant per afegir una notificació, per la qual cosa s’ha de maquetar manualment
amb CSS per part de la iniciativa. A continuació es mostra un exemple per a l’icon-button ‘md’.`}),`
`,n.jsx(e.p,{children:"En cas de tenir problemes amb el tooltip a l’entorn Shell, s’haurà de fer ús de les propietats tooltipFixed o forceViewport."}),`
`,n.jsx(o,{of:b}),`
`,n.jsx(e.h3,{id:"focus-manual",children:"Focus manual"}),`
`,n.jsxs(e.p,{children:[`S'ha habilitat el mètode focus(options), que permet passar també les opcions del mètode natiu
`,n.jsx(e.a,{href:"https://www.w3api.com/HTMLDOM/HTMLElement/focus/#par%C3%A1metros",rel:"nofollow",children:"HTMLElement.focus()"}),"."]}),`
`,n.jsx(e.p,{children:`Aquest mètode força el focus sobre l'input intern per corregir problemes
amb la propietat autofocus en entorns complexos.`}),`
`,n.jsx(o,{of:M}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`const forceFocus = () => {
  const element = document.querySelector('#manual-focus-demo');
  if (element) {
    (element as HTMLElement).focus(); // IconButton | HTMLElement | any
  }
}
`})})]})}function F(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{F as default};
