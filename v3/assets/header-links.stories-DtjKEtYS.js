import{x as d}from"./iframe-BJ1gb8kz.js";const o={title:"Collections/Header/Links",argTypes:{numElements:{name:"Quantitat d'elements",control:{type:"number",min:1,max:3}},hideHelp:{name:"Amaga enllaç Ajuda",control:{type:"boolean"}},helpLabel:{name:"Text enllaç Ajuda ",if:{arg:"hideHelp",eq:!1}},disableHelp:{name:"Deshabil·litar enllaç Ajuda",control:{type:"boolean"},if:{arg:"hideHelp",eq:!1}}},parameters:{layout:"centered"}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4096-34637&m=dev"}},args:{numElements:1,helpLabel:"Ajuda",hideHelp:!1,disableHelp:!1},render:l=>{const t=[{label:"Custom action",icon:"add_box"}];return Array.from({length:l.numElements-1},()=>{t.push({label:"Link",icon:"add_box"})}),d`
      <dss-header-links 
        ?hideHelp=${l.hideHelp}
        ?disableHelp=${l.disableHelp}
        helpLabel="${l.helpLabel}"
        items=${JSON.stringify(t)}
      ></dss-header-links>
    `}},s={tags:["!dev"],render:()=>d`
            <dss-header-links></dss-header-links>
        `},n={tags:["!dev"],render:()=>d`
            <dss-header-links hideHelp></dss-header-links>
        `},a={tags:["!dev"],render:()=>d`
            <dss-header-links hideConfig></dss-header-links>
        `},r={tags:["!dev"],render:()=>d`
            <dss-header-links items='[{"label":"Custom action","icon":"add_box"},{"label":"Custom action","icon":"add_box"}]'></dss-header-links>
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
      <dss-header-links 
        ?hideHelp=\${args.hideHelp}
        ?disableHelp=\${args.disableHelp}
        helpLabel="\${args.helpLabel}"
        items=\${JSON.stringify(links)}
      ></dss-header-links>
    \`;
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-header-links></dss-header-links>
        \`;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-header-links hideHelp></dss-header-links>
        \`;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-header-links hideConfig></dss-header-links>
        \`;
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-header-links items='[{"label":"Custom action","icon":"add_box"},{"label":"Custom action","icon":"add_box"}]'></dss-header-links>
        \`;
  }
}`,...r.parameters?.docs?.source}}};const i=["Playground","ByDefault","HideHelp","HideConfig","CustomActions"],p=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:s,CustomActions:r,HideConfig:a,HideHelp:n,Playground:e,__namedExportsOrder:i,default:o},Symbol.toStringTag,{value:"Module"}));export{s as B,r as C,n as H,e as P,p as S,a};
