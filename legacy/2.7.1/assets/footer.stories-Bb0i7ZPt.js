import{x as r}from"./lit-html-D6a8R3xZ.js";const i={title:"Components/Footer",argTypes:{description:{name:"Descripció"}},parameters:{layout:"centered"}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=273-8178&m=dev"}},args:{description:"Historial Electrònic de Salut (HES)"},render:a=>r`
        <style>
         .demo-warning {
                display: none;
                font-size: 14px;
            }
            @media only screen and (max-height: 808px) {
                    .demo-warning {
                        display: block;
                    }
            }
        </style>
        <div class="only-for-storybook-demo" style="min-width: 700px;">
            <dss-footer description="${a.description}">
            </dss-footer>
            <div class="demo-warning">
                El component "Footer" s'amaga automàticament quan l'altura és inferior a 808px.
                Si veus aquest missatge, si us plau, intenta augmentar l'altura del navegador.<br/>
                No incloguis el codi HTML d'aquest missatge si desitges copiar el component des de Storybook.
            </div>
        </div>
    `};var s,o,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
        <style>
         .demo-warning {
                display: none;
                font-size: 14px;
            }
            @media only screen and (max-height: 808px) {
                    .demo-warning {
                        display: block;
                    }
            }
        </style>
        <div class="only-for-storybook-demo" style="min-width: 700px;">
            <dss-footer description="\${args.description}">
            </dss-footer>
            <div class="demo-warning">
                El component "Footer" s'amaga automàticament quan l'altura és inferior a 808px.
                Si veus aquest missatge, si us plau, intenta augmentar l'altura del navegador.<br/>
                No incloguis el codi HTML d'aquest missatge si desitges copiar el component des de Storybook.
            </div>
        </div>
    \`;
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const n=["Playground"],l=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:n,default:i},Symbol.toStringTag,{value:"Module"}));export{e as P,l as S};
