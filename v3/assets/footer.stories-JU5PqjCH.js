import{x as s}from"./iframe-DIl293iJ.js";import{w as o}from"./storybook-decorators-DSS85Rnr.js";const i=""+new URL("fondos-eu-UyZXEizw.png",import.meta.url).href,r=`
  #root-inner {
        width: 800px;
    }
`,n={title:"Collections/Footer",argTypes:{description:{name:"Descripció"}},parameters:{layout:"centered"}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=273-8178&m=dev"}},args:{description:"Historial Electrònic de Salut (HES)"},render:a=>s`
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
    `,decorators:[o(r,"footer-default-style")]},t={tags:["!dev"],render:()=>s`
            <dss-footer description='Historial Electrònic de Salut (HES)' style="min-width: 900px">
                <img src="${i}" alt="Fons econòmics" />
            </dss-footer>
        `,decorators:[o(r,"divider-bold-style")]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-footer description='Historial Electrònic de Salut (HES)' style="min-width: 900px">
                <img src="\${fundsSvg}" alt="Fons econòmics" />
            </dss-footer>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'divider-bold-style')]
}`,...t.parameters?.docs?.source}}};const d=["Playground","Funds"],m=Object.freeze(Object.defineProperty({__proto__:null,Funds:t,Playground:e,__namedExportsOrder:d,default:n},Symbol.toStringTag,{value:"Module"}));export{t as F,e as P,m as S};
