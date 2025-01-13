import{x as s}from"./lit-html-B2eaWknC.js";const a=""+new URL("gencat-logotip-default-DgxwRSWF.svg",import.meta.url).href,i={title:"Components/Footer",argTypes:{description:{name:"Descripció"}},parameters:{layout:"centered"}},e={args:{description:"Historial Electrònic de Salut (HES)"},render:n=>s`
      <dss-footer 
        logo="${a}"
        description="${n.description}">
      </dss-footer>
    `};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    description: 'Historial Electrònic de Salut (HES)'
  },
  render: (args: any) => {
    return html\`
      <dss-footer 
        logo="\${logoGeneralitat}"
        description="\${args.description}">
      </dss-footer>
    \`;
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const c=["Playground"],l=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:c,default:i},Symbol.toStringTag,{value:"Module"}));export{e as P,l as S};
