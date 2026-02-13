import{x as r}from"./iframe-DLVb3rJw.js";const s={title:"Components/Drawer",argTypes:{open:{name:"Obert",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"}},contentScroll:{name:"Contingut amb scroll",control:{type:"boolean"}},hasButtonAlternative:{name:"Botó alternatiu",control:{type:"boolean"}},hasButtonSecondary:{name:"Botó secundari",control:{type:"boolean"}},description:{name:"Descripció",control:{type:"text"}},variant:{name:"Variant",control:{type:"radio"},options:["default","filter"]}},parameters:{layout:"centered"}},e={args:{open:!1,title:"Drawer title",variant:"default",contentScroll:!1,hasButtonAlternative:!0,hasButtonSecondary:!0,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore."},render:t=>{const n=r`
        <p>${t.description}</p>
      `,o=r`
        <p>${t.description}</p><br/><br/><br/><br/>
        <p>${t.description}</p><br/><br/><br/><br/>
        <p>${t.description}</p><br/><br/><br/><br/>
        <p>${t.description}</p><br/><br/><br/><br/>
        <p>${t.description}</p><br/><br/><br/><br/>
        <p>${t.description}</p><br/><br/><br/><br/>
        <p>${t.description}</p><br/><br/><br/><br/>
        <p>${t.description}</p>
      `,a=r`
            ${t.hasButtonAlternative?r`<dss-button label="Button" size="md" variant="subtle"></dss-button>`:""}
            ${t.hasButtonSecondary?r`<dss-button label="Button" size="md" variant="secondary"></dss-button>`:""}
            <dss-button label="Button" size="md" variant="primary"></dss-button>
        `;return r`
            <dss-drawer titleText="${t.title}" ?open=${t.open} size="${t.size}" variant="${t.variant}">
                <div slot="drawer-body">
                    ${t.contentScroll?o:n}
                </div>
                <div slot="drawer-footer">
                    ${a}
                </div>
            </dss-drawer>
        `}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    title: 'Drawer title',
    variant: 'default',
    contentScroll: false,
    hasButtonAlternative: true,
    hasButtonSecondary: true,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.'
  },
  render: (args: any) => {
    const drawerBody = html\`
        <p>\${args.description}</p>
      \`;
    const drawerBodyScroll = html\`
        <p>\${args.description}</p><br/><br/><br/><br/>
        <p>\${args.description}</p><br/><br/><br/><br/>
        <p>\${args.description}</p><br/><br/><br/><br/>
        <p>\${args.description}</p><br/><br/><br/><br/>
        <p>\${args.description}</p><br/><br/><br/><br/>
        <p>\${args.description}</p><br/><br/><br/><br/>
        <p>\${args.description}</p><br/><br/><br/><br/>
        <p>\${args.description}</p>
      \`;
    const drawerFooter = html\`
            \${args.hasButtonAlternative ? html\`<dss-button label="Button" size="md" variant="subtle"></dss-button>\` : ''}
            \${args.hasButtonSecondary ? html\`<dss-button label="Button" size="md" variant="secondary"></dss-button>\` : ''}
            <dss-button label="Button" size="md" variant="primary"></dss-button>
        \`;
    return html\`
            <dss-drawer titleText="\${args.title}" ?open=\${args.open} size="\${args.size}" variant="\${args.variant}">
                <div slot="drawer-body">
                    \${args.contentScroll ? drawerBodyScroll : drawerBody}
                </div>
                <div slot="drawer-footer">
                    \${drawerFooter}
                </div>
            </dss-drawer>
        \`;
  }
}`,...e.parameters?.docs?.source}}};const i=["Playground"],l=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:i,default:s},Symbol.toStringTag,{value:"Module"}));export{l as S};
