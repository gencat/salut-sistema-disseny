import{x as i}from"./lit-html-B2eaWknC.js";import"./breadcrumb-CiKTn8PY.js";const s=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Product 1",href:"/products/1"}],b={title:"Components/Breadcrumb",argTypes:{items:{name:"Elements",description:"Els elements del breadcrumb.",control:{type:"object"}}},parameters:{layout:"centered"}},r={args:{items:s},render:o=>i`
      <dss-breadcrumb items=${JSON.stringify(o.items)}></dss-breadcrumb>
    `},e={tags:["!dev"],render:()=>i`
      <dss-breadcrumb items=${JSON.stringify(s.slice(0,1))}></dss-breadcrumb>
      <dss-breadcrumb items=${JSON.stringify(s.slice(0,2))}></dss-breadcrumb>
      <dss-breadcrumb items=${JSON.stringify(s.slice(0,3))}></dss-breadcrumb>
    `};var t,a,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    items: items
  },
  render: (args: any) => {
    return html\`
      <dss-breadcrumb items=\${JSON.stringify(args.items)}></dss-breadcrumb>
    \`;
  }
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var m,n,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-breadcrumb items=\${JSON.stringify(items.slice(0, 1))}></dss-breadcrumb>
      <dss-breadcrumb items=\${JSON.stringify(items.slice(0, 2))}></dss-breadcrumb>
      <dss-breadcrumb items=\${JSON.stringify(items.slice(0, 3))}></dss-breadcrumb>
    \`;
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const u=["Playground","More"],p=Object.freeze(Object.defineProperty({__proto__:null,More:e,Playground:r,__namedExportsOrder:u,default:b},Symbol.toStringTag,{value:"Module"}));export{p as B,e as M,r as P};
