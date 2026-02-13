import{x as l}from"./iframe-DLVb3rJw.js";const s={title:"Components/Header Links",argTypes:{numElements:{name:"Quantitat d'elements",control:{type:"number",min:1,max:3}},hideHelp:{name:"Amaga enllaç Ajuda",control:{type:"boolean"}},helpLabel:{name:"Text enllaç Ajuda ",if:{arg:"hideHelp",eq:!1}},disableHelp:{name:"Deshabil·litar enllaç Ajuda",control:{type:"boolean"},if:{arg:"hideHelp",eq:!1}}},parameters:{layout:"centered"}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4096-34637&m=dev"}},args:{numElements:1,helpLabel:"Ajuda",hideHelp:!1,disableHelp:!1},render:n=>{const a=[{label:"Finalizar visita",icon:"door_front"}];return Array.from({length:n.numElements-1},()=>{a.push({label:"Link",icon:"add_box"})}),l`
      <dss-header-links 
        ?hideHelp=${n.hideHelp}
        ?disableHelp=${n.disableHelp}
        helpLabel="${n.helpLabel}"
        .items=${a}
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
      label: 'Finalizar visita',
      icon: 'door_front'
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
        .items=\${links}
      ></dss-header-links>
    \`;
  }
}`,...e.parameters?.docs?.source}}};const r=["Playground"],i=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:r,default:s},Symbol.toStringTag,{value:"Module"}));export{e as P,i as S};
