import"./lit-element-DhY7bShc.js";import{x as i}from"./lit-html-B2eaWknC.js";const m={title:"Components/Progress Indicator",argTypes:{title:{name:"Títol"},description:{name:"Descripció"},percentage:{name:"Percentatge",control:{type:"range",min:0,max:100,step:1}},hasFailed:{name:"Mostrar error",control:{type:"boolean"}}},parameters:{layout:"centered"}},r={render:t=>i`<dss-progress-indicator
      title="${t.title}"
      description="${t.description}"
      percentage="${t.percentage}"
      .hasFailed="${t.hasFailed}"
    ></dss-progress-indicator>`,args:{title:"Title",description:"Description, short and clear.",percentage:0,hasFailed:!1}},e={tags:["!dev"],render:()=>i`
      <div class="wrapper">
        <dss-progress-indicator description="Description, short and clear." percentage="23"></dss-progress-indicator>
        <dss-progress-indicator description="Description, short and clear." percentage="68" hasFailed></dss-progress-indicator>
        <dss-progress-indicator description="Description, short and clear." percentage="100"></dss-progress-indicator>
      </div>
    `},s={tags:["!dev"],render:()=>i`
      <div class="wrapper">
        <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23"></dss-progress-indicator>
        <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68" hasFailed></dss-progress-indicator>
        <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100"></dss-progress-indicator>
      </div>
    `};var n,a,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`<dss-progress-indicator
      title="\${args.title}"
      description="\${args.description}"
      percentage="\${args.percentage}"
      .hasFailed="\${args.hasFailed}"
    ></dss-progress-indicator>\`;
  },
  args: {
    title: 'Title',
    description: 'Description, short and clear.',
    percentage: 0,
    hasFailed: false
  }
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var d,c,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-progress-indicator description="Description, short and clear." percentage="23"></dss-progress-indicator>
        <dss-progress-indicator description="Description, short and clear." percentage="68" hasFailed></dss-progress-indicator>
        <dss-progress-indicator description="Description, short and clear." percentage="100"></dss-progress-indicator>
      </div>
    \`;
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,g,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23"></dss-progress-indicator>
        <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68" hasFailed></dss-progress-indicator>
        <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100"></dss-progress-indicator>
      </div>
    \`;
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const u=["Playground","NoTitle","Title"],v=Object.freeze(Object.defineProperty({__proto__:null,NoTitle:e,Playground:r,Title:s,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{e as N,r as P,v as S,s as T};
