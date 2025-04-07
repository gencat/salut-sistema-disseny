import{x as o}from"./lit-html-B2eaWknC.js";import"./breadcrumb-CiKTn8PY.js";const s=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Product 1",href:"/products/1"}],b={title:"Components/Breadcrumb",argTypes:{items:{name:"Elements",description:"Els elements del breadcrumb.",control:{type:"object"}}},parameters:{layout:"centered"}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=250-5939&m=dev"}},args:{items:s},render:c=>o`
      <dss-breadcrumb items=${JSON.stringify(c.items)}></dss-breadcrumb>
    `},r={tags:["!dev"],render:()=>o`
      <dss-breadcrumb items=${JSON.stringify(s.slice(0,1))}></dss-breadcrumb>
      <dss-breadcrumb items=${JSON.stringify(s.slice(0,2))}></dss-breadcrumb>
      <dss-breadcrumb items=${JSON.stringify(s.slice(0,3))}></dss-breadcrumb>
    `};var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=250-5939&m=dev'
    }
  },
  args: {
    items: items
  },
  render: (args: any) => {
    return html\`
      <dss-breadcrumb items=\${JSON.stringify(args.items)}></dss-breadcrumb>
    \`;
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var d,m,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-breadcrumb items=\${JSON.stringify(items.slice(0, 1))}></dss-breadcrumb>
      <dss-breadcrumb items=\${JSON.stringify(items.slice(0, 2))}></dss-breadcrumb>
      <dss-breadcrumb items=\${JSON.stringify(items.slice(0, 3))}></dss-breadcrumb>
    \`;
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const u=["Playground","More"],p=Object.freeze(Object.defineProperty({__proto__:null,More:r,Playground:e,__namedExportsOrder:u,default:b},Symbol.toStringTag,{value:"Module"}));export{p as B,r as M,e as P};
