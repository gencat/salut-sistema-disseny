import{j as e,M as l,T as d,C as n,a}from"./index-uk_aGwjk.js";import{useMDXComponents as t}from"./index-DNjVFplD.js";import{S as o,P as c,B as x,D as h,M as j,F as p}from"./upload-box.stories-CY_Euaxb.js";import"./iframe-B4wcjDtv.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";function i(r){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .innerZoomElementWrapper{
        flex-direction: column;
        align-items: flex-start;
    }
    .upload-box-wrapper {
        width: 400px;
    }
  `}),`
`,e.jsx(l,{of:o}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(d,{}),e.jsx("dss-badge",{text:"dss-upload-box",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:"El component 'upload box' permet als usuaris seleccionar fitxers o utilitzar arrossegar i deixar anar per carregar-los al sistema. A través de les propietats del component podrà seleccionar-se a més el tipus de formats permesos així com la mida màxima que poden tenir els fitxers."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(a,{}),`
`,e.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"dragAndDropIcon"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'file_upload'"}),e.jsx(s.td,{children:"Icona mostrada dins del component."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"fileExplorerMessage"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'Clica per pujar'"}),e.jsx(s.td,{children:"Text que notifica sobre la possibilitat d'obrir el navegador per seleccionar arxius manualment"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"dragAndDropMessage"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'o arxius arrossega aquí'"}),e.jsx(s.td,{children:"Text que notifica sobre la possibilitat de fer drag & drop."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"filesFormatMessage"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'PDF, JPEG o PNG de menys de 5MB'"}),e.jsx(s.td,{children:"Text que detalla els tipus de fitxers permesos."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"filesFormat"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string[]"})}),e.jsx(s.td,{children:'["pdf","jpeg","png"]'}),e.jsx(s.td,{children:"Llista de formats de fitxers permesos."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"maxFileSize"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number"})}),e.jsx(s.td,{children:"5242880 (5Mb)"}),e.jsx(s.td,{children:"Mida màxima d'arxiu permesa. S'ha de definir en bytes."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"disableOpenFile"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Deshabilita la funcionalitat de tornar l'arxiu clicat en un esdeveniment per poder obrir-lo des de la iniciativa."})]})]})]})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Nota: a més d'aquestes propietats es podrà fer ús de qualsevol propietat nativa de l'input:file a través de l'slot. Per exemple: disabled o multiple"}),`
`]}),`
`,e.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onUploadFiles"})}),e.jsx(s.td,{children:"Retorna la llista de fitxers que s'ha afegit al selector bé de forma manual o utilitzant l'esdeveniment drag & drop."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onOpenFile"})}),e.jsx(s.td,{children:"Retorna el fitxer sobre el qual s'ha fet clic. La funcionalitat per mostrar el fitxer dependrà de cada iniciativa."})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"mètodes-públics",children:"Mètodes públics"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"resetFiles"})}),e.jsx(s.td,{children:"Elimina tots els fitxers emmagatzemats internament al component."})]})})]}),`
`,e.jsx(s.p,{children:"Per poder executar aquests mètodes, cal capturar el component des de cada iniciativa segons el framework utilitzat i simplement executar la funció com qualsevol altra:"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Exemple React"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`const uploadBoxRef = useRef<any>(null); 

const uploadBoxReset = () => {
  uploadBoxRef?.current?.resetFiles();
}

<dss-upload-box ref={uploadBoxRef}>
  <input type="file" slot="input" />
</dss-upload-box>

<dss-button variant="error" label="Reset Files" onclick={uploadBoxReset}></dss-button>

`})}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#default",children:"Default"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#disabled",children:"Estats: Disabled"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#multiple",children:"Estats: Multiple"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#format-d-arxius",children:"Format d'arxius"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Nota: el contenidor amb classe upload-box-wrapper només es defineix per millorar la visualització del component a Storybook però no cal utilitzar-lo a les aplicacions finals."}),`
`]}),`
`,e.jsx(s.h3,{id:"default",children:"Default"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.h3,{id:"estats",children:"Estats"}),`
`,e.jsx(s.h4,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s.p,{children:"Important: la propietat disabled s'ha d'assignar com a atribut de l'input i no com a propietat general del component."}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.h4,{id:"multiple",children:"Multiple"}),`
`,e.jsx(s.p,{children:"La propietat multiple permet que al selector d'arxius manual puguem seleccionar diversos fitxers alhora per alinear el comportament al drag & drop."}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.h3,{id:"format-darxius",children:"Format d'arxius"}),`
`,e.jsx(s.p,{children:"Quan es modifiquen els formats de fitxer és important canviar també el missatge sobre aquests."}),`
`,e.jsx(n,{of:p}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.0.0"})}),e.jsx(s.td,{children:"Refactor v2."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.10.0"})}),e.jsx(s.td,{children:"S'ha modificat la gestió de la càrrega d'arxius al navegador per mostrar un estat de 'loading' i també poder capturar el missatge d'error del propi navegador si ocorre algun problema durant la mateixa."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.9.0"})}),e.jsx(s.td,{children:"S'ha modificat l'aparença del component per millorar la interacció amb aquest."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.8.0"})}),e.jsx(s.td,{children:"Nou component que permet adjuntar arxius de manera manual o mitjançant Drag&Drop."})]})]})]})]})}function M(r={}){const{wrapper:s}={...t(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(i,{...r})}):i(r)}export{M as default};
