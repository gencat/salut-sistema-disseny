import"./lit-element-BL4lq474.js";import{x as e}from"./lit-html-D6cejpwM.js";const C={title:"Components/Progress Indicator",argTypes:{title:{name:"Títol"},description:{name:"Descripció"},percentage:{name:"Percentatge",control:{type:"range",min:0,max:100,step:1},defaultValue:0},state:{name:"Estat",control:{type:"select"},options:["default","info","success","warning","error"],defaultValue:"default"},hasFailed:{name:"Mostrar error",control:{type:"boolean"},defaultValue:!1},hidePercentage:{name:"Amaga el percentatge",control:{type:"boolean"},defaultValue:!1}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=70-2791&m=dev"}},args:{title:"Title",description:"Description, short and clear.",percentage:0,state:"default",hasFailed:!1,hidePercentage:!1},render:r=>e`
      <div class="exemple-container-progress-indicator-canvas">
        <dss-progress-indicator 
                    title="${r.title}" 
                    description="${r.description}" 
                    percentage="${r.percentage}" 
                    state="${r.state}" 
                    ?hasFailed="${r.hasFailed}"
                    ?hidePercentage="${r.hidePercentage}"
                    ></dss-progress-indicator>
      </div>
    `},t={tags:["!dev"],render:()=>e`
        <dss-progress-indicator description="Description, short and clear." percentage="23"></dss-progress-indicator>
        <dss-progress-indicator description="Description, short and clear." percentage="68"></dss-progress-indicator>
        <dss-progress-indicator description="Description, short and clear." percentage="100"></dss-progress-indicator>
    `},i={tags:["!dev"],render:()=>e`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100"></dss-progress-indicator>
    `},a={tags:["!dev"],render:()=>e`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23" state="default"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68" state="default"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100" state="default"></dss-progress-indicator>
    `},n={tags:["!dev"],render:()=>e`
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=70-2791&m=dev'
    }
  },
  args: {
    title: 'Title',
    description: 'Description, short and clear.',
    percentage: 0,
    state: 'default',
    hasFailed: false,
    hidePercentage: false
  },
  render: (args: any) => {
    return html\`
      <div class="exemple-container-progress-indicator-canvas">
        <dss-progress-indicator 
                    title="\${args.title}" 
                    description="\${args.description}" 
                    percentage="\${args.percentage}" 
                    state="\${args.state}" 
                    ?hasFailed="\${args.hasFailed}"
                    ?hidePercentage="\${args.hidePercentage}"
                    ></dss-progress-indicator>
      </div>
    \`;
  }
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,m,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-progress-indicator description="Description, short and clear." percentage="23"></dss-progress-indicator>
        <dss-progress-indicator description="Description, short and clear." percentage="68"></dss-progress-indicator>
        <dss-progress-indicator description="Description, short and clear." percentage="100"></dss-progress-indicator>
    \`;
  }
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var D,T,f;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100"></dss-progress-indicator>
    \`;
  }
}`,...(f=(T=i.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var S,v,w;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23" state="default"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68" state="default"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100" state="default"></dss-progress-indicator>
    \`;
  }
}`,...(w=(v=a.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var y,P,$;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23" state="info"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68" state="info"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100" state="info"></dss-progress-indicator>
    \`;
  }
}`,...($=(P=n.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var F,x,E;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23" state="success"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68" state="success"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100" state="success"></dss-progress-indicator>
    \`;
  }
}`,...(E=(x=o.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var I,_,b;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23" state="warning"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68" state="warning"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100" state="warning"></dss-progress-indicator>
    \`;
  }
}`,...(b=(_=c.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var V,z,A;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="23" state="error"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="68" state="error"></dss-progress-indicator>
      <dss-progress-indicator title="Title" description="Description, short and clear." percentage="100" state="error"></dss-progress-indicator>
    \`;
  }
}`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const N=["Playground","NoTitle","Title","DefaultState","InfoState","SuccessState","WarningState","ErrorState"],j=Object.freeze(Object.defineProperty({__proto__:null,DefaultState:a,ErrorState:d,InfoState:n,NoTitle:t,Playground:s,SuccessState:o,Title:i,WarningState:c,__namedExportsOrder:N,default:C},Symbol.toStringTag,{value:"Module"}));export{a as D,d as E,n as I,t as N,s as P,j as S,i as T,c as W,o as a};
