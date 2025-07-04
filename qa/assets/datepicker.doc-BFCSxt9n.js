import{j as e,M as t,T as l,C as s,a as d,S as c}from"./index-CwUnIK6l.js";import{useMDXComponents as a}from"./index--VIXWnPk.js";import{S as o,P as h,a as x,D as j,R as p,b as m,I as u,T as g,V as f}from"./datepicker.stories-B7zF74X7.js";import"./iframe-CdaQSJPn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-element-Dloa6E9d.js";import"./lit-html-D6a8R3xZ.js";import"./datepicker-CYn-ccsn.js";import"./property-BpSxuat7.js";import"./property-types-CkH-zh1n.js";import"./class-map-t53NE6z1.js";import"./static-BTPASdtP.js";import"./custom-element-scope-Dp4Dg8bo.js";import"./popper-CMBiYTiD.js";function i(n){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
   .datepicker-canvas {
      min-height: 350px;
      display: flex;
      justify-content: flex-start;
    }

    .datepicker-canvas--temps {
      min-height: 700px;
    }

    .datepicker-canvas--botons {
      min-height: 420px;
    }

    dss-datepicker + dss-datepicker {
      margin-left: 20px;
    }
  `}),`
`,e.jsx(t,{of:o}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("dss-badge",{text:"dss-datepicker",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(r.p,{children:`El component datepicker ofereix als usuaris una entrada senzilla per
a un formulari, ajuda als usuaris a seleccionar una sola data. Per utilitzar
aquest component en angular cal fer servir la directiva adjuntada.`}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(d,{}),`
`,e.jsx(r.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Name"}),e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Default"}),e.jsx(r.th,{children:"Description"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"inputSize"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"lg"}),e.jsx(r.td,{children:"Mida de l'input: Pot tenir els valors 'md' o 'lg'. Per defecte tindrà sempre el valor 'lg'"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"icon"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"'search'"}),e.jsx(r.td,{children:"Modifica la icona situada a l'esquerra del datepicker."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"helpText"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"-"}),e.jsx(r.td,{children:"Text d’ajuda que es mostrarà sota del component."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"invalid"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"boolean"})}),e.jsx(r.td,{children:"false"}),e.jsx(r.td,{children:"En definir aquesta propietat el component s mostrarà amb un estil d’error per tal de diferenciar-los de la resta."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"minDate"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"-"}),e.jsx(r.td,{children:'Definiu la data mínima que podríem seleccionar al calendari. Format: "DD/MM/AAAA"'})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"maxDate"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"-"}),e.jsx(r.td,{children:'Definiu la data màxima que podríem seleccionar al calendari. Format: "DD/MM/AAAA"'})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"showTime"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"boolean"})}),e.jsx(r.td,{children:"false"}),e.jsx(r.td,{children:"Activa l'element selector de temps dins del component."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"leftLabel"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"'Cancel·lar'"}),e.jsx(r.td,{children:"Text que es mostra dins del botó esquerre quan s'activa la variant amb timepicker."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"rightLabel"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"'Seleccionar'"}),e.jsx(r.td,{children:"Text que es mostra dins del botó dret quan s'activa la variant amb timepicker."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"timepicker"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"-"}),e.jsx(r.td,{children:"Fa que el timipicker mostri un dropdown desplegable en el qual podrem escollir una hora. Aquest dropdown té dues variants diferents: - 'list': mostrarà un llistat d’hores disponibles. - 'manual': permet seleccionar l’hora i els minuts per separat."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"minutesRange"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{children:"1"}),e.jsx(r.td,{children:"Interval transcorregut entre els minuts que es mostraran en les opcions del dropdown. Per exemple, podem utilitzar-lo si volem que l'hora es mostri cada 5, 10 o 15 minuts en comptes de minut a minut."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"minHour"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{children:"0"}),e.jsx(r.td,{children:"Hora d’inici per a les opcions disponibles del dropdown."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"maxHour"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{children:"23"}),e.jsx(r.td,{children:"Hora final per a les opcions disponibles del dropdown."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"customTimeListOptions"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:" DssTimepickerOption[]"})}),e.jsx(r.td,{children:"-"}),e.jsx(r.td,{children:"Llistat personalitzat d'hores disponibles que es mostraran en el dropdown. Quan es defineixi aquesta propietat el valor de dropdown ha de ser sempre 'list' i les propietats minutesRange, minHour i maxHour quedaran sense efecte."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"timepickerLabel"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"'Selecciona l'hora'"}),e.jsx(r.td,{children:"Modifica el text que es mostra com a placeholder dins de l'element timepicker."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"value"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"-"}),e.jsxs(r.td,{children:["Aquesta propietat només és necessària per solucionar un problema en els formularis reactius d'Angular pel qual es produeix un solapament entre la label i el value de l'input en assignar el valor de manera externa.",e.jsx("br",{}),"Vegeu la secció de resolució de problemes."]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"dropdownPlacement"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"'bottom-start'"}),e.jsx(r.td,{children:"Modifica la posició per defecte del desplegable. Pot ser: bottom-start o top-start"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"dropdownFixed"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"boolean"})}),e.jsx(r.td,{children:"false"}),e.jsx(r.td,{children:"Modifica l'estratègia de posicionament del desplegable a fixed en lloc d'absolute. Utilitza-ho només en casos on el desplegable no apareix correctament perquè està afectat per algun position: absolute o overflow:hidden."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"validate"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"boolean"})}),e.jsx(r.td,{children:"false"}),e.jsx(r.td,{children:"Habilita la validació interna de la data seleccionada."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"errorMessageFormat"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"'El format de la data no és correcte.'"}),e.jsx(r.td,{children:"Text mostrat quan la data seleccionada té un format incorrecte."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"errorMessageMinDate"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"'La data és anterior a la permesa.'"}),e.jsx(r.td,{children:"Text mostrat quan la data seleccionada és anterior a la minDate definida."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"errorMessageMaxDate"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"'La data és posterior a la permesa.'"}),e.jsx(r.td,{children:"Text mostrat quan la data seleccionada és posterior a la maxDate definida"})]})]})]})}),`
`,`
`,`
`,e.jsx("br",{}),`
`,e.jsx(r.h4,{id:"custom-timepicker-option",children:"Custom Timepicker Option"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Name"}),e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Default"}),e.jsx(r.th,{children:"Description"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsxs(r.strong,{children:["state",e.jsx("span",{children:"*"})]})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"-"}),e.jsx(r.td,{children:"Estat que identificarà si l'hora marcada està disponible o no. Els valors que pot tenir aquesta propietat són: 'disponible' o 'ocupat'"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsxs(r.strong,{children:["value",e.jsx("span",{children:"*"})]})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"-"}),e.jsx(r.td,{children:"Hora en format HH:mm, per exemple 22:30"})]})]})]})}),`
`,e.jsx(r.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Name"}),e.jsx(r.th,{children:"Description"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"onValueChange"})}),e.jsx(r.td,{children:"Esdeveniment que retornarà la data seleccionada dins del component."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"onValidate"})}),e.jsxs(r.td,{children:["Retorna tant la data seleccionada com la seva validesa mitjançant els camps ",e.jsx(r.code,{children:"date"})," i ",e.jsx(r.code,{children:"invalid"}),". Aquest esdeveniment només es llançarà quan la propietat validate estigui definida al component."]})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#mida",children:"Mida"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#nom%C3%A9s-lectura",children:"Només lectura"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#requerit",children:"Requerit"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#invalid",children:"Invalid"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#amb-temps",children:"Amb temps"})}),`
`]}),`
`,`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#amb-validaci%C3%B3",children:"Amb validació"})}),`
`]}),`
`,e.jsx(r.h3,{id:"mida",children:"Mida"}),`
`,e.jsxs(r.p,{children:[`Hi ha dos tipus de mesura, el mitjà i el petit, per defecte es mostra el
mitjà, si volem mostrar el petit hem d'afegir la propietat `,e.jsx(r.strong,{children:"small"}),` al
component.`]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(r.h3,{id:"deshabilitat",children:"Deshabilitat"}),`
`,e.jsxs(r.p,{children:[`Per indicar que l'input es troba deshabilitat, cal afegir la propietat
`,e.jsx(r.strong,{children:"disabled"})," al component."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(r.h3,{id:"només-lectura",children:"Només lectura"}),`
`,e.jsxs(r.p,{children:[`Per indicar que l'input es troba només lectura, cal afegir la propietat
`,e.jsx(r.strong,{children:"readonly"})," al component."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(r.h3,{id:"requerit",children:"Requerit"}),`
`,e.jsxs(r.p,{children:["Per indicar que l'input és obligatori, cal afegir la propietat ",e.jsx(r.strong,{children:"required"}),` a
l'input.`]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(r.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsxs(r.p,{children:["Per indicar que l'input és invalid, cal afegir la propietat ",e.jsx(r.strong,{children:"invalid"}),` al
component amb la validació que sigui necessària.`]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(r.h3,{id:"amb-temps",children:"Amb temps"}),`
`,e.jsxs(r.p,{children:["Per indicar que el date-picker mostri temps, cal afegir la propietat ",e.jsx(r.strong,{children:"showTime"})," al component."]}),`
`,e.jsx(r.p,{children:"Pots escollir entre tres tipus de timepicker: sense dropdown (per defecte, no cal definir-ho), dropdown de tipus llista (timepicker='list') o dropdown de tipus manual (timepicker='manual')."}),`
`,e.jsx(r.p,{children:"A més es pot configurar el timepicker utilitzant les propietats pròpies del component: minutesRange, minHour, MaxHour i customTimeListOptions."}),`
`,e.jsxs(r.p,{children:["Veure ",e.jsx(r.a,{href:"/docs/components-timepicker--exemple",children:"documentació del componente timepicker"}),"."]}),`
`,e.jsx(s,{of:g}),`
`,`
`,e.jsx(r.h3,{id:"amb-validació",children:"Amb validació"}),`
`,e.jsxs(r.p,{children:["La validació interna de la data s’activa afegint la propietat ",e.jsx(r.code,{children:"validate"}),`. Aquesta funcionalitat s’activa en tancar el calendari, ja sigui perquè s’ha fet clic en una
data del mateix o bé perquè s’ha introduït una data amb el teclat i s’ha tancat el calendari sense seleccionar manualment la data
(prement intro, escape o fent clic fora del calendari).`]}),`
`,e.jsx(r.p,{children:"Les validacions incloses són:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"El format de la data és correcte MM/DD/AAAA"}),`
`,e.jsxs(r.li,{children:["Si s’ha definit un ",e.jsx(r.code,{children:"minDate"}),", la data ha de ser igual o superior a la especificada"]}),`
`,e.jsxs(r.li,{children:["Si s’ha definit un ",e.jsx(r.code,{children:"maxDate"}),", la data ha de ser igual o inferior a la especificada"]}),`
`]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"Nota: la validació sobreescriu el valor del helpText amb missatges d’error. Tingues-ho en compte a l’hora de maquetar el formulari, ja que en cas d’intentar alinear-los horitzontalment pot generar desajustos si per defecte no existeix un helpText. Aquests missatges es poden, al seu torn, definir a través de les propietats: errorMessageFormat, errorMessageMinDate, errorMessageMaxDate"}),`
`]}),`
`,e.jsx(s,{of:f}),`
`,`
`,e.jsx(r.h2,{id:"resolució-de-problemes",children:"Resolució de problemes"}),`
`,e.jsx(r.h3,{id:"el-valor-del-datepicker-no-sactualitza-en-angular-form",children:"El valor del datepicker no s'actualitza en Angular Form"}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Problema:"})}),`
`,e.jsxs(r.p,{children:[`S'ha afegit la funcionalitat per a poder detectar aquest component des de formularis reactius, no obstant això, s'ha detectat que quan l'usuari tria una data
fent clic en el calendari no s'actualitza el valor dins del form control per al camp de data.`,e.jsx("br",{})]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Solució:"})}),`
`,e.jsxs(r.p,{children:["Es recomana capturar la data triada des del calendari mitjançant l'esdeveniment 'onValueChange' emès en el component ",e.jsx(r.code,{children:"dss-date-picker"}),` i posteriorment
utilitzar el mètode `,e.jsx(r.code,{children:"setValue"})," per a assignar el valor manualment al camp de data."]}),`
`,e.jsx(r.h3,{id:"label-i-input-solapats-en-assignar-un-valor-en-els-formularis-reactius-dangular",children:"Label i input solapats en assignar un valor en els formularis reactius d'Angular."}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Problema:"})}),`
`,e.jsx(r.p,{children:`S'ha detectat un problema en utilitzar el component en formularis reactius d'Angular, on, en actualitzar el component des d'Angular,
el DOM no s'actualitza directament, de manera que l'observador intern de l'input, que refresca la posició de la label quan s'afegeix un nou valor,
no s'està executant.`}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Solució:"})}),`
`,e.jsx(r.p,{children:`Utilitzeu la nova propietat value, que actua com un listener per detectar directament quan s'ha modificat el valor i així restablir la posició dels
elements del component. Per evitar afegir complexitat a les iniciatives, el valor es pot capturar directament des del mateix formulari reactiu de la
manera següent:`}),`
`,e.jsx(c,{code:`
  <dss-datepicker 
    [value]="myForm.get('date')?.value"
    (onValueChange)="onDatepickerChange($event)">
    <label slot="label" for="myDatepicker">Datepicker</label>
    <input slot="input" id="myDatepicker" type="text" formControlName="date"/>
  </dss-datepicker>
`}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Versió"}),e.jsx(r.th,{children:"Canvis"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"2.7.0"})}),e.jsx(r.td,{children:"S'ha modificat la navegació amb teclat dins del calendari per complir amb els requisits d'accessibilitat, eliminant la navegació entre els dies amb la tecla de tabulació i afegint el moviment amb les fletxes de direcció."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"2.5.1"})}),e.jsxs(r.td,{children:["S'ha afegit la funcionalitat de validació de dates en tancar el calendari. S'activa afegint la propietat ",e.jsx(r.code,{children:"validate"}),"."]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"2.5.0"})}),e.jsxs(r.td,{children:["S'ha afegit la propietat ",e.jsx(r.code,{children:"customCalendar"})," que permet personalitzar els dies del calendari."]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"2.0.0"})}),e.jsx(r.td,{children:"Refactor v2."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"1.12.2"})}),e.jsxs(r.td,{children:["S'ha afegit la propietat value per resoldre un problema amb els formularis reactius d'Angular. ",e.jsx("br",{})," S'ha corregit un error pel qual el component no detectava quan s'eliminava l'estat de només lectura de l'input dinàmicament."]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"1.10.0"})}),e.jsx(r.td,{children:"S'ha corregit un error en el calendari pel qual el selector de dia se solapava amb el selector de mes i any."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"1.9.0"})}),e.jsx(r.td,{children:"S'ha corregit el font-family per a alguns elements mostrats al calendari, que no estaven alineats amb el disseny del mateix."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"1.8.2"})}),e.jsx(r.td,{children:"S'ha afegit un espai al final del dropdown del calendari perquè la sobra no talli en els casos d'ús on el datepicker es mostra al final d'un component o pàgina."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"1.8.1"})}),e.jsxs(r.td,{children:["S'ha corregit un error pel qual, en el cas de tenir un selector d'hora, no s'habilitava el botó d'acceptar-la si l'hora o minuts definits eren '00'.",e.jsx("br",{}),"S'ha solucionat un error pel qual els estats disable o readonly no es tenien en compte en fer click a la label, cosa que permetia obrir el calendari."]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"1.5.1"})}),e.jsx(r.td,{children:"S' ha modificat el selector de mes i any per facilitar-ne la interacció. Ara tant en fer click el mes o any mostrat al calendari s'obrirà una nova opció per canviar-los manualment, sense haver de recórrer un a un tots els mesos amb l'ús de les fletxes."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"1.5.0"})}),e.jsx(r.td,{children:"S'ha modificat la funcionalitat de seleccionar una hora dins del datepicker, passant a utilitzar el component timepicker amb les seves diferents possibilitats."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"1.4.1"})}),e.jsx(r.td,{children:"Refactor: reemplaça a l'actual Date-Picker"})]})]})]})]})}function E(n={}){const{wrapper:r}={...a(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{E as default};
