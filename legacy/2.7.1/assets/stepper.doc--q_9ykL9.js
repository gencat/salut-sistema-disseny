import{j as e,M as a,T as d,C as r,a as c,S as t}from"./index-38zNK1Ms.js";import{useMDXComponents as i}from"./index-CYIFmVlv.js";import{S as o,P as p,C as h,H as x,a as j,b as m,V as u,c as b,d as f,e as g,f as S,g as v,I as q,A as N,E as z,D as M}from"./stepper.stories-D0jAMOmq.js";import"./iframe-B9pHa-5w.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-element-Dloa6E9d.js";import"./lit-html-D6a8R3xZ.js";function l(n){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
    }
    .horizontal-wrapper {
      width: 500px;
      margin: 0 50px;
    }

    .vertical-wrapper {
      height: 200px;
    }

    .vertical-wrapper--md {
      height: 300px;
    }

    .vertical-wrapper--lg {
      height: 400px;
    }
  `}),`
`,e.jsx(a,{of:o}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(d,{}),e.jsx("dss-badge",{text:"dss-stepper",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:`Un Stepper és un component que es fa servir per permetre als usuaris veure el
punt en el qual es troben en un procés específic. Aquest component és útil per
als usuaris que necessiten completar múltiples passos o etapes per aconseguir
un objectiu determinat.`}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"IMPORTANT:"}),` S'ha refactoritzat el component perquè pugui ajustar-se a l'ample o alt del seu contenidor dinàmicament.
L'stepper horitzontal serà mes senzill de controlar, ja que els divs solen ajustar-se al width 100% disponible. Quan utilitzi l'stepper vertical,
asseguri's que el seu contenidor té un height definit (pot ser fixa usant píxels o dinàmica, per exemple amb display grid).
Si no es defineix l'alçada, el component s'ajustarà a la mida i marges per defecte.`]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(c,{}),`
`,e.jsx(s.h2,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["steps",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"IStepper[] o []"})}),e.jsx(s.td,{children:"Objecte que conté la informació relacionada amb cada pas."}),e.jsx(s.td,{})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"currentStep"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number"})}),e.jsx(s.td,{children:"1"}),e.jsx(s.td,{children:"Defineix el pas actual que es mostra per defecte."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"column"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Mostra el component amb el format de columna."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"circular"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Mostra el component amb el format circular."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hideLabel"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Oculta les etiquetes dins del component."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"size"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"md"}),e.jsx(s.td,{children:"Defineix la mida del component."})]})]})]})}),`
`,e.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx(s.h3,{id:"istepper",children:"IStepper"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["label",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Text que es mostra a sota de cada pas."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"icon"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Icona mostrada a la bombolla dins de cada pas."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"state"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsxs(s.td,{children:["Modificarà el color per a informar que alguna cosa passa durant l'últim pas. Podria ser: '",e.jsx(s.strong,{children:"checked"}),"', '",e.jsx(s.strong,{children:"info"}),"', '",e.jsx(s.strong,{children:"alert"}),"', o '",e.jsx(s.strong,{children:"error"}),"'"]})]})]})]})}),`
`,e.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx(s.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onStepClick"})}),e.jsxs(s.td,{children:["Esdeveniment que retorna el nombre del step clicat i totes les dades del mateix. ",e.jsx(s.code,{children:"event.detail: { step, stepNumber }"})]})]})})]})}),`
`,e.jsx(s.h2,{id:"creació",children:"Creació"}),`
`,e.jsxs(s.p,{children:[`Per crear un stepper hem de fer servir la següent estructura. La propietat
`,e.jsx(s.strong,{children:"steps"})," és un array d'objectes format per un ",e.jsx(s.strong,{children:"label"}),` com a dada
obligatòria i el `,e.jsx(s.strong,{children:"icon"})," com a dada opcional. La propietat ",e.jsx(s.strong,{children:"size"}),` ha de
venir indicada per `,e.jsx(s.strong,{children:"sm, md, lg"}),`, per defecte si no indiquem el size serà
`,e.jsx(s.strong,{children:"md"}),". La propietat ",e.jsx(s.strong,{children:"currentStep"}),` ens indica la posició en què ens trobem,
per defecte és 1.`]}),`
`,e.jsx(t,{code:`
<dss-stepper
  steps="[
      { label: 'Step Name', icon: 'add_box', state: 'checked' },
      { label: 'Step Name' },
      { label: 'Step Name', icon: 'add_box' },
      { label: 'Step Name' }
    ]"
  currentStep="2"
  size="lg"
