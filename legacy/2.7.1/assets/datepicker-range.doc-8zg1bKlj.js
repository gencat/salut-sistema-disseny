import{j as e,M as t,T as d,C as n,a as l}from"./index-38zNK1Ms.js";import{useMDXComponents as r}from"./index-CYIFmVlv.js";import{S as c,P as o,a as h,b as x,c as j,D as u,R as p,d as m,I as g,B as f,V as b}from"./datepicker-range.stories-CqolsdRu.js";import"./iframe-B9pHa-5w.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function i(s){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
   .datepicker-canvas {
      min-height: 350px;
      display: flex;
      justify-content: flex-start;
    }
    dss-datepicker-range {
      height: fit-content;
    } 

    .datepicker-canvas--botons {
      min-height: 420px;
    }

    dss-datepicker + dss-datepicker {
      margin-left: 20px;
    }
  `}),`
`,e.jsx(t,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(d,{}),e.jsx("dss-badge",{text:"dss-datepicker-range",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(a.p,{children:"El component datepicker-range és una extensió del datepicker, que permet als usuaris seleccionar un rang de dates de manera senzilla."}),`
`,e.jsx(a.p,{children:e.jsx(a.strong,{children:"Funcionalitat del calendari per defecte:"})}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:`En seleccionar una data el component comprova si la data d' inici ja ha estat seleccionada, si no és així, se selecciona la
data escollida com a data d' inici i es passa el focus a la data final.`}),`
`,e.jsx(a.li,{children:"En estar la data inicial ja seleccionada, quan se seleeciona la següent data, el component valida si és major que la inicial."}),`
`,e.jsx(a.li,{children:"En cas que la data final seleccionada sigui menor que la data inicial el component resetejarà llavors la data inicial havent de triar de nou la data final."}),`
`]}),`
`,e.jsx(a.p,{children:e.jsx(a.strong,{children:"Funcionalitat del calendari quan ambdues dates ja han estat seleccionades:"})}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"El component tindrà en compte en què input, inici o fi, estem fent el focus per actualitzar la data corresponent."}),`
`,e.jsx(a.li,{children:"Si el focus està en la data d' inici s' actualitzarà l' esmentada data sempre que sigui menor que la data final."}),`
`,e.jsx(a.li,{children:"En cas que la nova data inicial sigui major que l' anterior data final, el component resetejarà la data final i s' haurà de triar de nou."}),`
`,e.jsx(a.li,{children:"Si el focus està en la data final s' actualitzarà l' esmentada data sempre que sigui major que la data inicial."}),`
`,e.jsx(a.li,{children:"En cas que aquesta data sigui menor que la data inicial, el component establirà la data escollida com la data inicial."}),`
`]}),`
`,e.jsx(a.p,{children:e.jsx(a.strong,{children:"Funcionalitat del calendari quan s' activen els botons:"})}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"Si cap data ha estat seleccionada funcionarà igual que en la versió sense botons, llevat que les dates no es guardaran fins que s' acceptin els canvis."}),`
`,e.jsx(a.li,{children:"Si ambdues dates estan ja seleccionades, en tornar a obrir el calendari es resetejaran les dates i s' hauran de tornar a elegir tant la data inicial com la final."}),`
`]}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(l,{}),`
`,e.jsx(a.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(a.table,{children:[e.jsx(a.thead,{children:e.jsxs(a.tr,{children:[e.jsx(a.th,{children:"Name"}),e.jsx(a.th,{children:"Type"}),e.jsx(a.th,{children:"Default"}),e.jsx(a.th,{children:"Description"})]})}),e.jsxs(a.tbody,{children:[e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"inputSize"})}),e.jsx(a.td,{children:e.jsx(a.code,{children:"string"})}),e.jsx(a.td,{children:"lg"}),e.jsx(a.td,{children:"Mida de l'input: Pot tenir els valors 'sm' o 'md'. Per defecte tindrà sempre el valor 'md'"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"iconRangeStart"})}),e.jsx(a.td,{children:e.jsx(a.code,{children:"string"})}),e.jsx(a.td,{children:"calendar_month"}),e.jsx(a.td,{children:"Icona mostrada a l'input de data d'inici"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"iconRangeEnd"})}),e.jsx(a.td,{children:e.jsx(a.code,{children:"string"})}),e.jsx(a.td,{children:"calendar_month"}),e.jsx(a.td,{children:"Icona mostrada a l'input de data de fi"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"helpText"})}),e.jsx(a.td,{children:e.jsx(a.code,{children:"string"})}),e.jsx(a.td,{children:"-"}),e.jsx(a.td,{children:"Text d’ajuda que es mostrarà sota del component."})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"invalid"})}),e.jsx(a.td,{children:e.jsx(a.code,{children:"boolean"})}),e.jsx(a.td,{children:"false"}),e.jsx(a.td,{children:"En definir aquesta propietat el component s mostrarà amb un estil d’error per tal de diferenciar-los de la resta."})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"minDate"})}),e.jsx(a.td,{children:e.jsx(a.code,{children:"string"})}),e.jsx(a.td,{children:"-"}),e.jsx(a.td,{children:"Definiu la data mínima que podríem seleccionar al calendari."})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"maxDate"})}),e.jsx(a.td,{children:e.jsx(a.code,{children:"string"})}),e.jsx(a.td,{children:"-"}),e.jsx(a.td,{children:"Definiu la data màxima que podríem seleccionar al calendari."})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"showButtons"})}),e.jsx(a.td,{children:e.jsx(a.code,{children:"boolean"})}),e.jsx(a.td,{children:"false"}),e.jsx(a.td,{children:"Activeu els buttos per a cancel·lar o acceptar la data seleccionada al calendari."})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"calendarLeftButtonLabel"})}),e.jsx(a.td,{children:e.jsx(a.code,{children:"string"})}),e.jsx(a.td,{children:"'Cancel·lar'"}),e.jsx(a.td,{children:"Text que es mostra dins del botó esquerre."})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"calendarRightButtonLabel"})}),e.jsx(a.td,{children:e.jsx(a.code,{children:"string"})}),e.jsx(a.td,{children:"'Seleccionar'"}),e.jsx(a.td,{children:"Text que es mostra dins del botó dret."})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"dropdownPlacement"})}),e.jsx(a.td,{children:e.jsx(a.code,{children:"string"})}),e.jsx(a.td,{children:"'bottom-start'"}),e.jsx(a.td,{children:"Modifica la posició per defecte del desplegable. Pot ser: bottom-start o top-start"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"dropdownFixed"})}),e.jsx(a.td,{children:e.jsx(a.code,{children:"boolean"})}),e.jsx(a.td,{children:"false"}),e.jsx(a.td,{children:"Modifica l'estratègia de posicionament del desplegable a fixed en lloc d'absolute. Utilitza-ho només en casos on el desplegable no apareix correctament perquè està afectat per algun position: absolute o overflow:hidden."})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"validate"})}),e.jsx(a.td,{children:e.jsx(a.code,{children:"boolean"})}),e.jsx(a.td,{children:"false"}),e.jsx(a.td,{children:"Habilita la validació interna de les dates seleccionades."})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"errorMessageFormat"})}),e.jsx(a.td,{children:e.jsx(a.code,{children:"string"})}),e.jsx(a.td,{children:"'El format de la data no és correcte.'"}),e.jsx(a.td,{children:"Text mostrat quan les dates seleccionades té un format incorrecte."})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"errorMessageMinDate"})}),e.jsx(a.td,{children:e.jsx(a.code,{children:"string"})}),e.jsx(a.td,{children:"'El rang de dates és anterior a la permesa.'"}),e.jsx(a.td,{children:"Text mostrat quan el rang de dates seleccionat és anterior a la minDate definida."})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"errorMessageMaxDate"})}),e.jsx(a.td,{children:e.jsx(a.code,{children:"string"})}),e.jsx(a.td,{children:"'El rang de dates és posterior a la permesa.'"}),e.jsx(a.td,{children:"Text mostrat quan el rang de dates seleccionat és posterior a la maxDate definida"})]})]})]})}),`
`,`
`,`
`,e.jsx("br",{}),`
`,e.jsx(a.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(a.table,{children:[e.jsx(a.thead,{children:e.jsxs(a.tr,{children:[e.jsx(a.th,{children:"Name"}),e.jsx(a.th,{children:"Description"})]})}),e.jsxs(a.tbody,{children:[e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"onRangeChange"})}),e.jsx(a.td,{children:"Esdeveniment que retornarà la data seleccionada dins del component."})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"onValidate"})}),e.jsxs(a.td,{children:["Retorna tant el rang de dates seleccionat com la seva validesa mitjançant els camps ",e.jsx(a.code,{children:"rangeStart"}),", ",e.jsx(a.code,{children:"rangeEnd"})," i ",e.jsx(a.code,{children:"invalid"}),". Aquest esdeveniment només es llançarà quan la propietat validate estigui definida al component."]})]})]})]})}),`
`,e.jsx("h3",{children:"Variants"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#mida",children:"Mida"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#nom%C3%A9s-lectura",children:"Només lectura"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#requerit",children:"Requerit"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#invalid",children:"Invalid"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-botons",children:"Amb botons"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-validaci%C3%B3",children:"Amb validació"})}),`
`]}),`
`,e.jsx(a.h3,{id:"mida",children:"Mida"}),`
`,e.jsxs(a.p,{children:[`Hi ha dos tipus de mesura, el mitjà i el petit, per defecte es mostra el
mitjà, si volem mostrar el petit hem d'afegir la propietat `,e.jsx(a.strong,{children:"inputSize"}),` al
component. Pot ser: 'sm' o 'md'.`]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(a.h3,{id:"deshabilitat",children:"Deshabilitat"}),`
`,e.jsxs(a.p,{children:["Per indicar que els inputs es troben deshabilitats cal afegir la propietat nativa ",e.jsx(a.strong,{children:"disabled"})," als propis inputs definits com a slot."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(a.h3,{id:"només-lectura",children:"Només lectura"}),`
`,e.jsxs(a.p,{children:["De la mateixa manera per a l'estat de només lectura farem servir la propietat nativa de l'input ",e.jsx(a.strong,{children:"readonly"})]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(a.h3,{id:"requerit",children:"Requerit"}),`
`,e.jsxs(a.p,{children:["Per indicar que l'input és obligatori, cal afegir la propietat nativa ",e.jsx(a.strong,{children:"required"}),` a
l'input.`]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(a.blockquote,{children:`
`}),`
`,e.jsx(a.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsxs(a.p,{children:["Per indicar que el component és invàlid, cal afegir la propietat ",e.jsx(a.strong,{children:"invalid"}),`.
Podeu utilitzar aquesta propietat si necessiteu realitzar validacions addicionals a les que inclogui el mateix component.`]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(a.h3,{id:"amb-botons",children:"Amb botons"}),`
`,e.jsxs(a.p,{children:[`Per indicar que el date-picker mostri botons, cal afegir la propietat
`,e.jsx(a.strong,{children:"showButtons"})," al component, també indicar el ",e.jsx(a.strong,{children:"calendarLeftLabel"}),` i el
`,e.jsx(a.strong,{children:"calendarRightLabel"}),` per canviar els valors per defecte dels botons si cal. Per
defecte, els botons mostren `,e.jsx(a.strong,{children:"Cancel·lar"})," i ",e.jsx(a.strong,{children:"Acceptar"}),"."]}),`
`,e.jsx(n,{of:f}),`
`,`
`,e.jsx(a.h3,{id:"amb-validació",children:"Amb validació"}),`
`,e.jsxs(a.p,{children:["La validació interna de la data s’activa afegint la propietat ",e.jsx(a.code,{children:"validate"}),`. Aquesta funcionalitat s’activa en tancar el calendari, ja sigui perquè s’ha fet clic en una
data del mateix o bé perquè s’ha introduït una data amb el teclat i s’ha tancat el calendari sense seleccionar manualment la data
(prement intro, escape o fent clic fora del calendari).`]}),`
`,e.jsx(a.p,{children:"Les validacions incloses són:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"El format de la data és correcte MM/DD/AAAA"}),`
`,e.jsxs(a.li,{children:["Si s’ha definit un ",e.jsx(a.code,{children:"minDate"}),", la data ha de ser igual o superior a la especificada"]}),`
`,e.jsxs(a.li,{children:["Si s’ha definit un ",e.jsx(a.code,{children:"maxDate"}),", la data ha de ser igual o inferior a la especificada"]}),`
`]}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"Nota: la validació sobreescriu el valor del helpText amb missatges d’error. Tingues-ho en compte a l’hora de maquetar el formulari, ja que en cas d’intentar alinear-los horitzontalment pot generar desajustos si per defecte no existeix un helpText. Aquests missatges es poden, al seu torn, definir a través de les propietats: errorMessageFormat, errorMessageMinDate, errorMessageMaxDate"}),`
`]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(a.table,{children:[e.jsx(a.thead,{children:e.jsxs(a.tr,{children:[e.jsx(a.th,{children:"Versió"}),e.jsx(a.th,{children:"Canvis"})]})}),e.jsxs(a.tbody,{children:[e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"2.5.1"})}),e.jsxs(a.td,{children:["S'ha afegit la funcionalitat de validació de dates en tancar el calendari. S'activa afegint la propietat ",e.jsx(a.code,{children:"validate"}),"."]})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"2.5.0"})}),e.jsxs(a.td,{children:["S'ha afegit la propietat ",e.jsx(a.code,{children:"customCalendar"})," que permet personalitzar els dies del calendari."]})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"2.5.0"})}),e.jsxs(a.td,{children:["S'ha afegit la propietat ",e.jsx(a.code,{children:"customCalendar"})," que permet personalitzar els dies del calendari."]})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"2.0.0"})}),e.jsx(a.td,{children:"Refactor v2"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"1.10.0"})}),e.jsx(a.td,{children:"S'ha corregit un error en el calendari pel qual el selector de dia se solapava amb el selector de mes i any."})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:e.jsx(a.strong,{children:"1.9.0"})}),e.jsx(a.td,{children:"S'ha creat una versió del datepicker que permet escollir entre una data d'inici i una data final, mostrant-se el rang entre aquestes al calendari."})]})]})]})]})}function A(s={}){const{wrapper:a}={...r(),...s.components};return a?e.jsx(a,{...s,children:e.jsx(i,{...s})}):i(s)}export{A as default};
