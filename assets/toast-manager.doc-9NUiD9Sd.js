import{j as e,M as o,T as i,C as l,a as r}from"./blocks-CmUYoZh4.js";import{useMDXComponents as n}from"./index-DZthTCuD.js";import{S as c,P as m}from"./toast-manager.stories-XkeaWBPc.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DHQWIC1_.js";function t(s){const a={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",...n(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(i,{}),e.jsx("component-title",{children:"dss-toast-manager"})]}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(l,{of:m}),`
`,e.jsx("dss-alert",{fullWidth:!0,state:"warning",message:"Aquesta col·lecció situa els elements amb una posició fixed respecte al 100% de la mida disponible a la pantalla, per la qual cosa es recomana col·locar-la al nivell arrel del layout, per evitar que pugui entrar en conflicte amb altres components posicionats de manera relativa."}),`
`,e.jsx(r,{}),`
`,e.jsx(a.h3,{id:"ús",children:"Ús"}),`
`,e.jsx(a.p,{children:"Aquesta col·lecció s’ha implementat per facilitar la gestió de múltiples toast apilats simultàniament."}),`
`,e.jsxs(a.p,{children:["Els toast s’han d’incloure dins del manager mitjançant el slot HTML i afegint la propietat ",e.jsx(a.code,{children:"managed"}),`, que desactiva
el posicionament intern i delega en el manager la seva disposició i el nombre d’elements visibles.`]}),`
`,e.jsx(a.p,{children:"El component toast pot continuar utilitzant-se de manera independent si només es necessita una instància."}),`
`,e.jsxs(a.p,{children:["El toast-manager controla quants toast es mostren alhora (",e.jsx(a.code,{children:"maxVisibleToasts"}),`) i mostra el següent en cua quan se’n tanca un. El comportament
de tancament (automàtic o manual) es defineix a cada toast, com fins ara (`,e.jsx(a.code,{children:"duration"})," ",e.jsx(a.code,{children:"hasButtonClose"}),")."]}),`
`,e.jsx(a.p,{children:`Aquesta col·lecció es posiciona amb valor fixed, per la qual cosa és recomanable declarar-la al nivell més alt possible del layout per evitar
conflictes amb altres elements.`}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h3,{id:"exemple-en-react",children:"Exemple en React:"}),`
`,e.jsx(a.p,{children:`El toast-manager rep un mapeig de la propietat toastQueue, que afegeix nous toast com a notificacions i els mostra o
els manté en cua segons el màxim d’elements visibles definit.`}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-jsx",children:`
type Toast = {
	status: string; // info, warning, error, success
	message: string;
}

const [toastQueue, setToastQueue] = useState<Toast[]>([]);

const pushToast = () => {
  const newToast: Toast = {
    status: toastStatus,
    message: \`Your message here. Test: \${toastStatus}\`
  };
  setToastQueue([...toastQueue, newToast]);
}

// Template
return (
...
<dss-toast-manager maxVisibleToasts={3}>
  {toastQueue.map((toast, index) => (
    <dss-toast key={index} managed state={toast.status as any} text={toast.message} hasbuttonclose duration={0} />
  ))}
</dss-toast-manager>
...
)
`})})]})}function j(s={}){const{wrapper:a}={...n(),...s.components};return a?e.jsx(a,{...s,children:e.jsx(t,{...s})}):t(s)}export{j as default};
