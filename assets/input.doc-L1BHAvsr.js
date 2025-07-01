import{j as e,M as l,T as t,C as n,a as d,S as c}from"./index-CuBtzvfW.js";import{useMDXComponents as a}from"./index-BDSzqcmZ.js";import{S as o,P as h,R as x,D as u,a as p,I as j,b as m,H as b,C as g,F as f,N as v,M as q}from"./input.stories-BwpVaZfG.js";import"./iframe-DnZgGT9z.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function i(r){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .inputs-sizes {
      display: flex;
      gap: 16px;
      align-items: end;
    }
  `}),`
`,e.jsx(l,{of:o}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(t,{}),e.jsx("dss-badge",{text:"dss-input",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsxs(s.p,{children:["El component ",e.jsx(s.strong,{children:"dss-input"}),` ofereix als usuaris una entrada senzilla per
a un formulari, cal indicar si és de tipus text o number.`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(d,{}),`
`,e.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"icon"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Modifica la icona situada a l'esquerra l’input."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"inputSize"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"lg"}),e.jsx(s.td,{children:"Mida de l'input: Pot tenir els valors 'sm', 'md' o 'lg'. Per defecte tindrà sempre el valor 'lg'"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"helpText"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Text d’ajuda que es mostrarà sota del component."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"invalid"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"En definir aquesta propietat el component s mostrarà amb un estil d’error per tal de diferenciar-los de la resta."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"removeMinWidth"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Deshabilita el min-width definit per defecte per als inputs. Si aquesta propietat està activa, l'ample s'adaptarà al 100% del seu contenidor, per la qual cosa s'haurà de definir externament."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"value"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsxs(s.td,{children:["Aquesta propietat només és necessària per solucionar un problema en els formularis reactius d'Angular pel qual es produeix un solapament entre la label i el value de l'input en assignar el valor de manera externa.",e.jsx("br",{}),"Vegeu la secció de resolució de problemes."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"maskRegex"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Expressió regular que defineix el patró de format que s'ha d'aplicar al valor introduït a l'input. Aquesta expressió s'utilitza per identificar les parts del text que cal modificar o separar visualment."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"maskReplace"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Cadena de substitució que s'aplica als grups coincidents definits per maskRegex. Permet definir com s’ha de mostrar el valor a l’usuari (per exemple, afegint espais, guions o altres caràcters de format)."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"units"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Permet definir una unitat de mesura a mode de descripció dins de l'input."})]})]})]})}),`
`,e.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx(s.p,{children:`Per habilitar l’ús del component en formularis s’ha extret l’input fora del mateix utilitzant slots.
D’aquesta forma totes les propietats natives de l’input (placeholder, required, disabled, readonly, maxlength, min, max, etc.) poden definir-se en el mateix input sense la necessitat de definir una propietat en el selector del web component.
L'element label també s'ha hagut de definir amb slots per tal de situar-lo en el mateix nivell del DOM per tal d'assolit els requisits d'accessibilitat.`}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onInputChange"})}),e.jsx(s.td,{children:"Event que torna el valor de l'input. Només disponible en fer clic en els botons de l'input tipus number."})]})})]})}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#required",children:"Required"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#disabled",children:"Disabled"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#readonly",children:"Read Only"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#mida",children:"Mida"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-ajuda",children:"Amb ajuda"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-comptador",children:"Amb comptador"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-decimals",children:"Amb decimals"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#sense-label",children:"Sense label"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-m%C3%A0scara",children:"Amb màscara"})}),`
`]}),`
`,e.jsx(s.h3,{id:"required",children:"Required"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.h3,{id:"read-only",children:"Read Only"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.h3,{id:"mida",children:"Mida"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(s.h2,{id:"amb-ajuda",children:"Amb ajuda"}),`
`,e.jsxs(s.p,{children:["Per mostrar el text d’ajuda cal indicar la propietat ",e.jsx(s.strong,{children:"helpText"}),"."]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(s.h3,{id:"amb-comptador",children:"Amb comptador"}),`
`,e.jsxs(s.p,{children:["Per mostrar el comptador de carters cal indicar la propietat ",e.jsx(s.strong,{children:"maxlength"})," de l'input i també habilitar l'opció de veure el text d'ajuda."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(s.h3,{id:"amb-decimals",children:"Amb decimals"}),`
`,e.jsxs(s.p,{children:["L'input number ha de gestionar-se de manera nativa, per la qual cosa per a habilitar l'ús de decimals ha d'afegir-se la propietat ",e.jsx(s.code,{children:"step"})," dins del ",e.jsx(s.code,{children:"<input>"})," en lloc d'en el selector ",e.jsx(s.code,{children:"<dss-input>"}),`.
step="any" >> permet qualsevol decimal
step="1" >> no permet decimals
step="0.5" >> permetrà 0.5; 1; 1.5; ...
step="0.1" >> permetrà 0.1; 0.2; 0.3; 0.4; ...
step="0.01" >> permetrà 0.01; 0.02; 0.03; 0.04; ...`]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(s.h3,{id:"sense-label",children:"Sense label"}),`
`,e.jsx(s.p,{children:`Per requisits d'accessibilitat, tots els inputs han d'incloure una etiqueta (label) que indiqui als usuaris l'objectiu d'aquest
element. Per tant, en cas de no incloure una etiqueta a través de l'slot, és imprescindible que s'indiqui a l'input l'etiqueta corresponent
utilitzant etiquetes ARIA, com ara aria-label o aria-labelledby. Només per midas lg o md.`}),`
`,e.jsx(n,{of:v}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"amb-màscara",children:"Amb màscara"}),`
`,e.jsxs(s.p,{children:["Afegir una màscara visual amb les propietats ",e.jsx(s.code,{children:"maskRegex"})," i ",e.jsx(s.code,{children:"maskReplace"}),"."]}),`
`,e.jsx(s.p,{children:`Aquestes dues propietats es combinen internament per construir una operació de substitució mitjançant value.replace(maskRegex, maskReplace), la qual s’executa cada vegada que
l’usuari escriu, per aplicar la màscara al contingut del camp.`}),`
`,e.jsx(s.p,{children:"Aquestes propietats es poden combinar amb l'atribut max-length natiu de l'input per definir el resultat final de la màscara."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["En cas que l'expressió regular no funcioni correctament en HTML o JavaScript natiu, comproveu que els caràcters s'estiguin escapant correctament, per exemple utilitzar ",e.jsx(s.code,{children:"\\\\"})," en lloc de ",e.jsx(s.code,{children:"\\"}),"."]}),`
`]}),`
`,e.jsx(n,{of:q}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`Credit card example React:
<dss-input icon="" inputsize="lg" maskRegex="/(\\d{4})(?=\\d)/g" maskReplace="$1 " >
...
<input ... maxLength={19} />
</dss-input>

