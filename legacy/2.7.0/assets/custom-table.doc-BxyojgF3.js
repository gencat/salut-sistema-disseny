import{j as e,M as t,T as d,C as l,S as a}from"./index-DFUKtqtU.js";import{useMDXComponents as r}from"./index-BVJxqH-I.js";import{C as c,P as o,R as h,A as x,H as j,S as u,a as m,T as p,b,c as g,d as f,e as v,f as q,g as S,h as T,i as y,j as k,k as z}from"./custom-table.stories-B3Mb6Hqy.js";import"./iframe-pHR0vHcf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function i(n){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .table-wrapper {
      width: 900px;
      height: 600px;
    }
    .table-wrapper--sm {
      height: 400px;
    }
  `}),`
`,e.jsx(t,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(d,{}),e.jsx("dss-badge",{text:"dss-custom-table",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:`Les Taules mostren informació en un format de quadrícula de files i columnes.
Organitzen la informació de manera que sigui fàcil d'escanejar perquè els
usuaris puguin buscar patrons i desenvolupar informació a partir de les dades.`}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest component sorgeix de la fusió entre els antics dss-table i table-css per donar una major flexibilitat a l'hora de fer les taules."}),`
`]}),`
`,e.jsx(s.p,{children:`Una part del component està creada com a Web Component per afegir funcionalitats i esdeveniments com la paginació, sorting o navegació per teclat.
Mentre que l' altra part s' ha d' implementar com a slot, utilitzant HTML i CSS el que ens permet simplificar la interacció amb els elements clicables
especialment dins de cada fila.`}),`
`,e.jsx(s.p,{children:"L' estructura del component seria per tant:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Header"}),": Secció que inclou principalment l' àrea per visualitzar els filtres definits fora del component. També conté la funcionalitat per ampliar o reduir la taula i per obrir/tancar el drawer."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Body"}),": Slot on injectarem la taula en format HTML/CSS, sense incloure la capçalera de les columnes que es generarà dinàmicament."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Footer"}),": Secció que inclou la paginació i les accions en cas de tractar-se d' una taula amb multiselecció."]}),`
`]}),`
`,e.jsxs(s.p,{children:["El selector per poder utilitzar la taula és ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"dss-custom-table"})}),"."]}),`
`,e.jsx(l,{of:o}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Nota"}),": Les funcionalitats sobre el contingut de la taula no poden aplicar-se directament sobre el slot a Storybook, per la qual cosa haurà de capturar els esdeveniments en la seva aplicació i actualitzar les dades que es renderitzen en aquest slot. Pot veure un exemple complet del component en la ",e.jsx(s.a,{href:"https://git.intranet.gencat.cat/3609/dss-demo-angular",rel:"nofollow",children:"demo Angular"}),"**."]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Checkbox multiselect"}),": Tingui en compte que la classe dss-checkbox.dss-checkbox--multiselect és utilitzada internament pel component per comptar el nombre de files seleccionades. Recordi mantenir aquesta classe a l'input encara que hagi migrat al nou component dss-checkbox."]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"flux-de-dades",children:"Flux de dades"}),`
`,e.jsx(s.p,{children:"Per desenvolupar la taula tindrem dos casos d' ús:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Les dades arriben segmentades des del backend"}),`, del qual obtenim el total d'elements i el primer bloc de dades. En aquest cas haurem d'enviar al web les propietats "data" i "totalResults" i en el slot podrem renderitzar aquestes dades seguint l'exemple. Quan s'interactui sobre el paginador l'esdeveniment ens retornarà el nou estat del mateix per trucar al backend i obtenir el següent bloc de dades (aquí haurem d'actualitzar la propietat "data"). Quan s'ordeni una columna, l'esdeveniment corresponent ens retorna tant l'estat actual de la capçalera de la taula (que indica que s'ha clicat) com el bloc de dades definit en "data" ordenats correctament per actualitzar el slot de la taula.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Les dades arriben al complet des del backend"}),`. En aquest cas només necessitem enviar al component la propietat "data", de manera que quan el component rep les dades aplicarà la paginació inicial i retornarà un esdeveniment amb el bloc de dades paginat que s'ha de mostrar dins del slot. Es recomana utilitzar aqui una segona variable on s' emmagatzemen les dades tant paginades o ordenades i que sigui aquesta variable la que s' utilitza per visualitzar el contingut de la taula en lloc del bloc de dades original.`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"dss-custom-table-header",children:"dss-custom-table: header"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hideHeader"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Si es defineix s'ocultarà la capçalera de la taula."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"tableTitle"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'Title'"}),e.jsx(s.td,{children:"Títol mostrat a la capçalera de la taula."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"tableInfo"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Informació mostrat a la capçalera de la taula."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"filters"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string[]"})}),e.jsx(s.td,{children:"[]"}),e.jsx(s.td,{children:"Filtres aplicats prèviament a la taula. En cas d' interacció amb els mateixos, el component notificarà mitjançant esdeveniment que hi va haver un canvi i que s' ha de tornar a aplicar un nou filtratge fora de la taula."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"innerFilters"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Canvia la capçalera per defecte a una versió on es poden incloure els filtres a traves d' un slot. L' aplicació d' aquests filtres s' ha d' executar fora del component."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"expandTable"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Permet mostrar tots els elements de la taula quan es renderitza el component. Per defecte la taula mostra la meitat d' elements afegint scroll vertical."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"expandLabel"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'Ampliar'"}),e.jsx(s.td,{children:"Text mostrat al botó d'interacció per ampliar el nombre d' elements visibles a la taula."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"collapseLabel"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'Reduir'"}),e.jsx(s.td,{children:"Text mostrat al botó d'interacció per reduir el nombre d' elements visibles a la taula."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"filtersLabel"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'Selecció'"}),e.jsx(s.td,{children:"Text mostrat al botó d'interacció per obrir un component extern on s' alleugereixen els filtres."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"cleanFiltersLabel"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'Netejar filtres'"}),e.jsx(s.td,{children:"Text mostrat al botó d' interacció per eliminar tots els filtres seleccionats."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"noFiltersLabel"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'No hi ha filtres seleccionats'"}),e.jsx(s.td,{children:"Text mostrat quan no hi ha cap filtre seleccionat."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hideHeaderTitleAndExpand"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Amaga tota la fila de la capçalera on es mostra el títol i el botó d'expandir la taula en cas que només calgui utilitzar els filtres."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"showConfig"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Mostra el botó de configuració."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"configTableLabel"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'Configurar taula'"}),e.jsx(s.td,{children:"Label del botó de configuració."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hideActionExpand"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Oculta el botó d'ampliar/reduir."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"showActionFilters"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Mostra el botó per obrir els filtres."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"filtersVariant"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'drawer'"}),e.jsx(s.td,{children:"Canvia el tipus de desplegable en què es mostren els filtres. Pot ser: drawer o popover. Si es defineix popover, cal afegir el contingut del popover a través de l’slot filters-popover-body."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"filtersPopoverTitle"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"''"}),e.jsx(s.td,{children:"Títol a mostrar al popover de filtres."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"jcef"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Sobreescriu els breakpoints de cada component intern per l‟espai real disponible en iniciatives que es visualitzen dins de l‟ECAP a través de l‟aplicació JCEF."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"filtersPopoverFixed"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Corregeix errors de posicionament o visualització indesitjats del popover per a filtres. Per exemple a layout on l'espai per a la taula estigui limitat amb un overflow:hidden."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"customActions"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Habilita un slot per afegir accions personalitzades dins de la zona de configuració de la capçalera."})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"dss-custom-table-table",children:"dss-custom-table: table"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["columnsHeader",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"ColumnHeader[]"})}),e.jsx(s.td,{children:"[]"}),e.jsx(s.td,{children:"Llistat de columnes que conté la taula i la configuració per a cadascuna."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["data",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"Object[]"})}),e.jsx(s.td,{children:"[]"}),e.jsx(s.td,{children:"Dades sobre les quals s'aplicaran les funcionalitats del component."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"totalResults"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Nombre de dades totals quan l'objecte ja arriba segmentat des del mateix backend. Si aquesta propietat està activa, l'esdeveniment de paginació només retornarà les opcions del paginador perquè es torni a trucar al backend per obtenir el següent segment de dades."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"multiselect"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Habilita la columna de tipus checkbox per seleccionar diverses files."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"radioselect"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Habilita la columna de tipus ràdio per seleccionar una fila."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"selectedRowsLabel"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'files seleccionades'"}),e.jsx(s.td,{children:"Text mostrat al footer per definir les files seleccionades."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"selectedRowsLabel"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'files seleccionades'"}),e.jsx(s.td,{children:"Text mostrat al footer per definir les files seleccionades."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"fixedColumnsBefore"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Defineix el nombre de columnes que quedaran fixes a l'inici (esquerra) de la taula."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"fixedColumnsAfter"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Defineix el nombre de columnes que quedaran fixes al final (dreta) de la taula."})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"columnheader",children:"ColumnHeader"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["column",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Nom de la propietat corresponent a l'objecte. Exemple: objecte = name: 'xxx' => columnHeader => column: 'name'"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["label",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Nom de la propietat corresponent a l'objecte."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"style"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Estil personalitzat de la capçalera de la columna."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"align"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Alineament del text dins de la capçalera de la columna."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"sortType"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"'number' o 'date' o 'string'"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Tipus de dades que contindrà la columna. Si aquesta propietat no està definida, no s'habilitarà la funció d'ordenar la columna."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"sortOrder"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"'asc' o 'desc' o 'none'"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Estat actual de lordenació de la columna. Aquesta propietat no s'ha d'incloure la primera vegada que es renderitza el component. Només cal definir-lo en cas que vulguem recuperar l'estat de l'ordenació anterior en navegar entre pàgines."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"srOnly"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Oculta visualment el text del 'th', però el deixa habilitat per als lectors de pantalla, solucionant així un error d'accessibilitat."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"highlight"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Canvia l’estil de la cel·la th a ressaltat."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"renderTemplate"})}),e.jsx(s.td,{children:"`HTMLElement"}),e.jsx(s.td,{children:"TemplateResult`"}),e.jsx(s.td,{children:"-"})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"dss-custom-table-pagination",children:"dss-custom-table: pagination"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hideFooter"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Si aquesta propietat està definida, el paginador i l'àrea de descripció i accions s'amagaran sobre les files seleccionades."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hidePaginator"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Si aquesta propietat està definida s'amagarà el paginador."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"currentIndex"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number"})}),e.jsx(s.td,{children:"1"}),e.jsx(s.td,{children:"Pàgina per defecte en què se situarà el paginador."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"pageSizeOptions"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number[]"})}),e.jsx(s.td,{children:"[5,10,20]"}),e.jsx(s.td,{children:"Opcions disponibles per modificar la mida de pàgina."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"pageSizeOptionsDisabled"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Permet deshabilitar el selector de mida de pàgina."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"resultsLabel"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"Resultats"}),e.jsx(s.td,{children:"Text mostrat pel nombre de resultats mostrats a la taula."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"rowsPerPageLabel"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"Files per página"}),e.jsx(s.td,{children:"Text mostrat per a files per pàgina."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hidePaginationResults"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Permet amagar el nombre de resultats total de la taula."})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onPaginate"})}),e.jsx(s.td,{children:"Esdeveniment que tornarà les opcions actuals del paginador. Si la propietat totalResults no està definida també es tornarà el segment de dades que s'ha de renderitzar dins de l'slot."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onSort"})}),e.jsx(s.td,{children:"Esdeveniment que tornarà l'ordenació de les dades juntament amb l'estat de l'objecte 'columnsHeader'"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onExpandTable"})}),e.jsx(s.td,{children:"Esdeveniment que notificarà a l'usuari que s' ha fet click en el botó d'ampliar o reduir la taula."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onConfigTable"})}),e.jsx(s.td,{children:"Notifica quan es fa clic al botó de configurar taula."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onOpenDrawer"})}),e.jsx(s.td,{children:"Esdeveniment que notificarà a l'usuari que s' ha fet click al botó per obrir el selector de filtres (drawer) fora del component."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onUpdateFilters"})}),e.jsx(s.td,{children:"Esdeveniment que notificarà que s'han eliminat algun dels filtres des de la pròpia taula. L'esdeveniment retorna un objecte amb els filtres actuals perquè l'usuari torni a aplicar la funcionalitat."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onMultiselect"})}),e.jsx(s.td,{children:"Esdeveniment que notificarà que s'ha premut al checkbox per seleccionar totes les files."})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"css",children:"CSS"}),`
`,e.jsx(s.p,{children:"Finalment el contingut de la taula s'injecta al web component a través d'un slot, la qual cosa ens permet donar-li aparença a través de CSS. D'aquesta manera pot utilitzar les classes definides per defecte per a la taula i/o sobreescriure aquells aspectes que necessiti en l'aplicació final."}),`
`,e.jsx(s.h3,{id:"estils-per-defecte",children:"Estils per defecte"}),`
`,e.jsx(a,{code:`
      <div class="dss-table-container" slot="table">
          <table class="dss-custom-table">
            <tbody>
              <tr class="dss-tbody-row">
                <td class="dss-td">
                    ...
                </td>
                ...
              </tr>
              ...
            </tbody>
          </table>
        </div>
        <div class="table-footer-actions" slot="footer-actions">
          ...
        </div>
      </div>
    `}),`
`,e.jsx(s.h3,{id:"estils-sobre-files",children:"Estils sobre files"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Estados"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"dss-tbody-row--selected"}),": background: --color-primary-50"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"dss-tbody-row--deleted"}),": background: --color-red-50"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"dss-tbody-row--disabled"}),": background: --color-neutral-50 / color: --color-neutral-500"]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Contenido anidado"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"dss-tbody-row--expanded"}),": Àmplia l' alçada de la fila i permet definir un td amb colspan que ocupi tot l' ample de la taula."]}),`
`]}),`
`,e.jsx(l,{of:h}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"estils-sobre-columnes",children:"Estils sobre columnes"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Text Align:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"dss-td--align-right"}),": text-align: right."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"dss-td--align-center"}),": tex-align: right."]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Font Weight:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"dss-td--font-bold"}),": font-weight: bold / color: neutral-700"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"dss-td--font-black"}),": font-weight: bold / color: neutral-900"]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Td Content:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"dss-td-content"}),": crea un div amb display:inline-flex dins la cel·la per poder mostrar el valor de la columna acompanyat d'una icona o badge."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"dss-td-content--sm"}),": redueix el gap entre els elements dins del div.dss-td-content."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"dss-td-content__value"}),": usar aquesta classe dins del div.dss-td-content limita a dues línies l' alçada màxima de la cel·la."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"dss-checkbox--multiselect"}),": per diferenciar el checkbox de selecció de fila amb el d' estat revisat i poder seleccionar mitjançant navegació per teclat."]}),`
`]}),`
`,e.jsx(a,{code:`
     ...
      <td class="dss-td">
          <div class="dss-td-content">
             <input type="checkbox" class="dss-checkbox dss-checkbox--multiselect" aria-label="Seleccionar la fila"/>
          </div>
      </td>
      <td class="dss-td dss-td--align-center dss-td--font-bold">
          <div class="dss-td-content dss-td-content--sm">
            <dss-icon size="md" icon="123"></dss-icon>
            <span class="dss-td-content__value">John Doe</span>
          </div>
      </td>
     ...
    `}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.p,{children:["Si necessita veure les variants de la capçalera de la taula, visiti la pàgina ",e.jsx(s.a,{href:"/docs/components-custom-table-header--docs",children:"Custom Table Header"}),"."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#taula-amb-cap%C3%A7alera-alternativa-per-a-filtres",children:"Taula amb capçalera alternativa per a filtres"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#taula-amb-scroll-horitzontal",children:"Taula amb scroll horitzontal"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#taula-amb-sticky-columns-css",children:"Taula amb sticky columns CSS"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#taula-amb-sticky-columns-lit",children:"Taula amb sticky columns LIT"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#taula-amb-al%C3%A7ada-sm-40px",children:"Taula amb alçada SM (40px)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#taula-amb-al%C3%A7ada-auto-min40px-max56px",children:"Taula amb alçada auto (min:40px - max: 56px)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#taula-amb-grid",children:"Taula amb grid"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#taula-amb-divisorpersonalitzat",children:"Taula amb divisor personalitzat"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#taula-amb-files-niades",children:"Taula amb files niades"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#taula-amb-columnes-ressaltades",children:"Taula amb columnes ressaltades"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#taula-amb-cellhover",children:"Taula amb cell:hover"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#taula-amb-singleline",children:"Taula amb cell:single-line"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#taula-amb-corner-action",children:"Taula amb corner action"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#taula-amb-th-personalitzat",children:"Taula amb th personalitzat"})}),`
`]}),`
`,e.jsx(s.h3,{id:"taula-amb-capçalera-alternativa-per-a-filtres",children:"Taula amb capçalera alternativa per a filtres"}),`
`,e.jsx(s.p,{children:"Afegir la propietat 'innerFilters'. Es recomana utilitzar el component input-dropdown per afegir selectors de filtres."}),`
`,e.jsxs(s.p,{children:["Si en utilitzar aquesta variant apareixen errors en el posicionament del desplegable per als components input-dropdown, afegeix-los la propietat ",e.jsx(s.code,{children:"dropdownFixed"})," en aquests elements.."]}),`
`,e.jsx(l,{of:x}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"taula-amb-scroll-horitzontal",children:"Taula amb scroll horitzontal"}),`
`,e.jsxs(s.p,{children:["Utilitzar la classe ",e.jsx(s.code,{children:"dss-custom-table dss-custom-table--max-content-width"}),` per habilitar l' overflow horitzontal de la taula.
Amb aquesta opció podem ajustar manualment l' ample de les columnes amb la propietat 'columHeader > style'.`]}),`
`,e.jsx(l,{of:j}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"taula-amb-sticky-columns-css-discontinuada",children:"Taula amb sticky columns CSS (discontinuada)"}),`
`,e.jsxs(s.p,{children:["Combinar la classe ",e.jsx(s.code,{children:"dss-custom-table--max-content-width"})," amb ",e.jsx(s.code,{children:"dss-custom-table--sticky-columns-default"})," per fixar la posició de la primera i última columnes. Això provoca que la fila amb els títols de les columnes deixi d'estar fixa durant l'scroll."]}),`
`,e.jsxs(s.p,{children:["En cas de tenir una taula amb multiselect haurà de reemplaçar la classe default per una de les següents ",e.jsx(s.code,{children:"dss-custom-table--sticky-columns-multiselect"})," o ",e.jsx(s.code,{children:"dss-custom-table--sticky-columns-radioselect"}),"."]}),`
`,e.jsx(l,{of:u}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"taula-amb-sticky-columns-lit",children:"Taula amb sticky columns LIT"}),`
`,e.jsx(s.p,{children:"Aquesta funcionalitat permet definir de manera dinàmica el nombre de columnes que es fixaran tant a l'esquerra com a la dreta de la taula utilitzant propietats del component."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Important"}),": per evitar conflictes, assegureu-vos que s'han eliminat les classes de la modalitat sticky column CSS."]}),`
`,e.jsx(l,{of:m}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"taula-amb-alçada-sm-40px",children:"Taula amb alçada SM (40px)"}),`
`,e.jsxs(s.p,{children:["Aplicant la classe ",e.jsx(s.strong,{children:"dss-custom-table--height-sm"})," a la taula, es redueix l'alçada de les cel·les a 40px."]}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:'<table class="dss-custom-table dss-custom-table--height-sm">'})}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(s.h3,{id:"taula-amb-alçada-auto-min40px---max-56px",children:"Taula amb alçada auto (min:40px - max: 56px)"}),`
`,e.jsxs(s.p,{children:["Aplicant la classe ",e.jsx(s.strong,{children:"dss-custom-table--height-auto"}),", les cel·les passen a tenir una alçada dinàmica que va des d'un mínim de 40px fins a un màxim de 56px, en funció del contingut de les cel·les."]}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:'<table class="dss-custom-table dss-custom-table--height-auto">'})}),`
`,e.jsx(l,{of:b}),`
`,e.jsx(s.h3,{id:"taula-amb-grid",children:"Taula amb grid"}),`
`,e.jsx(s.p,{children:"Aplicant la classe grid, la taula canvia al format grid, on totes les cel·les mostraran una vora. La vora superior de la taula no s'inclou perquè vindrà definit segons el cas d'ús pel component immediatament anterior, per exemple un dss-tabs"}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:'<table class="dss-custom-table dss-custom-table--grid">'})}),`
`,e.jsx(l,{of:g}),`
`,e.jsxs(s.p,{children:[`Elimina el divisor superior de la graella afegint el modificador dss-custom-table--grid-hide-divider:
`,e.jsx(s.code,{children:'<table class="dss-custom-table dss-custom-table--grid dss-custom-table--grid-hide-divider">'})]}),`
`,e.jsx(l,{of:f}),`
`,e.jsx(s.h3,{id:"taula-amb-divisor-personalitzat",children:"Taula amb divisor personalitzat"}),`
`,e.jsx(s.p,{children:"S'han afegit diverses modalitats de divideix per obtenir un estil més flexible a l'hora de desenvolupar les taules. Aquests estils es podran aplicar sobre les files (tr) o cel·les (td)"}),`
`,e.jsx(s.p,{children:"Teniendo en compte que els divisors es defineixen com a border-top quan una fila (tr) es troba una fila anterior, tenim:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"dss-tbody-row--divider-dark"}),": canvia el color del border a neutral-900"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"dss-tbody-row--hide-divider"}),": amaga el border de la fila"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"dss-td--divider"}),": defineix un border-top específic per a una cel·la"]}),`
`]}),`
`,e.jsx(l,{of:v}),`
`,e.jsx(s.h3,{id:"taula-amb-files-niades",children:"Taula amb files niades"}),`
`,e.jsxs(s.p,{children:["La classe ",e.jsx(s.strong,{children:"ds-tbody-row--nested"})," afegeix un border-left a la primera cel·la (td) de les files niades per donar la sensació que formen un mateix grup de files."]}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:'<tr class="dss-tbody-row dss-tbody-row--nested">'})}),`
`,e.jsx(l,{of:q}),`
`,e.jsx(s.h3,{id:"taula-amb-columnes-ressaltades",children:"Taula amb columnes ressaltades"}),`
`,e.jsx(s.p,{children:"Per ressaltar una columna, s’hauran de dur a terme dues accions:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["th: es definirà a través de l’objecte columnHeader afegint l’atribut ",e.jsx(s.strong,{children:"highlight: true"})," a la columna desitjada."]}),`
`,e.jsxs(s.li,{children:["td: cal afegir la classe CSS ",e.jsx(s.strong,{children:"dss-td--highlight"})," a cada cel·la que coincideixi amb la columna desitjada."]}),`
`]}),`
`,e.jsx(l,{of:S}),`
`,e.jsx(s.h3,{id:"taula-amb-cellhover",children:"Taula amb cell:hover"}),`
`,e.jsxs(s.p,{children:["La classe ",e.jsx(s.strong,{children:"dss-custom-table--cell-hover"})," modifica el format de la taula perquè, en lloc de fer hover sobre tota la fila, es passi a tenir un hover individual per a cada cel·la."]}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:'<table class="dss-custom-table dss-custom-table--cell-hover">'})}),`
`,e.jsx(l,{of:T}),`
`,e.jsx(s.h3,{id:"taula-amb-cellsingle-line",children:"Taula amb cell:single-line"}),`
`,e.jsxs(s.p,{children:["La classe ",e.jsx(s.strong,{children:"dss-td-content--single-line"})," modifica el límit de línies del contingut de les cel·les, que per defecte és 2, a només una única fila."]}),`
`,e.jsx(l,{of:y}),`
`,e.jsx(s.h3,{id:"taula-amb-corner-action",children:"Taula amb corner action"}),`
`,e.jsx(s.p,{children:"S’ha afegit la possibilitat de marcar una cel·la amb una corner-action per avisar l’usuari que en aquesta cel·la hi ha dades o comentaris d’interès."}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:'<td class="dss-td dss-td--corner-action">'})}),`
`,e.jsx(l,{of:k}),`
`,e.jsx(s.h3,{id:"taula-amb-th-personalitzat",children:"Taula amb th personalitzat"}),`
`,e.jsxs(s.p,{children:["S’ha habilitat un atribut ",e.jsx(s.code,{children:"renderTemplate"})," per a l’objecte ",e.jsx(s.strong,{children:"columnHeader"}),", que permet crear una funció que retorni un HTMLElement, de manera que, si aquesta propietat es defineix, substituirà el codi generat dinàmicament pel web component."]}),`
`,e.jsx(s.p,{children:"En aquest cas, queda en mans de la iniciativa afegir les classes i estils CSS necessaris per fer els ajustos oportuns, com per exemple ajustar un input al 100% de la cel·la."}),`
`,e.jsx(s.p,{children:"Exemple React:"}),`
`,e.jsx(a,{code:`
    columnsHeader[1].renderTemplate = () => {
      const container = document.createElement('div');
      container.style.maxWidth = '100%';

      const handleElementRef = (el: HTMLElement | null) => {
        if (el) {
          el.addEventListener('onValueChange', handleInputChange);
        }
      };

		  const root = createRoot(container);
      root.render(
        <dss-datepicker ref={handleElementRef} inputSize="sm" style={{ width: '100%' }} >
          <input slot="input" id="myDatepicker" type="text" className="dss-input" aria-label="Age picker" />
        </dss-datepicker>
      );

      return container;
    }
    const handleInputChange = (event: Event) => {...}
  `}),`
`,e.jsx(l,{of:z}),`
`,e.jsx(s.h2,{id:"resolució-de-problemes",children:"Resolució de problemes"}),`
`,e.jsx(s.h3,{id:"issue-en-incloure-un-action-menu-a-celles-dins-duna-columna-fixada",children:"Issue en incloure un action menu a cel·les dins d'una columna fixada"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Problema:"})}),`
`,e.jsx(s.p,{children:`Les cel·les que estan fixes, ja sigui a la primera/última columna o a la capçalera de la taula, tenen un z-index: 200 amb position: sticky.
L'apilament que genera aquest estat ‘sticky’ fa que, tot i que dins hi hagi un action-menu amb z-index: 900, el navegador interpreti la cel·la
com un bloc compacte. Per tant, el z-index que es té en compte és el 200 de la pròpia cel·la i no el 900 del seu contingut intern.`}),`
`,e.jsx(s.p,{children:`Per aquest motiu, l'única part visible de l’action-menu és la que coincideix amb la seva pròpia cel·la i no amb les següents, ja que, en tenir
el mateix z-index, sempre preval la següent.`}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Solució:"})}),`
`,e.jsx(s.p,{children:`Des de la iniciativa s'ha de definir una lògica mitjançant la qual s'assigni, a la cel·la sobre la qual s'està obrint el menú en qüestió, un
z-index temporal que sigui superior al de la resta de cel·les de la columna, però inferior al del table > thead. Recomanació: z-index: 150.`}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Exemple React:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Template",`
`,e.jsx(a,{code:`
  <td className="dss-td dss-td--align-center dss-td--fix-sticky">
    <div className="dss-td-content dss-td-content--sm">
      <div className="dss-action-menu-wrapper">
        <dss-icon-button icon="more_vert" size="md" variant="primary" onClick={fixStickyCell} />
        <dss-action-menu dropdownFixed position="left-start">
          <dss-action-menu-item label="Action 1" disabled lefticon="add_box" righticon="add_box" actionicon="add_box" notifications="1"></dss-action-menu-item>
          <dss-action-menu-item label="Action 1" lefticon="add_box" notifications="1" notificationsstate="alert"></dss-action-menu-item>
          <dss-action-menu-item label="Action 1" disabled></dss-action-menu-item>
          <dss-action-menu-item label="Action 2" state="error" disabled></dss-action-menu-item>
          <dss-action-menu-item label="Action 3"></dss-action-menu-item>
        </dss-action-menu>
      </div>
      <dss-icon-button
        icon="open_in_full"
        size="md"
        variant="primary"
        onClick={() => toggleExpandedRow(row.name)}
      />
    </div>
  </td>
`}),`
`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Controller",`
`,e.jsx(a,{code:`
const fixStickyCell = (event: Event) => {	
	const currentCell = (event.target as HTMLElement).closest('.dss-td');
	currentCell?.classList.add('increased-zindex');

	const stickyCells = document.querySelectorAll('.dss-td--fix-sticky');
	for (const cell of stickyCells) {
		if (cell !== currentCell) {
			cell.classList.remove('increased-zindex');
		}
	}
}
`}),`
`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Style",`
`,e.jsx(a,{code:`
  .increased-zindex {
    z-index: 150 !important;
  }
`}),`
`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.7.0"})}),e.jsxs(s.td,{children:["S'ha afegit la propietat ",e.jsx(s.code,{children:"customActions"})," que habilitar un slot per afegir accions personalitzades dins de la zona de configuració de la capçalera."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.6.0"})}),e.jsxs(s.td,{children:["S’ha redissenyat la capçalera del component per permetre que ocupi menys espai en aquells casos d’ús en què no es mostren certs elements com el títol.",e.jsx("br",{}),"S’ha afegit l’opció de poder ocultar individualment el botó d’Ampliar.",e.jsx("br",{}),"S’ha afegit una variant per a aquest botó de filtres, que permet modificar-ne el funcionament perquè obri un popover."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.5.1"})}),e.jsxs(s.td,{children:["S'ha corregit un error a la variant grid pel qual, en fer scroll, es perdien els contorns de les cel·les.",e.jsx("br",{})," S’ha afegit la classe CSS dss-td-content--single-line per modificar el límit de línies del contingut de les cel·les, que per defecte és 2, a només una única fila."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.5.0"})}),e.jsx(s.td,{children:"S’ha corregit un error d’accessibilitat, pel qual no pot haver-hi un element th sense text, afegint l’atribut srOnly a l’objecte columnHeader, cosa que permet definir el títol de la columna però mantenint-lo ocult visualment."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.1.0"})}),e.jsxs(s.td,{children:["S'han afegit propietats per a la capçalera de la taula, que permeten afegir informació actualitzada de la taula o activar el botó de configuració.",e.jsx("br",{}),"S'ha corregit un error pel qual no es mostrava l'etiqueta del botó per ampliar o reduir la mida de la taula."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.0.0"})}),e.jsx(s.td,{children:"Refactor v2"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.9.0"})}),e.jsx(s.td,{children:"S'ha afegit una propietat disableSorting que permet deshabilitar l'opció d'ordenar qualsevol columna de la taula."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.8.2"})}),e.jsxs(s.td,{children:["S'ha corregit un error pel qual el navegador podia arribar a bloquejar-se si es feia click multitud de vegades en un checkbox per seleccionar una fila.",e.jsx("br",{}),"S'ha millorat el funcionament del checkbox multiselect perquè s'actualitzi dinàmicament en cas que l'usuari seleccioni totes les files manualment o bé desmarqui una d'elles quan estaven totes seleccionades.",e.jsx("br",{}),"S' ha modificat el missatge d' informació sobre les files seleccionades, que podia arribar a ser confús, ja que en el comptador es tenen en compte també les files seleccionades en altres pàgines de la taula.",e.jsx("br",{}),"S'ha afegit una propietat hideFooter per a aquelles casuístiques especials on es necessiti ocultar per algun motiu tant el paginador com les opcions referents a les files seleccionades en la versió multiselect."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.8.1"})}),e.jsxs(s.td,{children:["S' ha corregit un error pel qual l' ordenació de les columnes no funcionava si n' hi havia algun camp sense valor.",e.jsx("br",{}),"S'ha corregit un error pel qual la fila expandida amb classe 'tbody-row--expanded' tenia un background en estat 'hover'."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.8.0"})}),e.jsxs(s.td,{children:["S'ha corregit un error pel qual la propietat 'rowsPerPageLabel' no estava fent efecte.",e.jsx("br",{}),"S'han afegit noves propietats que permeten ocultar o modificar l'aparença d'alguns elements per a poder adaptar el component a tots els dissenys de les iniciatives. Veure propietats: hidePaginationResults, pageSizeOptionsDisabled, hideHeaderTitleAndExpand."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.7.1"})}),e.jsxs(s.td,{children:["Se ha corregido un error en el caso de uso donde los datos se paginan/segmentan desde el propio backend, que estaba produciendo un bucle infinito al modificar los datos cuando se hacia click en el paginador.",e.jsx("br",{}),"Se ha corregido un error por el que el orden de las columnas de tipo número no se mantenía al cambiar el estado del paginador."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.7.0"})}),e.jsx(s.td,{children:"S' ha creat una nova versió del component per a les taules que conté tota la funcionalitat del component anterior però permetent una major flexibilitat a l'hora de maquetar l' interior de la taula i un control total sobre la interacció amb els elements de cada fila."})]})]})]})]})}function R(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{R as default};
