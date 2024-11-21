import{x as i}from"./lit-html-paDGiEfB.js";const t={title:"Components/Header Links",argTypes:{numElements:{name:"Quantitat d'elements",control:{type:"number",min:1,max:3}},hideHelp:{name:"Amaga enllaç Ajuda",control:{type:"boolean"}},helpLabel:{name:"Text enllaç Ajuda ",if:{arg:"hideHelp",eq:!1}},disableHelp:{name:"Deshabil·litar enllaç Ajuda",control:{type:"boolean"},if:{arg:"hideHelp",eq:!1}}},parameters:{layout:"centered"}},e={args:{numElements:1,helpLabel:"Ajuda",hideHelp:!1,disableHelp:!1},render:n=>{const l=[{label:"Finalizar visita",icon:"door_front"}];return Array.from({length:n.numElements-1},()=>{l.push({label:"Link",icon:"add_box"})}),i`
      <dss-header-links 
        ?hideHelp=${n.hideHelp}
        ?disableHelp=${n.disableHelp}
        helpLabel="${n.helpLabel}"
        .items=${l}
      ></dss-header-links>
    `}};var a,s,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const o=["Playground"],p=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:o,default:t},Symbol.toStringTag,{value:"Module"}));export{e as P,p as S};
