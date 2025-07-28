import{j as e,M as i}from"./index-B03RRnwf.js";import{useMDXComponents as s}from"./index-CvryOKBv.js";import"./DocsRenderer-CFRXHY34-BkWpt6w1.js";import"./iframe-LtfO51Ti.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";function r(n){const t={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"API's/Marker"}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"marker-api",children:"Marker API"}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h3,{id:"highlighttext",children:"highlightText"}),`
`,e.jsxs(t.p,{children:[`La funció highlightText permet ressaltar coincidències dins un text segons un filtre (o marcador).
Cada coincidència es marca envoltant-la amb una etiqueta `,e.jsx(t.code,{children:'<span class="dss-mark">'}),", que es pot estilitzar via CSS per destacar visualment les paraules trobades."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { highlightText } from '@salut/design-system-salut/api/marker/marker';

highlightText(text: string, marker: string | undefined): string

`})}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Name"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Default"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsxs(t.strong,{children:["text",e.jsx("span",{children:"*"})]})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"-"}),e.jsx(t.td,{children:"El text d’origen on es buscaran les coincidències."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsxs(t.strong,{children:["marker",e.jsx("span",{children:"*"})]})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"-"}),e.jsx(t.td,{children:"El filtre o paraula clau a ressaltar dins del text. Si no s’especifica o és buit, es retorna el text original sense modificar."})]})]})]})}),`
`,e.jsx(t.p,{children:"(*) Paràmetre obligatori"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"El valor retornat per aquesta funcionalitat és una cadena de text amb HTML incrustat, per la qual cosa cada iniciativa haurà de fer la conversió a HTML real en funció del framework utilitzat. (Javascript: innerHTML, Lit: unsafeHTML, etc)."}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsxs(t.h3,{id:"com-sutilitza-react",children:["Com s’utilitza ",e.jsx(t.em,{children:"(React)"})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { highlightText } from '@salut/design-system-salut/api/marker/marker';

const [filter, setFilter] = useState('');

const text = 'Aquesta és una frase d’exemple amb diverses paraules.';

const highlighted = highlightText(text, filter);


return (
  <input
    type="text"
    placeholder="Escriu per ressaltar..."
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    style={{ width: '200px' }}
  />

  <div
    dangerouslySetInnerHTML={{ __html: highlighted }}
    style={{ fontSize: '14px' }}
  />
)

`})}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Versió"}),e.jsx(t.th,{children:"Canvis"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"2.7.0"})}),e.jsx(t.td,{children:"Nou API."})]})})]})]})}function u(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{u as default};
