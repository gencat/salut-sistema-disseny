import{j as e,M as l,T as o,C as s}from"./blocks-D_zk3kjZ.js";import{useMDXComponents as t}from"./index-D0A3GcHo.js";import{S as r,P as d,M as c,C as m,a as p,b as h,D as x,F as u}from"./link.stories-DH2xc9Er.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DNLJd-HG.js";import"./storybook-decorators-DSS85Rnr.js";function a(i){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(o,{}),e.jsx("component-title",{children:"dss-link"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:d}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#modes-i-variants",children:"Modes i variants"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#enlla%C3%A7-personalitzat",children:"Enllaç personalitzat"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#mides",children:"Mides"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amplada-m%C3%A0xima",children:"Amplada màxima"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#focus-manual",children:"Focus manual"})}),`
`]}),`
`,e.jsx(n.h3,{id:"modes-i-variants",children:"Modes i variants"}),`
`,e.jsx(n.p,{children:"Aquest component té dos modes d’ús que s’activen segons si es defineixen o no les propietats size i variant."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inline"}),": s’utilitza quan necessitem un enllaç dins d’un text. Aquesta versió del component és més flexible i permet la personalització mitjançant propietats com iconSize, fontSize o fontWeight."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Standalone"}),": s’utilitza quan necessitem fer servir l’enllaç com un component aïllat. Aquesta versió es defineix per l’ús de les propietats size i variant i no permet aplicar les propietats de personalització del mode inline."]}),`
`]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"enllaç-personalitzat",children:"Enllaç personalitzat"}),`
`,e.jsx(n.p,{children:"Només mode inline."}),`
`,e.jsxs(n.p,{children:[`Per defecte, l’enllaç en mode en línia té definits els estils de font com a inherit, perquè s’adapti al contingut en
què s’insereix. A partir d’aquí podem utilitzar les propietats `,e.jsx(n.code,{children:"fontSize"}),", ",e.jsx(n.code,{children:"fontWeight"})," o ",e.jsx(n.code,{children:"iconSize"}),` per personalitzar el
component si cal, per exemple canviant el fontWeight a semibold per destacar-lo dins del text.`]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"mides",children:"Mides"}),`
`,e.jsx(n.p,{children:"Només mode standalone."}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"amplada-màxima",children:"Amplada màxima"}),`
`,e.jsx(n.p,{children:"Només mode standalone."}),`
`,e.jsx(n.p,{children:"L’amplada màxima del component és de 280 px; en cas que el text superi aquest límit, es mostrarà un tooltip amb l’etiqueta completa."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"deshabilitat",children:"Deshabilitat"}),`
`,e.jsxs(n.p,{children:["L'etiqueta ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"a"})})," no disposa de la propietat disabled per la qual cosa haurem de fer ús de la classe interna ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"dss-link--disabled"})}),`.
Quan la propietat disabled estigui activa, l'atribut href s'ajustarà a `,e.jsx(n.code,{children:"javascript:void(0)"})," perquè l'enllaç no tingui funcionalitat."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"focus-manual",children:"Focus manual"}),`
`,e.jsxs(n.p,{children:[`S'ha habilitat el mètode focus(options), que permet passar també les opcions del mètode natiu
`,e.jsx(n.a,{href:"https://www.w3api.com/HTMLDOM/HTMLElement/focus/#par%C3%A1metros",rel:"nofollow",children:"HTMLElement.focus()"}),"."]}),`
`,e.jsx(n.p,{children:`Aquest mètode força el focus sobre l'input intern per corregir problemes
amb la propietat autofocus en entorns complexos.`}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`const forceFocus = () => {
  const element = document.querySelector('#manual-focus-demo');
  if (element) {
    (element as HTMLElement).focus(); // Link | HTMLElement | any
  }
}
`})})]})}function z(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{z as default};
