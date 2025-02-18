import{x as i}from"./lit-html-B2eaWknC.js";const a=""+new URL("gencat-logotip-default-DgxwRSWF.svg",import.meta.url).href,n={title:"Components/Footer",argTypes:{description:{name:"Descripció"}},parameters:{layout:"centered"}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=273-8178&m=dev"}},args:{description:"Historial Electrònic de Salut (HES)"},render:s=>i`
        <div class="only-for-storybook-demo" style="min-width: 700px;">
            <dss-footer 
                logo="${a}"
                description="${s.description}">
            </dss-footer>
        </div>
    `};var o,t,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=273-8178&m=dev'
    }
  },
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
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const d=["Playground"],p=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:d,default:n},Symbol.toStringTag,{value:"Module"}));export{e as P,p as S};
