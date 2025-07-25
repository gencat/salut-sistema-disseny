import{j as e,M as d,T as a,C as n,a as l}from"./index-CYsLiFoM.js";import{useMDXComponents as t}from"./index-DQftk94Z.js";import{S as c,P as o,B as x,T as h,a as j,N as u,b as p,U as m,c as f,M as b}from"./input-action.stories-BmYK7iu2.js";import"./iframe-BaAhl41R.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function r(i){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
   .inputs-sizes {
      display: flex;
      gap: 16px;
      align-items: end;
    }
  `}),`
`,e.jsx(d,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(a,{}),e.jsx("dss-badge",{text:"dss-input-action",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsxs(s.p,{children:["El component ",e.jsx(s.strong,{children:"dss-input-action"})," amplia l'input per defecte, afegint la possibilitat d'incloure fins a dos botons d'acció per completar-ne la funcionalitat."]}),`
`,e.jsxs(s.p,{children:["En aquest document només s'especifiquen les noves funcionalitats afegides; per a més informació, reviseu el component ",e.jsx(s.a,{href:"/docs/components-input--input-text",children:"Input"}),"."]}),`
`,e.jsxs(s.p,{children:["La principal diferència és que en aquest component s'han afegit dos nous ",e.jsx(s.strong,{children:"slots"}),", ",e.jsx(s.code,{children:"action"})," i ",e.jsx(s.code,{children:"secondaryAction"}),", utilitzats per poder incloure de forma extensiva dos botons d'acció, utilitzant el component icon-button."]}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(l,{}),`
`,e.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["icon",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Modifica la icona situada a l'esquerra l’input."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"inputSize"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"lg"}),e.jsx(s.td,{children:"Mida de l'input: Pot tenir els valors 'md' o 'lg'. Per defecte tindrà sempre el valor 'lg'"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"helpText"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Text d’ajuda que es mostrarà sota del component."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"invalid"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"En definir aquesta propietat el component s mostrarà amb un estil d’error per tal de diferenciar-los de la resta."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"removeMinWidth"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Deshabilita el min-width definit per defecte per als inputs. Si aquesta propietat està activa, l'ample s'adaptarà al 100% del seu contenidor, per la qual cosa s'haurà de definir externament."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"value"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsxs(s.td,{children:["Aquesta propietat només és necessària per solucionar un problema en els formularis reactius d'Angular pel qual es produeix un solapament entre la label i el value de l'input en assignar el valor de manera externa.",e.jsx("br",{}),"Vegeu la secció de resolució de problemes."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"maskRegex"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Expressió regular que defineix el patró de format que s'ha d'aplicar al valor introduït a l'input. Aquesta expressió s'utilitza per identificar les parts del text que cal modificar o separar visualment."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"maskReplace"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Cadena de substitució que s'aplica als grups coincidents definits per maskRegex. Permet definir com s’ha de mostrar el valor a l’usuari (per exemple, afegint espais, guions o altres caràcters de format)."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"unit"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Permet definir una unitat de mesura a mode de descripció dins de l'input."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"inputPrefix"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Permet afegir un text descriptiu davant del valor de l'input."})]})]})]})}),`
`,e.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onInputChange"})}),e.jsx(s.td,{children:"Event que torna el valor de l'input. Només disponible en fer clic en els botons de l'input tipus number."})]})})]})}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#default-text",children:"Default Text"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#text-amb-dues-accions",children:"Text amb dues accions "})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#default-nombre",children:"Default Nombre"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#text-amb-dues-accions",children:"Nombre amb dues accions "})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#midas",children:"Midas"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-unitats",children:"Amb unitats"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-prefix",children:"Amb prefix"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-m%C3%A0scara",children:"Amb màscara"})}),`
`]}),`
`,e.jsx(s.h3,{id:"default-text",children:"Default Text"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.h3,{id:"text-amb-dues-accions",children:"Text amb dues accions"}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.h3,{id:"default-nombre",children:"Default Nombre"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.h3,{id:"nombre-amb-dues-accions",children:"Nombre amb dues accions"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.h3,{id:"midas",children:"Midas"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h3,{id:"amb-unitats",children:"Amb unitats"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"amb-prefix",children:"Amb prefix"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"amb-màscara",children:"Amb màscara"}),`
`,e.jsxs(s.p,{children:["Afegir una màscara visual amb les propietats ",e.jsx(s.code,{children:"maskRegex"})," i ",e.jsx(s.code,{children:"maskReplace"}),"."]}),`
`,e.jsx(s.p,{children:`Aquestes dues propietats es combinen internament per construir una operació de substitució mitjançant value.replace(maskRegex, maskReplace), la qual s’executa cada vegada que
l’usuari escriu, per aplicar la màscara al contingut del camp.`}),`
`,e.jsx(s.p,{children:"Aquestes propietats es poden combinar amb l'atribut max-length natiu de l'input per definir el resultat final de la màscara."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["En cas que l'expressió regular no funcioni correctament en HTML o JavaScript natiu, comproveu que els caràcters s'estiguin escapant correctament, per exemple utilitzar ",e.jsx(s.code,{children:"\\\\"})," en lloc de ",e.jsx(s.code,{children:"\\"}),"."]}),`
`]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`Credit card example React:
<dss-input-action icon="" inputsize="lg" maskRegex="/(\\d{4})(?=\\d)/g" maskReplace="$1 " >
...
<input ... maxLength={19} />
</dss-input-action>

Custom Pattern example React:
<dss-input-action maskRegex="/^(.{2})(.*)$/" maskReplace="$1-$2">
...
<input ... maxLength={6} />
</dss-input-action>

`})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.7.1"})}),e.jsxs(s.td,{children:["S'ha reemplaçat el nom de la propietat units per unit.",e.jsx("br",{}),"S'ha afegit la propietat inputPrefix, que permet afegir un text descriptiu davant del valor de l'input."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.7.0"})}),e.jsxs(s.td,{children:["S'ha afegit una funcionalitat per aplicar una màscara al valor de l'input.",e.jsx("br",{}),"S'ha afegit la propietat units, que permet definir una unitat de mesura a mode de descripció dins de l'input."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.2.1"})}),e.jsxs(s.td,{children:["S'ha afegit la mida SM.",e.jsx("br",{}),"S'ha refactoritzat l'estructura HTML.",e.jsx("br",{})," S'ha inclòs la funcionalitat per visualitzar el valor de l'input quan està truncat."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.0.0"})}),e.jsx(s.td,{children:"Refactor v2."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.12.2"})}),e.jsx(s.td,{children:"Nou web component."})]})]})]})]})}function y(i={}){const{wrapper:s}={...t(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(r,{...i})}):r(i)}export{y as default};
