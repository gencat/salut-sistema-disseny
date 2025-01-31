import{j as e,M as d,T as l,C as n,a as c}from"./index-BLT_n-K-.js";import{useMDXComponents as t}from"./index-628aVL1j.js";import{S as a,P as h,a as x,M as o,b as j,R as p,c as u,D as m,L as g,d as b,e as f,C as q}from"./search-bar.stories-CV4fcgVi.js";import"./iframe-f2jofuME.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-BBo-_xnV.js";import"./index-ogSvIofg.js";import"./lit-html-CeYizTxc.js";function i(s){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .css-1sqhzee {
      display:none
    }

    .innerZoomElementWrapper {
      flex-direction: row;
      align-items: center;
    }
    .demo {
      width: 80%;
    }
    .wrapper {
      min-height: 200px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 30px;
    }
    
    .wrapper--no-dropdown {
      min-height: 80px;
    }

    .wrapper {
      width: 600px;
    }

    .wrapper--md {
      width: 400px;
    }

    .wrapper--alignment {
      height: 240px;
    }
  `}),`
`,e.jsx(d,{of:a}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("dss-badge",{text:"dss-search-bar",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(r.p,{children:`El cercador és un component que pot utilitzar-se tant per a realitzar filtres en el contingut
d'una pàgina com per a navegar dins de la mateixa en funció de la cerca. Sí el catàleg de termes o cerques
recents està definit, el component mostrarà un desplegable amb suggerències quan l'usuari escriu a l'input.`}),`
`,e.jsx(r.p,{children:"El component té dues versions: cercador simple i buscador múltiple."}),`
`,e.jsx(r.p,{children:`Cercador simple: Permet realitzar una cerca escrivint el text en l’input, executant un esdeveniment per
activar-la quan es prem la tecla Enter. Si l’usuari fa clic en un dels resultats predictius, s’assignarà com a valor de l'input i s’iniciarà la cerca.`}),`
`,e.jsx(r.p,{children:`Cercador múltiple: Permet seleccionar diferents termes de cerca al mateix temps. Ja sigui escrivint a l’input i separant-los amb una coma per tal d’afegir-los
o bé fent clic en els resultats predictius. Cada cop que s’afegeixi un nou terme es llençarà un esdeveniment de cerca.`}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(c,{}),`
`,e.jsxs(r.p,{children:["El selector per poder utilitzar el search bar és ",e.jsx(r.strong,{children:e.jsx(r.code,{children:"dss-search-bar"})}),"."]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"propietats",children:"Propietats"}),`
`,e.jsx(r.h3,{id:"dss-search-bar",children:"dss-search-bar"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Name"}),e.jsx(r.th,{children:"Àmbit"}),e.jsx(r.th,{children:"Condition"}),e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Default"}),e.jsx(r.th,{children:"Description"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"multiple"})}),e.jsx(r.td,{children:"Input"}),e.jsx(r.td,{children:"Opcional"}),e.jsx(r.td,{children:"string"}),e.jsx(r.td,{children:"false"}),e.jsx(r.td,{children:"Permet realitzar un cerca amb diferents termes al mateix temps."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"icon"})}),e.jsx(r.td,{children:"Input"}),e.jsx(r.td,{children:"Opcional"}),e.jsx(r.td,{children:"string"}),e.jsx(r.td,{children:"search"}),e.jsx(r.td,{children:"Sobreescriu la icona mostrada."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"inputSize"})}),e.jsx(r.td,{children:"Input"}),e.jsx(r.td,{children:"Opcional"}),e.jsx(r.td,{children:"string"}),e.jsx(r.td,{children:"lg"}),e.jsx(r.td,{children:"Mida de l'input: Pot tenir els valors 'md' o 'lg'. Per defecte tindrà sempre el valor 'lg'"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"helpText"})}),e.jsx(r.td,{children:"Input"}),e.jsx(r.td,{children:"Opcional"}),e.jsx(r.td,{children:"string"}),e.jsx(r.td,{children:"-"}),e.jsx(r.td,{children:"Text d’ajuda que es mostrarà sota del component."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"invalid"})}),e.jsx(r.td,{children:"Input"}),e.jsx(r.td,{children:"Opcional"}),e.jsx(r.td,{children:"boolean"}),e.jsx(r.td,{children:"false"}),e.jsx(r.td,{children:"En definir aquesta propietat el component s mostrarà amb un estil d’error per tal de diferenciar-los de la resta."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"threshold"})}),e.jsx(r.td,{children:"Input"}),e.jsx(r.td,{children:"Opcional"}),e.jsx(r.td,{children:"number"}),e.jsx(r.td,{children:"3"}),e.jsx(r.td,{children:"Límit de caràcters a partir del qual es mostrarà el desplegable amb els resultats que coincideixin amb la cerca predictiva."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"dropdownStyle"})}),e.jsx(r.td,{children:"Input"}),e.jsx(r.td,{children:"Opcional"}),e.jsx(r.td,{children:"string"}),e.jsx(r.td,{children:"''"}),e.jsx(r.td,{children:"Permet canviar l’estil del dropdown."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"catalog"})}),e.jsx(r.td,{children:"Input"}),e.jsx(r.td,{children:"Opcional"}),e.jsx(r.td,{children:"CatalogOption[]"}),e.jsx(r.td,{children:"[]"}),e.jsx(r.td,{children:"Llista d’elements que seran mostrats al desplegable de cerca predictiva. El format dels elements serà el mateix tant per a obtenir un catàleg de termes, com en un llistat de cerques recents."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"isCatalogLoading"})}),e.jsx(r.td,{children:"Input"}),e.jsx(r.td,{children:"Opcional"}),e.jsx(r.td,{children:"boolean"}),e.jsx(r.td,{children:"false"}),e.jsx(r.td,{children:"Permet mostrar una animació mentre les dades del catàleg acaben de carregar-se des de backend."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"emptyDropdownText"})}),e.jsx(r.td,{children:"Input"}),e.jsx(r.td,{children:"Opcional"}),e.jsx(r.td,{children:"string"}),e.jsx(r.td,{children:"Sense resultats per"}),e.jsx(r.td,{children:"Text que es mostra quan el text introduït a l’input no coincideix amb cap de les opcions del catàleg de termes o cerques recents. El text es construeix de la següent manera: emptyDropdownText:ìnput.value`."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"searchTerms"})}),e.jsx(r.td,{children:"Input"}),e.jsx(r.td,{children:"Opcional"}),e.jsx(r.td,{children:"string[]"}),e.jsx(r.td,{children:"[]"}),e.jsx(r.td,{children:"Llistat de termes de cerques realitzades. Per exemple, pot utilitzar-se en cas de tenir emmagatzemada l’última cerca en tornar a la pàgina durant la navegació."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"recentSearches"})}),e.jsx(r.td,{children:"Input"}),e.jsx(r.td,{children:"Opcional"}),e.jsx(r.td,{children:"boolean"}),e.jsx(r.td,{children:"false"}),e.jsx(r.td,{children:"Afegir en cas que el catàleg definit es tracti d’un llistat de cerques recents. Això farà visible un títol identificatiu dins del desplegable que pugui modificar-se amb la següent propietat."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"recentSearchesText"})}),e.jsx(r.td,{children:"Input"}),e.jsx(r.td,{children:"Opcional"}),e.jsx(r.td,{children:"string"}),e.jsx(r.td,{children:"Últimes cerques"}),e.jsx(r.td,{children:"Modificar el títol del desplegable quan es tracti d’una cerca predictiva sobre un llistat de cerques recents."})]})]})]}),`
`,e.jsx(r.h3,{id:"catalog-option",children:"Catalog Option"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Name"}),e.jsx(r.th,{children:"Àmbit"}),e.jsx(r.th,{children:"Condition"}),e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Default"}),e.jsx(r.th,{children:"Description"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"value"})}),e.jsx(r.td,{children:"Input"}),e.jsx(r.td,{children:"Requerida"}),e.jsx(r.td,{children:"string"}),e.jsx(r.td,{children:"-"}),e.jsx(r.td,{children:"Text que identifica el terme amb la cerca recent."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"icon"})}),e.jsx(r.td,{children:"Input"}),e.jsx(r.td,{children:"Opcional"}),e.jsx(r.td,{children:"string"}),e.jsx(r.td,{children:"-"}),e.jsx(r.td,{children:"Icona relacionada. Si no s’indica la icona el text s'alinearà a la esquerra del component."})]})]})]}),`
`,e.jsx(r.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Name"}),e.jsx(r.th,{children:"Àmbit"}),e.jsx(r.th,{children:"Condition"}),e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Default"}),e.jsx(r.th,{children:"Description"})]})}),e.jsx(r.tbody,{children:e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.strong,{children:"onSearchChange"})}),e.jsx(r.td,{children:"Output"}),e.jsx(r.td,{children:"-"}),e.jsx(r.td,{children:"CustomEvent"}),e.jsx(r.td,{children:"-"}),e.jsx(r.td,{children:"Esdeveniment que retorna el valor dels termes seleccionat per a realitzar la cerca. A la propietat event.detail s'obtindrà un array de strings amb tots els termes."})]})})]}),`
`,e.jsx(r.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#simple",children:"Simple"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#m%C3%BAltiple",children:"Múltiple"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#mides",children:"Mides"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#requerit",children:"Requerit"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#nom%C3%A9s-lectura",children:"Només lectura"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#%C3%BAltimes-cerques",children:"Últimes cerques"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#amb-cerca-predefinida",children:"Amb cerca predefinida"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#cat%C3%A0leg-carregant",children:"Catàleg carregant"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#modificar-l%E2%80%99estil-del-desplegable",children:"Modificar l’estil del desplegable"})}),`
`]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"Cerca per diagnostics, settings o home per habilitar el cercador predictiu."}),`
`]}),`
`,e.jsx(r.h3,{id:"simple",children:"Simple"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(r.h3,{id:"múltiple",children:"Múltiple"}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(r.h3,{id:"mides",children:"Mides"}),`
`,e.jsx(r.p,{children:"Utilitzarem la mida (md | lg)."}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(r.h3,{id:"requerit",children:"Requerit"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(r.h3,{id:"només-lectura",children:"Només lectura"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(r.h3,{id:"deshabilitat",children:"Deshabilitat"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(r.h3,{id:"últimes-cerques",children:"Últimes cerques"}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"Cerca per last, o term  per habilitar el cercador predictiu."}),`
`]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(r.h3,{id:"amb-cerca-predefinida",children:"Amb cerca predefinida"}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(r.h3,{id:"catàleg-carregant",children:"Catàleg carregant"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(r.h3,{id:"modificar-lestil-del-desplegable",children:"Modificar l’estil del desplegable."}),`
`,e.jsx(n,{of:q})]})}function z(s={}){const{wrapper:r}={...t(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(i,{...s})}):i(s)}export{z as default};
