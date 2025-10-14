import{j as e,M as a,T as d,S as r,C as i}from"./index-DfM5zTQV.js";import{useMDXComponents as t}from"./index-DRdaJ3vx.js";import{S as u,I as c,a as p}from"./input-field.stories-Bgjm_OrQ.js";import"./iframe-zTjM1nUE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";function n(s){const l={a:"a",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}),`
`,e.jsx(a,{of:u}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(d,{}),e.jsx("dss-badge",{text:"HTML/CSS",size:"md",state:"moderate-high",outlined:!0,hideIcon:!0})]}),`
`,e.jsxs(l.blockquote,{children:[`
`,e.jsxs(l.p,{children:["IMPORTANT: Aquest component deixés de rebre actualitzacions des de la versió 1.6.0. Per favor, utilitza el component ",e.jsx(l.a,{href:"/docs/components-input--input-text",children:"dss-input"})," en el seu lloc."]}),`
`]}),`
`,e.jsxs(l.p,{children:["El component ",e.jsx(l.strong,{children:"dss-input-field"}),` ofereix als usuaris una entrada senzilla per
a un formulari, cal indicar si és de tipus text o number. Per utilitzar aquest
component en angular cal fer servir la directiva adjuntada.`]}),`
`,e.jsx(r,{code:`
    <dss-input-field
      type="tipus"
      label="label"
    ></dss-input-field>
`}),`
`,e.jsxs(l.blockquote,{children:[`
`,e.jsx(l.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:c}),`
`,e.jsxs(l.blockquote,{children:[`
`,e.jsx(l.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx("hr",{}),`
`,e.jsx("h3",{children:"Índex"}),`
`,e.jsxs(l.ul,{children:[`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"#label",children:"Label"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"#tipus",children:"Tipus"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"#mida",children:"Mida"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"#nom%C3%A9s-lectura",children:"Només lectura"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"#requerit",children:"Requerit"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"#invalid",children:"Invalid"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"#amb-descripci%C3%B3",children:"Amb descripció"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"#amb-placeholder",children:"Amb placeholder"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"#amb-comptador",children:"Amb comptador"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"#amb-icona",children:"Amb icona"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"#accionable",children:"Accionable"})}),`
`]}),`
`,e.jsx(l.h3,{id:"label",children:"Label"}),`
`,e.jsxs(l.p,{children:["El label es una ",e.jsx(l.strong,{children:"descripció breu"}),` del camp a emplenar. Els label d'aquests
elements no estan limitats per caràcters pero no poden ser massa largs.`]}),`
`,e.jsx(l.p,{children:`Es considera una mala aplicació del label quan no complix amb els següents
requisits:`}),`
`,e.jsxs(l.ul,{children:[`
`,e.jsxs(l.li,{children:[`
`,e.jsx(l.p,{children:"No pot ocupar més d'una línia"}),`
`]}),`
`,e.jsxs(l.li,{children:[`
`,e.jsx(l.p,{children:"No pot tallar-se el text"}),`
`,e.jsxs(l.ul,{children:[`
`,e.jsx(l.li,{children:`No pot acurtar-se o amargar-se part del text, per exemple amb uns punts
suspensius`}),`
`]}),`
`,e.jsx(l.p,{children:e.jsx(l.strong,{children:"Si alguna d'aquestes situacions es complix, es necesari modificar el label"})}),`
`]}),`
`]}),`
`,e.jsxs(r,{children:[e.jsx("dss-input-field",{label:"Label for input text",type:"text"}),e.jsx("dss-input-field",{label:"Label for input number",type:"number"})]}),`
`,e.jsx(l.h3,{id:"tipus",children:"Tipus"}),`
`,e.jsx(l.p,{children:`Hi ha el tipus text i el number, no afegir-ne un altre que no sigui un
d'aquests dos.`}),`
`,e.jsx(l.p,{children:e.jsxs(l.em,{children:[e.jsx(l.strong,{children:"Important:"})," El tipus number només accepta nombres naturals."]})}),`
`,e.jsxs(r,{children:[e.jsx("dss-input-field",{label:"Label",type:"text"}),e.jsx("dss-input-field",{label:"Label",type:"number"})]}),`
`,e.jsx(l.h3,{id:"mida",children:"Mida"}),`
`,e.jsxs(l.p,{children:[`Hi ha dos tipus de mesura, el mitjà i el petit, per defecte es mostra el
mitjà, si volem mostrar el petit hem d'afegir la propietat `,e.jsx(l.strong,{children:"small"}),` al
component.`]}),`
`,e.jsxs(r,{children:[e.jsx("dss-input-field",{label:"Label",type:"text"}),e.jsx("dss-input-field",{label:"Label",type:"text",small:!0}),e.jsx("dss-input-field",{label:"Label",type:"number"}),e.jsx("dss-input-field",{label:"Label",type:"number",small:!0})]}),`
`,e.jsx(l.h3,{id:"deshabilitat",children:"Deshabilitat"}),`
`,e.jsxs(l.p,{children:[`Per indicar que l'input es troba deshabilitat, cal afegir la propietat
`,e.jsx(l.strong,{children:"disabled"})," a l'input o textarea."]}),`
`,e.jsxs(r,{children:[e.jsx("dss-input-field",{label:"Label",type:"text",disabled:!0}),e.jsx("dss-input-field",{label:"Label",type:"text",value:"Value",disabled:!0}),e.jsx("dss-input-field",{label:"Label",type:"number",disabled:!0}),e.jsx("dss-input-field",{label:"Label",type:"number",value:"1",disabled:!0})]}),`
`,e.jsx(l.h3,{id:"només-lectura",children:"Només lectura"}),`
`,e.jsxs(l.p,{children:[`Per indicar que l'input o textarea es troba només lectura, cal afegir la
propietat `,e.jsx(l.strong,{children:"readOnly"})," a l'element."]}),`
`,e.jsxs(r,{children:[e.jsx("dss-input-field",{label:"Label",type:"text",readonly:!0}),e.jsx("dss-input-field",{label:"Label",type:"text",value:"Value",readonly:!0}),e.jsx("dss-input-field",{label:"Label",type:"number",readonly:!0}),e.jsx("dss-input-field",{label:"Label",type:"number",value:"1",readonly:!0})]}),`
`,e.jsx(l.h3,{id:"requerit",children:"Requerit"}),`
`,e.jsxs(l.p,{children:["Per indicar que l'input és obligatori, cal afegir la propietat ",e.jsx(l.strong,{children:"required"}),` a
l'input.`]}),`
`,e.jsxs(r,{children:[e.jsx("dss-input-field",{label:"Label",type:"text",required:!0}),e.jsx("dss-input-field",{label:"Label",type:"text",value:"Value",required:!0}),e.jsx("dss-input-field",{label:"Label",type:"number",required:!0}),e.jsx("dss-input-field",{label:"Label",type:"number",value:"1",required:!0})]}),`
`,e.jsx(l.h2,{id:"invalid",children:"Invalid"}),`
`,e.jsxs(l.p,{children:["Per indicar que l'input és invalid, cal afegir la propietat ",e.jsx(l.strong,{children:"showError"}),` al
component amb la validació que sigui necessària.`]}),`
`,e.jsxs(r,{children:[e.jsx("dss-input-field",{label:"Label",type:"text",required:!0}),e.jsx("dss-input-field",{label:"Label",type:"text",value:"Value",required:!0,showError:!0}),e.jsx("dss-input-field",{label:"Label",type:"number",required:!0}),e.jsx("dss-input-field",{label:"Label",type:"number",value:"1",required:!0,showError:!0})]}),`
`,e.jsx(l.h3,{id:"amb-descripció",children:"Amb descripció"}),`
`,e.jsxs(l.p,{children:[`Per afegir una descripció que ajudi l'usuari cal afegir la propietat
`,e.jsx(l.strong,{children:"description"})," amb la descripció correponent."]}),`
`,e.jsxs(r,{children:[e.jsx("dss-input-field",{label:"Label",type:"text",description:"Descripció",required:!0}),e.jsx("dss-input-field",{label:"Label",type:"text",value:"Value",description:"Descripció",required:!0,showError:!0}),e.jsx("dss-input-field",{label:"Label",type:"number",description:"Descripció",required:!0}),e.jsx("dss-input-field",{label:"Label",type:"number",value:"1",description:"Descripció",required:!0,showError:!0})]}),`
`,e.jsx(l.h2,{id:"amb-placeholder",children:"Amb placeholder"}),`
`,e.jsxs(l.p,{children:["Per mostrar el placeholder cal indicar la propietat ",e.jsx(l.strong,{children:"placeholder"}),"."]}),`
`,e.jsxs(r,{children:[e.jsx("dss-input-field",{label:"Label",type:"text",placeholder:"PlaceHolder",required:!0}),e.jsx("dss-input-field",{label:"Label",type:"text",placeholder:"PlaceHolder",required:!0,showError:!0}),e.jsx("dss-input-field",{label:"Label",type:"number",placeholder:"PlaceHolder",required:!0}),e.jsx("dss-input-field",{label:"Label",type:"number",placeholder:"PlaceHolder",required:!0,showError:!0})]}),`
`,e.jsx(l.h3,{id:"amb-comptador",children:"Amb comptador"}),`
`,e.jsxs(l.p,{children:["Per mostrar el comptador de carters cal indicar la propietat ",e.jsx(l.strong,{children:"maxLength"}),"."]}),`
`,e.jsxs(r,{children:[e.jsx("dss-input-field",{label:"Label",type:"text",maxlength:"20"}),e.jsx("dss-input-field",{label:"Label",type:"text",maxlength:"20",required:!0,showError:!0}),e.jsx("dss-input-field",{label:"Label",type:"text",maxlength:"20",description:"Descripció"}),e.jsx("dss-input-field",{label:"Label",type:"text",maxlength:"20",description:"Descripció",required:!0,showError:!0})]}),`
`,e.jsxs(r,{children:[e.jsx("dss-input-field",{label:"Label",type:"number",maxlength:"20"}),e.jsx("dss-input-field",{label:"Label",type:"number",maxlength:"20",required:!0,showError:!0}),e.jsx("dss-input-field",{label:"Label",type:"number",maxlength:"20",description:"Descripció"}),e.jsx("dss-input-field",{label:"Label",type:"number",maxlength:"20",description:"Descripció",required:!0,showError:!0})]}),`
`,e.jsx(l.h3,{id:"amb-icona",children:"Amb icona"}),`
`,e.jsxs(l.p,{children:["Per afegir icona, cal afegir la propietat ",e.jsx(l.strong,{children:"icon"}),` al component amb la icona
que volem mostrar.`]}),`
`,e.jsx("h5",{}),`
`,e.jsx(l.p,{children:e.jsxs(l.em,{children:[e.jsx(l.strong,{children:"Important:"})," La icona no es pot utilitzar en el textarea."]})}),`
`,e.jsxs(r,{children:[e.jsx("dss-input-field",{label:"Label",type:"text",icon:"person"}),e.jsx("dss-input-field",{label:"Label",type:"text",icon:"person",required:!0,showError:!0}),e.jsx("dss-input-field",{label:"Label",type:"text",icon:"person",small:!0}),e.jsx("dss-input-field",{label:"Label",type:"text",icon:"person",required:!0,showError:!0,small:!0})]}),`
`,e.jsxs(r,{children:[e.jsx("dss-input-field",{label:"Label",type:"number",icon:"person"}),e.jsx("dss-input-field",{label:"Label",type:"number",icon:"person",required:!0,showError:!0}),e.jsx("dss-input-field",{label:"Label",type:"number",icon:"person",small:!0}),e.jsx("dss-input-field",{label:"Label",type:"number",icon:"person",required:!0,showError:!0,small:!0})]}),`
`,e.jsx(l.h3,{id:"accionable",children:"Accionable"}),`
`,e.jsxs(l.p,{children:[`Per permetre que l'input sigui esborrable cal afegir la propietat
`,e.jsx(l.strong,{children:"clearable"})," al component."]}),`
`,e.jsx("h5",{}),`
`,e.jsx(l.p,{children:e.jsxs(l.em,{children:[e.jsx(l.strong,{children:"Important:"})," La propietat ",e.jsx(l.strong,{children:"clearable"}),` només funciona a l'input de tipus
text.`]})}),`
`,e.jsxs(r,{children:[e.jsx("dss-input-field",{label:"Label",type:"text",clearable:!0}),e.jsx("dss-input-field",{label:"Label",type:"text",clearable:!0,showError:!0}),e.jsx("dss-input-field",{label:"Label",type:"text",clearable:!0,small:!0}),e.jsx("dss-input-field",{label:"Label",type:"text",clearable:!0,showError:!0,small:!0})]})]})}function g(s={}){const{wrapper:l}={...t(),...s.components};return l?e.jsx(l,{...s,children:e.jsx(n,{...s})}):n(s)}export{g as default};
