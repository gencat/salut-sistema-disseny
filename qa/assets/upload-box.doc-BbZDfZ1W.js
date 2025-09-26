import{j as e,M as a,T as l,C as s}from"./index-D9TfxTTE.js";import{useMDXComponents as t}from"./index-C5FRAOUF.js";import{S as d,P as o,B as c,D as x,a as p,F as h,b as m,c as u}from"./upload-box.stories-Axt1DyuK.js";import"./iframe-ooham6nO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";function r(n){const i={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .innerZoomElementWrapper{
        flex-direction: column;
        align-items: flex-start;
    }
    .upload-box-wrapper {
        width: 400px;
    }
  `}),`
`,e.jsx(a,{of:d}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("component-title",{children:"dss-upload-box"})]}),`
`,e.jsx("br",{}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:o}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Name"}),e.jsx(i.th,{children:"Description"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"onUploadFiles"})}),e.jsx(i.td,{children:"Retorna la llista de fitxers que s'ha afegit al selector bé de forma manual o utilitzant l'esdeveniment drag & drop."})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"onOpenFile"})}),e.jsx(i.td,{children:"Retorna el fitxer sobre el qual s'ha fet clic. La funcionalitat per mostrar el fitxer dependrà de cada iniciativa."})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h3,{id:"mètodes-públics",children:"Mètodes públics"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Name"}),e.jsx(i.th,{children:"Description"})]})}),e.jsx(i.tbody,{children:e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"resetFiles"})}),e.jsx(i.td,{children:"Elimina tots els fitxers emmagatzemats internament al component."})]})})]})}),`
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
`,e.jsx(s,{of:c}),`
`,e.jsx(i.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(i.p,{children:"Important: la propietat disabled s'ha d'assignar com a atribut de l'input i no com a propietat general del component."}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(i.h3,{id:"amb-descripció",children:"Amb descripció"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(i.h3,{id:"format-darxius",children:"Format d'arxius"}),`
`,e.jsx(i.p,{children:"Quan es modifiquen els formats de fitxer és important canviar també el missatge sobre aquests."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(i.h3,{id:"limit-darxius",children:"Limit d'arxius"}),`
`,e.jsx(i.p,{children:"Limita el nombre màxim d'arxius que es poden pujar tant en arrossegar i deixar anar com a través de l'explorador d'arxius de l'input."}),`
`,e.jsx(i.h4,{id:"limit-dun-sol-arxiu",children:"Limit d'un sol arxiu"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(i.h4,{id:"limit-de-diversos-arxius",children:"Limit de diversos arxius"}),`
`,e.jsx(s,{of:u})]})}function R(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{R as default};
