import{j as e,M as t,T as c,C as s}from"./blocks-DZ0INpLb.js";import{useMDXComponents as o}from"./index-DiJh3frP.js";import{S as l,P as r,a as d,T as m,A as h,D as u,M as x,I as p,b as j,N as f,F as b}from"./split-button.stories-C92bS0O5.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D7EeAtJA.js";import"./storybook-decorators-DSS85Rnr.js";function a(i){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(c,{}),e.jsx("component-title",{children:"dss-split-button"})]}),`
`,e.jsx(n.p,{children:`El component Split Button està compost per dos botons individuals, això ens permet executar dues accions diferents a l'interaccionar amb cadascun d'ells.
La lògica implementada només inclous la interacció amb els botons i els elements mostrats dins del component, per tant, l'acció que desencadena ha de
controlar-se fora del component utilitzant els esdeveniments generats per cada botó.`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#mida",children:"Mida"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tipus",children:"Tipus"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#actiu",children:"Actiu"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-menu",children:"Amb menú"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-icona",children:"Amb icona"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amplada-m%C3%A0xima",children:"Amplada màxima"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-notificaci%C3%B3",children:"Amb notificació"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#focus-manual",children:"Focus manual"})}),`
`]}),`
`,e.jsx(n.h3,{id:"mida",children:"Mida"}),`
`,e.jsx(n.p,{children:"lg (default) / md / sm"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h3,{id:"tipus",children:"Tipus"}),`
`,e.jsx(n.p,{children:"Primary / Secondary"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"actiu",children:"Actiu"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"deshabilitat",children:"Deshabilitat"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"amb-menú",children:"Amb menú"}),`
`,e.jsxs(n.p,{children:["Per veure totes les opcions de posicionament, si us plau visita la ",e.jsx(n.a,{href:"/docs/components-action-menu--docs#posici%C3%B3",children:"documentació del action-menu"}),"."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"amb-icona",children:"Amb icona"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"amplada-màxima",children:"Amplada màxima"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h3,{id:"amb-notificació",children:"Amb notificació"}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h3,{id:"focus-manual",children:"Focus manual"}),`
`,e.jsxs(n.p,{children:[`S'ha habilitat el mètode focus(options), que permet passar també les opcions del mètode natiu
`,e.jsx(n.a,{href:"https://www.w3api.com/HTMLDOM/HTMLElement/focus/#par%C3%A1metros",rel:"nofollow",children:"HTMLElement.focus()"}),"."]}),`
`,e.jsx(n.p,{children:`Aquest mètode força el focus sobre l'input intern per corregir problemes
amb la propietat autofocus en entorns complexos.`}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`const forceFocus = () => {
  const element = document.querySelector('#manual-focus-demo');
  if (element) {
    (element as HTMLElement).focus(); // SpliButton | HTMLElement | any
  }
}
`})})]})}function y(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{y as default};
