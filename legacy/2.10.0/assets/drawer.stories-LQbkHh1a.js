import{x as t}from"./lit-html-D6cejpwM.js";const l={title:"Components/Drawer",argTypes:{open:{name:"Obert",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"}},contentScroll:{name:"Contingut amb scroll",control:{type:"boolean"}},hasButtonAlternative:{name:"Botó alternatiu",control:{type:"boolean"}},hasButtonSecondary:{name:"Botó secundari",control:{type:"boolean"}},description:{name:"Descripció",control:{type:"text"}},variant:{name:"Variant",control:{type:"radio"},options:["default","filter"]}},parameters:{layout:"centered"}},e={args:{open:!1,title:"Drawer title",variant:"default",contentScroll:!1,hasButtonAlternative:!0,hasButtonSecondary:!0,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore."},render:r=>{const s=t`
        <p>${r.description}</p>
      `,i=t`
        <p>${r.description}</p><br/><br/><br/><br/>
        <p>${r.description}</p><br/><br/><br/><br/>
        <p>${r.description}</p><br/><br/><br/><br/>
        <p>${r.description}</p><br/><br/><br/><br/>
        <p>${r.description}</p><br/><br/><br/><br/>
        <p>${r.description}</p><br/><br/><br/><br/>
        <p>${r.description}</p><br/><br/><br/><br/>
        <p>${r.description}</p>
      `,d=t`
            ${r.hasButtonAlternative?t`<dss-button label="Button" size="md" variant="subtle"></dss-button>`:""}
            ${r.hasButtonSecondary?t`<dss-button label="Button" size="md" variant="secondary"></dss-button>`:""}
            <dss-button label="Button" size="md" variant="primary"></dss-button>
        `;return t`
            <dss-drawer title="${r.title}" ?open=${r.open} size="${r.size}" variant="${r.variant}">
                <div slot="drawer-body">
                    ${r.contentScroll?i:s}
                </div>
                <div slot="drawer-footer">
                    ${d}
                </div>
            </dss-drawer>
        `}};var n,o,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
            <dss-drawer title="\${args.title}" ?open=\${args.open} size="\${args.size}" variant="\${args.variant}">
                <div slot="drawer-body">
                    \${args.contentScroll ? drawerBodyScroll : drawerBody}
                </div>
                <div slot="drawer-footer">
                    \${drawerFooter}
                </div>
            </dss-drawer>
        \`;
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const p=["Playground"],c=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:p,default:l},Symbol.toStringTag,{value:"Module"}));export{c as S};