></dss-stepper>`}),`
`,e.jsx("h3",{children:"Stepper vertical"}),`
`,e.jsxs(s.p,{children:["Per crear un stepper vertical hem d'indicar la propietat ",e.jsx(s.strong,{children:"column"}),"."]}),`
`,e.jsx(t,{code:`
<dss-stepper
  steps="[
      { label: 'Step Name', icon: 'add_box', state: 'checked' },
      { label: 'Step Name' },
      { label: 'Step Name', icon: 'add_box' },
      { label: 'Step Name' }
    ]"
  currentStep="1"
  size="lg"
  column
></dss-stepper>`}),`
`,e.jsx("h3",{children:"Stepper circular"}),`
`,e.jsxs(s.p,{children:["Per crear un stepper circular hem d'indicar la propietat ",e.jsx(s.strong,{children:"circular"}),`, no cal
indicar el `,e.jsx(s.strong,{children:"size"}),"."]}),`
`,e.jsx(t,{code:`
<dss-stepper
  steps="[
      { label: 'Step Name', icon: 'add_box' },
      { label: 'Step Name' },
      { label: 'Step Name', icon: 'add_box' },
      { label: 'Step Name' }
    ]"
  currentStep="1"
  circular
></dss-stepper>`}),`
`,e.jsx("h3",{children:"Ocultar Labels"}),`
`,e.jsxs(s.p,{children:[`Per crear un stepper amb els labels ocutls hem d'indicar la propietat
`,e.jsx(s.strong,{children:"hideLabel"}),"."]}),`
`,e.jsx(t,{code:`
<dss-stepper
  steps="[
      { label: 'Step Name', icon: 'add_box' },
      { label: 'Step Name' },
      { label: 'Step Name', icon: 'add_box' },
      { label: 'Step Name' }
    ]"
  currentStep="1"
  size="lg"
  hideLabel
></dss-stepper>`}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#exemple-stepper-circular",children:"Circular"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#exemples-stepper-horizontal",children:"Horizontal"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#exemples-stepper-vertical",children:"Vertical"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#stepper-sense-labels",children:"Sense labels"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#stepper-amb-estats",children:"Amb estats"})}),`
`]}),`
`,e.jsx(s.h3,{id:"exemple-stepper-circular",children:"Exemple stepper circular"}),`
`,e.jsx(s.p,{children:`En aquesta variant, els passos del procés es mostren en cercles o radis,
disposats al voltant d'un cercle central. Aquesta opció és adequada per als
dissenys que volen destacar un element central o per als processos que es
desenvolupen en cercles o fases.`}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(s.h3,{id:"exemples-stepper-horitzontal",children:"Exemples stepper horitzontal"}),`
`,e.jsx(s.p,{children:`Aquesta variant del Stepper es disposa en línia horitzontal. És una opció
adequada per a les pantalles més amples.`}),`
`,e.jsx("h5",{children:"Stepper Petit"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx("h5",{children:"Stepper Mitjà"}),`
`,e.jsx(r,{of:j}),`
`,e.jsx("h5",{children:"Stepper Gran"}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(s.h3,{id:"exemples-stepper-vertical",children:"Exemples stepper vertical"}),`
`,e.jsx(s.p,{children:`Aquesta variant del Stepper es disposa en línia vertica. És més adequat per a
dispositius mòbils i pantalles o contenidors estrets.`}),`
`,e.jsx("h5",{children:"Stepper Petit"}),`
`,e.jsx(r,{of:u}),`
`,e.jsx("h5",{children:"Stepper Mitjà"}),`
`,e.jsx(r,{of:b}),`
`,e.jsx("h5",{children:"Stepper Gran"}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(s.h3,{id:"stepper-sense-labels",children:"Stepper sense Labels"}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(r,{of:S}),`
`,e.jsx(s.h3,{id:"stepper-amb-estats",children:"Stepper amb estats"}),`
`,e.jsx(s.p,{children:"Els estils propis de cada estat només apareixeran quan l'step no coincideixi amb el currentStep. El currentStep sempre mantindrà el mateix estil amb fons blau i text blanc."}),`
`,e.jsx("h5",{children:"Stepper amb estats: checked"}),`
`,e.jsx(r,{of:v}),`
`,e.jsx("h5",{children:"Stepper amb estats: info"}),`
`,e.jsx(r,{of:q}),`
`,e.jsx("h5",{children:"Stepper amb estats: alert"}),`
`,e.jsx(r,{of:N}),`
`,e.jsx("h5",{children:"Stepper amb estats: error"}),`
`,e.jsx(r,{of:z}),`
`,e.jsx("h5",{children:"Stepper amb estats: disabled"}),`
`,e.jsx(r,{of:M})]})}function T(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{T as default};
