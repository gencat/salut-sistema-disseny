import{ae as e,af as i,ag as r,ak as o,ah as l}from"./index-0DKGoewk.js";import{u as a}from"./index-FamfD7PC.js";import{S as d,P as c}from"./skeleton.stories-D0wtjzOU.js";import"./iframe-BaSWKbVt.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./lit-html-paDGiEfB.js";function t(n){const s={code:"code",em:"em",p:"p",strong:"strong",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .w-100{
        width: 100%;
    }
    .w-80{
        width: 80%;
    }
    .w-75{
        width: 75%;
    }
  `}),`
`,e.jsx(i,{of:d}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(r,{}),e.jsx("dss-badge",{text:"HTML/CSS",size:"md",state:"moderate-high",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:`Un Skeleton és un marcador de posició visual de baixa fidelitat que representa
la càrrega dels elements de la interfície abans que es mostrin a la pàgina.`}),`
`,e.jsxs(s.p,{children:["Utilitzarem la classe ",e.jsx(s.strong,{children:"dss-skeleton"}),` com a classe del container. Per a cada
una de les línies, hi ha que afegir la classe `,e.jsx(s.strong,{children:"dss-skeleton__item"}),"."]}),`
`,e.jsxs(s.p,{children:["Té un ",e.jsx(s.code,{children:"margin-top: 16px;"}),` entre els items, i es pot canviar la amplaria inline
si es vol vore diferent.`]}),`
`,e.jsx(o,{code:`
  <div class="dss-skeleton">
    <span class="dss-skeleton__item" style="width:100%"></span>
    <span class="dss-skeleton__item" style="width:80%"></span>
    <span class="dss-skeleton__item" style="width:75%"></span>
  </div>`}),`
`,e.jsx(s.p,{children:"També es pot canviar la amplaria amb classes: si es vol vore diferent."}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:[e.jsx(s.strong,{children:"Nota:"})," Aquestes classes ",e.jsx(s.code,{children:"w-(100 | 80 | 75)"}),` están creades per a aquest
exemple en storybook, no hi estan al Design System.`]})}),`
`,e.jsx(l,{of:c})]})}function w(n={}){const{wrapper:s}={...a(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{w as default};
