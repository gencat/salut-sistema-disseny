import{x as n}from"./lit-html-B2eaWknC.js";const i=""+new URL("gencat-logotip-default-DgxwRSWF.svg",import.meta.url).href,a={title:"Components/Footer",argTypes:{description:{name:"Descripció"}},parameters:{layout:"centered"}},e={args:{description:"Historial Electrònic de Salut (HES)"},render:s=>n`
        <div class="only-for-storybook-demo" style="min-width: 700px;">
            <dss-footer 
                logo="${i}"
                description="${s.description}">
            </dss-footer>
        </div>
    `};var o,r,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    description: 'Historial Electrònic de Salut (HES)'
  },
  render: (args: any) => {
    return html\`
        <div class="only-for-storybook-demo" style="min-width: 700px;">
            <dss-footer 
                logo="\${logoGeneralitat}"
                description="\${args.description}">
            </dss-footer>
        </div>
    \`;
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const d=["Playground"],c=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:d,default:a},Symbol.toStringTag,{value:"Module"}));export{e as P,c as S};
