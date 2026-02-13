import{x as s}from"./iframe-DLVb3rJw.js";import{w as a}from"./storybook-decorators-DSS85Rnr.js";const d=`
    .wrapper {
        width: 800px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
`,r=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Product 1",href:"/products/1"}],c={title:"Components/Breadcrumb Bar",argTypes:{items:{name:"Elements",description:"Els elements del breadcrumb.",control:{type:"object"}},showAction:{name:"Show action",control:{type:"boolean"}},action:{name:"Action",control:{type:"radio"},options:["button","icon-button","link","input-switch"],if:{arg:"showAction"}}},parameters:{layout:"centered"}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=250-5939&m=dev"}},args:{items:r,showAction:!1,action:"button"},render:e=>s`
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
    `,decorators:[a(d,"breadcrumb-bar-more-style")]},i={tags:["!dev"],render:()=>s`
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
    `,decorators:[a(d,"breadcrumb-bar-actions-style")]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const o=["Playground","More","Actions"],m=Object.freeze(Object.defineProperty({__proto__:null,Actions:i,More:n,Playground:t,__namedExportsOrder:o,default:c},Symbol.toStringTag,{value:"Module"}));export{i as A,n as M,t as P,m as S};
