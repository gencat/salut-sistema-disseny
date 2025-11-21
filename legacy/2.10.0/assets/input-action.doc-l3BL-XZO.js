import{j as e,M as r,T as c,C as s}from"./index-B0o4jD7T.js";import{useMDXComponents as t}from"./index-CI2KCRmc.js";import{S as o,P as l,B as d,T as u,a as x,N as m,b as p,U as h,c as j,M as f}from"./input-action.stories-5fguI62V.js";import"./iframe-BHr_tuW3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";function a(i){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
   .inputs-sizes {
      display: flex;
      gap: 16px;
      align-items: end;
    }
  `}),`
`,e.jsx(r,{of:o}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(c,{}),e.jsx("component-title",{children:"dss-input-action"})]}),`
`,e.jsx("br",{}),`
`,e.jsx("dss-alert",{fullWidth:!0,state:"warning",size:"md",message:"Aquest component es mantindrà només per a les iniciatives que continuïn utilitzant Angular Reactive Forms; en cas contrari, si us plau, feu servir el nou component dss-form-input."}),`
`,e.jsxs(n.p,{children:["Veure nou component: ",e.jsx(n.a,{href:"/docs/components-form-input--docs#amb-accions",children:e.jsx(n.strong,{children:"Form: Input::hasActions"})})]}),`
`,e.jsxs(n.p,{children:["El component ",e.jsx(n.strong,{children:"dss-input-action"})," amplia l'input per defecte, afegint la possibilitat d'incloure fins a dos botons d'acció per completar-ne la funcionalitat."]}),`
`,e.jsxs(n.p,{children:["En aquest document només s'especifiquen les noves funcionalitats afegides; per a més informació, reviseu el component ",e.jsx(n.a,{href:"/docs/components-input--input-text",children:"Input"}),"."]}),`
`,e.jsxs(n.p,{children:["La principal diferència és que en aquest component s'han afegit dos nous ",e.jsx(n.strong,{children:"slots"}),", ",e.jsx(n.code,{children:"action"})," i ",e.jsx(n.code,{children:"secondaryAction"}),", utilitzats per poder incloure de forma extensiva dos botons d'acció, utilitzant el component icon-button."]}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:l}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#default-text",children:"Default Text"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#text-amb-dues-accions",children:"Text amb dues accions "})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#default-nombre",children:"Default Nombre"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#text-amb-dues-accions",children:"Nombre amb dues accions "})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#midas",children:"Midas"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-unitats",children:"Amb unitats"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-prefix",children:"Amb prefix"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-m%C3%A0scara",children:"Amb màscara"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"default-text",children:"Default Text"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h3,{id:"text-amb-dues-accions",children:"Text amb dues accions"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"default-nombre",children:"Default Nombre"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"nombre-amb-dues-accions",children:"Nombre amb dues accions"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"midas",children:"Midas"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"amb-unitats",children:"Amb unitats"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"amb-prefix",children:"Amb prefix"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"amb-màscara",children:"Amb màscara"}),`
`,e.jsxs(n.p,{children:["Afegir una màscara visual amb les propietats ",e.jsx(n.code,{children:"maskRegex"})," i ",e.jsx(n.code,{children:"maskReplace"}),"."]}),`
`,e.jsx(n.p,{children:`Aquestes dues propietats es combinen internament per construir una operació de substitució mitjançant value.replace(maskRegex, maskReplace), la qual s’executa cada vegada que
l’usuari escriu, per aplicar la màscara al contingut del camp.`}),`
`,e.jsx(n.p,{children:"Aquestes propietats es poden combinar amb l'atribut max-length natiu de l'input per definir el resultat final de la màscara."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["En cas que l'expressió regular no funcioni correctament en HTML o JavaScript natiu, comproveu que els caràcters s'estiguin escapant correctament, per exemple utilitzar ",e.jsx(n.code,{children:"\\\\"})," en lloc de ",e.jsx(n.code,{children:"\\"}),"."]}),`
`]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Credit card example React:
<dss-input-action icon="" inputsize="lg" maskRegex="/(\\d{4})(?=\\d)/g" maskReplace="$1 " >
...
<input ... maxLength={19} />
</dss-input-action>

Custom Pattern example React:
<dss-input-action maskRegex="/^(.{2})(.*)$/" maskReplace="$1-$2">
...
<input ... maxLength={6} />
</dss-input-action>

`})})]})}function M(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{M as default};
