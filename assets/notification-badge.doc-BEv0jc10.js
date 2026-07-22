import{j as e,M as o,T as t,C as i}from"./blocks-D_zk3kjZ.js";import{useMDXComponents as a}from"./index-D0A3GcHo.js";import{S as d,P as l,a as c,I as h,D as x,b as p,c as u,H as j,T as m,d as v}from"./notification-badge.stories-BIEY2zWW.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DNLJd-HG.js";import"./storybook-decorators-DSS85Rnr.js";function r(s){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(t,{}),e.jsx("dss-badge",{text:"dss-notification-badge",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h2,{id:"index",children:"Index"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#variant-default",children:"Variant default"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#variant-sidemenu",children:"Variant sidemenu"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"variant-default",children:"Variant default"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#estats",children:"Estats"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-icona",children:"Amb icona"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#dot",children:"Dot"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#interacci%C3%B3",children:"Interacció"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amagar-vores",children:"Amagar vores"})}),`
`]}),`
`,e.jsx(n.h4,{id:"estats",children:"Estats"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h4,{id:"amb-icona",children:"Amb icona"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h4,{id:"dot",children:"Dot"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h4,{id:"interacció",children:"Interacció"}),`
`,e.jsxs(n.p,{children:[`Els badges no tenen interacció per si mateixos, però es pot donar el cas que el component estigui inclòs dins
d’un contenidor que sí que tingui la seva pròpia interacció, fet que provoca que el color de la vora per defecte
del badge no s’alineï amb el background en estat hover o active del seu contenidor. Per solucionar-ho, cal fer ús
de les variables `,e.jsx(n.code,{children:"isHover"})," i ",e.jsx(n.code,{children:"isActive"})," de manera dinàmica des de fora del component."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`toggleHover() {
  isWrapperHover = !isWrapperHover;
}
toggleActive() {
  isWrapperActive = !isWrapperActive;
}
<div class="wrapper" 
  @mouseenter=\${toggleHover}
  @mouseleave=\${toggleHover}
  @mousedown=\${toggleActive}
  @mouseup=\${toggleActive}
>
 ...
 <dss-notification-badge
    borderWhite
    ?isHover=\${isWrapperHover}
    ?isActive=\${isWrapperActive} 
  />
</div>
`})}),`
`,e.jsx(n.h4,{id:"amagar-vores",children:"Amagar vores"}),`
`,e.jsx(n.p,{children:`D’altra banda, en els casos en què el notification-badge no es mostri superposat sobre el component, la millor
opció és fer ús de la propietat hideBorder per evitar aquest tipus de conflictes entre la vora i el background
del contenidor.`}),`
`,e.jsx(i,{of:j}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"variant-sidemenu",children:"Variant sidemenu"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tipus",children:"Tipus"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#dot",children:"Dot"})}),`
`]}),`
`,e.jsx(n.h4,{id:"tipus",children:"Tipus"}),`
`,e.jsxs(n.p,{children:["La variant sidemenu només s’utilitza a nivell intern dins del component sidemenu, i pot ser del ",e.jsx(n.code,{children:"type"}),` default
(vermell) o brand (blau). Així mateix, es disposa de la propietat `,e.jsx(n.code,{children:"inverted"}),`, que modifica el color de la vora
del component per a les notificacions que es mostren dins del menú de crear.`]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h4,{id:"dot-1",children:"Dot"}),`
`,e.jsx(i,{of:v})]})}function I(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{I as default};
