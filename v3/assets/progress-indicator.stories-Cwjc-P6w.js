import{x as e}from"./iframe-CdZ_4rdx.js";const p={title:"Components/Progress Indicator",argTypes:{title:{name:"Títol"},description:{name:"Descripció"},percentage:{name:"Percentatge",control:{type:"range",min:0,max:100,step:1},defaultValue:0},state:{name:"Estat",control:{type:"select"},options:["default","info","success","warning","error"],defaultValue:"default"},hasFailed:{name:"Mostrar error",control:{type:"boolean"},defaultValue:!1},hidePercentage:{name:"Amaga el percentatge",control:{type:"boolean"},defaultValue:!1}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=70-2791&m=dev"}},args:{title:"Title",description:"Description, short and clear.",percentage:0,state:"default",hasFailed:!1,hidePercentage:!1},render:r=>e`
      <div class="exemple-container-progress-indicator-canvas">
        <dss-progress-indicator 
                    titleText="${r.title}" 
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
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="23"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="68"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="100"></dss-progress-indicator>
    `},a={tags:["!dev"],render:()=>e`
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="23" state="default"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="68" state="default"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="100" state="default"></dss-progress-indicator>
    `},n={tags:["!dev"],render:()=>e`
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="23" state="info"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="68" state="info"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="100" state="info"></dss-progress-indicator>
    `},o={tags:["!dev"],render:()=>e`
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="23" state="success"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="68" state="success"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="100" state="success"></dss-progress-indicator>
    `},c={tags:["!dev"],render:()=>e`
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="23" state="warning"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="68" state="warning"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="100" state="warning"></dss-progress-indicator>
    `},d={tags:["!dev"],render:()=>e`
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="23" state="error"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="68" state="error"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="100" state="error"></dss-progress-indicator>
    `};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
                    titleText="\${args.title}" 
                    description="\${args.description}" 
                    percentage="\${args.percentage}" 
                    state="\${args.state}" 
                    ?hasFailed="\${args.hasFailed}"
                    ?hidePercentage="\${args.hidePercentage}"
                    ></dss-progress-indicator>
      </div>
    \`;
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-progress-indicator description="Description, short and clear." percentage="23"></dss-progress-indicator>
        <dss-progress-indicator description="Description, short and clear." percentage="68"></dss-progress-indicator>
        <dss-progress-indicator description="Description, short and clear." percentage="100"></dss-progress-indicator>
    \`;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="23"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="68"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="100"></dss-progress-indicator>
    \`;
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="23" state="default"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="68" state="default"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="100" state="default"></dss-progress-indicator>
    \`;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="23" state="info"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="68" state="info"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="100" state="info"></dss-progress-indicator>
    \`;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="23" state="success"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="68" state="success"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="100" state="success"></dss-progress-indicator>
    \`;
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="23" state="warning"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="68" state="warning"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="100" state="warning"></dss-progress-indicator>
    \`;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="23" state="error"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="68" state="error"></dss-progress-indicator>
      <dss-progress-indicator titleText="Title" description="Description, short and clear." percentage="100" state="error"></dss-progress-indicator>
    \`;
  }
}`,...d.parameters?.docs?.source}}};const l=["Playground","NoTitle","Title","DefaultState","InfoState","SuccessState","WarningState","ErrorState"],T=Object.freeze(Object.defineProperty({__proto__:null,DefaultState:a,ErrorState:d,InfoState:n,NoTitle:t,Playground:s,SuccessState:o,Title:i,WarningState:c,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{a as D,d as E,n as I,t as N,s as P,T as S,i as T,c as W,o as a};