Custom Pattern example React:
<dss-input maskRegex="/^(.{2})(.*)$/" maskReplace="$1-$2">
...
<input ... maxLength={6} />
</dss-input>

`})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"resolució-de-problemes",children:"Resolució de problemes"}),`
`,e.jsx(s.h3,{id:"label-i-input-solapats-en-assignar-un-valor-en-els-formularis-reactius-dangular",children:"Label i input solapats en assignar un valor en els formularis reactius d'Angular."}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Problema:"})}),`
`,e.jsx(s.p,{children:`S'ha detectat un problema en utilitzar el component en formularis reactius d'Angular, on, en actualitzar el component des d'Angular,
el DOM no s'actualitza directament, de manera que l'observador intern de l'input, que refresca la posició de la label quan s'afegeix un nou valor,
no s'està executant.`}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Solució:"})}),`
`,e.jsx(s.p,{children:`Utilitzeu la nova propietat value, que actua com un listener per detectar directament quan s'ha modificat el valor i així restablir la posició dels
elements del component. Per evitar afegir complexitat a les iniciatives, el valor es pot capturar directament des del mateix formulari reactiu de la
manera següent:`}),`
`,e.jsx(c,{code:`
  <dss-input icon="person" [value]="myForm.get('name')?.value">
    <label slot="label" for="myInputName">Name</label>
    <input id="myInputName" slot="input" type="text" formControlName="name">
  </dss-input>
`}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.7.0"})}),e.jsxs(s.td,{children:["S'ha afegit una funcionalitat per aplicar una màscara al valor de l'input.",e.jsx("br",{}),"S'ha afegit la propietat units, que permet definir una unitat de mesura a mode de descripció dins de l'input."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.5.0"})}),e.jsx(s.td,{children:"S'ha corregit un error en l'estat readOnly pel qual els elements del component es desplaçaven com en el cas per defecte, donant la sensació que l'input no estava blocat."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.3.0"})}),e.jsxs(s.td,{children:["S'ha eliminat un min-width que limitava l'amplada del component per error.",e.jsx("br",{}),"S'ha corregit un error pel qual, en ocasions, no es mostrava la vora inferior del component."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.2.1"})}),e.jsxs(s.td,{children:["S'ha afegit la mida SM.",e.jsx("br",{}),"S'ha refactoritzat l'estructura HTML.",e.jsx("br",{})," S'ha inclòs la funcionalitat per visualitzar el valor de l'input quan està truncat."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.0.0"})}),e.jsx(s.td,{children:"Refactor v2"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.12.2"})}),e.jsxs(s.td,{children:["S'ha afegit la propietat value per resoldre un problema amb els formularis reactius d'Angular.",e.jsx("br",{}),"S'ha corregit l'estil del component quan no es defineix una etiqueta a través de l'slot corresponent."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.4.1"})}),e.jsx(s.td,{children:"Refactor:  reemplaça a l'actual Input Field i solucionat errors associats a formularis els impedien accedir al valor dels inputs o utilitzar components en formularis reactius d'Angular."})]})]})]})]})}function D(r={}){const{wrapper:s}={...a(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(i,{...r})}):i(r)}export{D as default};
