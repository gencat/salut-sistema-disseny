import{j as e,M as i,T as r,C as s}from"./index-DS-34JQe.js";import{useMDXComponents as l}from"./index-PSX0vFQO.js";import{S as o,P as d,D as c,A as p,I as m,a as h,F as b}from"./tabs.stories-CYWXErpS.js";import"./iframe-D_YQAhjb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function t(a){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .innerZoomElementWrapper {
      display: block !important;
    }
    .innerZoomElementWrapper div {
      width: 100% !important;
    }
    .css-10skpf4 > * {
      zoom: 0 !important;
    }
  `}),`
`,e.jsx(i,{of:o}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(r,{}),e.jsx("component-title",{children:"dss-tabs-list"}),e.jsx("component-title",{children:"dss-tabs-panel"})]}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.p,{children:"Per tal d'implementar les tabs hem d'utilitzar dos tipus de components:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"dss-tabs-list"})}),": Conté la capçalera del component amb tots els ítems interactius que faran visibles les pestanyes corresponents. Només s’ha de definir una vegada."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"dss-tabs-panel"})}),": És el contenidor que s’activarà quan es faci clic en una tab. S’ha de definir un contenidor per cada pestanya disponible."]}),`
`]}),`
`,e.jsx(n.p,{children:"Les propietats definides en cada un dels components han d’estar relacionades per permetre el correcte funcionament de les tabs."}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"funcionalitats",children:"Funcionalitats"}),`
`,e.jsx(n.h4,{id:"seleccionar-tab",children:"Seleccionar Tab"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Mètode:"})," selectTab",e.jsx("br",{}),`
`,e.jsx(n.strong,{children:"Paràmetres:"})," id ",e.jsx(n.code,{children:"string"})," - id definit per a la pestanya a la llista de tabs enviada al component com a propietat.",e.jsx("br",{}),`
`,e.jsx(n.strong,{children:"Descripció:"})," permet seleccionar una pestanya de forma externa sense haver de fer clic al component.",e.jsx("br",{}),`
`,e.jsx(n.strong,{children:"Exemple React:"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`/* Controller */
const tabs = [
  ...
  { id: 'tab-103', text: 'Last tab', panel: 'tabpanel-103' },
  ...
];  
const tabsRef = useRef(null);
const forceChangeTab = () => {
  const tabList = tabsRef.current as any;
  if (!tabList) return;
  tabList.selectTab('tab-103');
}

/* Template */
<dss-button label="Change Tab" onClick={forceChangeTab}></dss-button>
<dss-tabs-list ref={tabsRef} tabs={options} ...>

`})}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#default",children:"Default"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-afegir-tab",children:"Amb afegir tab"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-icon-badge",children:"Amb icon badge"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-scroll-horitzontal",children:"Amb scroll horitzontal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-al%C3%A7ada-completa",children:"Amb alçada completa"})}),`
`]}),`
`,e.jsx(n.h4,{id:"default",children:"Default"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h4,{id:"amb-afegir-tab",children:"Amb afegir tab"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h4,{id:"amb-icon-badge",children:"Amb Icon Badge"}),`
`,e.jsxs(n.p,{children:[`S'ha afegit un slot dins del component per tal de poder afegir un badge dins de cada pestanya.
Per a implementar aquesta funcionalitat s'ha d'afegir el codi HTML dins del component `,e.jsx(n.code,{children:"dss-tabs-list"}),`
afegint la propietat `,e.jsx(n.em,{children:'slot="badge-tabID"'}),`, on tabID serà el mateix valor que s'ha definit prèviament
per a cada tab en la propietat tabs.`]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h4,{id:"amb-scroll-horitzontal",children:"Amb scroll horitzontal"}),`
`,e.jsx(n.p,{children:"S'ha modificat el comportament del component quan les pestanyes no caben en l'amplada del contenidor, afegint una funcionalitat de desplaçament mitjançant dos botons que apareixeran dinàmicament a l'esquerra o a la dreta de la llista de pestanyes."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h4,{id:"amb-alçada-completa",children:"Amb alçada completa"}),`
`,e.jsxs(n.p,{children:["La propietat ",e.jsx(n.code,{children:"fullHeight"})," ajusta l'alçada del component a la del seu contenidor, la qual cosa permet tenir un scroll intern dins del component a la part dels panells, fent que la llista de pestanyes sigui sempre visible."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Per utilitzar aquesta variant és obligatori que el contenidor pare tingui una alçada definida, ja sigui mitjançant el height de CSS o un display flex:1"}),`
`]}),`
`,e.jsx(s,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"resolució-de-problemes",children:"Resolució de problemes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Problema: Panells visibles a l'iniciar el component"}),e.jsx("br",{}),`
S'ha detectat que en alguns navegadors pot donar-se el cas que els panells es mostrin durant un instat abans que el component Lit apliqui les seves fulles d'estil.`,e.jsx("br",{}),`
`,e.jsx(n.strong,{children:"Solució:"}),e.jsx("br",{}),`
Afegir a la fulla d'estils de la seva pròpia pàgina/aplicació el següent codi CSS:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`  :not(:defined) {
    display: none;
  }
`})})]})}function A(a={}){const{wrapper:n}={...l(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(t,{...a})}):t(a)}export{A as default};
