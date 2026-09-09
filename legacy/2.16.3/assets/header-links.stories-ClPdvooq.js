import{x as d}from"./lit-html-D6cejpwM.js";const x={title:"Components/Header Links",argTypes:{numElements:{name:"Quantitat d'elements",control:{type:"number",min:1,max:3}},hideHelp:{name:"Amaga enllaç Ajuda",control:{type:"boolean"}},helpLabel:{name:"Text enllaç Ajuda ",if:{arg:"hideHelp",eq:!1}},disableHelp:{name:"Deshabil·litar enllaç Ajuda",control:{type:"boolean"},if:{arg:"hideHelp",eq:!1}}},parameters:{layout:"centered"}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4096-34637&m=dev"}},args:{numElements:1,helpLabel:"Ajuda",hideHelp:!1,disableHelp:!1},render:l=>{const t=[{label:"Custom action",icon:"add_box"}];return Array.from({length:l.numElements-1},()=>{t.push({label:"Link",icon:"add_box"})}),d`
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
        `};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,c,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-header-links></dss-header-links>
        \`;
  }
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var h,g,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-header-links hideHelp></dss-header-links>
        \`;
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var k,H,f;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-header-links hideConfig></dss-header-links>
        \`;
  }
}`,...(f=(H=a.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};var y,S,C;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-header-links items='[{"label":"Custom action","icon":"add_box"},{"label":"Custom action","icon":"add_box"}]'></dss-header-links>
        \`;
  }
}`,...(C=(S=r.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const _=["Playground","ByDefault","HideHelp","HideConfig","CustomActions"],v=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:s,CustomActions:r,HideConfig:a,HideHelp:n,Playground:e,__namedExportsOrder:_,default:x},Symbol.toStringTag,{value:"Module"}));export{s as B,r as C,n as H,e as P,v as S,a};
