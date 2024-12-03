import{ae as s,af as r,ag as c,ah as n,ak as a}from"./index-0DKGoewk.js";import{u as i}from"./index-FamfD7PC.js";import{S as l,P as d,N as x,I as h,B as m,E as p,W as j,a as u,b as g}from"./toast.stories-D1qdm5KS.js";import"./iframe-BaSWKbVt.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./lit-html-paDGiEfB.js";function o(t){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...t.components};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
     .innerZoomElementWrapper {
        flex-direction: column;
        align-items: flex-start;
      }

      .css-15dql7d{
        min-height: 150px;
      }

      .exemple-container-canvas{
        width: 100%;
        height:100%;
        overflow:hidden;
      }

      .exemple-container {
        display: block;
        width: 100%;
      }

      .exemple-container + .exemple-container {
        margin-top: 20px;
      }

      .exemple-container .dss-toast{
        position: relative;
        right: 0px;
        bottom: 0px;
        left: 0px;
        top: 0px;
      }

      .exemple-container-toast-canvas{
        width: 600px;
        height: 100px;
        position: relative;
        overflow: hidden;
      }
  `}),`
`,s.jsx(r,{of:l}),`
`,s.jsxs("div",{className:"dss-sb-title",children:[s.jsx(c,{}),s.jsx("dss-badge",{text:"HTML/CSS",size:"md",state:"moderate-high",outlined:!0,hideIcon:!0})]}),`
`,s.jsx(e.p,{children:`Els Toast serveixen com a mecanisme de comentaris i confirmació després que
l'usuari faci una acció.`}),`
`,s.jsxs(e.p,{children:["Utilitzarem la classe ",s.jsx(e.strong,{children:"dss-toast"}),` com a classe base i te diferents tipus de
confirmacions i de formes d'accionar-lo. El `,s.jsxs(e.strong,{children:[`molt important, que el contenidor
on esta el Toast, tinga un `,s.jsx(e.code,{children:"overflow: hidden;"})]})," per a que no apareguen scrolls."]}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,s.jsx(e.p,{children:s.jsxs(e.em,{children:[s.jsx(e.strong,{children:"Nota:"})," El element ",s.jsx(e.strong,{children:"exemple-container-toast-canvas"}),` només s'utilitza per
a la previsualització en Storybook.`]})}),`
`,s.jsx(n,{of:d}),`
`,s.jsx("h3",{children:"Índex"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"#accionat",children:"Accionat"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"#tipus",children:"Tipus"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"#estat",children:"Estat"})}),`
`]}),`
`,s.jsx("hr",{}),`
`,s.jsx(e.h3,{id:"accionat",children:"Accionat"}),`
`,s.jsxs(e.p,{children:["Per a mostrar el toast, s'afegix la classe ",s.jsx(e.strong,{children:"dss-toast--open"}),` junt a la
classe base. Aquesta acció de mostrar pot donar-se simplement com una
confirmació o per pulsar un Button o un Icon Button.`]}),`
`,s.jsx(a,{code:`<div class="dss-toast dss-toast--error dss-toast--open">
    <div class="dss-toast__content">
      <i class="dss-toast__icon material-symbols-rounded">info</i>
      <span class="dss-toast__text">Your message, short and clear.</span>
    </div>           
  </div>`}),`
`,s.jsxs(e.p,{children:["Per a ocultarlo , simplement llevem la classe ",s.jsx(e.strong,{children:"dss-toast--open"}),"."]}),`
`,s.jsx(a,{code:`<div class="dss-toast dss-toast--error">
    <div class="dss-toast__content">
      <i class="dss-toast__icon material-symbols-rounded">info</i>
      <span class="dss-toast__text">Your message, short and clear.</span>
    </div>           
  </div>`}),`
`,s.jsx(e.h3,{id:"tipus",children:"Tipus"}),`
`,s.jsx(e.p,{children:"Els toast poden construirse sense acció, amb un Button o amb un Icon Button."}),`
`,s.jsx("h5",{}),`
`,s.jsx(e.p,{children:s.jsxs(e.em,{children:[s.jsx(e.strong,{children:"Nota:"})," El element ",s.jsx(e.strong,{children:"exemple-container"})," només es per a la documentació."]})}),`
`,s.jsx("h5",{children:"Sense acció"}),`
`,s.jsx(n,{of:x}),`
`,s.jsx("h5",{children:"Amb Icon Button"}),`
`,s.jsx(n,{of:h}),`
`,s.jsx("h5",{children:"Amb Button"}),`
`,s.jsx(n,{of:m}),`
`,s.jsx(e.h3,{id:"estat",children:"Estat"}),`
`,s.jsx("h5",{children:"Error"}),`
`,s.jsxs(e.p,{children:["Utilitzarem la classe ",s.jsx(e.strong,{children:"dss-toast--error"}),` i la icona del missatge es
`,s.jsx(e.strong,{children:"error"}),"."]}),`
`,s.jsx(n,{of:p}),`
`,s.jsx("h5",{children:"Warning"}),`
`,s.jsxs(e.p,{children:["Utilitzarem la classe ",s.jsx(e.strong,{children:"dss-toast--warning"}),` i la icona del missatge es
`,s.jsx(e.strong,{children:"warning_amber"}),"."]}),`
`,s.jsx(n,{of:j}),`
`,s.jsx("h5",{children:"Success"}),`
`,s.jsxs(e.p,{children:["Utilitzarem la classe ",s.jsx(e.strong,{children:"dss-toast--success"}),` i la icona del missatge es
`,s.jsx(e.strong,{children:"check_circle"}),"."]}),`
`,s.jsx(n,{of:u}),`
`,s.jsx("h5",{children:"Info"}),`
`,s.jsxs(e.p,{children:["Utilitzarem la classe ",s.jsx(e.strong,{children:"dss-toast--info"})," i la icona del missatge es ",s.jsx(e.strong,{children:"info"}),"."]}),`
`,s.jsx(n,{of:g})]})}function z(t={}){const{wrapper:e}={...i(),...t.components};return e?s.jsx(e,{...t,children:s.jsx(o,{...t})}):o(t)}export{z as default};
