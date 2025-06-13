import"./lit-element-Dloa6E9d.js";import{x as e}from"./lit-html-D6a8R3xZ.js";import"./button-link-BzV0tBuW.js";const h={title:"Discontinuat/Button Link ⚠️",argTypes:{label:{name:"Text"},url:{name:"URL"},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",if:{arg:"showIcon"}},iconPosition:{name:"Posició de la icona",control:{type:"radio"},options:["left","right"],if:{arg:"showIcon"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=253-6126&m=dev"}},args:{label:"Button Link",url:"#",showIcon:!0,icon:"add_box",iconPosition:"left",disabled:!1},render:n=>e`
    ${n.showIcon?e`
        <dss-button-link label="${n.label}" linkHref="${n.url}" icon="${n.icon}" iconPosition="${n.iconPosition}" ?disabled="${n.disabled}"></dss-button-link>
      `:e`
        <dss-button-link label="${n.label}" linkHref="${n.url}" ?disabled="${n.disabled}"></dss-button-link>
      `}
    `},t={tags:["!dev"],render:()=>e`
    <dss-button-link label="Button link" linkHref="#"></dss-button-link>
    `},s={tags:["!dev"],render:()=>e`
    <div class="wrapper">
    <dss-button-link label="Left icon" linkHref="#" icon="add_box"></dss-button-link>
    <dss-button-link label="Right icon" linkHref="#" icon="add_box" iconPosition="right"></dss-button-link>
  </div>
    
    `},i={tags:["!dev"],render:()=>e`
      <dss-button-link label="Left icon" linkHref="javascript:void(0)" icon="add_box" disabled></dss-button-link>
    `};var r,a,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=253-6126&m=dev'
    }
  },
  args: {
    label: 'Button Link',
    url: '#',
    showIcon: true,
    icon: 'add_box',
    iconPosition: 'left',
    disabled: false
  },
  render: (args: any) => {
    return html\`
    \${args.showIcon ? html\`
        <dss-button-link label="\${args.label}" linkHref="\${args.url}" icon="\${args.icon}" iconPosition="\${args.iconPosition}" ?disabled="\${args.disabled}"></dss-button-link>
      \` : html\`
        <dss-button-link label="\${args.label}" linkHref="\${args.url}" ?disabled="\${args.disabled}"></dss-button-link>
      \`}
    \`;
  }
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var d,c,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <dss-button-link label="Button link" linkHref="#"></dss-button-link>
    \`;
  }
}`,...(b=(c=t.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var u,m,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
    <dss-button-link label="Left icon" linkHref="#" icon="add_box"></dss-button-link>
    <dss-button-link label="Right icon" linkHref="#" icon="add_box" iconPosition="right"></dss-button-link>
  </div>
    
    \`;
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var k,g,f;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button-link label="Left icon" linkHref="javascript:void(0)" icon="add_box" disabled></dss-button-link>
    \`;
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const $=["Playground","ByDefault","Icons","Disabled"],P=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:t,Disabled:i,Icons:s,Playground:o,__namedExportsOrder:$,default:h},Symbol.toStringTag,{value:"Module"}));export{t as B,i as D,s as I,o as P,P as S};
