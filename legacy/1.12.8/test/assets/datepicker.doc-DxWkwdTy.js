import{ae as e,af as l,ag as d,ah as r,ai as a,ak as c}from"./index-CDPkb5lb.js";import{u as t}from"./index-7kIC0twn.js";import{S as o,P as h,a as x,D as j,R as p,b as u,I as m,T as g,B as b}from"./datepicker.stories-mCkCyCoY.js";import"./iframe-F_M-3TUD.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./lit-element-DhY7bShc.js";import"./lit-html-B2eaWknC.js";import"./datepicker-DkpLFocn.js";import"./property-DnLABHHV.js";import"./icon.style-DPTab5RN.js";import"./property-types-CkH-zh1n.js";import"./button.style-2dqsCQot.js";import"./class-map-BDeD7Kfm.js";import"./static-B9bHPl91.js";import"./custom-element-scope-Dp4Dg8bo.js";import"./popper-CMBiYTiD.js";function i(s){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
`,e.jsx(l,{of:o}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(d,{}),e.jsx("dss-badge",{text:"dss-datepicker",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(n.p,{children:`El component datepicker ofereix als usuaris una entrada senzilla per
a un formulari, ajuda als usuaris a seleccionar una sola data. Per utilitzar
aquest component en angular cal fer servir la directiva adjuntada.`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Àmbit"}),e.jsx(n.th,{children:"Condition"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"inputSize"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"lg"}),e.jsx(n.td,{children:"Mida de l'input: Pot tenir els valors 'md' o 'lg'. Per defecte tindrà sempre el valor 'lg'"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"icon"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"'search'"}),e.jsx(n.td,{children:"Modifica la icona situada a l'esquerra del datepicker."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"helpText"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Text d’ajuda que es mostrarà sota del component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"invalid"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"En definir aquesta propietat el component s mostrarà amb un estil d’error per tal de diferenciar-los de la resta."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"minDate"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Definiu la data mínima que podríem seleccionar al calendari."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"maxDate"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Definiu la data màxima que podríem seleccionar al calendari."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"showButtons"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Activeu els buttos per a cancel·lar o acceptar la data seleccionada al calendari."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"leftLabel"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"'Cancel·lar'"}),e.jsx(n.td,{children:"Text que es mostra dins del botó esquerre."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"rightLabel"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"'Seleccionar'"}),e.jsx(n.td,{children:"Text que es mostra dins del botó dret."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"showTime"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Activa l'element selector de temps dins del component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"timepicker"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Fa que el timipicker mostri un dropdown desplegable en el qual podrem escollir una hora. Aquest dropdown té dues variants diferents: - 'list': mostrarà un llistat d’hores disponibles. - 'manual': permet seleccionar l’hora i els minuts per separat."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"minutesRange"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"number"}),e.jsx(n.td,{children:"1"}),e.jsx(n.td,{children:"Interval transcorregut entre els minuts que es mostraran en les opcions del dropdown. Per exemple, podem utilitzar-lo si volem que l'hora es mostri cada 5, 10 o 15 minuts en comptes de minut a minut."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"minHour"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"number"}),e.jsx(n.td,{children:"0"}),e.jsx(n.td,{children:"Hora d’inici per a les opcions disponibles del dropdown."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"maxHour"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"number"}),e.jsx(n.td,{children:"23"}),e.jsx(n.td,{children:"Hora final per a les opcions disponibles del dropdown."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"customTimeListOptions"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"DssTimepickerOption[]"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Llistat personalitzat d'hores disponibles que es mostraran en el dropdown. Quan es defineixi aquesta propietat el valor de dropdown ha de ser sempre 'list' i les propietats minutesRange, minHour i maxHour quedaran sense efecte."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"timepickerLabel"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"'Selecciona l'hora'"}),e.jsx(n.td,{children:"Modifica el text que es mostra com a placeholder dins de l'element timepicker."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"value"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsxs(n.td,{children:["Aquesta propietat només és necessària per solucionar un problema en els formularis reactius d'Angular pel qual es produeix un solapament entre la label i el value de l'input en assignar el valor de manera externa.",e.jsx("br",{}),"Vegeu la secció de resolució de problemes."]})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onValueChange"})}),e.jsx(n.td,{children:"Esdeveniment que retornarà la data seleccionada dins del component."})]})})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"custom-timepicker-option",children:"Custom Timepicker Option"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Àmbit"}),e.jsx(n.th,{children:"Condition"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"value"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Requerida"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Hora en format HH:mm, per exemple 22:30"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"state"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Requerida"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Estat que identificarà si l'hora marcada està disponible o no. Els valors que pot tenir aquesta propietat són: 'disponible' o 'ocupat'"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#mida",children:"Mida"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#nom%C3%A9s-lectura",children:"Només lectura"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#requerit",children:"Requerit"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#invalid",children:"Invalid"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-temps",children:"Amb temps"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-botons",children:"Amb botons"})}),`
`]}),`
`,e.jsx(n.h3,{id:"mida",children:"Mida"}),`
`,e.jsxs(n.p,{children:[`Hi ha dos tipus de mesura, el mitjà i el petit, per defecte es mostra el
mitjà, si volem mostrar el petit hem d'afegir la propietat `,e.jsx(n.strong,{children:"small"}),` al
component.`]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h3,{id:"deshabilitat",children:"Deshabilitat"}),`
`,e.jsxs(n.p,{children:[`Per indicar que l'input es troba deshabilitat, cal afegir la propietat
`,e.jsx(n.strong,{children:"disabled"})," al component."]}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h3,{id:"només-lectura",children:"Només lectura"}),`
`,e.jsxs(n.p,{children:[`Per indicar que l'input es troba només lectura, cal afegir la propietat
`,e.jsx(n.strong,{children:"readonly"})," al component."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h3,{id:"requerit",children:"Requerit"}),`
`,e.jsxs(n.p,{children:["Per indicar que l'input és obligatori, cal afegir la propietat ",e.jsx(n.strong,{children:"required"}),` a
l'input.`]}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsxs(n.p,{children:["Per indicar que l'input és invalid, cal afegir la propietat ",e.jsx(n.strong,{children:"invalid"}),` al
component amb la validació que sigui necessària.`]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h3,{id:"amb-temps",children:"Amb temps"}),`
`,e.jsxs(n.p,{children:["Per indicar que el date-picker mostri temps, cal afegir la propietat ",e.jsx(n.strong,{children:"showTime"})," al component."]}),`
`,e.jsx(n.p,{children:"Pots escollir entre tres tipus de timepicker: sense dropdown (per defecte, no cal definir-ho), dropdown de tipus llista (timepicker='list') o dropdown de tipus manual (timepicker='manual')."}),`
`,e.jsx(n.p,{children:"A més es pot configurar el timepicker utilitzant les propietats pròpies del component: minutesRange, minHour, MaxHour i customTimeListOptions."}),`
`,e.jsxs(n.p,{children:["Veure ",e.jsx(n.a,{href:"/docs/components-timepicker--exemple",children:"documentació del componente timepicker"}),"."]}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h3,{id:"amb-botons",children:"Amb botons"}),`
`,e.jsxs(n.p,{children:[`Per indicar que el date-picker mostri botons, cal afegir la propietat
`,e.jsx(n.strong,{children:"showButtons"})," al component, també indicar el ",e.jsx(n.strong,{children:"leftLabel"}),` i el
`,e.jsx(n.strong,{children:"rightLabel"}),` per canviar els valors per defecte dels botons si cal. Per
defecte, els botons mostren `,e.jsx(n.strong,{children:"Cancel·lar"})," i ",e.jsx(n.strong,{children:"Acceptar"}),"."]}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(n.h2,{id:"resolució-de-problemes",children:"Resolució de problemes"}),`
`,e.jsx(n.h3,{id:"el-valor-del-datepicker-no-sactualitza-en-angular-form",children:"El valor del datepicker no s'actualitza en Angular Form"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Problema:"})}),`
`,e.jsxs(n.p,{children:[`S'ha afegit la funcionalitat per a poder detectar aquest component des de formularis reactius, no obstant això, s'ha detectat que quan l'usuari tria una data
fent clic en el calendari no s'actualitza el valor dins del form control per al camp de data.`,e.jsx("br",{})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Solució:"})}),`
`,e.jsxs(n.p,{children:["Es recomana capturar la data triada des del calendari mitjançant l'esdeveniment 'onValueChange' emès en el component ",e.jsx(n.code,{children:"dss-date-picker"}),` i posteriorment
utilitzar el mètode `,e.jsx(n.code,{children:"setValue"})," per a assignar el valor manualment al camp de data."]}),`
`,e.jsx(n.h3,{id:"label-i-input-solapats-en-assignar-un-valor-en-els-formularis-reactius-dangular",children:"Label i input solapats en assignar un valor en els formularis reactius d'Angular."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Problema:"})}),`
`,e.jsx(n.p,{children:`S'ha detectat un problema en utilitzar el component en formularis reactius d'Angular, on, en actualitzar el component des d'Angular,
el DOM no s'actualitza directament, de manera que l'observador intern de l'input, que refresca la posició de la label quan s'afegeix un nou valor,
no s'està executant.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Solució:"})}),`
`,e.jsx(n.p,{children:`Utilitzeu la nova propietat value, que actua com un listener per detectar directament quan s'ha modificat el valor i així restablir la posició dels
elements del component. Per evitar afegir complexitat a les iniciatives, el valor es pot capturar directament des del mateix formulari reactiu de la
manera següent:`}),`
`,e.jsx(c,{code:`
  <dss-datepicker 
    [value]="myForm.get('date')?.value"
    (onValueChange)="onDatepickerChange($event)">
    <label slot="label" for="myDatepicker">Datepicker</label>
    <input slot="input" id="myDatepicker" type="text" class="dss-input" formControlName="date"/>
  </dss-datepicker>
`}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Versió"}),e.jsx(n.th,{children:"Canvis"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.0"})}),e.jsx(n.td,{children:"Refactor v2."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.12.2"})}),e.jsxs(n.td,{children:["S'ha afegit la propietat value per resoldre un problema amb els formularis reactius d'Angular. ",e.jsx("br",{})," S'ha corregit un error pel qual el component no detectava quan s'eliminava l'estat de només lectura de l'input dinàmicament."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.10.0"})}),e.jsx(n.td,{children:"S'ha corregit un error en el calendari pel qual el selector de dia se solapava amb el selector de mes i any."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.9.0"})}),e.jsx(n.td,{children:"S'ha corregit el font-family per a alguns elements mostrats al calendari, que no estaven alineats amb el disseny del mateix."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.8.2"})}),e.jsx(n.td,{children:"S'ha afegit un espai al final del dropdown del calendari perquè la sobra no talli en els casos d'ús on el datepicker es mostra al final d'un component o pàgina."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.8.1"})}),e.jsxs(n.td,{children:["S'ha corregit un error pel qual, en el cas de tenir un selector d'hora, no s'habilitava el botó d'acceptar-la si l'hora o minuts definits eren '00'.",e.jsx("br",{}),"S'ha solucionat un error pel qual els estats disable o readonly no es tenien en compte en fer click a la label, cosa que permetia obrir el calendari."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.5.1"})}),e.jsx(n.td,{children:"S' ha modificat el selector de mes i any per facilitar-ne la interacció. Ara tant en fer click el mes o any mostrat al calendari s'obrirà una nova opció per canviar-los manualment, sense haver de recórrer un a un tots els mesos amb l'ús de les fletxes."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.5.0"})}),e.jsx(n.td,{children:"S'ha modificat la funcionalitat de seleccionar una hora dins del datepicker, passant a utilitzar el component timepicker amb les seves diferents possibilitats."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.4.1"})}),e.jsx(n.td,{children:"Refactor: reemplaça a l'actual Date-Picker"})]})]})]})]})}function E(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{E as default};
