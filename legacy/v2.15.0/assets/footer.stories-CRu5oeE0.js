import{x as d}from"./lit-html-D6cejpwM.js";import{w as l}from"./storybook-decorators-DSS85Rnr.js";const p=""+new URL("fondos-eu-UyZXEizw.png",import.meta.url).href,c=`
  #root-inner {
        width: 800px;
    }
`,u={title:"Components/Footer",argTypes:{description:{name:"Descripció"}},parameters:{layout:"centered"}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=273-8178&m=dev"}},args:{description:"Historial Electrònic de Salut (HES)"},render:m=>d`
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
            <dss-footer description="${m.description}">
            </dss-footer>
            <div class="demo-warning">
                El component "Footer" s'amaga automàticament quan l'altura és inferior a 808px.
                Si veus aquest missatge, si us plau, intenta augmentar l'altura del navegador.<br/>
                No incloguis el codi HTML d'aquest missatge si desitges copiar el component des de Storybook.
            </div>
        </div>
    `,decorators:[l(c,"footer-default-style")]},t={tags:["!dev"],render:()=>d`
            <dss-footer description='Historial Electrònic de Salut (HES)' style="min-width: 900px">
                <img src="${p}" alt="Fons econòmics" />
            </dss-footer>
        `,decorators:[l(c,"divider-bold-style")]};var s,o,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'footer-default-style')]
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var a,i,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-footer description='Historial Electrònic de Salut (HES)' style="min-width: 900px">
                <img src="\${fundsSvg}" alt="Fons econòmics" />
            </dss-footer>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'divider-bold-style')]
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const g=["Playground","Funds"],S=Object.freeze(Object.defineProperty({__proto__:null,Funds:t,Playground:e,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{t as F,e as P,S};
