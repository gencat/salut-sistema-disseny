import{j as e,M as i,T as p,C as r,S as a}from"./index-CRXZcEuw.js";import{useMDXComponents as l}from"./index-DfI6Iev8.js";import{S as c,P as o,C as d,H as x,a as h,b as m,V as j,c as u,d as b,e as S,f,g,I as q,A as v,E as N,D as z}from"./stepper.stories-CDZR5Nrq.js";import"./iframe-nUu_t3LE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-element-BL4lq474.js";import"./lit-html-D6cejpwM.js";import"./storybook-decorators-DSS85Rnr.js";function t(n){const s={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(p,{}),e.jsx("component-title",{children:"dss-stepper"})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"IMPORTANT:"}),` S'ha refactoritzat el component perquè pugui ajustar-se a l'ample o alt del seu contenidor dinàmicament.
L'stepper horitzontal serà mes senzill de controlar, ja que els divs solen ajustar-se al width 100% disponible. Quan utilitzi l'stepper vertical,
asseguri's que el seu contenidor té un height definit (pot ser fixa usant píxels o dinàmica, per exemple amb display grid).
Si no es defineix l'alçada, el component s'ajustarà a la mida i marges per defecte.`]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(s.h3,{id:"creació",children:"Creació"}),`
`,e.jsxs(s.p,{children:[`Per crear un stepper hem de fer servir la següent estructura. La propietat
`,e.jsx(s.strong,{children:"steps"})," és un array d'objectes format per un ",e.jsx(s.strong,{children:"label"}),` com a dada
obligatòria i el `,e.jsx(s.strong,{children:"icon"})," com a dada opcional. La propietat ",e.jsx(s.strong,{children:"size"}),` ha de
venir indicada per `,e.jsx(s.strong,{children:"sm, md, lg"}),`, per defecte si no indiquem el size serà
`,e.jsx(s.strong,{children:"md"}),". La propietat ",e.jsx(s.strong,{children:"currentStep"}),` ens indica la posició en què ens trobem,
per defecte és 1.`]}),`
`,e.jsx(a,{code:`
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
`,e.jsx(a,{code:`
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
`,e.jsx(a,{code:`
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
`,e.jsxs(s.p,{children:["Per crear un stepper amb els labels ocutls hem d'indicar la propietat ",e.jsx(s.strong,{children:"hideLabel"}),"."]}),`
`,e.jsx(a,{code:`
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
`,e.jsx(r,{of:d}),`
`,e.jsx(s.h3,{id:"exemples-stepper-horitzontal",children:"Exemples stepper horitzontal"}),`
`,e.jsx(s.p,{children:`Aquesta variant del Stepper es disposa en línia horitzontal. És una opció
adequada per a les pantalles més amples.`}),`
`,e.jsx("h5",{children:"Stepper Petit"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx("h5",{children:"Stepper Mitjà"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx("h5",{children:"Stepper Gran"}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(s.h3,{id:"exemples-stepper-vertical",children:"Exemples stepper vertical"}),`
`,e.jsx(s.p,{children:`Aquesta variant del Stepper es disposa en línia vertica. És més adequat per a
dispositius mòbils i pantalles o contenidors estrets.`}),`
`,e.jsx("h5",{children:"Stepper Petit"}),`
`,e.jsx(r,{of:j}),`
`,e.jsx("h5",{children:"Stepper Mitjà"}),`
`,e.jsx(r,{of:u}),`
`,e.jsx("h5",{children:"Stepper Gran"}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(s.h3,{id:"stepper-sense-labels",children:"Stepper sense Labels"}),`
`,e.jsx(r,{of:S}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(s.h3,{id:"stepper-amb-estats",children:"Stepper amb estats"}),`
`,e.jsx(s.p,{children:"Els estils propis de cada estat només apareixeran quan l'step no coincideixi amb el currentStep. El currentStep sempre mantindrà el mateix estil amb fons blau i text blanc."}),`
`,e.jsx("h5",{children:"Stepper amb estats: checked"}),`
`,e.jsx(r,{of:g}),`
`,e.jsx("h5",{children:"Stepper amb estats: info"}),`
`,e.jsx(r,{of:q}),`
`,e.jsx("h5",{children:"Stepper amb estats: alert"}),`
`,e.jsx(r,{of:v}),`
`,e.jsx("h5",{children:"Stepper amb estats: error"}),`
`,e.jsx(r,{of:N}),`
`,e.jsx("h5",{children:"Stepper amb estats: disabled"}),`
`,e.jsx(r,{of:z})]})}function y(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{y as default};
