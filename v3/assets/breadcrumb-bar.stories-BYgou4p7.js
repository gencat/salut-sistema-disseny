import{x as s}from"./iframe-CdZ_4rdx.js";import{w as i}from"./storybook-decorators-DSS85Rnr.js";const d=`
    .wrapper {
        width: 800px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
`,r=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Product 1",href:"/products/1"}],o={title:"Components/Breadcrumb Bar",argTypes:{items:{name:"Elements",description:"Els elements del breadcrumb.",control:{type:"object"}},showAction:{name:"Show action",control:{type:"boolean"}},action:{name:"Action",control:{type:"radio"},options:["button","icon-button","link","input-switch"],if:{arg:"showAction"}}},parameters:{layout:"centered"}},n={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=250-5939&m=dev"}},args:{items:r,showAction:!1,action:"button"},render:e=>s`
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
                            <dss-toggle size="sm" label="Toggle" />
                        `:null}
                    `:null}
                </dss-breadcrumb-bar>
            </div>
    `},t={tags:["!dev"],render:()=>s`
            <div class="wrapper">
                <dss-breadcrumb-bar items=${JSON.stringify(r.slice(0,1))}></dss-breadcrumb-bar>
                <dss-breadcrumb-bar items=${JSON.stringify(r.slice(0,2))}></dss-breadcrumb-bar>
                <dss-breadcrumb-bar items=${JSON.stringify(r.slice(0,3))}></dss-breadcrumb-bar>
            </div>
    `,decorators:[i(d,"breadcrumb-bar-more-style")]},a={tags:["!dev"],render:()=>s`
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
                    <dss-toggle size="sm" label="Toggle" />
                </dss-breadcrumb-bar>
            </div>
    `,decorators:[i(d,"breadcrumb-bar-actions-style")]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
                            <dss-toggle size="sm" label="Toggle" />
                        \` : null}
                    \` : null}
                </dss-breadcrumb-bar>
            </div>
    \`;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
                    <dss-toggle size="sm" label="Toggle" />
                </dss-breadcrumb-bar>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'breadcrumb-bar-actions-style')]
}`,...a.parameters?.docs?.source}}};const b=["Playground","More","Actions"],m=Object.freeze(Object.defineProperty({__proto__:null,Actions:a,More:t,Playground:n,__namedExportsOrder:b,default:o},Symbol.toStringTag,{value:"Module"}));export{a as A,t as M,n as P,m as S};
