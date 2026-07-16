import{j as n,M as t,T as r,C as s}from"./blocks-CmUYoZh4.js";import{useMDXComponents as o}from"./index-DZthTCuD.js";import{S as c,P as l,V as d,D as h,W as x,a as m,I as j,b as f,T as u,c as p,d as b,M as g,L as M,N as v,F as T}from"./button.stories-DkiXBbdh.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DHQWIC1_.js";import"./storybook-decorators-DSS85Rnr.js";function a(i){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:c}),`
`,n.jsxs("div",{className:"dss-sb-title",children:[n.jsx(r,{}),n.jsx("component-title",{children:"dss-button"})]}),`
`,n.jsx("br",{}),`
`,n.jsx("dss-alert",{state:"warning",fullWidth:!0,message:"S’han modificat les variants del botó per tenir una major flexibilitat en els dissenys. Per utilitzar les variants anteriors, visita la <a href='https://codisisdisseny.salut.gencat.cat/legacy/2.14.1/?path=/docs/components-button--docs'>versió 2.14.1 del botó</a>."}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,n.jsx(s,{of:l}),`
`,n.jsx("br",{}),`
`,n.jsx("h3",{children:"Index"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#variants",children:"Variants"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#estats",children:"Estats"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#mides",children:"Mides"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#sense-icona",children:"Sense icona"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#amb-icona",children:"Amb icona"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#nom%C3%A9s-icona",children:"Només icona"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#amplada-m%C3%A0xima",children:"Amplada màxima"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#estat-loading",children:"Estat loading"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#amb-notificaci%C3%B3",children:"Amb notificació"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#focus-manual",children:"Focus manual"})}),`
`]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h3,{id:"variant",children:"Variant"}),`
`,n.jsx(s,{of:d}),`
`,n.jsx(e.h3,{id:"estats",children:"Estats"}),`
`,n.jsx(e.h5,{id:"danger",children:"Danger"}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(e.h5,{id:"warning",children:"Warning"}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(e.h5,{id:"success",children:"Success"}),`
`,n.jsx(s,{of:m}),`
`,n.jsx(e.h5,{id:"info",children:"Info"}),`
`,n.jsx(s,{of:j}),`
`,n.jsx(e.h3,{id:"mides",children:"Mides"}),`
`,n.jsx(s,{of:f}),`
`,n.jsx(e.h3,{id:"sense-icona",children:"Sense icona"}),`
`,n.jsx(s,{of:u}),`
`,n.jsx(e.h3,{id:"amb-icona",children:"Amb icona"}),`
`,n.jsx(s,{of:p}),`
`,n.jsx(e.h3,{id:"només-icona",children:"Només icona"}),`
`,n.jsx(s,{of:b}),`
`,n.jsx(e.h3,{id:"amplada-màxima",children:"Amplada màxima"}),`
`,n.jsx(s,{of:g}),`
`,n.jsx(e.h3,{id:"estat-loading",children:"Estat loading"}),`
`,n.jsx(e.p,{children:"L’estat de càrrega del botó s’ha de gestionar externament, activant la propietat loading des de la iniciativa i desactivant-la de nou quan el procés hagi finalitzat."}),`
`,n.jsx(s,{of:M}),`
`,n.jsx(e.h3,{id:"amb-notificació",children:"Amb notificació"}),`
`,n.jsx(s,{of:v}),`
`,n.jsx(e.h3,{id:"focus-manual",children:"Focus manual"}),`
`,n.jsxs(e.p,{children:[`S'ha habilitat el mètode focus(options), que permet passar també les opcions del mètode natiu
`,n.jsx(e.a,{href:"https://www.w3api.com/HTMLDOM/HTMLElement/focus/#par%C3%A1metros",rel:"nofollow",children:"HTMLElement.focus()"}),"."]}),`
`,n.jsx(e.p,{children:`Aquest mètode força el focus sobre l'input intern per corregir problemes
amb la propietat autofocus en entorns complexos.`}),`
`,n.jsx(s,{of:T}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`const forceFocus = () => {
  const element = document.querySelector('#manual-focus-demo');
  if (element) {
    (element as HTMLElement).focus(); // Button | HTMLElement | any
  }
}
`})})]})}function y(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(a,{...i})}):a(i)}export{y as default};
