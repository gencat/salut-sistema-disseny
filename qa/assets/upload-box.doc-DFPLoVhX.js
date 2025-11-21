import{j as e,M as t,T as l,C as n}from"./index-D6OjdqE2.js";import{useMDXComponents as r}from"./index-Cs_-3dnX.js";import{S as o,P as d,B as c,D as x,a as u,F as m,b as p,c as h}from"./upload-box.stories-DVyZbMPC.js";import"./iframe-Cp4mteJF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";import"./storybook-decorators-DSS85Rnr.js";function a(s){const i={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:o}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("component-title",{children:"dss-upload-box"})]}),`
`,e.jsx("br",{}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h3,{id:"funcionalitats",children:"Funcionalitats"}),`
`,e.jsx(i.h4,{id:"eliminar-fitxers",children:"Eliminar fitxers"}),`
`,e.jsx(i.p,{children:`Mètode: resetFiles()
Descripció: Elimina tots els fitxers emmagatzemats internament al component.`}),`
`,e.jsx(i.p,{children:"Per poder executar aquests mètodes, cal capturar el component des de cada iniciativa segons el framework utilitzat i simplement executar la funció com qualsevol altra:"}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Exemple React"})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{children:`const uploadBoxRef = useRef<any>(null); 

const uploadBoxReset = () => {
  uploadBoxRef?.current?.resetFiles();
}

<dss-upload-box ref={uploadBoxRef}>
  <input type="file" slot="input" />
</dss-upload-box>

<dss-button variant="error" label="Reset Files" onclick={uploadBoxReset}></dss-button>

`})}),`
`,e.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#default",children:"Default"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#disabled",children:"Disabled"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#amb-descripci%C3%B3",children:"Amb descripció"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#format-d-arxius",children:"Format d'arxius"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#limit-d-arxius",children:"Limit d'arxius"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"Nota: el contenidor amb classe upload-box-wrapper només es defineix per millorar la visualització del component a Storybook però no cal utilitzar-lo a les aplicacions finals."}),`
`]}),`
`,e.jsx(i.h3,{id:"default",children:"Default"}),`
`,e.jsx(i.p,{children:`La funcionalitat de drag & drop permet adjuntar múltiples fitxers al mateix temps, per la qual cosa, per tenir un comportament consistent, recomanem
que l'input type=file inclogui l'atribut multiple per defecte. En cas de definir un màxim d'un fitxer permès, s'hauria de treure aquesta propietat multiple.`}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(i.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(i.p,{children:"Important: la propietat disabled s'ha d'assignar com a atribut de l'input i no com a propietat general del component."}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h3,{id:"amb-descripció",children:"Amb descripció"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h3,{id:"format-darxius",children:"Format d'arxius"}),`
`,e.jsx(i.p,{children:"Quan es modifiquen els formats de fitxer és important canviar també el missatge sobre aquests."}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h3,{id:"limit-darxius",children:"Limit d'arxius"}),`
`,e.jsx(i.p,{children:"Limita el nombre màxim d'arxius que es poden pujar tant en arrossegar i deixar anar com a través de l'explorador d'arxius de l'input."}),`
`,e.jsx(i.h4,{id:"limit-dun-sol-arxiu",children:"Limit d'un sol arxiu"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h4,{id:"limit-de-diversos-arxius",children:"Limit de diversos arxius"}),`
`,e.jsx(n,{of:h})]})}function y(s={}){const{wrapper:i}={...r(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(a,{...s})}):a(s)}export{y as default};
