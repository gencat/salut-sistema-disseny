import{j as e,M as t,T as d,C as a,a as l}from"./index-DiVvpQ30.js";import{useMDXComponents as r}from"./index-CXLgFgo7.js";import{S as c,P as o,a as h,b as x,c as j,D as u,R as p,d as m,I as g,B as f,V as b}from"./datepicker-range.stories-CqolsdRu.js";import"./iframe-B5fPo4gs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function i(s){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
`,e.jsx(n.p,{children:"El component datepicker-range és una extensió del datepicker, que permet als usuaris seleccionar un rang de dates de manera senzilla."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Funcionalitat del calendari per defecte:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`En seleccionar una data el component comprova si la data d' inici ja ha estat seleccionada, si no és així, se selecciona la
data escollida com a data d' inici i es passa el focus a la data final.`}),`
`,e.jsx(n.li,{children:"En estar la data inicial ja seleccionada, quan se seleeciona la següent data, el component valida si és major que la inicial."}),`
`,e.jsx(n.li,{children:"En cas que la data final seleccionada sigui menor que la data inicial el component resetejarà llavors la data inicial havent de triar de nou la data final."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Funcionalitat del calendari quan ambdues dates ja han estat seleccionades:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"El component tindrà en compte en què input, inici o fi, estem fent el focus per actualitzar la data corresponent."}),`
`,e.jsx(n.li,{children:"Si el focus està en la data d' inici s' actualitzarà l' esmentada data sempre que sigui menor que la data final."}),`
`,e.jsx(n.li,{children:"En cas que la nova data inicial sigui major que l' anterior data final, el component resetejarà la data final i s' haurà de triar de nou."}),`
`,e.jsx(n.li,{children:"Si el focus està en la data final s' actualitzarà l' esmentada data sempre que sigui major que la data inicial."}),`
`,e.jsx(n.li,{children:"En cas que aquesta data sigui menor que la data inicial, el component establirà la data escollida com la data inicial."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Funcionalitat del calendari quan s' activen els botons:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Si cap data ha estat seleccionada funcionarà igual que en la versió sense botons, llevat que les dates no es guardaran fins que s' acceptin els canvis."}),`
`,e.jsx(n.li,{children:"Si ambdues dates estan ja seleccionades, en tornar a obrir el calendari es resetejaran les dates i s' hauran de tornar a elegir tant la data inicial com la final."}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"inputSize"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"lg"}),e.jsx(n.td,{children:"Mida de l'input: Pot tenir els valors 'sm' o 'md'. Per defecte tindrà sempre el valor 'md'"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"iconRangeStart"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"calendar_month"}),e.jsx(n.td,{children:"Icona mostrada a l'input de data d'inici"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"iconRangeEnd"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"calendar_month"}),e.jsx(n.td,{children:"Icona mostrada a l'input de data de fi"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"helpText"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Text d’ajuda que es mostrarà sota del component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"invalid"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"En definir aquesta propietat el component s mostrarà amb un estil d’error per tal de diferenciar-los de la resta."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"minDate"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Definiu la data mínima que podríem seleccionar al calendari."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"maxDate"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Definiu la data màxima que podríem seleccionar al calendari."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"showButtons"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Activeu els buttos per a cancel·lar o acceptar la data seleccionada al calendari."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"calendarLeftButtonLabel"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'Cancel·lar'"}),e.jsx(n.td,{children:"Text que es mostra dins del botó esquerre."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"calendarRightButtonLabel"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'Seleccionar'"}),e.jsx(n.td,{children:"Text que es mostra dins del botó dret."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"dropdownPlacement"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'bottom-start'"}),e.jsx(n.td,{children:"Modifica la posició per defecte del desplegable. Pot ser: bottom-start o top-start"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"dropdownFixed"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Modifica l'estratègia de posicionament del desplegable a fixed en lloc d'absolute. Utilitza-ho només en casos on el desplegable no apareix correctament perquè està afectat per algun position: absolute o overflow:hidden."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"validate"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Habilita la validació interna de les dates seleccionades."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"errorMessageFormat"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'El format de la data no és correcte.'"}),e.jsx(n.td,{children:"Text mostrat quan les dates seleccionades té un format incorrecte."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"errorMessageMinDate"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'El rang de dates és anterior a la permesa.'"}),e.jsx(n.td,{children:"Text mostrat quan el rang de dates seleccionat és anterior a la minDate definida."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"errorMessageMaxDate"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'El rang de dates és posterior a la permesa.'"}),e.jsx(n.td,{children:"Text mostrat quan el rang de dates seleccionat és posterior a la maxDate definida"})]})]})]})}),`
`,`
`,`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onRangeChange"})}),e.jsx(n.td,{children:"Esdeveniment que retornarà la data seleccionada dins del component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onValidate"})}),e.jsxs(n.td,{children:["Retorna tant el rang de dates seleccionat com la seva validesa mitjançant els camps ",e.jsx(n.code,{children:"rangeStart"}),", ",e.jsx(n.code,{children:"rangeEnd"})," i ",e.jsx(n.code,{children:"invalid"}),". Aquest esdeveniment només es llançarà quan la propietat validate estigui definida al component."]})]})]})]}),`
`,e.jsx("h3",{children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#mida",children:"Mida"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#nom%C3%A9s-lectura",children:"Només lectura"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#requerit",children:"Requerit"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#invalid",children:"Invalid"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-botons",children:"Amb botons"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-validaci%C3%B3",children:"Amb validació"})}),`
`]}),`
`,e.jsx(n.h3,{id:"mida",children:"Mida"}),`
`,e.jsxs(n.p,{children:[`Hi ha dos tipus de mesura, el mitjà i el petit, per defecte es mostra el
mitjà, si volem mostrar el petit hem d'afegir la propietat `,e.jsx(n.strong,{children:"inputSize"}),` al
component. Pot ser: 'sm' o 'md'.`]}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(a,{of:x}),`
`,e.jsx(a,{of:j}),`
`,e.jsx(n.h3,{id:"deshabilitat",children:"Deshabilitat"}),`
`,e.jsxs(n.p,{children:["Per indicar que els inputs es troben deshabilitats cal afegir la propietat nativa ",e.jsx(n.strong,{children:"disabled"})," als propis inputs definits com a slot."]}),`
`,e.jsx(a,{of:u}),`
`,e.jsx(n.h3,{id:"només-lectura",children:"Només lectura"}),`
`,e.jsxs(n.p,{children:["De la mateixa manera per a l'estat de només lectura farem servir la propietat nativa de l'input ",e.jsx(n.strong,{children:"readonly"})]}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(n.h3,{id:"requerit",children:"Requerit"}),`
`,e.jsxs(n.p,{children:["Per indicar que l'input és obligatori, cal afegir la propietat nativa ",e.jsx(n.strong,{children:"required"}),` a
l'input.`]}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(n.blockquote,{children:`
`}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsxs(n.p,{children:["Per indicar que el component és invàlid, cal afegir la propietat ",e.jsx(n.strong,{children:"invalid"}),`.
Podeu utilitzar aquesta propietat si necessiteu realitzar validacions addicionals a les que inclogui el mateix component.`]}),`
`,e.jsx(a,{of:g}),`
`,e.jsx(n.h3,{id:"amb-botons",children:"Amb botons"}),`
`,e.jsxs(n.p,{children:[`Per indicar que el date-picker mostri botons, cal afegir la propietat
`,e.jsx(n.strong,{children:"showButtons"})," al component, també indicar el ",e.jsx(n.strong,{children:"calendarLeftLabel"}),` i el
`,e.jsx(n.strong,{children:"calendarRightLabel"}),` per canviar els valors per defecte dels botons si cal. Per
defecte, els botons mostren `,e.jsx(n.strong,{children:"Cancel·lar"})," i ",e.jsx(n.strong,{children:"Acceptar"}),"."]}),`
`,e.jsx(a,{of:f}),`
`,`
`,e.jsx(n.h3,{id:"amb-validació",children:"Amb validació"}),`
`,e.jsxs(n.p,{children:["La validació interna de la data s’activa afegint la propietat ",e.jsx(n.code,{children:"validate"}),`. Aquesta funcionalitat s’activa en tancar el calendari, ja sigui perquè s’ha fet clic en una
data del mateix o bé perquè s’ha introduït una data amb el teclat i s’ha tancat el calendari sense seleccionar manualment la data
(prement intro, escape o fent clic fora del calendari).`]}),`
`,e.jsx(n.p,{children:"Les validacions incloses són:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"El format de la data és correcte MM/DD/AAAA"}),`
`,e.jsxs(n.li,{children:["Si s’ha definit un ",e.jsx(n.code,{children:"minDate"}),", la data ha de ser igual o superior a la especificada"]}),`
`,e.jsxs(n.li,{children:["Si s’ha definit un ",e.jsx(n.code,{children:"maxDate"}),", la data ha de ser igual o inferior a la especificada"]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Nota: la validació sobreescriu el valor del helpText amb missatges d’error. Tingues-ho en compte a l’hora de maquetar el formulari, ja que en cas d’intentar alinear-los horitzontalment pot generar desajustos si per defecte no existeix un helpText. Aquests missatges es poden, al seu torn, definir a través de les propietats: errorMessageFormat, errorMessageMinDate, errorMessageMaxDate"}),`
`]}),`
`,e.jsx(a,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Versió"}),e.jsx(n.th,{children:"Canvis"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.5.1"})}),e.jsxs(n.td,{children:["S'ha afegit la funcionalitat de validació de dates en tancar el calendari. S'activa afegint la propietat ",e.jsx(n.code,{children:"validate"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.5.0"})}),e.jsxs(n.td,{children:["S'ha afegit la propietat ",e.jsx(n.code,{children:"customCalendar"})," que permet personalitzar els dies del calendari."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.5.0"})}),e.jsxs(n.td,{children:["S'ha afegit la propietat ",e.jsx(n.code,{children:"customCalendar"})," que permet personalitzar els dies del calendari."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.0"})}),e.jsx(n.td,{children:"Refactor v2"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.10.0"})}),e.jsx(n.td,{children:"S'ha corregit un error en el calendari pel qual el selector de dia se solapava amb el selector de mes i any."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.9.0"})}),e.jsx(n.td,{children:"S'ha creat una versió del datepicker que permet escollir entre una data d'inici i una data final, mostrant-se el rang entre aquestes al calendari."})]})]})]})]})}function A(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{A as default};
