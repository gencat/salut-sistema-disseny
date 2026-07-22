import{j as n,M as a,T as i,C as s}from"./blocks-0TN8mBac.js";import{useMDXComponents as r}from"./index-D_THLDEK.js";import{S as c,P as l,a as m,N as u,E as d,W as p,b as x,I as h,O as j,c as f,d as b,F as M}from"./icon-button.stories-nNpk61YE.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Dc24GPd4.js";import"./storybook-decorators-DSS85Rnr.js";function t(o){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h5:"h5",p:"p",pre:"pre",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:c}),`
`,n.jsxs("div",{className:"dss-sb-title",children:[n.jsx(i,{}),n.jsx("component-title",{children:"dss-icon-button"})]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,n.jsx(s,{of:l}),`
`,n.jsx(e.h3,{id:"variants",children:"Variants"}),`
`,n.jsx("br",{}),`
`,n.jsx("h5",{children:"Primary"}),`
`,n.jsx(s,{of:m}),`
`,n.jsx("h5",{children:"Neutral"}),`
`,n.jsx(s,{of:u}),`
`,n.jsx("h5",{children:"Danger"}),`
`,n.jsx(s,{of:d}),`
`,n.jsx("h5",{children:"Warning"}),`
`,n.jsx(s,{of:p}),`
`,n.jsx("h5",{children:"Success"}),`
`,n.jsx(s,{of:x}),`
`,n.jsx("h5",{children:"Info"}),`
`,n.jsx(s,{of:h}),`
`,n.jsx("br",{}),`
`,n.jsx("h5",{children:"Orange"}),`
`,n.jsx(s,{of:j}),`
`,n.jsx("br",{}),`
`,n.jsx("h5",{children:"Purple"}),`
`,n.jsx(s,{of:f}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h5,{id:"amb-notificació",children:"Amb notificació"}),`
`,n.jsx(e.p,{children:`Aquest component no inclou una variant per afegir una notificació, per la qual cosa s’ha de maquetar manualment
amb CSS per part de la iniciativa. A continuació es mostra un exemple per a l’icon-button ‘md’.`}),`
`,n.jsx(e.p,{children:"En cas de tenir problemes amb el tooltip a l’entorn Shell, s’haurà de fer ús de les propietats tooltipFixed o forceViewport."}),`
`,n.jsx(s,{of:b}),`
`,n.jsx(e.h3,{id:"focus-manual",children:"Focus manual"}),`
`,n.jsxs(e.p,{children:[`S'ha habilitat el mètode focus(options), que permet passar també les opcions del mètode natiu
`,n.jsx(e.a,{href:"https://www.w3api.com/HTMLDOM/HTMLElement/focus/#par%C3%A1metros",rel:"nofollow",children:"HTMLElement.focus()"}),"."]}),`
`,n.jsx(e.p,{children:`Aquest mètode força el focus sobre l'input intern per corregir problemes
amb la propietat autofocus en entorns complexos.`}),`
`,n.jsx(s,{of:M}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`const forceFocus = () => {
  const element = document.querySelector('#manual-focus-demo');
  if (element) {
    (element as HTMLElement).focus(); // IconButton | HTMLElement | any
  }
}
`})})]})}function C(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{C as default};
