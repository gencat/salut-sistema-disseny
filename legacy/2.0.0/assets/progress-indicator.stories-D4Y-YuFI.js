import"./lit-element-DhY7bShc.js";import{x as e}from"./lit-html-B2eaWknC.js";const W={title:"Components/Progress Indicator",argTypes:{title:{name:"Títol"},description:{name:"Descripció"},percentage:{name:"Percentatge",control:{type:"range",min:0,max:100,step:1},defaultValue:0},state:{name:"Estat",control:{type:"select"},options:["default","info","success","warning","error"],defaultValue:"default"},hasFailed:{name:"Mostrar error",control:{type:"boolean"},defaultValue:!1}},parameters:{layout:"centered"}},s={args:{title:"Title",description:"Description, short and clear.",percentage:0,state:"default",hasFailed:!1},render:r=>e`
      <div class="exemple-container-progress-indicator-canvas">
        <dss-progress-indicator title="${r.title}" description="${r.description}" percentage="${r.percentage}" state="${r.state}" ?hasFailed="${r.hasFailed}"></dss-progress-indicator>
      </div>
    `},t={tags:["!dev"],render:()=>e`
        <dss-progress-indicator description="Description, short and clear." percentage="23"></dss-progress-indicator>
        <dss-progress-indicator description="Description, short and clear." percentage="68"></dss-progress-indicator>
        <dss-progress-indicator description="Description, short and clear." percentage="100"></dss-progress-indicator>
    `},i={tags:["!dev"],render:()=>e`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100"></dss-progress-indicator>
    `},n={tags:["!dev"],render:()=>e`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23" state="default"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68" state="default"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100" state="default"></dss-progress-indicator>
    `},a={tags:["!dev"],render:()=>e`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23" state="info"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68" state="info"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100" state="info"></dss-progress-indicator>
    `},o={tags:["!dev"],render:()=>e`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23" state="success"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68" state="success"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100" state="success"></dss-progress-indicator>
    `},c={tags:["!dev"],render:()=>e`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23" state="warning"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68" state="warning"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100" state="warning"></dss-progress-indicator>
    `},d={tags:["!dev"],render:()=>e`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23" state="error"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68" state="error"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100" state="error"></dss-progress-indicator>
    `};var p,l,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    description: 'Description, short and clear.',
    percentage: 0,
    state: 'default',
    hasFailed: false
  },
  render: (args: any) => {
    return html\`
      <div class="exemple-container-progress-indicator-canvas">
        <dss-progress-indicator title="\${args.title}" description="\${args.description}" percentage="\${args.percentage}" state="\${args.state}" ?hasFailed="\${args.hasFailed}"></dss-progress-indicator>
      </div>
    \`;
  }
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,h,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-progress-indicator description="Description, short and clear." percentage="23"></dss-progress-indicator>
        <dss-progress-indicator description="Description, short and clear." percentage="68"></dss-progress-indicator>
        <dss-progress-indicator description="Description, short and clear." percentage="100"></dss-progress-indicator>
    \`;
  }
}`,...(m=(h=t.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var D,T,f;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100"></dss-progress-indicator>
    \`;
  }
}`,...(f=(T=i.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var S,v,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23" state="default"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68" state="default"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100" state="default"></dss-progress-indicator>
    \`;
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var $,w,F;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23" state="info"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68" state="info"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100" state="info"></dss-progress-indicator>
    \`;
  }
}`,...(F=(w=a.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var _,x,P;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23" state="success"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68" state="success"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100" state="success"></dss-progress-indicator>
    \`;
  }
}`,...(P=(x=o.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var E,I,b;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23" state="warning"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68" state="warning"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100" state="warning"></dss-progress-indicator>
    \`;
  }
}`,...(b=(I=c.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var N,O,V;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23" state="error"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68" state="error"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100" state="error"></dss-progress-indicator>
    \`;
  }
}`,...(V=(O=d.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const j=["Playground","NoTitle","Title","DefaultState","InfoState","SuccessState","WarningState","ErrorState"],C=Object.freeze(Object.defineProperty({__proto__:null,DefaultState:n,ErrorState:d,InfoState:a,NoTitle:t,Playground:s,SuccessState:o,Title:i,WarningState:c,__namedExportsOrder:j,default:W},Symbol.toStringTag,{value:"Module"}));export{n as D,d as E,a as I,t as N,s as P,C as S,i as T,c as W,o as a};
