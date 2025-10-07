import{j as e,M as d,T as r,C as s,S as n}from"./index-DiQ4A3nA.js";import{useMDXComponents as t}from"./index-C7ZSKJ31.js";import{S as c,P as o,R as u,A as m,H as h,a as x,b as p,T as j,c as b,d as f,e as g,f as v,g as q,h as y,i as T,j as S,k,l as z}from"./custom-table.stories-BI7uWHP_.js";import"./iframe-DhVf0-AU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";function i(l){const a={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .table-wrapper {
      width: 900px;
      height: 600px;
    }
    .table-wrapper--sm {
      height: 400px;
    }
  `}),`
`,e.jsx(d,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(r,{}),e.jsx("component-title",{children:"dss-custom-table"})]}),`
`,e.jsx(a.p,{children:`Les Taules mostren informació en un format de quadrícula de files i columnes.
Organitzen la informació de manera que sigui fàcil d'escanejar perquè els
usuaris puguin buscar patrons i desenvolupar informació a partir de les dades.`}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"Aquest component sorgeix de la fusió entre els antics dss-table i table-css per donar una major flexibilitat a l'hora de fer les taules."}),`
`]}),`
`,e.jsx(a.p,{children:`Una part del component està creada com a Web Component per afegir funcionalitats i esdeveniments com la paginació, sorting o navegació per teclat.
Mentre que l' altra part s' ha d' implementar com a slot, utilitzant HTML i CSS el que ens permet simplificar la interacció amb els elements clicables
especialment dins de cada fila.`}),`
`,e.jsx(a.p,{children:"L' estructura del component seria per tant:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Header"}),": Secció que inclou principalment l' àrea per visualitzar els filtres definits fora del component. També conté la funcionalitat per ampliar o reduir la taula i per obrir/tancar el drawer."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Body"}),": Slot on injectarem la taula en format HTML/CSS, sense incloure la capçalera de les columnes que es generarà dinàmicament."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Footer"}),": Secció que inclou la paginació i les accions en cas de tractar-se d' una taula amb multiselecció."]}),`
`]}),`
`,e.jsxs(a.p,{children:["El selector per poder utilitzar la taula és ",e.jsx(a.strong,{children:e.jsx(a.code,{children:"dss-custom-table"})}),"."]}),`
`,e.jsx(s,{of:o}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsxs(a.p,{children:[e.jsx(a.strong,{children:"Nota"}),": Les funcionalitats sobre el contingut de la taula no poden aplicar-se directament sobre el slot a Storybook, per la qual cosa haurà de capturar els esdeveniments en la seva aplicació i actualitzar les dades que es renderitzen en aquest slot. Pot veure un exemple complet del component en la ",e.jsx(a.a,{href:"https://git.intranet.gencat.cat/3609/dss-demo-angular",rel:"nofollow",children:"demo Angular"}),"**."]}),`
`]}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsxs(a.p,{children:[e.jsx(a.strong,{children:"Checkbox multiselect"}),": Tingui en compte que la classe dss-checkbox.dss-checkbox--multiselect és utilitzada internament pel component per comptar el nombre de files seleccionades. Recordi mantenir aquesta classe a l'input encara que hagi migrat al nou component dss-checkbox."]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h2,{id:"flux-de-dades",children:"Flux de dades"}),`
`,e.jsx(a.p,{children:"Per desenvolupar la taula tindrem dos casos d' ús:"}),`
`,e.jsxs(a.ol,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Les dades arriben segmentades des del backend"}),`, del qual obtenim el total d'elements i el primer bloc de dades. En aquest cas haurem d'enviar al web les propietats "data" i "totalResults" i en el slot podrem renderitzar aquestes dades seguint l'exemple. Quan s'interactui sobre el paginador l'esdeveniment ens retornarà el nou estat del mateix per trucar al backend i obtenir el següent bloc de dades (aquí haurem d'actualitzar la propietat "data"). Quan s'ordeni una columna, l'esdeveniment corresponent ens retorna tant l'estat actual de la capçalera de la taula (que indica que s'ha clicat) com el bloc de dades definit en "data" ordenats correctament per actualitzar el slot de la taula.`]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Les dades arriben al complet des del backend"}),`. En aquest cas només necessitem enviar al component la propietat "data", de manera que quan el component rep les dades aplicarà la paginació inicial i retornarà un esdeveniment amb el bloc de dades paginat que s'ha de mostrar dins del slot. Es recomana utilitzar aqui una segona variable on s' emmagatzemen les dades tant paginades o ordenades i que sigui aquesta variable la que s' utilitza per visualitzar el contingut de la taula en lloc del bloc de dades original.`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h2,{id:"css",children:"CSS"}),`
`,e.jsx(a.p,{children:"Finalment el contingut de la taula s'injecta al web component a través d'un slot, la qual cosa ens permet donar-li aparença a través de CSS. D'aquesta manera pot utilitzar les classes definides per defecte per a la taula i/o sobreescriure aquells aspectes que necessiti en l'aplicació final."}),`
`,e.jsx(a.h3,{id:"estils-per-defecte",children:"Estils per defecte"}),`
`,e.jsx(n,{code:`
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
`,e.jsx(a.h3,{id:"estils-sobre-files",children:"Estils sobre files"}),`
`,e.jsx(a.p,{children:e.jsx(a.strong,{children:"Estados"})}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"dss-tbody-row--selected"}),": background: --color-primary-50"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"dss-tbody-row--deleted"}),": background: --color-red-50"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"dss-tbody-row--disabled"}),": background: --color-neutral-50 / color: --color-neutral-500"]}),`
`]}),`
`,e.jsx(a.p,{children:e.jsx(a.strong,{children:"Contenido anidado"})}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"dss-tbody-row--expanded"}),": Àmplia l' alçada de la fila i permet definir un td amb colspan que ocupi tot l' ample de la taula."]}),`
`]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h3,{id:"estils-sobre-columnes",children:"Estils sobre columnes"}),`
`,e.jsx(a.p,{children:e.jsx(a.strong,{children:"Text Align:"})}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"dss-td--align-right"}),": text-align: right."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"dss-td--align-center"}),": tex-align: right."]}),`
`]}),`
`,e.jsx(a.p,{children:e.jsx(a.strong,{children:"Font Weight:"})}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"dss-td--font-bold"}),": font-weight: bold / color: neutral-700"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"dss-td--font-black"}),": font-weight: bold / color: neutral-900"]}),`
`]}),`
`,e.jsx(a.p,{children:e.jsx(a.strong,{children:"Td Content:"})}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"dss-td-content"}),": crea un div amb display:inline-flex dins la cel·la per poder mostrar el valor de la columna acompanyat d'una icona o badge."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"dss-td-content--sm"}),": redueix el gap entre els elements dins del div.dss-td-content."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"dss-td-content__value"}),": usar aquesta classe dins del div.dss-td-content limita a dues línies l' alçada màxima de la cel·la."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"dss-checkbox--multiselect"}),": per diferenciar el checkbox de selecció de fila amb el d' estat revisat i poder seleccionar mitjançant navegació per teclat."]}),`
`]}),`
`,e.jsx(n,{code:`
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
`,e.jsx(a.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(a.p,{children:["Si necessita veure les variants de la capçalera de la taula, visiti la pàgina ",e.jsx(a.a,{href:"/docs/components-custom-table-header--docs",children:"Custom Table Header"}),"."]}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#taula-amb-cap%C3%A7alera-alternativa-per-a-filtres",children:"Taula amb capçalera alternativa per a filtres"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#taula-amb-scroll-horitzontal",children:"Taula amb scroll horitzontal"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#taula-amb-sticky-columns-css",children:"Taula amb sticky columns CSS"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#taula-amb-sticky-columns-lit",children:"Taula amb sticky columns LIT"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#taula-amb-al%C3%A7ada-sm-40px",children:"Taula amb alçada SM (40px)"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#taula-amb-al%C3%A7ada-auto-min40px-max56px",children:"Taula amb alçada auto (min:40px - max: 56px)"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#taula-amb-grid",children:"Taula amb grid"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#taula-amb-divisorpersonalitzat",children:"Taula amb divisor personalitzat"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#taula-amb-files-niades",children:"Taula amb files niades"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#taula-amb-columnes-ressaltades",children:"Taula amb columnes ressaltades"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#taula-amb-cellhover",children:"Taula amb cell:hover"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#taula-amb-singleline",children:"Taula amb cell:single-line"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#taula-amb-corner-action",children:"Taula amb corner action"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#taula-amb-th-personalitzat",children:"Taula amb th personalitzat"})}),`
`]}),`
`,e.jsx(a.h3,{id:"taula-amb-capçalera-alternativa-per-a-filtres",children:"Taula amb capçalera alternativa per a filtres"}),`
`,e.jsx(a.p,{children:"Afegir la propietat 'innerFilters'. Es recomana utilitzar el component input-dropdown per afegir selectors de filtres."}),`
`,e.jsxs(a.p,{children:["Si en utilitzar aquesta variant apareixen errors en el posicionament del desplegable per als components input-dropdown, afegeix-los la propietat ",e.jsx(a.code,{children:"dropdownFixed"})," en aquests elements.."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h3,{id:"taula-amb-scroll-horitzontal",children:"Taula amb scroll horitzontal"}),`
`,e.jsxs(a.p,{children:["Utilitzar la classe ",e.jsx(a.code,{children:"dss-custom-table dss-custom-table--max-content-width"}),` per habilitar l' overflow horitzontal de la taula.
Amb aquesta opció podem ajustar manualment l' ample de les columnes amb la propietat 'columHeader > style'.`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h3,{id:"taula-amb-sticky-columns-css-discontinuada",children:"Taula amb sticky columns CSS (discontinuada)"}),`
`,e.jsxs(a.p,{children:["Combinar la classe ",e.jsx(a.code,{children:"dss-custom-table--max-content-width"})," amb ",e.jsx(a.code,{children:"dss-custom-table--sticky-columns-default"})," per fixar la posició de la primera i última columnes. Això provoca que la fila amb els títols de les columnes deixi d'estar fixa durant l'scroll."]}),`
`,e.jsxs(a.p,{children:["En cas de tenir una taula amb multiselect haurà de reemplaçar la classe default per una de les següents ",e.jsx(a.code,{children:"dss-custom-table--sticky-columns-multiselect"})," o ",e.jsx(a.code,{children:"dss-custom-table--sticky-columns-radioselect"}),"."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h3,{id:"taula-amb-sticky-columns-lit",children:"Taula amb sticky columns LIT"}),`
`,e.jsx(a.p,{children:"Aquesta funcionalitat permet definir de manera dinàmica el nombre de columnes que es fixaran tant a l'esquerra com a la dreta de la taula utilitzant propietats del component."}),`
`,e.jsxs(a.p,{children:[e.jsx(a.strong,{children:"Important"}),": per evitar conflictes, assegureu-vos que s'han eliminat les classes de la modalitat sticky column CSS."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h3,{id:"taula-amb-alçada-sm-40px",children:"Taula amb alçada SM (40px)"}),`
`,e.jsxs(a.p,{children:["Aplicant la classe ",e.jsx(a.strong,{children:"dss-custom-table--height-sm"})," a la taula, es redueix l'alçada de les cel·les a 40px."]}),`
`,e.jsx(a.p,{children:e.jsx(a.code,{children:'<table class="dss-custom-table dss-custom-table--height-sm">'})}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(a.h3,{id:"taula-amb-alçada-auto-min40px---max-56px",children:"Taula amb alçada auto (min:40px - max: 56px)"}),`
`,e.jsxs(a.p,{children:["Aplicant la classe ",e.jsx(a.strong,{children:"dss-custom-table--height-auto"}),", les cel·les passen a tenir una alçada dinàmica que va des d'un mínim de 40px fins a un màxim de 56px, en funció del contingut de les cel·les."]}),`
`,e.jsx(a.p,{children:e.jsx(a.code,{children:'<table class="dss-custom-table dss-custom-table--height-auto">'})}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(a.h3,{id:"taula-amb-grid",children:"Taula amb grid"}),`
`,e.jsx(a.p,{children:"Aplicant la classe grid, la taula canvia al format grid, on totes les cel·les mostraran una vora. La vora superior de la taula no s'inclou perquè vindrà definit segons el cas d'ús pel component immediatament anterior, per exemple un dss-tabs"}),`
`,e.jsx(a.p,{children:e.jsx(a.code,{children:'<table class="dss-custom-table dss-custom-table--grid">'})}),`
`,e.jsx(s,{of:f}),`
`,e.jsxs(a.p,{children:[`Elimina el divisor superior de la graella afegint el modificador dss-custom-table--grid-hide-divider:
`,e.jsx(a.code,{children:'<table class="dss-custom-table dss-custom-table--grid dss-custom-table--grid-hide-divider">'})]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(a.h3,{id:"taula-amb-divisor-personalitzat",children:"Taula amb divisor personalitzat"}),`
`,e.jsx(a.p,{children:"S'han afegit diverses modalitats de divideix per obtenir un estil més flexible a l'hora de desenvolupar les taules. Aquests estils es podran aplicar sobre les files (tr) o cel·les (td)"}),`
`,e.jsx(a.p,{children:"Teniendo en compte que els divisors es defineixen com a border-top quan una fila (tr) es troba una fila anterior, tenim:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"dss-tbody-row--divider-dark"}),": canvia el color del border a neutral-900"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"dss-tbody-row--hide-divider"}),": amaga el border de la fila"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"dss-td--divider"}),": defineix un border-top específic per a una cel·la"]}),`
`]}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(a.h3,{id:"taula-amb-files-niades",children:"Taula amb files niades"}),`
`,e.jsxs(a.p,{children:["La classe ",e.jsx(a.strong,{children:"ds-tbody-row--nested"})," afegeix un border-left a la primera cel·la (td) de les files niades per donar la sensació que formen un mateix grup de files."]}),`
`,e.jsx(a.p,{children:e.jsx(a.code,{children:'<tr class="dss-tbody-row dss-tbody-row--nested">'})}),`
`,e.jsx(s,{of:q}),`
`,e.jsx(a.h3,{id:"taula-amb-columnes-ressaltades",children:"Taula amb columnes ressaltades"}),`
`,e.jsx(a.p,{children:"Per ressaltar una columna, s’hauran de dur a terme dues accions:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["th: es definirà a través de l’objecte columnHeader afegint l’atribut ",e.jsx(a.strong,{children:"highlight: true"})," a la columna desitjada."]}),`
`,e.jsxs(a.li,{children:["td: cal afegir la classe CSS ",e.jsx(a.strong,{children:"dss-td--highlight"})," a cada cel·la que coincideixi amb la columna desitjada."]}),`
`]}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(a.h3,{id:"taula-amb-cellhover",children:"Taula amb cell:hover"}),`
`,e.jsxs(a.p,{children:["La classe ",e.jsx(a.strong,{children:"dss-custom-table--cell-hover"})," modifica el format de la taula perquè, en lloc de fer hover sobre tota la fila, es passi a tenir un hover individual per a cada cel·la."]}),`
`,e.jsx(a.p,{children:e.jsx(a.code,{children:'<table class="dss-custom-table dss-custom-table--cell-hover">'})}),`
`,e.jsx(s,{of:T}),`
`,e.jsx(a.h3,{id:"taula-amb-cellsingle-line",children:"Taula amb cell:single-line"}),`
`,e.jsxs(a.p,{children:["La classe ",e.jsx(a.strong,{children:"dss-td-content--single-line"})," modifica el límit de línies del contingut de les cel·les, que per defecte és 2, a només una única fila."]}),`
`,e.jsx(s,{of:S}),`
`,e.jsx(a.h3,{id:"taula-amb-corner-action",children:"Taula amb corner action"}),`
`,e.jsx(a.p,{children:"S’ha afegit la possibilitat de marcar una cel·la amb una corner-action per avisar l’usuari que en aquesta cel·la hi ha dades o comentaris d’interès."}),`
`,e.jsx(a.p,{children:e.jsx(a.code,{children:'<td class="dss-td dss-td--corner-action">'})}),`
`,e.jsx(s,{of:k}),`
`,e.jsx(a.h3,{id:"taula-amb-th-personalitzat",children:"Taula amb th personalitzat"}),`
`,e.jsxs(a.p,{children:["S’ha habilitat un atribut ",e.jsx(a.code,{children:"renderTemplate"})," per a l’objecte ",e.jsx(a.strong,{children:"columnHeader"}),", que permet crear una funció que retorni un HTMLElement, de manera que, si aquesta propietat es defineix, substituirà el codi generat dinàmicament pel web component."]}),`
`,e.jsx(a.p,{children:"En aquest cas, queda en mans de la iniciativa afegir les classes i estils CSS necessaris per fer els ajustos oportuns, com per exemple ajustar un input al 100% de la cel·la."}),`
`,e.jsx(a.p,{children:"Exemple React:"}),`
`,e.jsx(n,{code:`
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
`,e.jsx(s,{of:z}),`
`,e.jsx(a.h2,{id:"resolució-de-problemes",children:"Resolució de problemes"}),`
`,e.jsx(a.h3,{id:"issue-en-incloure-un-action-menu-a-celles-dins-duna-columna-fixada",children:"Issue en incloure un action menu a cel·les dins d'una columna fixada"}),`
`,e.jsx(a.p,{children:e.jsx(a.strong,{children:"Problema:"})}),`
`,e.jsx(a.p,{children:`Les cel·les que estan fixes, ja sigui a la primera/última columna o a la capçalera de la taula, tenen un z-index: 200 amb position: sticky.
L'apilament que genera aquest estat ‘sticky’ fa que, tot i que dins hi hagi un action-menu amb z-index: 900, el navegador interpreti la cel·la
com un bloc compacte. Per tant, el z-index que es té en compte és el 200 de la pròpia cel·la i no el 900 del seu contingut intern.`}),`
`,e.jsx(a.p,{children:`Per aquest motiu, l'única part visible de l’action-menu és la que coincideix amb la seva pròpia cel·la i no amb les següents, ja que, en tenir
el mateix z-index, sempre preval la següent.`}),`
`,e.jsx(a.p,{children:e.jsx(a.strong,{children:"Solució:"})}),`
`,e.jsx(a.p,{children:`Des de la iniciativa s'ha de definir una lògica mitjançant la qual s'assigni, a la cel·la sobre la qual s'està obrint el menú en qüestió, un
z-index temporal que sigui superior al de la resta de cel·les de la columna, però inferior al del table > thead. Recomanació: z-index: 150.`}),`
`,e.jsx(a.p,{children:e.jsx(a.strong,{children:"Exemple React:"})}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["Template",`
`,e.jsx(n,{code:`
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
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["Controller",`
`,e.jsx(n,{code:`
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
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["Style",`
`,e.jsx(n,{code:`
  .increased-zindex {
    z-index: 150 !important;
  }
`}),`
`]}),`
`]})]})}function D(l={}){const{wrapper:a}={...t(),...l.components};return a?e.jsx(a,{...l,children:e.jsx(i,{...l})}):i(l)}export{D as default};
