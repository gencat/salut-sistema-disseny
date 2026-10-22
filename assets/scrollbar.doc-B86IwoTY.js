import{j as s,M as a,S as l}from"./blocks-C4mqd9A0.js";import{useMDXComponents as n}from"./index-DhffTHRh.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CSkTF4zm.js";function r(e){const t={h1:"h1",p:"p",...n(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
  .scrollbar-demo {
    height: 200px;
    overflow: auto;
    border-top: 1px solid var(--color-neutral-100);
    border-bottom: 1px solid var(--color-neutral-100);
    padding: 16px;
  }
  .scrollbar-item {
    height: 500px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
  .scrollbar-item .text {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: bold;
  }
`}),`
`,s.jsx(a,{title:"Foundations/Scrollbar",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,s.jsx(t.h1,{id:"scrollbar",children:"Scrollbar"}),`
`,s.jsx(t.p,{children:`L’estil de les barres de desplaçament està definit a les foundations del nostre Design System i
s’aplica automàticament tant als components com a la resta d’elements de la iniciativa en què
s’importi algun dels nostres fitxers CSS base (main.css o foundation.css).`}),`
`,s.jsx("div",{class:"scrollbar-demo",children:s.jsxs("div",{class:"scrollbar-item",children:[s.jsx("span",{class:"text",children:"Scrolling"}),s.jsx("span",{class:"text",children:"🔽"}),s.jsx("span",{class:"text",children:"🔽"}),s.jsx("span",{class:"text",children:"🔽"}),s.jsx("span",{class:"text",children:"🔽"}),s.jsx("span",{class:"text",children:"🔽"}),s.jsx("span",{class:"text",children:"🔼"}),s.jsx("span",{class:"text",children:"🔼"}),s.jsx("span",{class:"text",children:"🔼"}),s.jsx("span",{class:"text",children:"🔼"}),s.jsx("span",{class:"text",children:"🔼"}),s.jsx("span",{class:"text",children:"Scrolling"})]})}),`
`,s.jsx("br",{}),`
`,s.jsx(t.p,{children:`A continuació, compartim els estils que cal definir per a aquesta foundation en cas que necessiteu
aplicar-los en dissenys específics fora del Design System.`}),`
`,s.jsx(l,{code:`
* {
  scrollbar-width: thin;
  scrollbar-color: var(--color-neutral-100) var(--color-white);
}

*::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

*::-webkit-scrollbar-track {
  background: var(--color-white);
  border-radius: 128px;
}

*::-webkit-scrollbar-thumb {
  background-color: var(--color-neutral-100);
  border-radius: 128px;
}
`})]})}function p(e={}){const{wrapper:t}={...n(),...e.components};return t?s.jsx(t,{...e,children:s.jsx(r,{...e})}):r(e)}export{p as default};
