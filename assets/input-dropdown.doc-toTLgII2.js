import{ae as e,af as t,ag as d,ah as s,ai as c}from"./index-CPQky8E4.js";import{u as i}from"./index-CFBmBEPl.js";import{S as a,P as o,a as h,M as x,b as j,c as p,U as m,T as u,N as g,I as b,B as f,d as q,O as v}from"./input-dropdown.stories-B59BFKgS.js";import"./iframe-B3b_zykC.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";function l(r){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .container-dropdownlist {
      display: flex;
      gap: 20px;
      min-height: 220px;
    }
  `}),`
`,e.jsx(t,{of:a}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(d,{}),e.jsx("dss-badge",{text:"dss-input-dropdown",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(n.p,{children:"Un Input Dropdown és un component que s'utilitza per seleccionar una o més opcions possibles."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"unorder"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Desactiva l'ordenació automàtica dels elements per ordre alfabètic"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"icon"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'search'"}),e.jsx(n.td,{children:"Modifica la icona situada a l'esquerra del dropdown utilitzant com a base Materials Symbols Rounded."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"inputSize"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"lg"}),e.jsx(n.td,{children:"Mida de l'input: Pot tenir els valors 'md' o 'lg'. Per defecte tindrà sempre el valor 'lg'"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"placeHolder"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"''"}),e.jsx(n.td,{children:"Text que es mostra en el placeholder de l'input quan se abre el dropdown."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"multiple"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Permet seleccionar diversos elements del dropdown al mateix temps"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"tick"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Permet desactivar el tick que apareix a l'esquerra de cada element. Llavors apareixerà un radi de selecció o un checkbox, depenent de si és un selector simple o múltiple."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"deselectable"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Permet deseleccionar un element seleccionat si es torna a clicar sobre ell. (Només per selectors simples)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsxs(n.strong,{children:["elements",e.jsx("span",{children:"*"})]})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Elements[]"})}),e.jsx(n.td,{children:"[]"}),e.jsx(n.td,{children:"Array d'elements que es mostraran en obrir el dropdown."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"selectedValue"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string[]"})}),e.jsx(n.td,{children:"[]"}),e.jsx(n.td,{children:"Array de valors que es marcaran com seleccionats sempre que coincideixin amb el valor d'algun dels elements definits."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"type"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'default'"}),e.jsx(n.td,{children:"Modifica l'aparença de l'estat hover sobre els elements dins del dropdown. Possibles valors: default o green"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"boxStyle"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"''"}),e.jsx(n.td,{children:"Permet canviar l’estil de la caixa. Per exemple, pot utilitzar-se per definir l’amplada del component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"selectorStyle"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"''"}),e.jsxs(n.td,{children:["Permet afegir estils css propis al dropdown. Per exemple per limitar-ne l'alçada amb ",e.jsx(n.code,{children:"max-height: 200px"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"showDropdown"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Permet mostrar el dropdown obert en renderitzar el component. Quan s'utilitzi el component es mantindrà el funcionament per defecte."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"openWithSearch"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Permet mantenir el dropdown sempre obert. El dropdown no es tancarà mai si aquesta propietat està definida, només existeix l'excepció de no tenir cap element que concordi amb el filtre introduït a l'input."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"labelSelectAll"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'Seleccionar-ho tot'"}),e.jsx(n.td,{children:"Text que reemplaça l'etiqueta 'Seleccionar-ho tot' quan SelectAll està habilitat."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"labelDeselectAll"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'Deseleccionar-ho tot'"}),e.jsx(n.td,{children:"Text que reemplaça l'etiqueta 'Desseleccionar-ho tot' quan SelectAll està habilitat."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"filterThreshold"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"1"}),e.jsx(n.td,{children:"Quan el component no té elements definits d'inici: Mínim nombre de caràcters de filtre a partir del qual es mostraran la llista d'elements al dropdown."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"SelectAll"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Habilita l'opció de seleccionar o desseleccionar tots els elements."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"dropdownOffsetX"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Assigna una posició manual sobre l'eix X al desplegable."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"dropdownOffsetY"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Assigna una posició manual sobre l'eix Y al desplegable."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"dropdownPlacement"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'bottom-start'"}),e.jsx(n.td,{children:"Modifica la posició per defecte del desplegable. Pot ser: bottom-start o top-start"})]})]})]})}),`
`,e.jsx(n.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx(n.h3,{id:"elements",children:"Elements"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsxs(n.strong,{children:["label",e.jsx("span",{children:"*"})]})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"''"}),e.jsx(n.td,{children:"Text que es mostrarà visible per a cada element."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsxs(n.strong,{children:["value",e.jsx("span",{children:"*"})]})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"''"}),e.jsx(n.td,{children:"Valor assignat el component quan se seleccioni l'element."})]})]})]})}),`
`,e.jsx(n.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onInputDropdownChange"})}),e.jsxs(n.td,{children:["Esdeveniment que retorna els elements seleccionats en un array i també el valor de l’input en format string quan es tracta d’un dropdown simple. ",e.jsx(n.code,{children:"event.detail = { inputValue, selectedValue}"})]})]})})]}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#simple",children:"Simple"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#m%C3%BAltiple",children:"Múltiple"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#seleccionarTot",children:"Seleccionar-ho tot"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#valor-preseleccionat",children:"Valor preseleccionat"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#desseleccionable",children:"Desseleccionable"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#tipus",children:"Tipus"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#Sensetick",children:"Sense tick"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#box-style",children:"Box style"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#estats-input",children:"Estats de l'Input"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#obrir-amb-cerca",children:"Obrir amb cerca"})}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Nota:"})," El div amb la classe ",e.jsx(n.strong,{children:"container-dropdownlist"}),` es només per a mostrar-ho
amb un mínim de altura a la documentació. `,e.jsx(n.strong,{children:`No es te que fer servir fora de la
pàgina de documentació.`})]})}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"simple",children:"Simple"}),`
`,e.jsx(n.p,{children:"Permet seleccionar un element."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"múltiple",children:"Múltiple"}),`
`,e.jsx(n.p,{children:"Permet seleccionar més d'un element."}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"seleccionar-ho-tot",children:"Seleccionar-ho tot"}),`
`,e.jsxs(n.p,{children:[`Permet seleccionar tots els elements.
Per indicar que el DropDown mostri l'input de seleccionar-ho tot, cal afegir la propietat
`,e.jsx(n.strong,{children:"selectAll"})," i que sigui de  selecció múltiple al component, també indicar el ",e.jsx(n.strong,{children:"labelSelectAll"}),` i el
`,e.jsx(n.strong,{children:"labelDeselectAll"}),` per canviar els valors per defecte dels inputs si cal. Per
defecte, els inputs mostren `,e.jsx(n.strong,{children:"Seleccionar-ho tot"})," i ",e.jsx(n.strong,{children:"Deseleccionar-ho tot"}),"."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h3,{id:"valor-preseleccionat",children:"Valor preseleccionat"}),`
`,e.jsx(n.p,{children:"Permet indicar quin element o elements estan seleccionats per defecte."}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"desseleccionable",children:"Desseleccionable"}),`
`,e.jsx(n.p,{children:"Permet deseleccionar un element seleccionat si es torna a clicar sobre ell. (Només per selectors simples)"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"tipus",children:"Tipus"}),`
`,e.jsx(n.p,{children:"Hi ha el default i green. No afegir-ne un altre que no sigui un d'aquests dos."}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"sense-tick",children:"Sense tick"}),`
`,e.jsx(n.p,{children:`Permet desactivar el tick que apareix a l'esquerra de cada element.
Llavors apareixerà un radi de selecció o un checkbox, depenent de si
és un selector simple o múltiple.`}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h3,{id:"modificar-icona",children:"Modificar icona"}),`
`,e.jsx(n.p,{children:"Permet modificar la icona principal del component afegint l'atribut icon i el valor corresponent de la llibreria Material Icons. En cas de no indicar-se el component prendrà per defecte el valor de la icona 'search'"}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h3,{id:"box-style",children:"Box style"}),`
`,e.jsx(n.p,{children:"Permet canviar l'estil de la caixa."}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h3,{id:"estats-de-linput",children:"Estats de l'Input"}),`
`,e.jsx(n.p,{children:"Estats: required, disabled, readonly"}),`
`,e.jsx(s,{of:q}),`
`,e.jsx(n.h3,{id:"obrir-amb-cerca",children:"Obrir amb cerca"}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(n.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Versió"}),e.jsx(n.th,{children:"Canvis"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.0"})}),e.jsx(n.td,{children:"Refactor v2."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.12.0"})}),e.jsx(n.td,{children:"S'ha corregit el funcionament de l'ordenació automàtica dels elements, que només s'aplicava després de seleccionar-ne un. Ara es mostraran sempre ordenats alfabèticament per defecte. Si no es desitja que s'ordenin, s'ha d'afegir la propietat unorder."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.10.0"})}),e.jsx(n.td,{children:"S'ha ocultat la icona d'interacció per obrir o tancar el desplegable quan l'estat de l'input sigui readonly."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.9.0"})}),e.jsx(n.td,{children:"S'ha corregit un error pel qual, en filtrar la llista d'elements i fer clic a la zona ressaltada (en negreta) dels elements trobats, l'element seleccionat no arribava mai a seleccionar-se."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.8.2"})}),e.jsxs(n.td,{children:["S' ha corregit un error per al cas d' ús de selecció simple sense tiquet i amb dropdown sempre obert, en la qual els elements es quedaven marcats encara després de seleccionar-ne un de diferent.",e.jsx("br",{}),"S'ha corregit un error pel qual, en limitar l'altura del dropdown i tenir habilitat l'opció 'seleccionar tot', es produïa un bug visual en fer scroll en el qual tots els elements eren encara visibles per darrere de l'opció per seleccionar tot."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.8.1"})}),e.jsxs(n.td,{children:["S'ha corregit un error pel qual es resetejava el filtre de recerca dins l'input quan es recarregaven els elements del selector externament. Queda pendent afegir l' última actualització de disseny en la qual es mostrarà un spinner de càrrega en lloc de l' actual missatge de text quan no hi ha elements que mostrar en el selector.",e.jsx("br",{}),"S'ha afegit un canvi en la interfície per al cas en què el dropdown no té elements fins que l'usuari inicia el filtre de recerca. Ara el missatge de buscar apareixerà com a placeholder mentre que al dropdown es mostrarà un spinner de càrrega fins a obtenir els elements.",e.jsx("br",{}),"S' ha modificat el comportament del filtre, perquè no afecti els elements que ja estan seleccionats, de manera que només es filtrin la resta d' opcions disponibles. D' aquesta manera tampoc s' aplica l' estil negreta que actualment es mostrava en tots els elements que tenien una coincidència amb el filtre."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.8.0"})}),e.jsx(n.td,{children:"S'ha corregit un error pel qual es reinicialitzava el filtre de cerca dins de l'input quan es recarregaven els elements del selector externament. Queda pendent afegir l'última actualització de disseny en la qual es mostrarà un spinner de càrrega en lloc de l'actual missatge de text quan no hi ha elements que mostrar en el selector."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.5.1"})}),e.jsx(n.td,{children:"S' ha corregit un error pel qual quan el filtre introduït no coincideixi amb cap de les opcions disponibles el dropdown es tancava però la fletxa en el component es mostrava com si estigués obert el que portava a confusió. Ara, quan el filtre no coincideixi es mostrarà un missatge de resultat buit per a aquest filtre sense arribar a tancar el dropdown."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.5.0"})}),e.jsxs(n.td,{children:["S'ha corregit un error pel qual no es podia assignar un estil al dropdown, per exemple per a fixar l'altura màxima d'aquest.",e.jsx("br",{}),"S'ha corregit un error pel qual el dropdown es tancava de manera incorrecta sense seleccionar el valor quan el component estava dins d'un modal d'Angular Material.",e.jsx("br",{}),"S'ha corregit un error pel qual els elements del dropdown no es reinicialitzaven correctament quan es tancava el dropdown de manera manual el que havia de reiniciar el filtre."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.4.2"})}),e.jsxs(n.td,{children:["S’ha inclòs la funcionalitat de mostrar el dropdown sempre obert perquè aquest component mantingui la mateixa funcionalitat que el component dropdown-list.",e.jsx("br",{}),"S'ha corregit un error pel qual els elements del dropdown no s'ocultaven correctament quan s'aplicava el filtre."]})]})]})]})]})}function z(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{z as default};