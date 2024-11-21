import{ae as e,af as r,ag as o,ah as n,ak as l}from"./index-CcF9BsMG.js";import{u as a}from"./index-BlEr_OIe.js";import{S as c,P as d,E as m,D as h,M as u}from"./content-switcher.stories-77fkpHwH.js";import"./iframe-BLrvpHse.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./lit-element-vV9fql9z.js";import"./lit-html-paDGiEfB.js";function i(s){const t={blockquote:"blockquote",p:"p",strong:"strong",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
      .wrapper {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;
      }
  `}),`
`,e.jsx(r,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(o,{}),e.jsx("dss-badge",{text:"HTML/CSS",size:"md",state:"moderate-high",outlined:!0,hideIcon:!0})]}),`
`,e.jsxs(t.p,{children:[`Els Content Switchers permeten als usuaris canviar entre visualitzacions
alternatives de contingut similar o relacionat. Només es mostra una secció de
contingut alhora. Utilitzarem la classe `,e.jsx(t.strong,{children:"dss-content-switcher"}),` com a
contenidor i la classe `,e.jsx(t.strong,{children:"dss-content-switcher__item"})," com a element fill."]}),`
`,e.jsx("h3",{children:"Història d'exemple"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx("h3",{children:"Content Switcher"}),`
`,e.jsx(t.p,{children:"Utilitzarem la següent estructura per crear un Content Switcher:"}),`
`,e.jsx(l,{code:`
<div class="dss-content-switcher">
  <div class="dss-content-switcher__item">
    <input type="radio" name="radiogroup" defaultChecked />
     <label>Tab</label>
   </div>
  <div class="dss-content-switcher__item">
    <input type="radio" name="radiogroup" />
    <label>Tab</label>
  </div>
  <div class="dss-content-switcher__item">
    <input type="radio" name="radiogroup" />
    <label>Tab</label>
  </div>
</div>
    `}),`
`,e.jsx("h5",{children:"Habilitat"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx("h5",{children:"Deshabilitat"}),`
`,e.jsx(n,{of:h}),`
`,e.jsx("h5",{children:"Habilitat i deshabilitat"}),`
`,e.jsx(n,{of:u})]})}function y(s={}){const{wrapper:t}={...a(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(i,{...s})}):i(s)}export{y as default};
