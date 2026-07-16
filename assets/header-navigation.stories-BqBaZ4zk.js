import{x as t}from"./iframe-_r7gOCbv.js";const i={title:"Collections/Header/Navigation",argTypes:{numElements:{name:"Quantitat d'elements",control:{type:"number",min:1,max:3}},hideHelp:{name:"Amaga enllaç Ajuda",control:{type:"boolean"}},helpLabel:{name:"Text enllaç Ajuda ",if:{arg:"hideHelp",eq:!1}},disableHelp:{name:"Deshabil·litar enllaç Ajuda",control:{type:"boolean"},if:{arg:"hideHelp",eq:!1}}},parameters:{layout:"centered"}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4096-34637&m=dev"}},args:{numElements:1,helpLabel:"Ajuda",hideHelp:!1,disableHelp:!1},render:o=>{const d=[{label:"Custom action",icon:"add_box"}];return Array.from({length:o.numElements-1},()=>{d.push({label:"Link",icon:"add_box"})}),t`
      <dss-header-navigation 
        ?hideHelp=${o.hideHelp}
        ?disableHelp=${o.disableHelp}
        helpLabel="${o.helpLabel}"
        items=${JSON.stringify(d)}
      ></dss-header-navigation>
    `}},a={tags:["!dev"],render:()=>t`
            <dss-header-navigation></dss-header-navigation>
        `},n={tags:["!dev"],render:()=>t`
            <dss-header-navigation hideHelp></dss-header-navigation>
        `},s={tags:["!dev"],render:()=>t`
            <dss-header-navigation hideConfig></dss-header-navigation>
        `},r={tags:["!dev"],render:()=>t`
            <dss-header-navigation items='[{"label":"Custom action","icon":"add_box"},{"label":"Custom action","icon":"add_box"}]'></dss-header-navigation>
        `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4096-34637&m=dev'
    }
  },
  args: {
    numElements: 1,
    helpLabel: 'Ajuda',
    hideHelp: false,
    disableHelp: false
  },
  render: (args: any) => {
    const links = [{
      label: 'Custom action',
      icon: 'add_box'
    }];
    Array.from({
      length: args.numElements - 1
    }, () => {
      links.push({
        label: 'Link',
        icon: 'add_box'
      });
    });
    return html\`
      <dss-header-navigation 
        ?hideHelp=\${args.hideHelp}
        ?disableHelp=\${args.disableHelp}
        helpLabel="\${args.helpLabel}"
        items=\${JSON.stringify(links)}
      ></dss-header-navigation>
    \`;
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-header-navigation></dss-header-navigation>
        \`;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-header-navigation hideHelp></dss-header-navigation>
        \`;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-header-navigation hideConfig></dss-header-navigation>
        \`;
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-header-navigation items='[{"label":"Custom action","icon":"add_box"},{"label":"Custom action","icon":"add_box"}]'></dss-header-navigation>
        \`;
  }
}`,...r.parameters?.docs?.source}}};const l=["Playground","ByDefault","HideHelp","HideConfig","CustomActions"],p=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:a,CustomActions:r,HideConfig:s,HideHelp:n,Playground:e,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{a as B,r as C,n as H,e as P,p as S,s as a};
