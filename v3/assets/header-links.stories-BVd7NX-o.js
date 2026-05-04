import{x as a}from"./iframe-DIl293iJ.js";const s={title:"Collections/Header/Links",argTypes:{numElements:{name:"Quantitat d'elements",control:{type:"number",min:1,max:3}},hideHelp:{name:"Amaga enllaç Ajuda",control:{type:"boolean"}},helpLabel:{name:"Text enllaç Ajuda ",if:{arg:"hideHelp",eq:!1}},disableHelp:{name:"Deshabil·litar enllaç Ajuda",control:{type:"boolean"},if:{arg:"hideHelp",eq:!1}}},parameters:{layout:"centered"}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4096-34637&m=dev"}},args:{numElements:1,helpLabel:"Ajuda",hideHelp:!1,disableHelp:!1},render:n=>{const l=[{label:"Custom action",icon:"add_box"}];return Array.from({length:n.numElements-1},()=>{l.push({label:"Link",icon:"add_box"})}),a`
      <dss-header-links 
        ?hideHelp=${n.hideHelp}
        ?disableHelp=${n.disableHelp}
        helpLabel="${n.helpLabel}"
        items=${JSON.stringify(l)}
      ></dss-header-links>
    `}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const t=["Playground"],i=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:t,default:s},Symbol.toStringTag,{value:"Module"}));export{e as P,i as S};
