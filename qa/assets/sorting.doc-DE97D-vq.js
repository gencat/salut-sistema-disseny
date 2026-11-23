import{j as e,M as a,S as t}from"./blocks-ssZSziG5.js";import{useMDXComponents as i}from"./index-Fog1LiPB.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CE49kmds.js";function s(r){const n={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Utils/Sorting",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx(n.h1,{id:"ordenació-de-dades",children:"Ordenació de dades"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["La utilitat ",e.jsx(n.code,{children:"sort"})," serveix per ordenar arrays d'objectes de forma consistent i reutilitzable en diferents components. És especialment útil en taules, llistes, selects o qualsevol vista amb dades que poden reordenar-se en funció del camp seleccionat."]}),`
`]}),`
`,e.jsx(n.h3,{id:"funcionalitat",children:"Funcionalitat"}),`
`,e.jsx(n.p,{children:"La utilitat accepta:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"items"}),": l'array d'objectes a ordenar"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sortBy"}),": el nom del camp a ordenar"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sortOrder"}),": ",e.jsx(n.code,{children:"asc"})," o ",e.jsx(n.code,{children:"desc"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dataType"}),": ",e.jsx(n.code,{children:"string"}),", ",e.jsx(n.code,{children:"number"})," o ",e.jsx(n.code,{children:"date"})]}),`
`]}),`
`,e.jsx(n.p,{children:"La funció retorna una còpia ordenada sense mutar l'array original."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { sort } from '../../utils/sorting';

const data = [
  { name: 'Charlie', score: 20 },
  { name: 'Alice', score: 90 },
  { name: 'Bob', score: 45 },
];

const sorted = sort(data, 'score', 'asc', 'number');
`})}),`
`,e.jsx(n.h3,{id:"casos-dús-habituals",children:"Casos d'ús habituals"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ordenar el contingut d'una taula per nom, data o import."}),`
`,e.jsx(n.li,{children:"Ordenar element d'un selector o dropdown al carregar-se."}),`
`,e.jsx(n.li,{children:"Reaplicar el mateix criteri de classificació en diferents components de la mateixa aplicació."}),`
`]}),`
`,e.jsx(n.h3,{id:"consideracions",children:"Consideracions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Si el camp és numèric, cal passar ",e.jsx(n.code,{children:"dataType = 'number'"}),"."]}),`
`,e.jsxs(n.li,{children:["Si és una data, ",e.jsx(n.code,{children:"dataType = 'date'"})," i el valor pot venir en format ISO, ",e.jsx(n.code,{children:"dd/mm/yyyy"})," o ",e.jsx(n.code,{children:"Date"}),"."]}),`
`,e.jsxs(n.li,{children:["Si és text, ",e.jsx(n.code,{children:"dataType = 'string'"})," fa una comparació segons ",e.jsx(n.code,{children:"localeCompare"}),"."]}),`
`,e.jsx(n.li,{children:"La funció només permet ordenar en sentit ascendent o descendent. No guarda en memòria el conjunt original de dades, així que no pot revertir a l'ordre primitiu de forma automàtica."}),`
`,e.jsx(n.li,{children:"Si la iniciativa necessita desfer el filtrat o l'ordenació, ha de conservar el state original de les dades i tornar a renderitzar-ho explícitament."}),`
`]}),`
`,e.jsx(n.p,{children:"La idea és tenir una única funció de referència per evitar duplicació i inconsistències en la classificació de les dades."}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"exemple-de-react",children:"Exemple de React"}),`
`,e.jsx(t,{code:`
import { useMemo, useState } from 'react';
import { sort } from '@salut/design-system-salut/utils/sorting';

const people = [
{ id: 1, name: 'Marta', age: 31 },
{ id: 2, name: 'Alba', age: 24 },
{ id: 3, name: 'Joan', age: 42 },
];

export function SortingExample() {
const [order, setOrder] = useState<'asc' | 'desc'>('asc');

const sortedPeople = useMemo(() => {
  return sort(people, 'age', order, 'number');
}, [order]);

return (
  <div>
    <button onClick={() => setOrder('asc')}>Asc</button>
    <button onClick={() => setOrder('desc')}>Desc</button>

    <ul>
      {sortedPeople.map((person) => (
        <li key={person.id}>{person.name}: {person.age}</li>
      ))}
    </ul>
  </div>
);
}
`})]})}function m(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{m as default};
