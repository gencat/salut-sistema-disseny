import{x as s}from"./lit-html-D6a8R3xZ.js";import{w as h}from"./storybook-decorators-DSS85Rnr.js";const y=`
    .wrapper {
        width: 800px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
`,r=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Product 1",href:"/products/1"}],w={title:"Components/Breadcrumb Bar",argTypes:{items:{name:"Elements",description:"Els elements del breadcrumb.",control:{type:"object"}},showAction:{name:"Show action",control:{type:"boolean"}},action:{name:"Action",control:{type:"radio"},options:["button","icon-button","link","input-switch"],if:{arg:"showAction"}}},parameters:{layout:"centered"}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=250-5939&m=dev"}},args:{items:r,showAction:!1,action:"button"},render:e=>s`
            <div style="width: 800px;" class="only-for-demo">
                <dss-breadcrumb-bar items=${JSON.stringify(e.items)}>
                    ${e.showAction?s`
                        ${e.action==="button"?s`
                            <dss-button label="Acció" size="sm" variant="primary"></dss-button>
                        `:null}
                        ${e.action==="icon-button"?s`
                            <dss-icon-button icon="add_box" label="Acció" size="md" variant="primary"></dss-icon-button>
                        `:null}
                        ${e.action==="link"?s`
                            <dss-link label="Link" href="#" icon="add_box"></dss-link>
                        `:null}
                        ${e.action==="input-switch"?s`
                            <dss-input-switch size="md">
                                <input slot="input" id="switchMd2" type="checkbox" checked="">
                                <label slot="label" for="switchMd2">Switch</label>
                            </dss-input-switch>
                        `:null}
                    `:null}
                </dss-breadcrumb-bar>
            </div>
    `},n={tags:["!dev"],render:()=>s`
            <div class="wrapper">
                <dss-breadcrumb-bar items=${JSON.stringify(r.slice(0,1))}></dss-breadcrumb-bar>
                <dss-breadcrumb-bar items=${JSON.stringify(r.slice(0,2))}></dss-breadcrumb-bar>
                <dss-breadcrumb-bar items=${JSON.stringify(r.slice(0,3))}></dss-breadcrumb-bar>
            </div>
    `,decorators:[h(y,"breadcrumb-bar-more-style")]},i={tags:["!dev"],render:()=>s`
            <div class="wrapper">
                <dss-breadcrumb-bar items=${JSON.stringify(r.slice(0,3))}>
                    <dss-button label="Acció" size="sm" variant="primary"></dss-button>
                </dss-breadcrumb-bar>
                <dss-breadcrumb-bar items=${JSON.stringify(r.slice(0,3))}>
                    <dss-icon-button icon="add_box" label="Acció" size="md" variant="primary"></dss-icon-button>
                </dss-breadcrumb-bar>
                <dss-breadcrumb-bar items=${JSON.stringify(r.slice(0,3))}>
                    <dss-link label="Link" href="#" icon="add_box"></dss-link>
                </dss-breadcrumb-bar>
                <dss-breadcrumb-bar items=${JSON.stringify(r.slice(0,3))}>
                    <dss-input-switch size="md">
                        <input slot="input" id="switchMd2" type="checkbox" checked="">
                        <label slot="label" for="switchMd2">Switch</label>
                    </dss-input-switch>
                </dss-breadcrumb-bar>
            </div>
    `,decorators:[h(y,"breadcrumb-bar-actions-style")]};var a,d,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=250-5939&m=dev'
    }
  },
  args: {
    items: items,
    showAction: false,
    action: 'button'
  },
  render: (args: any) => {
    return html\`
            <div style="width: 800px;" class="only-for-demo">
                <dss-breadcrumb-bar items=\${JSON.stringify(args.items)}>
                    \${args.showAction ? html\`
                        \${args.action === 'button' ? html\`
                            <dss-button label="Acció" size="sm" variant="primary"></dss-button>
                        \` : null}
                        \${args.action === 'icon-button' ? html\`
                            <dss-icon-button icon="add_box" label="Acció" size="md" variant="primary"></dss-icon-button>
                        \` : null}
                        \${args.action === 'link' ? html\`
                            <dss-link label="Link" href="#" icon="add_box"></dss-link>
                        \` : null}
                        \${args.action === 'input-switch' ? html\`
                            <dss-input-switch size="md">
                                <input slot="input" id="switchMd2" type="checkbox" checked="">
                                <label slot="label" for="switchMd2">Switch</label>
                            </dss-input-switch>
                        \` : null}
                    \` : null}
                </dss-breadcrumb-bar>
            </div>
    \`;
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var o,b,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-breadcrumb-bar items=\${JSON.stringify(items.slice(0, 1))}></dss-breadcrumb-bar>
                <dss-breadcrumb-bar items=\${JSON.stringify(items.slice(0, 2))}></dss-breadcrumb-bar>
                <dss-breadcrumb-bar items=\${JSON.stringify(items.slice(0, 3))}></dss-breadcrumb-bar>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'breadcrumb-bar-more-style')]
}`,...(l=(b=n.parameters)==null?void 0:b.docs)==null?void 0:l.source}}};var m,u,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-breadcrumb-bar items=\${JSON.stringify(items.slice(0, 3))}>
                    <dss-button label="Acció" size="sm" variant="primary"></dss-button>
                </dss-breadcrumb-bar>
                <dss-breadcrumb-bar items=\${JSON.stringify(items.slice(0, 3))}>
                    <dss-icon-button icon="add_box" label="Acció" size="md" variant="primary"></dss-icon-button>
                </dss-breadcrumb-bar>
                <dss-breadcrumb-bar items=\${JSON.stringify(items.slice(0, 3))}>
                    <dss-link label="Link" href="#" icon="add_box"></dss-link>
                </dss-breadcrumb-bar>
                <dss-breadcrumb-bar items=\${JSON.stringify(items.slice(0, 3))}>
                    <dss-input-switch size="md">
                        <input slot="input" id="switchMd2" type="checkbox" checked="">
                        <label slot="label" for="switchMd2">Switch</label>
                    </dss-input-switch>
                </dss-breadcrumb-bar>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'breadcrumb-bar-actions-style')]
}`,...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const g=["Playground","More","Actions"],v=Object.freeze(Object.defineProperty({__proto__:null,Actions:i,More:n,Playground:t,__namedExportsOrder:g,default:w},Symbol.toStringTag,{value:"Module"}));export{i as A,n as M,t as P,v as S};
