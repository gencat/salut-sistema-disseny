import{ae as e,af as d,ag as l,ah as n,ai as a}from"./index-BdiquCoO.js";import{u as t}from"./index-CMDQJoPB.js";import{S as o,P as c,B as h,D as p,R as x,a as j,C as u,b as m}from"./timepicker.stories-h5cFKlkA.js";import"./iframe-0WJvKx-G.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";function r(i){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
     .innerZoomElementWrapper {
        display: block !important;
      }
      .innerZoomElementWrapper div {
        width: 100% !important;
      }
      .css-10skpf4 > * {
        zoom: 0 !important;
      }
      .container--flex {
          display: flex;
          justify-content: flex-start;
          gap: 30px;
      }
      .container--dropdown {
          height: 330px;
      }
  `}),`
`,e.jsx(d,{of:o}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("dss-badge",{text:"dss-timepicker",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:`El component Timepicker permet seleccionar una hora de diverses maneres. Podem fer la selecció de manera manual introduint
els valors per a hora i minuts a través de teclat o seleccionant els valors disponibles en un dropdown amb dos formats: llistat
d'hores o selecció individual d'hores i minuts.`}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(a,{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"propietats",children:"Propietats"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Àmbit"}),e.jsx(s.th,{children:"Condition"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"inputSize"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"string"}),e.jsx(s.td,{children:"lg"}),e.jsx(s.td,{children:"Mida de l'input: Pot tenir els valors 'md' o 'lg'. Per defecte tindrà sempre el valor 'lg'"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"helpText"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"string"}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Text d’ajuda que es mostrarà sota del component."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"errorTimeFormatText"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"string"}),e.jsx(s.td,{children:"'Format d'hora no vàlid'"}),e.jsx(s.td,{children:"Missatge d’error que serà mostrat quan l’usuari escrigui un format d’hora incorrecte."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"errorTimeOptionText"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"string"}),e.jsx(s.td,{children:"'Opció de temps no disponible'"}),e.jsx(s.td,{children:"Missatge d'error mostrat quan l'usuari escrigui una hora que no s'inclou en les opcions disponibles del dropdown."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"invalid"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"boolean"}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"En definir aquesta propietat el component s mostrarà amb un estil d’error per tal de diferenciar-los de la resta."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"dropdown"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"string"}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Fa que el timipicker mostri un dropdown desplegable en el qual podrem escollir una hora. Aquest dropdown té dues variants diferents: - 'list': mostrarà un llistat d’hores disponibles. - 'manual': permet seleccionar l’hora i els minuts per separat."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"showDropdown"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"boolean"}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Cal utilitzar aquesta propietat si volem que el dropdown de selecció d'hores es mostri obert per defecte. Nota: aquesta propietat no fa que el desplegable sempre estigui obert."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"minutesRange"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"number"}),e.jsx(s.td,{children:"1"}),e.jsx(s.td,{children:"Interval transcorregut entre els minuts que es mostraran en les opcions del dropdown. Per exemple, podem utilitzar-lo si volem que l'hora es mostri cada 5, 10 o 15 minuts en comptes de minut a minut."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"minHour"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"number"}),e.jsx(s.td,{children:"0"}),e.jsx(s.td,{children:"Hora d’inici per a les opcions disponibles del dropdown."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"maxHour"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"number"}),e.jsx(s.td,{children:"23"}),e.jsx(s.td,{children:"Hora final per a les opcions disponibles del dropdown."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"customTimeListOptions"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Opcional"}),e.jsx(s.td,{children:"DssTimepickerOption[]"}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Llistat personalitzat d'hores disponibles que es mostraran en el dropdown. Quan es defineixi aquesta propietat el valor de dropdown ha de ser sempre 'list' i les propietats minutesRange, minHour i maxHour quedaran sense efecte."})]})]})]}),`
`,e.jsx(s.h3,{id:"custom-timepicker-option",children:"Custom Timepicker Option"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Àmbit"}),e.jsx(s.th,{children:"Condition"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"value"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Requerida"}),e.jsx(s.td,{children:"string"}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Hora en format HH:mm, per exemple 22:30"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"state"})}),e.jsx(s.td,{children:"Input"}),e.jsx(s.td,{children:"Requerida"}),e.jsx(s.td,{children:"string"}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Estat que identificarà si l'hora marcada està disponible o no. Els valors que pot tenir aquesta propietat són: 'disponible' o 'ocupat'"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Àmbit"}),e.jsx(s.th,{children:"Condition"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onTimepickerChange"})}),e.jsx(s.td,{children:"Output"}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"CustomEvent"}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Esdeveniment que llançarà l'hora seleccionada per l'usuari bé en introduir una hora correcta per teclat o bé en triar-la a través de les opcions del dropdown. La propietat 'detail' d'aquest custom event inclourà tant el valor seleccionat en l'input com el seu estat ('VALID' o 'INVALID') en funció de les validacions internes del component."})]})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#default",children:"Default"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#disabled",children:"Disabled"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#nom%C3%A9s-lectura",children:"Només lectura"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#dropdown-list",children:"Dropdown List"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#dropdown-custom-list",children:"Dropdown Custom List"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#dropdown-manual",children:"Dropdown Manual"})}),`
`]}),`
`,e.jsx(s.h3,{id:"default",children:"Default"}),`
`,e.jsx(s.p,{children:"Timepicker simple amb opcions de mida i text d’ajuda."}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s.p,{children:"Timepicker deshabilitat."}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h3,{id:"només-lectura",children:"Només lectura"}),`
`,e.jsx(s.p,{children:"Només lectura amb valor predefinit."}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.h3,{id:"dropdown-list",children:"Dropdown List"}),`
`,e.jsx(s.p,{children:"Timepicker de tipus llista per defecte o amb opcions definides per delimitar el rang d’hores i minuts."}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.h3,{id:"dropdown-custom-list",children:"Dropdown Custom List"}),`
`,e.jsx(s.p,{children:"Timpicker de tipus llista amb llistat d’opcions personalitzar."}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.h3,{id:"dropdown-manual",children:"Dropdown Manual"}),`
`,e.jsx(s.p,{children:"Timepicker de tipus manual per defecte o amb opcions definides per a delimitar el rang d’hores i minuts."}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(s.h3,{id:"navegació-per-teclat",children:"Navegació per teclat"}),`
`,e.jsxs(s.p,{children:["La navegació per teclat s'ha definit seguint els patrons de accessibilidad definits a ",e.jsx(s.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/",rel:"nofollow",children:"WAI Patterns"}),`
per a elements de tipus combobox (dropdown) i radio buttons.`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"Tab"})}),":  Si l'usuari està fora del timepicker, es navegarà entre els elements de la pàgina. Un cop s'entra al timepicker s'habilitarà l'estat focus de l'input. Si el dropdown està obert, mitjançant la tecla tab els usuaris es desplaçaran a l'opció seleccionada de la llista d'hores o a l'opció disponible per defecte."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"Enter"})})," o ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Space"})}),": Si l'usuari està posicionat en l'input i el dropdown està habilitat utilitzant les tecles enter o espai aquest serà desplegat amb les llistes d'opcions. Si l'usuari està situat sobre una de les opcions disponibles en el dropdown en fer servir la tecla Enter aquesta, serà seleccionada i passarà a mostrar-se com el valor de l'input. En el moment que es fa la selecció el dropdown es tancarà."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"Esc"})}),": Si l’usuari està posicionat en l’input i el dropdown està habilitat, aquest serà tancat."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"Down Arrow"})}),": Si l'usuari està posicionat en eles opcions del dropdown, l'usuari anirà desplaçant-se cap a baix una a una. En el cas que s'arribi a l'última opció, el focus passarà a a la primera opció del desplegable."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"Up Arrow"})}),":  Si l’usuari està posicionat sobre les opcions dins del dropdown, l'usuari anirà desplaçant-se cap amunt una a una. En el cas que l'opció amb focus sigui la primera, el focus passarà a l'última opció del desplegable."]}),`
`]})]})}function k(i={}){const{wrapper:s}={...t(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(r,{...i})}):r(i)}export{k as default};